import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product, openModal, routeName }) {
  const { id, name, price, images, description } = product;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    const startScrolling = () => {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);
    };
    const stopScrolling = () => clearInterval(interval);

    const card = document.querySelector(`#product-card-${id}`);
    if (card) {
      card.addEventListener('mouseenter', startScrolling);
      card.addEventListener('mouseleave', () => {
        stopScrolling();
        setCurrentImageIndex(0);
      });
    }

    return () => {
      if (card) {
        card.removeEventListener('mouseenter', startScrolling);
        card.removeEventListener('mouseleave', stopScrolling);
      }
      clearInterval(interval);
    };
  }, [id, images.length]);

  const getRoute = (productName) => {
    const slug = productName.toLowerCase().split(' ').join('-').trim();
    return `/${routeMap}store/${slug}`;
  };

  return (
    <div
      id={`product-card-${id}`}
      onClick={() =>
        navigate(
          `/${routeName}store/${product.name
            .toLowerCase()
            .split(' ')
            .join('-')
            .trim()}`
        )
      }
      className="relative w-full sm:w-[300px] border border-gray-200 rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-200 cursor-pointer group"
    >
      <div className="relative w-full sm:w-[300px] h-[400px] sm:h-[300px] overflow-hidden">
        <img
          src={
            images[currentImageIndex].imgSrc || 'https://placehold.co/300x300'
          }
          alt={images[currentImageIndex].imgAlt || 'zomg the pic is missing :('}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      <div className="p-4">
        <span className="text-xl font-bold text-gray-800">
          {price !== 0 ? '$' + price.toFixed(2) : 'Free Sample'}
        </span>
        <h3 className="text-lg font-semibold text-gray-800 my-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4 w-full line-clamp-3">
          {description}
        </p>
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden group-hover:block text-lg font-semibold text-red-500"
          onClick={(e) => {
            e.stopPropagation();
            openModal(id);
          }}
        >
          Quick View
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
