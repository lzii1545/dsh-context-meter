# 一键卸载 dsh-context-console 插件
# 用法：.\uninstall.ps1 [-RemovePlugin]
param([switch]$RemovePlugin)
$ErrorActionPreference = 'Stop'

$dshHome = if ($env:DSH_HOME) { $env:DSH_HOME } else { Join-Path $env:USERPROFILE '.dsh' }
$pluginDir = Join-Path $dshHome 'plugins\dsh-context-console'
$link = Join-Path $dshHome 'profiles\node_modules\dsh-context-console'
$patchFile = Join-Path $dshHome 'profiles\web\cordis.patch.yml'

# 0) 若通过官方 dsh plugin add 安装（package.json 的 dsh.profile.bundles），引导走官方卸载
$profileManifest = Join-Path $dshHome 'profiles\web\package.json'
if (Test-Path $profileManifest) {
    $manifest = Get-Content $profileManifest -Raw | ConvertFrom-Json
    if ($manifest.dsh.profile.bundles -contains 'dsh-context-console') {
        Write-Host '该插件是通过官方 dsh plugin add 安装的（已在 dsh.profile.bundles 注册）。'
        Write-Host '请用官方命令卸载：dsh plugin --profile web remove dsh-context-console'
        Write-Host '（本脚本只处理手动安装路径，为避免误删 pnpm 安装的包已跳过）'
        exit 0
    }
}

# 1) 从组合文件移除本插件的 insert 块
if (Test-Path $patchFile) {
    $patch = Get-Content $patchFile -Raw
    if ($patch -match 'dsh-context-console') {
        Copy-Item $patchFile "$patchFile.bak-$(Get-Date -Format 'yyyyMMdd-HHmmss')" -Force
        $lines = $patch -split "`r?`n"
        $out = New-Object System.Collections.Generic.List[string]
        $skip = $false
        foreach ($line in $lines) {
            if ($line -match '^-\s*insert:\s*$') { $skip = $true; continue }
            if ($skip) {
                if ($line -match '^-\s') { $skip = $false }
                else { continue }
            }
            $out.Add($line)
        }
        [System.IO.File]::WriteAllText($patchFile, ($out -join "`n"), [System.Text.UTF8Encoding]::new($false))
        Write-Host "组合注册已移除：$patchFile（原文件已备份）"
    } else {
        Write-Host '组合文件里没有本插件，跳过'
    }
}

# 2) 删除 junction
if (Test-Path $link) {
    Remove-Item $link -Force
    Write-Host "junction 已删除：$link"
}

# 3) 可选：删除插件目录
if ($RemovePlugin) {
    if (Test-Path $pluginDir) { Remove-Item $pluginDir -Recurse -Force; Write-Host "插件目录已删除：$pluginDir" }
} else {
    Write-Host "插件目录保留（加 -RemovePlugin 可一并删除）：$pluginDir"
}

Write-Host ''
Write-Host '卸载完成。重启 DSH 后生效。'
