import Seo from '../Components/Seo';
import HeroV2 from '../Components/HeroV2';
import Services from '../Components/Services';
import Testimonials from '../Components/Testimonials';
import ValueProposition from '../Components/ValueProposition';
import Contact from '../Components/Contact';

function Home() {
  return (
    <>
      <Seo path="/" />
      <HeroV2 />
      <Services />
      <Testimonials />
      <ValueProposition />
      <Contact />
    </>
  );
}

export default Home;
