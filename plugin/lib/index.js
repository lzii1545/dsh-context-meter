//#region lib/types/index.js
/** Host half of dsh-context-console:
 * 1. Serves the DeepSeek account balance through a local route (key never
 *    reaches the browser; one upstream call per 30s per process).
 * 2. Serves and edits the user's personal profile (~/.dsh/profile.md) so the
 *    settings page can manage it without touching the filesystem itself.
 * 3. Injects that profile into every conversation once per session, re-read on
 *    file change — the agent always knows who the user is and what they like. */
import { readFileSync, statSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { createMessage } from "@deepseek-ai/dsh-llm";
import { launchEnvironmentOf } from "@deepseek-ai/dsh-launch-environment";
const BALANCE_CACHE_MS = 30000;
const PROFILE_MAX_BYTES = 32000;
const PROFILE_PREFIX = "以下是你（用户）写下的个人说明，请记住并在对话中遵守：\n\n";
const inject = ["webServer", "systemPrompt"];
const name = "dsh-context-console";
function createUserMessage(input) {
	return createMessage({
		...input,
		role: "user"
	});
}
function profilePath() {
	const root = process.env.DSH_HOME ?? join(homedir(), ".dsh");
	return join(root, "profile.md");
}
function readProfileText() {
	try {
		return readFileSync(profilePath(), "utf8");
	} catch (error) {
		return "";
	}
}
/** 真实花费台账：官方余额下降一次记一笔，按天汇总。文件在 ~/.dsh/console-spend.json。 */
function spendLedgerPath() {
	return join(process.env.DSH_HOME ?? join(homedir(), ".dsh"), "console-spend.json");
}
function todayStamp() {
	const d = new Date();
	return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function readSpendLedger() {
	try {
		return JSON.parse(readFileSync(spendLedgerPath(), "utf8"));
	} catch (error) {
		return { lastBalance: null, total: 0, days: {} };
	}
}
/** 对比上次余额：下降（含充值后的下降）都算花费；上涨只更新基准，不产生负花费。 */
function recordSpend(currentBalance) {
	const ledger = readSpendLedger();
	if (typeof ledger.lastBalance === "number" && typeof currentBalance === "number") {
		const drop = ledger.lastBalance - currentBalance;
		if (drop >= 0.01) {
			const day = todayStamp();
			ledger.days[day] = (typeof ledger.days[day] === "number" ? ledger.days[day] : 0) + drop;
			ledger.total = (typeof ledger.total === "number" ? ledger.total : 0) + drop;
		}
	}
	ledger.lastBalance = currentBalance;
	try {
		writeFileSync(spendLedgerPath(), JSON.stringify(ledger), "utf8");
	} catch (error) {}
	return ledger;
}
/** 密钥解析和官方 DeepSeek 适配器走同一条链：先 credentials 服务，拿不到再
 * 退到启动环境（.credentials.yaml 由它读）。每一层的结果都带出来，方便排障。 */
async function resolveApiKey(ctx) {
	let detail;
	const credentials = ctx.get("credentials");
	if (credentials !== void 0 && typeof credentials.resolve === "function") {
		try {
			const hit = await credentials.resolve("DEEPSEEK_API_KEY");
			if (hit !== void 0 && typeof hit.value === "string" && hit.value.length > 0) {
				return { key: hit.value, source: "credentials", detail: void 0 };
			}
			detail = "credentials.resolve 返回空";
		} catch (error) {
			detail = String(error instanceof Error ? error.message : error);
		}
	} else {
		detail = "credentials 服务不可用";
	}
	try {
		const ambient = launchEnvironmentOf(ctx).get("DEEPSEEK_API_KEY");
		if (ambient !== void 0 && typeof ambient.value === "string" && ambient.value.length > 0) {
			return { key: ambient.value, source: "launch-environment", detail };
		}
		detail = (detail ?? "") + "；启动环境也没有";
	} catch (error) {
		detail = (detail ?? "") + "；启动环境读取失败：" + String(error instanceof Error ? error.message : error);
	}
	return { key: void 0, source: "none", detail };
}
function apply(ctx, config = {}) {
	/* 系统提示里钉一条硬规矩：动手前必须建列表。说明书是普通消息、权重低，
	 * 工具描述里还有"琐碎任务可跳过"的反向暗示，所以这条要进系统提示层。 */
	ctx.effect(() => ctx.systemPrompt.section({
		name: "dsh-context-console:todo-mandate",
		order: 120,
		text: "任何任务（包括看似单步的小任务）开始前，必须先调用 todo_write 建立任务列表：把任务拆成具体步骤，当前进行中的一项标 in_progress。每完成一项立即更新列表；全部完成后，列表中才允许没有 in_progress 项。没有列表直接动手视为违规。"
	}), "ui-console: todo mandate");
	let cache = null;
	/** 拉一次官方余额并记台账（不碰缓存）。扣费触发时客户端会带 fresh=1 走这里。 */
	const fetchUpstream = async () => {
		const resolved = await resolveApiKey(ctx);
		if (resolved.key === void 0) {
			return { ok: false, error: "missing-key", source: resolved.source, detail: resolved.detail };
		}
		try {
			const resp = await fetch("https://api.deepseek.com/user/balance", {
				headers: { Authorization: `Bearer ${resolved.key}` }
			});
			if (!resp.ok) throw new Error(`balance api ${resp.status}`);
			const data = await resp.json();
			const infos = Array.isArray(data.balance_infos) ? data.balance_infos : [];
			const current = infos.length > 0 ? Number(infos[0].total_balance) : void 0;
			const ledger = typeof current === "number" && Number.isFinite(current) ? recordSpend(current) : readSpendLedger();
			const day = todayStamp();
			return {
				ok: true,
				data,
				source: resolved.source,
				spend: {
					today: typeof ledger.days[day] === "number" ? ledger.days[day] : 0,
					total: typeof ledger.total === "number" ? ledger.total : 0
				}
			};
		} catch (error) {
			return { ok: false, error: String(error instanceof Error ? error.message : error), source: resolved.source };
		}
	};
	const balance = async () => {
		if (cache !== null && Date.now() - cache.at < BALANCE_CACHE_MS) return cache.value;
		const value = await fetchUpstream();
		cache = { value, at: Date.now() };
		return value;
	};
	/* Profile injection: once per session, refreshed when the file changes. */
	const profileCache = /* @__PURE__ */ new Map();
	if (config.profile !== false) {
		ctx.on("agent/pre-step", async ({ agent, turn, step, signal }, next) => {
			const decision = await next();
			if (decision.kind === "reject" || signal.aborted) return decision;
			const file = profilePath();
			let stat;
			try {
				stat = statSync(file);
			} catch (error) {
				return decision;
			}
			const sessionId = agent.session.id;
			const previous = profileCache.get(sessionId);
			if (previous !== void 0 && previous.mtimeMs === stat.mtimeMs && previous.size === stat.size) return decision;
			let text;
			try {
				text = readFileSync(file, "utf8");
			} catch (error) {
				return decision;
			}
			if (text.trim() === "") return decision;
			profileCache.set(sessionId, { mtimeMs: stat.mtimeMs, size: stat.size });
			if (text.length > PROFILE_MAX_BYTES) text = text.slice(0, PROFILE_MAX_BYTES) + "\n\n…(个人说明超过 32KB，已截断)";
			const full = PROFILE_PREFIX + text;
			return {
				kind: "enter",
				messages: [...decision.messages, createUserMessage({
					content: [{
						type: "text",
						text: full
					}],
					source: {
						kind: "plugin",
						plugin: name,
						form: "snapshot",
						sections: [{
							name,
							text: full
						}]
					}
				})]
			};
		}, { prepend: true });
	}
	ctx.effect(() => ctx.webServer.register({
		kind: "prefix",
		path: "/console-api",
		handler: async (req, res) => {
			const pathname = new URL(req.url ?? "/", "http://x").pathname;
			if (pathname === "/console-api/balance" && req.method === "GET") {
				const fresh = new URL(req.url ?? "/", "http://x").searchParams.get("fresh") === "1";
				const body = JSON.stringify(fresh ? await fetchUpstream() : await balance());
				res.writeHead(200, {
					"content-type": "application/json; charset=utf-8",
					"cache-control": "no-cache"
				});
				res.end(body);
				return;
			}
			if (pathname === "/console-api/profile") {
				if (req.method === "GET") {
					res.writeHead(200, {
						"content-type": "application/json; charset=utf-8",
						"cache-control": "no-cache"
					});
					res.end(JSON.stringify({ ok: true, text: readProfileText() }));
					return;
				}
				if (req.method === "POST") {
					try {
						const chunks = [];
						for await (const chunk of req) chunks.push(chunk);
						const parsed = JSON.parse(Buffer.concat(chunks).toString("utf8"));
						const text = typeof parsed.text === "string" ? parsed.text : "";
						if (text.length > PROFILE_MAX_BYTES) {
							res.writeHead(413, { "content-type": "application/json; charset=utf-8" });
							res.end(JSON.stringify({ ok: false, error: "too-large" }));
							return;
						}
						writeFileSync(profilePath(), text, "utf8");
						res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
						res.end(JSON.stringify({ ok: true }));
					} catch (error) {
						res.writeHead(400, { "content-type": "application/json; charset=utf-8" });
						res.end(JSON.stringify({ ok: false, error: String(error instanceof Error ? error.message : error) }));
					}
					return;
				}
			}
			res.writeHead(404);
			res.end();
		}
	}), "ui-console: api routes");
}
export { apply, inject, name };
//#endregion
