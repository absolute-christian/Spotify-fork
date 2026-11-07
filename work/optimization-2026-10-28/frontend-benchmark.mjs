import {writeFile,readFile} from 'node:fs/promises';
import {createFrameSnapshotPublisher} from '../../frontend/src/frame-snapshot.js';
const after=process.argv.includes('--after');
const controllerUrl=new URL(after?'../../frontend/src/controller.js':'./frontend-before/controller.js',import.meta.url);
if(!after){const source=await readFile(controllerUrl,'utf8');await writeFile(controllerUrl,source.replaceAll("from './","from '../../../frontend/src/"));}
const {WaveController}=await import(controllerUrl);
const {snapshotCadence}=await import(new URL('./frontend-before/snapshot-cadence.js',import.meta.url));
const cases=[];
for(const playing of [false,true])for(const hidden of [false,true]) {
  let clock=0,notifications=0,posts=0,bytes=0,queueReads=0;
  const track={uri:'spotify:track:fixture',title:'Synthetic track',artist:'Synthetic artist',cover:'https://example.invalid/cover.jpg',duration:180000,artistUri:'spotify:artist:fixture',albumUri:'spotify:album:fixture',uid:'playing'};
  const queued=Array.from({length:50},(_,i)=>({...track,uri:'spotify:track:fixture'+i,uid:'queue'+i}));
  const player={snapshot:()=>({uri:track.uri,track:{...track},playing,progress:playing?clock:10000,duration:180000,volume:.7,liked:false}),queue:()=>{queueReads++;return queued.map(t=>({...t}));}};
  const controller=new WaveController(player,{}, {getItem:()=>null,setItem(){}},{now:()=>clock});
  const publish=snapshotCadence(()=>clock);
  const collect=payload=>{posts++;bytes+=Buffer.byteLength(JSON.stringify(payload))};
  const send=after?createFrameSnapshotPublisher(controller,collect,{now:()=>clock,hidden:()=>hidden}):(force=false)=>{if(!publish(controller.state,hidden,force))return;collect({...controller.state,queue:player.queue(),demo:false})};
  controller.subscribe(()=>{notifications++;send()});
  for(clock=0;clock<=60000;clock+=250){controller.tick();if(after && clock%1000===0)send()}
  cases.push({playing,hidden,notifications,posts,bytes,queueReads});
}
const result={synthetic:true,seconds:60,queueLength:50,cases};
await writeFile(new URL(after?'./frontend-after.json':'./frontend-baseline.json',import.meta.url),JSON.stringify(result,null,2));
console.log(JSON.stringify(result));
