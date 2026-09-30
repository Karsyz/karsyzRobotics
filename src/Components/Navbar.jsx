import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { href: 'https://guardraildesigner.netlify.app', label: 'Guardrail Designer' },
  { to: '/contact', label: 'Contact' },
];

const linkClass = ({ isActive }) =>
  isActive ? 'text-green-400' : 'hover:text-green-300';

function NavItems({ onNavigate }) {
  return navItems.map((item) =>
    item.href ? (
      <li key={item.label}>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 whitespace-nowrap hover:text-green-300"
          onClick={onNavigate}
        >
          {item.label}
          <FiExternalLink aria-hidden="true" className="text-lg" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </li>
    ) : (
      <li key={item.to}>
        <NavLink to={item.to} end={item.end} className={linkClass} onClick={onNavigate}>
          {item.label}
        </NavLink>
      </li>
    )
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Close mobile menu on window resize
  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;
    window.addEventListener('resize', closeMobileMenu);
    return () => window.removeEventListener('resize', closeMobileMenu);
  }, [isMobileMenuOpen]);

  // Scroll to top on page change; scroll to anchors like /#contact.
  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);

  return (
    <header className="fixed top-0 z-10 w-full bg-indigo-900 text-white shadow-lg">
      <nav aria-label="Main" className="container mx-auto flex h-16 items-center justify-between px-6">
        <NavLink to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          <img src="/images/karsyzLogo.svg" alt="" className="h-10 w-10" />
          <span className="whitespace-nowrap text-xl font-bold">Karsyz Robotics</span>
        </NavLink>

        <ul className="hidden items-center space-x-5 font-semibold lg:flex">
          <NavItems />
        </ul>

        <button
          type="button"
          className="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Open menu</span>
          <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed right-0 top-0 z-50 h-full w-64 transform bg-indigo-800 text-white transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'invisible translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 p-6 font-semibold">
          <button
            type="button"
            className="self-end text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={closeMobileMenu}
          >
            <span className="sr-only">Close menu</span>
            <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col space-y-6">
            <NavItems onNavigate={closeMobileMenu} />
          </ul>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
}

export default Navbar;
