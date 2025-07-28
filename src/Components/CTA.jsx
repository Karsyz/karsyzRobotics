import { useModal } from "../Context/ModalContext";

function CTA() {
  const { openModal} = useModal();
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Ready to Get Started?
      </h2>
      <button
        onClick={openModal}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 cursor-pointer"
      >
        Book Your Call Now
      </button>
    </section>
  );
}

export default CTA;
