import { useModal } from '../Context/ModalContext';
import { classHelper } from '../Pages/Index';

const CTAModal = () => {
  const { closeModal, isOpen } = useModal();

  return (
    <div
      className={classHelper(
        'fixed bg-black/60 z-20 w-full h-screen transition-opacity duration-100',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="relative flex flex-row justify-center items-center h-[95vh]">
        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 h-[85%] p-8 relative">
          <iframe
            src="https://calendly.com/karsyz/discovery"
            className="w-full h-full inset-0 bg-opacity-50 rounded-md"
          />

          <button
            className="w-10 h-10 rounded-full bg-red-500 group absolute right-5 top-5"
            onClick={closeModal}
          >
            <span className="absolute left-1/2 top-1/2 w-4 h-0.5 bg-white rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
            <span className="absolute left-1/2 top-1/2 w-4 h-0.5 bg-white -rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTAModal;
