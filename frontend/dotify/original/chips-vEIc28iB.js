// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { R as e, c as o, r as s, j as a, m as l } from "./vendor-ui-BwX-1h7U.js";
import { aE as t, k as n } from "./globals-Bc3qFUyf.js";
const r = {
  sm: {
    chip: "h-7 px-3 text-xs",
    gap: "gap-1",
    icon: "w-7 px-0"
  },
  md: {
    chip: "h-9 px-4 text-callout",
    gap: "gap-1.5",
    icon: "w-9 px-0"
  }
};
const i = e.memo(function (e2) {
  const i2 = o.c(26),
    {
      options: c,
      value: d,
      onChange: p,
      size: u,
      fullWidth: f,
      anyWheel: m,
      tone: x,
      className: h
    } = e2,
    g = void 0 === u ? "md" : u,
    b = void 0 !== f && f,
    v = void 0 !== m && m,
    j = void 0 === x ? "solid" : x,
    y = s.useRef(null);
  let w, N;
  i2[0] !== v ? (w = {
    wheelDelta: 0.9,
    anyWheel: v
  }, i2[0] = v, i2[1] = w) : w = i2[1], i2[2] !== v || i2[3] !== c.length ? (N = [c.length, v], i2[2] = v, i2[3] = c.length, i2[4] = N) : N = i2[4], t(y, w, N);
  const k = r[g],
    C = `chips-fill-${s.useId()}`,
    W = "soft" === j ? "gap-2" : "gap-1";
  let I, R, z;
  if (i2[5] !== h || i2[6] !== W ? (I = n("flex min-w-0 items-center overflow-x-auto scrollbar-none select-none", W, h), i2[5] = h, i2[6] = W, i2[7] = I) : I = i2[7], i2[8] !== k || i2[9] !== C || i2[10] !== b || i2[11] !== p || i2[12] !== c || i2[13] !== j || i2[14] !== d) {
    let e3;
    i2[16] !== k || i2[17] !== C || i2[18] !== b || i2[19] !== p || i2[20] !== j || i2[21] !== d ? (e3 = e4 => {
      var o2;
      const s2 = e4.value === d,
        t2 = !e4.label && !!e4.icon;
      return a.jsxs("div", {
        role: "radio",
        "aria-checked": s2,
        "aria-label": null != (o2 = e4.ariaLabel) ? o2 : "string" == typeof e4.label ? e4.label : void 0,
        onClick: () => p(e4.value),
        className: n("group relative flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-full transition-colors duration-150", "soft" === j ? "font-medium" : "font-semibold", k.chip, t2 && k.icon, b && "flex-1 min-w-0", e4.hint && "h-auto py-2", "border", s2 ? n("border-transparent", "solid" === j ? "text-background" : "text-foreground") : n("border-border-subtle hover:text-foreground", "soft" === j ? "text-foreground/50" : "text-foreground/70")),
        children: [s2 && a.jsx(l.span, {
          layoutId: C,
          className: n("absolute -inset-px rounded-full", "solid" === j ? "bg-foreground" : "bg-selected"),
          transition: {
            type: "spring",
            stiffness: 520,
            damping: 40
          }
        }), e4.overlay && a.jsx("span", {
          className: "absolute inset-0 flex items-center justify-center",
          children: e4.overlay
        }), a.jsxs("span", {
          className: n("relative flex items-center", k.gap, e4.overlay && "opacity-30"),
          children: [e4.icon, e4.hint ? a.jsxs("span", {
            className: "flex flex-col items-center gap-1 leading-none",
            children: [a.jsx("span", {
              children: e4.label
            }), a.jsx("span", {
              className: "text-micro font-medium opacity-60",
              children: e4.hint
            })]
          }) : e4.label]
        })]
      }, String(e4.value));
    }, i2[16] = k, i2[17] = C, i2[18] = b, i2[19] = p, i2[20] = j, i2[21] = d, i2[22] = e3) : e3 = i2[22], R = c.map(e3), i2[8] = k, i2[9] = C, i2[10] = b, i2[11] = p, i2[12] = c, i2[13] = j, i2[14] = d, i2[15] = R;
  } else R = i2[15];
  return i2[23] !== I || i2[24] !== R ? (z = a.jsx("div", {
    ref: y,
    role: "radiogroup",
    className: I,
    children: R
  }), i2[23] = I, i2[24] = R, i2[25] = z) : z = i2[25], z;
});
export { i as C };
