import { test } from 'node:test';
import assert from 'node:assert/strict';
import { acceptDesktopState, overlayEventManager, overlayStorage, overlayEmit } from '../frontend/dotify/overlay-adapter.js';
import { bindSpotifyPlayer, spotifyCapabilities, spotifyReady } from '../frontend/src/bootstrap.js';

test('original overlay receives real playing metadata, Smart state and close/reopen events', async () => {
  const manager = overlayEventManager(), media = [], visibility = [];
  await manager.listen('miniplayer-sync', event => media.push(event.payload));
  await manager.listen('overlay-state-changed', event => visibility.push(event.payload.active));
  const state = { visible:true, online:true, settings:{}, snapshot:{active:true, playing:true, current:{uri:'yandex:old',title:'Wrong'},nativeUri:'spotify:track:actual',nativeTrack:{uri:'spotify:track:actual',title:'Playing',cover:'actual.jpg'},shuffle:true,shuffleType:'smart'}};
  acceptDesktopState(state);
  assert.equal(media.at(-1).currentSong.title, 'Playing');
  assert.equal(media.at(-1).shuffleType, 'smart');
  assert.equal(overlayStorage.load('dotify-current-song').id, 'spotify:track:actual');
  acceptDesktopState({...state,visible:false});
  assert.equal(media.at(-1).isPlaying,false);
  acceptDesktopState(state);
  assert.equal(media.at(-1).isPlaying,true);
  assert.deepEqual(visibility.slice(-3), [true,false,true]);
  manager.dispose();
});

test('original media buttons, volume and seeking await native command acknowledgements', async () => {
  const previous = globalThis.window, actions = [];
  globalThis.window = { pywebview:{api:{action:async(method,args) => {actions.push([method,args]);return {value:true};}}} };
  try {
    for(const name of ['toggle','next','previous','cycle-repeat','toggle-shuffle','seek:12.5','volume:0.4']) await overlayEmit('media-button',name);
    assert.deepEqual(actions,[['toggle',[]],['next',[]],['back',[]],['repeat',[]],['shuffle',[]],['seek',[12500]],['volume',[.4]]]);
  } finally { globalThis.window = previous; }
});

test('bootstrap waits for real player and navigation APIs rather than creating a dead singleton', () => {
  const S={Player:{playUri(){}},Platform:{PlayerAPI:{_state:{}},History:{listen(){}}},CosmosAsync:{}};
  assert.equal(spotifyReady(spotifyCapabilities(S,{head:{}})),false);
  S.Platform.History.replace=()=>{};
  assert.equal(spotifyReady(spotifyCapabilities(S,{head:{}})),false);
  S.Player.origin={_state:{}};
  assert.equal(spotifyReady(spotifyCapabilities(S,{head:{}})),true);
  delete S.CosmosAsync;
  delete S.Platform.PlayerAPI._state;
  assert.equal(spotifyReady(spotifyCapabilities(S,{head:{}})),true);
});

test('cold startup binds the actual registry player when origin injection is missing', () => {
  const listeners=[], api={_state:{isPaused:true},getState(){return this._state;},_events:{addListener:(...args)=>listeners.push(args)}};
  for(const name of ['play','pause','resume','seekTo','skipToNext','skipToPrevious','setRepeat','setShuffle']) api[name]=()=>{};
  const S={Player:{playUri(){},isPlaying(){return !this.origin._state.isPaused;}},Platform:{PlayerAPI:api}};
  assert.equal(bindSpotifyPlayer(S),true);
  assert.equal(S.Player.origin,api);
  assert.equal(S.Player.isPlaying(),false);
  api._state={isPaused:false};
  assert.equal(S.Player.isPlaying(),true);
  const original={_state:{isPaused:true}};
  S.Player.origin=original;
  assert.equal(bindSpotifyPlayer(S),true);
  assert.equal(S.Player.origin,original);
  delete S.Player.origin;delete api.seekTo;
  assert.equal(bindSpotifyPlayer(S),false);
  assert.equal(S.Player.origin,undefined);
});
