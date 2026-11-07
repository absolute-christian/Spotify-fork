// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { c as e, j as s, R as l, B as a } from "./vendor-ui-BwX-1h7U.js";
import { n as r, Z as n, M as t, a0 as i, E as o, T as c } from "./main-DVjTVWDM.js";
import { z as d, b as u, k as m } from "./globals-Bc3qFUyf.js";
const h = "grid grid-cols-[repeat(auto-fill,minmax(min(100%,11.5rem),1fr))] gap-x-5 gap-y-7",
  x = "grid grid-cols-[repeat(auto-fill,minmax(min(100%,9.5rem),1fr))] gap-x-5 gap-y-7";
function f(l2) {
  const a2 = e.c(4),
    {
      type: r2,
      fluid: n2
    } = l2,
    t2 = void 0 !== n2 && n2,
    o2 = "artists" === r2 ? 1 : 3,
    c2 = t2 ? "w-full min-w-0" : void 0,
    d2 = `${t2 ? "h-auto w-full" : ""} ${"artists" === r2 ? "rounded-full" : ""}`;
  let u2;
  return a2[0] !== o2 || a2[1] !== c2 || a2[2] !== d2 ? (u2 = s.jsx(i, {
    lines: o2,
    className: c2,
    coverClassName: d2
  }), a2[0] = o2, a2[1] = c2, a2[2] = d2, a2[3] = u2) : u2 = a2[3], u2;
}
function j(l2) {
  const a2 = e.c(2),
    {
      count: r2
    } = l2,
    n2 = void 0 === r2 ? 8 : r2;
  let t2;
  return a2[0] !== n2 ? (t2 = s.jsx("div", {
    "aria-hidden": true,
    className: "grid gap-x-6 gap-y-1 page-xl:grid-cols-2",
    children: Array.from({
      length: n2
    }, v)
  }), a2[0] = n2, a2[1] = t2) : t2 = a2[1], t2;
}
function v(e2, l2) {
  return s.jsxs("div", {
    className: "py-1",
    children: [s.jsx(t, {
      size: "md",
      flush: true,
      dense: true,
      className: "h-14"
    }), s.jsx(r, {
      className: "mb-2 ml-[3.75rem] h-3 w-3/5 rounded"
    })]
  }, l2);
}
function g(l2) {
  const a2 = e.c(18),
    {
      type: n2,
      more: t2
    } = l2,
    i2 = void 0 !== t2 && t2;
  if ("lyrics" === n2) {
    const e2 = i2 ? 4 : 8;
    let l3;
    return a2[0] !== e2 ? (l3 = s.jsx(j, {
      count: e2
    }), a2[0] = e2, a2[1] = l3) : l3 = a2[1], l3;
  }
  if ("all" === n2) {
    let e2, l3, n3, t3, i3, o3;
    return a2[2] === Symbol.for("react.memo_cache_sentinel") ? (e2 = s.jsx(r, {
      className: "mb-2.5 h-3.5 w-32 rounded"
    }), a2[2] = e2) : e2 = a2[2], a2[3] === Symbol.for("react.memo_cache_sentinel") ? (l3 = s.jsx(r, {
      className: "h-20 w-20 shrink-0 rounded-xl"
    }), a2[3] = l3) : l3 = a2[3], a2[4] === Symbol.for("react.memo_cache_sentinel") ? (n3 = s.jsxs("div", {
      children: [e2, s.jsxs("div", {
        className: "flex max-w-xl items-center gap-5 py-1",
        children: [l3, s.jsxs("div", {
          className: "min-w-0 flex-1 space-y-2",
          children: [s.jsx(r, {
            className: "h-6 w-56 max-w-full rounded"
          }), s.jsx(r, {
            className: "h-4 w-32 rounded"
          })]
        })]
      })]
    }), t3 = s.jsxs("div", {
      children: [s.jsx(r, {
        className: "mb-2.5 h-3.5 w-16 rounded"
      }), s.jsx(w, {
        count: 8
      })]
    }), i3 = ["artists", "albums", "playlists"], a2[4] = n3, a2[5] = t3, a2[6] = i3) : (n3 = a2[4], t3 = a2[5], i3 = a2[6]), a2[7] === Symbol.for("react.memo_cache_sentinel") ? (o3 = s.jsxs("div", {
      className: "flex flex-col gap-section",
      "aria-hidden": true,
      children: [n3, t3, i3.map(p)]
    }), a2[7] = o3) : o3 = a2[7], o3;
  }
  if ("artists" === n2 || "albums" === n2 || "playlists" === n2) {
    const e2 = "artists" === n2 ? x : h;
    let l3, r2;
    if (a2[8] !== i2 || a2[9] !== n2) {
      let e3;
      a2[11] !== n2 ? (e3 = (e4, l4) => s.jsx(f, {
        type: n2,
        fluid: true
      }, l4), a2[11] = n2, a2[12] = e3) : e3 = a2[12], l3 = Array.from({
        length: i2 ? 6 : 12
      }, e3), a2[8] = i2, a2[9] = n2, a2[10] = l3;
    } else l3 = a2[10];
    return a2[13] !== e2 || a2[14] !== l3 ? (r2 = s.jsx("div", {
      className: e2,
      "aria-hidden": true,
      children: l3
    }), a2[13] = e2, a2[14] = l3, a2[15] = r2) : r2 = a2[15], r2;
  }
  const o2 = i2 ? 6 : 12;
  let c2;
  return a2[16] !== o2 ? (c2 = s.jsx(w, {
    count: o2
  }), a2[16] = o2, a2[17] = c2) : c2 = a2[17], c2;
}
function p(e2) {
  return s.jsxs("div", {
    children: [s.jsx(r, {
      className: "mb-2.5 h-3.5 w-24 rounded"
    }), s.jsx(n, {
      children: Array.from({
        length: 6
      }, (l2, a2) => s.jsx(f, {
        type: e2
      }, a2))
    })]
  }, e2);
}
function w(l2) {
  const a2 = e.c(2),
    {
      count: r2
    } = l2,
    n2 = void 0 === r2 ? 12 : r2;
  let t2;
  return a2[0] !== n2 ? (t2 = s.jsx("div", {
    "aria-hidden": true,
    children: Array.from({
      length: n2
    }, y)
  }), a2[0] = n2, a2[1] = t2) : t2 = a2[1], t2;
}
function y(e2, l2) {
  return s.jsxs("div", {
    className: "flex h-16 items-center justify-between gap-4",
    children: [s.jsx(t, {
      size: "md",
      flush: true,
      dense: true,
      className: "min-w-0 flex-1"
    }), s.jsx(r, {
      className: "mr-1 h-7 w-12 shrink-0 rounded-lg opacity-60"
    })]
  }, l2);
}
function N(l2) {
  const a2 = e.c(2),
    {
      count: r2
    } = l2,
    n2 = void 0 === r2 ? 12 : r2;
  let t2;
  return a2[0] !== n2 ? (t2 = s.jsx(w, {
    count: n2
  }), a2[0] = n2, a2[1] = t2) : t2 = a2[1], t2;
}
const b = l.memo(l2 => {
  const a2 = e.c(2);
  let r2;
  return a2[0] !== l2 ? (r2 = "borderless" === l2.trackSurface ? s.jsx("div", {
    className: "-mx-2.5",
    children: s.jsx(S, {
      ...l2
    })
  }) : s.jsx(S, {
    ...l2
  }), a2[0] = l2, a2[1] = r2) : r2 = a2[1], r2;
});
function S(e2) {
  var r2, n2, t2, i2, h2, x2, f2;
  const {
      songs: j2
    } = e2,
    v2 = null != (r2 = e2.loading) && r2,
    g2 = null != (n2 = e2.searchQuery) ? n2 : "",
    p2 = e2.hasMore,
    w2 = e2.loadMoreRef,
    y2 = e2.loadingMore,
    b2 = null != (t2 = e2.trackSurface) ? t2 : "default",
    S2 = "borderless" === b2,
    k = null != (i2 = e2.trackVariant) ? i2 : "search",
    _ = e2.prepareSong,
    T = null != (h2 = e2.showTrackNumbers) && h2,
    z = null != (x2 = e2.showAddedDate) && x2,
    $ = null != (f2 = e2.showThreeDots) && f2,
    B = e2.isVirtualized,
    M = e2.parentRef,
    R = e2.onLoadSimilarTracks,
    A = e2.onSongSelect,
    {
      t: C
    } = d(),
    L = u(e3 => e3.play),
    E = l.useRef(null),
    [D, V] = l.useState(0),
    q = l.useCallback(() => {
      const e3 = null == M ? void 0 : M.current,
        s2 = E.current;
      if (!e3 || !s2) return void V(0);
      const l2 = s2.getBoundingClientRect().top - e3.getBoundingClientRect().top + e3.scrollTop;
      V(e4 => Math.abs(e4 - l2) < 1 ? e4 : l2);
    }, [M]);
  l.useLayoutEffect(() => (q(), window.addEventListener("resize", q), () => window.removeEventListener("resize", q)), [j2.length, q]);
  const P = l.useCallback(e3 => {
      A ? A(e3) : L(e3);
    }, [A, L]),
    F = a({
      useFlushSync: false,
      enabled: Boolean(B),
      count: j2.length,
      getScrollElement: () => (null == M ? void 0 : M.current) || null,
      initialRect: {
        width: 0,
        height: 640
      },
      estimateSize: () => S2 ? 64 : 76,
      overscan: 5,
      scrollMargin: D
    });
  return v2 && 0 === j2.length ? s.jsx(N, {}) : 0 === j2.length && g2 ? s.jsx(o, {
    title: C("search.results.empty_state_for_query", {
      query: g2
    }),
    variant: "search"
  }) : 0 === j2.length ? s.jsx(o, {
    title: C("search.results.initial_state"),
    variant: "search"
  }) : B ? s.jsxs("div", {
    className: "relative w-full",
    children: [s.jsx("div", {
      ref: E,
      className: m("mx-auto", !B && "space-y-2"),
      children: s.jsx("div", {
        className: "relative w-full",
        style: {
          height: `${F.getTotalSize()}px`
        },
        children: F.getVirtualItems().map(e3 => {
          var l2, a2, r3;
          const n3 = j2[e3.index];
          return s.jsx("div", {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${e3.size}px`,
              transform: `translateY(${e3.start - D}px)`
            },
            children: s.jsx(c, {
              song: null != (l2 = null == _ ? void 0 : _(n3)) ? l2 : n3,
              index: e3.index,
              onPlaySong: P,
              onLoadSimilarTracks: R,
              variant: k,
              surface: b2,
              showTrackNumber: T,
              showCollaborator: Boolean(null == (r3 = (null != (a2 = null == _ ? void 0 : _(n3)) ? a2 : n3).collaborators) ? void 0 : r3.length),
              showAddedDate: z,
              showMoreButton: $
            })
          }, `${n3.id}-${e3.index}`);
        })
      })
    }), p2 && s.jsx("div", {
      ref: w2,
      className: "py-8 flex justify-center w-full",
      children: y2 && s.jsx("div", {
        className: "w-full h-1"
      })
    })]
  }) : s.jsxs("div", {
    className: "relative w-full",
    children: [s.jsx("div", {
      className: m("mx-auto", !S2 && "space-y-2"),
      children: j2.map((e3, l2) => {
        var a2, r3, n3;
        return s.jsx(c, {
          song: null != (a2 = null == _ ? void 0 : _(e3)) ? a2 : e3,
          index: l2,
          onPlaySong: P,
          onLoadSimilarTracks: R,
          variant: k,
          surface: b2,
          showTrackNumber: T,
          showCollaborator: Boolean(null == (n3 = (null != (r3 = null == _ ? void 0 : _(e3)) ? r3 : e3).collaborators) ? void 0 : n3.length),
          showAddedDate: z,
          showMoreButton: $
        }, `${e3.id}-${l2}`);
      })
    }), p2 && s.jsx("div", {
      ref: w2,
      className: "py-8 flex justify-center w-full",
      children: y2 && s.jsx("div", {
        className: "w-full h-1"
      })
    })]
  });
}
export { b as T, h as a, x as S, j as L, g as R };
