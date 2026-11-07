// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { r as e, c as t, j as s, a8 as a, a9 as i } from "./vendor-ui-BwX-1h7U.js";
import { k as n, I as l, B as r, aI as c, l as o, z as d, df as u, L as m, gl as x, c4 as h, K as g, fL as f, aq as p, b as v } from "./globals-Bc3qFUyf.js";
import { Z as b, S as j, bM as y } from "./main-DVjTVWDM.js";
import { T as N } from "./progress-B9dXWW2R.js";
const w = e.forwardRef((e2, l2) => {
  const r2 = t.c(10);
  let c2, o2, d2, u2, m2;
  return r2[0] !== e2 ? ({
    className: c2,
    ...o2
  } = e2, r2[0] = e2, r2[1] = c2, r2[2] = o2) : (c2 = r2[1], o2 = r2[2]), r2[3] !== c2 ? (d2 = n("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", "disabled:cursor-not-allowed disabled:opacity-50", "data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary/30", "hover:data-[state=checked]:bg-primary/95", c2), r2[3] = c2, r2[4] = d2) : d2 = r2[4], r2[5] === Symbol.for("react.memo_cache_sentinel") ? (u2 = s.jsx(a, {
    className: n("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform duration-200", "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
  }), r2[5] = u2) : u2 = r2[5], r2[6] !== o2 || r2[7] !== l2 || r2[8] !== d2 ? (m2 = s.jsx(i, {
    ref: l2,
    className: d2,
    ...o2,
    children: u2
  }), r2[6] = o2, r2[7] = l2, r2[8] = d2, r2[9] = m2) : m2 = r2[9], m2;
});
const k = "text-headline page-sm:text-base font-semibold tracking-tight text-foreground";
function _(e2) {
  const a2 = t.c(12),
    {
      children: i2,
      className: l2,
      title: r2,
      actions: c2
    } = e2;
  let o2;
  a2[0] !== l2 ? (o2 = n("flex flex-col", l2), a2[0] = l2, a2[1] = o2) : o2 = a2[1];
  const d2 = r2 ? "" : void 0;
  let u2, m2, x2;
  return a2[2] !== c2 || a2[3] !== r2 ? (u2 = (r2 || c2) && s.jsxs("div", {
    className: "mb-2.5 flex items-center gap-3 px-0.5",
    children: [r2 && s.jsx("h3", {
      className: n(k, "flex shrink-0 items-center gap-2"),
      children: r2
    }), s.jsx("span", {
      "aria-hidden": true,
      className: "h-px min-w-4 flex-1 bg-border-default"
    }), c2 && s.jsx("div", {
      className: "flex shrink-0 items-center gap-2",
      children: c2
    })]
  }), a2[2] = c2, a2[3] = r2, a2[4] = u2) : u2 = a2[4], a2[5] !== i2 ? (m2 = s.jsx("div", {
    className: "w-full flex flex-col gap-0.5",
    children: i2
  }), a2[5] = i2, a2[6] = m2) : m2 = a2[6], a2[7] !== o2 || a2[8] !== d2 || a2[9] !== u2 || a2[10] !== m2 ? (x2 = s.jsxs("div", {
    className: o2,
    "data-titled": d2,
    children: [u2, m2]
  }), a2[7] = o2, a2[8] = d2, a2[9] = u2, a2[10] = m2, a2[11] = x2) : x2 = a2[11], x2;
}
function S(e2) {
  const a2 = t.c(20),
    {
      label: i2,
      description: l2,
      children: r2,
      className: c2,
      vertical: o2
    } = e2,
    d2 = null != i2 || null != l2,
    u2 = o2 || void 0,
    m2 = o2 ? "flex-col items-start gap-2.5" : "items-center justify-between";
  let x2, h2;
  a2[0] !== c2 || a2[1] !== m2 ? (x2 = n("flex py-3 px-0.5 transition-colors select-none gap-4", m2, c2), a2[0] = c2, a2[1] = m2, a2[2] = x2) : x2 = a2[2], a2[3] !== l2 || a2[4] !== d2 || a2[5] !== i2 || a2[6] !== o2 ? (h2 = d2 && s.jsxs("div", {
    "data-settings-label": true,
    className: n("space-y-0.5", o2 ? "w-full" : "flex-1 min-w-0 pr-2"),
    children: [i2 && s.jsx("div", {
      className: "text-body page-sm:text-headline font-medium text-foreground leading-snug",
      children: i2
    }), l2 && s.jsx("div", {
      className: "text-callout page-sm:text-callout text-muted-foreground/70 leading-normal",
      children: l2
    })]
  }), a2[3] = l2, a2[4] = d2, a2[5] = i2, a2[6] = o2, a2[7] = h2) : h2 = a2[7];
  const g2 = o2 ? "w-full" : "shrink-0 flex items-center justify-end min-w-fit",
    f2 = !o2 && d2 && "ml-auto",
    p2 = !d2 && "w-full";
  let v2, b2, j2;
  return a2[8] !== g2 || a2[9] !== f2 || a2[10] !== p2 ? (v2 = n(g2, f2, p2), a2[8] = g2, a2[9] = f2, a2[10] = p2, a2[11] = v2) : v2 = a2[11], a2[12] !== r2 || a2[13] !== v2 ? (b2 = s.jsx("div", {
    "data-settings-control": true,
    className: v2,
    children: r2
  }), a2[12] = r2, a2[13] = v2, a2[14] = b2) : b2 = a2[14], a2[15] !== u2 || a2[16] !== x2 || a2[17] !== h2 || a2[18] !== b2 ? (j2 = s.jsxs("div", {
    "data-settings-item": true,
    "data-settings-vertical": u2,
    className: x2,
    children: [h2, b2]
  }), a2[15] = u2, a2[16] = x2, a2[17] = h2, a2[18] = b2, a2[19] = j2) : j2 = a2[19], j2;
}
function C(e2) {
  const a2 = t.c(9),
    {
      label: i2,
      description: n2,
      checked: l2,
      onCheckedChange: r2,
      disabled: c2,
      className: o2
    } = e2;
  let d2, u2;
  return a2[0] !== l2 || a2[1] !== c2 || a2[2] !== r2 ? (d2 = s.jsx(w, {
    checked: l2,
    onCheckedChange: r2,
    disabled: c2
  }), a2[0] = l2, a2[1] = c2, a2[2] = r2, a2[3] = d2) : d2 = a2[3], a2[4] !== o2 || a2[5] !== n2 || a2[6] !== i2 || a2[7] !== d2 ? (u2 = s.jsx(S, {
    label: i2,
    description: n2,
    className: o2,
    children: d2
  }), a2[4] = o2, a2[5] = n2, a2[6] = i2, a2[7] = d2, a2[8] = u2) : u2 = a2[8], u2;
}
function $(e2) {
  const a2 = t.c(4),
    {
      className: i2
    } = e2;
  let l2, r2;
  return a2[0] !== i2 ? (l2 = n("my-6 h-px w-full bg-border-default [&:has(+[data-titled],+*>[data-titled]:first-child)]:bg-transparent", i2), a2[0] = i2, a2[1] = l2) : l2 = a2[1], a2[2] !== l2 ? (r2 = s.jsx("div", {
    className: l2
  }), a2[2] = l2, a2[3] = r2) : r2 = a2[3], r2;
}
function F(e2) {
  const a2 = t.c(2),
    {
      children: i2
    } = e2;
  let n2;
  return a2[0] !== i2 ? (n2 = s.jsx(b, {
    gutter: "0px",
    "data-mockup-list": true,
    className: "gap-2 pb-1 items-stretch [&>*]:min-w-36 [&>*]:flex-1 [&>*]:shrink-0 [&_[data-mockup-card]]:h-full [&_[data-mockup-card]]:min-h-20",
    children: i2
  }), a2[0] = i2, a2[1] = n2) : n2 = a2[1], n2;
}
function L(e2) {
  const a2 = t.c(53),
    {
      id: i2,
      title: c2,
      subtitle: o2,
      icon: d2,
      iconNode: u2,
      preview: m2,
      isSelected: x2,
      onTap: h2,
      onClick: g2,
      disabled: f2,
      isLocked: p2,
      layout: v2,
      appearance: b2,
      className: j2,
      badge: y2
    } = e2,
    w2 = void 0 !== f2 && f2,
    k2 = void 0 !== p2 && p2,
    z2 = void 0 === v2 ? "vertical" : v2,
    _2 = void 0 === b2 ? "plate" : b2;
  let S2;
  a2[0] !== w2 || a2[1] !== g2 || a2[2] !== h2 ? (S2 = () => {
    var e3;
    w2 || null == (e3 = null != h2 ? h2 : g2) || e3();
  }, a2[0] = w2, a2[1] = g2, a2[2] = h2, a2[3] = S2) : S2 = a2[3];
  const C2 = S2,
    M2 = "horizontal" === z2,
    q2 = M2 ? "preview" === _2 ? "flex items-center gap-4 px-2.5 py-1 min-h-10" : "flex items-center gap-3 px-3 py-3 min-h-14" : "flex flex-col items-center text-center justify-center gap-2 p-3 min-h-14",
    $2 = x2 ? "bg-selected text-foreground" : "preview" === _2 ? "bg-transparent text-muted-foreground hover:text-foreground" : "bg-plate text-foreground/70 hover:bg-hover hover:text-foreground";
  let F2, L2;
  a2[4] !== j2 || a2[5] !== q2 || a2[6] !== $2 ? (F2 = n("relative h-auto min-w-0 w-full whitespace-normal text-left select-none focus-visible:ring-2 focus-visible:ring-primary/40", "disabled:opacity-50 disabled:cursor-not-allowed", q2, $2, j2), a2[4] = j2, a2[5] = q2, a2[6] = $2, a2[7] = F2) : F2 = a2[7], a2[8] !== d2 || a2[9] !== u2 || a2[10] !== M2 || a2[11] !== x2 ? (L2 = u2 ? s.jsx("div", {
    className: "flex items-center justify-center shrink-0",
    children: u2
  }) : d2 ? s.jsx("div", {
    className: n("flex items-center justify-center shrink-0", x2 ? "text-foreground" : "text-foreground/55"),
    children: s.jsx(d2, {
      className: M2 ? "w-5 h-5" : "w-4.5 h-4.5"
    })
  }) : null, a2[8] = d2, a2[9] = u2, a2[10] = M2, a2[11] = x2, a2[12] = L2) : L2 = a2[12];
  const D2 = M2 ? m2 ? "w-1/4 shrink-0 text-left" : "flex-1 text-left" : "w-full text-center";
  let E2;
  a2[13] !== D2 ? (E2 = n("min-w-0", D2), a2[13] = D2, a2[14] = E2) : E2 = a2[14];
  const A2 = M2 ? "justify-start" : "justify-center";
  let T2;
  a2[15] !== A2 ? (T2 = n("flex items-center gap-1.5", A2), a2[15] = A2, a2[16] = T2) : T2 = a2[16];
  const B2 = M2 ? "text-sm" : "text-xs",
    I2 = x2 ? "text-foreground" : "preview" === _2 ? "text-muted-foreground" : "text-foreground/85";
  let O2, P, R, H, K, Z, G, J, Q;
  return a2[17] !== B2 || a2[18] !== I2 ? (O2 = n(B2, "leading-tight font-medium transition-colors duration-200", I2), a2[17] = B2, a2[18] = I2, a2[19] = O2) : O2 = a2[19], a2[20] !== O2 || a2[21] !== c2 ? (P = s.jsx(N, {
    hoverScope: "[data-mockup-card]",
    containerClassName: "min-w-0 max-w-full",
    className: O2,
    children: c2
  }), a2[20] = O2, a2[21] = c2, a2[22] = P) : P = a2[22], a2[23] !== y2 ? (R = y2 && s.jsx("div", {
    className: "shrink-0",
    children: y2
  }), a2[23] = y2, a2[24] = R) : R = a2[24], a2[25] !== k2 ? (H = k2 && s.jsx(l.lock, {
    "aria-hidden": true,
    className: "size-3.5 shrink-0 text-muted-foreground"
  }), a2[25] = k2, a2[26] = H) : H = a2[26], a2[27] !== T2 || a2[28] !== P || a2[29] !== R || a2[30] !== H ? (K = s.jsxs("div", {
    className: T2,
    children: [P, R, H]
  }), a2[27] = T2, a2[28] = P, a2[29] = R, a2[30] = H, a2[31] = K) : K = a2[31], a2[32] !== M2 || a2[33] !== o2 ? (Z = o2 && (M2 ? s.jsx("p", {
    className: "text-xs text-muted-foreground/70 mt-0.5 leading-normal",
    children: o2
  }) : s.jsx("div", {
    className: "mt-0.5 flex justify-center min-w-0",
    children: s.jsx(N, {
      hoverScope: "[data-mockup-card]",
      containerClassName: "min-w-0 max-w-full",
      className: "text-micro text-muted-foreground/70 leading-normal",
      children: o2
    })
  })), a2[32] = M2, a2[33] = o2, a2[34] = Z) : Z = a2[34], a2[35] !== E2 || a2[36] !== K || a2[37] !== Z ? (G = s.jsxs("div", {
    className: E2,
    children: [K, Z]
  }), a2[35] = E2, a2[36] = K, a2[37] = Z, a2[38] = G) : G = a2[38], a2[39] !== _2 || a2[40] !== M2 || a2[41] !== x2 || a2[42] !== m2 ? (J = m2 && s.jsx("div", {
    "aria-hidden": true,
    className: n("pointer-events-none flex min-w-0 items-center justify-center", M2 ? "flex-1" : "w-full", "preview" === _2 && (M2 ? "h-8" : "order-first h-10 shrink-0"), "preview" === _2 && !x2 && "opacity-45"),
    children: m2
  }), a2[39] = _2, a2[40] = M2, a2[41] = x2, a2[42] = m2, a2[43] = J) : J = a2[43], a2[44] !== w2 || a2[45] !== C2 || a2[46] !== i2 || a2[47] !== x2 || a2[48] !== G || a2[49] !== J || a2[50] !== F2 || a2[51] !== L2 ? (Q = s.jsxs(r, {
    id: i2,
    "data-mockup-card": true,
    variant: "quiet",
    stretch: true,
    type: "button",
    disabled: w2,
    "aria-pressed": x2,
    onClick: C2,
    className: F2,
    children: [L2, G, J]
  }), a2[44] = w2, a2[45] = C2, a2[46] = i2, a2[47] = x2, a2[48] = G, a2[49] = J, a2[50] = F2, a2[51] = L2, a2[52] = Q) : Q = a2[52], Q;
}
const D = {
    tracks: {
      count: 0,
      size: 0
    },
    covers: {
      count: 0,
      size: 0
    },
    lyrics: {
      count: 0,
      size: 0
    }
  },
  E = ["search_history", "track_settings"],
  A = {
    search_history: () => p.searchHistory.clear(),
    track_settings: () => {
      var e2;
      return y(null == (e2 = v.getState().currentSong) ? void 0 : e2.id);
    }
  };
let T = null,
  B = 0;
function I() {
  var t2;
  const {
      t: a2,
      currentLanguage: i2
    } = d(),
    [p2, v2] = e.useState(() => T || D),
    [b2, y2] = e.useState(null),
    [N2, w2] = e.useState(false),
    [k2, z2] = u(),
    M2 = null == k2 ? void 0 : k2.caching,
    q2 = null != (t2 = null == M2 ? void 0 : M2.enabled) && t2,
    F2 = (null == M2 ? void 0 : M2.triggers) || [],
    I2 = void 0 !== (null == M2 ? void 0 : M2.maxsize) ? M2.maxsize : 2,
    O2 = async (e2 = false) => {
      if (!e2 && T && Date.now() - B < 6e4) v2(T);else try {
        const e3 = await c.getCacheStats();
        T = e3, B = Date.now(), v2(e3);
      } catch (t3) {
        o.error("settings", "Error loading cache stats", t3);
      }
    };
  e.useEffect(() => {
    O2();
  }, []);
  const P = async e2 => {
      if (!b2) {
        y2(e2);
        try {
          await c.clearCacheCategory(e2), T = null, B = 0, await O2(true);
        } catch (t3) {
          o.error("settings", "Failed to clear cache category:", t3);
        } finally {
          y2(null);
        }
      }
    },
    R = (null == p2 ? void 0 : p2.tracks.size) || 0,
    H = (null == p2 ? void 0 : p2.covers.size) || 0,
    K = (null == p2 ? void 0 : p2.lyrics.size) || 0,
    Z = R + H + K,
    G = function (t3) {
      const [s2, a3] = e.useState(t3),
        [i3, n2] = e.useState(t3),
        l2 = e.useRef(t3);
      return e.useEffect(() => {
        n2(e3 => Math.max(e3, t3));
        const e2 = l2.current,
          s3 = window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.classList.contains("no-animations");
        if (t3 >= e2 || s3) return l2.current = t3, void a3(t3);
        let i4,
          r2 = 0;
        const c2 = s4 => {
          null != i4 || (i4 = s4);
          const n3 = Math.min((s4 - i4) / 500, 1),
            o2 = 1 - (1 - n3) ** 3,
            d2 = Math.round(e2 + (t3 - e2) * o2);
          l2.current = d2, a3(d2), n3 < 1 && (r2 = requestAnimationFrame(c2));
        };
        return r2 = requestAnimationFrame(c2), () => cancelAnimationFrame(r2);
      }, [t3]), {
        displaySize: s2,
        capacity: Math.max(i3, t3, 1)
      };
    }(Z),
    J = [{
      id: "tracks",
      title: a2("settings.main.storage.cache_categories.tracks"),
      count: (null == p2 ? void 0 : p2.tracks.count) || 0,
      size: (null == p2 ? void 0 : p2.tracks.size) || 0,
      tone: "bg-foreground/85"
    }, {
      id: "covers",
      title: a2("settings.main.storage.cache_categories.covers"),
      count: (null == p2 ? void 0 : p2.covers.count) || 0,
      size: (null == p2 ? void 0 : p2.covers.size) || 0,
      tone: "bg-foreground/40"
    }, {
      id: "lyrics",
      title: a2("settings.main.storage.cache_categories.lyrics"),
      count: (null == p2 ? void 0 : p2.lyrics.count) || 0,
      size: K,
      tone: "bg-foreground/20"
    }],
    Q = s.jsx(r, {
      type: "button",
      variant: "quiet",
      size: "compact",
      className: "px-2 hover:text-destructive",
      onClick: () => P("all"),
      disabled: null !== b2 || 0 === Z,
      children: "all" === b2 ? s.jsx(m, {
        className: "h-3.5 w-3.5 animate-spin"
      }) : a2("settings.main.storage.clear_all")
    });
  return s.jsxs("div", {
    className: "flex flex-col pb-6",
    children: [s.jsx(_, {
      children: s.jsxs("div", {
        className: "flex flex-col gap-3 select-none",
        children: [s.jsxs("div", {
          className: "flex items-baseline gap-2",
          children: [s.jsx("span", {
            className: "text-title1 font-semibold leading-none tracking-tight text-foreground",
            children: x(G.displaySize)
          }), s.jsx("span", {
            className: "text-footnote font-medium text-muted-foreground",
            children: a2("settings.main.storage.occupied")
          })]
        }), s.jsx("div", {
          className: "flex h-1.5 w-full gap-0.5 overflow-hidden rounded-full bg-selected",
          children: J.map(e2 => s.jsx("div", {
            className: n("h-full rounded-full transition-[width] duration-500 ease-out motion-reduce:transition-none", e2.tone),
            style: {
              width: e2.size / G.capacity * 100 + "%"
            }
          }, e2.id))
        })]
      })
    }), s.jsx($, {}), s.jsxs(_, {
      children: [s.jsx(C, {
        label: a2("settings.main.player.caching"),
        description: a2("settings.main.player.caching_description"),
        checked: q2,
        onCheckedChange: e2 => z2({
          caching: {
            enabled: e2,
            triggers: e2 ? F2 : [],
            maxsize: I2
          }
        })
      }), q2 && s.jsxs("div", {
        className: "flex flex-col gap-3 pt-2 select-none",
        children: [s.jsx(S, {
          label: a2("settings.main.player.cache.maxsize_title"),
          description: a2("settings.main.player.cache.maxsize_desc"),
          children: s.jsx(j, {
            value: null === I2 || 0 === I2 ? 0 : I2,
            onChange: e2 => {
              return t3 = 0 === e2 ? null : e2, void z2({
                caching: {
                  ...M2,
                  enabled: q2,
                  triggers: F2,
                  maxsize: t3
                }
              });
              var t3;
            },
            options: [{
              value: 1,
              label: a2("settings.main.player.cache.size_gb", {
                value: 1
              })
            }, {
              value: 2,
              label: a2("settings.main.player.cache.size_gb", {
                value: 2
              })
            }, {
              value: 5,
              label: a2("settings.main.player.cache.size_gb", {
                value: 5
              })
            }, {
              value: 10,
              label: a2("settings.main.player.cache.size_gb", {
                value: 10
              })
            }, {
              value: 0,
              label: "\u221E"
            }],
            size: "sm"
          })
        }), s.jsx("div", {
          className: "flex flex-col gap-2 pt-1",
          children: [{
            id: "listened",
            title: a2("settings.main.player.cache.listened"),
            subtitle: a2("settings.main.player.cache.listened_desc"),
            icon: h
          }, {
            id: "liked",
            title: a2("settings.main.player.cache.liked"),
            subtitle: a2("settings.main.player.cache.liked_desc"),
            icon: l.like
          }, {
            id: "playlist",
            title: a2("settings.main.player.cache.playlist"),
            subtitle: a2("settings.main.player.cache.playlist_desc"),
            icon: g.Playlist
          }].map(e2 => {
            const t3 = F2.includes(e2.id);
            return s.jsx(L, {
              layout: "horizontal",
              icon: e2.icon,
              title: e2.title,
              subtitle: e2.subtitle,
              isSelected: t3,
              onClick: () => (e3 => {
                const t4 = F2.includes(e3) ? F2.filter(t5 => t5 !== e3) : [...new Set([...F2, e3])];
                z2({
                  caching: {
                    ...M2,
                    enabled: true,
                    triggers: t4,
                    maxsize: I2
                  }
                });
              })(e2.id)
            }, e2.id);
          })
        })]
      })]
    }), s.jsx($, {}), s.jsx(_, {
      title: a2("settings.main.storage.title"),
      actions: Q,
      children: J.map(e2 => s.jsx(S, {
        label: e2.tone ? s.jsxs("span", {
          className: "flex items-center gap-2",
          children: [s.jsx("span", {
            "aria-hidden": true,
            className: n("h-2.5 w-3.5 shrink-0 -skew-x-[20deg] rounded-[2px]", e2.tone)
          }), e2.title]
        }) : e2.title,
        description: [`${e2.count} ${a2(`settings.main.storage.units.${e2.id}.${f(e2.count, i2)}`)}`, void 0 !== e2.size ? x(e2.size) : null].filter(Boolean).join(", "),
        children: s.jsx(r, {
          type: "button",
          variant: "quiet",
          size: "compact",
          className: "px-2 hover:text-destructive",
          onClick: () => P(e2.id),
          disabled: null !== b2 || 0 === e2.count,
          children: b2 === e2.id ? s.jsx(m, {
            className: "h-3.5 w-3.5 animate-spin"
          }) : a2("settings.main.storage.data.clear")
        })
      }, e2.id))
    }), s.jsx($, {}), s.jsx(_, {
      title: a2("settings.main.storage.data.title"),
      children: E.map(e2 => s.jsx(S, {
        label: a2(`settings.main.storage.data.${e2}`),
        description: a2(`settings.main.storage.data.${e2}_description`),
        children: s.jsx(r, {
          type: "button",
          variant: "quiet",
          size: "compact",
          className: "px-2 hover:text-destructive",
          onClick: () => {
            (async e3 => {
              if (!N2) {
                w2(true);
                try {
                  await A[e3]();
                } catch (t3) {
                  o.error("settings", `Failed to clear ${e3}:`, t3);
                } finally {
                  w2(false);
                }
              }
            })(e2);
          },
          disabled: N2,
          children: a2("track_settings" === e2 ? "settings.main.storage.data.reset" : "settings.main.storage.data.clear")
        })
      }, e2))
    })]
  });
}
export { $ as d, C as b, S, _ as a, w as f, L as c, F as M, k as e, I as g };
