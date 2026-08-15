# 一键安装 dsh-context-console 插件
# 用法：.\install.ps1
$ErrorActionPreference = 'Stop'

$dshHome = if ($env:DSH_HOME) { $env:DSH_HOME } else { Join-Path $env:USERPROFILE '.dsh' }
$pluginDir = Join-Path $dshHome 'plugins\dsh-context-console'
$nodeModules = Join-Path $dshHome 'profiles\node_modules'
$patchFile = Join-Path $dshHome 'profiles\web\cordis.patch.yml'

if (-not (Test-Path $nodeModules)) { Write-Error "找不到 profile 的 node_modules：$nodeModules（请先用 dsh 启动过一次 web profile）"; exit 1 }
if (-not (Test-Path $patchFile)) { Write-Error "找不到组合补丁文件：$patchFile"; exit 1 }

# 0) 检测官方 dsh plugin add 注册（package.json 的 dsh.profile.bundles 层），避免重复注册
$profileManifest = Join-Path $dshHome 'profiles\web\package.json'
$bundleRegistered = $false
if (Test-Path $profileManifest) {
    $manifest = Get-Content $profileManifest -Raw | ConvertFrom-Json
    $bundleRegistered = $manifest.dsh.profile.bundles -contains 'dsh-context-console'
}

# 1) 复制插件
New-Item -ItemType Directory -Force -Path $pluginDir | Out-Null
Copy-Item (Join-Path $PSScriptRoot 'plugin\*') $pluginDir -Recurse -Force
Write-Host "插件已复制到：$pluginDir"

# 2) junction（幂等）
$link = Join-Path $nodeModules 'dsh-context-console'
if (Test-Path $link) {
    Write-Host "junction 已存在：$link"
} else {
    New-Item -ItemType Junction -Path $link -Target $pluginDir | Out-Null
    Write-Host "junction 已创建：$link"
}

# 3) 组合注册（幂等，写入前备份）
$patch = Get-Content $patchFile -Raw
if ($bundleRegistered) {
    Write-Host '已通过官方 dsh plugin add 注册（dsh.profile.bundles），跳过手动组合注册'
} elseif ($patch -match 'name:\s*dsh-context-console') {
    Write-Host '组合文件已包含本插件，跳过注册'
} else {
    Copy-Item $patchFile "$patchFile.bak-$(Get-Date -Format 'yyyyMMdd-HHmmss')" -Force
    $entry = "- insert:`n    - id: ui-console`n      name: dsh-context-console`n"
    if ($patch.TrimEnd() -match '\[\]\s*$') {
        $new = $patch.TrimEnd() -replace '\[\]\s*$', $entry
    } else {
        $new = $patch.TrimEnd() + "`n" + $entry
    }
    [System.IO.File]::WriteAllText($patchFile, $new, [System.Text.UTF8Encoding]::new($false))
    Write-Host "组合注册已写入：$patchFile（原文件已备份）"
}

Write-Host ''
Write-Host '安装完成。重启 DSH 后生效，然后刷新页面。'
