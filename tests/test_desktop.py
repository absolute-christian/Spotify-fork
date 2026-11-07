import threading
import time
import pytest
from backend.desktop_state import DesktopState
from backend.overlay_geometry import overlay_bounds
from backend.desktop import overlay_requested, renderer_state, OverlayArtifact


def test_desktop_only_persists_design_and_expires_connection(tmp_path):
    clock = [100]
    state = DesktopState(tmp_path/'design.json', now=lambda: clock[0])
    state.set_settings({'token':'secret','playerSettings':{'overlay':{'mode':'card'},'password':'secret'}})
    assert 'secret' not in state.path.read_text()
    state.sync({'playing':True,'nativeUri':'spotify:track:playing','nativeTrack':{'uri':'spotify:track:playing'},'token':'secret'},[])
    assert state.state()['online'] and 'token' not in state.state()['snapshot']
    assert state.state()['snapshot']['nativeUri'] == state.state()['snapshot']['nativeTrack']['uri']
    clock[0] += 9
    assert not state.state()['online']
    assert DesktopState(state.path).settings['playerSettings']['overlay']['mode']=='card'


def test_commands_need_live_spotify_and_acknowledgement(tmp_path):
    state = DesktopState(tmp_path/'design.json')
    with pytest.raises(ValueError):
        state.command('toggle',[])
    state.sync({'playing':True},[])
    for method,args in [('connect',['private']),('volume',[100]),('seek',[-1])]:
        with pytest.raises(ValueError):
            state.command(method,args)
    result=[]
    worker=threading.Thread(target=lambda:result.append(state.command('toggle',[])))
    worker.start()
    deadline=time.monotonic()+2
    commands=[]
    while time.monotonic()<deadline and not commands:
        commands=state.sync({'playing':True},[])
        time.sleep(.01)
    assert len(commands)==1
    state.sync({'playing':False},[{'id':commands[0]['id'],'value':True}])
    worker.join(2)
    assert result==[{'value':True,'error':None}]
    assert state.sync({},[])==[]


def test_overlay_geometry_matches_modes_and_stays_on_screen():
    for mode in ['island','card','docked','fullscreen']:
        for position in ['top-right','bottom-left','left-center','center']:
            x,y,w,h=overlay_bounds({'mode':mode,'position':position,'size':150},(0,0,1920,1080))
            assert x>=0 and y>=0 and x+w<=1920 and y+h<=1080
    assert overlay_bounds({'mode':'fullscreen'},(100,200,1920,1080))==(100,200,1920,1080)


def test_overlay_waits_for_enabled_mode_and_live_spotify():
    enabled = {'online': True, 'visible': True, 'settings': {'playerSettings': {'overlay': {'mode': 'card'}}}}
    assert overlay_requested(enabled)
    assert not overlay_requested({})
    assert not overlay_requested({**enabled, 'online': False})
    assert not overlay_requested({**enabled, 'visible': False})
    for mode in ['disabled', 'unknown', None]:
        assert not overlay_requested({**enabled, 'settings': {'playerSettings': {'overlay': {'mode': mode}}}})


def test_overlay_renderer_does_not_double_apply_native_opacity():
    state = {'settings': {'playerSettings': {'overlay': {'mode': 'card', 'opacity': .6, 'size': 125}}}, 'snapshot': {'playing': True}}
    result = renderer_state(state)
    assert result['settings']['playerSettings']['overlay'] == {'mode': 'card', 'opacity': 1, 'size': 100}
    assert result['snapshot'] == {'playing': True}
    assert state['settings']['playerSettings']['overlay']['opacity'] == .6
    assert renderer_state({'settings': {}}) == {'settings': {}}


def test_overlay_reload_follows_replaced_bundle_and_ignores_unchanged_bytes(tmp_path):
    path = tmp_path/'overlay.html'
    path.write_text('original')
    artifact = OverlayArtifact(path)
    first = artifact.revision()
    path.touch()
    assert artifact.revision() == first
    replacement = tmp_path/'overlay.tmp'
    replacement.write_text('restored')
    replacement.replace(path)
    assert artifact.revision() != first
    assert artifact.revision() == artifact.digest


def test_docked_geometry_uses_original_dimensions_and_normalizes_corners():
    screen = (0, 0, 1920, 1080)
    assert overlay_bounds({'mode':'docked','position':'top-right'},screen) == (774, 0, 372, 90)
    assert overlay_bounds({'mode':'docked','position':'right-center'},screen) == (1808, 424, 112, 232)
    assert overlay_bounds({'mode':'docked','position':'bottom-left','w':500,'h':80},screen) == (694, 968, 532, 112)


def test_long_poll_wakes_on_command_and_publishes_ack_before_waiting_again(tmp_path):
    state = DesktopState(tmp_path/'design.json')
    polls, results = [], []
    poll = threading.Thread(target=lambda: polls.extend(state.sync({'playing':False},[],wait=3)))
    poll.start()
    deadline = time.monotonic()+1
    while not state.state()['online'] and time.monotonic()<deadline:
        time.sleep(.005)
    command = threading.Thread(target=lambda: results.append(state.command('toggle',[])))
    command.start()
    poll.join(1)
    assert not poll.is_alive() and len(polls)==1
    acknowledge = threading.Thread(target=lambda: state.sync({'playing':True},[{'id':polls[0]['id'],'value':True}],wait=.3))
    acknowledge.start()
    command.join(.2)
    assert results==[{'value':True,'error':None}]
    assert acknowledge.is_alive()
    acknowledge.join(1)
