// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { r as e, c as r, j as s } from "./vendor-ui-BwX-1h7U.js";
import { k as o } from "./globals-Bc3qFUyf.js";
const a = e.forwardRef((e2, a2) => {
  const i = r.c(9);
  let t, l, d, n;
  return i[0] !== e2 ? ({
    className: t,
    ...l
  } = e2, i[0] = e2, i[1] = t, i[2] = l) : (t = i[1], l = i[2]), i[3] !== t ? (d = o("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t), i[3] = t, i[4] = d) : d = i[4], i[5] !== l || i[6] !== a2 || i[7] !== d ? (n = s.jsx("textarea", {
    className: d,
    ref: a2,
    ...l
  }), i[5] = l, i[6] = a2, i[7] = d, i[8] = n) : n = i[8], n;
});
export { a as T };
