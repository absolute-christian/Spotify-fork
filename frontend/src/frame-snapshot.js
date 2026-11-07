import { snapshotCadence } from './snapshot-cadence.js';

const sameTrack = (a,b) => Object.is(a,b) || !!a && !!b && Object.keys(a).length===Object.keys(b).length && Object.keys(a).every(key=>Object.is(a[key],b[key]));

// Queue changes can arrive while paused, without any controller state change.
// Poll just that data at a bounded cadence, while media/actions stay immediate.
export function createFrameSnapshotPublisher(controller, send, {now=()=>performance.now(),hidden=()=>false}={}) {
  const shouldPublish=snapshotCadence(now);
  let queue=[],queueAt=-Infinity,queueActive,queueUri;
  return (force=false)=>{
    const state=controller.state,time=now(),background=hidden();
    if (force || queueActive!==state.active || queueUri!==state.nativeUri || time-queueAt>=(background?3000:1000)) {
      const next=state.active?[]:controller.player.queue?.()||[];
      if (next.length!==queue.length || next.some((track,index)=>!sameTrack(track,queue[index]))) queue=next;
      queueAt=time;queueActive=state.active;queueUri=state.nativeUri;
    }
    const payload={...state,queue};
    if (!shouldPublish(payload,background,force)) return false;
    send(payload);return true;
  };
}
