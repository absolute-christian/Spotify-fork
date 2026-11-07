# My Wave and performance verification, 28 October 2026

My Wave startup is serialized and recovers after failures. Preparation occurs once after a reliable catalogue match. Cancellation prevents late activation. The original Dotify hero, layouts and animations remain in use

Two real Yandex-to-Spotify starts confirmed playback, not just HTTP acceptance. The final run took6.377seconds, actual playback URI and displayed metadata matched. The real saved account restored automatically. A zero-duration skip rejected because the SDK omitted its required field was repaired without inventing listening time; all34 accumulated feedback events then drained successfully

## Reproducible component measurements

These figures measure deterministic work/traffic in fixtures, not total Spotify CPU or RAM

|60-second scenario|Before|After|
|---|---:|---:|
|Paused controller notifications|241|1|
|Paused iframe snapshots|61|1|
|Paused iframe bytes,50-track queue|765916|12556|
|Visible playing progress snapshots|241|241|
|Visible playing queue reads|241|61|
|Hidden queue reads|61|21|
|Overlay HTTP requests,1KBdesign|360|240|
|Overlay HTTP response bytes|477000|47452|
|Python-to-WebView bytes|317520|47450|
|Sibling traversals for1000deep native mutations|4000|0|

No settings or queue entries were removed. Playing progress frequency remains unchanged. Queues refresh independently while paused, and commands/visibility/track changes force updates. Overlay settings use a revision protocol with legacy support and backend-restart handling

Reproduce with `node work/optimization-2026-10-28/frontend-benchmark.mjs`, then `--after`; `node work/optimization-2026-10-28/shell-benchmark.mjs`; `.venv/Scripts/python.exe work/optimization-2026-10-28/measure-native.py --legacy --design-bytes 1000`, then without `--legacy`. Consult each script's arguments if rerunning a different fixture

81JavaScript and34Python tests passed. Native WebView2 integration checks passed for original controls, animation, input regions, scaling and reload. The installed client reported ready. Physical native mouse click and screenshot verification remain unavailable through the desktop automation helper; live playback was tested through the application's paired action channel

Local sanitized results are in `work/optimization-2026-10-28/live-wave.json`, `live-feedback.json`, and `live-background.json`. Build/install/test logs are under `.local/`. No commit or push was performed

Final background check:15samples over30.4seconds minimized,0offline samples, maximum snapshot age2484ms. Feedback queue0/no error. Installed CustomApp and both paired extension copies matched the built files
