function ProductCard({ product, openModal }) {
  const {
    id,
    name,
    price,
    images,
    description,
    inStock = true,
    discount = 0,
  } = product;

  const discountedPrice =
    discount > 0 ? (price - (price * discount) / 100).toFixed(2) : null;

  return (
    <div
      onClick={() => openModal(product.id)}
      className="w-[300px] border border-gray-200 rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-200"
    >
      <div className="relative w-full h-[300px]">
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

        {/* <button
            onClick={() => openModal(product.id)}
          className={`w-full py-2 rounded-md text-white transition-colors duration-200 ${
            inStock
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!inStock}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button> */}
      </div>
    </div>
  );
}

export default ProductCard;
