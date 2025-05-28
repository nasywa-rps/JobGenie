import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({
  logo,
  logoAlt,
  title,
  links,
  profileName,
  profileIcon,
  profileIconAlt
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-emerald-900/95 backdrop-blur-md shadow-lg' : 'bg-emerald-900'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src={logo}
                alt={logoAlt}
                className="h-9 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-bold text-xl text-white group-hover:text-amber-300 transition-colors duration-300">{title}</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link, index) => {
              const isActive = location.pathname === link.url.replace('/#', '/');
              return (
                <Link
                  key={index}
                  to={link.url.replace('/#', '/')}
                  className={`relative px-2 py-1 text-sm font-medium transition-colors duration-200 ${isActive
                    ? 'text-amber-300'
                    : 'text-white hover:text-amber-200'
                    }`}
                >
                  {link.text}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                </Link>
              );
            })}
          </div>

          {/* Profile */}
          <div className="hidden md:flex items-center space-x-3">
            <span className="text-sm text-white">{profileName}</span>
            <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-emerald-300 hover:border-amber-300 transition-colors duration-300 transform hover:scale-110">
              <img src={profileIcon} alt={profileIconAlt} className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-800 focus:outline-none transition-colors duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
        ? 'max-h-64 opacity-100'
        : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-emerald-800/95 backdrop-blur-md shadow-lg">
          {links.map((link, index) => {
            const isActive = location.pathname === link.url.replace('/#', '/');
            return (
              <Link
                key={index}
                to={link.url.replace('/#', '/')}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive
                  ? 'text-amber-300 bg-emerald-700/50'
                  : 'text-white hover:bg-emerald-700/30 hover:text-amber-200'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            );
          })}
          <div className="flex items-center space-x-3 px-3 py-2 border-t border-emerald-700 mt-2">
            <span className="text-sm text-white">{profileName}</span>
            <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-emerald-300">
              <img src={profileIcon} alt={profileIconAlt} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
