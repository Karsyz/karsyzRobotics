import ImageTile from './ImageTile';

/**
 * An ImageTile wrapped in a button that opens the lightbox.
 * Shows a small "Click to enlarge" badge: always visible on touch screens,
 * and on hover / keyboard focus on devices with a mouse (see .tile-hint in
 * index.css). The badge is decorative; the button's accessible name says it.
 * `compactHint` shows just the magnifier icon below the sm breakpoint, for
 * small tiles where the label would cover the image.
 */
function EnlargeableTile({ src, alt, fit, position, onClick, compactHint = false, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Enlarge image: ${alt}`}
      className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-lg shadow-md ring-1 ring-gray-900/5 transition duration-300 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
    >
      <ImageTile src={src} alt={alt} fit={fit} position={position} />
      <span
        aria-hidden="true"
        className="tile-hint pointer-events-none absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-md bg-gray-900/75 px-2 py-1 text-xs font-medium text-white transition-opacity duration-200"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
        </svg>
        <span className={compactHint ? 'hidden sm:inline' : undefined}>Click to enlarge</span>
      </span>
    </button>
  );
}

export default EnlargeableTile;
