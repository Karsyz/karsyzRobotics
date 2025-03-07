import Modal from "react-modal";
import { InlineWidget } from "react-calendly";
import { FaRegCircleXmark } from "react-icons/fa6";

Modal.setAppElement("#root");

const CTAModal = ({modalIsOpen, closeModal}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="pt-16 w-full h-full flex flex-row justify-center items-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="relative w-full h-full">
        <InlineWidget
          url="https://calendly.com/karsyz/discovery"
          styles={{
            height: "100%", // Ensure iframe fills container
            width: "100%",
            border: "none", // Clean up borders if needed
          }}
        />
        <FaRegCircleXmark
          onClick={closeModal}
          className="absolute w-16 h-16 top-2 right-2 text-red-500 px-3 py-1 rounded-md cursor-pointer"
        />
      </div>
    </Modal>
  );
};

export default CTAModal;
