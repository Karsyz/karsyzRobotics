import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import CTA from '../Components/CTA';
import CTAModal from '../Components/CTAModal';
import PPBuyItNowBtn from '../Components/PPBuyItNowBtn';
import ProductModal from '../Components/ProductModal';

function Models() {
  const [modalViewId, setModalViewId] = useState(null);

  const models = [
    {
      id: 1,
      price: 10,
      name: 'Tower of Chaos Dice Tower',
      description:
        'Elevate your gaming experience with the Tower of Chaos - the ultimate dice tower for tabletop enthusiasts! This meticulously designed 3D model package includes STL files for all components, detailed fabrication drawings, and a complete parts list, making assembly a breeze. Crafted for chaos and precision, this tower ensures every roll is unpredictable yet perfectly executed. Download, print, and build your own Tower of Chaos - where every roll becomes an adventure!',
      images: [
        { imgSrc: '/images/models/resized/1a.PNG', imgAlt: 'dice tower' },
        {
          imgSrc: '/images/models/resized/1b.PNG',
          imgAlt: 'dice tower section',
        },
      ],
      action: 'EQPT95CAUB4A8',
    },
  ];

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && modalViewId !== null) {
        setModalViewId(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modalViewId]);

  const openModal = (id) => setModalViewId(id);
  const closeModal = () => setModalViewId(null);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />
      <div className="pt-16">
        {/* Offset for fixed navbar */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left">
                3D Models
              </h1>
              <h2 className="text-2xl text-gray-600 mb-6 text-left italic">
                Premium 3D Models for 3D Printing & Fabrication
              </h2>
              <p className="text-lg text-gray-700 text-left">
                Explore our collection of expertly designed 3D models, perfect
                for 3D printing or other fabrication methods. Ideal for
                hobbyists, makers, and designers, these packages often include
                detailed drawings, clear instructions, and a bill of materials.
                Need something unique? All models are customizable at an extra
                cost—book a call or send a message to discuss your project and
                make it your own!
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {models.map((model, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => openModal(model.id)}
                >
                  <img
                    src={model.images[0].imgSrc}
                    alt={model.images[0].imgAlt}
                    className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Modal */}
        {modalViewId !== null && (
          <ProductModal
            modalViewId={modalViewId}
            models={models}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Models;
