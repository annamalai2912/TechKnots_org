import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaHome, FaCogs, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa'; // Professional Icons

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <FaHome size={20} /> },
    { name: 'Services', href: '#services', icon: <FaCogs size={20} /> },
    { name: 'About', href: '#about', icon: <FaInfoCircle size={20} /> },
    { name: 'Contact', href: '#contact', icon: <FaPhoneAlt size={20} /> }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/60 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      } rounded-b-2xl`} // Curved edges added here
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-green-600"
          >
            <img src="logo.png" alt="Logo" className="h-8" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 hover:text-green-600 flex items-center space-x-2 transition-all duration-300"
              >
                {link.icon}
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/90 backdrop-blur-lg rounded-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
