import React, { useState, useEffect } from 'react';
import CTA from '../Components/CTA';
import Seo from '../Components/Seo';
import CaseStudies from '../Components/CaseStudies';
import FeatureScriptVideo from '../Components/FeatureScriptVideo';
import { v4 as uuidv4 } from 'uuid';

// Order per approved copy (2026-09-29): industrial work first (weldments,
// structural steel, sheet metal, fixtures, case studies), hobby pieces last.
const portfolioSections = [
  {
    id: uuidv4().slice(0, 8),
    heading: 'Weldments and Frames',
    description:
      'Design and detailing of welded structures and support frames used in mobile trailers, tables, and enclosures. This includes complex assemblies that require precision for structural integrity and on-site fabrication.',
    images: [
      {
        imgSrc: '/images/portfolio/trailerFrame.png',
        imgAlt: 'Welded steel trailer frame 3D model',
      },
      {
        imgSrc: '/images/portfolio/drainTableAssy.png',
        imgAlt: 'Fabrication drawing of a drain table assembly',
      },
      {
        imgSrc: '/images/portfolio/fishingHut1.png',
        imgAlt: 'Fabrication drawing of an ice fishing hut frame',
      },
      {
        imgSrc: '/images/portfolio/fishingHut2.png',
        imgAlt: 'Ice fishing hut frame 3D model',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Structural Steel',
    description:
      'Custom fabrication drawings and detailing for large-scale structural steel projects including beams, rolled sections, and material lists for buildings and outdoor structures like pergolas.',
    images: [
      {
        imgSrc: '/images/portfolio/progress1.PNG',
        imgAlt: 'Steel pergola frame 3D model',
      },
      {
        imgSrc: '/images/portfolio/rolledBeamDetails.png',
        imgAlt: 'A fabrication drawing of a rolled HSS beam',
      },
      {
        imgSrc: '/images/portfolio/bigBeamDrawing.png',
        imgAlt: 'A fabrication drawing of a large steel beam',
      },
      {
        imgSrc: '/images/portfolio/materialList.png',
        imgAlt: 'A material list',
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
        imgSrc: '/images/portfolio/sample.PNG',
        imgAlt: 'Sheet metal shelf bracket with lightening holes',
      },
      {
        imgSrc: '/images/portfolio/mowerDeck.png',
        imgAlt: 'Sheet metal mower deck 3D model',
      },
      {
        imgSrc: '/images/portfolio/5.PNG',
        imgAlt: 'Electric car charger base',
      },
      {
        imgSrc: '/images/portfolio/breakerActuator2.PNG',
        imgAlt: 'Circuit breaker actuator mechanism',
      },
      {
        imgSrc: '/images/portfolio/offsetBracket.png',
        imgAlt: 'Offset sheet metal bracket',
      },
      {
        imgSrc: '/images/portfolio/fanShroud.png',
        imgAlt: 'Sheet metal dual fan shroud',
      },
      {
        imgSrc: '/images/portfolio/sheetMetalTrays.png',
        imgAlt: 'Set of four nesting formed sheet metal trays',
      },
      {
        imgSrc: '/images/portfolio/sheetMetalHangingRack.png',
        imgAlt: 'Laser-cut and formed sheet metal hanging rack',
      },
      {
        imgSrc: '/images/portfolio/perforatedSheetMetalStand.png',
        imgAlt: 'Formed sheet metal stand with hex-perforated top',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Jigs, Fixtures, Molds, Tools',
    description:
      'Custom tooling, jigs, and mold components designed for manufacturing workflows and part consistency. Includes precision fixturing and mold flow considerations.',
    images: [
      {
        imgSrc: '/images/portfolio/2.PNG',
        imgAlt: 'Flow channels of a mold',
      },
      {
        imgSrc: '/images/portfolio/image-4.jpg',
        imgAlt: 'Deburring fixture',
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
        imgSrc: '/images/portfolio/boatRailConcept.PNG',
        imgAlt: 'Boat guardrail concept',
      },
      {
        imgSrc: '/images/portfolio/centerStringerStair.png',
        imgAlt: 'Center stringer stair made of steel',
      },
      {
        imgSrc: '/images/portfolio/singleStringerStairDrawing.png',
        imgAlt: 'Fabrication drawing of the steel center stringer stair',
      },
      {
        imgSrc: '/images/portfolio/guardRail.png',
        imgAlt: 'Steel guardrail 3D model',
      },
      {
        imgSrc: '/images/portfolio/steelStairAndWallRail.png',
        imgAlt: 'Steel stair with wall-mounted handrail 3D model',
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
        imgSrc: '/images/portfolio/3DVerify.PNG',
        imgAlt: 'Laser-cut medal hanger with runner silhouettes',
      },
      {
        imgSrc: '/images/portfolio/3.PNG',
        imgAlt: 'Battery fuse strip flat pattern with dimensions',
      },
      {
        imgSrc: '/images/portfolio/devilTailSign.PNG',
        imgAlt: 'Wall-mounted sign bracket with devil-tail scroll',
      },
      {
        imgSrc: '/images/portfolio/firePitVerify1.PNG',
        imgAlt: 'Flat pack fire pit',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: '3D Printed Designs',
    description:
      'Functional and aesthetic 3D printed components for product customization, repairs, and prototyping. Includes branded accessories and replacement parts.',
    images: [
      {
        imgSrc: '/images/portfolio/111.png',
        imgAlt: 'Shure headphone repair part',
      },
      {
        imgSrc: '/images/portfolio/printedHandle.png',
        imgAlt: '3D printed handle with arched grip',
      },
      {
        imgSrc: '/images/portfolio/spokedWheel.png',
        imgAlt: '3D printed replacement mixing paddle for a Pampered Chef batter mixer',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Misc Parts and Assemblies',
    description:
      'A variety of mechanical designs and detailed assemblies, ranging from consumer products to industrial components. Includes energy systems, sports equipment, and automated tooling parts.',
    images: [
      {
        imgSrc: '/images/portfolio/10.PNG',
        imgAlt: 'Small shipping container with battery energy storage',
      },
      {
        imgSrc: '/images/portfolio/7.PNG',
        imgAlt: 'Electric car charging cable support clamp',
      },
      {
        imgSrc: '/images/portfolio/roboBroom3.PNG',
        imgAlt: 'Mechanical linkage assembly on aluminum extrusion',
      },
      {
        imgSrc: '/images/portfolio/KurigTrayallYouNeedIsCoffee.PNG',
        imgAlt: 'Stylized Keurig coffee machine tray',
      },
      {
        imgSrc: '/images/portfolio/exhaustTip.PNG',
        imgAlt: 'Obnoxiously large exhaust tip',
      },
      {
        imgSrc: '/images/portfolio/1box.PNG',
        imgAlt: 'Billet humidor',
      },
      {
        imgSrc: '/images/portfolio/noTipBevelVerify1.PNG',
        imgAlt: 'Precision arrow head',
      },
      {
        imgSrc: '/images/portfolio/frontFrame.PNG',
        imgAlt: 'Bicycle frame',
      },
      {
        imgSrc: '/images/portfolio/foldingStandAssembly.png',
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
                I'm interested in all kinds of manufacturing, but my heart is in
                metal fabrication.
              </p>
              <p className="text-base text-gray-700 text-left mb-2">
                I support metal fabrication shops of all sizes with precise
                3D models, fabrication drawings, CNC data, and material ordering
                / cut lists, streamlining your workflow from concept to
                completion.
              </p>
              <p className="text-base text-gray-700 text-left mb-2">
                Here is some of the work I have done.
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
                    {images.map(({ imgSrc, imgAlt }, ind) => {
                      return (
                        <img
                          key={ind}
                          src={imgSrc}
                          alt={imgAlt}
                          loading="lazy"
                          className="bg-white w-full h-[300px] object-contain rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                          onClick={() => openImageModal(images, ind)}
                        />
                      );
                    })}
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
                className="rounded-lg shadow-lg max-h-[800px] w-auto"
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
