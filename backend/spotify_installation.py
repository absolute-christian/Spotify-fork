"""Reapply the installed fork when Spotify replaces its client assets."""
import ctypes
import json
from pathlib import Path
import re
import subprocess
import time


def spotify_version(prefs):
    try:
        match = re.search(r'^app\.last-launched-version="([\w.\-]+)"', Path(prefs).read_text(encoding='utf-8'), re.M)
        return match[1] if match else None
    except (OSError, UnicodeError):
        return None


def process_running(executable):
    kernel, psapi = ctypes.WinDLL('kernel32'), ctypes.WinDLL('psapi')
    kernel.OpenProcess.argtypes = [ctypes.c_ulong, ctypes.c_bool, ctypes.c_ulong]
    kernel.OpenProcess.restype = ctypes.c_void_p
    kernel.QueryFullProcessImageNameW.argtypes = [ctypes.c_void_p, ctypes.c_ulong, ctypes.c_wchar_p, ctypes.POINTER(ctypes.c_ulong)]
    kernel.CloseHandle.argtypes = [ctypes.c_void_p]
    ids, size, session = (ctypes.c_ulong * 4096)(), ctypes.c_ulong(), ctypes.c_ulong()
    kernel.ProcessIdToSessionId(kernel.GetCurrentProcessId(), ctypes.byref(session))
    psapi.EnumProcesses(ctypes.byref(ids), ctypes.sizeof(ids), ctypes.byref(size))
    expected = str(Path(executable)).lower()
    for pid in ids[:size.value // ctypes.sizeof(ctypes.c_ulong)]:
        other_session = ctypes.c_ulong()
        if not kernel.ProcessIdToSessionId(pid, ctypes.byref(other_session)) or other_session.value != session.value:
            continue
        handle = kernel.OpenProcess(0x1000, False, pid)
        if not handle:
            continue
        try:
            buffer, length = ctypes.create_unicode_buffer(32768), ctypes.c_ulong(32768)
            if kernel.QueryFullProcessImageNameW(handle, 0, buffer, ctypes.byref(length)) and buffer.value.lower() == expected:
                return True
        finally:
            kernel.CloseHandle(handle)
    return False


class InstallationGuard:
    def __init__(self, root, running=process_running, launch=None, now=time.monotonic):
        self.root, self.running, self.now = Path(root), running, now
        self.launch = launch or self._launch
        self.worker, self.next_check, self.retry_at = None, 0, 0
        self.phase, self.exit_code = 'waiting', None

    def _launch(self):
        return subprocess.Popen(['powershell.exe', '-NoProfile', '-ExecutionPolicy', 'Bypass', '-File',
                                 str(self.root / 'scripts/install.ps1'), '-BackgroundRepair'], cwd=self.root,
                                creationflags=0x08000000, stdin=subprocess.DEVNULL,
                                stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    def tick(self):
        now = self.now()
        if self.worker is not None:
            code = self.worker.poll()
            if code is None:
                return self.phase
            self.exit_code, self.worker = code, None
            self.phase = 'ready' if code == 0 else 'failed'
            self.retry_at = now + (30 if code == 0 else 3600)
        if now < self.next_check or now < self.retry_at:
            return self.phase
        self.next_check = now + 30
        try:
            state = json.loads((self.root / '.local/install-state.json').read_text(encoding='utf-8-sig'))
            version = spotify_version(state['prefs'])
            assets = Path(state['executable']).parent / 'Apps/xpui'
            missing = not all((assets / path).is_file() for path in ('helper/spicetifyWrapper.js', 'spicetify-routes-my-wave.js', 'extensions/my-wave/wave-extension.js'))
            # A running client updates prefs to its actual version. Do not launch
            # Spotify merely because the user is signed into Windows.
            if (missing or version and version != state['version']) and self.running(state['executable']):
                self.worker, self.phase = self.launch(), 'repairing'
            else:
                self.phase = 'ready'
        except (OSError, ValueError, KeyError):
            self.phase = 'waiting'
        return self.phase
