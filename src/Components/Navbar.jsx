import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  const location = useLocation(); // Get current route
  const navigate = useNavigate();

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll to contact section if on index page
  const handleContactClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMobileMenu();
  };

  const handleRootClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  useEffect(() => {
    if (location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, location.hash]);

  const linkClass = ({ isActive }, targetHash = null) => {
    const baseClasses =
      'hover:text-green-400 font-semibold px-3 py-1 rounded-md transition duration-300 whitespace-nowrap';
    const isActiveWithHash = targetHash
      ? isActive && location.hash === targetHash
      : isActive;

    return `${baseClasses} ${isActiveWithHash ? 'text-green-500' : ''}`.trim();
  };

  const handleHashNav = (hash) => {
    if (location.pathname === '/') {
      navigate(`${location.pathname}${hash}`, { replace: true });
    } else {
      navigate(`/${hash}`);
    }
  };

  return (
    <nav className="h-16 flex flex-row items-center justify-center bg-indigo-900 text-white py-4 px-6 fixed w-full top-0 shadow-lg z-50">
      <div className="container flex items-center justify-between">
        <NavLink
          to="/"
          onClick={(e) => {
            handleHashNav('/');
            handleRootClick;
          }}
          className="flex items-center space-x-2"
        >
          <img
            src="/images/karsyzLogo.svg"
            alt="Karsyz Robotics Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold whitespace-nowrap">
            Karsyz Robotics
          </span>
        </NavLink>

        <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          <NavLink
            to="#contact"
            onClick={(e) => {
              e.preventDefault(); // Prevent default NavLink behavior
              handleHashNav('#contact');
            }}
            className={(props) => linkClass(props, '#contact')}
          >
            Contact
          </NavLink>

          <Link
            to="https://guardrailworksheet.netlify.app"
            target="_blank"
            className={linkClass}
          >
            Guardrail Worksheet
          </Link>

          <NavLink to="/portfolio" className={linkClass}>
            Portfolio
          </NavLink>

          <NavLink to="/whiteboard" className={linkClass}>
            Whiteboard
          </NavLink>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-indigo-800 text-white transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        {/* Mobile Nav Menu */}
        <div className="flex flex-col p-6 space-y-6">
          <button
            className="self-end text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <NavLink
            to="/"
            onClick={(e) => {
              handleHashNav('/');
              handleRootClick;
              toggleMobileMenu();
            }}
            className={linkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="#contact"
            onClick={(e) => {
              e.preventDefault(); // Prevent default NavLink behavior
              handleHashNav('#contact');
            }}
            className={(props) => linkClass(props, '#contact')}
          >
            Contact
          </NavLink>

          <NavLink
            to="/portfolio"
            className={linkClass}
            onClick={toggleMobileMenu}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/whiteboard"
            className={linkClass}
            onClick={toggleMobileMenu}
          >
            Whiteboard
          </NavLink>

          <Link
            to="https://guardrailworksheet.netlify.app"
            target="_blank"
            className={linkClass + ''}
          >
            Guardrail Worksheet
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  );
}

export default Navbar;
