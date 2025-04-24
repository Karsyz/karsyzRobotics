import { Link } from 'react-router-dom';

function StoreHero({
  products,
  storeTitle,
  storeHeadline,
  storeDescription,
  storeCta,
}) {
  const publishedProducts = products.filter((el) => el.published);
  const randProduct =
    publishedProducts[Math.floor(Math.random() * publishedProducts.length)];
  const randImage = randProduct.images[0];
  const randProductLink = `/fabpackstore/${randProduct.name
    .toLowerCase()
    .split(' ')
    .join('-')
    .trim()}`;

  const handleScrollToFabPacks = () => {
    const fabPacksSection = document.getElementById('products');
    if (fabPacksSection) {
      fabPacksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg--800 text-slate-800 py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-left mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4 whitespace-nowrap">
            {storeTitle}
          </h1>
          <p className="text-lg md:text-xl mb-8 font-semibold">
            {storeHeadline}
          </p>
          <p className="mb-8">{storeDescription}</p>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 font-semibold rounded-lg transition duration-300"
            onClick={handleScrollToFabPacks}
          >
            {storeCta}
          </button>
        </div>
        {/* Image Section */}
        <div className="overflow-hidden relative">
          <a href={randProductLink}>
            <img
              src={randImage.imgSrc}
              alt={randImage.imgAlt}
              className="w-full h-full object-cover rounded-lg z-10"
            />
            <p className="absolute z-20 bottom-5 right-5 font-semibold">
              Featured Fab Pack
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default StoreHero;
