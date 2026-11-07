# Isolated packaging smoke test on a disposable Windows runner; no Spotify or credentials.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$installer = Join-Path $root 'release\MyWave-Setup.exe'
$destination = Join-Path $env:RUNNER_TEMP 'mywave-install-smoke'
if (Test-Path -LiteralPath $destination) { throw 'Smoke test destination already exists.' }
$worker = $null
try {
    $setup = Start-Process -FilePath $installer -ArgumentList @('/VERYSILENT','/SUPPRESSMSGBOXES','/NORESTART','/SP-',('/DIR="' + $destination + '"')) -PassThru
    if (-not $setup.WaitForExit(180000)) {
        Stop-Process -Id $setup.Id -Force -ErrorAction SilentlyContinue
        throw 'Installer smoke test timed out.'
    }
    if ($setup.ExitCode -ne 0) { throw "Installer smoke test failed with exit code $($setup.ExitCode)." }
    $python = Join-Path $destination '.venv\Scripts\python.exe'
    if (-not (Test-Path -LiteralPath $python)) { throw 'Installed runtime is missing.' }
    Push-Location $destination
    try {
        & $python -m backend pair
        if ($LASTEXITCODE -ne 0) { throw 'Installed runtime could not create pairing config.' }
    } finally { Pop-Location }
    $key = (Get-Content -LiteralPath (Join-Path $destination '.local\bridge.json') -Raw | ConvertFrom-Json).api_key
    $worker = Start-Process -FilePath $python -ArgumentList '-m','backend' -WorkingDirectory $destination -PassThru -WindowStyle Hidden
    $ready = $false
    for ($attempt = 0; $attempt -lt 30; $attempt++) {
        if ($worker.HasExited) { throw "Installed backend exited with code $($worker.ExitCode)." }
        try {
            $response = Invoke-RestMethod 'http://127.0.0.1:5000/ready' -Headers @{ Authorization = ('Bearer ' + $key) } -TimeoutSec 2
            if ($response.ok -and $response.service -eq 'wave-spicetify') { $ready = $true; break }
        } catch { Start-Sleep -Seconds 1 }
    }
    if (-not $ready) { throw 'Installed backend did not become ready.' }
    Write-Host 'Installer and authenticated backend smoke test passed.'
} finally {
    if ($worker -and -not $worker.HasExited) { Stop-Process -Id $worker.Id -Force -ErrorAction SilentlyContinue }
    $uninstaller = Join-Path $destination 'unins000.exe'
    if (Test-Path -LiteralPath $uninstaller) {
        Start-Process -FilePath $uninstaller -ArgumentList '/VERYSILENT','/SUPPRESSMSGBOXES','/NORESTART' -Wait | Out-Null
    }
}
