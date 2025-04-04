import React, { useState, useEffect } from 'react';
import PPBuyItNowBtn from '../Components/PPBuyItNowBtn';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Breadcrumbs from '../Components/Breadcrumbs';

function ProductPage({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="bg-white flex flex-col justify-center">
      <div>
        <Navbar />
        <Breadcrumbs />
      </div>
      {/* Breadcrumbs */}
      {/* <div className="sm:px-6 mt-16 sm:mt-32 flex flex-col lg:flex-row gap-6 w-full"></div> */}
      <div className="sm:px-6 mt-16 sm:mt-32 flex flex-col lg:flex-row gap-6 w-full">
        {/* Image Slideshow */}
        <div className="w-full lg:w-1/2 flex flex-row justify-center">
          <div className="relative w-full h-[100vw] sm:w-[400px] sm:h-[400px] sm:rounded-lg overflow-hidden bg-sky-50">
            <img
              src={product.images[currentImageIndex].imgSrc}
              alt={product.images[currentImageIndex].imgAlt}
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows (shown only if multiple images) */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-300 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75  transition duration-300"
                >
                  <FaChevronLeft />
                </button>

                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === product.images.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-300 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75  transition duration-300"
                >
                  <FaChevronRight />
                </button>
                {/* Image Counter */}
                {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-300 bg-opacity-50 text-white px-2 py-1 rounded-md text-sm">
                {currentImageIndex + 1} / {product.images.length}
              </div> */}
              </>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-4 lg:mt-0 lg:w-1/2 px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            ${product?.price}
          </h2>
          <h2 className="text-2xl font-bold text-gray-800">
            {product?.name || 'Product Name'}
          </h2>
          <p className="mt-2 text-gray-600">
            {product?.description ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          </p>
        </div>

        {/* Buy Button */}
      </div>

      <div className="my-6 flex justify-center">
        <PPBuyItNowBtn
          action={product.action}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        />
      </div>
    </div>
  );
}

export default ProductPage;
