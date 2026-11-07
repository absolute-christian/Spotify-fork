export function shallowEqual(a,b) {
  if (Object.is(a,b)) return true;
  if (!a || !b || typeof a!=='object' || typeof b!=='object') return false;
  const proto=Object.getPrototypeOf(a);
  if (proto!==Object.getPrototypeOf(b) || proto!==Object.prototype && proto!==Array.prototype && proto!==null) return false;
  const keys=Object.keys(a);
  return keys.length===Object.keys(b).length && keys.every(key=>Object.hasOwn(b,key)&&Object.is(a[key],b[key]));
}
export function createStateStore(initial) {
  let state=initial;const listeners=new Set();
  return {
    getState:()=>state,
    subscribe:fn=>{listeners.add(fn);return()=>listeners.delete(fn)},
    setState:patch=>{
      const value=typeof patch==='function'?patch(state):patch;
      if (!value || Object.keys(value).every(key=>Object.is(state[key],value[key]))) return;
      state={...state,...value};listeners.forEach(fn=>fn(state));
    },
  };
}
export function selectedSnapshot(state,selector,cache) {
  if (cache.ready && state===cache.state && selector===cache.selector) return cache.value;
  const value=selector(state);
  if (!cache.ready || !shallowEqual(cache.value,value)) cache.value=value;
  cache.state=state;cache.selector=selector;cache.ready=true;
  return cache.value;
}
