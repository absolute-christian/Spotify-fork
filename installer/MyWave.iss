#define AppName "My Wave for Spotify"
#define AppVersion "0.1.0"
[Setup]
AppId={{D762DAE8-68B5-431C-AE86-52EFA3392315}
AppName={#AppName}
AppVersion={#AppVersion}
DefaultDirName={localappdata}\Programs\MyWaveSpotify
DefaultGroupName={#AppName}
PrivilegesRequired=lowest
ArchitecturesAllowed=x64compatible
ArchitecturesInstallIn64BitMode=x64compatible
OutputDir=..\release
OutputBaseFilename=MyWave-Setup
Compression=lzma2
SolidCompression=yes
WizardStyle=modern
UninstallDisplayName={#AppName}
[Files]
Source: "..\backend\*.py"; DestDir: "{app}\backend"; Flags: ignoreversion
Source: "..\scripts\install.ps1"; DestDir: "{app}\scripts"; Flags: ignoreversion
Source: "..\scripts\enable-autostart.ps1"; DestDir: "{app}\scripts"; Flags: ignoreversion
Source: "..\scripts\bootstrap-spicetify.ps1"; DestDir: "{app}\scripts"; Flags: ignoreversion
Source: "..\scripts\setup-release.ps1"; DestDir: "{app}\scripts"; Flags: ignoreversion
Source: "..\dist\my-wave\*"; DestDir: "{app}\dist\my-wave"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "..\dist\desktop\*"; DestDir: "{app}\dist\desktop"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "..\build\embedded-python\*"; DestDir: "{app}\.venv\Scripts"; Flags: ignoreversion recursesubdirs createallsubdirs
[Icons]
Name: "{group}\Configure My Wave"; Filename: "{sys}\WindowsPowerShell\v1.0\powershell.exe"; Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\scripts\setup-release.ps1"""; WorkingDir: "{app}"
[Run]
Filename: "{sys}\WindowsPowerShell\v1.0\powershell.exe"; Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\scripts\setup-release.ps1"""; WorkingDir: "{app}"; Description: "Configure Spotify and start the background component"; Flags: postinstall waituntilterminated skipifsilent
[UninstallRun]
Filename: "{sys}\WindowsPowerShell\v1.0\powershell.exe"; Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\scripts\enable-autostart.ps1"" -Disable"; WorkingDir: "{app}"; Flags: runhidden waituntilterminated; RunOnceId: "StopMyWave"
