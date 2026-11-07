"""Hidden per-user supervisor. The scheduler recovers this process itself."""
import ctypes
import hashlib
import json
import os
from pathlib import Path
import subprocess
import sys
import time
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / '.local'
IDENTITY = hashlib.sha256(str(ROOT).lower().encode()).hexdigest()[:16]


def existing_bridge():
    try:
        key = json.loads((DATA / 'bridge.json').read_text(encoding='utf-8'))['api_key']
        with urlopen(Request('http://127.0.0.1:5000/ready',
                             headers={'Authorization': 'Bearer ' + key}), timeout=2) as response:
            return response.status == 200
    except Exception:
        return False


def kernel_api():
    kernel = ctypes.WinDLL('kernel32', use_last_error=True)
    kernel.CreateMutexW.argtypes = [ctypes.c_void_p, ctypes.c_bool, ctypes.c_wchar_p]
    kernel.CreateMutexW.restype = ctypes.c_void_p
    kernel.OpenMutexW.argtypes = [ctypes.c_ulong, ctypes.c_bool, ctypes.c_wchar_p]
    kernel.OpenMutexW.restype = ctypes.c_void_p
    kernel.CloseHandle.argtypes = [ctypes.c_void_p]
    return kernel


def desktop_running(kernel):
    handle = kernel.OpenMutexW(0x00100000, False, 'Local\\ForkSpotifyOverlay-' + IDENTITY)
    if handle:
        kernel.CloseHandle(handle)
    return bool(handle)


def spawn(module):
    return subprocess.Popen([str(ROOT / '.venv/Scripts/pythonw.exe'), '-m', module],
                            cwd=ROOT, creationflags=0x08000000,
                            stdin=subprocess.DEVNULL, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def write_status(status):
    # Only fixed phases, PIDs and exit codes; never exception text or secrets.
    DATA.mkdir(exist_ok=True)
    temporary = DATA / 'autostart-status.tmp'
    temporary.write_text(json.dumps({**status, 'updated': time.time()}), encoding='utf-8')
    temporary.replace(DATA / 'autostart-status.json')


def supervise(kernel):
    from backend.spotify_installation import InstallationGuard
    installation = InstallationGuard(ROOT)
    worker = desktop = None
    status = {'project': str(ROOT), 'pid': os.getpid(), 'started': time.time(), 'restarts': 0}
    next_worker = next_desktop = 0
    last_status, last_write = None, 0
    while True:
        now = time.monotonic()
        if worker is not None and worker.poll() is not None:
            status['worker_exit'] = worker.returncode
            worker = None
            next_worker = now + 3
            status['restarts'] += 1
        if worker is None and now >= next_worker:
            if not existing_bridge():
                worker = spawn('backend')
                status['worker_pid'] = worker.pid
            next_worker = now + 3
        if desktop is not None and desktop.poll() is not None:
            status['desktop_exit'] = desktop.returncode
            desktop = None
            next_desktop = now + 10
        if desktop is None and now >= next_desktop:
            if (ROOT / 'dist/desktop/overlay.html').exists() and not desktop_running(kernel):
                desktop = spawn('backend.desktop')
                status['desktop_pid'] = desktop.pid
            next_desktop = now + 10
        status['phase'] = 'watching'
        status['installation'] = installation.tick()
        if installation.exit_code is not None:
            status['installation_exit'] = installation.exit_code
        if status != last_status or now - last_write >= 30:
            write_status(status)
            last_status, last_write = status.copy(), now
        time.sleep(3)


def main():
    os.chdir(ROOT)
    sys.path.insert(0, str(ROOT))
    sys.stdout = sys.stderr = open(os.devnull, 'w')
    kernel = kernel_api()
    handle = kernel.CreateMutexW(None, False, 'Local\\ForkSpotifySupervisor-' + IDENTITY)
    if not handle or ctypes.get_last_error() == 183:
        if handle:
            kernel.CloseHandle(handle)
        return
    try:
        supervise(kernel)
    except Exception as error:
        write_status({'project': str(ROOT), 'pid': os.getpid(), 'phase': 'failed',
                      'failure_type': type(error).__name__})
        raise SystemExit(1) from None
    finally:
        kernel.CloseHandle(handle)


if __name__ == '__main__':
    main()
