import { useModal } from '../Context/ModalContext';

function Hero() {
  const { openModal } = useModal();
  return (
    <section className="bg-indigo-900 text-white py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4">
            Bring your ideas to life
          </h1>
          <p className="text-lg md:text-xl mb-8">
            with professional 3D modeling and drafting
          </p>
          <button
            onClick={openModal}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-xl "
          >
            Book a call now to get started!
          </button>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/hero.jpg" // Replace with your custom image URL
            alt="Karsyz Robotics working with a client on a 3D design"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
