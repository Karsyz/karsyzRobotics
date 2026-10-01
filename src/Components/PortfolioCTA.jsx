import { Link } from 'react-router-dom';
import { SITE } from '../config/site';

/** Bottom call to action on the Portfolio page: email or the contact form. No phone. */
function PortfolioCTA() {
  return (
    <section aria-labelledby="portfolio-cta-heading" className="bg-white px-6 py-16 text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 id="portfolio-cta-heading" className="mb-4 text-3xl font-semibold text-gray-800">
          Send me your sketch, markup or old drawing and I&apos;ll quote it
        </h2>
        <p className="mb-6 text-lg text-gray-700">
          Email{' '}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-indigo-700 underline">
            {SITE.email}
          </a>{' '}
          or use the contact form.
        </p>
        <Link
          to="/contact"
          className="inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Go to the contact form
        </Link>
      </div>
    </section>
  );
}

export default PortfolioCTA;
