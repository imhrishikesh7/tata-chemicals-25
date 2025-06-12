import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 bg-gray-300 border-t border-black">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Company Logo */}
        <div className="flex items-center gap-2 bg-whie p-2 rounded">
          <a href="https://www.tataconsumer.com/"> <img
            src="/tata-chemicals-blue.svg" // Replace with your path
            alt="Company Logo"
            className="h-3  object-contain"
          /></a>
         
        </div>

        {/* Center: Company name with © */}
        <div className="text-sm text-gray-800 text-center">
          © {new Date().getFullYear()} Tata Chemicals. All rights reserved.
        </div>

        {/* Right: Developer Logo */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Crafted by</span>
          <a href="https://kalolwala.com/" target="_blank"><img
            src="/k&a logo.svg" // Replace with your path
            alt="Developer Logo"
            className="w-8 h-8 object-contain"
          /></a>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
