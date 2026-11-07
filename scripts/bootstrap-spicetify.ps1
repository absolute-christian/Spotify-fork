# Install a pinned official Spicetify release only when it is not already present.
$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$version = '2.46.4'
$sha256 = '0490380bf59e00c94cf6cb12bfac5152791b91bb8009aceef53c49815b45a56f'
$existing = Get-Command spicetify.exe -ErrorAction SilentlyContinue
$target = Join-Path $env:LOCALAPPDATA 'spicetify'
if ($existing -or (Test-Path -LiteralPath (Join-Path $target 'spicetify.exe')) -or
    (Test-Path -LiteralPath (Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Links\spicetify.exe'))) { return }
$packages = Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Packages'
if (Test-Path -LiteralPath $packages) {
    $installed = Get-ChildItem -LiteralPath $packages -Directory -Filter 'Spicetify.Spicetify_*' |
        Where-Object { Test-Path -LiteralPath (Join-Path $_.FullName 'spicetify.exe') } |
        Select-Object -First 1
    if ($installed) { return }
}
if (Test-Path -LiteralPath $target) { throw "Spicetify folder exists without spicetify.exe; left unchanged: $target" }
if (-not (Test-Path -LiteralPath (Join-Path $env:APPDATA 'Spotify\Spotify.exe'))) {
    throw 'Spotify was not found. Install the desktop version, open it and sign in first.'
}
$temporary = Join-Path ([IO.Path]::GetTempPath()) ('wave-spicetify-' + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $temporary | Out-Null
try {
    $zip = Join-Path $temporary 'spicetify.zip'
    $unpacked = Join-Path $temporary 'unpacked'
    $url = "https://github.com/spicetify/cli/releases/download/v$version/spicetify-$version-windows-x64.zip"
    Write-Host "Downloading official Spicetify $version..."
    Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile $zip
    if ((Get-FileHash -Algorithm SHA256 -LiteralPath $zip).Hash.ToLowerInvariant() -ne $sha256) {
        throw 'Spicetify download failed integrity verification.'
    }
    Expand-Archive -LiteralPath $zip -DestinationPath $unpacked
    if (-not (Test-Path -LiteralPath (Join-Path $unpacked 'spicetify.exe'))) { throw 'Invalid Spicetify archive.' }
    # Do not overwrite an installation that appeared while downloading.
    if (Test-Path -LiteralPath $target) { throw 'Spicetify appeared during download; left unchanged. Run setup again.' }
    Move-Item -LiteralPath $unpacked -Destination $target
    Write-Host 'Spicetify installed for the current user.'
} finally {
    Remove-Item -LiteralPath $temporary -Recurse -Force -ErrorAction SilentlyContinue
}
