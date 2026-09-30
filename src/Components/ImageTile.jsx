/**
 * Fixed-aspect image tile used everywhere a photo or render sits in a grid.
 *
 * The container owns the size (an aspect-ratio class, full width), so every
 * tile in a row lines up and scales with the layout. The image always fills
 * the box and is never stretched:
 *   fit="cover"   (default) photos / full-frame renders: fill edge to edge,
 *                 cropping whatever overflows. Use `position` (CSS
 *                 object-position, e.g. '60% 50%') to keep the subject in frame.
 *   fit="contain" CAD renders and drawings on a white background: the whole
 *                 image is shown and the tile is filled with a matching white
 *                 background, so it still reads as a full tile and no detail
 *                 is cut off.
 */
function ImageTile({
  src,
  alt,
  fit = 'cover',
  position,
  aspect = 'aspect-[4/3]',
  loading = 'lazy',
  className = '',
}) {
  const contain = fit === 'contain';
  return (
    <div
      className={`relative w-full overflow-hidden ${aspect} ${contain ? 'bg-white' : 'bg-gray-200'} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        style={position ? { objectPosition: position } : undefined}
        className={`absolute inset-0 h-full w-full ${contain ? 'object-contain p-2 sm:p-3' : 'object-cover'}`}
      />
    </div>
  );
}

export default ImageTile;
