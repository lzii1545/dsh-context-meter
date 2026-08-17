window.__ModuleLoader__.load({
	id: "dsh-context-console",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let _deepseek_ai_dsh_client_runtime_client = require("@deepseek-ai/dsh-client-runtime/client");
//#region \0dsh-css:/home/runner/work/deepseek-harness/deepseek-harness/packages/client/ui-sidebar/src/client/ContextMeter.module.css.mjs
		const contextMeterCss = ".cxm-root{box-sizing:border-box;position:relative;flex:none;width:100%;min-width:0;font-family:-apple-system,BlinkMacSystemFont,\"SF Pro Text\",\"Segoe UI\",system-ui,sans-serif;letter-spacing:-.01em}.cxm-card{width:100%;margin:0;padding:10px 12px;border-radius:14px;background:var(--dsw-alias-bg-layer-2);background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 58%,transparent);border:1px solid var(--dsw-alias-border-l1);border:1px solid color-mix(in srgb,var(--dsw-alias-border-l1) 60%,transparent);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 1px 2px rgba(0,0,0,.05),0 6px 20px -8px rgba(0,0,0,.12);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);display:flex;flex-direction:column;gap:7px;animation:cxm-in .3s cubic-bezier(.22,1,.36,1);transition:transform .18s cubic-bezier(.22,1,.36,1),box-shadow .18s cubic-bezier(.22,1,.36,1)}.cxm-card:hover{transform:translateY(-1px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 2px 4px rgba(0,0,0,.06),0 10px 28px -8px rgba(0,0,0,.16)}@keyframes cxm-in{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:translateY(0)}}.cxm-rail{margin-top:0;padding:0;display:grid;place-items:center;width:36px;height:36px;border-radius:50%}.cxm-rail:hover{background:var(--dsw-alias-interactive-bg-hover)}.cxm-row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0}.cxm-label{font-size:12px;line-height:16px;color:var(--dsw-alias-label-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cxm-pct{flex:none;font-size:12px;line-height:16px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-primary)}.cxm-pct-blue{color:#0A84FF}.cxm-pct-orange{color:#FF9F0A}.cxm-pct-red{color:#FF453A}.cxm-pct-green{color:#30D158}.cxm-track{flex:none;height:4px;border-radius:999px;background:var(--dsw-alias-interactive-bg-hover);background:color-mix(in srgb,var(--dsw-alias-label-primary) 8%,transparent);overflow:hidden;box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.cxm-fill{height:100%;border-radius:999px;transition:width .3s cubic-bezier(.22,1,.36,1)}.cxm-fill-blue{background-color:#0A84FF}.cxm-fill-orange{background-color:#FF9F0A}.cxm-fill-red{background-color:#FF453A}.cxm-fill-green{background-color:#30D158}.cxm-fill-blue,.cxm-fill-orange,.cxm-fill-red,.cxm-fill-green{background-image:linear-gradient(180deg,rgba(255,255,255,.32),rgba(255,255,255,0) 55%)}.cxm-tip{position:absolute;left:50%;bottom:calc(100% + 8px);transform:translateX(-50%) translateY(4px) scale(.98);z-index:60;box-sizing:border-box;width:236px;padding:10px 12px;border-radius:14px;background:var(--dsw-alias-bg-overlay);background:color-mix(in srgb,var(--dsw-alias-bg-overlay) 78%,transparent);border:1px solid var(--dsw-alias-border-l1);border:1px solid color-mix(in srgb,var(--dsw-alias-border-l1) 65%,transparent);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 1px 2px rgba(0,0,0,.06),0 12px 32px -8px rgba(0,0,0,.22);backdrop-filter:blur(24px) saturate(180%);-webkit-backdrop-filter:blur(24px) saturate(180%);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .16s cubic-bezier(.22,1,.36,1),transform .16s cubic-bezier(.22,1,.36,1),visibility 0s linear .16s}.cxm-card:hover>.cxm-tip{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0) scale(1);transition:opacity .16s cubic-bezier(.22,1,.36,1),transform .16s cubic-bezier(.22,1,.36,1)}.cxm-tip-row{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:3px 0;font-size:12px;line-height:17px}.cxm-tip-key{flex:none;color:var(--dsw-alias-label-secondary)}.cxm-tip-val{min-width:0;color:var(--dsw-alias-label-primary);font-variant-numeric:tabular-nums;text-align:right}.cxm-ring-track{fill:none;stroke:var(--dsw-alias-border-l1);stroke:color-mix(in srgb,var(--dsw-alias-label-primary) 12%,transparent);stroke-width:2.5}.cxm-ring-fill{fill:none;stroke-width:2.5;stroke-linecap:round}.cxm-ring-blue{stroke:#0A84FF}.cxm-ring-orange{stroke:#FF9F0A}.cxm-ring-red{stroke:#FF453A}.cxm-card:first-child{margin-top:8px}.cxm-card:not(:first-child){margin-left:-100%;margin-top:57px}.cxm-balance-row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0}.cxm-balance-label{font-size:12px;line-height:16px;color:var(--dsw-alias-label-secondary);display:inline-flex;align-items:center;gap:4px}.cxm-balance-right{flex:none;display:inline-flex;align-items:center;gap:6px;font-variant-numeric:tabular-nums}.cxm-balance-value{font-size:12px;line-height:16px;font-weight:600;color:var(--dsw-alias-label-primary);transition:color .25s ease}.cxm-balance-value.cxm-hit{color:#FF453A}.cxm-today{font-size:11px;line-height:16px;color:var(--dsw-alias-label-secondary)}.cxm-dmg{position:absolute;right:12px;top:4px;z-index:5;pointer-events:none;font-size:12px;font-weight:600;font-variant-numeric:tabular-nums;color:#FF453A;animation:cxm-dmg-rise 1.1s cubic-bezier(.22,1,.36,1) forwards}@keyframes cxm-dmg-rise{0%{opacity:0;transform:translateY(2px) scale(.9)}18%{opacity:1}100%{opacity:0;transform:translateY(-20px) scale(1)}}.cxm-dmg-crit{font-size:16px;font-weight:700;color:#FF453A;text-shadow:0 1px 8px rgba(255,69,58,.55);animation:cxm-dmg-crit-rise 1.4s cubic-bezier(.22,1,.36,1) forwards}@keyframes cxm-dmg-crit-rise{0%{opacity:0;transform:translateY(4px) scale(.7) rotate(-2deg)}16%{opacity:1;transform:scale(1.14)}32%{transform:scale(1)}100%{opacity:0;transform:translateY(-30px) scale(1)}}.cxm-combo{flex:none;font-size:11px;line-height:16px;font-weight:600;color:#FF9F0A;animation:cxm-combo-pop .3s cubic-bezier(.22,1,.36,1)}@keyframes cxm-combo-pop{0%{transform:scale(.7);opacity:0}60%{transform:scale(1.15)}100%{transform:scale(1)}}.cxm-rank{flex:none;font-size:11px;line-height:16px;font-weight:500}";
		const contextMeterTagId = "dsh-context-console/ContextMeter.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(contextMeterTagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-context-console";
			tag.dataset.pluginCss = contextMeterTagId;
			tag.textContent = contextMeterCss;
			document.head.appendChild(tag);
		}
		var ContextMeter_module_css_default = {
			"root": "cxm-root",
			"card": "cxm-card",
			"rail": "cxm-rail",
			"row": "cxm-row",
			"label": "cxm-label",
			"pct": "cxm-pct",
			"pctBlue": "cxm-pct-blue",
			"pctOrange": "cxm-pct-orange",
			"pctRed": "cxm-pct-red",
			"pctGreen": "cxm-pct-green",
			"track": "cxm-track",
			"fill": "cxm-fill",
			"fillBlue": "cxm-fill-blue",
			"fillOrange": "cxm-fill-orange",
			"fillRed": "cxm-fill-red",
			"fillGreen": "cxm-fill-green",
			"tip": "cxm-tip",
			"tipRow": "cxm-tip-row",
			"tipKey": "cxm-tip-key",
			"tipVal": "cxm-tip-val",
			"ringTrack": "cxm-ring-track",
			"ringFill": "cxm-ring-fill",
			"ringBlue": "cxm-ring-blue",
			"ringOrange": "cxm-ring-orange",
			"ringRed": "cxm-ring-red",
			"balanceRow": "cxm-balance-row",
			"balanceLabel": "cxm-balance-label",
			"balanceRight": "cxm-balance-right",
			"balanceValue": "cxm-balance-value",
			"hit": "cxm-hit",
			"today": "cxm-today",
			"dmg": "cxm-dmg",
			"dmgCrit": "cxm-dmg-crit",
			"combo": "cxm-combo",
			"rank": "cxm-rank"
		};
		//#endregion
		//#region \0dsh-css:/home/runner/work/deepseek-harness/deepseek-harness/packages/client/ui-sidebar/src/client/ContextIsland.module.css.mjs
		const contextIslandCss = ".isl-root{position:absolute;top:100px;left:50%;transform:translateX(-50%);pointer-events:auto;width:56px;height:24px;border-radius:999px;background:rgba(17,17,19,.92);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 10px 30px rgba(0,0,0,.32);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);cursor:pointer;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,\"SF Pro Text\",\"Segoe UI\",system-ui,sans-serif;transition:width .4s cubic-bezier(.32,.72,0,1),height .4s cubic-bezier(.32,.72,0,1)}.isl-root[data-phase=open]{width:320px;height:48px}.isl-root[data-phase=ball]{animation:isl-pop .34s cubic-bezier(.32,.72,0,1)}.isl-root[data-phase=closing]{animation:isl-out .24s ease forwards}@keyframes isl-pop{0%{opacity:0;transform:translateX(-50%) scale(.4)}60%{opacity:1;transform:translateX(-50%) scale(1.06)}100%{transform:translateX(-50%) scale(1)}}@keyframes isl-out{to{opacity:0;transform:translateX(-50%) scale(.7)}}.isl-layer{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:8px;padding:0 16px}.isl-body-layer{opacity:0;justify-content:flex-start;transition:opacity .22s ease .14s}.isl-root[data-phase=open] .isl-body-layer{opacity:1}.isl-ball-layer{transition:opacity .16s ease}.isl-root[data-phase=open] .isl-ball-layer{opacity:0}.isl-icon{flex:none;width:16px;height:16px}.isl-text{min-width:0;display:flex;flex-direction:column;gap:1px}.isl-title{font-size:12px;line-height:16px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:180px}.isl-detail{font-size:11px;line-height:14px;color:rgba(255,255,255,.72);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:180px}.isl-action{flex:none;margin-left:auto;height:24px;padding:0 10px;border-radius:999px;border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.12);color:#fff;font-size:11px;font-family:inherit;cursor:pointer;white-space:nowrap}.isl-action:hover{background:rgba(255,255,255,.2)}.isl-granted{flex:none;margin-left:auto;font-size:11px;color:rgba(255,255,255,.6);white-space:nowrap}@media (prefers-reduced-motion:reduce){.isl-root{transition:none}.isl-root[data-phase=ball],.isl-root[data-phase=closing]{animation:none}}";
		const contextIslandTagId = "dsh-context-console/ContextIsland.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(contextIslandTagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-context-console";
			tag.dataset.pluginCss = contextIslandTagId;
			tag.textContent = contextIslandCss;
			document.head.appendChild(tag);
		}
		var ContextIsland_module_css_default = {
			"root": "isl-root",
			"layer": "isl-layer",
			"ballLayer": "isl-ball-layer",
			"bodyLayer": "isl-body-layer",
			"icon": "isl-icon",
			"text": "isl-text",
			"title": "isl-title",
			"detail": "isl-detail",
			"action": "isl-action",
			"granted": "isl-granted"
		};
		//#endregion
		//#region \0dsh-css:/home/runner/work/deepseek-harness/deepseek-harness/packages/client/ui-sidebar/src/client/IslandSettings.module.css.mjs
		const islandSettingsCss = ".iset-root{display:flex;flex-direction:column;gap:10px;padding:4px 0}.iset-group{border-radius:12px;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l1);overflow:hidden}.iset-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;min-height:44px}.iset-row+.iset-row{border-top:1px solid var(--dsw-alias-border-l1)}.iset-text{min-width:0}.iset-label{font-size:13px;line-height:18px;color:var(--dsw-alias-label-primary)}.iset-sub{font-size:11px;line-height:15px;color:var(--dsw-alias-label-secondary);margin-top:1px}.iset-switch{position:relative;flex:none;width:38px;height:22px;border-radius:999px;border:none;padding:0;background:rgba(120,120,128,.3);cursor:pointer;transition:background .2s ease}.iset-switch[data-on=true]{background:#30D158}.iset-switch:after{content:\"\";position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.25);transition:transform .2s cubic-bezier(.32,.72,0,1)}.iset-switch[data-on=true]:after{transform:translateX(16px)}.iset-btn{flex:none;height:28px;padding:0 14px;border-radius:999px;border:none;background:#0A84FF;color:#fff;font-size:12px;font-weight:500;cursor:pointer;font-family:inherit;transition:opacity .15s ease}.iset-btn:hover{opacity:.85}.iset-test{align-self:flex-start}.iset-status{flex:none;font-size:12px;color:var(--dsw-alias-label-secondary)}";
		const islandSettingsTagId = "dsh-context-console/IslandSettings.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(islandSettingsTagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-context-console";
			tag.dataset.pluginCss = islandSettingsTagId;
			tag.textContent = islandSettingsCss;
			document.head.appendChild(tag);
		}
		var IslandSettings_module_css_default = {
			"root": "iset-root",
			"group": "iset-group",
			"row": "iset-row",
			"text": "iset-text",
			"label": "iset-label",
			"sub": "iset-sub",
			"switch": "iset-switch",
			"btn": "iset-btn",
			"test": "iset-test",
			"status": "iset-status"
		};
		//#endregion
		//#region \0dsh-css:/home/runner/work/deepseek-harness/deepseek-harness/packages/client/ui-console/src/client/PlanBoard.module.css.mjs
		const planBoardCss = ".cpl-root{width:100%;display:flex;justify-content:center;padding:0 var(--dsh-composer-side-clearance);margin-bottom:15px}.cpl-card{box-sizing:border-box;position:relative;width:max-content;max-width:var(--dsh-chat-content-width);border-radius:999px;background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 66%,transparent);border:1px solid color-mix(in srgb,var(--dsw-alias-border-l1) 70%,transparent);box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 2px 10px -2px rgba(0,0,0,.08);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%)}.cpl-pill{display:flex;align-items:center;gap:6px;padding:5px 8px 5px 10px;min-height:28px;cursor:pointer;border-radius:999px;transition:background .15s ease}.cpl-pill:hover{background:color-mix(in srgb,var(--dsw-alias-label-primary) 6%,transparent)}.cpl-icon{flex:none;width:14px;height:14px;color:var(--dsw-alias-label-secondary);display:grid;place-items:center}.cpl-title{flex:none;font-size:12px;line-height:16px;color:var(--dsw-alias-label-secondary)}.cpl-sep{flex:none;width:1px;height:10px;background:color-mix(in srgb,var(--dsw-alias-label-secondary) 25%,transparent)}.cpl-dot{flex:none;width:6px;height:6px;border-radius:50%;background:#30D158;animation:cpl-pulse 1.6s ease-in-out infinite}.cpl-current{font-size:12px;line-height:16px;color:var(--dsw-alias-label-primary);min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cpl-count{flex:none;font-size:11px;line-height:15px;padding:0 6px;border-radius:999px;background:color-mix(in srgb,var(--dsw-alias-label-primary) 8%,transparent);color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums}.cpl-body{position:absolute;left:50%;bottom:calc(100% + 8px);transform:translateX(-50%);box-sizing:border-box;width:max-content;min-width:300px;max-width:min(380px,calc(100vw - 40px));border-radius:18px;padding:10px 12px 8px;background:color-mix(in srgb,var(--dsw-alias-bg-overlay) 92%,transparent);border:1px solid color-mix(in srgb,var(--dsw-alias-border-l1) 70%,transparent);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 2px 6px rgba(0,0,0,.06),0 16px 40px -10px rgba(0,0,0,.28);backdrop-filter:blur(28px) saturate(190%);-webkit-backdrop-filter:blur(28px) saturate(190%);max-height:0;overflow:hidden;opacity:0;transition:max-height .28s cubic-bezier(.22,1,.36,1),opacity .18s ease}.cpl-root[data-open=true] .cpl-body{max-height:300px;opacity:1;overflow-y:auto;scrollbar-width:thin}.cpl-body::-webkit-scrollbar{width:5px}.cpl-body::-webkit-scrollbar-thumb{background:var(--dsw-alias-scrollbar-bg-l2,rgba(120,120,128,.4));border-radius:999px}.cpl-body::-webkit-scrollbar-track{background:transparent}.cpl-body:after{content:\"\";position:absolute;left:0;right:0;top:100%;height:8px}.cpl-head{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:0 2px 6px}.cpl-head-title{font-size:11px;line-height:16px;font-weight:600;letter-spacing:.02em;color:var(--dsw-alias-label-secondary)}.cpl-head-count{font-size:11px;line-height:16px;color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums}.cpl-bar{height:3px;margin:0 2px 6px;border-radius:999px;background:color-mix(in srgb,var(--dsw-alias-label-primary) 7%,transparent);overflow:hidden}.cpl-bar-fill{height:100%;border-radius:999px;background:#30D158;transition:width .3s cubic-bezier(.22,1,.36,1)}.cpl-list{list-style:none;margin:0;padding:0 2px;display:flex;flex-direction:column}.cpl-item{display:flex;align-items:flex-start;gap:8px;font-size:12px;line-height:18px;padding:4px 6px;border-radius:8px;transition:background .15s ease}.cpl-item:hover{background:color-mix(in srgb,var(--dsw-alias-label-primary) 5%,transparent)}.cpl-content{min-width:0}.cpl-item[data-status=completed]{color:var(--dsw-alias-label-secondary)}.cpl-item[data-status=completed] .cpl-content{text-decoration:line-through;opacity:.7}.cpl-item[data-status=pending]{color:var(--dsw-alias-label-secondary)}.cpl-item[data-status=in_progress]{font-weight:600}.cpl-glyph{flex:none;width:16px;height:16px;margin-top:1px;display:grid;place-items:center}.cpl-glyph-dot{animation:cpl-pulse 1.4s ease-in-out infinite;transform-origin:8px 8px}@keyframes cpl-pulse{0%,100%{opacity:.4;transform:scale(.8)}50%{opacity:1;transform:scale(1.1)}}";
		const planBoardTagId = "dsh-context-console/PlanBoard.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(planBoardTagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-context-console";
			tag.dataset.pluginCss = planBoardTagId;
			tag.textContent = planBoardCss;
			document.head.appendChild(tag);
		}
		var PlanBoard_module_css_default = {
			"root": "cpl-root",
			"card": "cpl-card",
			"pill": "cpl-pill",
			"title": "cpl-title",
			"dot": "cpl-dot",
			"current": "cpl-current",
			"count": "cpl-count",
			"body": "cpl-body",
			"bar": "cpl-bar",
			"barFill": "cpl-bar-fill",
			"list": "cpl-list",
			"item": "cpl-item",
			"content": "cpl-content",
			"glyph": "cpl-glyph",
			"icon": "cpl-icon",
			"sep": "cpl-sep",
			"head": "cpl-head",
			"headTitle": "cpl-head-title",
			"headCount": "cpl-head-count"
		};
		//#endregion
		//#region lib/types/client/ContextMeter.js
		/** Sidebar-foot context-occupancy and cache-hit meter rendered in the
		* sidebar foot (`sidebar.footer.action`): two progress bars fed by the
		* session list's host-computed `tokenUsage`, `contextPressure`, and
		* `contextBreakdown` projections for the current conversation, and a
		* compact ring in the collapsed rail. */
		const CIRCUMFERENCE = 2 * Math.PI * 5.5;
		/** Compact token count: 517 / 12.2K / 517K / 1.2M (one decimal under three digits). */
		function formatTokens(n) {
			if (typeof n !== "number" || !Number.isFinite(n) || n < 0) return "—";
			const scaled = (v) => v >= 100 ? String(Math.round(v)) : String(Math.round(v * 10) / 10);
			if (n < 1e3) return String(n);
			if (n < 1e6) return scaled(n / 1e3) + "K";
			return scaled(n / 1e6) + "M";
		}
		/** Context occupancy from the `contextPressure` projection, or null until both figures are known. */
		function occupancyOf(pressure) {
			if (pressure === void 0 || pressure === null || typeof pressure !== "object") return null;
			const used = pressure.projectedTokens !== void 0 ? pressure.projectedTokens : pressure.pressureTokens;
			const win = pressure.contextWindow;
			if (typeof used !== "number" || typeof win !== "number" || win <= 0) return null;
			return {
				percent: Math.max(0, Math.min(100, Math.round(used / win * 100))),
				used,
				window: win
			};
		}
		/** Cache-hit share of prompt-side input from the `tokenUsage` projection, or null until input was billed. */
		function cacheOf(usage) {
			if (usage === void 0 || usage === null || typeof usage !== "object") return null;
			const miss = typeof usage.uncachedInputTokens === "number" ? usage.uncachedInputTokens : 0;
			const read = typeof usage.cacheReadTokens === "number" ? usage.cacheReadTokens : 0;
			const write = typeof usage.cacheWriteTokens === "number" ? usage.cacheWriteTokens : 0;
			const billed = miss + read + write;
			if (billed <= 0) return null;
			return {
				percent: Math.max(0, Math.min(100, Math.round(read / billed * 100))),
				read,
				miss,
				write
			};
		}
		/** Apple-semantic pressure color: blue under 60%, orange under 85%, red beyond. */
		function pressureState(percent) {
			if (percent >= 85) return "red";
			if (percent >= 60) return "orange";
			return "blue";
		}
		/** Money formatting: two decimals for balances, four for per-message costs. */
		function formatYuan(n, digits) {
			if (typeof n !== "number" || !Number.isFinite(n) || n < 0) return "—";
			return "¥" + n.toFixed(digits === void 0 ? 2 : digits);
		}
		/** Estimated DeepSeek chat cost (CNY) of one usage delta, split by bucket:
		* uncached input ¥2/M, cache reads ¥0.5/M, cache writes ¥2/M, output ¥8/M.
		* `miss` includes cache writes (both are the "expensive" family). Estimates. */
		function costOfDelta(next, prev) {
			if (prev === void 0 || next === void 0) return { miss: 0, hit: 0, output: 0, total: 0 };
			const miss = Math.max(0, (next.uncachedInputTokens ?? 0) - (prev.uncachedInputTokens ?? 0));
			const read = Math.max(0, (next.cacheReadTokens ?? 0) - (prev.cacheReadTokens ?? 0));
			const write = Math.max(0, (next.cacheWriteTokens ?? 0) - (prev.cacheWriteTokens ?? 0));
			const output = Math.max(0, (next.outputTokens ?? 0) - (prev.outputTokens ?? 0));
			const missYuan = (miss + write) * 2 / 1e6;
			const hitYuan = read * 0.5 / 1e6;
			const outputYuan = output * 8 / 1e6;
			return { miss: missYuan, hit: hitYuan, output: outputYuan, total: missYuan + hitYuan + outputYuan };
		}
		/** Spend ranks: all-time cumulative estimate unlocks a title, from
		* freeloader to full-blown money burner. */
		const SPEND_RANKS = [
			{ threshold: 0, key: "meter.rank0", color: "#8A9A8A" },
			{ threshold: 0.1, key: "meter.rank1", color: "#30D158" },
			{ threshold: 1, key: "meter.rank2", color: "#2DD4BF" },
			{ threshold: 5, key: "meter.rank3", color: "#0A84FF" },
			{ threshold: 20, key: "meter.rank4", color: "#FF9F0A" },
			{ threshold: 50, key: "meter.rank5", color: "#B07EF5" },
			{ threshold: 100, key: "meter.rank6", color: "#FF453A" },
			{ threshold: 500, key: "meter.rank7", color: "#D9A441" }
		];
		function rankOf(total) {
			let rank = null;
			for (const candidate of SPEND_RANKS) if (total >= candidate.threshold) rank = candidate;
			return rank;
		}
		/** Local persistence for the HUD: last known balance and today's spend. */
		const BALANCE_STORE_KEY = "dsh-context-console.balance-state";
		function todayKey() {
			const d = new Date();
			return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
		}
		function loadBalanceState() {
			try {
				const raw = localStorage.getItem(BALANCE_STORE_KEY);
				if (raw === null) return { balance: null, today: 0, date: "" };
				const parsed = JSON.parse(raw);
				const parts = parsed.parts;
				const num = (value) => typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : 0;
				return {
					balance: typeof parsed.balance === "string" ? parsed.balance : null,
					parts: parts !== null && typeof parts === "object" ? { miss: num(parts.miss), hit: num(parts.hit), output: num(parts.output) } : { miss: 0, hit: 0, output: 0 },
					combo: num(parsed.combo),
					best: num(parsed.best),
					total: num(parsed.total),
					date: typeof parsed.date === "string" ? parsed.date : ""
				};
			} catch (error) {
				return { balance: null, parts: { miss: 0, hit: 0, output: 0 }, combo: 0, best: 0, total: 0, date: "" };
			}
		}
		/** Read one projection leaf off the current session's list row. */
		function projectionOf(s, key) {
			if (s === void 0 || s === null || s.byId === void 0) return void 0;
			const row = s.byId[s.current];
			const pv = row === void 0 ? void 0 : row.projectionValues;
			return pv === void 0 ? void 0 : pv[key];
		}
		function ContextMeter({ wide, useSessions, useStore, t }) {
			const currentId = useSessions((s) => s === void 0 ? void 0 : s.current);
			const usage = useSessions((s) => projectionOf(s, "tokenUsage"));
			const pressure = useSessions((s) => projectionOf(s, "contextPressure"));
			const breakdown = useSessions((s) => projectionOf(s, "contextBreakdown"));
			const critFx = useStore((s) => s.critFx !== false);
			const initialBalance = loadBalanceState();
			const [balanceText, setBalanceText] = (0, react.useState)(initialBalance.balance);
			const [balanceFresh, setBalanceFresh] = (0, react.useState)(false);
			const [hitFlash, setHitFlash] = (0, react.useState)(false);
			const [dmgList, setDmgList] = (0, react.useState)([]);
			const [todayParts, setTodayParts] = (0, react.useState)(initialBalance.date === todayKey() ? initialBalance.parts : { miss: 0, hit: 0, output: 0 });
			const [combo, setCombo] = (0, react.useState)(initialBalance.date === todayKey() ? initialBalance.combo : 0);
			const [bestCombo, setBestCombo] = (0, react.useState)(initialBalance.best);
			const [totalSpend, setTotalSpend] = (0, react.useState)(initialBalance.total);
			const todayCost = todayParts.miss + todayParts.hit + todayParts.output;
			const rank = rankOf(totalSpend);
			const prevUsageRef = (0, react.useRef)(void 0);
			const dmgSeqRef = (0, react.useRef)(0);
			/** Balance polling: the host half serves /console-api/balance from the
			* official account API (key never reaches the browser); refresh 30s. */
			(0, react.useEffect)(() => {
				let alive = true;
				const tick = () => {
					fetch("/console-api/balance").then((resp) => resp.json()).then((value) => {
						if (!alive || value === null || typeof value !== "object" || value.ok !== true) return;
						const infos = value.data === void 0 ? void 0 : value.data.balance_infos;
						if (Array.isArray(infos) && infos.length > 0 && infos[0] !== null && typeof infos[0] === "object") {
							setBalanceText(formatYuan(Number(infos[0].total_balance), 2));
							setBalanceFresh(true);
						}
					}).catch(() => {});
				};
				tick();
				const timer = window.setInterval(tick, 30000);
				return () => {
					alive = false;
					window.clearInterval(timer);
				};
			}, []);
			/** Persist last balance + today's spend across reloads (daily reset). */
			(0, react.useEffect)(() => {
				try {
					localStorage.setItem(BALANCE_STORE_KEY, JSON.stringify({ balance: balanceText, parts: todayParts, combo, best: bestCombo, total: totalSpend, date: todayKey() }));
				} catch (error) {}
			}, [balanceText, todayParts, combo, bestCombo, totalSpend]);
			/** Cost detection: each usage delta over ¥0.001 fires the hit effect;
			* a delta whose uncached/write share is ≥40% fires the crit variant;
			* input cache-hit rate ≥80% extends the combo, anything lower breaks it. */
			(0, react.useEffect)(() => {
				if (usage === void 0) return;
				const prev = prevUsageRef.current;
				prevUsageRef.current = usage;
				const cost = costOfDelta(usage, prev);
				if (cost.total < 0.001) return;
				const crit = critFx && cost.total > 0 && cost.miss / cost.total >= 0.4;
				const inputYuan = cost.miss + cost.hit;
				const hitShare = inputYuan > 0 ? cost.hit / inputYuan : -1;
				setTodayParts((parts) => ({ miss: parts.miss + cost.miss, hit: parts.hit + cost.hit, output: parts.output + cost.output }));
				setTotalSpend((sum) => sum + cost.total);
				if (hitShare >= 0.8) {
					setCombo((n) => {
						const next = n + 1;
						setBestCombo((best) => Math.max(best, next));
						return next;
					});
				} else if (hitShare >= 0) {
					setCombo(0);
				}
				setHitFlash(true);
				const id = dmgSeqRef.current++;
				setDmgList((list) => list.concat({ id, text: (crit ? t("meter.crit") + " " : "") + "-" + formatYuan(cost.total, 4), crit }));
				const flashTimer = window.setTimeout(() => setHitFlash(false), crit ? 600 : 260);
				const dmgTimer = window.setTimeout(() => setDmgList((list) => list.filter((item) => item.id !== id)), crit ? 1500 : 1200);
				return () => {
					window.clearTimeout(flashTimer);
					window.clearTimeout(dmgTimer);
				};
			}, [usage, critFx]);
			if (currentId === void 0) return null;
			const occ = occupancyOf(pressure);
			const cache = cacheOf(usage);
			const occText = occ === null ? "—" : occ.percent + "%";
			const cacheText = cache === null ? "—" : cache.percent + "%";
			const occState = occ === null ? "blue" : pressureState(occ.percent);
			const stateSuffix = occState.charAt(0).toUpperCase() + occState.slice(1);
			const tipRows = [{
				key: t("meter.balance"),
				value: balanceText === null ? t("meter.balanceUnknown") : (balanceFresh ? "" : t("meter.last") + " ") + balanceText + (todayCost > 0 ? " · " + t("meter.today") + " -" + formatYuan(todayCost, 4) : "")
			}];
			if (todayCost > 0) {
				tipRows.push({ key: t("meter.todayMiss"), value: "-" + formatYuan(todayParts.miss, 4) });
				tipRows.push({ key: t("meter.todayHit"), value: "-" + formatYuan(todayParts.hit, 4) });
				tipRows.push({ key: t("meter.todayOutput"), value: "-" + formatYuan(todayParts.output, 4) });
			}
			if (totalSpend > 0) tipRows.push({ key: t("meter.total"), value: formatYuan(totalSpend, 2) + (rank !== null ? " · " + t(rank.key) : "") });
			if (bestCombo > 0) tipRows.push({ key: t("meter.bestCombo"), value: "×" + bestCombo });
			tipRows.push({
				key: t("meter.tipContext"),
				value: occ === null ? t("meter.tipNoData") : "~" + formatTokens(occ.used) + " / " + formatTokens(occ.window) + " · " + occ.percent + "%"
			}, {
				key: t("meter.tipCache"),
				value: cache === null ? t("meter.tipNoData") : cache.percent + "%（" + t("meter.tipHit") + " " + formatTokens(cache.read) + " · " + t("meter.tipMiss") + " " + formatTokens(cache.miss) + " · " + t("meter.tipWrite") + " " + formatTokens(cache.write) + "）"
			});
			if (breakdown !== void 0 && breakdown !== null) tipRows.push({
				key: t("meter.tipComposition"),
				value: t("meter.tipSystem") + " " + formatTokens(breakdown.systemTokens) + " · " + t("meter.tipTools") + " " + formatTokens(breakdown.toolsTokens) + " · " + t("meter.tipMessages") + " " + formatTokens(breakdown.messageTokens)
			});
			if (wide) {
				return (0, react_jsx_runtime.jsxs)("div", {
					className: ContextMeter_module_css_default.root + " " + ContextMeter_module_css_default.card,
					children: [(0, react_jsx_runtime.jsxs)("div", {
						className: ContextMeter_module_css_default.balanceRow,
						children: [(0, react_jsx_runtime.jsxs)("span", {
							className: ContextMeter_module_css_default.balanceLabel,
							children: [t("meter.balance"), combo >= 2 ? (0, react_jsx_runtime.jsx)("span", {
								className: ContextMeter_module_css_default.combo,
								key: combo,
								children: t("meter.combo", { n: combo })
							}) : null]
						}), (0, react_jsx_runtime.jsxs)("span", {
							className: ContextMeter_module_css_default.balanceRight,
							children: [(0, react_jsx_runtime.jsx)("span", {
								className: ContextMeter_module_css_default.balanceValue + (hitFlash ? " " + ContextMeter_module_css_default.hit : ""),
								children: balanceText === null ? "" : (balanceFresh ? "" : t("meter.last") + " ") + balanceText
							}), rank !== null ? (0, react_jsx_runtime.jsx)("span", {
								className: ContextMeter_module_css_default.rank,
								style: { color: rank.color },
								children: t(rank.key)
							}) : null, todayCost > 0 ? (0, react_jsx_runtime.jsx)("span", {
								className: ContextMeter_module_css_default.today,
								children: t("meter.today") + " -" + formatYuan(todayCost, 4)
							}) : null]
						})]
					}), (0, react_jsx_runtime.jsxs)("div", {
						className: ContextMeter_module_css_default.row,
						children: [(0, react_jsx_runtime.jsx)("span", {
							className: ContextMeter_module_css_default.label,
							children: t("meter.context")
						}), (0, react_jsx_runtime.jsx)("span", {
							className: ContextMeter_module_css_default.pct + " " + ContextMeter_module_css_default["pct" + stateSuffix],
							children: occText
						})]
					}), (0, react_jsx_runtime.jsx)("div", {
						className: ContextMeter_module_css_default.track,
						children: (0, react_jsx_runtime.jsx)("div", {
							className: ContextMeter_module_css_default.fill + " " + ContextMeter_module_css_default["fill" + stateSuffix],
							style: { width: (occ === null ? 0 : occ.percent) + "%" }
						})
					}), (0, react_jsx_runtime.jsxs)("div", {
						className: ContextMeter_module_css_default.row,
						children: [(0, react_jsx_runtime.jsx)("span", {
							className: ContextMeter_module_css_default.label,
							children: t("meter.cache")
						}), (0, react_jsx_runtime.jsx)("span", {
							className: ContextMeter_module_css_default.pct + " " + ContextMeter_module_css_default.pctGreen,
							children: cacheText
						})]
					}), (0, react_jsx_runtime.jsx)("div", {
						className: ContextMeter_module_css_default.track,
						children: (0, react_jsx_runtime.jsx)("div", {
							className: ContextMeter_module_css_default.fill + " " + ContextMeter_module_css_default.fillGreen,
							style: { width: (cache === null ? 0 : cache.percent) + "%" }
						})
					}), dmgList.map((item) => (0, react_jsx_runtime.jsx)("span", {
						className: ContextMeter_module_css_default.dmg + (item.crit ? " " + ContextMeter_module_css_default.dmgCrit : ""),
						key: item.id,
						children: item.text
					})), (0, react_jsx_runtime.jsx)("div", {
						className: ContextMeter_module_css_default.tip,
						role: "tooltip",
						children: tipRows.map((row, i) => (0, react_jsx_runtime.jsxs)("div", {
							className: ContextMeter_module_css_default.tipRow,
							key: i,
							children: [(0, react_jsx_runtime.jsx)("span", {
								className: ContextMeter_module_css_default.tipKey,
								children: row.key
							}), (0, react_jsx_runtime.jsx)("span", {
								className: ContextMeter_module_css_default.tipVal,
								children: row.value
							})]
						}))
					})]
				});
			}
			const titleText = tipRows.map((row) => row.key + "：" + row.value).join(" · ");
			const ringPercent = occ === null ? 0 : occ.percent;
			return (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
				label: titleText,
				delayMs: 400,
				children: (0, react_jsx_runtime.jsx)("div", {
					className: ContextMeter_module_css_default.root + " " + ContextMeter_module_css_default.rail,
					"aria-label": titleText,
					children: (0, react_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 14 14",
						width: "16",
						height: "16",
						"aria-hidden": true,
						children: [(0, react_jsx_runtime.jsx)("circle", {
							className: ContextMeter_module_css_default.ringTrack,
							cx: "7",
							cy: "7",
							r: "5.5"
						}), (0, react_jsx_runtime.jsx)("circle", {
							className: ContextMeter_module_css_default.ringFill + " " + ContextMeter_module_css_default["ring" + stateSuffix],
							cx: "7",
							cy: "7",
							r: "5.5",
							strokeDasharray: ringPercent / 100 * CIRCUMFERENCE + " " + CIRCUMFERENCE,
							transform: "rotate(-90 7 7)"
						})]
					})
				})
			});
		}
		//#endregion
		//#region lib/types/client/ContextIsland.js
		/** Dynamic-Island style notification pill rendered through `shell.overlay`:
		* pops in as a small capsule at the top center and springs open to show the
		* finished background session, a pending approval, or a finished background
		* job — only while the app is unfocused, with a desktop notification when
		* the tab is hidden and permission was granted. */
		const ISLAND_BALL_MS = 340;
		const ISLAND_OPEN_MS = 3600;
		const ISLAND_CLOSE_MS = 240;
		const DONE_COOLDOWN_MS = 30000;
		/** Notification glyph: green check (done), amber exclamation (approval), blue dot (job). */
		function IslandIcon({ kind }) {
			const color = kind === "done" ? "#30D158" : kind === "approval" ? "#FF9F0A" : "#0A84FF";
			return (0, react_jsx_runtime.jsxs)("svg", {
				className: ContextIsland_module_css_default.icon,
				viewBox: "0 0 16 16",
				width: "16",
				height: "16",
				"aria-hidden": true,
				children: [(0, react_jsx_runtime.jsx)("circle", {
					cx: "8",
					cy: "8",
					r: "7",
					fill: color
				}), kind === "done" ? (0, react_jsx_runtime.jsx)("path", {
					d: "M4.6 8.4l2.3 2.3 4.5-5",
					stroke: "#fff",
					strokeWidth: "1.6",
					fill: "none",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}) : kind === "approval" ? (0, react_jsx_runtime.jsxs)("g", {
					fill: "#fff",
					children: [(0, react_jsx_runtime.jsx)("rect", { x: "7.3", y: "4", width: "1.4", height: "5.4", rx: "0.7" }), (0, react_jsx_runtime.jsx)("rect", { x: "7.3", y: "10.8", width: "1.4", height: "1.4", rx: "0.7" })]
				}) : (0, react_jsx_runtime.jsx)("circle", {
					cx: "8",
					cy: "8",
					r: "2.4",
					fill: "#fff"
				})]
			});
		}
		function ContextIsland({ useSessions, useStore, t, onOpen }) {
			const rows = useSessions((s) => s === void 0 ? void 0 : s.byId);
			const jobs = useSessions((s) => s === void 0 ? void 0 : s.jobsBySession);
			const enabled = useStore((s) => s.enabled === true);
			const [focused, setFocused] = (0, react.useState)(typeof document !== "undefined" ? document.hasFocus() && document.visibilityState === "visible" : true);
			const [hidden, setHidden] = (0, react.useState)(typeof document !== "undefined" ? document.hidden : false);
			const [notice, setNotice] = (0, react.useState)(null);
			const [phase, setPhase] = (0, react.useState)("gone");
			const [perm, setPerm] = (0, react.useState)(typeof Notification !== "undefined" ? Notification.permission : "unsupported");
			const focusedRef = (0, react.useRef)(focused);
			const noticeRef = (0, react.useRef)(notice);
			const queueRef = (0, react.useRef)([]);
			const prevRef = (0, react.useRef)(null);
			const cooldownRef = (0, react.useRef)({});
			const timersRef = (0, react.useRef)([]);
			const enabledRef = (0, react.useRef)(enabled);
			focusedRef.current = focused;
			noticeRef.current = notice;
			enabledRef.current = enabled;
			const clearTimers = () => {
				for (const timer of timersRef.current) window.clearTimeout(timer);
				timersRef.current = [];
			};
			const after = (ms, fn) => {
				timersRef.current.push(window.setTimeout(fn, ms));
			};
			(0, react.useEffect)(() => {
				const update = () => {
					setFocused(document.hasFocus() && document.visibilityState === "visible");
					setHidden(document.hidden);
				};
				document.addEventListener("visibilitychange", update);
				window.addEventListener("focus", update);
				window.addEventListener("blur", update);
				return () => {
					document.removeEventListener("visibilitychange", update);
					window.removeEventListener("focus", update);
					window.removeEventListener("blur", update);
				};
			}, []);
			/** Manual test trigger from the settings page (bypasses the focus gate). */
			(0, react.useEffect)(() => islandBus.on((event) => {
				if (event.kind !== "test") return;
				if (!enabledRef.current) return;
				queueRef.current.push({ kind: "test", sessionId: void 0, title: t("island.testTitle") });
				if (noticeRef.current === null) {
					const next = queueRef.current.shift();
					if (next !== void 0) {
						setNotice(next);
						setPhase("ball");
					}
				}
			}), []);
			(0, react.useEffect)(() => () => {
				clearTimers();
			}, []);
			/** Detect running→idle, pending-approval, and job-done transitions; enqueue only while unfocused. */
			(0, react.useEffect)(() => {
				if (rows === void 0) return;
				const now = {};
				for (const id of Object.keys(rows)) {
					const row = rows[id];
					now[id] = {
						running: row.running === true,
						pending: row.pendingInteraction !== void 0,
						jobs: jobs === void 0 || jobs[id] === void 0 ? 0 : jobs[id].length
					};
				}
				const prev = prevRef.current;
				prevRef.current = now;
				if (prev === null) return;
				const events = [];
				for (const id of Object.keys(now)) {
					const p = prev[id];
					if (p === void 0) continue;
					const n = now[id];
					if (p.running && !n.running) {
						const last = cooldownRef.current[id] === void 0 ? 0 : cooldownRef.current[id];
						if (Date.now() - last >= DONE_COOLDOWN_MS) {
							cooldownRef.current[id] = Date.now();
							events.push({ kind: "done", sessionId: id, title: rows[id] === void 0 ? id : rows[id].displayTitle });
						}
					}
					if (!p.pending && n.pending) events.push({ kind: "approval", sessionId: id, title: rows[id] === void 0 ? id : rows[id].displayTitle, sticky: true });
					if (p.jobs > n.jobs) events.push({ kind: "job", sessionId: id, title: rows[id] === void 0 ? id : rows[id].displayTitle });
				}
				if (events.length === 0) return;
				if (!enabledRef.current) return;
				if (focusedRef.current) return;
				queueRef.current = queueRef.current.concat(events);
				if (document.hidden) {
					for (const event of events) {
						if (typeof Notification === "undefined" || Notification.permission !== "granted") break;
						try {
							const note = new Notification(event.title, { body: event.kind === "done" ? t("island.done") : event.kind === "approval" ? t("island.approval") : t("island.job") });
							note.onclick = () => {
								window.focus();
								note.close();
							};
						} catch (error) {
							break;
						}
					}
				}
				if (noticeRef.current === null) {
					const next = queueRef.current.shift();
					if (next !== void 0) {
						setNotice(next);
						setPhase("ball");
					}
				}
			}, [rows, jobs]);
			/** Phase driver: ball → open → (sticky stays open) → closing → next queued event. */
			(0, react.useEffect)(() => {
				if (phase === "gone" && notice === null) {
					const next = queueRef.current.shift();
					if (next !== void 0) {
						setNotice(next);
						setPhase("ball");
					}
					return;
				}
				clearTimers();
				if (notice === null) return;
				if (phase === "ball") after(ISLAND_BALL_MS, () => {
					setPhase("open");
				});
				else if (phase === "open" && notice.sticky !== true) {
					if (hidden) return;
					after(ISLAND_OPEN_MS, () => {
						setPhase("closing");
					});
				} else if (phase === "closing") after(ISLAND_CLOSE_MS, () => {
					setNotice(null);
					setPhase("gone");
				});
			}, [notice, phase, hidden]);
			if (notice === null || phase === "gone") return null;
			const detail = notice.kind === "done" ? t("island.done") : notice.kind === "approval" ? t("island.approval") : notice.kind === "test" ? t("island.testDetail") : t("island.job");
			const onRootClick = () => {
				if (notice.sessionId !== void 0 && typeof onOpen === "function") onOpen(notice.sessionId);
				clearTimers();
				setPhase("closing");
			};
			const onEnable = (event) => {
				event.stopPropagation();
				if (typeof Notification === "undefined") return;
				Notification.requestPermission().then((next) => {
					setPerm(next);
				}).catch(() => {});
			};
			return (0, react_jsx_runtime.jsxs)("div", {
				className: ContextIsland_module_css_default.root,
				"data-phase": phase,
				role: "status",
				onClick: onRootClick,
				children: [(0, react_jsx_runtime.jsx)("div", {
					className: ContextIsland_module_css_default.layer + " " + ContextIsland_module_css_default.ballLayer,
					children: (0, react_jsx_runtime.jsx)(IslandIcon, { kind: notice.kind })
				}), (0, react_jsx_runtime.jsxs)("div", {
					className: ContextIsland_module_css_default.layer + " " + ContextIsland_module_css_default.bodyLayer,
					children: [(0, react_jsx_runtime.jsx)(IslandIcon, { kind: notice.kind }), (0, react_jsx_runtime.jsxs)("div", {
						className: ContextIsland_module_css_default.text,
						children: [(0, react_jsx_runtime.jsx)("span", {
							className: ContextIsland_module_css_default.title,
							children: notice.title
						}), (0, react_jsx_runtime.jsx)("span", {
							className: ContextIsland_module_css_default.detail,
							children: detail
						})]
					}), perm === "default" ? (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: ContextIsland_module_css_default.action,
						onClick: onEnable,
						children: t("island.enableDesktop")
					}) : perm === "granted" ? (0, react_jsx_runtime.jsx)("span", {
						className: ContextIsland_module_css_default.granted,
						children: t("island.granted")
					}) : null]
				})]
			});
		}
		//#endregion
		//#region lib/types/client/IslandSettings.js
		/** Persisted island preferences: the master enable switch (localStorage-backed
		* by the store framework; the handle is shared with the island entry so both
		* read one instance). */
		function createIslandSettingsStore() {
			return (0, _deepseek_ai_dsh_client_runtime_client.defineStore)({
				init: () => ({
					enabled: true,
					critFx: true
				}),
				persist: "dsh-context-console.island-settings",
				actions: {
					setEnabled: (draft, enabled) => {
						draft.enabled = enabled === true;
					},
					setCritFx: (draft, critFx) => {
						draft.critFx = critFx === true;
					}
				}
			});
		}
		/** In-bundle event bus between the settings page and the island (test popup). */
		const islandBus = {
			listeners: /* @__PURE__ */ new Set(),
			emit(event) {
				for (const fn of [...this.listeners]) fn(event);
			},
			on(fn) {
				this.listeners.add(fn);
				return () => {
					this.listeners.delete(fn);
				};
			}
		};
		/** Settings page for the island: master switch, desktop-notification grant, test popup. */
		function IslandSettings({ useStore, actions, t }) {
			const [perm, setPerm] = (0, react.useState)(typeof Notification !== "undefined" ? Notification.permission : "unsupported");
			const enabled = useStore((s) => s.enabled === true);
			const critFx = useStore((s) => s.critFx !== false);
			const onToggle = () => {
				if (actions !== void 0 && typeof actions.setEnabled === "function") actions.setEnabled(!enabled);
			};
			const onToggleCrit = () => {
				if (actions !== void 0 && typeof actions.setCritFx === "function") actions.setCritFx(!critFx);
			};
			const onRequest = () => {
				if (typeof Notification === "undefined") return;
				Notification.requestPermission().then((next) => {
					setPerm(next);
				}).catch(() => {});
			};
			const onTest = () => {
				islandBus.emit({ kind: "test" });
			};
			const permText = perm === "granted" ? t("island.permGranted") : perm === "denied" ? t("island.permDenied") : perm === "unsupported" ? t("island.permUnsupported") : t("island.permDefault");
			return (0, react_jsx_runtime.jsxs)("div", {
				className: IslandSettings_module_css_default.root,
				children: [(0, react_jsx_runtime.jsxs)("div", {
					className: IslandSettings_module_css_default.group,
					children: [(0, react_jsx_runtime.jsxs)("div", {
						className: IslandSettings_module_css_default.row,
						children: [(0, react_jsx_runtime.jsxs)("div", {
							className: IslandSettings_module_css_default.text,
							children: [(0, react_jsx_runtime.jsx)("div", {
								className: IslandSettings_module_css_default.label,
								children: t("island.enabled")
							}), (0, react_jsx_runtime.jsx)("div", {
								className: IslandSettings_module_css_default.sub,
								children: t("island.hint")
							})]
						}), (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: IslandSettings_module_css_default.switch,
							"data-on": String(enabled),
							role: "switch",
							"aria-checked": enabled,
							onClick: onToggle
						})]
					}), (0, react_jsx_runtime.jsxs)("div", {
						className: IslandSettings_module_css_default.row,
						children: [(0, react_jsx_runtime.jsxs)("div", {
							className: IslandSettings_module_css_default.text,
							children: [(0, react_jsx_runtime.jsx)("div", {
								className: IslandSettings_module_css_default.label,
								children: t("island.critFx")
							}), (0, react_jsx_runtime.jsx)("div", {
								className: IslandSettings_module_css_default.sub,
								children: t("island.critFxDesc")
							})]
						}), (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: IslandSettings_module_css_default.switch,
							"data-on": String(critFx),
							role: "switch",
							"aria-checked": critFx,
							onClick: onToggleCrit
						})]
					}), (0, react_jsx_runtime.jsxs)("div", {
						className: IslandSettings_module_css_default.row,
						children: [(0, react_jsx_runtime.jsxs)("div", {
							className: IslandSettings_module_css_default.text,
							children: [(0, react_jsx_runtime.jsx)("div", {
								className: IslandSettings_module_css_default.label,
								children: t("island.desktop")
							}), (0, react_jsx_runtime.jsx)("div", {
								className: IslandSettings_module_css_default.sub,
								children: permText
							})]
						}), perm === "default" ? (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: IslandSettings_module_css_default.btn,
							onClick: onRequest,
							children: t("island.request")
						}) : (0, react_jsx_runtime.jsx)("span", {
							className: IslandSettings_module_css_default.status,
							children: permText
						})]
					})]
				}), (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: IslandSettings_module_css_default.btn + " " + IslandSettings_module_css_default.test,
					onClick: onTest,
					children: t("island.test")
				})]
			});
		}
		//#endregion
		//#region lib/types/client/PlanBoard.js
		/** Status glyph: filled green check (done), pulsing green ring (running), hollow ring (pending). */
		function StepGlyph({ status }) {
			if (status === "completed") {
				return (0, react_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 16 16",
					width: "16",
					height: "16",
					"aria-hidden": true,
					children: [(0, react_jsx_runtime.jsx)("circle", { cx: "8", cy: "8", r: "7", fill: "#30D158" }), (0, react_jsx_runtime.jsx)("path", {
						d: "M5.2 8.3l1.9 1.9 3.7-4",
						stroke: "#fff",
						strokeWidth: "1.6",
						fill: "none",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})]
				});
			}
			if (status === "in_progress") {
				return (0, react_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 16 16",
					width: "16",
					height: "16",
					"aria-hidden": true,
					children: [(0, react_jsx_runtime.jsx)("circle", {
						cx: "8",
						cy: "8",
						r: "6",
						stroke: "#30D158",
						strokeWidth: "1.6",
						fill: "none"
					}), (0, react_jsx_runtime.jsx)("circle", {
						className: "cpl-glyph-dot",
						cx: "8",
						cy: "8",
						r: "3",
						fill: "#30D158"
					})]
				});
			}
			return (0, react_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 16 16",
				width: "16",
				height: "16",
				"aria-hidden": true,
				children: (0, react_jsx_runtime.jsx)("circle", {
					cx: "8",
					cy: "8",
					r: "6",
					stroke: "var(--dsw-alias-border-l2)",
					strokeWidth: "1.6",
					fill: "none"
				})
			});
		}
		/** Codex-style plan board over the `todos` projection: the collapsed pill
		* shows the step currently being executed plus progress; hovering expands
		* the full step list (click pins it open), and a step change auto-opens
		* briefly so the switch is visible. Renders nothing without a todo list. */
		function PlanBoard({ useProjection, t }) {
			const todos = useProjection("todos") ?? [];
			const [pinned, setPinned] = (0, react.useState)(false);
			const [hovered, setHovered] = (0, react.useState)(false);
			const [autoOpen, setAutoOpen] = (0, react.useState)(false);
			const lastCurrentRef = (0, react.useRef)(void 0);
			const items = Array.isArray(todos) ? todos : [];
			const current = items.find((item) => item.status === "in_progress");
			const done = items.filter((item) => item.status === "completed").length;
			const currentKey = current === void 0 ? "" : String(current.id ?? current.content);
			(0, react.useEffect)(() => {
				if (lastCurrentRef.current === void 0) {
					lastCurrentRef.current = currentKey;
					return;
				}
				if (lastCurrentRef.current === currentKey) return;
				lastCurrentRef.current = currentKey;
				setAutoOpen(true);
				const timer = window.setTimeout(() => setAutoOpen(false), 2500);
				return () => {
					window.clearTimeout(timer);
				};
			}, [currentKey]);
			if (items.length === 0) return null;
			const open = pinned || hovered || autoOpen;
			const pillText = current !== void 0 ? current.content : done >= items.length ? t("plan.done") : done + "/" + items.length;
			return (0, react_jsx_runtime.jsxs)("div", {
				className: PlanBoard_module_css_default.root,
				"data-open": String(open),
				children: [(0, react_jsx_runtime.jsxs)("div", {
					className: PlanBoard_module_css_default.card,
					onMouseEnter: () => {
						setHovered(true);
					},
					onMouseLeave: () => {
						setHovered(false);
					},
					children: [(0, react_jsx_runtime.jsxs)("div", {
						className: PlanBoard_module_css_default.pill,
						role: "button",
						"aria-expanded": open,
						onClick: () => {
							setPinned(!pinned);
						},
						children: [(0, react_jsx_runtime.jsx)("span", {
							className: PlanBoard_module_css_default.icon,
							children: (0, react_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 14 14",
								width: "14",
								height: "14",
								"aria-hidden": true,
								children: [(0, react_jsx_runtime.jsx)("rect", { x: "1", y: "2.2", width: "8", height: "1.7", rx: "0.85", fill: "currentColor" }), (0, react_jsx_runtime.jsx)("rect", { x: "1", y: "6.15", width: "8", height: "1.7", rx: "0.85", fill: "currentColor" }), (0, react_jsx_runtime.jsx)("rect", { x: "1", y: "10.1", width: "5.5", height: "1.7", rx: "0.85", fill: "currentColor" })]
							})
						}), (0, react_jsx_runtime.jsx)("span", {
							className: PlanBoard_module_css_default.title,
							children: t("plan.title")
						}), (0, react_jsx_runtime.jsx)("span", {
							className: PlanBoard_module_css_default.sep,
							"aria-hidden": true
						}), current !== void 0 ? (0, react_jsx_runtime.jsx)("span", {
							className: PlanBoard_module_css_default.dot,
							"aria-hidden": true
						}) : null, (0, react_jsx_runtime.jsx)("span", {
							className: PlanBoard_module_css_default.current,
							children: pillText
						}), (0, react_jsx_runtime.jsx)("span", {
							className: PlanBoard_module_css_default.count,
							children: done + "/" + items.length
						})]
					}), (0, react_jsx_runtime.jsxs)("div", {
						className: PlanBoard_module_css_default.body,
						children: [(0, react_jsx_runtime.jsxs)("div", {
							className: PlanBoard_module_css_default.head,
							children: [(0, react_jsx_runtime.jsx)("span", {
								className: PlanBoard_module_css_default.headTitle,
								children: t("plan.title")
							}), (0, react_jsx_runtime.jsx)("span", {
								className: PlanBoard_module_css_default.headCount,
								children: done + "/" + items.length
							})]
						}), (0, react_jsx_runtime.jsx)("div", {
							className: PlanBoard_module_css_default.bar,
							children: (0, react_jsx_runtime.jsx)("div", {
								className: PlanBoard_module_css_default.barFill,
								style: { width: items.length > 0 ? done / items.length * 100 + "%" : "0%" }
							})
						}), (0, react_jsx_runtime.jsx)("ul", {
							className: PlanBoard_module_css_default.list,
							children: items.map((item) => (0, react_jsx_runtime.jsxs)("li", {
								className: PlanBoard_module_css_default.item,
								"data-status": item.status,
								key: String(item.id ?? item.content),
								children: [(0, react_jsx_runtime.jsx)("span", {
									className: PlanBoard_module_css_default.glyph,
									"aria-hidden": true,
									children: (0, react_jsx_runtime.jsx)(StepGlyph, { status: item.status })
								}), (0, react_jsx_runtime.jsx)("span", {
									className: PlanBoard_module_css_default.content,
									children: item.content
								})]
							}))
						})]
					})]
				})]
			});
		}
		//#endregion
		//#region lib/types/client/locales.js
		/** `sidebar` namespace dictionaries: shell controls (brand row, New Session, fold toggle). */
		/** Simplified Chinese dictionary (the key-set source of truth). */
		const zh = {
			"meter.context": "上下文窗口",
			"meter.cache": "缓存命中",
			"meter.tipContext": "上下文窗口",
			"meter.tipCache": "缓存命中率",
			"meter.tipComposition": "构成",
			"meter.tipHit": "命中",
			"meter.tipMiss": "未命中",
			"meter.tipWrite": "写入",
			"meter.tipSystem": "系统",
			"meter.tipTools": "工具",
			"meter.tipMessages": "消息",
			"meter.tipNoData": "暂无数据（首次模型请求后显示）",
			"meter.balance": "余额",
			"meter.balanceUnknown": "获取中…",
			"meter.last": "上次",
			"meter.today": "今日",
			"meter.crit": "暴击",
			"meter.todayMiss": "未命中",
			"meter.todayHit": "命中",
			"meter.todayOutput": "生成",
			"meter.combo": "连击 ×{n}",
			"meter.bestCombo": "最高连击",
			"meter.total": "累计",
			"meter.rank0": "白嫖党",
			"meter.rank1": "小试牛刀",
			"meter.rank2": "渐入佳境",
			"meter.rank3": "氪金学徒",
			"meter.rank4": "挥金如土",
			"meter.rank5": "散财童子",
			"meter.rank6": "烧钱大师",
			"meter.rank7": "财神下凡",
			"plan.title": "计划",
			"plan.done": "全部完成",
			"island.done": "任务完成",
			"island.approval": "需要审批",
			"island.job": "后台任务完成",
			"island.enableDesktop": "开启桌面通知",
			"island.granted": "桌面通知已开启",
			"islandNav": "灵动岛",
			"island.enabled": "启用灵动岛通知",
			"island.desktop": "桌面通知",
			"island.permDefault": "未授权",
			"island.permGranted": "已开启",
			"island.permDenied": "已拒绝",
			"island.permUnsupported": "当前浏览器不支持",
			"island.request": "授权",
			"island.test": "测试弹窗",
			"island.testTitle": "测试通知",
			"island.testDetail": "灵动岛测试",
			"island.hint": "仅当窗口未聚焦时弹出；标签隐藏时同时发送桌面通知",
			"island.critFx": "暴击特效",
			"island.critFxDesc": "未命中占比 ≥40% 时放大飘字"
		};
		/** English dictionary, checked complete against the zh key set. */
		const en = {
			"meter.context": "Context",
			"meter.cache": "Cache hit",
			"meter.tipContext": "Context window",
			"meter.tipCache": "Cache-hit rate",
			"meter.tipComposition": "Composition",
			"meter.tipHit": "hit",
			"meter.tipMiss": "miss",
			"meter.tipWrite": "write",
			"meter.tipSystem": "System",
			"meter.tipTools": "Tools",
			"meter.tipMessages": "Messages",
			"meter.tipNoData": "No data yet — appears after the first model request",
			"meter.balance": "Balance",
			"meter.balanceUnknown": "Loading…",
			"meter.last": "Last",
			"meter.today": "Today",
			"meter.crit": "CRIT",
			"meter.todayMiss": "Miss",
			"meter.todayHit": "Hit",
			"meter.todayOutput": "Output",
			"meter.combo": "Combo ×{n}",
			"meter.bestCombo": "Best combo",
			"meter.total": "Total",
			"meter.rank0": "Freeloader",
			"meter.rank1": "Warming Up",
			"meter.rank2": "Getting Hooked",
			"meter.rank3": "Apprentice Spender",
			"meter.rank4": "Big Spender",
			"meter.rank5": "Money Scatterer",
			"meter.rank6": "Cash Burner",
			"meter.rank7": "God of Fortune",
			"plan.title": "Plan",
			"plan.done": "All done",
			"island.done": "Task complete",
			"island.approval": "Needs approval",
			"island.job": "Background job finished",
			"island.enableDesktop": "Enable desktop notifications",
			"island.granted": "Desktop notifications on",
			"islandNav": "Island",
			"island.enabled": "Enable Dynamic Island notifications",
			"island.desktop": "Desktop notifications",
			"island.permDefault": "Not granted",
			"island.permGranted": "Granted",
			"island.permDenied": "Denied",
			"island.permUnsupported": "Unsupported in this browser",
			"island.request": "Grant",
			"island.test": "Test popup",
			"island.testTitle": "Test notification",
			"island.testDetail": "Dynamic Island test",
			"island.hint": "Pops only while the window is unfocused; a desktop notification is also sent while the tab is hidden",
			"island.critFx": "Critical-hit effects",
			"island.critFxDesc": "Bigger floaters when cache misses dominate (≥40%)"
		};
		//#endregion
		
//#region lib/types/client/index.js
		/** Dictionary namespace owned by this plugin. */
		const NS = "console";
		/** Services required by the console plugin (browser half). */
		const inject = [
			"slots",
			"locale",
			"sessions"
		];
		/** Registers the sidebar meter, the Dynamic Island, and its settings page. */
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "ui-console: dictionaries");
			const t = ctx.locale.bind(NS);
			const islandStore = createIslandSettingsStore();
			ctx.effect(() => ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({
				name: "sidebar.footer.action",
				id: "context-meter",
				order: 1,
				locale: NS,
				store: islandStore
			}, ContextMeter)), "ui-console: context meter");
			ctx.effect(() => ctx.slots.inject("shell.overlay", () => ctx.slots.register({
				name: "shell.overlay",
				id: "context-island",
				locale: NS,
				store: islandStore,
				inject: () => ({
					onOpen: (sessionId) => {
						ctx.sessions.open(sessionId);
					}
				})
			}, ContextIsland)), "ui-console: context island");
			ctx.effect(() => ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "island",
				order: 5,
				label: () => t("islandNav"),
				locale: NS,
				store: islandStore
			}, IslandSettings)), "ui-console: island settings");
			ctx.effect(() => ctx.slots.inject("conversation.input.dock", () => ctx.slots.register({
				name: "conversation.input.dock",
				id: "todo",
				order: 30,
				priority: -1,
				locale: NS
			}, PlanBoard)), "ui-console: plan board");
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});