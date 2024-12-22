import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Bell, User, Settings } from 'lucide-react';
import { FaHome, FaCogs, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <FaHome className="w-5 h-5" /> },
    { name: 'Services', href: '#services', icon: <FaCogs className="w-5 h-5" /> },
    { name: 'About', href: '#about', icon: <FaInfoCircle className="w-5 h-5" /> },
    { name: 'Contact', href: '#contact', icon: <FaPhoneAlt className="w-5 h-5" /> }
  ];

  const notifications = [
    { id: 1, text: 'New message received', time: '5m ago' },
    { id: 2, text: 'Your post was liked', time: '1h ago' },
    { id: 3, text: 'Meeting reminder', time: '2h ago' }
  ];

  return (
    <div className="fixed w-full z-50 px-4 pt-4">
      <nav className={`
        transition-all duration-500 
        ${isScrolled ? 'bg-white/10' : 'bg-transparent'} 
        backdrop-blur-lg
        border border-white/20
        shadow-lg
        rounded-2xl
        overflow-hidden
        mx-auto
        max-w-7xl
      `}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 group">
              <img 
                src="logo.png"
                alt="Logo" 
                className="h-8 w-auto transition-all duration-300 group-hover:scale-110 rounded-xl" 
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center space-x-2 text-gray-700 hover:text-green-500 transition-all duration-300 relative px-4 py-2 rounded-xl hover:bg-white/10"
                >
                  <span className="transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                    {link.icon}
                  </span>
                  <span className="font-medium relative">
                    {link.name}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                  </span>
                </a>
              ))}
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <div className={`
                  transition-all duration-300 
                  ${isSearchOpen ? 'w-64' : 'w-10'}
                  flex items-center
                  bg-white/5
                  rounded-full
                  hover:bg-white/10
                `}>
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="p-2 rounded-full transition-colors duration-300"
                  >
                    <Search className="w-5 h-5 text-gray-700" />
                  </button>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`
                      transition-all duration-300
                      ${isSearchOpen ? 'w-full pl-2 pr-4' : 'w-0'}
                      bg-transparent
                      focus:outline-none
                      rounded-full
                      placeholder-gray-500
                    `}
                  />
                </div>
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Bell className="w-5 h-5 text-gray-700" />
                </button>
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-200/50 bg-white/10">
                      <h3 className="font-semibold text-gray-700">Notifications</h3>
                    </div>
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="px-4 py-3 hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                      >
                        <p className="text-sm text-gray-700">{notification.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <User className="w-5 h-5 text-gray-700" />
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-200/50 bg-white/10">
                      <p className="text-sm font-medium text-gray-700">John Doe</p>
                      <p className="text-xs text-gray-500">john@example.com</p>
                    </div>
                    <a href="#profile" className="block px-4 py-2 hover:bg-white/20 transition-colors duration-300">Profile</a>
                    <a href="#settings" className="block px-4 py-2 hover:bg-white/20 transition-colors duration-300">Settings</a>
                    <a href="#logout" className="block px-4 py-2 hover:bg-white/20 transition-colors duration-300 text-red-500">Logout</a>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden 
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}
          overflow-hidden
          bg-white/80 backdrop-blur-lg
        `}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 bg-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;