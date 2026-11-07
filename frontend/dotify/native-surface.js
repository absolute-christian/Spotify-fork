// Follow the original animated shape; no replacement layout or hover handlers.
export function observeNativeSurface(root, report, { fullscreen = () => false } = {}) {
  let surface, frame = 0, sent = '', pending, inFlight = false, stopped = false;
  const flush = async () => {
    if (inFlight || !pending || stopped) return;
    const value = pending;
    pending = undefined;
    inFlight = true;
    try { await report(value); } finally { inFlight = false; if (pending) flush(); }
  };
  const measure = () => {
    frame = 0;
    if (!surface?.isConnected) return;
    const rect = surface.getBoundingClientRect(), css = getComputedStyle(surface);
    const full = fullscreen();
    const radius = value => {
      const [x, y = x] = value.split(' ');
      const length = (v, size) => v.endsWith('%') ? parseFloat(v) * size / 100 : parseFloat(v);
      return [Math.min(rect.width / 2, length(x, rect.width)), Math.min(rect.height / 2, length(y, rect.height))];
    };
    const value = { x: full ? 0 : rect.x, y: full ? 0 : rect.y,
      width: full ? innerWidth : rect.width, height: full ? innerHeight : rect.height,
      radii: full ? [[0, 0], [0, 0], [0, 0], [0, 0]] :
        [css.borderTopLeftRadius, css.borderTopRightRadius, css.borderBottomRightRadius, css.borderBottomLeftRadius].map(radius) };
    const key = JSON.stringify(value, (_, v) => typeof v === 'number' ? Math.round(v * 10) / 10 : v);
    if (key !== sent && rect.width > 0 && rect.height > 0) { sent = key; pending = JSON.parse(key); flush(); }
  };
  const schedule = () => { if (!frame && !stopped) frame = requestAnimationFrame(measure); };
  const resize = new ResizeObserver(schedule);
  const style = new MutationObserver(schedule);
  const find = () => {
    const next = fullscreen() ? root : root.querySelector('[data-native-overlay-surface]');
    if (next !== surface) {
      resize.disconnect(); style.disconnect(); surface = next;
      if (surface) {
        resize.observe(surface); style.observe(surface, { attributes: true, attributeFilter: ['style', 'class'] });
        // WebView suspends rAF while its native window is hidden. Its first
        // input region must exist before the host is allowed to show it.
        measure();
      }
    }
    schedule();
  };
  const tree = new MutationObserver(find);
  tree.observe(root, { childList: true, subtree: true });
  window.addEventListener('resize', find);
  find();
  return () => { stopped = true; cancelAnimationFrame(frame); resize.disconnect(); style.disconnect(); tree.disconnect(); window.removeEventListener('resize', find); };
}
