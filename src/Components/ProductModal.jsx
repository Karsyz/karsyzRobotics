import React, { useState, useEffect } from 'react';
import PPBuyItNowBtn from '../Components/PPBuyItNowBtn';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

function ProductModal({ modalProductId, products, closeModal }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const selectedModel = products.find((item) => item.id === modalProductId);

  if (!selectedModel) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-start lg:items-center justify-center z-50 overflow-y-scroll"
      onClick={closeModal}
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-6 right-6 lg:top-4 lg:right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300 z-10"
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

      <div
        className="relative bg-white rounded-lg shadow-xl m-4 w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Content */}
        <div className="p-6 flex flex-col lg:flex-row gap-6 w-full">
          {/* Image Slideshow */}
          <div className="lg:w-1/2 flex flex-row justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-lg overflow-hidden">
              <img
                src={selectedModel.images[currentImageIndex].imgSrc}
                alt={selectedModel.images[currentImageIndex].imgAlt}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows (shown only if multiple images) */}
              {selectedModel.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === 0 ? selectedModel.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-600 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition duration-300"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === selectedModel.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-600 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition duration-300"
                  >
                    <FaChevronRight />
                  </button>
                  {/* Image Counter */}
                  {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-600 bg-opacity-50 text-white px-2 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedModel.images.length}
                </div> */}
                </>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className=" mt-4 lg:mt-0 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              ${selectedModel?.price}
            </h2>
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedModel?.name || 'Product Name'}
            </h2>
            <p className="mt-2 text-gray-600">
              {selectedModel?.description ||
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            </p>

            <p className="text-center sm:static mt-8">
              <Link
                to={`/fabpackstore/${selectedModel.name
                  .toLowerCase()
                  .split(' ')
                  .join('-')
                  .trim()}`}
                className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
              >
                View full details
              </Link>
            </p>
          </div>
        </div>

        {/* Buy Button */}
        <div className="my-6 flex justify-center">
          <PPBuyItNowBtn
            action={selectedModel.action}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
