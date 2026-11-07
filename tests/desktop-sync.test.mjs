import {test} from 'node:test';
import assert from 'node:assert/strict';
import {runDesktopSync,syncDesktop,publishDesktopSnapshot,dispatchDesktop} from '../frontend/src/desktop-sync.js';

test('wave startup acknowledges acceptance without blocking playback heartbeats',async()=>{
  let run,done=false;
  const controller={safe(action){run=Promise.resolve().then(action);}};
  const result=dispatchDesktop(controller,()=>new Promise(resolve=>{runFinish=()=>{done=true;resolve();};}),'startWave',[]);
  let runFinish;
  assert.deepEqual(result,{accepted:true});
  await Promise.resolve();
  assert.equal(done,false);runFinish();await run;assert.equal(done,true);
});

function fixture() {
  const controller={state:{},tick(){this.state={...this.state,version:(this.state.version||0)+1}},emit(patch){Object.assign(this.state,patch)}};
  return {controller,transport:{acknowledgements:[],seen:new Set(),dispatch:async()=>true,appearance:null},wait:async()=>{throw new Error('Successful long polling must not depend on a background timer')}};
}

test('desktop heartbeats continue from HTTP completions without JS timers and execute commands once',async()=>{
  const f=fixture(),requests=[],actions=[];
  const bridge={desktopSync:async(state,acks,active,layout,wait)=>{
    requests.push({version:state.version,acks:structuredClone(acks),wait});
    return {longPoll:true,commands:requests.length<=2?[{id:'same',method:'toggle',args:[]}]:[],window:{available:true}};
  }};
  await runDesktopSync(f.controller,bridge,()=>true,()=>({}),async(method)=>actions.push(method),
    {wait:f.wait,running:()=>requests.length<3});
  assert.deepEqual(requests.map(r=>r.version),[1,2,3]);
  assert.ok(requests.every(r=>r.wait));
  assert.deepEqual(actions,['toggle']);
  assert.equal(requests[1].acks[0].id,'same');
  assert.equal(requests[2].acks.length,0);
});

test('failed polls retain acknowledgements and failed media actions are acknowledged as errors',async()=>{
  const f=fixture(),bridge={desktopSync:async()=>{throw new Error('offline')}};
  f.transport.acknowledgements.push({id:'earlier',value:true});
  await assert.rejects(syncDesktop(f.controller,bridge,()=>true,()=>({}),f.transport,f.wait),/offline/);
  assert.equal(f.transport.acknowledgements[0].id,'earlier');
  bridge.desktopSync=async()=>({longPoll:true,commands:[{id:'failed',method:'next',args:[]}]});
  f.transport.dispatch=async()=>{throw new Error('unavailable')};
  await syncDesktop(f.controller,bridge,()=>true,()=>({}),f.transport,f.wait);
  assert.deepEqual(f.transport.acknowledgements,[{id:'failed',error:'unavailable'}]);
});

test('pending appearance uploads cannot block playback heartbeats, and old servers stay paced',async()=>{
  const f=fixture(),delays=[];
  f.controller.desktopAppearance={playerSettings:{}};
  const bridge={desktopSettings:()=>new Promise(()=>{}),desktopSync:async()=>({commands:[]})};
  await syncDesktop(f.controller,bridge,()=>true,()=>({}),f.transport,async ms=>delays.push(ms));
  assert.equal(f.controller.state.version,1);
  assert.deepEqual(delays,[500]);
  assert.ok(f.transport.appearancePending);
});

test('native song and pause events publish immediately without waiting for the open poll',async()=>{
  const f=fixture(),requests=[];
  await publishDesktopSnapshot(f.controller,{desktopSync:async(...args)=>requests.push(args)},()=>true,()=>({active:true}));
  assert.equal(requests[0][0].version,1);
  assert.deepEqual(requests[0][1],[]);
  assert.equal(requests[0][4],false);
});
