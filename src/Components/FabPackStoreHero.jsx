import { products } from '../Data/products.js';

function FabPackStoreHero() {
  const publishedProducts = products.filter((el) => el.published);
  const randProduct =
    publishedProducts[Math.floor(Math.random() * publishedProducts.length)];
  const randImage = randProduct.images[0];
  const randProductLink = `/fabpackstore/${randProduct.name
    .toLowerCase()
    .split(' ')
    .join('-')
    .trim()}`;

  return (
    <section className="bg--800 text-slate-800 py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-left mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4 whitespace-nowrap">
            Fab Pack Store
          </h1>
          <p className="text-lg md:text-xl mb-8 font-semibold">
            All the info you need to complete your project!
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Explore expertly designed 3D models in our Premium Fabrication
            Packs. Perfect for 3D printing and other fabrication methods. Ideal
            for hobbyists, makers, and manufacturers.
          </p>
          {/* <button
            onClick={openModal}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Book a call now to get started!
          </button> */}
        </div>
        {/* Image Section */}
        <div className="overflow-hidden">
          <a href={randProductLink}>
            <img
              src={randImage.imgSrc}
              alt={randImage.imgAlt}
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="w-full text-center mt-2">Featured Pack</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FabPackStoreHero;
