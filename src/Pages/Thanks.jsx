import { Link } from 'react-router-dom';
import Seo from '../Components/Seo';
import { SITE } from '../config/site';

// Shown after a successful contact form submission (see src/Components/Contact.jsx).
function Thanks() {
  return (
    <>
      <Seo path="/thanks" />
      <section className="flex min-h-[60vh] items-center justify-center px-6 py-24">
        <div className="max-w-xl text-center">
          <p className="text-base font-semibold text-indigo-700">Message sent</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Thanks for getting in touch
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Your message is on its way. I&apos;ll get back to you soon. If it&apos;s
            urgent, you can also email{' '}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-indigo-700 underline">
              {SITE.email}
            </a>
            .
          </p>
          <nav aria-label="Next steps" className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white hover:bg-indigo-800">
              Back to home page
            </Link>
            <Link to="/portfolio" className="font-semibold text-indigo-700 underline">See the portfolio</Link>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Thanks;
