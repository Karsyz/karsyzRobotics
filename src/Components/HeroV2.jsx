import { Link } from 'react-router-dom';
import { useModal } from '../Context/ModalContext';
import ImageTile from './ImageTile';

// All four are CAD renders on white: fit 'contain' on a white tile so the
// whole part shows and the tile still reads as full.
const heroImages = [
  { src: '/images/portfolio/trailerFrame.webp', alt: 'Welded trailer frame 3D model', fit: 'contain' },
  { src: '/images/portfolio/mowerDeck.webp', alt: 'Sheet metal mower deck 3D model', fit: 'contain' },
  { src: '/images/portfolio/centerStringerStair.webp', alt: 'Steel center stringer stair 3D model', fit: 'contain' },
  { src: '/images/portfolio/bcpFuelPumpBracket.webp', alt: 'Sheet metal fuel pump bracket 3D model', fit: 'contain' },
];

export default function HeroV2() {
  const { openModal } = useModal();

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 pb-20 pt-12 sm:pt-20 lg:grid-cols-2 lg:pb-28 lg:pt-24">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
            Build-ready CAD for fab shops, machine shops and automation builders
          </h1>
          <p className="mt-4 text-xl font-medium text-indigo-700 sm:text-2xl">
            From a multi-trade designer with 22 years in fixtures, steel detailing and robotic weld cells.
          </p>
          <p className="mt-6 max-w-xl text-lg text-gray-600">
            3D models, fabrication drawings and DXF/STEP files designed to be
            practical to cut, bend, weld, machine and automate.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-green-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Book a call
            </button>
            <Link to="/services" className="font-semibold text-gray-900 hover:text-indigo-700">
              See services <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:gap-6">
          {heroImages.map(({ src, alt, fit }) => (
            <li key={src} className="overflow-hidden rounded-xl shadow-lg ring-1 ring-gray-900/10">
              <ImageTile src={src} alt={alt} fit={fit} loading="eager" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
