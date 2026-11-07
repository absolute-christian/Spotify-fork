$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $root
try {
    & (Join-Path $PSScriptRoot 'bootstrap-spicetify.ps1')
    & (Join-Path $PSScriptRoot 'install.ps1')
    Write-Host 'Setup finished. Open Spotify and connect Yandex Music in the app settings.' -ForegroundColor Green
    Read-Host 'Press Enter to close'
    exit 0
} catch {
    Write-Host ("Setup failed: " + $_.Exception.Message) -ForegroundColor Red
    Write-Host 'Check that Spotify is installed and has been opened and signed in at least once.'
    Read-Host 'Press Enter to close'
    exit 1
}
