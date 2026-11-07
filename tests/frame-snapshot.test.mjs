import {test} from 'node:test';
import assert from 'node:assert/strict';
import {WaveController} from '../frontend/src/controller.js';
import {createFrameSnapshotPublisher} from '../frontend/src/frame-snapshot.js';

test('paused equivalent native metadata does not notify and changed artwork still does',()=>{
  let clock=0,title='Track',cover='cover-a',progress=1000;
  const controller=new WaveController({snapshot:()=>({uri:'spotify:track:a',track:{uri:'spotify:track:a',title,cover},playing:false,progress,duration:30000,volume:.7,liked:false})},{},{getItem:()=>null},{now:()=>clock});
  let notified=0;controller.subscribe(()=>notified++);
  controller.tick();const track=controller.state.nativeTrack;
  for(let i=0;i<240;i++){clock+=250;controller.tick()}
  assert.equal(notified,1);assert.equal(controller.state.nativeTrack,track);
  cover='cover-b';controller.tick();assert.equal(notified,2);assert.equal(controller.state.nativeTrack.cover,'cover-b');
  progress=20000;controller.tick();assert.equal(notified,3);
  controller.emit({error:'Failed'});controller.emit({error:'Failed'});assert.equal(notified,4);
});

test('paused queue updates remain bounded, duplicates retain uid and action responses refresh immediately',()=>{
  let clock=0,hidden=false,reads=0;
  let queue=[{uri:'spotify:track:a',uid:'first',title:'A'},{uri:'spotify:track:a',uid:'second',title:'A'}];
  const controller={state:{nativeUri:'spotify:track:now',playing:false,progress:0},player:{queue:()=>{reads++;return queue.map(track=>({...track}))}}};
  const messages=[],publish=createFrameSnapshotPublisher(controller,value=>messages.push(value),{now:()=>clock,hidden:()=>hidden});
  publish();for(clock=250;clock<=10000;clock+=250)publish();
  assert.equal(messages.length,1);assert.equal(reads,11);
  queue=[queue[1],queue[0]];clock=11000;publish();assert.equal(messages.length,2);assert.equal(messages.at(-1).queue[0].uid,'second');
  queue[0]={...queue[0],title:'Corrected'};clock=11001;publish(true);assert.equal(messages.at(-1).queue[0].title,'Corrected');
  hidden=true;const previousReads=reads;for(clock=11250;clock<=13750;clock+=250)publish();assert.equal(reads,previousReads);
  clock=14001;publish();assert.equal(reads,previousReads+1);
  controller.state={...controller.state,nativeUri:'spotify:track:new'};clock=14002;publish();assert.equal(messages.at(-1).nativeUri,'spotify:track:new');
});

test('progress preserves visible and hidden cadence while all account and error state changes are immediate',()=>{
  let clock=0,hidden=true;
  const controller={state:{playing:true,progress:0},player:{queue:()=>[]}},messages=[];
  const publish=createFrameSnapshotPublisher(controller,state=>messages.push(state),{now:()=>clock,hidden:()=>hidden});
  publish();
  for(clock=250;clock<1000;clock+=250){controller.state={...controller.state,progress:clock};publish()}
  assert.equal(messages.length,1);
  clock=1000;controller.state={...controller.state,progress:clock};publish();assert.equal(messages.length,2);
  clock=1001;controller.state={...controller.state,savedToken:true,restoringAccount:true};publish();assert.equal(messages.length,3);
  clock=1002;controller.state={...controller.state,accountError:'Restore failed'};publish();assert.equal(messages.length,4);
  hidden=false;clock=1252;controller.state={...controller.state,progress:clock};publish();assert.equal(messages.length,5);
  controller.state={...controller.state,playing:false};publish();assert.equal(messages.length,6);
  clock=1253;controller.state={...controller.state,progress:20000};publish();assert.equal(messages.length,7);
});
