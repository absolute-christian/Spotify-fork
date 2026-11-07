// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { R as e, B as t, j as r, c as n, r as s } from "./vendor-ui-BwX-1h7U.js";
import { bl as l, H as i } from "./main-DVjTVWDM.js";
function o({
  items: n2,
  rowHeight: s2,
  scrollRef: l2,
  getKey: i2,
  renderItem: o2
}) {
  const c2 = e.useRef(null),
    [a2, u2] = e.useState(0),
    d2 = e.useCallback(() => {
      const e2 = l2.current,
        t2 = c2.current;
      if (!e2 || !t2) return;
      const r2 = t2.getBoundingClientRect().top - e2.getBoundingClientRect().top + e2.scrollTop;
      u2(e3 => Math.abs(e3 - r2) < 1 ? e3 : r2);
    }, [l2]);
  e.useLayoutEffect(() => (d2(), window.addEventListener("resize", d2), () => window.removeEventListener("resize", d2)), [n2.length, d2]);
  const f2 = t({
    useFlushSync: false,
    count: n2.length,
    getScrollElement: () => l2.current,
    initialRect: {
      width: 0,
      height: 640
    },
    estimateSize: () => s2,
    overscan: 6,
    scrollMargin: a2
  });
  return r.jsx("div", {
    ref: c2,
    className: "relative w-full",
    style: {
      height: `${f2.getTotalSize()}px`
    },
    children: f2.getVirtualItems().map(e2 => r.jsx("div", {
      className: "absolute left-0 top-0 w-full",
      style: {
        height: `${e2.size}px`,
        transform: `translateY(${e2.start - a2}px)`
      },
      children: o2(n2[e2.index], e2.index)
    }, i2(n2[e2.index], e2.index)))
  });
}
const c = new Map();
function a(e2) {
  const t2 = n.c(6),
    {
      items: s2,
      kind: i2,
      rowHeight: o2,
      renderItem: c2
    } = e2,
    {
      isVertical: a2
    } = l();
  let d2;
  return t2[0] !== a2 || t2[1] !== s2 || t2[2] !== i2 || t2[3] !== c2 || t2[4] !== o2 ? (d2 = a2 ? r.jsx(u, {
    items: s2,
    kind: i2,
    rowHeight: o2,
    renderItem: c2
  }) : r.jsx(f, {
    items: s2,
    kind: i2,
    size: o2,
    renderItem: c2
  }), t2[0] = a2, t2[1] = s2, t2[2] = i2, t2[3] = c2, t2[4] = o2, t2[5] = d2) : d2 = t2[5], d2;
}
function u(e2) {
  const t2 = n.c(14),
    {
      items: l2,
      kind: a2,
      rowHeight: u2,
      renderItem: f2
    } = e2,
    m = s.useRef(null);
  let h, g, x, w, v, p;
  return t2[0] !== a2 ? (h = () => {
    var e3;
    const t3 = m.current;
    t3 && (t3.scrollTop = null != (e3 = c.get(a2)) ? e3 : 0);
  }, g = [a2], t2[0] = a2, t2[1] = h, t2[2] = g) : (h = t2[1], g = t2[2]), s.useLayoutEffect(h, g), t2[3] !== a2 ? (x = () => {
    m.current && c.set(a2, m.current.scrollTop);
  }, t2[3] = a2, t2[4] = x) : x = t2[4], t2[5] !== f2 ? (w = e3 => r.jsx("div", {
    className: "flex h-14 items-center justify-center",
    children: f2(e3)
  }), t2[5] = f2, t2[6] = w) : w = t2[6], t2[7] !== l2 || t2[8] !== u2 || t2[9] !== w ? (v = r.jsx(o, {
    items: l2,
    rowHeight: u2,
    scrollRef: m,
    getKey: d,
    renderItem: w
  }), t2[7] = l2, t2[8] = u2, t2[9] = w, t2[10] = v) : v = t2[10], t2[11] !== x || t2[12] !== v ? (p = r.jsx(i, {
    viewportRef: m,
    className: "min-h-0 w-full flex-1",
    onScrollCapture: x,
    children: v
  }), t2[11] = x, t2[12] = v, t2[13] = p) : p = t2[13], p;
}
function d(e2) {
  return e2.id;
}
function f({
  items: e2,
  kind: n2,
  size: l2,
  renderItem: i2
}) {
  const o2 = s.useRef(null),
    a2 = `${n2}:x`,
    u2 = t({
      horizontal: true,
      count: e2.length,
      getScrollElement: () => o2.current,
      initialRect: {
        width: 640,
        height: l2
      },
      estimateSize: () => l2,
      overscan: 6,
      getItemKey: t2 => e2[t2].id
    });
  return s.useLayoutEffect(() => {
    var e3;
    const t2 = o2.current;
    t2 && (t2.scrollLeft = null != (e3 = c.get(a2)) ? e3 : 0);
  }, [a2]), r.jsx("div", {
    ref: o2,
    className: "no-scrollbar relative h-full min-h-0 min-w-0 flex-1 overflow-x-auto overflow-y-hidden",
    onScroll: () => {
      o2.current && c.set(a2, o2.current.scrollLeft);
    },
    onWheel: e3 => {
      const t2 = o2.current;
      t2 && Math.abs(e3.deltaY) > Math.abs(e3.deltaX) && (t2.scrollLeft += e3.deltaY);
    },
    children: r.jsx("div", {
      className: "relative h-full",
      style: {
        width: u2.getTotalSize()
      },
      children: u2.getVirtualItems().map(t2 => r.jsx("div", {
        className: "absolute left-0 top-0 flex h-full items-center justify-center",
        style: {
          width: t2.size,
          transform: `translateX(${t2.start}px)`
        },
        children: i2(e2[t2.index])
      }, t2.key))
    })
  });
}
export { a as N };
