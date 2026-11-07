// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { c as e, j as t } from "./vendor-ui-BwX-1h7U.js";
import { k as a, B as i } from "./globals-Bc3qFUyf.js";
function s(s2) {
  const n = e.c(16),
    {
      tabs: r,
      active: l,
      onSelect: o,
      trailing: d,
      trailingAlign: c,
      className: x
    } = s2,
    m = void 0 === c ? "baseline" : c;
  let g, p, u, f;
  if (n[0] !== x ? (g = a("flex min-w-0 flex-wrap items-center gap-x-5 gap-y-1", x), n[0] = x, n[1] = g) : g = n[1], n[2] !== l || n[3] !== o || n[4] !== r) {
    let e2;
    n[6] !== l || n[7] !== o ? (e2 = e3 => t.jsxs("div", {
      className: "flex min-w-0 items-center gap-2",
      children: [t.jsxs(i, {
        variant: "quiet",
        onClick: () => o(e3.id),
        disabled: e3.disabled,
        "aria-current": e3.id === l ? "page" : void 0,
        className: a("h-auto gap-0 rounded-none px-0 py-0 text-2xl font-semibold leading-tight tracking-tight transition-colors duration-200 hover:bg-transparent md:text-title1", e3.id === l ? "text-foreground" : e3.disabled ? "text-foreground/15 disabled:opacity-100" : "text-foreground/30 hover:text-foreground/60"),
        children: [e3.label, !!e3.count && t.jsxs("span", {
          className: "text-xl md:text-title2",
          children: ["(", e3.count, ")"]
        })]
      }, e3.id), e3.action]
    }, e3.id), n[6] = l, n[7] = o, n[8] = e2) : e2 = n[8], p = r.map(e2), n[2] = l, n[3] = o, n[4] = r, n[5] = p;
  } else p = n[5];
  return n[9] !== d || n[10] !== m ? (u = d && t.jsx("div", {
    className: a("flex shrink-0 items-center", "baseline" === m && "translate-y-0.5"),
    children: d
  }), n[9] = d, n[10] = m, n[11] = u) : u = n[11], n[12] !== g || n[13] !== p || n[14] !== u ? (f = t.jsxs("nav", {
    className: g,
    children: [p, u]
  }), n[12] = g, n[13] = p, n[14] = u, n[15] = f) : f = n[15], f;
}
export { s as OriginalSectionTabs, s as T };
