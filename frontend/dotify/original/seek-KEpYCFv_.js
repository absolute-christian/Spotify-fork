// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { r as e, c as t, R as n, j as r } from "./vendor-ui-BwX-1h7U.js";
import { N as o, l, k as h, K as p, s as g } from "./globals-Bc3qFUyf.js";
const y = {
  none: {
    card: 0,
    cover: 0,
    button: 0,
    input: 0,
    dialog: 0,
    menu: 0
  },
  small: {
    card: 6,
    cover: 6,
    button: 6,
    input: 4,
    dialog: 12,
    menu: 8
  },
  medium: {
    card: 8,
    cover: 12,
    button: 12,
    input: 8,
    dialog: 16,
    menu: 12
  },
  large: {
    card: 20,
    cover: 20,
    button: 12,
    input: 10,
    dialog: 24,
    menu: 16
  }
};
const P = n.memo(function (e2) {
    const n2 = t.c(13),
      {
        src: o2,
        name: l2,
        size: s2,
        className: i2,
        source: a2,
        showSourceBadge: u2,
        showInitialsFallback: c2
      } = e2,
      d2 = void 0 === l2 ? "" : l2,
      m2 = void 0 !== u2 && u2,
      f2 = void 0 !== c2 && c2;
    let v2, y2, b2;
    return n2[0] !== i2 ? (v2 = h("rounded-full overflow-hidden", i2), n2[0] = i2, n2[1] = v2) : v2 = n2[1], n2[2] !== d2 || n2[3] !== f2 ? (y2 = f2 ? r.jsx("div", {
      className: "w-full h-full flex items-center justify-center bg-muted/50",
      children: r.jsx("span", {
        className: "text-micro font-semibold text-foreground",
        children: d2.slice(0, 2).toUpperCase()
      })
    }) : r.jsx("div", {
      className: "w-full h-full flex items-center justify-center bg-muted/50",
      children: r.jsx(p.Artist, {
        className: "h-1/2 w-1/2 text-muted-foreground/40"
      })
    }), n2[2] = d2, n2[3] = f2, n2[4] = y2) : y2 = n2[4], n2[5] !== d2 || n2[6] !== m2 || n2[7] !== s2 || n2[8] !== a2 || n2[9] !== o2 || n2[10] !== v2 || n2[11] !== y2 ? (b2 = r.jsx(g, {
      src: o2,
      title: d2,
      size: s2,
      type: "artist",
      className: v2,
      showLoading: false,
      showSourceBadge: m2,
      source: a2,
      plain: true,
      fallback: y2
    }), n2[5] = d2, n2[6] = m2, n2[7] = s2, n2[8] = a2, n2[9] = o2, n2[10] = v2, n2[11] = y2, n2[12] = b2) : b2 = n2[12], b2;
  }),
  T = n.memo(function (n2) {
    const o2 = t.c(17),
      {
        orientation: l2,
        progress: s2,
        clock: i2,
        duration: a2,
        className: u2,
        style: c2
      } = n2,
      d2 = void 0 === l2 ? "horizontal" : l2,
      m2 = void 0 === a2 ? 0 : a2,
      f2 = e.useRef(null),
      v2 = "vertical" === d2 ? "height" : "width",
      p2 = "vertical" === d2 ? "scaleY" : "scaleX";
    let g2, y2, b2, x2, w2;
    return o2[0] !== i2 || o2[1] !== m2 || o2[2] !== p2 ? (g2 = () => {
      if (!i2) return;
      let e2 = null,
        t2 = 0;
      const n3 = n4 => {
        const r2 = f2.current;
        if (!r2) return;
        const o3 = ((e3, t3) => t3 > 0 ? Math.min(100, Math.max(0, e3 / t3 * 100)) : 0)(n4, m2),
          l3 = null !== e2 && Math.abs(o3 - e2) > 1.5,
          s3 = performance.now();
        !l3 && s3 < t2 || (l3 && (t2 = s3 + 280), r2.style.transition = l3 ? "transform 280ms cubic-bezier(0.22, 1, 0.36, 1)" : "transform 250ms linear", e2 = o3, r2.style.transform = `${p2}(${o3 / 100})`);
      };
      n3(i2.getSmoothTime());
      return i2.subscribeThrottled ? i2.subscribeThrottled(n3, 250) : i2.subscribe(n3);
    }, y2 = [i2, m2, p2], o2[0] = i2, o2[1] = m2, o2[2] = p2, o2[3] = g2, o2[4] = y2) : (g2 = o2[3], y2 = o2[4]), e.useEffect(g2, y2), o2[5] !== u2 ? (b2 = h("absolute pointer-events-none", u2), o2[5] = u2, o2[6] = b2) : b2 = o2[6], o2[7] !== v2 || o2[8] !== i2 || o2[9] !== d2 || o2[10] !== s2 || o2[11] !== p2 || o2[12] !== c2 ? (x2 = i2 ? {
      ...c2,
      [v2]: "100%",
      transformOrigin: "vertical" === d2 ? "bottom" : "left",
      transform: `${p2}(0)`
    } : {
      ...c2,
      [v2]: `${null != s2 ? s2 : 0}%`
    }, o2[7] = v2, o2[8] = i2, o2[9] = d2, o2[10] = s2, o2[11] = p2, o2[12] = c2, o2[13] = x2) : x2 = o2[13], o2[14] !== b2 || o2[15] !== x2 ? (w2 = r.jsx("div", {
      ref: f2,
      className: b2,
      style: x2
    }), o2[14] = b2, o2[15] = x2, o2[16] = w2) : w2 = o2[16], w2;
  }),
  E = n.memo(function (e2) {
    const n2 = t.c(34);
    let o2, l2, s2, i2, a2, u2, c2, d2;
    n2[0] !== e2 ? ({
      orientation: u2,
      variant: c2,
      rail: d2,
      onSeek: a2,
      className: o2,
      fillClassName: s2,
      fillStyle: i2,
      ...l2
    } = e2, n2[0] = e2, n2[1] = o2, n2[2] = l2, n2[3] = s2, n2[4] = i2, n2[5] = a2, n2[6] = u2, n2[7] = c2, n2[8] = d2) : (o2 = n2[1], l2 = n2[2], s2 = n2[3], i2 = n2[4], a2 = n2[5], u2 = n2[6], c2 = n2[7], d2 = n2[8]);
    const m2 = void 0 === u2 ? "horizontal" : u2,
      f2 = void 0 !== d2 && d2,
      v2 = "vertical" === m2,
      p2 = "line" === (void 0 === c2 ? "line" : c2);
    let g2;
    n2[9] !== a2 || n2[10] !== v2 ? (g2 = e3 => {
      e3.stopPropagation();
      const t2 = e3.currentTarget.getBoundingClientRect(),
        n3 = v2 ? t2.height : t2.width;
      if (n3 <= 0) return;
      const r2 = v2 ? t2.bottom - e3.clientY : e3.clientX - t2.left;
      a2(Math.max(0, Math.min(1, r2 / n3)));
    }, n2[9] = a2, n2[10] = v2, n2[11] = g2) : g2 = n2[11];
    const y2 = g2,
      b2 = p2 && "flex items-center justify-center",
      x2 = p2 && (v2 ? "h-full w-[20px]" : "w-full h-[12px]");
    let w2, z2, S2, P2, E2;
    return n2[12] !== o2 || n2[13] !== b2 || n2[14] !== x2 ? (w2 = h("group relative cursor-pointer", b2, x2, o2), n2[12] = o2, n2[13] = b2, n2[14] = x2, n2[15] = w2) : w2 = n2[15], n2[16] !== p2 || n2[17] !== f2 || n2[18] !== v2 ? (z2 = p2 && f2 && r.jsx("div", {
      className: h("absolute bg-border/20 group-hover:bg-border/35 transition-all duration-200 ease-out pointer-events-none rounded-full", v2 ? "w-[2px] top-0 bottom-0 left-1/2 -translate-x-1/2" : "h-[2px] left-0 right-0 bottom-0")
    }), n2[16] = p2, n2[17] = f2, n2[18] = v2, n2[19] = z2) : z2 = n2[19], n2[20] !== s2 || n2[21] !== p2 || n2[22] !== v2 ? (S2 = h(p2 ? h("bg-primary rounded-full", v2 ? "w-[2px] left-1/2 -translate-x-1/2 bottom-0" : "h-[2px] bottom-0 left-0") : v2 ? "inset-x-0 bottom-0" : "inset-y-0 left-0", s2), n2[20] = s2, n2[21] = p2, n2[22] = v2, n2[23] = S2) : S2 = n2[23], n2[24] !== l2 || n2[25] !== i2 || n2[26] !== m2 || n2[27] !== S2 ? (P2 = r.jsx(T, {
      ...l2,
      orientation: m2,
      style: i2,
      className: S2
    }), n2[24] = l2, n2[25] = i2, n2[26] = m2, n2[27] = S2, n2[28] = P2) : P2 = n2[28], n2[29] !== y2 || n2[30] !== P2 || n2[31] !== w2 || n2[32] !== z2 ? (E2 = r.jsxs("div", {
      className: w2,
      onClick: y2,
      children: [z2, P2]
    }), n2[29] = y2, n2[30] = P2, n2[31] = w2, n2[32] = z2, n2[33] = E2) : E2 = n2[33], E2;
  });
function OriginalMaterialSettings(t2) {
  var n3, r3, i2, a2, u2;
  const c2 = o(e2 => e2.items.some(e3 => "background" === e3.usage && e3.is_active)),
    d2 = null !== t2,
    m2 = null == (n3 = null == t2 ? void 0 : t2.themeSettings) ? void 0 : n3.theme,
    f2 = null == (r3 = null == t2 ? void 0 : t2.uiSettings) ? void 0 : r3.transparency,
    v2 = null == (a2 = null == (i2 = null == t2 ? void 0 : t2.uiSettings) ? void 0 : i2.font) ? void 0 : a2.size,
    h3 = null == (u2 = null == t2 ? void 0 : t2.uiSettings) ? void 0 : u2.rounding;
  e.useEffect(() => {
    var e2, t3, n4;
    if (!d2) return;
    const r4 = document.documentElement,
      o2 = function (e3, t4) {
        return e3 && t4 ? "glass" : "opaque";
      }(Boolean(null == f2 ? void 0 : f2.enabled), c2),
      s2 = "glass" === o2,
      i3 = s2 ? Math.min(1, Math.max(0.3, (null != (e2 = null == f2 ? void 0 : f2.opacity) ? e2 : 80) / 100)) : 1,
      a3 = s2 ? Math.max(0, null != (n4 = null == (t3 = null == f2 ? void 0 : f2.glass) ? void 0 : t3.blur) ? n4 : 16) : 0;
    r4.setAttribute("data-render-mode", o2), r4.style.setProperty("--shell-alpha", String(i3)), r4.style.setProperty("--shell-blur", `${a3}px`), r4.style.setProperty("--shell-saturation", a3 > 0 ? "150%" : "100%"), r4.removeAttribute("data-native-material"), l.debug("settings", "Shell material:", {
      mode: o2,
      alpha: i3,
      blur: a3,
      hasWallpaper: c2
    });
  }, [d2, m2, f2, c2]), e.useEffect(() => {
    var e2;
    const t3 = document.documentElement,
      n4 = null != (e2 = y[null != h3 ? h3 : "medium"]) ? e2 : y.medium;
    t3.style.setProperty("--ui-font-size", `${v2 || 16}px`), t3.style.setProperty("--ui-radius", `${n4.card}px`), t3.style.setProperty("--radius-card", `${n4.card}px`), t3.style.setProperty("--radius-cover", `${n4.cover}px`), t3.style.setProperty("--radius-button", `${n4.button}px`), t3.style.setProperty("--radius-input", `${n4.input}px`), t3.style.setProperty("--radius-dialog", `${n4.dialog}px`), t3.style.setProperty("--radius-menu", `${n4.menu}px`);
  }, [v2, h3]);
}
export { OriginalMaterialSettings, P as A, E as a, T as P };
