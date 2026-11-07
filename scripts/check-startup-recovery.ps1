param([switch]$Supervisor)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$pairing = Get-Content -LiteralPath (Join-Path $root '.local\bridge.json') -Raw | ConvertFrom-Json
$headers = @{Authorization=('Bearer ' + $pairing.api_key)}
$null = Invoke-RestMethod 'http://127.0.0.1:5000/ready' -Headers $headers -TimeoutSec 3
$watch = Get-Content -LiteralPath (Join-Path $root '.local\autostart-status.json') -Raw | ConvertFrom-Json
if ($watch.project -ne $root) { throw 'Supervisor belongs to another checkout' }
if ($Supervisor) {
    $target = Get-CimInstance Win32_Process -Filter ('ProcessId=' + $watch.pid)
    if (-not $target -or $target.Name -ne 'pythonw.exe' -or $target.CommandLine -notlike ('*' + (Join-Path $root 'backend\autostart.py') + '*')) {
        throw 'Supervisor identity did not match; nothing stopped'
    }
} else {
    $listener = Get-NetTCPConnection -State Listen -LocalPort 5000 | Where-Object LocalAddress -eq '127.0.0.1' | Select-Object -First 1
    $target = Get-CimInstance Win32_Process -Filter ('ProcessId=' + $listener.OwningProcess)
    if (-not $target -or $target.Name -ne 'pythonw.exe' -or $target.CommandLine -notmatch '\-m backend(?:\s|$)') {
        throw 'Paired backend process identity did not match; nothing stopped'
    }
}
$oldPid = $target.ProcessId
$clock = [Diagnostics.Stopwatch]::StartNew()
Stop-Process -Id $oldPid
$recovered = $false
$limit = if ($Supervisor) { 100 } else { 25 }
while ($clock.Elapsed.TotalSeconds -lt $limit) {
    Start-Sleep -Seconds 1
    try {
        $current = Get-Content -LiteralPath (Join-Path $root '.local\autostart-status.json') -Raw | ConvertFrom-Json
        if ($Supervisor -and ($current.pid -eq $oldPid -or $current.project -ne $root)) { continue }
        $null = Invoke-RestMethod 'http://127.0.0.1:5000/ready' -Headers $headers -TimeoutSec 2
        $listener = Get-NetTCPConnection -State Listen -LocalPort 5000 | Where-Object LocalAddress -eq '127.0.0.1' | Select-Object -First 1
        if (-not $Supervisor -and $listener.OwningProcess -eq $oldPid) { continue }
        if (-not (Get-Process -Id $current.pid -ErrorAction SilentlyContinue)) { continue }
        $recovered = $true
        break
    } catch { }
}
$result = [pscustomobject]@{Scenario=$(if ($Supervisor) {'supervisor-crash'} else {'backend-crash'});Recovered=$recovered;Seconds=[Math]::Round($clock.Elapsed.TotalSeconds, 1)}
$result | ConvertTo-Json -Compress
if (-not $recovered) { throw 'Automatic recovery failed' }
