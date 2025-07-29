import Hero from '../Components/Hero';
import HeroV2 from '../Components/HeroV2';
import Services from '../Components/Services';
import Testimonials from '../Components/Testimonials';
import ValueProposition from '../Components/ValueProposition';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="">
      {/* <Hero /> */}
      <HeroV2 />
      <Services />
      <Testimonials />
      <ValueProposition />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
