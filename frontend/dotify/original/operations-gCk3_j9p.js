// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { fM as t, fS as a, l as r, eJ as l, v as e, eK as i, gu as s, aI as n, by as o, av as c, _ as y, w as d, gv as u, fT as g, fU as p, ag as f, es as P, eu as h } from "./globals-Bc3qFUyf.js";
import { b as v, c as w } from "./vendor-ui-BwX-1h7U.js";
let m = null;
const S = new Map(),
  k = {
    initializePlaylists: async () => {
      if (!e.getState().isInitialized) return m || (m = (async () => {
        e.setState({
          isLoading: true
        });
        try {
          const [t2, a2] = await Promise.all([i.getAllPlaylists(), i.loadPlaylistsOrder().catch(() => [])]);
          r.info("library", `Initialized: loaded ${t2.length} playlists`), e.setState({
            playlists: t2,
            playlistsOrder: a2,
            isLoading: false,
            isInitialized: true
          });
        } catch (t2) {
          r.error("library", "Initialization failed:", t2), e.setState({
            isLoading: false,
            isInitialized: true
          });
        } finally {
          m = null;
        }
      })(), m);
    },
    loadPlaylists: async t2 => {
      e.setState({
        isLoading: true
      });
      try {
        const a2 = e.getState(),
          [l2, s2] = await Promise.all([i.getAllPlaylists(t2), i.loadPlaylistsOrder().catch(() => a2.playlistsOrder)]);
        r.info("library", `Loaded ${l2.length} playlists`);
        const n2 = l2.map(t3 => {
          const r2 = a2.playlists.find(a3 => String(a3.id) === String(t3.id));
          return r2 ? {
            ...t3,
            tracks: r2.tracks
          } : t3;
        });
        e.setState({
          playlists: n2,
          playlistsOrder: s2,
          isLoading: false,
          isInitialized: true
        });
      } catch (a2) {
        r.error("library", "Failed to load playlists:", a2), e.setState({
          isLoading: false
        });
      }
    },
    reloadPlaylist: async t2 => {
      try {
        const a2 = await i.loadPlaylist(t2, true);
        if (a2) {
          const l2 = e.getState().playlists.find(a3 => String(a3.id) === String(t2)),
            i2 = s(l2, a2);
          e.getState().updatePlaylist(t2, i2), r.info("library", `Playlist ${t2} reloaded from backend`);
        }
      } catch (a2) {
        throw r.error("library", `Error reloading playlist ${t2}:`, a2), a2;
      }
    },
    pullPlaylist: async t2 => {
      const a2 = await i.pullPlaylist(t2);
      e.getState().updatePlaylist(t2, a2), r.info("library", `Playlist ${t2} pulled from cloud`);
    },
    ensurePlaylistLoaded: async t2 => {
      const a2 = e.getState().playlists.find(a3 => String(a3.id) === String(t2));
      if (a2 && a2.tracks && a2.tracks.length > 0) {
        const l3 = "number" == typeof a2.tracks_count && a2.tracks_count > 0 ? a2.tracks_count : null;
        if (l3 && a2.tracks.length === l3) return a2;
        r.info("library", `Playlist ${t2} tracks count mismatch (${a2.tracks.length}/${l3}), loading full list`);
      }
      let l2 = S.get(t2);
      return l2 || (l2 = (async () => {
        try {
          const r2 = await i.loadPlaylist(t2);
          if (r2) {
            const l3 = s(a2, r2);
            return e.getState().updatePlaylist(t2, l3), l3;
          }
        } catch (l3) {
          r.error("library", `Error loading playlist ${t2}:`, l3);
        } finally {
          S.delete(t2);
        }
        return a2 || null;
      })(), S.set(t2, l2)), l2;
    },
    loadPlaylistWithSongs: async (t2, a2 = {}) => {
      const {
          localSongs: e2 = [],
          favoriteSongs: i2 = [],
          loadFavorites: s2,
          loadLocalSongs: n2,
          setFavoriteSongs: o2
        } = a2,
        c2 = {
          ...t2
        };
      if ("favorites" === t2.id) {
        try {
          if (i2 && 0 !== i2.length) c2.tracks = i2;else {
            s2 && (await s2());
            const t3 = await l.getFavorites();
            o2 && o2(t3), c2.tracks = t3 || [];
          }
        } catch (y2) {
          r.error("library", "Error loading favorites:", y2), c2.tracks = [];
        }
        return c2;
      }
      if ("offline" === t2.id) return e2 && 0 !== e2.length || !n2 || (await n2()), c2.tracks = e2 || [], c2;
      try {
        const a3 = await k.ensurePlaylistLoaded(t2.id);
        return a3 || c2;
      } catch (y2) {
        return r.error("library", "Error loading playlist:", y2), c2;
      }
    },
    loadLocalSongs: async () => {
      try {
        return (await t.getLocalTracks()).map(a);
      } catch (l2) {
        return r.error("library", "Error loading local songs:", l2), [];
      }
    }
  },
  b = new Map();
function _(t2, a2) {
  var r2;
  const l2 = (null != (r2 = b.get(t2)) ? r2 : Promise.resolve()).catch(() => {}).then(a2);
  return b.set(t2, l2), l2.finally(() => {
    b.get(t2) === l2 && b.delete(t2);
  }).catch(() => {}), l2;
}
async function T(t2) {
  try {
    await k.reloadPlaylist(t2);
  } catch (a2) {
    r.warn("library", "Playlist saved but refresh failed:", a2);
  }
}
function E(t2, a2, l2) {
  return t2.length ? _(a2, async () => {
    try {
      return !!(l2 ? await i.addTrackToPlaylist(a2, t2[0]) : await i.addTracksBatch(a2, t2)) && (await T(a2), async function (t3) {
        var a3, l3, e2, i2;
        try {
          const r2 = await n.getSettings(),
            s2 = null == (a3 = null == r2 ? void 0 : r2.playerSettings) ? void 0 : a3.caching;
          if (null != (e2 = null != (l3 = null == s2 ? void 0 : s2.enabled) ? l3 : null == s2 ? void 0 : s2.enable) && !e2 || !(null == (i2 = null == s2 ? void 0 : s2.triggers) ? void 0 : i2.includes("playlist"))) return;
          await Promise.all(t3.filter(t4 => "local" !== t4.source).slice(0, 5).map(t4 => o.getStreamUrl(t4, void 0, {
            trigger: "playlist"
          })));
        } catch (s2) {
          r.warn("library", "Playlist saved but preloading failed:", s2);
        }
      }(t2), true);
    } catch (e2) {
      return r.error("library", "Failed to add playlist tracks:", e2), false;
    }
  }) : Promise.resolve(false);
}
function L(t2, a2, l2) {
  return a2.length ? _(t2, async () => {
    const s2 = e.getState(),
      n2 = s2.playlists.find(a3 => String(a3.id) === String(t2)),
      o2 = new Set(a2),
      c2 = null == n2 ? void 0 : n2.tracks.filter(t3 => !o2.has(t3.id));
    c2 && s2.updatePlaylist(t2, {
      tracks: c2,
      tracks_count: c2.length
    });
    const y2 = () => {
      const a3 = e.getState().playlists.find(a4 => String(a4.id) === String(t2));
      n2 && (null == a3 ? void 0 : a3.tracks) === c2 && s2.updatePlaylist(t2, {
        tracks: n2.tracks,
        tracks_count: n2.tracks_count
      });
    };
    try {
      return (l2 ? await i.removeTrackFromPlaylist(t2, a2[0]) : await i.removeTracksBatch(t2, a2)) ? (await T(t2), true) : (y2(), false);
    } catch (d2) {
      return y2(), r.error("library", "Failed to remove playlist tracks:", d2), false;
    }
  }) : Promise.resolve(false);
}
const I = {
    addToPlaylist: (t2, a2) => E(t2 ? [t2] : [], a2, true),
    addAllTracksToPlaylist: (t2, a2) => E(t2, a2, false),
    removeTrackFromPlaylist: async (t2, a2, l2 = false) => {
      const e2 = await L(t2, [a2], true);
      return e2 && !l2 && r.info("library", `Track ${a2} removed from playlist ${t2}`), e2;
    },
    removeTracksBatch: (t2, a2) => L(t2, a2, false)
  },
  O = "playlist_auto_update_enabled",
  F = "playlist_auto_update_targets",
  $ = new Map(),
  j = v((t2, a2) => {
    var r2, l2;
    return {
      auto: null != (r2 = c.load(O)) && r2,
      targets: null != (l2 = c.load(F)) ? l2 : null,
      autoStarted: false,
      jobs: {},
      progress: null,
      run: (a3, r3) => {
        const l3 = $.get(a3);
        if (l3) return l3;
        t2(t3 => ({
          jobs: {
            ...t3.jobs,
            [a3]: {
              playlistId: a3
            }
          }
        }));
        const e2 = Promise.resolve().then(r3).finally(() => {
          $.delete(a3), t2(t3 => {
            const {
              [a3]: r4,
              ...l4
            } = t3.jobs;
            return {
              jobs: l4
            };
          });
        });
        return $.set(a3, e2), e2;
      },
      update: async r3 => {
        if (a2().progress || !r3.length) return 0;
        const l3 = [...new Map(r3.map(t3 => [t3.id, t3])).values()];
        t2({
          progress: {
            current: 0,
            total: l3.length
          }
        });
        let e2 = 0;
        try {
          const {
            playlistsOperations: a3
          } = await y(async () => {
            const {
              playlistsOperations: t3
            } = await Promise.resolve().then(() => z);
            return {
              playlistsOperations: t3
            };
          }, void 0, import.meta.url);
          for (const r4 of l3) {
            try {
              (await a3.refreshPlaylist(r4)) || e2++;
            } catch {
              e2++;
            }
            t2(t3 => ({
              progress: t3.progress && {
                ...t3.progress,
                current: t3.progress.current + 1
              }
            }));
          }
          return e2;
        } finally {
          t2({
            progress: null
          });
        }
      },
      startAuto: r3 => {
        const l3 = a2();
        l3.auto && !l3.autoStarted && r3.length && (t2({
          autoStarted: true
        }), l3.update(null === l3.targets ? r3 : r3.filter(t3 => l3.targets.includes(t3.id))));
      },
      setAuto: (a3, r3) => {
        t2({
          auto: a3,
          targets: r3,
          autoStarted: true
        }), c.save(O, a3), c.save(F, r3);
      }
    };
  }),
  D = t2 => {
    const a2 = w.c(2);
    let r2;
    return a2[0] !== t2 ? (r2 = a3 => Boolean(a3.jobs[t2]), a2[0] = t2, a2[1] = r2) : r2 = a2[1], j(r2);
  },
  A = {
    addToPlaylist: (t2, a2) => I.addToPlaylist(t2, a2),
    addAllTracksToPlaylist: (t2, a2) => I.addAllTracksToPlaylist(t2, a2),
    createPlaylist: async (t2, a2) => {
      var l2, s2, n2;
      const o2 = t2.trim();
      if (!o2 || o2.length > 100) return null;
      const {
        playlists: c2,
        addPlaylist: y2
      } = e.getState();
      if (c2.some(t3 => t3.title.toLowerCase() === o2.toLowerCase())) return null;
      const d2 = {
        id: null != (n2 = null == (s2 = null == (l2 = globalThis.crypto) ? void 0 : l2.randomUUID) ? void 0 : s2.call(l2)) ? n2 : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
        title: o2,
        tracks: [],
        author: (null == a2 ? void 0 : a2.nickname) || (null == a2 ? void 0 : a2.username) || "User",
        cover_art: "",
        created_at: Date.now(),
        updated_at: Date.now(),
        source: "local",
        tracks_count: 0
      };
      try {
        return (await i.savePlaylist(d2)) ? (y2(d2), d2) : null;
      } catch (u2) {
        return r.error("library", "Error creating playlist:", u2), null;
      }
    },
    savePlaylist: async t2 => {
      try {
        const a2 = await i.savePlaylist(t2);
        return a2 && e.getState().addPlaylist(t2), a2;
      } catch (a2) {
        return r.error("library", "Error saving playlist:", a2), false;
      }
    },
    deletePlaylist: async t2 => {
      try {
        const a2 = await i.deletePlaylist(t2);
        return a2 && e.getState().removePlaylist(t2), a2;
      } catch (a2) {
        return r.error("library", "Error deleting playlist:", a2), false;
      }
    },
    renamePlaylist: async (t2, a2) => {
      try {
        const r2 = a2.trim();
        if (!r2) return false;
        return !!(await i.renamePlaylist(t2, r2)) && (e.getState().updatePlaylist(t2, {
          title: r2,
          updated_at: Date.now()
        }), true);
      } catch (l2) {
        return r.error("library", "Error renaming playlist:", l2), false;
      }
    },
    updatePlaylistIcon: async (t2, a2) => {
      try {
        const r2 = await i.updatePlaylistIcon(t2, a2);
        return r2 && e.getState().updatePlaylist(t2, {
          cover_art: r2
        }), r2;
      } catch (l2) {
        return r.error("library", "Error updating playlist icon:", l2), "";
      }
    },
    removeTrackFromPlaylist: (t2, a2, r2 = false) => I.removeTrackFromPlaylist(t2, a2, r2),
    removeTracksBatch: (t2, a2) => I.removeTracksBatch(t2, a2),
    exportPlaylist: async t2 => {
      try {
        r.info("library", "Exporting playlist:", t2);
        const a2 = JSON.stringify(t2, null, 2),
          l2 = await P({
            filters: [{
              name: "JSON Playlist",
              extensions: ["json"]
            }],
            defaultPath: `${t2.title.toLowerCase().replace(/\s+/g, "-")}.json`
          });
        if (l2) {
          const t3 = new TextEncoder().encode(a2);
          return await h(l2, t3), true;
        }
      } catch (a2) {
        return r.error("library", "Error exporting playlist:", a2), false;
      }
      return false;
    },
    refreshPlaylist: async (t2, a2) => !(!t2 || "favorites" === t2.id || "offline" === t2.id || "import" === t2.id) && j.getState().run(t2.id, async () => {
      var l2, s2, n2;
      try {
        !t2.tracks.length && e.getState().playlists.some(a3 => a3.id === t2.id) && (t2 = null != (l2 = await k.ensurePlaylistLoaded(t2.id)) ? l2 : t2);
        const r2 = (null == (s2 = t2.originals) ? void 0 : s2[0]) || u(t2),
          o2 = (null == r2 ? void 0 : r2.source) || g(t2) || t2.source,
          c2 = (null == r2 ? void 0 : r2.url) || t2.url || p(t2),
          y2 = null == r2 ? void 0 : r2.id;
        if (!o2 || !y2 && !c2) return false;
        const {
            addPlaylist: d2
          } = e.getState(),
          P2 = c2 ? await f.getPlaylistByUrl(o2, c2) : y2 ? await f.getPlaylist(o2, y2) : null;
        if (P2 && P2.tracks.length > 0) {
          const r3 = P2.tracks,
            l3 = new Set(r3.map(t3 => t3.id)),
            e2 = (t2.tracks || []).filter(t3 => !l3.has(t3.id)),
            s3 = [...r3, ...e2],
            u2 = {
              ...t2,
              tracks: s3,
              tracks_count: s3.length,
              updated_at: Date.now(),
              originals: (null == (n2 = t2.originals) ? void 0 : n2.length) ? t2.originals : [{
                url: c2 || void 0,
                id: y2 || t2.id,
                source: o2
              }]
            };
          if (await i.savePlaylist(u2)) {
            d2(u2);
            const t3 = await k.ensurePlaylistLoaded(u2.id);
            return t3 && a2 && a2(t3), true;
          }
        }
        return false;
      } catch (o2) {
        return r.error("library", "Critical error during playlist refresh:", o2), false;
      }
    }),
    changePlaylistIcon: async t2 => {
      const a2 = document.createElement("input");
      a2.type = "file", a2.accept = "image/*", a2.onchange = async a3 => {
        var l2;
        const e2 = null == (l2 = a3.target.files) ? void 0 : l2[0];
        if (e2) try {
          const a4 = new FileReader();
          a4.onload = async a5 => {
            var l3;
            try {
              const r2 = null == (l3 = a5.target) ? void 0 : l3.result;
              await A.updatePlaylistIcon(t2, r2);
            } catch (e3) {
              r.error("library", "Error updating playlist icon:", e3);
            }
          }, a4.readAsDataURL(e2);
        } catch (i2) {
          r.error("library", "Error updating playlist icon:", i2);
        }
      }, a2.click();
    },
    updatePlaylistOrder: async (t2, a2, s2) => {
      try {
        if ("favorites" === t2) {
          if (await l.reorderFavorites(a2.map(t3 => t3.id))) return s2 && s2(a2), true;
          throw new Error("Failed to save favorites order");
        }
        {
          const r2 = await k.ensurePlaylistLoaded(t2);
          if (!r2) throw new Error("Playlist not found");
          const l2 = r2.tracks;
          e.getState().updatePlaylist(t2, {
            tracks: a2,
            updated_at: Date.now()
          });
          try {
            if (!(await i.reorderTracksInPlaylist(t2, a2.map(t3 => t3.id)))) throw new Error("Failed to save playlist order");
            return true;
          } catch (n2) {
            throw e.getState().updatePlaylist(t2, {
              tracks: l2,
              updated_at: Date.now()
            }), n2;
          }
        }
      } catch (n2) {
        throw r.error("library", "Error updating playlist order:", n2), n2;
      }
    },
    importPlaylistAfterPreview: async (t2, a2) => {
      const {
        setImportPlaylistOpen: l2,
        setImportUrl: s2,
        setImportPreviewData: n2
      } = a2;
      try {
        return !!(await i.savePlaylist(t2)) && (e.getState().addPlaylist(t2), l2 && l2(false), s2 && s2(""), n2 && n2(null), true);
      } catch (o2) {
        return r.error("library", "Error importing playlist:", o2), false;
      }
    },
    togglePin: async (t2, a2) => {
      try {
        await d.library.playlists.setPinned(t2, !a2);
        return e.getState().updatePlaylist(t2, {
          pinned: !a2
        }), true;
      } catch (l2) {
        return r.error("library", "Failed to toggle pin for playlist:", l2), false;
      }
    }
  },
  z = Object.freeze(Object.defineProperty({
    __proto__: null,
    playlistsOperations: A
  }, Symbol.toStringTag, {
    value: "Module"
  }));
export { A as p, D as c, k as a };
