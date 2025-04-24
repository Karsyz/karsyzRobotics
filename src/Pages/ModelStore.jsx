import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar.jsx';
import ProductModal from '../Components/ProductModal.jsx';
import ProductCard from '../Components/ProductCard.jsx';
import { models } from '../Data/models.js';
import Breadcrumbs from '../Components/Breadcrumbs.jsx';
import StoreHero from '../Components/StoreHero.jsx';
import StoreOffering from '../Components/StoreOffering.jsx';

function ModelStore() {
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
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Breadcrumbs />
      <div className="pt-16">
        {/* Offset for fixed navbar */}

        <StoreHero
          products={models}
          storeTitle={'Model Store'}
          storeHeadline={'Build Smarter with Premium 3D CAD Models'}
          storeDescription={
            'Crafted by an industry expert, our Fabrication Packs deliver ready-to-use Fusion f3d files for manufacturing. Save time with parameterized models, boost precision, and bring your ideas to life—perfect for hobbyists, makers, and small manufacturers.'
          }
          storeCta={'Browse Now'}
        />

        <StoreOffering includedItems={[2, 5]} offerName={'Models'} />

        <section id="products" className="py-16 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center w-full">
            Available Models:
          </h2>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center gap-y-10">
              {models
                .filter((el) => el.published === true)
                .map((model, index, filteredModels) => {
                  const totalItems = filteredModels.length;
                  const isOverflowItem = index >= 3; // Items beyond the first row (5 items)
                  return (
                    <ProductCard
                      key={model.id}
                      product={model}
                      openModal={openModal}
                      className={isOverflowItem ? 'col-start-2' : ''}
                      routeName={'model'}
                    />
                  );
                })}
            </div>
          </div>
        </section>

        {/* Product Modal */}
        {modalProductId !== null && (
          <ProductModal
            modalProductId={modalProductId}
            products={models}
            closeModal={closeModal}
            includedItems={[2,5]}
            routeName={'model'}
          />
        )}
      </div>
    </div>
  );
}

export default ModelStore;
