# Isolated first-run test with a synthetic Spotify installation; no account or playback.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$base = Join-Path $env:RUNNER_TEMP 'mywave-spicetify-smoke'
$old = @{ APPDATA=$env:APPDATA; LOCALAPPDATA=$env:LOCALAPPDATA; SPICETIFY_CONFIG=$env:SPICETIFY_CONFIG; SPICETIFY_STATE=$env:SPICETIFY_STATE; PATH=$env:PATH }
try {
    $env:APPDATA = Join-Path $base 'roaming'
    $env:LOCALAPPDATA = Join-Path $base 'local'
    $env:SPICETIFY_CONFIG = Join-Path $base 'config'
    $env:SPICETIFY_STATE = Join-Path $base 'state'
    $env:PATH = "$env:SystemRoot\system32;$env:SystemRoot;$env:SystemRoot\System32\WindowsPowerShell\v1.0"
    $spotify = Join-Path $env:APPDATA 'Spotify'
    New-Item -ItemType Directory -Force -Path (Join-Path $spotify 'Apps'),$env:LOCALAPPDATA | Out-Null
    Set-Content -LiteralPath (Join-Path $spotify 'Spotify.exe') -Value ''
    Set-Content -LiteralPath (Join-Path $spotify 'prefs') -Value 'app.last-launched-version="1.2.3"'
    & (Join-Path $root 'scripts\bootstrap-spicetify.ps1')
    $cli = Join-Path $env:LOCALAPPDATA 'spicetify\spicetify.exe'
    if (-not (Test-Path -LiteralPath $cli)) { throw 'Spicetify was not installed in the test directory.' }
    $before = (Get-FileHash -LiteralPath $cli -Algorithm SHA256).Hash
    & (Join-Path $root 'scripts\bootstrap-spicetify.ps1')
    if ((Get-FileHash -LiteralPath $cli -Algorithm SHA256).Hash -ne $before) { throw 'Existing Spicetify was changed.' }
    $previousPreference = $ErrorActionPreference
    try {
        $ErrorActionPreference = 'Continue'
        $output = @(& $cli --bypass-admin -a path 2>&1)
        $exitCode = $LASTEXITCODE
    } finally { $ErrorActionPreference = $previousPreference }
    if ($exitCode -ne 0) { $output | ForEach-Object { Write-Host $_ }; throw 'Spicetify could not initialize its test config.' }
    $config = Get-Content -LiteralPath (Join-Path $env:SPICETIFY_CONFIG 'config-xpui.ini') -Raw
    if ($config -notmatch '(?m)^spotify_path\s*=\s*.+') { throw 'Spotify path was not initialized.' }
    if ($config -notmatch '(?m)^prefs_path\s*=\s*.+') { throw 'Spotify prefs path was not initialized.' }
    Write-Host 'Pinned Spicetify installation and first-run path detection passed.'
} finally {
    foreach ($key in $old.Keys) { [Environment]::SetEnvironmentVariable($key, $old[$key], 'Process') }
}
