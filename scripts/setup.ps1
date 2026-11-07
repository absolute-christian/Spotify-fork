param([switch]$SkipFrontend)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $root
$venvPython = Join-Path $root '.venv\Scripts\python.exe'
if (-not (Test-Path -LiteralPath $venvPython)) {
    $pythonCommand = Get-Command python.exe -ErrorAction SilentlyContinue
    $pythonPath = if ($pythonCommand -and $pythonCommand.Source -notlike '*\WindowsApps\*') { $pythonCommand.Source } else { $null }
    if (-not $pythonPath) {
        $bundled = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
        if (Test-Path -LiteralPath $bundled) { $pythonPath = $bundled }
    }
    if ($pythonPath) { & $pythonPath -m venv .venv }
    elseif (Get-Command py.exe -ErrorAction SilentlyContinue) { & py.exe -3 -m venv .venv }
    else { throw 'Python 3.10+ is required: https://www.python.org/downloads/windows/' }
    if ($LASTEXITCODE -ne 0) { throw 'Failed to create Python environment' }
}
& $venvPython -m pip install --disable-pip-version-check -r requirements.txt
if ($LASTEXITCODE -ne 0) { throw 'Failed to install Python dependencies' }
& $venvPython -m backend pair
if ($LASTEXITCODE -ne 0) { throw 'Failed to create local pairing key' }
if (-not $SkipFrontend) {
    if (-not (Get-Command npm.cmd -ErrorAction SilentlyContinue)) { throw 'Node.js 22.18+ (or 24.11+) is required to build: https://nodejs.org/' }
    & npm.cmd ci
    if ($LASTEXITCODE -ne 0) { throw 'Failed to install frontend dependencies' }
    & npm.cmd run build
    if ($LASTEXITCODE -ne 0) { throw 'Failed to build Custom App' }
}
Write-Host 'Ready. Install.cmd installs the interface and automatic background startup. Then open Spotify normally.' -ForegroundColor Green
