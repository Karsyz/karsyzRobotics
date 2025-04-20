import { products } from '../Data/products.js';
import { Link } from 'react-router-dom';

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

  const handleScrollToFabPacks = () => {
    const fabPacksSection = document.getElementById('fabpacks');
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
            Fab Pack Store
          </h1>
          <p className="text-lg md:text-xl mb-8 font-semibold">
            Build Smarter with Premium 3D CAD Models
          </p>
          <p className="mb-8">
            Crafted by an industry expert, our Fabrication Packs deliver
            ready-to-use STL, DXF, and STEP files for 3D printing, CNC
            machining, woodworking, and metal fabrication. Save time, boost
            precision, and bring your ideas to life—perfect for hobbyists,
            makers, and small manufacturers.
          </p>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 font-semibold rounded-lg transition duration-300"
            onClick={handleScrollToFabPacks}
          >
            Browse Now or Grab a Free Sample Today!
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
            <p className="absolute z-50 bottom-5 right-5 font-semibold">
              Featured Fab Pack
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FabPackStoreHero;
