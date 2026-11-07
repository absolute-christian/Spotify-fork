import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createStateStore,selectedSnapshot,shallowEqual} from '../frontend/dotify/state-store.js';
import {snapshotCadence} from '../frontend/src/snapshot-cadence.js';

test('unchanged snapshots do not notify stores and selectors preserve unrelated values',()=>{
  const store=createStateStore({song:'A',playing:true,progress:0}),cache={};let notifications=0;
  store.subscribe(()=>notifications++);
  const select=state=>({song:state.song,playing:state.playing});
  const initial=selectedSnapshot(store.getState(),select,cache);
  for(let i=0;i<2000;i++)store.setState({song:'A',playing:true,progress:0});
  assert.equal(notifications,0);
  store.setState({progress:250});
  assert.equal(selectedSnapshot(store.getState(),select,cache),initial);
  store.setState({song:'B'});
  assert.notEqual(selectedSnapshot(store.getState(),select,cache),initial);
  assert.equal(notifications,2);
  assert.equal(shallowEqual(new Set(['A']),new Set(['B'])),false);
});
test('background and paused UI snapshots slow down while song changes and actions stay immediate',()=>{
  let clock=0;const publish=snapshotCadence(()=>clock);
  let state={nativeUri:'spotify:track:A',playing:true,progress:0};
  assert(publish(state,true));
  for(clock=250;clock<1000;clock+=250)assert.equal(publish({...state,progress:clock},true),false);
  assert(publish({...state,progress:1000},true));
  clock=1001;state={...state,nativeUri:'spotify:track:B'};assert(publish(state,true));
  clock=1002;assert(publish(state,true,true));
  clock=1252;assert.equal(publish(state,false),false);
  state={...state,progress:1252};assert(publish(state,false));
  state={...state,playing:false};clock=1253;assert(publish(state,false));
  clock=1503;assert.equal(publish(state,false),false);
});
