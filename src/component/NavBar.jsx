import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-[#212529] shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <HashLink smooth to="/#home" className="flex-shrink-0">
            <span className="block text-3xl font-bold text-white tracking-wider">H <span className="text-[#007bff]">M</span></span>
          </HashLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <HashLink smooth to="/#home" className="text-white hover:text-[#007bff] font-medium transition-colors duration-300">Home</HashLink>
            <HashLink smooth to="/#about" className="text-white hover:text-[#007bff] font-medium transition-colors duration-300">About Me</HashLink>
            <HashLink smooth to="/#services" className="text-white hover:text-[#007bff] font-medium transition-colors duration-300">Services</HashLink>
            <HashLink smooth to="/#project" className="text-white hover:text-[#007bff] font-medium transition-colors duration-300">Projects</HashLink>
            <HashLink smooth to="/#contact" className="text-white hover:text-[#007bff] font-medium transition-colors duration-300">Contact</HashLink>
            <Link to="/dashboard" className="text-white hover:text-[#007bff] font-medium transition-colors duration-300 bg-gray-800 px-3 py-1 rounded">Dashboard</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1e2227] shadow-lg">
          <HashLink smooth to="/#home" className="block px-3 py-2 text-base font-medium text-white hover:text-[#007bff] hover:bg-gray-800 rounded-md" onClick={() => setIsOpen(false)}>Home</HashLink>
          <HashLink smooth to="/#about" className="block px-3 py-2 text-base font-medium text-white hover:text-[#007bff] hover:bg-gray-800 rounded-md" onClick={() => setIsOpen(false)}>About Me</HashLink>
          <HashLink smooth to="/#services" className="block px-3 py-2 text-base font-medium text-white hover:text-[#007bff] hover:bg-gray-800 rounded-md" onClick={() => setIsOpen(false)}>Services</HashLink>
          <HashLink smooth to="/#project" className="block px-3 py-2 text-base font-medium text-white hover:text-[#007bff] hover:bg-gray-800 rounded-md" onClick={() => setIsOpen(false)}>Projects</HashLink>
          <HashLink smooth to="/#contact" className="block px-3 py-2 text-base font-medium text-white hover:text-[#007bff] hover:bg-gray-800 rounded-md" onClick={() => setIsOpen(false)}>Contact</HashLink>
          {/* <Link to="/dashboard" className="block px-3 py-2 text-base font-medium text-[#007bff] hover:bg-gray-800 rounded-md" onClick={() => setIsOpen(false)}>Dashboard</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
