export function snapshotCadence(now=()=>performance.now()) {
  let last=-Infinity,previous;
  return (state,hidden=false,force=false)=>{
    const keys=Object.keys(state);
    const changed=!previous || keys.length!==Object.keys(previous).length || keys.some(key=>key!=='progress' && !Object.is(state[key],previous[key]));
    const time=now();
    if (!force && !changed && (Object.is(state.progress,previous.progress) || state.playing && time-last<(hidden?1000:250))) return false;
    last=time;previous=state;return true;
  };
}
