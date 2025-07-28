import { useModal } from '../Context/ModalContext';

function Hero() {
  const { openModal } = useModal();
  return (
    <section className="relative bg-indigo-900 text-slate-50 bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat min-h-[600px]">

      <div className="absolute w-full h-full bg-black/40 flex justify-center sm:justify-start sm:pl-[20vw]">
        <div className="flex items-center justify-center">
          {/* Text Section */}
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4 !leading-tight">
              Bring your ideas to life
            </h1>
            <p className="text-lg md:text-xl mb-8 font-semibold">
              Professional 3D modeling and drafting
            </p>
            <button
              onClick={openModal}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-xl "
            >
              Book a call now to get started!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
