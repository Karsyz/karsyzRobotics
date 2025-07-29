import { useModal } from '../Context/ModalContext';
import { classHelper } from '../Pages/Index';

function CTA({background = 'bg-white', showHeading = true}) {
  console.log(showHeading)
  const { openModal } = useModal();
  return (
    <section className={classHelper('py-16 px-6 text-center', background)}>
      {showHeading && (
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Ready to Get Started?
        </h2>
      )}
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
