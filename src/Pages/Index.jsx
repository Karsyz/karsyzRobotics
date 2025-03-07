import React, { useState } from "react";
import Modal from "react-modal";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import ValueProposition from "../Components/ValueProposition";
import CTA from "../Components/CTA";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import CTAModal from "../Components/CTAModal";

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
        <CTAModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </div>
    </div>
  );
}

export default Index;
