import { Bridge } from './bridge.js';
import { WaveController } from './controller.js';
import { SpotifyAdapter } from './spicetify.js';
import { replaceSpotifyHome } from './home-route.js';
import { hideSpotifyAppShortcut } from './spotify-shell.js';
import { dispatchUi } from './ui-dispatch.js';
import { bindSpotifyPlayer, spotifyCapabilities, spotifyReady } from './bootstrap.js';
import { runDesktopSync, publishDesktopSnapshot } from './desktop-sync.js';

const bridge = new Bridge('__WAVE_BRIDGE_KEY__');
let stage = 'waiting', lastReport = 0, player, controller, intercepted = false, routeInstalled = false;
const report = phase => bridge.request('/client/status', { phase, stage, build: '2026-10-28-wave-perf', capabilities: spotifyCapabilities(globalThis.Spicetify, document) }).catch(() => {});
async function start() {
 try {
  while (!bindSpotifyPlayer(globalThis.Spicetify) || !spotifyReady(spotifyCapabilities(globalThis.Spicetify, document))) {
    if (Date.now() - lastReport > 5000) { lastReport = Date.now(); void report('waiting'); }
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  if (globalThis.MyWave?.extensionReady) return;
  stage = 'shell-style'; void report('initializing');
  hideSpotifyAppShortcut();
  stage = 'controller';
  player ||= new SpotifyAdapter(Spicetify);
  controller ||= new WaveController(player, bridge, localStorage);
  stage = 'player-intercept';
  if (!intercepted) { player.intercept(controller); intercepted = true; }
  stage = 'home-route';
  if (!routeInstalled) { replaceSpotifyHome(Spicetify.Platform.History, () => window.dispatchEvent(new Event('wave:home'))); routeInstalled = true; }
  globalThis.MyWave = controller;
  const shellActive=()=>Spicetify.Platform.History.location.pathname === '/my-wave', layout=()=>window.waveShellMetrics?.();
  void runDesktopSync(controller, bridge, shellActive,layout,(method,args)=>dispatchUi(controller,method,args));
  setInterval(() => controller.safe(() => controller.tick()), 250);
  setInterval(() => controller.checkBridge(), 5000);
  const playbackChanged=()=>controller.safe(()=>publishDesktopSnapshot(controller,bridge,shellActive,layout));
  Spicetify.Player.addEventListener('songchange',playbackChanged);
  Spicetify.Player.addEventListener('onplaypause',playbackChanged);
  await controller.checkBridge();
  controller.extensionReady = true;
  stage = 'running'; void report('ready');
 } catch {
  void report('failed');
  setTimeout(start, 3000);
 }
}
void start();
