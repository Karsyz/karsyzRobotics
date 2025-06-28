import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import CTA from '../Components/CTA';
import CTAModal from '../Components/CTAModal';

function Portfolio() {
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const [CTAModalIsOpen, setCTAModalIsOpen] = useState(false);
  const openCTAModal = () => setCTAModalIsOpen(true);
  const closeCTAModal = () => setCTAModalIsOpen(false);

  const projects = [
    { src: '/images/portfolio/boatRailConcept.PNG', alt: '' },
    // { src: '/images/portfolio/seatPlate1.png', alt: '' },
    // { src: '/images/portfolio/1.png', alt: '' },
    { src: '/images/portfolio/sample.png', alt: '' },
    { src: '/images/portfolio/progress1.png', alt: '' },
    {
      src: '/images/portfolio/asdfasdfsadfadsfasfdasdffasdf.png',
      alt: '',
    },
    { src: '/images/portfolio/3DVerify.png', alt: '' },
    { src: '/images/portfolio/mkarsSampleDetail2.jpg', alt: '' },
    { src: '/images/portfolio/10.png', alt: '' },
    { src: '/images/portfolio/111.png', alt: '' },
    { src: '/images/portfolio/2.png', alt: '' },
    { src: '/images/portfolio/2tray.png', alt: '' },
    { src: '/images/portfolio/3.png', alt: '' },
    { src: '/images/portfolio/1box.png', alt: '' },
    // { src: '/images/portfolio/3d model verify.png', alt: '' },
    { src: '/images/portfolio/5.png', alt: '' },
    { src: '/images/portfolio/7.png', alt: '' },
    // { src: '/images/portfolio/binFlag1.png', alt: '' },
    { src: '/images/portfolio/breakerActuator2.png', alt: '' },
    { src: '/images/portfolio/cheeseBuilding5.png', alt: '' },
    // { src: '/images/portfolio/coverClamp.png', alt: '' },
    { src: '/images/portfolio/devilTailSign.png', alt: '' },
    { src: '/images/portfolio/exhaustTip.png', alt: '' },
    { src: '/images/portfolio/firePitVerify1.png', alt: '' },
    { src: '/images/portfolio/frontFrame.png', alt: '' },
    { src: '/images/portfolio/guitar1.png', alt: '' },
    // { src: '/images/portfolio/houseExample1.png', alt: '' },
    { src: '/images/portfolio/image-4.jpg', alt: '' },
    {
      src: '/images/portfolio/KurigTrayallYouNeedIsCoffee.png',
      alt: '',
    },
    { src: '/images/portfolio/mechDesignStuff.png', alt: '' },
    { src: '/images/portfolio/noTipBevelVerify1.png', alt: '' },
    { src: '/images/portfolio/roboBroom3.png', alt: '' },
  ];

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && modalImageIndex !== null) {
        setModalImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modalImageIndex]);

  const openModal = (index) => setModalImageIndex(index);
  const closeModal = () => setModalImageIndex(null);

  const goToPrevious = (e) => {
    e.stopPropagation(); // Prevent closing modal when clicking arrow
    setModalImageIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation(); // Prevent closing modal when clicking arrow
    setModalImageIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />
      <div className="pt-16">
        {/* Offset for fixed navbar */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left">
                Portfolio
              </h1>
              <h2 className="text-2xl text-gray-600 mb-6 text-left italic">
                Turning Vision into Precision
              </h2>
              <p className="text-lg text-gray-700 text-left">
                I specialize in transforming ideas into detailed 3D models and
                CAD solutions, working on projects ranging from product
                prototypes to architectural designs. My focus is on precision,
                collaboration, and delivering results that exceed expectations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-[300px] object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modified Modal with Navigation */}
        {modalImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
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
                src={projects[modalImageIndex].src}
                alt={projects[modalImageIndex].alt}
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
      <CTA openModal={openCTAModal} />
      <CTAModal modalIsOpen={CTAModalIsOpen} closeModal={closeCTAModal} />
    </div>
  );
}

export default Portfolio;
