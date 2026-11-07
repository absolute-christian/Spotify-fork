// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { R as e, c as t, j as n, r as a } from "./vendor-ui-BwX-1h7U.js";
import { U as r, S as s } from "./main-DVjTVWDM.js";
import { z as l, k as i, B as o, I as c, L as m, fh as u } from "./globals-Bc3qFUyf.js";
const d = e.forwardRef((e2, a2) => {
  const r2 = t.c(23),
    {
      value: s2,
      onChange: u2,
      onSubmit: d2,
      isLoading: f2,
      placeholder: h2,
      className: p
    } = e2,
    {
      t: x
    } = l();
  let g, b, v, j, w, N, y;
  return r2[0] !== d2 ? (g = e3 => {
    e3.preventDefault(), null == d2 || d2();
  }, r2[0] = d2, r2[1] = g) : g = r2[1], r2[2] !== p ? (b = i("relative flex items-center h-8.5 rounded-full border border-border/20 bg-plate px-3 transition-all duration-200 w-full", "hover:border-border/35", "focus-within:border-primary/50 focus-within:bg-hover focus-within:ring-1 focus-within:ring-primary/20", p), r2[2] = p, r2[3] = b) : b = r2[3], r2[4] !== f2 ? (v = f2 ? n.jsx(m, {
    className: "w-3.5 h-3.5 text-primary/70 mr-2 flex-shrink-0 animate-spin"
  }) : n.jsx(c.search, {
    className: "w-3.5 h-3.5 text-muted-foreground/50 mr-2 flex-shrink-0"
  }), r2[4] = f2, r2[5] = v) : v = r2[5], r2[6] !== u2 ? (j = e3 => u2(e3.target.value), r2[6] = u2, r2[7] = j) : j = r2[7], r2[8] !== h2 || r2[9] !== a2 || r2[10] !== j || r2[11] !== s2 ? (w = n.jsx("input", {
    ref: a2,
    type: "text",
    value: s2,
    onChange: j,
    placeholder: h2,
    className: "w-full bg-transparent border-0 outline-none ring-0 p-0 text-callout h-5 leading-5 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-0 caret-foreground/80"
  }), r2[8] = h2, r2[9] = a2, r2[10] = j, r2[11] = s2, r2[12] = w) : w = r2[12], r2[13] !== u2 || r2[14] !== x || r2[15] !== s2 ? (N = s2 && n.jsx(o, {
    type: "button",
    variant: "ghost",
    size: "icon-2xs",
    onClick: () => u2(""),
    "aria-label": x("library.actions.clear"),
    className: "h-auto w-auto p-0.5 rounded-full transition-colors duration-150 ease-in-out ml-1 flex-shrink-0",
    children: n.jsx(c.close, {
      className: "w-3.5 h-3.5"
    })
  }), r2[13] = u2, r2[14] = x, r2[15] = s2, r2[16] = N) : N = r2[16], r2[17] !== g || r2[18] !== b || r2[19] !== v || r2[20] !== w || r2[21] !== N ? (y = n.jsxs("form", {
    onSubmit: g,
    className: b,
    children: [v, w, N]
  }), r2[17] = g, r2[18] = b, r2[19] = v, r2[20] = w, r2[21] = N, r2[22] = y) : y = r2[22], y;
});
const f = e.memo(function (e2) {
  var o2, c2;
  const m2 = t.c(47),
    {
      friends: f2,
      selectedId: p,
      onSelect: x,
      variant: g,
      showSearch: b,
      searchPlaceholder: v,
      actionLabel: j,
      actionClassName: w,
      renderRight: N,
      emptyText: y,
      className: k,
      maxListHeight: S
    } = e2,
    C = void 0 === g ? "list" : g,
    _ = void 0 === b || b,
    L = void 0 === S ? "max-h-[160px]" : S,
    {
      t: z
    } = l(),
    I = u(h);
  let R;
  m2[0] !== f2 || m2[1] !== I ? (R = null != (o2 = null != f2 ? f2 : I) ? o2 : [], m2[0] = f2, m2[1] = I, m2[2] = R) : R = m2[2];
  const B = R,
    [D, F] = a.useState("");
  let H;
  e: {
    if (!B.length) {
      let e4;
      m2[3] === Symbol.for("react.memo_cache_sentinel") ? (e4 = [], m2[3] = e4) : e4 = m2[3], H = e4;
      break e;
    }
    if (!D.trim()) {
      H = B;
      break e;
    }
    let e3;
    if (m2[4] !== B || m2[5] !== D) {
      const t2 = D.toLowerCase().trim();
      e3 = B.filter(e4 => (e4.nickname || e4.username || e4.name || "").toLowerCase().includes(t2)), m2[4] = B, m2[5] = D, m2[6] = e3;
    } else e3 = m2[6];
    H = e3;
  }
  const P = H;
  if ("segmented" === C) {
    if (!B.length) return null;
    let e3;
    m2[7] !== k ? (e3 = i("w-full", k), m2[7] = k, m2[8] = e3) : e3 = m2[8];
    const t2 = p || (null == (c2 = B[0]) ? void 0 : c2.id);
    let a2, l2, o3, u2;
    if (m2[9] !== B || m2[10] !== x ? (a2 = e4 => {
      const t3 = B.find(t4 => String(t4.id) === String(e4));
      t3 && x(t3);
    }, m2[9] = B, m2[10] = x, m2[11] = a2) : a2 = m2[11], m2[12] !== B || m2[13] !== z) {
      let e4;
      m2[15] !== z ? (e4 = e5 => ({
        value: String(e5.id),
        label: e5.nickname || e5.username || z("profile.subscription.select_friend"),
        icon: n.jsx(r, {
          src: e5.avatar,
          name: e5.nickname || e5.username,
          className: "w-4 h-4 rounded-full"
        })
      }), m2[15] = z, m2[16] = e4) : e4 = m2[16], l2 = B.map(e4), m2[12] = B, m2[13] = z, m2[14] = l2;
    } else l2 = m2[14];
    return m2[17] !== t2 || m2[18] !== a2 || m2[19] !== l2 ? (o3 = n.jsx(s, {
      size: "sm",
      className: "w-full",
      value: t2,
      onChange: a2,
      options: l2
    }), m2[17] = t2, m2[18] = a2, m2[19] = l2, m2[20] = o3) : o3 = m2[20], m2[21] !== o3 || m2[22] !== e3 ? (u2 = n.jsx("div", {
      className: e3,
      children: o3
    }), m2[21] = o3, m2[22] = e3, m2[23] = u2) : u2 = m2[23], u2;
  }
  let T, U, q, A;
  return m2[24] !== k ? (T = i("flex flex-col gap-2 w-full", k), m2[24] = k, m2[25] = T) : T = m2[25], m2[26] !== B.length || m2[27] !== v || m2[28] !== D || m2[29] !== _ || m2[30] !== z ? (U = _ && B.length > 4 && n.jsx(d, {
    value: D,
    onChange: F,
    placeholder: v || z("payment.search_friend") || z("common.find"),
    className: "h-7.5 px-2.5 text-xs"
  }), m2[26] = B.length, m2[27] = v, m2[28] = D, m2[29] = _, m2[30] = z, m2[31] = U) : U = m2[31], m2[32] !== w || m2[33] !== j || m2[34] !== y || m2[35] !== P || m2[36] !== B.length || m2[37] !== L || m2[38] !== x || m2[39] !== N || m2[40] !== p || m2[41] !== z ? (q = P.length > 0 ? n.jsx("div", {
    className: i("flex flex-col gap-1 overflow-y-auto custom-scrollbar pr-1", L),
    children: P.map(e3 => {
      const t2 = p && String(e3.id) === String(p);
      return n.jsxs("button", {
        type: "button",
        onClick: () => x(e3),
        className: i("flex items-center justify-between px-2 py-1.5 rounded-lg transition-colors cursor-pointer text-left group", t2 ? "bg-selected" : ""),
        children: [n.jsxs("div", {
          className: "flex items-center gap-2 min-w-0",
          children: [n.jsx(r, {
            src: e3.avatar,
            name: e3.nickname || e3.username,
            className: "w-5 h-5 rounded-full ring-1 ring-border/20 shrink-0"
          }), n.jsx("span", {
            className: "text-xs font-medium text-foreground truncate",
            children: e3.nickname || e3.username
          })]
        }), N ? N(e3, !!t2) : j ? n.jsx("span", {
          className: i("text-caption opacity-0 group-hover:opacity-100 transition-opacity font-medium shrink-0", w || "text-primary"),
          children: j
        }) : null]
      }, e3.id);
    })
  }) : n.jsx("span", {
    className: "text-xs text-muted-foreground/60 py-1.5 text-center",
    children: 0 === B.length ? y || z("profile.subscription.slots.no_friends_available") : z("payment.empty_search")
  }), m2[32] = w, m2[33] = j, m2[34] = y, m2[35] = P, m2[36] = B.length, m2[37] = L, m2[38] = x, m2[39] = N, m2[40] = p, m2[41] = z, m2[42] = q) : q = m2[42], m2[43] !== T || m2[44] !== U || m2[45] !== q ? (A = n.jsxs("div", {
    className: T,
    children: [U, q]
  }), m2[43] = T, m2[44] = U, m2[45] = q, m2[46] = A) : A = m2[46], A;
});
function h(e2) {
  return e2.friends;
}
export { f as F, d as S };
