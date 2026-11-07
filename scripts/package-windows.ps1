# Run on a Windows x64 build host with Python 3.12, Node and Inno Setup 6.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $root
$pythonVersion = '3.12.10'
$pythonSha256 = '4acbed6dd1c744b0376e3b1cf57ce906f9dc9e95e68824584c8099a63025a3c3'
$pythonUrl = "https://www.python.org/ftp/python/$pythonVersion/python-$pythonVersion-embed-amd64.zip"
$build = Join-Path $root 'build'
$runtime = Join-Path $build 'embedded-python'
$zip = Join-Path $build 'python-embed.zip'
New-Item -ItemType Directory -Force -Path $build | Out-Null
if (Test-Path -LiteralPath $runtime) { Remove-Item -LiteralPath $runtime -Recurse -Force }
Invoke-WebRequest -UseBasicParsing -Uri $pythonUrl -OutFile $zip
if ((Get-FileHash -Algorithm SHA256 -LiteralPath $zip).Hash.ToLowerInvariant() -ne $pythonSha256) {
    throw 'Python download failed integrity verification.'
}
Expand-Archive -LiteralPath $zip -DestinationPath $runtime
$pth = @('python312.zip', '.', 'Lib\site-packages', '..\..', 'import site') -join "`r`n"
[IO.File]::WriteAllText((Join-Path $runtime 'python312._pth'), $pth + "`r`n", [Text.Encoding]::ASCII)
$packages = Join-Path $runtime 'Lib\site-packages'
# pip runs in the builder's matching Python, not in the embedded runtime.
& python -m pip install --disable-pip-version-check --target $packages -r requirements.txt
if ($LASTEXITCODE -ne 0) { throw 'Failed to bundle Python dependencies.' }
& npm ci --no-audit --no-fund
if ($LASTEXITCODE -ne 0) { throw 'Failed to install JavaScript dependencies.' }
& npm run build:checked-in
if ($LASTEXITCODE -ne 0) { throw 'Failed to build the interface.' }
# The installed path is .venv/Scripts; emulate it before the smoke test.
$smoke = Join-Path $build 'smoke'
if (Test-Path -LiteralPath $smoke) { Remove-Item -LiteralPath $smoke -Recurse -Force }
New-Item -ItemType Directory -Force -Path (Join-Path $smoke '.venv') | Out-Null
Copy-Item -LiteralPath $runtime -Destination (Join-Path $smoke '.venv\Scripts') -Recurse
Copy-Item -LiteralPath (Join-Path $root 'backend') -Destination (Join-Path $smoke 'backend') -Recurse
try {
    Push-Location $smoke
    & (Join-Path $smoke '.venv\Scripts\python.exe') -c 'import fastapi, uvicorn, yandex_music, keyring, webview; import backend.app, backend.desktop'
    if ($LASTEXITCODE -ne 0) { throw 'Embedded Python import smoke test failed.' }
    & (Join-Path $smoke '.venv\Scripts\python.exe') -m backend pair
    if ($LASTEXITCODE -ne 0) { throw 'Embedded backend pairing smoke test failed.' }
} finally { Pop-Location }
$iscc = Join-Path ${env:ProgramFiles(x86)} 'Inno Setup 6\ISCC.exe'
if (-not (Test-Path -LiteralPath $iscc)) { throw 'Inno Setup 6 not found.' }
& $iscc (Join-Path $root 'installer\MyWave.iss')
if ($LASTEXITCODE -ne 0) { throw 'Installer compilation failed.' }
Write-Host 'Installer built: release\MyWave-Setup.exe'
