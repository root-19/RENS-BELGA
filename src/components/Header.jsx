import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="nav p-4 fixed w-full top-0 z-10">
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          <a href="#" className="text-white text-xl font-bold">
          <span>&lt;Wasie /&gt;</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white font-bold hover:text-blue-400 hover:underline cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white font-bold hover:text-blue-400 hover:underline cursor-pointer"
          >
            About Me
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white font-bold hover:text-blue-400 hover:underline cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white font-bold hover:text-blue-400 hover:underline cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button
            className="text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
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
              ></path>
            </svg>
          </button>
          {/* Show the menu if it's open */}
          {isMenuOpen && (
            <div className="header absolute top-17 right-0 bg-blue-500 text-center font-bold hover:text-underline text-2xl p-9 py-10 px-10 cursor-pointer h-screen w-full flex flex-col justify-center">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white block mb-2 text-2xl cursor-pointer"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white block mb-2 text-2xl cursor-pointer"
                onClick={toggleMenu}
              >
                About Me
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white block mb-2 text-2xl cursor-pointer"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white block mb-2 text-2xl  cursor-pointer"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;


