import { Link } from 'react-router-dom';
import { services } from '../Data/services';

/** Grid of service cards. Used on the home page and the Services page. */
export function ServiceGrid({ headingLevel = 'h3' }) {
  const Heading = headingLevel;
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ id, icon: Icon, title, summary }) => (
        <li
          key={id}
          id={id}
          className="flex flex-col rounded-lg bg-white p-6 text-left shadow-sm ring-1 ring-gray-900/5"
        >
          <Icon aria-hidden="true" className="mb-4 h-10 w-10 text-indigo-700" />
          <Heading className="mb-2 text-xl font-bold text-gray-900">{title}</Heading>
          <p className="text-gray-600">{summary}</p>
        </li>
      ))}
    </ul>
  );
}

/** Home page services overview. */
function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-gradient-to-b from-white to-blue-100 px-6 pb-24"
    >
      <div className="container mx-auto">
        <h2
          id="services-heading"
          className="mb-4 text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
        >
          What I design
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          Remote CAD and mechanical design with drawings and files your shop can
          quote, cut, bend, weld, machine and automate from.
        </p>
        <ServiceGrid />
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-block rounded-lg bg-indigo-700 px-6 py-3 font-semibold text-white transition hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
          >
            Services &amp; deliverables
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
