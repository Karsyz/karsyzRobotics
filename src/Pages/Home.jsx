import Seo from '../Components/Seo';
import HeroV2 from '../Components/HeroV2';
import Services from '../Components/Services';
import CaseStudies from '../Components/CaseStudies';
import AboutTeaser from '../Components/AboutTeaser';
import Testimonials from '../Components/Testimonials';
import ValueProposition from '../Components/ValueProposition';
import Contact from '../Components/Contact';

function Home() {
  return (
    <>
      <Seo path="/" />
      <HeroV2 />
      <Services />
      <div className="bg-blue-100 px-6 pb-16">
        <CaseStudies className="container mx-auto" />
      </div>
      <AboutTeaser />
      <Testimonials />
      <ValueProposition />
      <Contact />
    </>
  );
}

export default Home;
