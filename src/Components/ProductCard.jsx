function ProductCard({ product, openModal }) {
  const { id, name, price, images, description, discount = 0 } = product;

  const discountedPrice =
    discount > 0 ? (price - (price * discount) / 100).toFixed(2) : null;

  return (
    <div
      onClick={() => openModal(id)}
      className="w-full sm:w-[300px] border border-gray-200 rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-200"
    >
      <div className="relative w-full aspect-square">
        <img
          src={images[0].imgSrc || 'https://placehold.co/300x300'}
          alt={images[0].imgAlt || 'zomg the pic is missing :('}
          className="w-full h-full object-cover"
        />
        {discount > 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4 h-10 overflow-hidden">
          {description}
        </p>

        <div className="mb-4">
          {discount > 0 ? (
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-red-500">
                ${discountedPrice}
              </span>
              <span className="text-base text-gray-500 line-through">
                ${price.toFixed(2)}
              </span>
            </div>
          ) : (
            <span className="text-xl font-bold text-gray-800">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
