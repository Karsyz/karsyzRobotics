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
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {images.map(({ src, alt }) => (
              <li key={src} className="rounded-lg bg-white p-2 shadow-sm ring-1 ring-gray-900/5">
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-contain"
                />
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
