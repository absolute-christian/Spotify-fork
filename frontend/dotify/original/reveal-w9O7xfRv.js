// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { c as e, r as t, j as n } from "./vendor-ui-BwX-1h7U.js";
import { k as a } from "./globals-Bc3qFUyf.js";
function r(r2) {
  const o = e.c(13),
    {
      pending: i,
      contentKey: l,
      placeholder: c,
      children: f,
      className: d
    } = r2,
    m = void 0 !== i && i,
    u = t.useRef(null);
  let p, v;
  o[0] !== m ? (p = () => {
    const e2 = u.current;
    if (!e2) return;
    let t2 = false;
    for (let n2 = e2.parentElement; n2; n2 = n2.parentElement) if (n2.getAnimations().some(s)) {
      t2 = true;
      break;
    }
    e2.dataset.reveal = m || t2 ? "instant" : "fade";
  }, o[0] = m, o[1] = p) : p = o[1], o[2] !== l || o[3] !== m ? (v = [m, l], o[2] = l, o[3] = m, o[4] = v) : v = o[4], t.useLayoutEffect(p, v);
  const b = m ? "instant" : "fade",
    g = m || void 0;
  let y;
  o[5] !== d ? (y = a("content-reveal", d), o[5] = d, o[6] = y) : y = o[6];
  const j = m ? c : f;
  let h;
  return o[7] !== l || o[8] !== b || o[9] !== g || o[10] !== y || o[11] !== j ? (h = n.jsx("div", {
    ref: u,
    "data-reveal": b,
    "aria-busy": g,
    className: y,
    children: j
  }, l), o[7] = l, o[8] = b, o[9] = g, o[10] = y, o[11] = j, o[12] = h) : h = o[12], h;
}
function s(e2) {
  return e2 instanceof CSSAnimation && /^(tab-enter|page-enter|library-fade|content-enter)$/.test(e2.animationName) && "running" === e2.playState;
}
export { r as C };
