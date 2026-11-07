// Successful long polls drive the next heartbeat without a background JS timer.
export function publishDesktopSnapshot(controller, bridge, shellActive, layout) {
  controller.tick();
  return bridge.desktopSync(controller.state,[],shellActive(),layout(),false);
}

export function dispatchDesktop(controller, dispatch, method, args) {
  // A recommendation/search may take longer than one native heartbeat. Its
  // acceptance is immediate; snapshots expose the actual operation outcome.
  if (method === 'startWave') {
    controller.safe(() => dispatch(method, args));
    return { accepted: true };
  }
  return dispatch(method, args);
}

export async function syncDesktop(controller, bridge, shellActive, layout, transport, wait) {
  const pending = transport.acknowledgements.slice();
  const appearance = controller.desktopAppearance;
  if (appearance && appearance !== transport.appearance && !transport.appearancePending) {
    transport.appearancePending = Promise.resolve().then(()=>bridge.desktopSettings(appearance))
      .then(()=>{transport.appearance=appearance;})
      .catch(error=>controller.emit({error:error.message}))
      .finally(()=>{transport.appearancePending=null;});
  }
  try { controller.tick(); } catch (error) { controller.emit({ error:error.message }); }
  const result = await bridge.desktopSync(controller.state,pending,shellActive(),layout(),true);
  if (JSON.stringify(controller.state.window) !== JSON.stringify(result.window)) controller.emit({window:result.window});
  transport.acknowledgements = transport.acknowledgements.filter(item => !pending.includes(item));
  for (const command of result.commands || []) {
    if (transport.seen.has(command.id)) continue;
    transport.seen.add(command.id);
    if (transport.seen.size > 100) transport.seen.delete(transport.seen.values().next().value);
    try { transport.acknowledgements.push({id:command.id,value:await dispatchDesktop(controller,transport.dispatch,command.method,command.args)}); }
    catch (error) { transport.acknowledgements.push({id:command.id,error:error.message}); }
  }
  // Prevent a busy loop while an older backend is being upgraded.
  if (!result.longPoll) await wait(500);
}

export async function runDesktopSync(controller, bridge, shellActive, layout, dispatch, options = {}) {
  const wait=options.wait || (ms=>new Promise(resolve=>setTimeout(resolve,ms)));
  const running=options.running || (()=>true);
  const transport={acknowledgements:[],seen:new Set(),dispatch,appearance:null};
  while (running()) {
    try { await syncDesktop(controller,bridge,shellActive,layout,transport,wait); }
    catch { await wait(1000); }
  }
}
