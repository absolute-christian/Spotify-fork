// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { r as s, c as e, j as t, R as a } from "./vendor-ui-BwX-1h7U.js";
import { z as r, fJ as l, J as i, cc as o, B as n } from "./globals-Bc3qFUyf.js";
import { E as c, T as u, bB as m, bC as d, A as h, Y as p, X as g, _ as x, Z as y, bD as j, bE as f, a4 as v, a3 as S } from "./main-DVjTVWDM.js";
import { T as b } from "./titles-4S49xODV.js";
import { L as _, R as k, S as N, a as T, T as w } from "./tracks-S2LS9kyP.js";
function L(s2, e2) {
  const a2 = e2.trim();
  if (!a2 || !s2) return s2;
  const r2 = a2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return s2.split(new RegExp(`(${r2})`, "gi")).map((s3, e3) => s3.toLowerCase() === a2.toLowerCase() ? t.jsx("mark", {
    className: "bg-transparent font-medium text-primary",
    children: s3
  }, e3) : s3);
}
const $ = s.memo(function (s2) {
  const a2 = e.c(30),
    {
      songs: i2,
      loading: o2,
      searchQuery: n2,
      hasMore: m2,
      loadingMore: d2,
      loadMoreRef: h2,
      parentRef: p2,
      onSongSelect: g2,
      onLoadSimilarTracks: x2
    } = s2,
    {
      t: y2
    } = r();
  let j2, f2, v2, S2, b2, k2;
  if (a2[0] !== g2 || a2[1] !== i2 ? (j2 = {
    itemClassName: "lyrics-search-item",
    onSelect: s3 => {
      i2[s3] && g2(i2[s3]);
    }
  }, a2[0] = g2, a2[1] = i2, a2[2] = j2) : j2 = a2[2], l(p2, j2), o2 && !i2.length) {
    let s3;
    return a2[3] === Symbol.for("react.memo_cache_sentinel") ? (s3 = t.jsx(_, {}), a2[3] = s3) : s3 = a2[3], s3;
  }
  if (!i2.length) {
    let s3, e2;
    return a2[4] !== n2 || a2[5] !== y2 ? (s3 = y2("search.results.empty_state_for_query", {
      query: n2
    }), a2[4] = n2, a2[5] = y2, a2[6] = s3) : s3 = a2[6], a2[7] !== s3 ? (e2 = t.jsx(c, {
      variant: "search",
      title: s3
    }), a2[7] = s3, a2[8] = e2) : e2 = a2[8], e2;
  }
  if (a2[9] !== x2 || a2[10] !== g2 || a2[11] !== n2 || a2[12] !== i2) {
    let s3;
    a2[14] !== x2 || a2[15] !== g2 || a2[16] !== n2 ? (s3 = (s4, e2) => {
      var a3;
      return t.jsxs("div", {
        className: "lyrics-search-item min-w-0 pb-1",
        children: [t.jsx(u, {
          song: s4,
          index: e2,
          variant: "search",
          surface: "borderless",
          onPlaySong: g2,
          onLoadSimilarTracks: x2
        }), (null == (a3 = s4.snippet) ? void 0 : a3.trim()) ? t.jsxs("p", {
          className: "-mt-2 mb-2 line-clamp-2 whitespace-pre-line pl-[3.75rem] pr-4 text-footnote text-foreground/70 leading-relaxed font-normal",
          children: ["\xAB", L(s4.snippet, n2), "\xBB"]
        }) : null]
      }, `${s4.source}:${s4.id}:${e2}`);
    }, a2[14] = x2, a2[15] = g2, a2[16] = n2, a2[17] = s3) : s3 = a2[17], f2 = i2.map(s3), a2[9] = x2, a2[10] = g2, a2[11] = n2, a2[12] = i2, a2[13] = f2;
  } else f2 = a2[13];
  return a2[18] !== f2 ? (v2 = t.jsx("div", {
    className: "grid gap-x-6 gap-y-1 page-xl:grid-cols-2",
    children: f2
  }), a2[18] = f2, a2[19] = v2) : v2 = a2[19], a2[20] !== d2 ? (S2 = d2 && t.jsx(_, {
    count: 4
  }), a2[20] = d2, a2[21] = S2) : S2 = a2[21], a2[22] !== m2 || a2[23] !== h2 ? (b2 = m2 && t.jsx("div", {
    ref: h2,
    className: "h-px"
  }), a2[22] = m2, a2[23] = h2, a2[24] = b2) : b2 = a2[24], a2[25] !== d2 || a2[26] !== v2 || a2[27] !== S2 || a2[28] !== b2 ? (k2 = t.jsxs("div", {
    className: "flex min-w-0 flex-col gap-3",
    "aria-busy": d2,
    children: [v2, S2, b2]
  }), a2[25] = d2, a2[26] = v2, a2[27] = S2, a2[28] = b2, a2[29] = k2) : k2 = a2[29], k2;
});
function M(s2) {
  var e2, t2;
  return Number.isInteger(s2.year) && s2.year >= 1e3 && s2.year <= 9999 ? String(s2.year) : null == (t2 = null == (e2 = s2.release_date) ? void 0 : e2.match(/^(\d{4})(?:-|$)/)) ? void 0 : t2[1];
}
function C(s2) {
  var e2, t2;
  const a2 = null != (t2 = s2.tracks_count) ? t2 : null == (e2 = s2.length) ? void 0 : e2.tracks;
  return "number" == typeof a2 && Number.isInteger(a2) && a2 >= 0 ? a2 : void 0;
}
const R = s.memo(s2 => {
  var a2, l2;
  const n2 = e.c(79),
    {
      match: c2,
      albums: u2,
      playlists: d2,
      onSongSelect: h2,
      onSelectArtist: p2,
      onSelectItem: g2
    } = s2,
    {
      t: x2,
      currentLanguage: y2
    } = r(),
    {
      type: j2,
      item: f2
    } = c2;
  let v2;
  n2[0] === Symbol.for("react.memo_cache_sentinel") ? (v2 = {
    size: "lg",
    flush: true,
    arrow: false,
    className: "max-w-xl"
  }, n2[0] = v2) : v2 = n2[0];
  const S2 = v2;
  if ("artist" === j2) {
    const s3 = f2,
      e2 = null != (a2 = s3.followers) ? a2 : 0,
      r2 = s3.avatar || "",
      l3 = s3.name || "";
    let o2, c3, u3;
    return n2[1] !== e2 || n2[2] !== x2 ? (o2 = e2 ? `${i(e2)} ${x2("search.results.followers")}` : void 0, n2[1] = e2, n2[2] = x2, n2[3] = o2) : o2 = n2[3], n2[4] !== s3 || n2[5] !== p2 ? (c3 = () => p2(s3), n2[4] = s3, n2[5] = p2, n2[6] = c3) : c3 = n2[6], n2[7] !== s3.source || n2[8] !== r2 || n2[9] !== l3 || n2[10] !== o2 || n2[11] !== c3 ? (u3 = t.jsx(m, {
      ...S2,
      type: "artist",
      cover: r2,
      title: l3,
      source: s3.source,
      author: o2,
      onClick: c3
    }), n2[7] = s3.source, n2[8] = r2, n2[9] = l3, n2[10] = o2, n2[11] = c3, n2[12] = u3) : u3 = n2[12], u3;
  }
  if ("track" === j2) {
    const s3 = f2,
      e2 = s3.cover_art || "",
      a3 = s3.title || "";
    let r2, l3;
    return n2[13] !== h2 || n2[14] !== s3 ? (r2 = () => h2(s3), n2[13] = h2, n2[14] = s3, n2[15] = r2) : r2 = n2[15], n2[16] !== s3.artist || n2[17] !== s3.source || n2[18] !== e2 || n2[19] !== a3 || n2[20] !== r2 ? (l3 = t.jsx(m, {
      ...S2,
      type: "track",
      cover: e2,
      title: a3,
      source: s3.source,
      author: s3.artist,
      onClick: r2
    }), n2[16] = s3.artist, n2[17] = s3.source, n2[18] = e2, n2[19] = a3, n2[20] = r2, n2[21] = l3) : l3 = n2[21], l3;
  }
  if ("album" === j2) {
    const s3 = f2;
    let e2, a3, r2, i2, o2, c3, d3, h3, p3, y3, j3;
    if (n2[22] !== u2 || n2[23] !== f2 || n2[24] !== x2 || n2[25] !== s3) {
      let t2;
      n2[35] !== f2 ? (t2 = s4 => s4.id === f2.id, n2[35] = f2, n2[36] = t2) : t2 = n2[36], a3 = {
        ...s3,
        ...u2.find(t2)
      }, e2 = m, r2 = S2, i2 = "album", o2 = a3.cover_art || "", c3 = a3.title || "", d3 = a3.source, h3 = a3.artist, p3 = null != (l2 = M(a3)) ? l2 : x2("common.tabs.album"), n2[22] = u2, n2[23] = f2, n2[24] = x2, n2[25] = s3, n2[26] = e2, n2[27] = a3, n2[28] = r2, n2[29] = i2, n2[30] = o2, n2[31] = c3, n2[32] = d3, n2[33] = h3, n2[34] = p3;
    } else e2 = n2[26], a3 = n2[27], r2 = n2[28], i2 = n2[29], o2 = n2[30], c3 = n2[31], d3 = n2[32], h3 = n2[33], p3 = n2[34];
    return n2[37] !== a3 || n2[38] !== g2 ? (y3 = () => g2(a3, true), n2[37] = a3, n2[38] = g2, n2[39] = y3) : y3 = n2[39], n2[40] !== e2 || n2[41] !== y3 || n2[42] !== r2 || n2[43] !== i2 || n2[44] !== o2 || n2[45] !== c3 || n2[46] !== d3 || n2[47] !== h3 || n2[48] !== p3 ? (j3 = t.jsx(e2, {
      ...r2,
      type: i2,
      cover: o2,
      title: c3,
      source: d3,
      author: h3,
      kind: p3,
      onClick: y3
    }), n2[40] = e2, n2[41] = y3, n2[42] = r2, n2[43] = i2, n2[44] = o2, n2[45] = c3, n2[46] = d3, n2[47] = h3, n2[48] = p3, n2[49] = j3) : j3 = n2[49], j3;
  }
  const b2 = f2;
  let _2, k2, N2, T2, w2, L2, $2, R2, I2, A2, Q2;
  if (n2[50] !== y2 || n2[51] !== f2 || n2[52] !== d2 || n2[53] !== x2 || n2[54] !== b2) {
    let s3;
    n2[64] !== f2 ? (s3 = s4 => s4.id === f2.id, n2[64] = f2, n2[65] = s3) : s3 = n2[65], k2 = {
      ...b2,
      ...d2.find(s3)
    };
    const e2 = C(k2);
    _2 = m, N2 = S2, T2 = "playlist", w2 = k2.cover_art || "", L2 = k2.title || "", $2 = k2.source, R2 = k2.author, I2 = void 0 !== e2 ? o(e2, x2, y2) : x2("common.tabs.playlist"), n2[50] = y2, n2[51] = f2, n2[52] = d2, n2[53] = x2, n2[54] = b2, n2[55] = _2, n2[56] = k2, n2[57] = N2, n2[58] = T2, n2[59] = w2, n2[60] = L2, n2[61] = $2, n2[62] = R2, n2[63] = I2;
  } else _2 = n2[55], k2 = n2[56], N2 = n2[57], T2 = n2[58], w2 = n2[59], L2 = n2[60], $2 = n2[61], R2 = n2[62], I2 = n2[63];
  return n2[66] !== g2 || n2[67] !== k2 ? (A2 = () => g2(k2, false), n2[66] = g2, n2[67] = k2, n2[68] = A2) : A2 = n2[68], n2[69] !== _2 || n2[70] !== A2 || n2[71] !== N2 || n2[72] !== T2 || n2[73] !== w2 || n2[74] !== L2 || n2[75] !== $2 || n2[76] !== R2 || n2[77] !== I2 ? (Q2 = t.jsx(_2, {
    ...N2,
    type: T2,
    cover: w2,
    title: L2,
    source: $2,
    author: R2,
    kind: I2,
    onClick: A2
  }), n2[69] = _2, n2[70] = A2, n2[71] = N2, n2[72] = T2, n2[73] = w2, n2[74] = L2, n2[75] = $2, n2[76] = R2, n2[77] = I2, n2[78] = Q2) : Q2 = n2[78], Q2;
});
function I({
  data: s2,
  actions: e2,
  scrollRef: a2
}) {
  const {
      t: l2,
      currentLanguage: i2
    } = r(),
    u2 = s2.searchType,
    m2 = s2.debouncedSearchQuery.trim(),
    x2 = s2.searchQuery.trim() !== m2,
    y2 = "tracks" === u2 || "lyrics" === u2 ? s2.loading : "artists" === u2 ? s2.artistsLoading : "albums" === u2 ? s2.albumsLoading : "playlists" === u2 ? s2.playlistsLoading : s2.loading || s2.artistsLoading || s2.albumsLoading || s2.playlistsLoading,
    j2 = "all" === u2 ? !(s2.topMatch || s2.songs.length || s2.artists_results.length || s2.albums_results.length || s2.playlists_results.length) : "artists" === u2 ? !s2.artists_results.length : "albums" === u2 ? !s2.albums_results.length : "playlists" === u2 ? !s2.playlists_results.length : !s2.songs.length,
    f2 = x2 || y2 || !s2.searchCompleted,
    v2 = f2 ? t.jsx(k, {
      type: u2
    }) : j2 ? s2.networkError ? t.jsxs("div", {
      className: "flex flex-col items-center gap-4 py-16",
      children: [t.jsx(c, {
        variant: "offline",
        title: s2.error || l2("errors.system.connection_fail"),
        subtitle: s2.error ? "" : l2("search.results.no.network_error_description"),
        layout: "vertical"
      }), t.jsx(n, {
        variant: "outline",
        size: "sm",
        onClick: e2.handleRetry,
        children: l2("common.retry")
      })]
    }) : t.jsx("div", {
      className: "flex justify-center py-16",
      children: t.jsx(d, {
        title: l2("search.results.no.results_title"),
        subtitle: l2("search.results.no.results_subtitle", {
          query: m2
        })
      })
    }) : "all" === u2 ? t.jsx(Q, {
      data: s2,
      actions: e2
    }) : "lyrics" === u2 ? t.jsx($, {
      songs: s2.songs,
      loading: s2.loading,
      musicSource: s2.musicSource,
      searchQuery: m2,
      onLoadMore: e2.handleLoadMore,
      hasMore: s2.hasMore,
      loadingMore: s2.loadingMore,
      loadMoreRef: e2.setLoadMoreSentinel,
      parentRef: a2,
      onSongSelect: e2.onSongSelect,
      onLoadSimilarTracks: e2.onLoadSimilarTracks
    }) : "artists" === u2 ? t.jsx("div", {
      className: N,
      children: s2.artists_results.map(s3 => t.jsx(h, {
        artist: s3,
        className: "w-full",
        onClick: () => {
          e2.handleSelectArtist(s3);
        }
      }, `${s3.source}:${s3.id}`))
    }) : "albums" === u2 ? t.jsx("div", {
      className: T,
      children: s2.albums_results.map(s3 => t.jsx(p, {
        album: s3,
        meta: M(s3),
        className: "w-full",
        onClick: () => {
          var t2;
          e2.handleSelectItem({
            ...s3,
            artist: null != (t2 = s3.artist) ? t2 : "",
            tracks: []
          }, true);
        }
      }, `${s3.source}:${s3.id}`))
    }) : "playlists" === u2 ? t.jsx("div", {
      className: T,
      children: s2.playlists_results.map(s3 => t.jsx(g, {
        playlist: s3,
        meta: void 0 !== C(s3) ? o(C(s3), l2, i2) : void 0,
        className: "w-full",
        onClick: () => {
          e2.handleSelectItem({
            ...s3,
            tracks: []
          }, false);
        }
      }, `${s3.source}:${s3.id}`))
    }) : t.jsx(w, {
      songs: s2.songs,
      trackSurface: "borderless",
      isVirtualized: s2.songs.length > 80,
      parentRef: a2,
      onSongSelect: e2.onSongSelect,
      onLoadSimilarTracks: e2.onLoadSimilarTracks
    });
  return t.jsxs("div", {
    className: "flex min-w-0 flex-col",
    "aria-busy": f2 || s2.loadingMore,
    children: [v2, !f2 && !j2 && "all" !== u2 && "lyrics" !== u2 && s2.loadingMore && t.jsx("div", {
      className: "mt-4",
      children: t.jsx(k, {
        type: u2,
        more: true
      })
    }), !f2 && !j2 && "all" !== u2 && "lyrics" !== u2 && s2.hasMore && t.jsx("div", {
      ref: e2.setLoadMoreSentinel,
      className: "h-px"
    })]
  });
}
function A(s2) {
  const a2 = e.c(7),
    {
      songs: r2,
      actions: l2
    } = s2;
  let i2, o2;
  if (a2[0] !== l2 || a2[1] !== r2) {
    let s3;
    a2[3] !== l2 ? (s3 = (s4, e2) => t.jsx("div", {
      className: "break-inside-avoid",
      children: t.jsx(u, {
        song: s4,
        index: e2,
        variant: "search",
        surface: "borderless",
        onPlaySong: l2.onSongSelect,
        onLoadSimilarTracks: l2.onLoadSimilarTracks
      })
    }, `${s4.source}:${s4.id}:${e2}`), a2[3] = l2, a2[4] = s3) : s3 = a2[4], i2 = r2.map(s3), a2[0] = l2, a2[1] = r2, a2[2] = i2;
  } else i2 = a2[2];
  return a2[5] !== i2 ? (o2 = t.jsx("div", {
    className: "-mx-2.5",
    children: i2
  }), a2[5] = i2, a2[6] = o2) : o2 = a2[6], o2;
}
function Q(s2) {
  const a2 = e.c(31),
    {
      data: l2,
      actions: i2
    } = s2,
    {
      t: n2,
      currentLanguage: c2
    } = r(),
    u2 = l2.topMatch;
  let m2;
  a2[0] !== l2.songs ? (m2 = l2.songs.slice(0, 8), a2[0] = l2.songs, a2[1] = m2) : m2 = a2[1];
  const d2 = m2;
  let j2, f2, v2, S2, b2, _2;
  return a2[2] !== i2 || a2[3] !== l2.albums_results || a2[4] !== l2.playlists_results || a2[5] !== n2 || a2[6] !== u2 ? (j2 = u2 && t.jsxs("div", {
    className: "min-w-0",
    children: [t.jsx(x, {
      children: n2("search.results.top_result")
    }), t.jsx(R, {
      match: u2,
      albums: l2.albums_results,
      playlists: l2.playlists_results,
      onSongSelect: i2.onSongSelect,
      onSelectArtist: s3 => {
        i2.handleSelectArtist(s3);
      },
      onSelectItem: (s3, e2) => {
        i2.handleSelectItem(s3, e2);
      }
    })]
  }), a2[2] = i2, a2[3] = l2.albums_results, a2[4] = l2.playlists_results, a2[5] = n2, a2[6] = u2, a2[7] = j2) : j2 = a2[7], a2[8] !== i2 || a2[9] !== d2 || a2[10] !== n2 ? (f2 = d2.length > 0 && t.jsxs("div", {
    className: "min-w-0",
    children: [t.jsx(x, {
      children: n2("search.view.settings.search_type.tracks")
    }), t.jsx(A, {
      songs: d2,
      actions: i2
    })]
  }), a2[8] = i2, a2[9] = d2, a2[10] = n2, a2[11] = f2) : f2 = a2[11], a2[12] !== i2 || a2[13] !== l2.artists_results || a2[14] !== n2 ? (v2 = l2.artists_results.length > 0 && t.jsxs("div", {
    children: [t.jsx(x, {
      children: n2("search.view.settings.search_type.artists")
    }), t.jsx(y, {
      children: l2.artists_results.map(s3 => t.jsx(h, {
        artist: s3,
        onClick: () => {
          i2.handleSelectArtist(s3);
        }
      }, `${s3.source}:${s3.id}`))
    })]
  }), a2[12] = i2, a2[13] = l2.artists_results, a2[14] = n2, a2[15] = v2) : v2 = a2[15], a2[16] !== i2 || a2[17] !== l2.albums_results || a2[18] !== n2 ? (S2 = l2.albums_results.length > 0 && t.jsxs("div", {
    children: [t.jsx(x, {
      children: n2("search.view.settings.search_type.albums")
    }), t.jsx(y, {
      children: l2.albums_results.map(s3 => t.jsx(p, {
        album: s3,
        meta: M(s3),
        onClick: () => {
          var e2;
          i2.handleSelectItem({
            ...s3,
            artist: null != (e2 = s3.artist) ? e2 : "",
            tracks: []
          }, true);
        }
      }, `${s3.source}:${s3.id}`))
    })]
  }), a2[16] = i2, a2[17] = l2.albums_results, a2[18] = n2, a2[19] = S2) : S2 = a2[19], a2[20] !== i2 || a2[21] !== c2 || a2[22] !== l2.playlists_results || a2[23] !== n2 ? (b2 = l2.playlists_results.length > 0 && t.jsxs("div", {
    children: [t.jsx(x, {
      children: n2("search.view.settings.search_type.playlists")
    }), t.jsx(y, {
      children: l2.playlists_results.map(s3 => t.jsx(g, {
        playlist: s3,
        meta: void 0 !== C(s3) ? o(C(s3), n2, c2) : void 0,
        onClick: () => {
          i2.handleSelectItem({
            ...s3,
            tracks: []
          }, false);
        }
      }, `${s3.source}:${s3.id}`))
    })]
  }), a2[20] = i2, a2[21] = c2, a2[22] = l2.playlists_results, a2[23] = n2, a2[24] = b2) : b2 = a2[24], a2[25] !== j2 || a2[26] !== f2 || a2[27] !== v2 || a2[28] !== S2 || a2[29] !== b2 ? (_2 = t.jsxs("div", {
    className: "flex flex-col gap-section",
    children: [j2, f2, v2, S2, b2]
  }), a2[25] = j2, a2[26] = f2, a2[27] = v2, a2[28] = S2, a2[29] = b2, a2[30] = _2) : _2 = a2[30], _2;
}
const z = a.memo(function () {
  const a2 = e.c(20),
    {
      t: l2
    } = r(),
    {
      searchDataValue: i2,
      searchActionsValue: o2
    } = j(),
    n2 = s.useRef(null);
  let c2, u2, m2;
  a2[0] === Symbol.for("react.memo_cache_sentinel") ? (c2 = () => {
    n2.current && (n2.current.scrollTop = 0);
  }, a2[0] = c2) : c2 = a2[0], a2[1] !== i2.debouncedSearchQuery || a2[2] !== i2.musicSource || a2[3] !== i2.searchType ? (u2 = [i2.debouncedSearchQuery, i2.searchType, i2.musicSource], a2[1] = i2.debouncedSearchQuery, a2[2] = i2.musicSource, a2[3] = i2.searchType, a2[4] = u2) : u2 = a2[4], s.useLayoutEffect(c2, u2), a2[5] !== l2 ? (m2 = f.map(s2 => ({
    id: s2,
    label: l2(`search.view.settings.search_type.${s2}`)
  })), a2[5] = l2, a2[6] = m2) : m2 = a2[6];
  const d2 = m2;
  let h2, p2, g2, x2;
  return a2[7] !== o2.setSearchType || a2[8] !== i2.searchType || a2[9] !== d2 ? (h2 = t.jsx("div", {
    className: "shrink-0 pl-page pr-[max(var(--page-x),calc(var(--notch-clear,0px)_+_0.5rem))] pb-1 pt-page-top",
    "data-tauri-drag-region": true,
    children: t.jsx(b, {
      tabs: d2,
      active: i2.searchType,
      onSelect: o2.setSearchType
    })
  }), a2[7] = o2.setSearchType, a2[8] = i2.searchType, a2[9] = d2, a2[10] = h2) : h2 = a2[10], a2[11] !== o2 || a2[12] !== i2 ? (p2 = t.jsx(I, {
    data: i2,
    actions: o2,
    scrollRef: n2
  }), a2[11] = o2, a2[12] = i2, a2[13] = p2) : p2 = a2[13], a2[14] !== i2.searchType || a2[15] !== p2 ? (g2 = t.jsx(v, {
    top: "none",
    className: "mt-4",
    children: t.jsx("div", {
      className: "animate-in fade-in duration-200",
      children: p2
    }, i2.searchType)
  }), a2[14] = i2.searchType, a2[15] = p2, a2[16] = g2) : g2 = a2[16], a2[17] !== h2 || a2[18] !== g2 ? (x2 = t.jsxs(S, {
    ref: n2,
    className: "search-container",
    children: [h2, g2]
  }), a2[17] = h2, a2[18] = g2, a2[19] = x2) : x2 = a2[19], x2;
});
export default z;
