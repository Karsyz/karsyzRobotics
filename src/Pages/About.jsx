import Seo from '../Components/Seo';
import CTA from '../Components/CTA';
import { about } from '../Data/siteCopy';

// No personal photo anywhere on the site, by Matt's choice.
function About() {
  return (
    <>
      <Seo path="/about" />
      <article className="px-6 pt-10">
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            {about.heading}
          </h1>
          <p className="mb-6 text-2xl font-medium text-indigo-700">
            {about.lead}
          </p>
          <div className="prose prose-lg max-w-none">
            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 32)}>{text}</p>
            ))}
          </div>
        </div>
      </article>
      <CTA />
    </>
  );
}

export default About;
