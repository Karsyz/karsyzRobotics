import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Testimonials from '../Components/Testimonials';
import ValueProposition from '../Components/ValueProposition';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Testimonials />
      <ValueProposition />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
