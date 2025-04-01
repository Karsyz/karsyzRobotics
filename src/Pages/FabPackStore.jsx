import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import CTA from '../Components/CTA';
import CTAModal from '../Components/CTAModal';
import PPBuyItNowBtn from '../Components/PPBuyItNowBtn';
import ProductModal from '../Components/ProductModal';
import ProductCard from '../Components/ProductCard';
import { products } from '../Data/products.js';

function FabPackStore() {
  const [modalProductId, setModalProductId] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && modalProductId !== null) {
        setModalProductId(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modalProductId]);

  const openModal = (id) => setModalProductId(id);
  const closeModal = () => setModalProductId(null);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />
      <div className="pt-16">
        {/* Offset for fixed navbar */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left">
                Fab Pack Store
              </h1>
              <h2 className="text-2xl text-gray-600 mb-6 text-left italic">
                Premium 3D Models & Drawings, Fabrication-Ready
              </h2>

              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 mb-4">
                  Explore expertly designed 3D models in our Premium Fabrication
                  Packs. Perfect for 3D printing and other fabrication methods.
                  Ideal for hobbyists, makers, and manufacturers.
                </p>
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Fab Packs Include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Clear, step-by-step instructions</li>
                  <li>STL Files for 3D Printing</li>
                  <li>3D Flat Patterns for sheet materials</li>
                  <li>Detailed drawings</li>
                  <li>Sources for materials and tools</li>
                  <li>Bill of materials</li>
                </ul>
                <p className="text-lg text-gray-700">
                  Need it unique? Customize any model! Book a call or send a
                  message to discuss your project.
                </p>
              </div>
              {/* <p className="text-lg text-gray-700 text-left">
                Explore our collection of expertly designed 3D models, perfect
                for 3D printing or other fabrication methods. Ideal for
                hobbyists, makers, and designers, these packages often include
                detailed drawings, clear instructions, and a bill of materials.
                Need something unique? All models are customizable! Book a call
                or send a message to discuss your project and make it your own!
              </p> */}
            </div>
          </div>
        </section>
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} openModal={openModal} />
              ))}
            </div>
          </div>
        </section>

        {/* Product Modal */}
        {modalProductId !== null && (
          <ProductModal
            modalProductId={modalProductId}
            products={products}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default FabPackStore;
