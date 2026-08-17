//#region lib/types/index.js
/** Host half of dsh-context-console: serves the DeepSeek account balance
 * through a local route so the browser HUD can show it without ever
 * holding the API key. One upstream call per 30s per process. */
const BALANCE_CACHE_MS = 30000;
const inject = ["webServer"];
function apply(ctx) {
	const credentials = ctx.get("credentials");
	let cache = null;
	const balance = async () => {
		if (cache !== null && Date.now() - cache.at < BALANCE_CACHE_MS) return cache.value;
		let key;
		if (credentials !== void 0) {
			try {
				const hit = await credentials.resolve("DEEPSEEK_API_KEY");
				if (hit !== void 0 && typeof hit.value === "string" && hit.value.length > 0) key = hit.value;
			} catch (error) {
				key = void 0;
			}
		}
		if (key === void 0) {
			const value = { ok: false, error: "missing-key" };
			cache = { value, at: Date.now() };
			return value;
		}
		try {
			const resp = await fetch("https://api.deepseek.com/user/balance", {
				headers: { Authorization: `Bearer ${key}` }
			});
			if (!resp.ok) throw new Error(`balance api ${resp.status}`);
			const data = await resp.json();
			const value = { ok: true, data };
			cache = { value, at: Date.now() };
			return value;
		} catch (error) {
			const value = { ok: false, error: String(error instanceof Error ? error.message : error) };
			cache = { value, at: Date.now() };
			return value;
		}
	};
	ctx.effect(() => ctx.webServer.register({
		kind: "prefix",
		path: "/console-api",
		handler: async (req, res) => {
			const pathname = new URL(req.url ?? "/", "http://x").pathname;
			if (req.method !== "GET" || pathname !== "/console-api/balance") {
				res.writeHead(404);
				res.end();
				return;
			}
			const body = JSON.stringify(await balance());
			res.writeHead(200, {
				"content-type": "application/json; charset=utf-8",
				"cache-control": "no-cache"
			});
			res.end(body);
		}
	}), "ui-console: balance route");
}
export { apply, inject };
//#endregion
