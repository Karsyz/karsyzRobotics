import { Link } from 'react-router-dom';
import Seo from '../Components/Seo';

function NotFound() {
  return (
    <>
      <Seo notFound />
      <section className="flex min-h-[60vh] items-center justify-center px-6 py-24">
        <div className="max-w-xl text-center">
          <p className="text-base font-semibold text-indigo-700">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Sorry, that page doesn&apos;t exist. It may have moved, or the link
            may be mistyped.
          </p>
          <nav aria-label="Helpful links" className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white hover:bg-indigo-800">
              Go to home page
            </Link>
            <Link to="/services" className="font-semibold text-indigo-700 underline">Services</Link>
            <Link to="/portfolio" className="font-semibold text-indigo-700 underline">Portfolio</Link>
            <Link to="/contact" className="font-semibold text-indigo-700 underline">Contact</Link>
          </nav>
        </div>
      </section>
    </>
  );
}

export default NotFound;
