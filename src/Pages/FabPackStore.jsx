import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import ProductModal from '../Components/ProductModal';
import ProductCard from '../Components/ProductCard';
import { products } from '../Data/products.js';
import Breadcrumbs from '../Components/Breadcrumbs.jsx';
import StoreHero from '../Components/StoreHero.jsx';
import StoreOffering from '../Components/StoreOffering.jsx';

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
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Breadcrumbs />
      <div className="pt-16">
        {/* Offset for fixed navbar */}

        <StoreHero
          products={products}
          storeTitle={'Fab Pack Store'}
          storeHeadline={'Build Smarter with Premium 3D CAD Models'}
          storeDescription={
            'Crafted by an industry expert, our Fabrication Packs deliver ready-to-use STL, DXF, and STEP files for 3D printing, CNC machining, woodworking, and metal fabrication. Save time, boost precision, and bring your ideas to life—perfect for hobbyists, makers, and small manufacturers.'
          }
          storeCta={'Browse Now or Grab a Free Sample Today!'}
        />

        <StoreOffering includedItems={[1, 2, 3, 4]} offerName={'Fab Packs'} />

        <section id="products" className="py-16 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center w-full">
            Available Fab Packs:
          </h2>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center gap-y-10">
              {products
                .filter((el) => el.published === true)
                .map((product, index, filteredProducts) => {
                  const totalItems = filteredProducts.length;
                  const isOverflowItem = index >= 3; // Items beyond the first row (5 items)
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      openModal={openModal}
                      className={isOverflowItem ? 'col-start-2' : ''}
                      routeName={'fabpack'}
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
            products={products}
            closeModal={closeModal}
            includedItems={[1,2,3,4]}
            routeName={'model'}
          />
        )}
      </div>
    </div>
  );
}

export default FabPackStore;
