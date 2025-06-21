import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-xl font-bold text-white">Code Reviewer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
              Home
            </a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">
              Features
            </a>
            <a href="#how-it-helps" className="text-gray-300 hover:text-white transition-colors duration-200">
              How It Helps
            </a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors duration-200">
              Demo
            </a>
            <Link to="/reviewer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Try Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-800">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200">
                Features
              </a>
              <a href="#how-it-helps" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200">
                How It Helps
              </a>
              <a href="#demo" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200">
                Demo
              </a>
              <Link to="/reviewer" className="block w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-center">
                Try Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 