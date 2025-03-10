import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation(); // Get current route

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll to contact section if on index page
  const handleContactClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeMobileMenu();
  };

  const handleRootClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeMobileMenu();
  };

  useEffect(() => {
    if (location.pathname === "/" && !location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname, location.hash]);

  const linkClass = ({ isActive }) =>
    `hover:text-red-500 px-3 py-1 rounded-md transition duration-300 ${
      isActive ? "" : "text-gray-300"
    }`;

  return (
    <nav className="h-16 flex flex-row items-center bg-indigo-900 text-white py-4 px-6 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={handleRootClick}
        >
          <img
            src="/images/karsyzLogo.svg"
            alt="Karsyz Robotics Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold">Karsyz Robotics</span>
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/#contact"
            className={linkClass}
            onClick={handleContactClick} // Add smooth scroll handler
          >
            Contact
          </Link>
          <Link to="/portfolio" className={linkClass}>
            Portfolio
          </Link>
          <Link to="/whiteboard" className={linkClass}>
            Whiteboard
          </Link>

          {isLoggedIn ? (
            <FiLogOut onClick={toggleLogin}  className="w-8 h-8 text-red-500"/>
          ) : (
            <FiLogIn onClick={toggleLogin} className="w-8 h-8 text-green-500"/>
          )}

          {/* <button
            onClick={toggleLogin}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button> */}
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
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
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
          <Link
            to="/#contact"
            className={linkClass}
            onClick={handleContactClick} // Add smooth scroll handler
          >
            Contact
          </Link>
          <Link
            to="/portfolio"
            className={linkClass}
            onClick={toggleMobileMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/whiteboard"
            className={linkClass}
            onClick={toggleMobileMenu}
          >
            Whiteboard
          </Link>
          <button
            onClick={() => {
              toggleLogin();
              toggleMobileMenu();
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-left"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
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
