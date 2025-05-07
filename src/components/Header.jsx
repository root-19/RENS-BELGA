import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Header = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
      label: 'Home'
    },
    {
      id: 2,
      link: 'experience',
      label: 'Experience'
    },
    {
      id: 3,
      link: 'about',
      label: 'About'
    },
    {
      id: 4,
      link: 'project',
      label: 'Projects'
    }
  ];

  return (
    <header className="fixed w-full h-20 bg-gray-900/95 backdrop-blur-sm text-white z-50 border-b border-gray-800">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            RENS
          </h1>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {links.map(({ id, link, label }) => (
              <li key={id} className="nav-link">
                <Link
                  to={link}
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="fixed top-20 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm md:hidden">
          <ul className="flex flex-col items-center justify-start pt-8 space-y-8">
            {links.map(({ id, link, label }) => (
              <li
                key={id}
                className="text-xl font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                  className="cursor-pointer"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
