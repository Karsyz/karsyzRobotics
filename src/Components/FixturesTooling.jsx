import ImageTile from './ImageTile';
import { fixturesTooling } from '../Data/siteCopy';

/** Fixtures & Tooling section from the approved site copy. */
function FixturesTooling({ className = '' }) {
  const { heading, intro, items, images } = fixturesTooling;
  return (
    <section
      id="fixtures-tooling"
      aria-labelledby="fixtures-tooling-heading"
      className={className}
    >
      <h2
        id="fixtures-tooling-heading"
        className="mb-4 text-3xl font-semibold text-gray-900"
      >
        {heading}
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="mb-6 text-lg text-gray-700">{intro}</p>
          <ul className="space-y-4">
            {items.map(({ label, text }) => (
              <li key={label} className="text-gray-700">
                <strong className="text-gray-900">{label}</strong> {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          {/* One image fills the whole column; two or more share a 2-up grid. */}
          <ul className={`grid grid-cols-1 gap-4 ${images.length > 1 ? 'sm:grid-cols-2' : ''}`}>
            {images.map(({ src, alt, fit, position }) => (
              <li key={src} className="overflow-hidden rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <ImageTile src={src} alt={alt} fit={fit} position={position} />
              </li>
            ))}
          </ul>
          {/* Labelled fixture concept images get added to `images` in siteCopy.js. */}
        </div>
      </div>
    </section>
  );
}

export default FixturesTooling;
