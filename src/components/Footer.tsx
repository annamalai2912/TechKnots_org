import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

// Configuration object for easy customization
const COMPANY_CONFIG = {
  name: 'TechKnots',
  email: 'techknotsofficial@gmail.com',
  phone: '+919176747268',
  address: {
    full: 'No: 6/26, Karunanidhi 2nd Street, West Mambalam, Chennai - 600033',
    googleMapsQuery: 'No+6%2F26+Karunanidhi+2nd+Street+West+Mambalam+Chennai'
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/techknots',
    instagram: 'https://www.instagram.com/techknots_official',
    twitter: 'https://www.twitter.com/techknots'
  },
  description: 'Bridging the gap between theory and practical engineering education.',
  logoPath: '/logo.png' // Ensure logo.png is in the public folder
};

export default function Footer() {
  // Utility function to safely open external links
  const safeOpenLink = (url) => {
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to open link:', error);
      alert('Unable to open link. Please check your browser settings.');
    }
  };

  // Enhanced click handlers with error handling
  const handleEmailClick = () => {
    try {
      window.location.href = `mailto:${COMPANY_CONFIG.email}`;
    } catch (error) {
      console.error('Email link failed:', error);
      alert('Unable to open email client. Please manually copy the email address.');
    }
  };

  const handlePhoneClick = () => {
    try {
      window.location.href = `tel:${COMPANY_CONFIG.phone}`;
    } catch (error) {
      console.error('Phone link failed:', error);
      alert('Unable to initiate call. Please manually dial the number.');
    }
  };

  const handleAddressClick = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${COMPANY_CONFIG.address.googleMapsQuery}`;
    safeOpenLink(mapsUrl);
  };

  const handleSocialClick = (platform) => {
    const url = COMPANY_CONFIG.socialLinks[platform];
    if (url) {
      safeOpenLink(url);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <img 
              src={COMPANY_CONFIG.logoPath} 
              alt={`${COMPANY_CONFIG.name} Logo`} 
              className="h-8 mb-4 cursor-pointer hover:opacity-80 transition" 
              onError={(e) => {
                e.target.style.display = 'none';  // Hide if logo fails to load
                console.error('Logo failed to load');
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            <p className="text-gray-400">
              {COMPANY_CONFIG.description}
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              {/* Email */}
              <div 
                className="flex items-center text-gray-400 hover:text-white cursor-pointer transition group"
                onClick={handleEmailClick}
              >
                <Mail className="h-5 w-5 mr-2 group-hover:text-blue-400 transition" />
                <span>{COMPANY_CONFIG.email}</span>
              </div>

              {/* Phone */}
              <div 
                className="flex items-center text-gray-400 hover:text-white cursor-pointer transition group"
                onClick={handlePhoneClick}
              >
                <Phone className="h-5 w-5 mr-2 group-hover:text-green-400 transition" />
                <span>{COMPANY_CONFIG.phone}</span>
              </div>

              {/* Address */}
              <div 
                className="flex items-center text-gray-400 hover:text-white cursor-pointer transition group"
                onClick={handleAddressClick}
              >
                <MapPin className="h-5 w-5 mr-2 group-hover:text-red-400 transition" />
                <span>{COMPANY_CONFIG.address.full}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              {[
                { 
                  icon: Linkedin, 
                  platform: 'linkedin', 
                  color: 'text-blue-600 hover:text-blue-700' 
                },
                { 
                  icon: Instagram, 
                  platform: 'instagram', 
                  color: 'text-pink-600 hover:text-pink-700' 
                },
                { 
                  icon: Twitter, 
                  platform: 'twitter', 
                  color: 'text-blue-400 hover:text-blue-500' 
                }
              ].map(({ icon: Icon, platform, color }) => (
                COMPANY_CONFIG.socialLinks[platform] && (
                  <button 
                    key={platform}
                    onClick={() => handleSocialClick(platform)}
                    className={`${color} transition transform hover:scale-110`}
                    aria-label={`${platform} profile`}
                  >
                    <Icon size={24} />
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '#services', label: 'Services' },
                { href: '#about', label: 'About Us' },
                { href: '#contact', label: 'Contact' }
              ].map(({ href, label }) => (
                <li key={href}>
                  <a 
                    href={href} 
                    className="text-gray-400 hover:text-white transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} {COMPANY_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
