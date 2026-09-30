import { Link } from 'react-router-dom';
import Seo from '../Components/Seo';
import CTA from '../Components/CTA';
import { SITE } from '../config/site';

// Background facts below come from Matt's blog post "A Quick Introduction".
// Do not add claims here that Matt hasn't confirmed.
const background = [
  'Industrial robot programmer',
  'Structural steel detailer',
  'Fixture designer',
  'Metal fabricator',
  'Automotive electrician',
  'Car audio and security installer',
];

function About() {
  return (
    <>
      <Seo path="/about" />
      <article className="px-6 pt-10">
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">About</h1>

          {/* No personal photo by Matt's choice: the work speaks for itself. */}
          <div className="prose prose-lg mt-6 max-w-none">
            <p>
              I&apos;m Matt Kars (most people call me Karsy). I started Karsyz
              Robotics in 2014 while I was programming industrial robots. Today
              I provide remote CAD and mechanical design from{' '}
              {SITE.location}.
            </p>
            <p>
              Before that, I worked as a
              structural steel detailer, fixture designer, metal fabricator,
              automotive electrician, and car audio and security installer, and I
              went to college for architecture. I&apos;ve always been building
              something: woodworking, machining, fabricating, welding, fixing
              things and making art.
            </p>
            <p>
              That mix is why I design parts to be practical to build. Having
              programmed robots and detailed steel for fabrication, I think about
              how a part will be cut, formed, welded, fixtured and handled before
              it ever reaches your shop floor.
            </p>
          </div>

          <h2 className="mb-4 mt-10 text-2xl font-semibold text-gray-900">Background</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {background.map((role) => (
              <li key={role} className="rounded-md bg-white px-4 py-2 shadow-sm ring-1 ring-gray-900/5">
                {role}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-lg text-gray-700">
            See examples of my work in the <Link to="/portfolio" className="font-semibold text-indigo-700 underline">portfolio</Link>, or{' '}
            <Link to="/contact" className="font-semibold text-indigo-700 underline">get in touch</Link> about a project.
          </p>
        </div>
      </article>
      <CTA />
    </>
  );
}

export default About;
