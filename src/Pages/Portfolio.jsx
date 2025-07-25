import React, { useState, useEffect } from 'react';
import CTA from '../Components/CTA';
import { v4 as uuidv4 } from 'uuid';

const portfolioSections = [
  {
    id: uuidv4().slice(0, 8),
    heading: 'Weldments and Frames',
    description:
      'Design and detailing of welded structures and support frames used in mobile trailers, tables, and enclosures. This includes complex assemblies that require precision for structural integrity and on-site fabrication.',
    images: [
      {
        imgSrc: '/images/portfolio/trailerFrame.png',
        imgAlt: 'Image of the drain table assembly',
      },
      {
        imgSrc: '/images/portfolio/drainTableAssy.png',
        imgAlt: 'Image of the drain table assembly',
      },
      {
        imgSrc: '/images/portfolio/fishingHut1.png',
        imgAlt: 'Image of the drain table assembly',
      },
      {
        imgSrc: '/images/portfolio/fishingHut2.png',
        imgAlt: 'Image of the drain table assembly',
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
        imgSrc: '/images/portfolio/progress1.png',
        imgAlt: 'Perogola',
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
    heading: 'Misc Steel - Stairs, Handrails, Gates, Fences, etc',
    description:
      'Concept development and fabrication-ready detailing for architectural and safety components such as custom stairs, guardrails, handrails, gates, and other miscellaneous steelwork.',
    images: [
      {
        imgSrc: '/images/portfolio/boatRailConcept.PNG',
        imgAlt: 'Boat Guardrail Concept',
      },
      {
        imgSrc: '/images/portfolio/centerStringerStair.png',
        imgAlt: 'Center stringer stair made of steel',
      },
      {
        imgSrc: '/images/portfolio/singleStringerStairDrawing.png',
        imgAlt: 'Drawing of the center stringer stair made of steel',
      },
      {
        imgSrc: '/images/portfolio/guardRail.png',
        imgAlt: 'Drawing of the center stringer stair made of steel',
      },
      {
        imgSrc: '/images/portfolio/steelStairAndWallRail.png',
        imgAlt: 'Drawing of the center stringer stair made of steel',
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
        imgSrc: '/images/portfolio/sample.png',
        imgAlt: 'Image of the drain table assembly',
      },
      {
        imgSrc: '/images/portfolio/mowerDeck.png',
        imgAlt: 'Popsicle Tray',
      },
      {
        imgSrc: '/images/portfolio/5.png',
        imgAlt: 'Electric car charger base',
      },
      {
        imgSrc: '/images/portfolio/breakerActuator2.png',
        imgAlt: 'Circuit breaker actuator mechanism',
      },
      {
        imgSrc: '/images/portfolio/exhaustTip.png',
        imgAlt: 'Obnoxiously large exhaust tip',
      },
      {
        imgSrc: '/images/portfolio/offsetBracket.png',
        imgAlt: 'Offset sheetmetal bracket',
      },
      {
        imgSrc: '/images/portfolio/bcpFuelPumpBracket.png',
        imgAlt: 'BCP fuel pump bracket for toyota mr2',
      },
      {
        imgSrc: '/images/portfolio/fanShroud.png',
        imgAlt: 'BCP fuel pump bracket for toyota mr2',
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
        imgSrc: '/images/portfolio/2.png',
        imgAlt: 'Flow channels of a mold',
      },
      {
        imgSrc: '/images/portfolio/image-4.jpg',
        imgAlt: 'Deburring fixture',
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
        imgSrc: '/images/portfolio/3DVerify.png',
        imgAlt: 'Image of the drain table assembly',
      },
      {
        imgSrc: '/images/portfolio/3.png',
        imgAlt: 'Battery fuse strip',
      },
      {
        imgSrc: '/images/portfolio/devilTailSign.png',
        imgAlt: 'Battery fuse strip',
      },
      {
        imgSrc: '/images/portfolio/firePitVerify1.png',
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
        imgSrc: '/images/portfolio/KurigTrayallYouNeedIsCoffee.png',
        imgAlt: 'Stylized Keurig coffee machine tray',
      },
      {
        imgSrc: '/images/portfolio/111.png',
        imgAlt: 'Shure headphone repair part',
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
        imgSrc: '/images/portfolio/10.png',
        imgAlt: 'Small shipping container with battery energy storage',
      },
      {
        imgSrc: '/images/portfolio/1box.png',
        imgAlt: 'Billet humidor',
      },
      {
        imgSrc: '/images/portfolio/7.png',
        imgAlt: 'Electric car charging cable support clamp',
      },
      {
        imgSrc: '/images/portfolio/frontFrame.png',
        imgAlt: 'Bicycle frame',
      },
      {
        imgSrc: '/images/portfolio/mechDesignStuff.png',
        imgAlt: 'Fuel pump assembly',
      },
      {
        imgSrc: '/images/portfolio/noTipBevelVerify1.png',
        imgAlt: 'Precision arrow head',
      },
      {
        imgSrc: '/images/portfolio/roboBroom3.png',
        imgAlt: 'Mechanical assembly',
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
      <div className=" pb-16">
        <section className="pt-10 px-6 bg-gray-100">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left">
                Portfolio
              </h1>
              <p className="text-base text-gray-000 text-left mb-2">
                I'm interested in all kinds of manufacturing, but my heart is in
                metal fabrication.
              </p>
              <p className="text-base text-gray-000 text-left mb-2">
                I support metal fabrication shops of all sizes to create precise
                3D models, fabrication drawings, CNC data, and material ordering
                / cut lists, streamlining your workflow from concept to
                completion.
              </p>
              <p className="text-base text-gray-000 text-left mb-2">
                Here is some of the work I have done.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 w-full">
          <div className="container mx-auto w-full">
            {portfolioSections.map(({ id, heading, description, images }) => {
              return (
                <div key={id} className="mt-10 w-full">
                  <h2 className="text-2xl font-semibold">{heading}</h2>
                  <p className="mb-5 lg:max-w-[700px]">{description}</p>
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
                  fırs
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
