"""Window actions for this user's Spotify window only; no process injection."""
import ctypes
from ctypes import wintypes
from pathlib import Path

user = ctypes.WinDLL('user32', use_last_error=True)
kernel = ctypes.WinDLL('kernel32', use_last_error=True)
user.GetWindowLongW.argtypes = [wintypes.HWND, ctypes.c_int]
user.SetWindowLongW.argtypes = [wintypes.HWND, ctypes.c_int, ctypes.c_long]
user.PostMessageW.argtypes = [wintypes.HWND, wintypes.UINT, wintypes.WPARAM, wintypes.LPARAM]
user.SetWindowPos.argtypes = [wintypes.HWND, wintypes.HWND, ctypes.c_int, ctypes.c_int, ctypes.c_int, ctypes.c_int, wintypes.UINT]
user.GetPropW.argtypes = [wintypes.HWND, wintypes.LPCWSTR]
user.GetPropW.restype = wintypes.HANDLE
user.SetPropW.argtypes = [wintypes.HWND, wintypes.LPCWSTR, wintypes.HANDLE]
user.RemovePropW.argtypes = [wintypes.HWND, wintypes.LPCWSTR]
user.RemovePropW.restype = wintypes.HANDLE
user.MonitorFromWindow.argtypes = [wintypes.HWND, wintypes.DWORD]
user.MonitorFromWindow.restype = wintypes.HANDLE
user.GetMonitorInfoW.argtypes = [wintypes.HANDLE, ctypes.c_void_p]
kernel.OpenProcess.argtypes = [wintypes.DWORD, wintypes.BOOL, wintypes.DWORD]
kernel.OpenProcess.restype = wintypes.HANDLE
kernel.QueryFullProcessImageNameW.argtypes = [wintypes.HANDLE, wintypes.DWORD, wintypes.LPWSTR, ctypes.POINTER(wintypes.DWORD)]
kernel.CloseHandle.argtypes = [wintypes.HANDLE]
CAPTION_MASK = 0x00C00000 | 0x00080000 | 0x00020000 | 0x00010000


def saved(hwnd, key):
    return int(user.GetPropW(hwnd, 'ForkSpotify.' + key) or 0)


def remember(hwnd, key, value):
    if not user.SetPropW(hwnd, 'ForkSpotify.' + key, wintypes.HANDLE(value)):
        raise ValueError('Windows не сохранил состояние окна')


def forget(hwnd, key):
    user.RemovePropW(hwnd, 'ForkSpotify.' + key)


def exit_fullscreen(hwnd):
    if not saved(hwnd, 'Fullscreen'):
        return
    values = [saved(hwnd, 'Bounds' + str(i)) - 0x80000000 for i in range(4)]
    frame = saved(hwnd, 'Frame') - 1
    user.SetWindowLongW(hwnd, -16, (user.GetWindowLongW(hwnd, -16) & ~0x00040000) | frame)
    user.SetWindowPos(hwnd, None, *values, 0x0034)
    if saved(hwnd, 'WasMaximized'):
        user.ShowWindow(hwnd, 3)
    for key in ['Fullscreen', 'Frame', 'WasMaximized', *['Bounds' + str(i) for i in range(4)]]:
        forget(hwnd, key)


def spotify_window():
    found = []
    callback_type = ctypes.WINFUNCTYPE(wintypes.BOOL, wintypes.HWND, wintypes.LPARAM)

    def visit(hwnd, _):
        if not user.IsWindowVisible(hwnd):
            return True
        pid = wintypes.DWORD()
        user.GetWindowThreadProcessId(hwnd, ctypes.byref(pid))
        process = kernel.OpenProcess(0x1000, False, pid.value)
        if process:
            try:
                buffer, size = ctypes.create_unicode_buffer(32768), wintypes.DWORD(32768)
                if kernel.QueryFullProcessImageNameW(process, 0, buffer, ctypes.byref(size)) and Path(buffer.value).name.lower() == 'spotify.exe':
                    rect = wintypes.RECT()
                    user.GetWindowRect(hwnd, ctypes.byref(rect))
                    if rect.right - rect.left > 300 and rect.bottom - rect.top > 100:
                        found.append(hwnd)
            finally:
                kernel.CloseHandle(process)
        return True
    user.EnumWindows(callback_type(visit), 0)
    return found[0] if found else None


def window_state(active=False):
    hwnd = spotify_window()
    if not hwnd:
        return {'available': False}
    style = user.GetWindowLongW(hwnd, -16)
    # Window properties survive a backend restart and are removed by Windows
    # with the HWND. Restore only the bits we changed, preserving Spotify's state.
    if active and not saved(hwnd, 'Caption'):
        remember(hwnd, 'Caption', (style & CAPTION_MASK) + 1)
        user.SetWindowLongW(hwnd, -16, style & ~CAPTION_MASK)
        user.SetWindowPos(hwnd, None, 0, 0, 0, 0, 0x0037)
    elif not active and saved(hwnd, 'Caption'):
        exit_fullscreen(hwnd)
        user.SetWindowLongW(hwnd, -16, (user.GetWindowLongW(hwnd, -16) & ~CAPTION_MASK) | (saved(hwnd, 'Caption') - 1))
        forget(hwnd, 'Caption')
        user.SetWindowPos(hwnd, None, 0, 0, 0, 0, 0x0037)
    return {'available': True, 'maximized': bool(user.IsZoomed(hwnd)), 'fullscreen': bool(saved(hwnd, 'Fullscreen')),
            'native_caption_hidden': not bool(user.GetWindowLongW(hwnd, -16) & 0x00C00000)}


def window_action(action):
    hwnd = spotify_window()
    if not hwnd:
        raise ValueError('Окно Spotify не найдено')
    if action == 'minimize':
        user.ShowWindow(hwnd, 6)
    elif action == 'close':
        user.PostMessageW(hwnd, 0x0010, 0, 0)
    elif action == 'fullscreen':
        if not saved(hwnd, 'Fullscreen'):
            class MonitorInfo(ctypes.Structure):
                _fields_ = [('size', wintypes.DWORD), ('monitor', wintypes.RECT), ('work', wintypes.RECT), ('flags', wintypes.DWORD)]
            info = MonitorInfo()
            info.size = ctypes.sizeof(info)
            if not user.GetMonitorInfoW(user.MonitorFromWindow(hwnd, 2), ctypes.byref(info)):
                raise ValueError('Не удалось определить монитор Spotify')
            rect = wintypes.RECT()
            user.GetWindowRect(hwnd, ctypes.byref(rect))
            for i, value in enumerate([rect.left, rect.top, rect.right - rect.left, rect.bottom - rect.top]):
                remember(hwnd, 'Bounds' + str(i), value + 0x80000000)
            remember(hwnd, 'WasMaximized', 1 if user.IsZoomed(hwnd) else 0)
            style = user.GetWindowLongW(hwnd, -16)
            remember(hwnd, 'Frame', (style & 0x00040000) + 1)
            remember(hwnd, 'Fullscreen', 1)
            user.ShowWindow(hwnd, 9)
            user.SetWindowLongW(hwnd, -16, style & ~0x00040000)
            bounds = info.monitor
            user.SetWindowPos(hwnd, None, bounds.left, bounds.top, bounds.right - bounds.left, bounds.bottom - bounds.top, 0x0034)
    elif action in {'maximize', 'unmaximize', 'exitFullscreen'}:
        exit_fullscreen(hwnd)
        if action != 'exitFullscreen':
            user.ShowWindow(hwnd, 3 if action == 'maximize' else 9)
    else:
        raise ValueError('Неизвестная команда окна')
    return {'ok': True}
