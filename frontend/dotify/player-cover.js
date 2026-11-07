export function largeCoverPatch(playerSettings) {
  if (playerSettings?.view?.style !== 'big') return playerSettings;
  return { ...playerSettings, cover: { ...playerSettings.cover, coverincover: true } };
}

export function capCoverImage(event) {
  const image = event.currentTarget;
  if (image.naturalWidth > 0 && image.naturalHeight > 0) {
    let container = image.parentElement;
    // Dotify places the image in an inset layer inside its sized cover wrapper.
    while (container && !container.style.width.includes('--cover-native-size')) {
      container = container.parentElement;
    }
    container?.style.setProperty('--cover-native-size', `${Math.min(500, image.naturalWidth, image.naturalHeight)}px`);
  }
}

export function migrateLargeCover(settings, storage) {
  if (storage.getItem('forkspotify.big-cover.v1') === '1') return settings;
  const next = { ...settings, playerSettings: largeCoverPatch(settings.playerSettings) };
  storage.setItem('forkspotify.dotify.settings.v1', JSON.stringify(next));
  storage.setItem('forkspotify.big-cover.v1', '1');
  return next;
}
