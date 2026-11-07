param([switch]$Disable, [switch]$Restart)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$registryPath = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run'
$name = 'ForkSpotifyBridge'
$taskName = 'ForkSpotify Background'
if ($Disable) {
    Remove-ItemProperty -LiteralPath $registryPath -Name $name -ErrorAction SilentlyContinue
    if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) {
        Stop-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
        Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
    }
    Get-CimInstance Win32_Process -Filter "Name='pythonw.exe'" | Where-Object {
        $_.CommandLine -like ('*' + (Join-Path $root 'backend\autostart.py') + '*')
    } | ForEach-Object { Stop-Process -Id $_.ProcessId -ErrorAction SilentlyContinue }
    # Stop only workers launched with this installation's private interpreter.
    $projectPython = Join-Path $root '.venv\Scripts\pythonw.exe'
    Get-CimInstance Win32_Process -Filter "Name='pythonw.exe'" | Where-Object {
        $_.ExecutablePath -eq $projectPython -and $_.CommandLine -match '\-m backend(?:\.desktop)?(?:\s|$)'
    } | ForEach-Object { Stop-Process -Id $_.ProcessId -ErrorAction SilentlyContinue }
    Write-Host 'Automatic background startup and recovery disabled'
    return
}
$python = Join-Path $root '.venv\Scripts\pythonw.exe'
$launcher = Join-Path $root 'backend\autostart.py'
if (-not (Test-Path -LiteralPath $python)) { throw 'Run Setup.cmd first: pythonw is missing' }
if ($Restart) {
    if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) {
        Disable-ScheduledTask -TaskName $taskName | Out-Null
        Stop-ScheduledTask -TaskName $taskName
    }
    # Stop only this checkout's launcher, including the previous unsupervised version.
    Get-CimInstance Win32_Process -Filter "Name='pythonw.exe'" | Where-Object {
        $_.CommandLine -like ('*' + $launcher + '*')
    } | ForEach-Object { Stop-Process -Id $_.ProcessId -ErrorAction SilentlyContinue }
    $listener = Get-NetTCPConnection -State Listen -LocalPort 5000 -ErrorAction SilentlyContinue | Where-Object LocalAddress -eq '127.0.0.1' | Select-Object -First 1
    if ($listener) {
        # Authenticate with this project's pairing key before stopping its worker.
        $pairing = Get-Content -LiteralPath (Join-Path $root '.local\bridge.json') -Raw | ConvertFrom-Json
        try { $null = Invoke-RestMethod 'http://127.0.0.1:5000/status' -Headers @{Authorization=('Bearer ' + $pairing.api_key)} -TimeoutSec 5 }
        catch { throw 'Port 5000 is not the paired project backend; it was left running' }
        $worker = Get-Process -Id $listener.OwningProcess -ErrorAction Stop
        if ($worker.ProcessName -notin @('python', 'pythonw')) { throw 'Unexpected backend process; left running' }
        Stop-Process -Id $worker.Id -ErrorAction Stop
    }
    $statusPath = Join-Path $root '.local\desktop-status.json'
    if (Test-Path -LiteralPath $statusPath) {
        $status = Get-Content -LiteralPath $statusPath -Raw | ConvertFrom-Json
        if ($status.project -eq $root -and $status.pid) {
            $desktop = Get-Process -Id $status.pid -ErrorAction SilentlyContinue
            if ($desktop -and $desktop.ProcessName -in @('python', 'pythonw')) {
                $started = [DateTimeOffset]::FromUnixTimeMilliseconds([long]($status.started * 1000))
                if ([Math]::Abs(($desktop.StartTime.ToUniversalTime() - $started.UtcDateTime).TotalSeconds) -lt 10) { Stop-Process -Id $desktop.Id }
            }
        }
    }
}
New-Item -Path $registryPath -Force | Out-Null
New-ItemProperty -LiteralPath $registryPath -Name $name -Value ('"' + $python + '" "' + $launcher + '"') -PropertyType String -Force | Out-Null
$identity = [Security.Principal.WindowsIdentity]::GetCurrent()
$action = New-ScheduledTaskAction -Execute $python -Argument ('"' + $launcher + '"') -WorkingDirectory $root
$triggers = @(
    (New-ScheduledTaskTrigger -AtLogOn -User $identity.Name),
    (New-ScheduledTaskTrigger -Once -At (Get-Date).AddSeconds(5) -RepetitionInterval (New-TimeSpan -Minutes 1))
)
$principal = New-ScheduledTaskPrincipal -UserId $identity.User.Value -LogonType Interactive -RunLevel Limited
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable `
    -ExecutionTimeLimit ([TimeSpan]::Zero) -MultipleInstances IgnoreNew -RestartCount 999 -RestartInterval (New-TimeSpan -Minutes 1)
Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $triggers -Principal $principal -Settings $settings `
    -Description 'Starts and recovers the local ForkSpotify component without a console or manual launcher.' -Force | Out-Null
Start-ScheduledTask -TaskName $taskName
# Fail installation if the paired worker never becomes ready. Do not report a
# successful setup just because CreateProcess or task registration succeeded.
$pairing = Get-Content -LiteralPath (Join-Path $root '.local\bridge.json') -Raw | ConvertFrom-Json
$ready = $false
for ($attempt = 0; $attempt -lt 30; $attempt++) {
    try {
        $null = Invoke-RestMethod 'http://127.0.0.1:5000/ready' -Headers @{Authorization=('Bearer ' + $pairing.api_key)} -TimeoutSec 2
        $ready = $true
        break
    } catch { Start-Sleep -Seconds 1 }
}
if (-not $ready) { throw 'Automatic background startup failed; inspect .local/autostart-status.json (no credentials).' }
Write-Host 'Automatic background startup and crash recovery enabled; paired backend is ready'
