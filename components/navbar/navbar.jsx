import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Stories", href: "/stories" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-teal-700">
          KARWAAN MISSION
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Donate Button */}
        <Link
          to="/donate"
          className="hidden md:block bg-emerald-900 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-emerald-700 transition duration-300"
        >
          Donate Now
        </Link>

        {/* Mobile Three-Dot Button */}
        <div className="md:hidden relative">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-2xl"
          >
            ⋮
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
              <ul className="flex flex-col items-start px-4 space-y-2 font-medium text-gray-700">
                {menuItems.map((item) => (
                  <li key={item.label} className="w-full">
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Donate Button */}
      <div className="md:hidden px-4 py-2">
        <Link
          to="/donate"
          className="block w-full text-center bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700"
        >
          Donate Now
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
