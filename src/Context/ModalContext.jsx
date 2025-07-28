// ModalContext.js
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    console.log('open');
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log('close');
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, modalContent, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
