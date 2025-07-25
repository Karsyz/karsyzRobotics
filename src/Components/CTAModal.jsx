import Modal from "react-modal";
import { InlineWidget } from "react-calendly";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useModal } from "../Context/ModalContext";

Modal.setAppElement("#root");

const CTAModal = () => {
  const { closeModal, isOpen} = useModal();
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="pt-16 w-full h-full flex flex-row justify-center items-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="relative w-full h-full">
        <InlineWidget
          url="https://calendly.com/karsyz/discovery"
          styles={{
            height: "100%",
            width: "100%",
            border: "none",
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
