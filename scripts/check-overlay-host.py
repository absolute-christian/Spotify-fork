"""Isolated Windows/WebView2 integration fixture, never connects to Spotify."""
import json
import ctypes
from ctypes import wintypes
from pathlib import Path
import shutil
import sys
import threading
import time

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from backend import desktop

project = desktop.ROOT
desktop.ROOT = project/'.local/overlay-host-fixture'
desktop.DATA = desktop.ROOT
(desktop.DATA/'result.json').unlink(missing_ok=True)
artifact = desktop.ROOT/'dist/desktop/overlay.html'
artifact.parent.mkdir(parents=True, exist_ok=True)
shutil.copyfile(project/'dist/desktop/overlay.html', artifact)
state = {'online': True, 'visible': True, 'settings': {'playerSettings': {'overlay': {
    'mode': 'docked', 'position': 'top-center', 'size': 100, 'opacity': .8, 'w': 340, 'h': 58}}},
    'snapshot': {'nativeTrack': {'uri': 'spotify:track:fixture', 'title': 'Проверка', 'artist': 'Локальное демо'},
                 'playing': True, 'progress': 42000, 'duration': 180000, 'volume': .5}}
actions = []
def request(path, body=None):
    if path == '/desktop/command':
        actions.append(body['method'])
        return {'value': True}
    return state
desktop.request = request
original_report = desktop.OverlayApi.report_status
started = False
result = {'fixture': True}

def report(self, stage, error='', build=''):
    global started
    original_report(self, stage, error, build)
    if stage != 'mounted' or started:
        return
    started = True
    def verify():
        window = self._window
        try:
            time.sleep(2)
            result['surface_diagnostics'] = window.evaluate_js("({viewport:[innerWidth,innerHeight],surfaces:[...document.querySelectorAll('[data-native-overlay-surface]')].map(e=>({rect:e.getBoundingClientRect().toJSON(),radius:getComputedStyle(e).borderRadius})),api:Object.keys(pywebview.api)})")
            bars = "[...document.querySelectorAll('div')].filter(e=>e.classList.contains('w-[2px]')).map(e=>e.getBoundingClientRect().height)"
            samples = []
            for _ in range(4):
                samples.append(window.evaluate_js(bars))
                time.sleep(.13)
            assert len(samples[0]) == 4 and samples[0] != samples[-1], samples
            result['animated_bars'] = True
            state['snapshot']['playing'] = False
            time.sleep(.7)
            paused = window.evaluate_js(bars)
            time.sleep(.2)
            assert paused == window.evaluate_js(bars)
            result['paused_bars_stop'] = True
            state['snapshot']['playing'] = True
            state['visible'] = False
            time.sleep(1)
            hidden = window.evaluate_js(bars)
            time.sleep(.2)
            assert hidden == window.evaluate_js(bars)
            result['hidden_bars_stop'] = True
            state['visible'] = True
            time.sleep(.7)
            resumed = window.evaluate_js(bars)
            time.sleep(.15)
            assert resumed != window.evaluate_js(bars)
            result['reopened_bars_resume'] = True
            # Ask Windows which native window receives input at the painted
            # center. A DOM mouseover alone cannot detect native click-through.
            rect = window.evaluate_js("(()=>{const r=document.querySelector('.dock-body .cursor-pointer').getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}})()")
            def native_target(point_css, scale=1):
                native = window.native
                hwnd = wintypes.HWND(int(native.Handle.ToInt64()))
                user = ctypes.windll.user32
                user.ClientToScreen.argtypes = [wintypes.HWND, ctypes.POINTER(wintypes.POINT)]
                user.WindowFromPoint.argtypes = [wintypes.POINT]
                user.WindowFromPoint.restype = wintypes.HWND
                user.GetAncestor.argtypes = [wintypes.HWND, wintypes.UINT]
                user.GetAncestor.restype = wintypes.HWND
                point = wintypes.POINT(round(point_css['x']*scale*native.DeviceDpi/96), round(point_css['y']*scale*native.DeviceDpi/96))
                user.ClientToScreen(hwnd, ctypes.byref(point))
                return user.GetAncestor(user.WindowFromPoint(point), 2) == hwnd.value
            result['native_input_hits_visible_surface'] = native_target(rect)
            assert result['native_input_hits_visible_surface'], 'Visible WebView surface passes native input through'
            assert not native_target({'x': 1, 'y': 89}), 'Transparent padding blocks the desktop'
            result['transparent_padding_passes_input'] = True
            # Synthetic DOM hover belongs only to this isolated fixture.
            hover = "document.querySelector('.dock-body .cursor-pointer').dispatchEvent(new MouseEvent('mouseover',{bubbles:true,relatedTarget:document.body}))"
            window.evaluate_js(hover)
            time.sleep(.5)
            buttons = window.evaluate_js('document.querySelectorAll("button").length')
            assert buttons == 3, buttons
            result['docked_hover_buttons'] = buttons
            window.evaluate_js('document.querySelectorAll("button")[1].click()')
            time.sleep(.5)
            assert actions == ['toggle'], actions
            result['original_button_dispatch'] = actions[:]
            window.evaluate_js("document.querySelector('[data-native-overlay-surface]').dispatchEvent(new MouseEvent('mouseout',{bubbles:true,relatedTarget:document.body}))")
            state['settings']['playerSettings']['overlay'].update(mode='card', size=150)
            time.sleep(1)
            collapsed = window.evaluate_js("(()=>{const r=document.querySelector('[data-native-overlay-surface]').getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2,width:r.width,height:r.height,left:r.left,top:r.top}})()")
            assert round(collapsed['width']) == 248 and round(collapsed['height']) == 48, collapsed
            assert native_target(collapsed,1.5), 'Collapsed card cannot receive mouse enter'
            assert not native_target({'x':collapsed['left']+1,'y':collapsed['top']+1},1.5), 'Rounded corner blocks input'
            result['collapsed_card_receives_native_input'] = True
            result['rounded_corner_passes_input'] = True
            window.evaluate_js("document.querySelector('#root>div>div').dispatchEvent(new MouseEvent('mouseover',{bubbles:true,relatedTarget:document.body}))")
            time.sleep(.6)
            buttons = window.evaluate_js('document.querySelectorAll("button").length')
            assert buttons == 5, buttons
            result['card_hover_buttons'] = buttons
            dimensions = window.evaluate_js('({w:innerWidth,h:innerHeight,rects:[...document.querySelectorAll("button")].map(e=>{const r=e.getBoundingClientRect();return {right:r.right,bottom:r.bottom}})})')
            assert all(r['right'] <= dimensions['w'] and r['bottom'] <= dimensions['h'] for r in dimensions['rects']), dimensions
            result['scaled_controls_fit'] = True
            controls = window.evaluate_js('[...document.querySelectorAll("button")].map(e=>{const r=e.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}})')
            hits = [native_target(point,1.5) for point in controls]
            result['expanded_input_diagnostics'] = {'controls':controls,'hits':hits,'surface':self._surface,'dpi':window.native.DeviceDpi}
            assert all(hits), 'Expanded buttons pass native input through'
            result['scaled_buttons_receive_native_input'] = True
            # Changing zoom alone can leave the CSS rectangle unchanged.
            state['settings']['playerSettings']['overlay']['size'] = 100
            time.sleep(1)
            controls = window.evaluate_js('[...document.querySelectorAll("button")].map(e=>{const r=e.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}})')
            assert len(controls) == 5 and all(native_target(point) for point in controls)
            result['rescaled_buttons_receive_native_input'] = True
            text = artifact.read_text(encoding='utf-8')
            before = self._status['page_build']
            replacement = artifact.with_suffix('.tmp')
            replacement.write_text(text.replace('name="forkspotify-build" content="'+before+'"', 'name="forkspotify-build" content="reload-verified"'), encoding='utf-8')
            replacement.replace(artifact)
            deadline = time.monotonic()+10
            while time.monotonic() < deadline and self._status.get('page_build') != 'reload-verified':
                time.sleep(.2)
            assert self._status.get('page_build') == 'reload-verified', self._status
            result['native_reload'] = True
            result['ok'] = True
        except Exception as failure:
            result.update(ok=False, error=str(failure))
        finally:
            (desktop.DATA/'result.json').write_text(json.dumps(result), encoding='utf-8')
            window.destroy()
    threading.Thread(target=verify, daemon=True).start()
desktop.OverlayApi.report_status = report
def timeout():
    time.sleep(50)
    if not (desktop.DATA/'result.json').exists():
        (desktop.DATA/'result.json').write_text(json.dumps({'ok': False, 'error': 'Fixture timed out'}),encoding='utf-8')
        __import__('os')._exit(1)
threading.Thread(target=timeout,daemon=True).start()
desktop.main()
if not result.get('ok'):
    raise SystemExit(1)
