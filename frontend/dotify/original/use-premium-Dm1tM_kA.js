// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { useAccess as I } from "../runtime.jsx";
import { c as e, j as t, m as n, r } from "./vendor-ui-BwX-1h7U.js";
import { k as a, bo as l, Q as o, z as c, I as u } from "./globals-Bc3qFUyf.js";
const h = {
  default: "!font-sans",
  serif: "!font-serif",
  mono: "!font-mono",
  display: '!font-["system-ui"]',
  minecraft: '!font-["Minecraft"]',
  code: '!font-["Courier_New",_monospace]',
  cursive: '!font-["Brush_Script_MT",_cursive]',
  impact: '!font-["Impact",_sans-serif]',
  caveat: '!font-["Caveat",_cursive]',
  "rubik-spray": '!font-["Rubik_Spray_Paint",_sans-serif]',
  "rubik-beastly": '!font-["Rubik_Beastly",_sans-serif]',
  "press-start-2p": '!font-["Press_Start_2P",_monospace]',
  vt323: '!font-["VT323",_monospace]',
  "russo-one": '!font-["Russo_One",_sans-serif]',
  monoton: '!font-["Monoton",_sans-serif]',
  pacifico: '!font-["Pacifico",_cursive]',
  orbitron: '!font-["Orbitron",_sans-serif]',
  "amatic-sc": '!font-["Amatic_SC",_cursive]',
  lobster: '!font-["Lobster",_cursive]'
};
function b(e2, t2) {
  const n2 = parseInt(e2.replace("#", ""), 16);
  if (isNaN(n2)) return e2;
  const r2 = Math.round(2.55 * t2);
  return "#" + (16777216 + 65536 * Math.min(255, Math.max(0, (n2 >> 16) + r2)) + 256 * Math.min(255, Math.max(0, (n2 >> 8 & 255) + r2)) + Math.min(255, Math.max(0, (255 & n2) + r2))).toString(16).slice(1);
}
const v = ["hsl(var(--primary))", "#ec4899", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"];
function y(n2) {
  const r2 = e.c(25),
    {
      children: s2,
      speed: i2,
      color: l2,
      className: o2,
      style: c2
    } = n2,
    u2 = void 0 === i2 ? 1 : i2,
    m2 = "string" == typeof s2 || "number" == typeof s2;
  let d2;
  r2[0] !== u2 ? (d2 = u2 > 0 ? u2 > 1 ? Math.max(1, +(4 / u2).toFixed(2)) : +(4 / u2).toFixed(2) : 3.5, r2[0] = u2, r2[1] = d2) : d2 = r2[1];
  const p2 = d2;
  if (m2) {
    const e2 = l2 || void 0;
    let n3, i3;
    r2[2] === Symbol.for("react.memo_cache_sentinel") ? (n3 = t.jsx("style", {
      children: "\n          @keyframes magic-shiny-text {\n            0% { background-position: 180% 0; }\n            100% { background-position: -180% 0; }\n          }\n        "
    }), r2[2] = n3) : n3 = r2[2], r2[3] !== o2 ? (i3 = a("inline-block bg-[length:220%_100%] bg-clip-text text-transparent select-none", o2), r2[3] = o2, r2[4] = i3) : i3 = r2[4];
    const u3 = `magic-shiny-text ${p2}s ease-in-out infinite`;
    let m3, d3;
    return r2[5] !== c2 || r2[6] !== u3 || r2[7] !== e2 ? (m3 = {
      color: e2,
      backgroundImage: "linear-gradient(110deg, currentColor 32%, rgba(255, 255, 255, 0.95) 50%, currentColor 68%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: u3,
      ...c2
    }, r2[5] = c2, r2[6] = u3, r2[7] = e2, r2[8] = m3) : m3 = r2[8], r2[9] !== s2 || r2[10] !== i3 || r2[11] !== m3 ? (d3 = t.jsxs(t.Fragment, {
      children: [n3, t.jsx("span", {
        className: i3,
        style: m3,
        children: s2
      })]
    }), r2[9] = s2, r2[10] = i3, r2[11] = m3, r2[12] = d3) : d3 = r2[12], d3;
  }
  let f2, x2;
  r2[13] === Symbol.for("react.memo_cache_sentinel") ? (f2 = t.jsx("style", {
    children: "\n        @keyframes magic-shiny-sweep {\n          0% {\n            -webkit-mask-position: 180% 0;\n            mask-position: 180% 0;\n          }\n          100% {\n            -webkit-mask-position: -180% 0;\n            mask-position: -180% 0;\n          }\n        }\n      "
  }), r2[13] = f2) : f2 = r2[13], r2[14] !== o2 ? (x2 = a("relative inline-flex items-center justify-center bg-transparent", o2), r2[14] = o2, r2[15] = x2) : x2 = r2[15];
  const g2 = `magic-shiny-sweep ${p2}s linear infinite`;
  let h2, b2, v2;
  return r2[16] !== g2 ? (h2 = {
    maskImage: "linear-gradient(115deg, transparent 30%, black 50%, transparent 70%)",
    WebkitMaskImage: "linear-gradient(115deg, transparent 30%, black 50%, transparent 70%)",
    maskSize: "250% 100%",
    WebkitMaskSize: "250% 100%",
    animation: g2,
    filter: "brightness(3) saturate(0.6)"
  }, r2[16] = g2, r2[17] = h2) : h2 = r2[17], r2[18] !== s2 || r2[19] !== h2 ? (b2 = t.jsx("span", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute inset-0 inline-flex items-center justify-center select-none bg-transparent",
    style: h2,
    children: s2
  }), r2[18] = s2, r2[19] = h2, r2[20] = b2) : b2 = r2[20], r2[21] !== s2 || r2[22] !== x2 || r2[23] !== b2 ? (v2 = t.jsxs(t.Fragment, {
    children: [f2, t.jsxs("span", {
      className: x2,
      children: [s2, b2]
    })]
  }), r2[21] = s2, r2[22] = x2, r2[23] = b2, r2[24] = v2) : v2 = r2[24], v2;
}
function k(n2) {
  const s2 = e.c(14),
    {
      children: i2,
      speed: l2,
      customColors: c2,
      className: u2
    } = n2,
    m2 = void 0 === l2 ? 1 : l2,
    d2 = r.useRef(null),
    p2 = r.useRef(0),
    f2 = (null == c2 ? void 0 : c2.length) ? c2 : v;
  let x2;
  if (s2[0] !== f2) {
    x2 = [], x2.push("var(--gradient-wave-base, currentColor) calc((var(--gi) + 0) * 1%)");
    for (let e2 = 0; e2 < 8 && e2 < 2 * f2.length; e2++) {
      const t2 = f2[e2 % f2.length];
      x2.push(`${t2} calc((var(--gi) + ${4 * (e2 + 2)}) * 1%)`);
    }
    x2.push("var(--gradient-wave-base, currentColor) calc((var(--gi) + 40) * 1%)"), s2[0] = f2, s2[1] = x2;
  } else x2 = s2[1];
  const g2 = `radial-gradient(circle at 50% bottom, ${x2.join(", ")})`,
    h2 = o(j);
  let b2, y2, k2, N2, _2;
  return s2[2] !== h2 || s2[3] !== m2 ? (b2 = () => {
    const e2 = d2.current;
    if (!e2 || h2) return;
    let t2;
    e2.style.setProperty("--gi", String(p2.current || -25));
    let n3 = performance.now();
    const r2 = s3 => {
      const i3 = Math.min(64, s3 - n3);
      n3 = s3;
      let a2 = p2.current + i3 * m2 / 16.6667;
      a2 >= 200 && (a2 %= 200), p2.current = a2, e2.style.setProperty("--gi", String(a2)), t2 = requestAnimationFrame(r2);
    };
    return t2 = requestAnimationFrame(r2), () => cancelAnimationFrame(t2);
  }, y2 = [m2, h2], s2[2] = h2, s2[3] = m2, s2[4] = b2, s2[5] = y2) : (b2 = s2[4], y2 = s2[5]), r.useEffect(b2, y2), s2[6] !== g2 ? (k2 = {
    backgroundImage: g2,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    paddingBottom: "1px"
  }, s2[6] = g2, s2[7] = k2) : k2 = s2[7], s2[8] !== u2 ? (N2 = a("inline-block", u2), s2[8] = u2, s2[9] = N2) : N2 = s2[9], s2[10] !== i2 || s2[11] !== k2 || s2[12] !== N2 ? (_2 = t.jsx("span", {
    ref: d2,
    style: k2,
    className: N2,
    children: i2
  }), s2[10] = i2, s2[11] = k2, s2[12] = N2, s2[13] = _2) : _2 = s2[13], _2;
}
function j(e2) {
  return e2.isMinimized;
}
function N(r2) {
  const s2 = e.c(13),
    {
      children: i2,
      glowColor: l2,
      speed: o2,
      className: c2
    } = r2,
    u2 = void 0 === l2 ? "currentColor" : l2,
    m2 = void 0 === o2 ? 3 : o2;
  let d2;
  s2[0] !== c2 ? (d2 = a("relative inline-flex items-center justify-center overflow-visible", c2), s2[0] = c2, s2[1] = d2) : d2 = s2[1];
  const p2 = `drop-shadow(0 0 2px ${u2}) brightness(1)`,
    f2 = `drop-shadow(0 0 8px ${u2}) brightness(1.25)`,
    x2 = `drop-shadow(0 0 2px ${u2}) brightness(1)`;
  let g2, h2, b2;
  return s2[2] !== p2 || s2[3] !== f2 || s2[4] !== x2 ? (g2 = {
    filter: [p2, f2, x2]
  }, s2[2] = p2, s2[3] = f2, s2[4] = x2, s2[5] = g2) : g2 = s2[5], s2[6] !== m2 ? (h2 = {
    duration: m2,
    repeat: 1 / 0,
    ease: "easeInOut"
  }, s2[6] = m2, s2[7] = h2) : h2 = s2[7], s2[8] !== i2 || s2[9] !== d2 || s2[10] !== g2 || s2[11] !== h2 ? (b2 = t.jsx(n.span, {
    className: d2,
    animate: g2,
    transition: h2,
    children: i2
  }), s2[8] = i2, s2[9] = d2, s2[10] = g2, s2[11] = h2, s2[12] = b2) : b2 = s2[12], b2;
}
function _(r2) {
  const s2 = e.c(8),
    {
      text: i2,
      trigger: l2,
      className: o2
    } = r2,
    c2 = "always" === (void 0 === l2 ? "hover" : l2);
  let u2;
  s2[0] !== o2 ? (u2 = a("inline-flex cursor-pointer", o2), s2[0] = o2, s2[1] = u2) : u2 = s2[1];
  const m2 = c2 ? "hover" : "rest";
  let d2, p2;
  return s2[2] !== i2 ? (d2 = i2.split("").map(C), s2[2] = i2, s2[3] = d2) : d2 = s2[3], s2[4] !== u2 || s2[5] !== m2 || s2[6] !== d2 ? (p2 = t.jsx(n.span, {
    className: u2,
    initial: "rest",
    whileHover: "hover",
    animate: m2,
    children: d2
  }), s2[4] = u2, s2[5] = m2, s2[6] = d2, s2[7] = p2) : p2 = s2[7], p2;
}
function C(e2, r2) {
  return t.jsx(n.span, {
    variants: {
      rest: {
        y: 0,
        transition: {
          duration: 0.2
        }
      },
      hover: {
        y: -4,
        transition: {
          repeat: 1 / 0,
          repeatType: "reverse",
          duration: 0.25,
          delay: 0.04 * r2,
          ease: "easeInOut"
        }
      }
    },
    className: "inline-block",
    children: " " === e2 ? "\xA0" : e2
  }, `${e2}-${r2}`);
}
const w = n2 => {
    const s2 = e.c(7),
      {
        texts: i2
      } = n2,
      {
        text1Ref: a2,
        text2Ref: l2
      } = (t2 => {
        const n3 = e.c(12),
          s3 = r.useRef(0),
          i3 = r.useRef(0),
          a3 = r.useRef(0);
        let l3;
        n3[0] === Symbol.for("react.memo_cache_sentinel") ? (l3 = new Date(), n3[0] = l3) : l3 = n3[0];
        const c3 = r.useRef(l3),
          u3 = r.useRef(null),
          m3 = r.useRef(null);
        let d2;
        n3[1] !== t2 ? (d2 = e2 => {
          const [n4, r2] = [u3.current, m3.current];
          if (!n4 || !r2 || !t2.length) return;
          r2.style.filter = `blur(${Math.min(8 / e2 - 8, 100)}px)`, r2.style.opacity = 100 * Math.pow(e2, 0.4) + "%";
          const i4 = 1 - e2;
          n4.style.filter = `blur(${Math.min(8 / i4 - 8, 100)}px)`, n4.style.opacity = 100 * Math.pow(i4, 0.4) + "%", n4.textContent = t2[s3.current % t2.length], r2.textContent = t2[(s3.current + 1) % t2.length];
        }, n3[1] = t2, n3[2] = d2) : d2 = n3[2];
        const p2 = d2;
        let f2;
        n3[3] !== p2 ? (f2 = () => {
          i3.current = i3.current - a3.current, a3.current = 0;
          let e2 = i3.current / 1.5;
          e2 > 1 && (a3.current = 0.5, e2 = 1), p2(e2), 1 === e2 && (s3.current = s3.current + 1);
        }, n3[3] = p2, n3[4] = f2) : f2 = n3[4];
        const x2 = f2;
        let g2;
        n3[5] === Symbol.for("react.memo_cache_sentinel") ? (g2 = () => {
          i3.current = 0;
          const [e2, t3] = [u3.current, m3.current];
          e2 && t3 && (t3.style.filter = "none", t3.style.opacity = "100%", e2.style.filter = "none", e2.style.opacity = "0%");
        }, n3[5] = g2) : g2 = n3[5];
        const h2 = g2,
          b2 = o(z);
        let v2, y2, k2;
        return n3[6] !== x2 || n3[7] !== b2 || n3[8] !== t2.length ? (v2 = () => {
          if (!t2.length || b2) return;
          let e2;
          c3.current = new Date();
          const n4 = () => {
            e2 = requestAnimationFrame(n4);
            const t3 = new Date(),
              r2 = (t3.getTime() - c3.current.getTime()) / 1e3;
            c3.current = t3, a3.current = a3.current - r2, a3.current <= 0 ? x2() : h2();
          };
          return n4(), () => {
            cancelAnimationFrame(e2);
          };
        }, y2 = [x2, h2, t2.length, b2], n3[6] = x2, n3[7] = b2, n3[8] = t2.length, n3[9] = v2, n3[10] = y2) : (v2 = n3[9], y2 = n3[10]), r.useEffect(v2, y2), n3[11] === Symbol.for("react.memo_cache_sentinel") ? (k2 = {
          text1Ref: u3,
          text2Ref: m3
        }, n3[11] = k2) : k2 = n3[11], k2;
      })(i2);
    let c2, u2, m2;
    return s2[0] !== a2 ? (c2 = t.jsx("span", {
      className: "absolute inset-x-0 top-0 m-auto inline-block w-full",
      ref: a2
    }), s2[0] = a2, s2[1] = c2) : c2 = s2[1], s2[2] !== l2 ? (u2 = t.jsx("span", {
      className: "absolute inset-x-0 top-0 m-auto inline-block w-full",
      ref: l2
    }), s2[2] = l2, s2[3] = u2) : u2 = s2[3], s2[4] !== c2 || s2[5] !== u2 ? (m2 = t.jsxs(t.Fragment, {
      children: [c2, u2]
    }), s2[4] = c2, s2[5] = u2, s2[6] = m2) : m2 = s2[6], m2;
  },
  S = () => {
    const n2 = e.c(1);
    let r2;
    return n2[0] === Symbol.for("react.memo_cache_sentinel") ? (r2 = t.jsx("svg", {
      id: "filters",
      className: "hidden",
      preserveAspectRatio: "xMidYMid slice",
      "aria-hidden": "true",
      children: t.jsx("defs", {
        children: t.jsx("filter", {
          id: "threshold",
          children: t.jsx("feColorMatrix", {
            in: "SourceGraphic",
            type: "matrix",
            values: "1 0 0 0 0\r\n                  0 1 0 0 0\r\n                  0 0 1 0 0\r\n                  0 0 0 255 -140"
          })
        })
      })
    }), n2[0] = r2) : r2 = n2[0], r2;
  },
  M = n2 => {
    const r2 = e.c(8),
      {
        texts: s2,
        className: i2
      } = n2;
    let l2, o2, c2, u2;
    return r2[0] !== i2 ? (l2 = a("relative mx-auto h-16 w-full max-w-screen-md text-center font-sans text-[40pt] font-bold leading-none [filter:url(#threshold)_blur(0.6px)] md:h-24 lg:text-[6rem]", i2), r2[0] = i2, r2[1] = l2) : l2 = r2[1], r2[2] !== s2 ? (o2 = t.jsx(w, {
      texts: s2
    }), r2[2] = s2, r2[3] = o2) : o2 = r2[3], r2[4] === Symbol.for("react.memo_cache_sentinel") ? (c2 = t.jsx(S, {}), r2[4] = c2) : c2 = r2[4], r2[5] !== l2 || r2[6] !== o2 ? (u2 = t.jsxs("div", {
      className: l2,
      children: [o2, c2]
    }), r2[5] = l2, r2[6] = o2, r2[7] = u2) : u2 = r2[7], u2;
  };
function W(n2) {
  const r2 = e.c(78);
  let s2, i2, o2, c2, u2, m2, d2, p2, f2, x2, g2, v2, j2, C2, w2, S2, W2, z2, $2, F2;
  r2[0] !== n2 ? ({
    children: o2,
    text: z2,
    texts: $2,
    effect: v2,
    font: d2,
    badge: s2,
    badgeSize: j2,
    badgeClassName: i2,
    icon: f2,
    trailingIcon: F2,
    glowColor: p2,
    shimmerWidth: C2,
    customColors: m2,
    color: u2,
    speed: w2,
    trigger: S2,
    as: W2,
    className: c2,
    style: g2,
    ...x2
  } = n2, r2[0] = n2, r2[1] = s2, r2[2] = i2, r2[3] = o2, r2[4] = c2, r2[5] = u2, r2[6] = m2, r2[7] = d2, r2[8] = p2, r2[9] = f2, r2[10] = x2, r2[11] = g2, r2[12] = v2, r2[13] = j2, r2[14] = C2, r2[15] = w2, r2[16] = S2, r2[17] = W2, r2[18] = z2, r2[19] = $2, r2[20] = F2) : (s2 = r2[1], i2 = r2[2], o2 = r2[3], c2 = r2[4], u2 = r2[5], m2 = r2[6], d2 = r2[7], p2 = r2[8], f2 = r2[9], x2 = r2[10], g2 = r2[11], v2 = r2[12], j2 = r2[13], C2 = r2[14], w2 = r2[15], S2 = r2[16], W2 = r2[17], z2 = r2[18], $2 = r2[19], F2 = r2[20]);
  const R2 = void 0 === v2 ? "none" : v2,
    T2 = void 0 === j2 ? "sm" : j2,
    B2 = void 0 === C2 ? 80 : C2,
    I2 = void 0 === w2 ? 1 : w2,
    O2 = void 0 === S2 ? "hover" : S2,
    A2 = void 0 === W2 ? "span" : W2,
    L2 = null != z2 ? z2 : "string" == typeof o2 ? o2 : "",
    E2 = d2 && h[d2] || "";
  let D2;
  r2[21] !== o2 || r2[22] !== c2 || r2[23] !== u2 || r2[24] !== L2 || r2[25] !== m2 || r2[26] !== R2 || r2[27] !== p2 || r2[28] !== B2 || r2[29] !== I2 || r2[30] !== g2 || r2[31] !== z2 || r2[32] !== $2 || r2[33] !== O2 ? (D2 = () => {
    switch (R2) {
      case "shiny":
      case "shimmer":
        return t.jsx(y, {
          speed: I2,
          shimmerWidth: B2,
          color: u2,
          className: c2,
          style: g2,
          children: null != o2 ? o2 : z2
        });
      case "animated":
        if ((null == u2 ? void 0 : u2.startsWith("linear-gradient")) && u2) return t.jsx("span", {
          className: a("animate-gradient inline-block w-fit", c2),
          style: {
            background: u2,
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent"
          },
          children: null != o2 ? o2 : z2
        });
        if (u2 && u2.startsWith("#")) {
          const e2 = u2,
            n3 = b(u2, 40),
            r3 = b(u2, -30);
          return t.jsx("span", {
            className: a("animate-gradient inline-block w-fit", c2),
            style: {
              background: `linear-gradient(90deg, ${e2}, ${n3}, ${r3})`,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent"
            },
            children: null != o2 ? o2 : z2
          });
        }
        return t.jsx("span", {
          className: a("animate-gradient bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent inline-block w-fit", c2),
          children: null != o2 ? o2 : z2
        });
      case "neon":
        return t.jsx("span", {
          className: a("text-shadow-neon inline-block", c2),
          style: {
            color: u2 || "currentColor"
          },
          children: null != o2 ? o2 : z2
        });
      case "cartoon":
        return t.jsx("span", {
          className: a("!font-bold text-shadow-cartoon inline-block", c2),
          style: {
            color: u2 || "currentColor"
          },
          children: null != o2 ? o2 : z2
        });
      case "highlight":
        {
          const e2 = ((null == u2 ? void 0 : u2.startsWith("linear-gradient")) && u2 ? function (e3) {
              const t2 = e3.match(/#[0-9A-Fa-f]{6}/);
              return t2 ? t2[0] : null;
            }(u2) : u2) || "hsl(var(--primary))",
            n3 = e2.startsWith("#") ? `${e2}33` : "rgba(59, 130, 246, 0.2)";
          return t.jsx("span", {
            className: a("rounded px-2 py-0.5 inline-block", c2),
            style: {
              color: e2,
              backgroundColor: n3
            },
            children: null != o2 ? o2 : z2
          });
        }
      case "3d":
        return t.jsx("span", {
          className: a("text-shadow-3d inline-block", c2),
          style: {
            color: u2 || "currentColor"
          },
          children: null != o2 ? o2 : z2
        });
      case "retro":
        {
          const e2 = u2 || "currentColor",
            n3 = e2.startsWith("#") ? `3px 3px 0 ${b(e2, 70)}, 6px 6px 0 ${b(e2, -60)}` : "3px 3px 0 #ff00ff, 6px 6px 0 #00ffff";
          return t.jsx("span", {
            className: a("inline-block", c2),
            style: {
              color: e2,
              textShadow: n3
            },
            children: null != o2 ? o2 : z2
          });
        }
      case "pulse-glow":
        return t.jsx(N, {
          glowColor: p2 || u2 || void 0,
          speed: I2 > 1 ? 3 / I2 : 3,
          className: c2,
          children: null != o2 ? o2 : z2
        });
      case "gradient-wave":
        return t.jsx(k, {
          speed: I2,
          customColors: m2 || void 0,
          className: c2,
          children: null != o2 ? o2 : z2
        });
      case "morph":
      case "liquid":
        if ($2 && $2.length > 0) return t.jsx(M, {
          texts: $2,
          className: c2
        });
        if (L2 && L2.includes(",")) {
          const e2 = L2.split(",").map(P).filter(Boolean);
          if (e2.length > 1) return t.jsx(M, {
            texts: e2,
            className: c2
          });
        }
        return t.jsx(M, {
          texts: [L2],
          className: c2
        });
      case "wave":
        return t.jsx(_, {
          text: L2,
          trigger: O2,
          className: c2
        });
      case "gradient":
        {
          const e2 = null == u2 ? void 0 : u2.startsWith("linear-gradient");
          return t.jsx("span", {
            className: a(!e2 && "bg-gradient-to-r from-primary via-fuchsia-400 to-amber-400", "bg-clip-text text-transparent inline-block w-fit", c2),
            style: e2 && u2 ? {
              background: u2,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent"
            } : void 0,
            children: null != o2 ? o2 : z2
          });
        }
      case "counter":
      case "odometer":
      case "number":
        return t.jsx(l, {
          value: null != z2 ? z2 : "string" == typeof o2 || "number" == typeof o2 ? o2 : L2,
          className: c2
        });
      default:
        return (null == u2 ? void 0 : u2.startsWith("linear-gradient")) && u2 ? t.jsx("span", {
          className: a("inline-block w-fit", c2),
          style: {
            background: u2,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent"
          },
          children: null != o2 ? o2 : z2
        }) : t.jsx("span", {
          style: u2 ? {
            color: u2
          } : void 0,
          children: null != o2 ? o2 : z2
        });
    }
  }, r2[21] = o2, r2[22] = c2, r2[23] = u2, r2[24] = L2, r2[25] = m2, r2[26] = R2, r2[27] = p2, r2[28] = B2, r2[29] = I2, r2[30] = g2, r2[31] = z2, r2[32] = $2, r2[33] = O2, r2[34] = D2) : D2 = r2[34];
  const q = D2;
  if (s2) {
    const e2 = "string" == typeof s2 ? s2 : "default";
    let n3;
    if (r2[35] !== i2 || r2[36] !== T2 || r2[37] !== e2 || r2[38] !== d2 || r2[39] !== E2) {
      n3 = a("inline-flex items-center rounded-full border transition-all duration-300 select-none", E2, d2 && "magic-font", {
        premium: "border-teal-500/30 bg-teal-500/10 text-teal-400",
        infinity: "border-rose-500/30 bg-rose-500/10 text-rose-500",
        flac: "border-cyan-500/35 bg-cyan-500/15 text-cyan-300",
        accent: "border-primary/35 bg-primary/15 text-primary",
        neon: "border-emerald-500/35 bg-emerald-500/15 text-emerald-300",
        muted: "border-border/30 bg-muted/40 text-muted-foreground",
        outline: "border-border/60 bg-transparent text-foreground",
        default: "border-border/40 bg-card/60 text-foreground"
      }[e2], {
        xs: "text-micro px-1.5 py-0.5 gap-1 font-medium",
        sm: "text-xs px-2.5 py-0.5 gap-1.5 font-semibold",
        md: "text-sm px-3 py-1 gap-2 font-semibold",
        lg: "text-base px-4 py-1.5 gap-2.5 font-bold"
      }[T2], i2), r2[35] = i2, r2[36] = T2, r2[37] = e2, r2[38] = d2, r2[39] = E2, r2[40] = n3;
    } else n3 = r2[40];
    const l2 = u2 || void 0;
    let o3, c3, m3, p3, h2;
    return r2[41] !== g2 || r2[42] !== l2 ? (o3 = {
      color: l2,
      ...g2
    }, r2[41] = g2, r2[42] = l2, r2[43] = o3) : o3 = r2[43], r2[44] !== f2 ? (c3 = f2 && t.jsx("span", {
      className: "shrink-0 opacity-90",
      children: f2
    }), r2[44] = f2, r2[45] = c3) : c3 = r2[45], r2[46] !== q ? (m3 = q(), r2[46] = q, r2[47] = m3) : m3 = r2[47], r2[48] !== F2 ? (p3 = F2 && t.jsx("span", {
      className: "shrink-0 opacity-90",
      children: F2
    }), r2[48] = F2, r2[49] = p3) : p3 = r2[49], r2[50] !== x2 || r2[51] !== o3 || r2[52] !== c3 || r2[53] !== m3 || r2[54] !== p3 || r2[55] !== n3 ? (h2 = t.jsxs("div", {
      className: n3,
      style: o3,
      ...x2,
      children: [c3, m3, p3]
    }), r2[50] = x2, r2[51] = o3, r2[52] = c3, r2[53] = m3, r2[54] = p3, r2[55] = n3, r2[56] = h2) : h2 = r2[56], h2;
  }
  const G = d2 && "magic-font";
  let H;
  r2[57] !== c2 || r2[58] !== E2 || r2[59] !== G ? (H = a("inline-flex items-center justify-center", E2, G, c2), r2[57] = c2, r2[58] = E2, r2[59] = G, r2[60] = H) : H = r2[60];
  const Q = u2 || void 0;
  let U, V, Y, J, K;
  return r2[61] !== g2 || r2[62] !== Q ? (U = {
    color: Q,
    ...g2
  }, r2[61] = g2, r2[62] = Q, r2[63] = U) : U = r2[63], r2[64] !== f2 ? (V = f2 && t.jsx("span", {
    className: "shrink-0 mr-1.5",
    children: f2
  }), r2[64] = f2, r2[65] = V) : V = r2[65], r2[66] !== q ? (Y = q(), r2[66] = q, r2[67] = Y) : Y = r2[67], r2[68] !== F2 ? (J = F2 && t.jsx("span", {
    className: "shrink-0 ml-1.5",
    children: F2
  }), r2[68] = F2, r2[69] = J) : J = r2[69], r2[70] !== A2 || r2[71] !== x2 || r2[72] !== U || r2[73] !== V || r2[74] !== Y || r2[75] !== J || r2[76] !== H ? (K = t.jsxs(A2, {
    className: H,
    style: U,
    ...x2,
    children: [V, Y, J]
  }), r2[70] = A2, r2[71] = x2, r2[72] = U, r2[73] = V, r2[74] = Y, r2[75] = J, r2[76] = H, r2[77] = K) : K = r2[77], K;
}
function P(e2) {
  return e2.trim();
}
function z(e2) {
  return e2.isMinimized;
}
function $(n2) {
  const r2 = e.c(31),
    {
      level: s2,
      streak: i2,
      size: l2,
      pure: o2,
      className: c2
    } = n2,
    m2 = void 0 === s2 ? 1 : s2,
    d2 = void 0 === i2 ? 0 : i2,
    p2 = void 0 === l2 ? "md" : l2,
    f2 = void 0 !== o2 && o2;
  let x2;
  r2[0] === Symbol.for("react.memo_cache_sentinel") ? (x2 = {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
    profile: 20,
    room: 16,
    chat: 24
  }, r2[0] = x2) : x2 = r2[0];
  const g2 = x2,
    h2 = d2 > 12 || 2 === m2 ? "text-rose-500" : "text-teal-400",
    b2 = u.premium,
    v2 = g2[p2] || 15,
    y2 = d2 > 12 ? 3 : d2 >= 9 ? 2.2 : d2 >= 5 ? 1.7 : d2 >= 2 ? 1.3 : 1;
  if (f2) {
    let e2, n3;
    return r2[1] !== c2 || r2[2] !== h2 ? (e2 = a(h2, c2), r2[1] = c2, r2[2] = h2, r2[3] = e2) : e2 = r2[3], r2[4] !== v2 || r2[5] !== e2 ? (n3 = t.jsx(b2, {
      className: e2,
      size: v2
    }), r2[4] = v2, r2[5] = e2, r2[6] = n3) : n3 = r2[6], n3;
  }
  let k2;
  r2[7] !== c2 ? (k2 = a("relative group inline-flex items-center justify-center shrink-0 cursor-default select-none", c2), r2[7] = c2, r2[8] = k2) : k2 = r2[8];
  const j2 = 3 * v2,
    N2 = d2 > 1 && "group-hover:opacity-0 group-hover:scale-75";
  let _2, C2, w2, S2, M2, P2, z2;
  return r2[9] !== N2 ? (_2 = a("transition-all duration-200 shrink-0", N2), r2[9] = N2, r2[10] = _2) : _2 = r2[10], r2[11] !== h2 ? (C2 = a(h2, "shrink-0"), r2[11] = h2, r2[12] = C2) : C2 = r2[12], r2[13] !== v2 || r2[14] !== C2 ? (w2 = t.jsx(b2, {
    size: v2,
    className: C2
  }), r2[13] = v2, r2[14] = C2, r2[15] = w2) : w2 = r2[15], r2[16] !== w2 || r2[17] !== _2 ? (S2 = t.jsx("div", {
    className: _2,
    children: w2
  }), r2[16] = w2, r2[17] = _2, r2[18] = S2) : S2 = r2[18], r2[19] !== y2 || r2[20] !== S2 || r2[21] !== j2 ? (M2 = t.jsx(W, {
    effect: "shiny",
    speed: y2,
    shimmerWidth: j2,
    className: "inline-flex items-center justify-center",
    children: S2
  }), r2[19] = y2, r2[20] = S2, r2[21] = j2, r2[22] = M2) : M2 = r2[22], r2[23] !== h2 || r2[24] !== v2 || r2[25] !== d2 ? (P2 = d2 > 1 && t.jsx("div", {
    className: a("absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 font-medium text-center select-none scale-75 group-hover:scale-100 pointer-events-none", h2),
    style: {
      fontSize: v2 <= 16 ? "9px" : "11px"
    },
    children: d2
  }), r2[23] = h2, r2[24] = v2, r2[25] = d2, r2[26] = P2) : P2 = r2[26], r2[27] !== M2 || r2[28] !== P2 || r2[29] !== k2 ? (z2 = t.jsxs("div", {
    className: k2,
    children: [M2, P2]
  }), r2[27] = M2, r2[28] = P2, r2[29] = k2, r2[30] = z2) : z2 = r2[30], z2;
}
function F(n2) {
  const r2 = e.c(5),
    {
      premium: s2,
      size: i2,
      className: a2
    } = n2,
    l2 = void 0 === i2 ? "xs" : i2;
  let o2;
  return r2[0] !== a2 || r2[1] !== s2.level || r2[2] !== s2.streak || r2[3] !== l2 ? (o2 = t.jsx($, {
    level: s2.level,
    streak: s2.streak,
    size: l2,
    className: a2
  }), r2[0] = a2, r2[1] = s2.level, r2[2] = s2.streak, r2[3] = l2, r2[4] = o2) : o2 = r2[4], o2;
}
function R(n2) {
  const r2 = e.c(6),
    {
      premium: s2,
      className: i2
    } = n2,
    l2 = s2.level,
    o2 = s2.streak;
  let c2, u2;
  return r2[0] !== i2 ? (c2 = a("ml-1", i2), r2[0] = i2, r2[1] = c2) : c2 = r2[1], r2[2] !== s2.level || r2[3] !== s2.streak || r2[4] !== c2 ? (u2 = t.jsx($, {
    level: l2,
    streak: o2,
    size: "room",
    className: c2
  }), r2[2] = s2.level, r2[3] = s2.streak, r2[4] = c2, r2[5] = u2) : u2 = r2[5], u2;
}
function T(n2) {
  const r2 = e.c(13),
    {
      level: s2,
      onClick: i2,
      className: l2,
      pure: o2,
      size: u2
    } = n2,
    m2 = void 0 !== o2 && o2,
    d2 = void 0 === u2 ? "xl" : u2,
    {
      t: p2
    } = c();
  let f2;
  r2[0] !== s2 || r2[1] !== m2 || r2[2] !== d2 ? (f2 = t.jsx($, {
    level: s2,
    size: d2,
    pure: m2
  }), r2[0] = s2, r2[1] = m2, r2[2] = d2, r2[3] = f2) : f2 = r2[3];
  const x2 = f2;
  let g2, h2, b2;
  return r2[4] !== l2 ? (g2 = a("absolute inset-0 z-10 flex items-center justify-center rounded-[inherit] bg-background/70", l2), r2[4] = l2, r2[5] = g2) : g2 = r2[5], r2[6] !== x2 || r2[7] !== i2 || r2[8] !== p2 ? (h2 = i2 ? t.jsx("button", {
    type: "button",
    "aria-label": p2("premium.click_to_unlock"),
    className: "rounded-full transition-transform hover:scale-110 drop-shadow-sm cursor-pointer",
    onClick: i2,
    children: x2
  }) : t.jsx("div", {
    className: "drop-shadow-sm",
    children: x2
  }), r2[6] = x2, r2[7] = i2, r2[8] = p2, r2[9] = h2) : h2 = r2[9], r2[10] !== g2 || r2[11] !== h2 ? (b2 = t.jsx("div", {
    className: g2,
    children: h2
  }), r2[10] = g2, r2[11] = h2, r2[12] = b2) : b2 = r2[12], b2;
}
export { R as b, W as M, I as u, T as c, F as a };
