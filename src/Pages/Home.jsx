import Modal from 'react-modal';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Testimonials from '../Components/Testimonials';
import ValueProposition from '../Components/ValueProposition';
import CTA from '../Components/CTA';
import Contact from '../Components/Contact';

Modal.setAppElement('#root');

function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Testimonials />
      <ValueProposition />
      <CTA />
      <Contact />
    </div>
  );
}

export default Home;
