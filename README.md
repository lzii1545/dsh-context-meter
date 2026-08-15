# dsh-context-console

DeepSeek Harness Web 界面的一个浏览器插件，给左侧边栏和顶部通知加了两块东西：

- **侧边栏上下文仪表盘** —— 会话「设置」上方实时显示上下文窗口占用与缓存命中，随占用率变色，悬停看明细
- **灵动岛通知** —— 顶部居中胶囊通知：任务完成 / 审批等待 / 后台任务结束时弹出；窗口未聚焦才弹，标签隐藏时附桌面通知
- **设置页** —— 「设置 → 灵动岛」：总开关（本地持久化）、桌面通知授权、测试弹窗

插件通过 DSH 官方的 `dsh.client` 机制注册，**不改任何官方文件**，升级 harness 不会丢。

## 安装

看 [INSTALL.md](INSTALL.md)。Windows 上一条命令：

```powershell
.\install.ps1
```

然后重启 DSH，刷新页面。

## 文件说明

| 路径 | 说明 |
| --- | --- |
| `plugin/` | 插件本体：package.json、宿主桩、客户端 bundle |
| `install.ps1` | 一键安装：复制插件、建 junction、写组合注册（自动备份、可重复执行） |
| `uninstall.ps1` | 一键卸载：还原组合、删 junction；加 `-RemovePlugin` 连插件目录一起删 |
| `INSTALL.md` | 安装教程 |

## 工作原理

- 插件目录：`~/.dsh/plugins/dsh-context-console`，升级免疫
- 通过 junction 链进 profile 的 node_modules，组合文件 `~/.dsh/profiles/web/cordis.patch.yml` 里插一行 `dsh-context-console`
- 启动时 client-modules 扫描到它，把 bundle 注入浏览器；客户端注册三个官方插槽：
  - `sidebar.footer.action` —— 仪表盘（Cordis 按钮下方）
  - `shell.overlay` —— 灵动岛
  - `settings.section` —— 设置页

## 注意

- 在 `@deepseek-ai/dsh` 0.1.0-rc.6 上验证过；官方升级后若插槽契约变化，插件需跟进（但不会被覆盖删除）
- 灵动岛默认只在窗口未聚焦时弹；同一会话 30 秒冷却；桌面通知需在设置页授权一次
