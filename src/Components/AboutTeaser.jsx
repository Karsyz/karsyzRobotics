import { Link } from 'react-router-dom';
import { about } from '../Data/siteCopy';

/** Short About block for the home page, linking to the full About page. */
function AboutTeaser() {
  return (
    <section aria-labelledby="about-teaser-heading" className="bg-white px-6 py-16">
      <div className="container mx-auto max-w-3xl text-center">
        <h2
          id="about-teaser-heading"
          className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
        >
          {about.heading}
        </h2>
        <p className="mb-4 text-xl font-medium text-indigo-700">{about.lead}</p>
        <p className="mb-8 text-lg text-gray-700">{about.paragraphs[1]}</p>
        <Link
          to="/about"
          className="font-semibold text-indigo-700 underline hover:text-indigo-900"
        >
          More about Karsyz Robotics <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

export default AboutTeaser;
