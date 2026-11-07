// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs
import { bx as e, av as n } from "./globals-Bc3qFUyf.js";
import { b as t } from "./vendor-ui-BwX-1h7U.js";
function a(n2, t2, a2, i2, s2) {
  try {
    const r2 = e.getState();
    r2.isInitialized && (r2.setEqualizerBands(n2.map(e2 => ({
      frequency: e2.frequency,
      gain: e2.gain
    }))), r2.setPreampGain(t2), void 0 !== (null == a2 ? void 0 : a2.dimension) && r2.setSpatialDimension(a2.dimension), void 0 !== (null == a2 ? void 0 : a2.intensity) && r2.setRotationIntensity(a2.intensity), void 0 !== (null == a2 ? void 0 : a2.speed) && r2.setRotationSpeed(a2.speed), void 0 !== i2 && r2.setReverbMode(i2));
    const o2 = n2.every(e2 => 0 === e2.gain),
      d2 = void 0 !== s2 ? s2 : !o2;
    r2.setIsEqualizerEnabled(d2);
  } catch {}
}
const i = [60, 150, 400, 1e3, 2400, 15e3],
  s = [32, 64, 125, 250, 500, 1e3, 2e3, 4e3, 8e3, 12e3, 16e3, 2e4],
  r = [{
    name: "flat",
    bands: {
      32: 0,
      64: 0,
      125: 0,
      250: 0,
      500: 0,
      1e3: 0,
      2e3: 0,
      4e3: 0,
      8e3: 0,
      12e3: 0,
      16e3: 0,
      2e4: 0,
      60: 0,
      150: 0,
      400: 0,
      2400: 0,
      15e3: 0
    }
  }, {
    name: "bass",
    bands: {
      32: 6,
      64: 5,
      125: 4,
      250: 2,
      500: 0,
      1e3: 0,
      2e3: 0,
      4e3: 0,
      8e3: 0,
      12e3: 0,
      16e3: 0,
      2e4: 0,
      60: 5.5,
      150: 3.5,
      400: 0.5,
      2400: 0,
      15e3: 0
    }
  }, {
    name: "treble",
    bands: {
      32: 0,
      64: 0,
      125: 0,
      250: 0,
      500: 0,
      1e3: 2,
      2e3: 3,
      4e3: 4,
      8e3: 5,
      12e3: 5.5,
      16e3: 6,
      2e4: 6.5,
      60: 0,
      150: 0,
      400: 0,
      2400: 3.5,
      15e3: 6
    }
  }, {
    name: "vocal",
    bands: {
      32: -2,
      64: -1,
      125: 0,
      250: 2,
      500: 4,
      1e3: 4,
      2e3: 3,
      4e3: 2,
      8e3: 0,
      12e3: -0.5,
      16e3: -1,
      2e4: -1,
      60: -1.5,
      150: 0.5,
      400: 3.5,
      2400: 2.5,
      15e3: -1
    }
  }, {
    name: "rock",
    bands: {
      32: 5,
      64: 4,
      125: 3,
      250: -1,
      500: -1,
      1e3: 1,
      2e3: 2,
      4e3: 4,
      8e3: 3,
      12e3: 2.5,
      16e3: 2,
      2e4: 1.5,
      60: 4.5,
      150: 2,
      400: -1,
      2400: 2.5,
      15e3: 2
    }
  }, {
    name: "pop",
    bands: {
      32: 3,
      64: 2,
      125: 1,
      250: -1,
      500: 0,
      1e3: 2,
      2e3: 3,
      4e3: 4,
      8e3: 3,
      12e3: 2.5,
      16e3: 2,
      2e4: 1.5,
      60: 2.5,
      150: 0.5,
      400: -0.5,
      2400: 3.5,
      15e3: 2
    }
  }, {
    name: "jazz",
    bands: {
      32: 4,
      64: 3,
      125: 1,
      250: 2,
      500: -1,
      1e3: -1,
      2e3: 0,
      4e3: 1,
      8e3: 3,
      12e3: 3.5,
      16e3: 4,
      2e4: 4,
      60: 3.5,
      150: 1.5,
      400: 1,
      2400: 0.5,
      15e3: 4
    }
  }, {
    name: "classical",
    bands: {
      32: 4,
      64: 3,
      125: 0,
      250: -1,
      500: 0,
      1e3: 0,
      2e3: 1,
      4e3: 2,
      8e3: 4,
      12e3: 4,
      16e3: 4,
      2e4: 4,
      60: 3.5,
      150: 0.5,
      400: -0.5,
      2400: 1.5,
      15e3: 4
    }
  }];
function o(e2, n2) {
  if (!n2) return 0;
  if (!Array.isArray(n2)) {
    if ("object" == typeof n2) {
      if (void 0 !== n2[e2] && !isNaN(Number(n2[e2]))) return Number(n2[e2]);
      return d(e2, Object.entries(n2).map(([e3, n3]) => ({
        frequency: Number(e3),
        gain: Number(n3)
      })).filter(e3 => !isNaN(e3.frequency) && !isNaN(e3.gain)));
    }
    return 0;
  }
  return d(e2, n2);
}
function d(e2, n2) {
  if (!n2 || 0 === n2.length) return 0;
  const t2 = n2.find(n3 => Number(n3.frequency) === e2);
  if (void 0 !== t2 && !isNaN(Number(t2.gain))) return Number(t2.gain);
  const a2 = n2.map(e3 => ({
    frequency: Number(e3.frequency),
    gain: Number(e3.gain)
  })).filter(e3 => !isNaN(e3.frequency) && !isNaN(e3.gain) && e3.frequency > 0).sort((e3, n3) => e3.frequency - n3.frequency);
  if (0 === a2.length) return 0;
  if (1 === a2.length) return a2[0].gain;
  if (e2 <= a2[0].frequency) return a2[0].gain;
  if (e2 >= a2[a2.length - 1].frequency) return a2[a2.length - 1].gain;
  for (let i2 = 0; i2 < a2.length - 1; i2++) {
    const n3 = a2[i2],
      t3 = a2[i2 + 1];
    if (e2 >= n3.frequency && e2 <= t3.frequency) {
      if (n3.frequency === t3.frequency) return n3.gain;
      const a3 = Math.log10(e2),
        i3 = Math.log10(n3.frequency),
        s2 = (a3 - i3) / (Math.log10(t3.frequency) - i3),
        r2 = n3.gain + s2 * (t3.gain - n3.gain);
      return Math.round(2 * r2) / 2;
    }
  }
  return 0;
}
const l = (e2 = false) => (e2 ? s : i).map(e3 => ({
    frequency: e3,
    gain: 0,
    label: e3 >= 1e3 ? e3 / 1e3 + "k" : `${e3}`
  })),
  u = "eq_custom_presets",
  p = "eq_bands_new",
  m = "eq_preset",
  b = "eq_preamp";
function c() {
  var e2;
  const t2 = null != (e2 = n.load(u)) ? e2 : [];
  let a2 = false;
  const i2 = t2.map(e3 => (null == e3 ? void 0 : e3.bands) && !Array.isArray(e3.bands) ? (a2 = true, {
    ...e3,
    bands: Object.entries(e3.bands).map(([e4, n2]) => ({
      frequency: Number(e4),
      gain: Number(n2)
    }))
  }) : e3);
  return a2 && n.save(u, i2), i2;
}
const y = t((t2, i2) => {
  var s2, d2, y2;
  const f2 = n.load(p) || l(),
    v = null != (s2 = n.load(m)) ? s2 : "flat",
    g = null != (d2 = n.load(b)) ? d2 : 0,
    q = null != (y2 = n.load("audio_reverb_mode")) ? y2 : "off",
    I = !f2.every(e2 => 0 === e2.gain);
  return {
    customPresets: c(),
    currentPresetId: v,
    bands: f2,
    preampGain: g,
    spatialDimension: 0,
    rotationIntensity: 0,
    rotationSpeed: 1,
    reverbMode: q,
    isEnabled: I,
    pendingApply: null,
    addPreset: e2 => {
      if (i2().customPresets.some(n2 => n2.id === e2.id)) return;
      const a2 = [e2, ...i2().customPresets];
      n.save(u, a2), t2({
        customPresets: a2
      });
    },
    removePreset: e2 => {
      const a2 = i2().customPresets.filter(n2 => n2.id !== e2);
      n.save(u, a2);
      const s3 = i2().currentPresetId,
        r2 = s3 === e2 ? "flat" : s3;
      r2 !== s3 ? (n.save(m, r2), i2().applyBuiltInPreset("flat")) : t2({
        customPresets: a2
      });
    },
    getPresetById: e2 => i2().customPresets.find(n2 => n2.id === e2),
    applyExternalPreset: e2 => {
      const s3 = i2().customPresets,
        r2 = s3.some(n2 => n2.id === e2.id || n2.name === e2.name) ? s3.map(n2 => n2.id === e2.id || n2.name === e2.name ? e2 : n2) : [e2, ...s3];
      n.save(u, r2), n.save(m, e2.id);
      const d3 = (i2().bands.length > 0 ? i2().bands : l()).map(n2 => ({
        ...n2,
        gain: o(n2.frequency, e2.bands)
      }));
      n.save(p, d3);
      const b2 = d3.every(e3 => 0 === e3.gain);
      t2({
        customPresets: r2,
        currentPresetId: e2.id,
        bands: d3,
        isEnabled: !b2,
        pendingApply: null
      }), a(d3, i2().preampGain, {
        dimension: i2().spatialDimension,
        intensity: i2().rotationIntensity,
        speed: i2().rotationSpeed
      }, i2().reverbMode, !b2);
    },
    clearPendingApply: () => t2({
      pendingApply: null
    }),
    setBands: e2 => {
      n.save(p, e2), t2({
        bands: e2
      }), a(e2, i2().preampGain, {
        dimension: i2().spatialDimension,
        intensity: i2().rotationIntensity,
        speed: i2().rotationSpeed
      }, i2().reverbMode, i2().isEnabled);
    },
    setBandGain: (e2, s3) => {
      const r2 = i2().bands;
      if (!r2[e2]) return;
      const o2 = [...r2],
        d3 = Math.round(2 * s3) / 2;
      o2[e2] = {
        ...o2[e2],
        gain: d3
      }, n.save(p, o2), n.save(m, "custom");
      const l2 = o2.every(e3 => 0 === e3.gain);
      t2({
        bands: o2,
        currentPresetId: "custom",
        isEnabled: !l2
      }), a(o2, i2().preampGain, {
        dimension: i2().spatialDimension,
        intensity: i2().rotationIntensity,
        speed: i2().rotationSpeed
      }, i2().reverbMode, !l2);
    },
    applyBuiltInPreset: e2 => {
      const s3 = r.find(n2 => n2.name === e2);
      if (!s3) return;
      const d3 = (i2().bands.length > 0 ? i2().bands : l()).map(e3 => ({
        ...e3,
        gain: o(e3.frequency, s3.bands)
      }));
      n.save(p, d3), n.save(m, e2);
      const u2 = d3.every(e3 => 0 === e3.gain);
      t2({
        bands: d3,
        currentPresetId: e2,
        isEnabled: !u2
      }), a(d3, i2().preampGain, {
        dimension: i2().spatialDimension,
        intensity: i2().rotationIntensity,
        speed: i2().rotationSpeed
      }, i2().reverbMode, !u2);
    },
    applyCustomPreset: e2 => {
      const s3 = (i2().bands.length > 0 ? i2().bands : l()).map(n2 => ({
        ...n2,
        gain: o(n2.frequency, e2.bands)
      }));
      n.save(p, s3), n.save(m, e2.id);
      const r2 = s3.every(e3 => 0 === e3.gain);
      t2({
        bands: s3,
        currentPresetId: e2.id,
        isEnabled: !r2
      }), a(s3, i2().preampGain, {
        dimension: i2().spatialDimension,
        intensity: i2().rotationIntensity,
        speed: i2().rotationSpeed
      }, i2().reverbMode, !r2);
    },
    applyTrackEqualizer: e2 => {
      var s3, d3, u2, c2, y3, f3, v2, g2, q2, I2, P, E;
      if (e2) {
        const n2 = i2().bands.length > 0 ? i2().bands : l();
        let p2 = [...n2];
        if (e2.bands && e2.bands.length > 0) p2 = n2.map(n3 => ({
          ...n3,
          gain: o(n3.frequency, e2.bands)
        }));else if (e2.presetId) {
          const t3 = r.find(n3 => n3.name === e2.presetId);
          t3 && (p2 = n2.map(e3 => ({
            ...e3,
            gain: o(e3.frequency, t3.bands)
          })));
        }
        const m2 = null != (s3 = e2.preampGain) ? s3 : 0,
          b2 = null != (d3 = e2.spatialDimension) ? d3 : 0,
          v3 = null != (u2 = e2.rotationIntensity) ? u2 : 0,
          g3 = null != (c2 = e2.rotationSpeed) ? c2 : 1,
          q3 = null != (y3 = e2.reverbMode) ? y3 : "off",
          I3 = p2.every(e3 => 0 === e3.gain),
          P2 = void 0 !== e2.isEnabled ? e2.isEnabled : !I3;
        t2({
          bands: p2,
          currentPresetId: null != (f3 = e2.presetId) ? f3 : "custom",
          preampGain: m2,
          spatialDimension: b2,
          rotationIntensity: v3,
          rotationSpeed: g3,
          reverbMode: q3,
          isEnabled: P2
        }), a(p2, m2, {
          dimension: b2,
          intensity: v3,
          speed: g3
        }, q3, P2);
      } else {
        const e3 = null != (v2 = n.load(m)) ? v2 : "flat",
          s4 = n.load(p),
          r2 = i2().bands,
          d4 = r2.length > 0 ? r2.map(e4 => ({
            ...e4,
            gain: 0
          })) : l();
        let u3 = d4;
        s4 && Array.isArray(s4) && s4.length > 0 && (u3 = d4.map(e4 => ({
          ...e4,
          gain: o(e4.frequency, s4)
        })));
        const c3 = null != (g2 = n.load(b)) ? g2 : 0,
          y4 = null != (q2 = n.load("audio_spatial_dimension")) ? q2 : 0,
          f4 = null != (I2 = n.load("audio_rotation_intensity")) ? I2 : 0,
          N = null != (P = n.load("audio_rotation_speed")) ? P : 1,
          S = null != (E = n.load("audio_reverb_mode")) ? E : "off",
          M = u3.every(e4 => 0 === e4.gain);
        t2({
          bands: u3,
          currentPresetId: e3,
          preampGain: c3,
          spatialDimension: y4,
          rotationIntensity: f4,
          rotationSpeed: N,
          reverbMode: S,
          isEnabled: !M
        }), a(u3, c3, {
          dimension: y4,
          intensity: f4,
          speed: N
        }, S, !M);
      }
    },
    setPreampGain: e2 => {
      n.save(b, e2), t2({
        preampGain: e2
      }), a(i2().bands, e2, {
        dimension: i2().spatialDimension,
        intensity: i2().rotationIntensity,
        speed: i2().rotationSpeed
      }, i2().reverbMode, i2().isEnabled);
    },
    setSpatialDimension: e2 => {
      t2({
        spatialDimension: e2
      }), a(i2().bands, i2().preampGain, {
        dimension: e2,
        intensity: i2().rotationIntensity,
        speed: i2().rotationSpeed
      }, i2().reverbMode, i2().isEnabled);
    },
    setRotationIntensity: e2 => {
      t2({
        rotationIntensity: e2
      }), a(i2().bands, i2().preampGain, {
        dimension: i2().spatialDimension,
        intensity: e2,
        speed: i2().rotationSpeed
      }, i2().reverbMode, i2().isEnabled);
    },
    setRotationSpeed: e2 => {
      t2({
        rotationSpeed: e2
      }), a(i2().bands, i2().preampGain, {
        dimension: i2().spatialDimension,
        intensity: i2().rotationIntensity,
        speed: e2
      }, i2().reverbMode, i2().isEnabled);
    },
    setReverbMode: e2 => {
      n.save("audio_reverb_mode", e2), t2({
        reverbMode: e2
      }), a(i2().bands, i2().preampGain, {
        dimension: i2().spatialDimension,
        intensity: i2().rotationIntensity,
        speed: i2().rotationSpeed
      }, e2, i2().isEnabled);
    },
    setIsEnabled: n2 => {
      t2({
        isEnabled: n2
      }), e.getState().setIsEqualizerEnabled(n2);
    },
    setCurrentPresetId: e2 => {
      n.save(m, e2), t2({
        currentPresetId: e2
      });
    }
  };
});
export { y as u };
