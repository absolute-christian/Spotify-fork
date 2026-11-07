param([switch]$NoApply, [switch]$BackgroundRepair)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $root
$installHash = [BitConverter]::ToString([Security.Cryptography.SHA256]::Create().ComputeHash([Text.Encoding]::UTF8.GetBytes($root.ToLowerInvariant()))).Replace('-', '').Substring(0, 16).ToLowerInvariant()
$installMutex = [Threading.Mutex]::new($false, ('Local\ForkSpotifyInstall-' + $installHash))
try { $installAcquired = $installMutex.WaitOne(0) }
catch [Threading.AbandonedMutexException] { $installAcquired = $true }
if (-not $installAcquired) { $installMutex.Dispose(); Write-Host 'Fork installation is already running'; return }
try {
$cli = Get-Command spicetify.exe -ErrorAction SilentlyContinue
if (-not $cli) {
    $candidates = @((Join-Path $env:LOCALAPPDATA 'spicetify\spicetify.exe'), (Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Links\spicetify.exe'))
    $packages = Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Packages'
    if (Test-Path -LiteralPath $packages) {
        $candidates += Get-ChildItem -LiteralPath $packages -Directory -Filter 'Spicetify.Spicetify_*' | ForEach-Object { Join-Path $_.FullName 'spicetify.exe' }
    }
    $spicetify = $candidates | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
    if (-not $spicetify) { throw 'Install Spicetify first: https://spicetify.app/docs/getting-started/' }
} else { $spicetify = $cli.Source }
$source = Join-Path $root 'dist\my-wave'
if (-not (Test-Path -LiteralPath (Join-Path $source 'manifest.json'))) {
    throw 'Build is missing. Run Setup.cmd first.'
}
$python = Join-Path $root '.venv\Scripts\python.exe'
if (-not (Test-Path -LiteralPath $python)) { throw 'Run Setup.cmd first.' }
& $python -m backend pair
if ($LASTEXITCODE -ne 0) { throw 'Failed to initialize pairing' }
$configuration = & $spicetify -c
if ($LASTEXITCODE -ne 0) { throw 'Cannot find Spicetify config' }
$configPath = ($configuration | Select-Object -Last 1).Trim()
if (-not (Test-Path -LiteralPath $configPath)) { throw 'Spicetify did not return an existing config path' }
$customApps = Join-Path (Split-Path -Parent $configPath) 'CustomApps'
$destination = Join-Path $customApps 'my-wave'
New-Item -ItemType Directory -Force -Path $destination | Out-Null
Copy-Item -LiteralPath (Join-Path $source 'index.js'),(Join-Path $source 'manifest.json') -Destination $destination -Force
Copy-Item -LiteralPath (Join-Path $source 'visual-assets.txt') -Destination $destination -Force
$pairing = Get-Content -LiteralPath (Join-Path $root '.local\bridge.json') -Raw | ConvertFrom-Json
$extension = Get-Content -LiteralPath (Join-Path $source 'wave-extension.js') -Raw -Encoding UTF8
$extension = $extension.Replace('__WAVE_BRIDGE_KEY__', $pairing.api_key)
[System.IO.File]::WriteAllText((Join-Path $destination 'wave-extension.js'), $extension, [System.Text.UTF8Encoding]::new($false))
& $spicetify config custom_apps my-wave
if ($LASTEXITCODE -ne 0) { throw 'Spicetify configuration failed' }
$spotifyExecutable = $null
if (-not $NoApply) {
    $spotifyDirectory = (& $spicetify config spotify_path | Select-Object -Last 1).Trim()
    $spotifyExecutable = Join-Path $spotifyDirectory 'Spotify.exe'
    if ($LASTEXITCODE -ne 0 -or -not (Test-Path -LiteralPath $spotifyExecutable -PathType Leaf)) { throw 'Cannot resolve the installed Spotify executable' }
    # Wait for the old client to release its Chromium profile before applying
    # files or starting a new client. Never reset or delete profile databases.
    $session = (Get-Process -Id $PID).SessionId
    $processes = @(Get-Process -Name Spotify -ErrorAction SilentlyContinue | Where-Object { $_.Path -eq $spotifyExecutable -and $_.SessionId -eq $session })
    foreach ($process in $processes) { if ($process.MainWindowHandle -ne 0) { $null = $process.CloseMainWindow() } }
    $deadline = (Get-Date).AddSeconds(5)
    do {
        $remaining = @(Get-Process -Name Spotify -ErrorAction SilentlyContinue | Where-Object { $_.Path -eq $spotifyExecutable -and $_.SessionId -eq $session })
        if (-not $remaining.Count) { break }
        Start-Sleep -Milliseconds 250
    } while ((Get-Date) -lt $deadline)
    foreach ($process in $remaining) {
        Stop-Process -Id $process.Id -ErrorAction SilentlyContinue
        $null = $process.WaitForExit(5000)
    }
    # Chromium child handles can outlive Stop-Process briefly. Wait for the
    # exact executable to disappear before deciding that applying is unsafe.
    $deadline = (Get-Date).AddSeconds(10)
    do {
        $remaining = @(Get-Process -Name Spotify -ErrorAction SilentlyContinue | Where-Object { $_.Path -eq $spotifyExecutable -and $_.SessionId -eq $session })
        if (-not $remaining.Count) { break }
        Start-Sleep -Milliseconds 250
    } while ((Get-Date) -lt $deadline)
    if (@(Get-Process -Name Spotify -ErrorAction SilentlyContinue | Where-Object { $_.Path -eq $spotifyExecutable -and $_.SessionId -eq $session }).Count) {
        throw 'The previous Spotify client has not exited; a second client was not launched'
    }
    # Windows PowerShell turns native stderr progress into NativeCommandError.
    # Use the process exit code, not the mere presence of progress on stderr.
    $previousPreference = $ErrorActionPreference
    try {
        $ErrorActionPreference = 'Continue'
        $applyOutput = @(& $spicetify -n apply 2>&1)
        $applyExit = $LASTEXITCODE
    } finally { $ErrorActionPreference = $previousPreference }
    $applyOutput | ForEach-Object { Write-Host $_ }
    if ($applyExit -ne 0 -and ($applyOutput -join "`n") -match 'Spotify version and backup version are mismatched') {
        Write-Host 'Spotify updated; refreshing the matching original backup before applying the fork'
        & $spicetify -n backup apply
        $applyExit = $LASTEXITCODE
    }
    if ($applyExit -ne 0) { throw 'Cannot apply the fork to the current Spotify version' }
}
if ($BackgroundRepair) {
    # This installer is the supervisor's child. Restarting its parent here would
    # terminate repair before it can launch the patched client.
    $null = Invoke-RestMethod 'http://127.0.0.1:5000/ready' -Headers @{Authorization=('Bearer ' + $pairing.api_key)} -TimeoutSec 5
} else {
    & (Join-Path $PSScriptRoot 'enable-autostart.ps1') -Restart
}
if (-not $NoApply) {
    $prefs = (& $spicetify config prefs_path | Select-Object -Last 1).Trim()
    $versionLine = Select-String -LiteralPath $prefs -Pattern '^app.last-launched-version="([\w.\-]+)"' | Select-Object -First 1
    if (-not $versionLine) { throw 'Cannot verify the installed Spotify version' }
    $stamp = @{version=$versionLine.Matches[0].Groups[1].Value; prefs=$prefs; executable=$spotifyExecutable}
    $stamp | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $root '.local\install-state.json') -Encoding UTF8
}
if (-not $NoApply) { Start-Process -FilePath $spotifyExecutable }
Write-Host 'Dotify home installed. Open Spotify normally; the Yandex component starts automatically in the background.' -ForegroundColor Green
} finally { $installMutex.ReleaseMutex(); $installMutex.Dispose() }
