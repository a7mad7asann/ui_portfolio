import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1e2227] py-6 border-t border-gray-800 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-300 text-sm flex flex-col sm:flex-row justify-center items-center gap-2">
          &copy; Developed By Ahmad Hassn. All rights reserved.
          <Link to="https://wa.me/+201061380485" className="text-[#007bff] hover:text-white transition-colors duration-300 font-medium">
            Contact the programmer
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer;
