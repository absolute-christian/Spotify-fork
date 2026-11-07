// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { c as s, j as e } from "./vendor-ui-BwX-1h7U.js";
import { k as a, L as t } from "./globals-Bc3qFUyf.js";
function n(n2) {
  const o = s.c(9),
    {
      className: r,
      iconClassName: i
    } = n2;
  let c, l, m, f;
  return o[0] !== r ? (c = a("absolute inset-0 flex items-center justify-center", r), o[0] = r, o[1] = c) : c = o[1], o[2] !== i ? (l = a("h-6 w-6 animate-spin text-foreground/30", i), o[2] = i, o[3] = l) : l = o[3], o[4] !== l ? (m = e.jsx(t, {
    className: l
  }), o[4] = l, o[5] = m) : m = o[5], o[6] !== c || o[7] !== m ? (f = e.jsx("div", {
    className: c,
    children: m
  }), o[6] = c, o[7] = m, o[8] = f) : f = o[8], f;
}
export { n as L };
