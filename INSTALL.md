# 安装教程

本仓库是 DeepSeek Harness Web 界面的一个浏览器插件，包含：

1. **侧边栏上下文仪表盘** —— 左侧菜单「设置」上方实时显示上下文窗口占用与缓存命中
2. **灵动岛通知** —— 顶部胶囊通知（任务完成 / 审批 / 后台任务，窗口未聚焦时弹出）
3. **灵动岛设置页** —— 总开关、桌面通知授权、测试弹窗

## 前置要求

- 已安装 DeepSeek Harness，且**用 dsh 启动过 web profile 至少一次**（安装脚本需要 `~/.dsh/profiles/web/cordis.patch.yml` 和 `~/.dsh/profiles/node_modules` 存在）
- Windows 10/11 + PowerShell（安装脚本为 PowerShell）
- Chrome / Edge 等现代浏览器

## 快速安装（3 步）

1. **下载本仓库**：`git clone https://github.com/lzii1545/dsh-context-meter.git`，或网页 **Code → Download ZIP** 解压

2. **在仓库目录打开 PowerShell，运行**：

   ```powershell
   .\install.ps1
   ```

   脚本会：复制插件到 `~/.dsh/plugins/dsh-context-console` → 建 junction → 往 `~/.dsh/profiles/web/cordis.patch.yml` 写组合注册（写前自动备份，重复执行安全）

3. **重启 DSH**，然后刷新浏览器页面，完成

## 官方命令安装（推荐，需 pnpm）

插件已声明 `dsh.bundle`，可直接用 Harness 官方插件命令安装：

```powershell
dsh plugin --profile web add file:<本仓库 plugin 目录的绝对路径>
```

- 需要 PATH 里有 pnpm；命令在 `~/.dsh/profiles/web` 里执行 `pnpm add`，并自动把插件的 bundle 层加入 `dsh.profile.bundles`
- 装好后**无需手动编辑 cordis.patch.yml**；重启 DSH 生效
- 卸载：`dsh plugin --profile web remove dsh-context-console`
- 两种安装方式任选其一；`install.ps1` 检测到官方注册时会自动跳过手动注册，不会重复

## 手动安装（不想用脚本）

1. 把 `plugin/` 整个目录复制到 `~/.dsh/plugins/dsh-context-console/`

2. 建 junction（PowerShell）：

   ```powershell
   New-Item -ItemType Junction -Path "$env:USERPROFILE\.dsh\profiles\node_modules\dsh-context-console" -Target "$env:USERPROFILE\.dsh\plugins\dsh-context-console"
   ```

3. 编辑 `~/.dsh/profiles/web/cordis.patch.yml`，把末尾的 `[]` 换成：

   ```yaml
   - insert:
       - id: ui-console
         name: dsh-context-console
   ```

4. 重启 DSH，刷新页面

## 使用说明

- **仪表盘**：自动出现在左侧菜单「设置」上方；蓝色条 = 上下文窗口（<60% 蓝 / 60–85% 橙 / ≥85% 红），绿色条 = 缓存命中；悬停看明细，侧边栏折叠时显示圆环
- **灵动岛**：打开 设置 → 灵动岛：
  - 总开关（本地持久化）
  - 点「授权」开启桌面通知
  - 点「测试弹窗」立即验证动画
  - 触发条件：窗口未聚焦时——任务完成（同会话 30 秒冷却）、审批等待（常驻，点击跳转）、后台任务完成；标签隐藏时附桌面通知

## 验证

重启后：左侧菜单出现仪表盘；「设置 → 灵动岛」点「测试弹窗」能看到顶部胶囊弹出展开。

## 卸载

```powershell
.\uninstall.ps1              # 还原组合、删 junction，插件目录保留
.\uninstall.ps1 -RemovePlugin  # 连插件目录一起删
```

然后重启 DSH。

## 常见问题

| 现象 | 处理 |
| --- | --- |
| 装完没效果 | 组合在启动时加载，必须**重启 DSH**（只刷新页面不够） |
| 灵动岛不弹 | 窗口聚焦时不弹（设计如此）；确认总开关开启；同会话有 30 秒冷却 |
| 没有桌面通知 | 设置页点「授权」；曾拒绝时到浏览器站点设置里重新允许 |
| DSH 启动报错 | 删除 `cordis.patch.yml` 里本插件的 `- insert:` 段（或运行 `uninstall.ps1`） |
| 升级 harness 后 | 插件不受影响；若官方改动了插槽契约导致显示异常，来仓库更新插件 |
