import React, { useState, useEffect } from 'react';
import CTA from '../Components/CTA';
import Seo from '../Components/Seo';
import CaseStudies from '../Components/CaseStudies';
import FeatureScriptVideo from '../Components/FeatureScriptVideo';
import ImageTile from '../Components/ImageTile';
import { v4 as uuidv4 } from 'uuid';

// Images: every tile is 4:3 and fills its grid cell (see ImageTile).
// `fit: 'contain'` marks CAD renders and drawings on a white background: they
// are shown whole on a white tile so no part or dimension is cut off. The rest
// (renders with a full-frame background) use the default cover fit.
//
// Order per approved copy (2026-09-29): industrial work first (weldments,
// structural steel, sheet metal, fixtures, case studies), hobby pieces last.
const portfolioSections = [
  {
    id: uuidv4().slice(0, 8),
    heading: 'Weldments and Frames',
    description:
      'Design and detailing of welded structures and support frames for mobile trailers, tables, and enclosures, including complex assemblies that need to be accurate for structural integrity and fit-up during fabrication.',
    images: [
      {
        imgSrc: '/images/portfolio/trailerFrame.webp',
        imgAlt: 'Welded steel trailer frame 3D model',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/drainTableAssy.webp',
        imgAlt: 'Fabrication drawing of a drain table assembly',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/fishingHut1.webp',
        imgAlt: 'Fabrication drawing of an ice fishing hut frame',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/fishingHut2.webp',
        imgAlt: 'Ice fishing hut frame 3D model',
        fit: 'contain',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Structural Steel',
    description:
      'Custom fabrication drawings and detailing for large-scale structural steel projects, including beams, rolled sections, and material lists for buildings and outdoor structures like pergolas.',
    images: [
      {
        imgSrc: '/images/portfolio/progress1.webp',
        imgAlt: 'Steel pergola frame 3D model',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/rolledBeamDetails.webp',
        imgAlt: 'Fabrication drawing of a rolled (curved) steel beam for a pergola',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/bigBeamDrawing.webp',
        imgAlt: 'Fabrication drawing of a steel pergola beam',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/materialList.webp',
        imgAlt: 'Material list for a steel pergola',
        fit: 'contain',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Sheet Metal Parts',
    description:
      'Precision sheet metal designs for manufacturing components like enclosures, brackets, and custom hardware, optimized for bending, cutting, and CNC fabrication processes.',
    images: [
      {
        imgSrc: '/images/portfolio/sample.webp',
        imgAlt: 'Sheet metal shelf bracket with lightening holes',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/mowerDeck.webp',
        imgAlt: 'Sheet metal mower deck 3D model',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/5.webp',
        imgAlt: 'Sheet metal base for an electric car charger',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/breakerActuator2.webp',
        imgAlt: 'Circuit breaker actuator mechanism',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/offsetBracket.webp',
        imgAlt: 'Offset sheet metal bracket',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/fanShroud.webp',
        imgAlt: 'Sheet metal dual fan shroud',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/sheetMetalTrays.webp',
        imgAlt: 'Set of four nesting formed sheet metal trays',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/sheetMetalHangingRack.webp',
        imgAlt: 'Laser-cut and formed sheet metal hanging rack',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/perforatedSheetMetalStand.webp',
        imgAlt: 'Formed sheet metal stand with hex-perforated top',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Jigs, Fixtures, Molds, Tools',
    description:
      'Custom tooling, jigs, and mold components designed for production and part-to-part consistency, including precision fixturing and mold flow considerations.',
    images: [
      {
        imgSrc: '/images/portfolio/2.webp',
        imgAlt: 'Mold cavity with flow channels, 3D model',
      },
      {
        imgSrc: '/images/portfolio/image-4.webp',
        imgAlt: 'Deburring fixture 3D model',
        position: '40% 50%',
      },
    ],
  },
  { id: 'featurescript', component: 'featureScript' },
  { id: 'case-studies', component: 'caseStudies' },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Misc. Steel: Stairs, Handrails, Gates, Fences, etc.',
    description:
      'Concept development and fabrication-ready detailing for architectural and safety components such as custom stairs, guardrails, handrails, gates, and other miscellaneous steelwork.',
    images: [
      {
        imgSrc: '/images/portfolio/boatRailConcept.webp',
        imgAlt: 'Concept render of a tubular boat guardrail',
      },
      {
        imgSrc: '/images/portfolio/centerStringerStair.webp',
        imgAlt: 'Steel center stringer stair 3D model',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/singleStringerStairDrawing.webp',
        imgAlt: 'Fabrication drawing of the steel center stringer stair',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/guardRail.webp',
        imgAlt: 'Steel guardrail 3D model',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/steelStairAndWallRail.webp',
        imgAlt: 'Steel stair with wall-mounted handrail 3D model',
        fit: 'contain',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Flat Designs',
    description:
      'Flat pattern designs for laser and waterjet cutting, including decorative signs, fuse strips, and flat-pack assemblies. Designed for efficient nesting and accurate downstream fabrication.',
    images: [
      {
        imgSrc: '/images/portfolio/3DVerify.webp',
        imgAlt: 'Laser-cut medal hanger with runner silhouettes',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/3.webp',
        imgAlt: 'Battery fuse strip flat pattern with dimensions',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/devilTailSign.webp',
        imgAlt: 'Wall-mounted sign bracket with devil-tail scroll',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/firePitVerify1.webp',
        imgAlt: 'Flat-pack fire pit 3D model',
        fit: 'contain',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: '3D Printed Designs',
    description:
      'Functional and decorative 3D printed components for product customization, repairs, and prototyping, including replacement parts.',
    images: [
      {
        imgSrc: '/images/portfolio/111.webp',
        imgAlt: '3D printed replacement headband part for Shure headphones',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/printedHandle.webp',
        imgAlt: '3D printed handle with arched grip',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Misc Parts and Assemblies',
    description:
      'A variety of mechanical designs and detailed assemblies, ranging from consumer products to industrial components, including energy systems, sports equipment, and automated tooling parts.',
    images: [
      {
        imgSrc: '/images/portfolio/10.webp',
        imgAlt: 'Cutaway of a small shipping container fitted out for battery energy storage',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/7.webp',
        imgAlt: 'Electric car charging cable support clamp',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/roboBroom3.webp',
        imgAlt: 'Mechanical linkage assembly on aluminum extrusion',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/KurigTrayallYouNeedIsCoffee.webp',
        imgAlt: 'Custom tray for a Keurig coffee machine with raised lettering',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/exhaustTip.webp',
        imgAlt: 'Large custom exhaust tip with a diamond-pattern cutout sleeve',
      },
      {
        imgSrc: '/images/portfolio/1box.webp',
        imgAlt: 'Billet humidor with a scroll-pattern lid',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/noTipBevelVerify1.webp',
        imgAlt: 'Broadhead arrow tip with a threaded shank',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/frontFrame.webp',
        imgAlt: 'Tubular bicycle frame 3D model',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/foldingStandAssembly.webp',
        imgAlt: 'Folding sheet metal stand assembly with cam-lever clamps and rubber pads',
      },
    ],
  },
];

function Portfolio() {
  const [modalImages, setModalImages] = useState(portfolioSections[0].images);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && modalImageIndex !== null) {
        setModalImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modalImageIndex]);

  const openImageModal = (images, index) => {
    setModalImages(images);
    setModalImageIndex(index);
  };

  const closeImageModal = () => setModalImageIndex(null);

  const goToPrevious = (e) => {
    e.stopPropagation(); // Prevent closing modal when clicking arrow
    setModalImageIndex((prevIndex) =>
      prevIndex === 0 ? modalImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation(); // Prevent closing modal when clicking arrow
    setModalImageIndex((prevIndex) =>
      prevIndex === modalImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Seo path="/portfolio" />
      <div className=" pb-16">
        <section className="pt-10 px-6 bg-gray-100">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left">
                Portfolio
              </h1>
              <p className="text-base text-gray-700 text-left mb-2">
                22 years in the shop: fixture design and some CNC programming at
                a gauge and fixture shop, structural steel detailing, then
                commissioning robotic weld cells for Ford, Tesla, Magna and
                others. Since 2020 I&apos;ve done remote CAD for fab shops,
                machine shops and automation builders.
              </p>
              <p className="text-base text-gray-700 text-left mb-2">
                Fabrication drawings, sheet metal, weldments, fixtures, DXF/STEP
                files, and material and cut lists, drawn by someone who has seen
                what happens on the floor when a part is hard to build.
              </p>
              <p className="text-base text-gray-700 text-left mb-2">
                Here&apos;s some of that work.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 w-full">
          <div className="container mx-auto w-full">
            {portfolioSections.map(({ id, component, heading, description, images }) => {
              if (component === 'caseStudies') {
                return <CaseStudies key={id} className="mt-16 w-full" />;
              }
              if (component === 'featureScript') {
                return <FeatureScriptVideo key={id} className="mt-10 w-full" />;
              }
              return (
                <div key={id} id={id} className="mt-10 w-full">
                  <h2 className="text-2xl font-semibold">{heading}</h2>
                  {description ? (
                    <p className="mb-5 lg:max-w-[700px]">{description}</p>
                  ) : (
                    <div className="mb-5" />
                  )}
                  <div
                    key={id}
                    className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {images.map(({ imgSrc, imgAlt, fit, position }, ind) => (
                      <button
                        key={ind}
                        type="button"
                        onClick={() => openImageModal(images, ind)}
                        className="block w-full overflow-hidden rounded-lg shadow-md ring-1 ring-gray-900/5 transition duration-300 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                      >
                        <ImageTile src={imgSrc} alt={imgAlt} fit={fit} position={position} />
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Modal with Navigation */}
        {modalImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeImageModal}
          >
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-5 right-5 bg-red-500 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative flex items-center justify-center m-8 w-full">
              {/* Previous Arrow */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 text-white p-2 hover:text-gray-300 transition duration-300"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Image */}
              <img
                src={modalImages[modalImageIndex].imgSrc}
                alt={modalImages[modalImageIndex].imgAlt}
                className="max-h-[85vh] max-w-full rounded-lg bg-white object-contain shadow-lg"
              />

              {/* Next Arrow */}
              <button
                onClick={goToNext}
                className="absolute right-4 text-white p-2 hover:text-gray-300 transition duration-300"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      <CTA />
    </div>
  );
}

export default Portfolio;
