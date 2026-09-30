import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CTAModal from '../Components/CTAModal';

export function classHelper() {
  return [...arguments].join(' ');
}

function ErrorMessage() {
  return (
    <section role="alert" className="px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-gray-900">Something went wrong</h1>
      <p className="mt-4 text-gray-600">
        Please try again, or <Link to="/" className="text-indigo-700 underline">go to the home page</Link>.
      </p>
    </section>
  );
}

/**
 * Site layout: navbar, page content, footer.
 * Also used as the router errorElement (`error`), so unexpected errors render
 * inside the normal layout instead of React Router's default error screen.
 */
function Index({ error = false }) {
  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <CTAModal />
      <main id="main" className="pt-16 flex-1">
        {error ? <ErrorMessage /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default Index;
