import {test} from 'node:test';
import assert from 'node:assert/strict';
import {SpotifyShuffle} from '../frontend/src/shuffle.js';
import {SpotifyAdapter} from '../frontend/src/spicetify.js';
import {dispatchUi} from '../frontend/src/ui-dispatch.js';
import {manageSpotifyWindowButtons} from '../frontend/src/window-chrome.js';

function fixture() {
  const uri='spotify:playlist:example',calls=[],modes=new Map([[uri,0]]);
  const native={context:{uri},shuffle:false,smartShuffle:false};
  const S={Player:{data:{context:{uri}},getShuffle:()=>native.shuffle,setShuffle:async value=>{native.shuffle=value;native.smartShuffle=false},getRepeat:()=>0,setRepeat:async()=>{}},Platform:{
    PlayerAPI:{getState:()=>native,clearQueue:async()=>{}},ShuffleAPI:{
      getShuffle:async target=>modes.get(target)||0,getAvailableShuffleModes:async()=>[0,1,2],
      setShuffle:async(target,mode)=>{calls.push([target,mode]);modes.set(target,mode);if(target===native.context.uri){native.shuffle=mode!==0;native.smartShuffle=mode===2}},
    }}};
  return {S,uri,calls,modes,native,shuffle:new SpotifyShuffle(S,async()=>{})};
}
test('native shuffle cycles off, regular and Smart using Spotify availability and read-back',async()=>{
  const f=fixture();
  for(const mode of [1,2,0])assert.equal((await f.shuffle.cycle()).mode,mode);
  assert.deepEqual(f.calls.map(call=>call[1]),[1,2,0]);
  f.S.Platform.ShuffleAPI.getAvailableShuffleModes=async()=>[0,1];
  assert.equal((await f.shuffle.cycle()).mode,1);
  assert.equal((await f.shuffle.cycle()).mode,0);
  await assert.rejects(f.shuffle.set(2),/недоступен/);
  f.S.Platform.ShuffleAPI.getAvailableShuffleModes=async()=>[0];
  await assert.rejects(f.shuffle.cycle(),/запретил/);
});
test('shuffle rejects unconfirmed updates and serializes repeated clicks',async()=>{
  const f=fixture();
  await Promise.all([f.shuffle.cycle(),f.shuffle.cycle()]);
  assert.equal(f.calls.length,1);
  f.S.Platform.ShuffleAPI.setShuffle=async()=>{};
  await assert.rejects(f.shuffle.set(2),/не подтвердил/);
  assert.equal(f.shuffle.current(),1);
});
test('wave saves and restores Smart Shuffle, while direct tracks retain basic shuffle',async()=>{
  const f=fixture();await f.shuffle.set(2);
  const adapter=new SpotifyAdapter(f.S),saved=adapter.getModes();
  await adapter.isolate();assert.equal(f.shuffle.current(),0);
  await adapter.restore(saved);assert.equal(f.shuffle.current(),2);
  f.native.context.uri='spotify:track:single';f.S.Player.data.context.uri=f.native.context.uri;
  await adapter.setShuffle(false);assert.equal(f.shuffle.current(),0);
});
test('playlist shuffle changes native context preference without starting music; play preserves it',async()=>{
  const f=fixture(),played=[];
  const controller={state:{active:false},tick(){},player:{shuffleModes:f.shuffle,play:async uri=>played.push(uri),setShuffle:async()=>{throw new Error('must preserve contextual shuffle')}}};
  await dispatchUi(controller,'cycleCollectionShuffle',[f.uri]);
  assert.equal(played.length,0);
  await dispatchUi(controller,'playCollection',[f.uri]);
  assert.deepEqual(played,[f.uri]);assert.equal(f.modes.get(f.uri),1);
  controller.state.active=true;
  await assert.rejects(dispatchUi(controller,'cycleCollectionShuffle',[f.uri]),/Мою волну/);
});
test('native window buttons are hidden only inside Dotify and restored after queued resize',async()=>{
  const calls=[],events=new Map(),view={addEventListener:(name,fn)=>events.set(name,fn),removeEventListener:name=>events.delete(name)};
  const restore=manageSpotifyWindowButtons({NativeAPI:{setWindowButtonsVisibility:async visible=>calls.push(visible)}},view);
  await new Promise(resolve=>setImmediate(resolve));
  assert.deepEqual(calls,[false]);
  events.get('resize')();await restore();
  assert.equal(calls.at(-1),true);assert.equal(events.size,0);
});
