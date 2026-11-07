# Frontend work reduction

All figures below are deterministic synthetic work counts, not desktop CPU/RAM benchmarks. Fixtures contain no account data and never connect to Spotify or Yandex

## Reproduce

`node work/optimization-2026-10-28/frontend-benchmark.mjs`

`node work/optimization-2026-10-28/frontend-benchmark.mjs --after`

`node work/optimization-2026-10-28/shell-benchmark.mjs`

The `frontend-before/` files retain the pre-change emit/tick, cadence and shell implementation for the baseline. Controller imports in that copy resolve to the current common dependencies; the benchmark does not exercise recommendation or playback mutation logic

## Results

60 simulated seconds at250ms ticks,50queue entries, including initial sample:

|Case|Before|After|
|---|---:|---:|
|Paused controller notifications|241|1|
|Paused iframe snapshots|61|1|
|Paused iframe snapshot bytes|765916|12556|
|Visible playing iframe snapshots|241|241|
|Visible playing queue reads/normalizations|241|61|
|Hidden queue reads/normalizations|61|21|
|Hidden playing snapshots|61|61|
|Sibling collection reads for1000deep native mutation batches|4000|0|
|Initial shell sibling reads|4|4|

Paused iframe traffic is98.36% lower in the unchanged-state fixture. Queue normalizations during visible playback are74.69% lower; hidden queue refreshes are65.57% lower. Progress cadence is retained

## Changes and guardrails

- `WaveController.emit` skips equal patches. `tick` retains equivalent normalized track references but publishes real metadata/artwork corrections and progress changes
- `snapshotCadence` compares all non-progress state fields without JSON serialization, so account recovery/status/error changes are immediate. Unchanged progress no longer produces periodic full snapshots; a paused seek is immediate
- `createFrameSnapshotPublisher` preserves full payloads and full queues. Normalized queue checks are bounded to1second visible or3seconds hidden, independent of controller notifications; forced action replies, visibility and track changes refresh immediately. The frame effect clears its interval on unmount
- Native sibling classification ignores deep hidden-pane progress changes, while ancestor child changes are processed synchronously. Removed nodes are released from retained sets. Profile-menu open/close attributes are observed explicitly; native-menu markers are removed again on close

28 scoped tests passed, including controller lifecycle tests. New tests cover unchanged paused state, metadata corrections, paused queue reordering and duplicate uid, immediate action/track/status changes, visible/hidden progress cadence, native sibling insertion/removal and profile menu restoration

Production installation, native rendering, real My Wave playback, desktop CPU and memory measurements belong to the parent validation run
