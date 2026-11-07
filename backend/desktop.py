"""Original Dotify overlay hosted in a separate transparent WebView2 window."""
import ctypes
from ctypes import wintypes
import hashlib
import json
import math
import os
from pathlib import Path
import sys
import threading
import time
from urllib.request import Request, urlopen

from .config import ROOT, DATA, pairing_key
from .overlay_geometry import overlay_bounds

class OverlayArtifact:
    """Read a bundle again only after its atomic replacement, not on every poll."""
    def __init__(self, path):
        self.path, self.stamp, self.digest = path, None, ''

    def revision(self):
        stat = self.path.stat()
        stamp = (stat.st_mtime_ns, stat.st_size, stat.st_ino)
        if stamp != self.stamp:
            self.digest = hashlib.sha256(self.path.read_bytes()).hexdigest()
            self.stamp = stamp
        return self.digest


def renderer_state(state):
    # Overall opacity belongs to the native layered window so it blends with
    # other applications, rather than with the opaque WinForms host background.
    overlay = state.get('settings', {}).get('playerSettings', {}).get('overlay')
    if isinstance(overlay, dict):
        settings = state['settings']
        # WebView zoom scales the entire original layout, including its hover
        # bounds. A second CSS transform clips controls at sizes above 100%.
        state = {**state, 'settings': {**settings, 'playerSettings': {**settings['playerSettings'], 'overlay': {**overlay, 'opacity': 1, 'size': 100}}}}
    return state


def set_native_opacity(hwnd, opacity):
    user = ctypes.windll.user32
    user.GetWindowLongW.argtypes = [wintypes.HWND, ctypes.c_int]
    user.SetWindowLongW.argtypes = [wintypes.HWND, ctypes.c_int, ctypes.c_long]
    user.SetLayeredWindowAttributes.argtypes = [wintypes.HWND, wintypes.DWORD, ctypes.c_ubyte, wintypes.DWORD]
    # pywebview's hidden-window setup writes Form.Opacity=1 and removes this
    # style after before_show. Restore it whenever applying native opacity.
    style = user.GetWindowLongW(hwnd, -20)
    desired = (style | 0x00080000 | 0x00000080 | 0x08000000) & ~(0x00040000 | 0x00000020)
    if style != desired:
        user.SetWindowLongW(hwnd, -20, desired)
    alpha = round(255 * max(0., min(1., float(opacity))))
    # Color-keying the WinForms parent makes Windows hit-test the whole GPU
    # WebView surface as transparent, including visible buttons. A native region
    # clips only the outside of the original shape; alpha controls opacity.
    if not user.SetLayeredWindowAttributes(hwnd, 0, alpha, 0x2):
        raise OSError('Windows не применил прозрачность оверлея')


def request(path, body=None):
    data = None if body is None else json.dumps(body).encode()
    headers = {'Authorization': 'Bearer ' + pairing_key()}
    if data is not None:
        headers['Content-Type'] = 'application/json'
    with urlopen(Request('http://127.0.0.1:5000' + path, data=data, headers=headers), timeout=10) as response:
        return json.load(response)


class OverlayApi:
    _window = None
    _mounted = False
    _status = None
    _save_status = None
    _surface = None

    def __init__(self):
        self._state_lock = threading.Lock()
        self._latest_state = None
        self._state_updated = None

    def state(self, max_age=.5):
        # Renderer polling supplies fresh state at 4Hz. The native window
        # monitor reuses it, and fetches itself if the renderer is suspended.
        with self._state_lock:
            now = time.monotonic()
            if self._latest_state is not None and now - self._state_updated < max_age:
                return self._latest_state
            revision = self._latest_state.get('settingsRevision') if self._latest_state else None
            path = '/desktop/state' + ('?settings_revision=' + revision if revision else '')
            state = request(path)
            if 'settings' not in state and self._latest_state is not None:
                state = {**state, 'settings': self._latest_state['settings']}
            # Old backends and the isolated renderer fixture send full settings.
            # Compute a compatibility revision only for that older protocol.
            if not state.get('settingsRevision'):
                state = {**state, 'settingsRevision': hashlib.sha256(json.dumps(state.get('settings', {}), sort_keys=True).encode()).hexdigest()}
            self._latest_state = state
            self._state_updated = time.monotonic()
            return state

    def surface(self, bounds):
        if not self._window or not self._window.native:
            return
        # The local page reports CSS geometry only. All drawing and hit-testing
        # stay native, and the extracted component still owns hover/clicks.
        values = [bounds[key] for key in ('x', 'y', 'width', 'height')]
        radii = bounds['radii']
        if len(radii) != 4 or any(len(pair) != 2 for pair in radii):
            raise ValueError('Invalid overlay radii')
        if not all(isinstance(v, (int, float)) and math.isfinite(v) for v in values + [v for pair in radii for v in pair]):
            raise ValueError('Invalid overlay surface')
        from System import Action
        def apply():
            from System.Drawing import Region
            from System.Drawing.Drawing2D import GraphicsPath
            native = self._window.native
            zoom = float(native.browser.webview.ZoomFactor)
            # WebView CSS pixels include its zoom and Windows display scaling.
            scale = zoom * native.DeviceDpi / 96
            x, y, width, height = [float(v) * scale for v in values]
            path = GraphicsPath()
            try:
                if width > 0 and height > 0:
                    for (rx, ry), (cx, cy, angle) in zip(radii, [(x, y, 180), (x+width, y, 270), (x+width, y+height, 0), (x, y+height, 90)]):
                        rx, ry = max(0, min(width/2, rx*scale)), max(0, min(height/2, ry*scale))
                        if rx and ry:
                            left = cx if angle in (180, 90) else cx-2*rx
                            top = cy if angle in (180, 270) else cy-2*ry
                            path.AddArc(float(left), float(top), float(2*rx), float(2*ry), float(angle), 90.)
                        else:
                            path.AddLine(float(cx), float(cy), float(cx), float(cy))
                    path.CloseFigure()
                    region = Region(path)
                else:
                    region = Region(); region.MakeEmpty()
                previous = native.Region
                native.Region = region
                if previous is not None:
                    previous.Dispose()
                self._surface = bounds
                if self._status is not None and self._status.get('input_region') != 'original-surface':
                    self._status['input_region'] = 'original-surface'
                    self._save_status()
            finally:
                path.Dispose()
        self._window.native.Invoke(Action(apply))

    def report_status(self, stage, error='', build=''):
        self._mounted = stage == 'mounted' and not error
        if self._status is not None:
            self._status.update(page=str(stage)[:40], page_error=str(error)[:500])
            if stage == 'mounted':
                self._status['page_build'] = str(build)[:64]
                self._status['phase'] = 'shown' if self._status.get('visible') else 'hidden'
            self._save_status()

    def snapshot(self, settings_revision=None):
        try:
            state = renderer_state(self.state(max_age=0))
            if state.get('settingsRevision') == settings_revision:
                state = {key: value for key, value in state.items() if key != 'settings'}
            return state
        except Exception:
            return {'settings': {}, 'snapshot': {}, 'online': False}

    def action(self, method, args):
        try:
            return request('/desktop/command', {'method': method, 'args': args})
        except Exception:
            return {'error': 'Оверлей потерял связь со Spotify'}

    def toggle(self):
        return request('/desktop/toggle', {})

    def drag(self):
        if self._window and self._window.native:
            handle = int(self._window.native.Handle.ToInt64())
            user = ctypes.windll.user32
            user.ReleaseCapture()
            user.PostMessageW(wintypes.HWND(handle), 0x00A1, 2, 0)


def overlay_requested(state):
    settings = state.get('settings', {})
    overlay = settings.get('playerSettings', {}).get('overlay', {})
    return bool(state.get('online') and state.get('visible') and
                overlay.get('mode') in {'island', 'card', 'docked', 'fullscreen'})


def main():
    if os.name != 'nt':
        return
    # Keep a project-specific mutex alive for this process lifetime.
    kernel = ctypes.WinDLL('kernel32', use_last_error=True)
    kernel.CreateMutexW.argtypes = [ctypes.c_void_p, wintypes.BOOL, wintypes.LPCWSTR]
    kernel.CreateMutexW.restype = wintypes.HANDLE
    name = 'Local\\ForkSpotifyOverlay-' + hashlib.sha256(str(ROOT).lower().encode()).hexdigest()[:16]
    handle = kernel.CreateMutexW(None, False, name)
    if not handle or ctypes.get_last_error() == 183:
        return
    sys.stdout = sys.stderr = open(os.devnull, 'w')
    api = OverlayApi()
    status = {'ready': False, 'hotkey': False, 'visible': False, 'phase': 'waiting',
              'renderer': 'WebView2', 'pid': os.getpid(), 'started': time.time(), 'project': str(ROOT)}
    running = threading.Event()
    running.set()
    status_lock = threading.Lock()

    def save_status():
        with status_lock:
            path = DATA/'desktop-status.json'
            temp = path.with_suffix('.tmp')
            temp.write_text(json.dumps(status), encoding='utf-8')
            temp.replace(path)

    api._status, api._save_status = status, save_status
    save_status()

    def hotkey():
        user = ctypes.windll.user32
        status['hotkey'] = bool(user.RegisterHotKey(None, 1, 0x4001, ord('K')))
        save_status()
        if not status['hotkey']:
            return
        message = wintypes.MSG()
        while running.is_set() and user.GetMessageW(ctypes.byref(message), None, 0, 0) > 0:
            if message.message == 0x0312:
                try:
                    api.toggle()
                except Exception:
                    pass
        user.UnregisterHotKey(None, 1)

    threading.Thread(target=hotkey, daemon=True).start()
    # No HWND or taskbar entry exists until Spotify is connected and the user
    # enables an overlay mode. WebView2 itself is also loaded only at that point.
    while not overlay_requested(api.state()):
        time.sleep(.5)

    # Set before WebView2 initialization to avoid its default white first frame.
    os.environ['WEBVIEW2_DEFAULT_BACKGROUND_COLOR'] = '00000000'
    import webview
    artifact = OverlayArtifact(ROOT/'dist/desktop/overlay.html')
    loaded_revision = artifact.revision()
    overlay_url = artifact.path.as_uri()
    # NavigateToString has a 2 MB limit. The original embedded fonts and bundle
    # exceed that limit, so navigate to the local artifact instead of passing HTML.
    window = webview.create_window('ForkSpotify Overlay', url=overlay_url,
                                  js_api=api, width=400, height=200, min_size=(1, 1), frameless=True,
                                  transparent=True, background_color='#000000', on_top=True, hidden=True,
                                  resizable=False, easy_drag=False, shadow=False, focus=False)
    api._window = window

    def prepare_window():
        native = window.native
        from System.Drawing import Color
        native.BackColor = Color.Black
        # Hide the unused padding until the original component reports its
        # first shape. It must never become an opaque rectangle on the desktop.
        from System.Drawing import Region
        empty = Region(); empty.MakeEmpty(); native.Region = empty
        # Changing WinForms.ShowInTaskbar recreates its HWND after WebView2 has
        # already started initializing and aborts that initialization (E_ABORT).
        # Use the existing handle's tool-window style without recreating it.
        user = ctypes.windll.user32
        user.GetWindowLongW.argtypes = [wintypes.HWND, ctypes.c_int]
        user.SetWindowLongW.argtypes = [wintypes.HWND, ctypes.c_int, ctypes.c_long]
        hwnd = wintypes.HWND(int(native.Handle.ToInt64()))
        style = user.GetWindowLongW(hwnd, -20)
        user.SetWindowLongW(hwnd, -20, (style | 0x00000080 | 0x08000000 | 0x00080000) & ~0x00040000)
        set_native_opacity(hwnd, 1)
        # pywebview's transparency workaround otherwise shows the Form during
        # navigation even with hidden=True. Keep it hidden until React commits.
        browser = native.browser
        browser.webview.DefaultBackgroundColor = Color.Transparent
        browser.webview.NavigationStarting -= browser.on_navigation_start

        def own_page_only(sender, args):
            if str(args.Uri) != overlay_url:
                args.Cancel = True
        browser.webview.NavigationStarting += own_page_only
        status.update(phase='loading', taskbar=not bool(user.GetWindowLongW(hwnd, -20) & 0x00000080), color_key=False,
                      parent_rgb=int(native.BackColor.ToArgb()) & 0xffffff, webview_alpha=int(browser.webview.DefaultBackgroundColor.A))
        save_status()

    window.events.before_show += prepare_window

    def monitor():
        status['ready'] = True
        save_status()
        nonlocal loaded_revision
        old_config, shown, hide_started = None, False, None
        next_artifact_check = 0
        status['artifact_sha256'] = loaded_revision
        window.hide()
        while running.is_set():
            try:
                # Read the original opacity here; only the renderer receives 1.
                state = api.state()
                if time.monotonic() >= next_artifact_check:
                    next_artifact_check = time.monotonic() + 2
                    revision = artifact.revision()
                    if revision != loaded_revision:
                        api._mounted = False
                        api._surface = None
                        window.hide()
                        shown = False
                        loaded_revision = revision
                        status.update(visible=False, phase='reloading', page='loading', page_error='', artifact_sha256=revision)
                        save_status()
                        # System.Uri treats '?' in a file URL as part of the
                        # Windows filename. Reload the exact local URL instead.
                        from System import Action
                        window.native.Invoke(Action(lambda: window.native.browser.webview.CoreWebView2.Reload()))
                overlay = state.get('settings', {}).get('playerSettings', {}).get('overlay', {})
                visible = overlay_requested(state) and api._mounted and api._surface is not None
                config = json.dumps(overlay, sort_keys=True)
                if config != old_config:
                    screen = webview.screens[0]
                    bounds = overlay_bounds(overlay, (screen.x, screen.y, screen.width, screen.height))
                    window.resize(bounds[2], bounds[3])
                    window.move(bounds[0], bounds[1])
                    from System import Action
                    zoom = min(1.5, max(.5, float(overlay.get('size', 100))/100)) if overlay.get('mode') != 'fullscreen' else 1
                    window.native.Invoke(Action(lambda: setattr(window.native.browser.webview, 'ZoomFactor', zoom)))
                    if api._surface is not None:
                        api.surface(api._surface)
                    set_native_opacity(wintypes.HWND(int(window.native.Handle.ToInt64())), overlay.get('opacity', .9))
                    old_config = config
                if visible:
                    hide_started = None
                elif shown and hide_started is None:
                    hide_started = time.monotonic()
                # Let the original renderer consume overlay-state-changed and
                # finish its 200ms exit transition before hiding its HWND.
                if visible != shown and (visible or time.monotonic() - hide_started >= .5):
                    window.show() if visible else window.hide()
                    shown = visible
                    status.update(visible=visible, mode=overlay.get('mode', 'disabled'), phase='shown' if visible else 'hidden')
                    save_status()
            except Exception as error:
                status['monitor_error'] = type(error).__name__
                save_status()
                if shown:
                    window.hide()
                    shown = False
            time.sleep(.5)

    def stop():
        running.clear()
        status['ready'] = False
        save_status()
    window.events.closed += stop
    webview.start(monitor, gui='edgechromium', private_mode=True)


if __name__ == '__main__':
    try:
        main()
    except Exception as error:
        (DATA/'desktop-status.json').write_text(json.dumps({'ready':False,'error':type(error).__name__+': '+str(error)}),encoding='utf-8')
