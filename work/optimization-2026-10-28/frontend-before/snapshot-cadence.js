export function snapshotCadence(now=()=>performance.now()) {
  let last=-Infinity,signature;
  return (state,hidden=false,force=false)=>{
    const track=state.nativeTrack,current=state.current,w=state.window;
    const next=JSON.stringify([state.nativeUri,track?.uri,track?.title,track?.artist,track?.cover,current?.uri,state.active,state.playing,state.loading,state.volume,state.liked,state.repeat,state.shuffle,state.shuffleType,state.contextUri,state.connected,state.bridgeOnline,state.pendingFeedback,state.error,state.syncError,w?.maximized,w?.fullscreen]);
    const time=now();
    if (!force && signature===next && time-last<(hidden||!state.playing?1000:250)) return false;
    last=time;signature=next;return true;
  };
}
