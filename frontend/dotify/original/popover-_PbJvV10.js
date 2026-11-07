// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { a4 as e, r as a, c as s, j as o, a5 as n, a6 as t, a7 as r } from "./vendor-ui-BwX-1h7U.js";
import { k as l } from "./globals-Bc3qFUyf.js";
import { bc as i, bd as d, be as c, bf as u } from "./main-DVjTVWDM.js";
const p = e2 => {
    const n2 = s.c(12);
    let t2, l2;
    n2[0] !== e2 ? ({
      modal: t2,
      ...l2
    } = e2, n2[0] = e2, n2[1] = t2, n2[2] = l2) : (t2 = n2[1], l2 = n2[2]);
    const i2 = a.useContext(d),
      {
        revision: p2,
        onOpenChange: f2,
        navigationCloseRef: m2
      } = c(l2.onOpenChange, l2.open, l2.defaultOpen),
      v = null != t2 ? t2 : i2,
      O = 0 === p2 && l2.defaultOpen;
    let g, j;
    return n2[3] !== f2 || n2[4] !== l2 || n2[5] !== p2 || n2[6] !== v || n2[7] !== O ? (g = a.createElement(r, {
      ...l2,
      modal: v,
      key: p2,
      defaultOpen: O,
      onOpenChange: f2
    }), n2[3] = f2, n2[4] = l2, n2[5] = p2, n2[6] = v, n2[7] = O, n2[8] = g) : g = n2[8], n2[9] !== m2 || n2[10] !== g ? (j = o.jsx(u.Provider, {
      value: m2,
      children: g
    }), n2[9] = m2, n2[10] = g, n2[11] = j) : j = n2[11], j;
  },
  f = e,
  m = a.forwardRef((e2, a2) => {
    const r2 = s.c(15);
    let d2, c2, u2, p2, f2;
    r2[0] !== e2 ? ({
      className: d2,
      align: p2,
      sideOffset: f2,
      onCloseAutoFocus: c2,
      ...u2
    } = e2, r2[0] = e2, r2[1] = d2, r2[2] = c2, r2[3] = u2, r2[4] = p2, r2[5] = f2) : (d2 = r2[1], c2 = r2[2], u2 = r2[3], p2 = r2[4], f2 = r2[5]);
    const m2 = void 0 === p2 ? "center" : p2,
      v = void 0 === f2 ? 4 : f2,
      O = i(c2);
    let g, j;
    return r2[6] !== d2 ? (g = l("surface-overlay overlay-motion layer-popover z-50 w-72 rounded-[var(--radius-menu)] p-4 outline-none data-[state=closed]:pointer-events-none", d2), r2[6] = d2, r2[7] = g) : g = r2[7], r2[8] !== m2 || r2[9] !== O || r2[10] !== u2 || r2[11] !== a2 || r2[12] !== v || r2[13] !== g ? (j = o.jsx(n, {
      children: o.jsx(t, {
        ref: a2,
        align: m2,
        sideOffset: v,
        className: g,
        ...u2,
        onCloseAutoFocus: O
      })
    }), r2[8] = m2, r2[9] = O, r2[10] = u2, r2[11] = a2, r2[12] = v, r2[13] = g, r2[14] = j) : j = r2[14], j;
  });
export { p as b, m as a, f as P };
