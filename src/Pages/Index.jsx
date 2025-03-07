import React, { useState } from "react";
import Modal from "react-modal";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import ValueProposition from "../Components/ValueProposition";
import CTA from "../Components/CTA";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import { InlineWidget } from "react-calendly";
import { FaRegCircleXmark } from "react-icons/fa6";

Modal.setAppElement("#root");

function Index() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />
      <div className="pt-16">
        <Hero openModal={openModal} />
        <Services />
        <Testimonials />
        <ValueProposition />
        <CTA openModal={openModal} />
        <Contact />
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
      </div>
    </div>
  );
}

export default Index;
