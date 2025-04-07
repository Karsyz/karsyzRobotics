import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar.jsx';
import ProductModal from '../Components/ProductModal.jsx';
import ProductCard from '../Components/ProductCard.jsx';
import { products } from '../Data/products.js';
import Breadcrumbs from '../Components/Breadcrumbs.jsx';
import { freebies } from '../Data/freebies.js';

function Freebies() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Breadcrumbs />
      <div className="pt-16">
        <section className="py-16 px-6 ">
          <div className='flex flex-col items-center mb-12'>
            <h2 className="text-3xl font-bold text-gray-800 text-center w-full">
              Free Models
            </h2>
            <p>
              Clicking the cards below will download the stl file as well as
              open an affiliate link to amazon in a new tab. Thanks for your support.
            </p>
          </div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center gap-y-10">
              {freebies.map((model) => {
                return (
                  <a
                    href={model.href}
                    download={`/freebies/${model.href}`}
                    key={model.id}
                    onClick={(e) => {
                      window.open(model.affHref, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <div
                      id={`product-card-${model.id}`}
                      className="relative w-full sm:w-[300px] border border-gray-200 rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-200 cursor-pointer group flex flex-col h-full"
                    >
                      <div className="relative w-full sm:w-[300px] h-[400px] sm:h-[300px] overflow-hidden">
                        <img
                          src={model.imgSrc || 'https://placehold.co/300x300'}
                          alt={model.imgAlt || 'zomg the pic is missing :('}
                          className="w-full h-full object-cover transition-opacity duration-300"
                        />
                      </div>

                      <div className="p-4 grow">
                        <h3 className="text-lg font-semibold text-gray-800 my-2">
                          {model.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 w-full">
                          {model.description}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Freebies;
