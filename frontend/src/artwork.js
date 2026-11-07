export function bestArtwork(images, metadata = {}) {
  const largest = (Array.isArray(images) ? images : []).filter(image => typeof image?.url === 'string' && image.url)
    .reduce((best, image) => !best || Number(image.width || image.height || 0) > Number(best.width || best.height || 0) ? image : best, null);
  const url = metadata.image_xlarge_url || largest?.url || metadata.image_large_url || metadata.image_url || '';
  return url.startsWith('spotify:image:') ? `https://i.scdn.co/image/${url.slice(14)}` : url;
}
