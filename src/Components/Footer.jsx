import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          
          {/* Part 1: Company Logo */}
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <a href="https://www.tatachemicals.com/" className="block">
                <img
                  src="/tata-chemicals-blue.svg"
                  alt="Tata Chemicals Logo"
                  className="h-8 object-contain filter brightness-0 invert"
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-blue-200 text-sm font-medium">Leading the Future</p>
              <p className="text-gray-300 text-xs">of Chemical Innovation</p>
            </div>
          </div>

          {/* Part 2: Company Info */}
          <div className="text-center space-y-2">
            <div className="text-lg font-semibold text-blue-100 mb-2">
              Tata Chemicals Limited
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              © {new Date().getFullYear()} Tata Chemicals Limited.<br />
              All rights reserved.
            </div>
          </div>

          {/* Part 3: Quick Links */}
          <div className="text-center space-y-3">
            <h4 className="text-sm font-semibold text-blue-200">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-xs text-gray-400">
              <span className="hover:text-blue-300 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-blue-300 cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-blue-300 cursor-pointer transition-colors">Contact Us</span>
            </div>
          </div>

          {/* Part 4: Developer Info */}
          <div className="flex flex-col items-center space-y-3">
            <a href="https://kalolwala.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <span className="text-sm text-gray-300">Crafted with ❤️ by</span>
              <img
                src="/k&a logo.svg"
                alt="K&A Developer Logo"
                className="w-6 h-6 object-contain"
              />
            </a>
          </div>
        </div>
        
        {/* Divider line */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        
        {/* Back to Top Button - Centered */}
        <div className="flex justify-center">
          <button
            onClick={() => scrollToSection('hero-title')}
            className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-blue-500/30"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              Back to Top
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600"></div>
    </footer>
  );
};

export default Footer;