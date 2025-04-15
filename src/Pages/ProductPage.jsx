import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PPBuyItNowBtn from '../Components/PPBuyItNowBtn';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Breadcrumbs from '../Components/Breadcrumbs';
import {
  FaCube,
  FaShapes,
  FaRulerCombined,
  FaClipboardList,
} from 'react-icons/fa';

function ProductPage({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ensure image URL is valid with a fallback
  const imageUrl = product.images[0]?.imgSrc
    ? `https://karsyzrobotics.com${product.images[0].imgSrc}`
    : 'https://karsyzrobotics.com/images/karsyzLogo.png';

  const imageWidth =
    imageUrl === 'https://karsyzrobotics.com/images/karsyzLogo.png'
      ? '630'
      : '600';

  return (
    <div className="bg-white flex flex-col justify-center">
      {/* Meta Tags with Helmet */}
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />

        {/* Open Graph Meta Tags (for Facebook, LinkedIn, Discord, etc.) */}
        <meta property="og:title" content={product.headline} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content={imageWidth} />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:alt"
          content={product.images[0]?.imgAlt || 'Karsyz Robotics product image'}
        />
        <meta
          property="og:url"
          content={`https://karsyzrobotics.com/fabpackstore/${product.name
            .toLowerCase()
            .split(' ')
            .join('-')}`}
        />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="Karsyz Robotics" />

        {/* Twitter Card Meta Tags (for X) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.headline} />
        <meta
          name="twitter:description"
          content={
            product.description.length > 200
              ? `${product.description.substring(0, 197)}...`
              : product.description
          }
        />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <div>
        <Navbar />
        <Breadcrumbs />
      </div>
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
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-300 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition duration-300"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === product.images.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-300 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition duration-300"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-4 lg:mt-0 lg:w-1/2 px-4 flex flex-col">
          <div className="">
            <p className="text-xl font-bold text-gray-800 mb-1">
              ${product?.price}
            </p>
            <h2 className="text-2xl font-bold text-gray-800">
              {product?.name || 'Product Name'}
            </h2>
            <p className="mt-2 text-gray-600">
              {product?.description ||
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            </p>
          </div>

          <div className="text-center space-y-8 mt-8">
            {/* First Row: 4 Icons */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center w-full">
                <FaCube className="w-12 h-12 mb-4 bg-transparent drop-shadow-md text-green-600" />
                <h3 className="text-md font-bold text-gray-800 mb-2 max-w-xs">
                  STL/STEP Files for 3D Printing and Customizing
                </h3>
              </div>
              <div className="flex flex-col items-center w-full">
                <FaShapes className="w-12 h-12 mb-4 bg-transparent drop-shadow-md text-orange-500" />
                <h3 className="text-md font-bold text-gray-800 mb-2 max-w-xs">
                  DXF Files for sheet materials
                </h3>
              </div>
              <div className="flex flex-col items-center w-full">
                <FaRulerCombined className="w-12 h-12 mb-4 bg-transparent drop-shadow-md text-purple-600" />
                <h3 className="text-md font-bold text-gray-800 mb-2 max-w-xs">
                  Fabrication Drawings
                </h3>
              </div>
              <div className="flex flex-col items-center w-full">
                <FaClipboardList className="w-12 h-12 mb-4 bg-transparent drop-shadow-md text-red-500" />
                <h3 className="text-md font-bold text-gray-800 mb-2 max-w-xs">
                  Bill of Materials
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Button */}
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
