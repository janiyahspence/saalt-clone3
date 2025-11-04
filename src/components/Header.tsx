import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from './Button';
import { properties } from '../data/properties';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPropertiesDropdown, setShowPropertiesDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Properties', path: '/properties', hasDropdown: true, type: 'properties' },
    { name: 'Services', path: '/guest-services', hasDropdown: true, type: 'services' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const servicesMenu = [
    { name: 'Guest Services & Amenities', path: '/guest-services' },
    { name: 'Corporate Services', path: '/corporate-services' },
    { name: 'Pilgrimage Tourism', path: '/pilgrimage-tourism' },
    { name: 'Special Offers', path: '/offers' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 backdrop-blur-md py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-[#1a472a] transition-colors group-hover:text-[#2d6e4b]">
                SAALT
              </span>
              <span className="text-xs md:text-sm text-[#d4a574] font-medium tracking-wider">
                GROUP OF HOTELS
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <button
                      onMouseEnter={() => link.type === 'properties' ? setShowPropertiesDropdown(true) : setShowServicesDropdown(true)}
                      onMouseLeave={() => link.type === 'properties' ? setShowPropertiesDropdown(false) : setShowServicesDropdown(false)}
                      className="px-4 py-2 text-[#2c3e50] hover:text-[#1a472a] font-medium transition-colors flex items-center gap-1"
                    >
                      {link.name}
                      <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    {link.type === 'properties' && showPropertiesDropdown && (
                      <div
                        onMouseEnter={() => setShowPropertiesDropdown(true)}
                        onMouseLeave={() => setShowPropertiesDropdown(false)}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl p-4 border border-gray-100"
                      >
                        {properties.map((property) => (
                          <Link
                            key={property.id}
                            to={`/properties/${property.id}`}
                            className="block p-3 rounded-lg hover:bg-[#f5f5f0] transition-colors group/item"
                          >
                            <div className="flex gap-3">
                              <img
                                src={property.heroImage}
                                alt={property.shortName}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                              <div>
                                <p className="font-semibold text-[#1a472a] group-hover/item:text-[#2d6e4b] transition-colors">
                                  {property.shortName}
                                </p>
                                <p className="text-xs text-gray-500">{property.city}, {property.state}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                        <Link
                          to="/properties"
                          className="block mt-2 pt-3 border-t border-gray-200 text-center text-sm font-medium text-[#d4a574] hover:text-[#c89356] transition-colors"
                        >
                          View All Properties →
                        </Link>
                      </div>
                    )}
                    {link.type === 'services' && showServicesDropdown && (
                      <div
                        onMouseEnter={() => setShowServicesDropdown(true)}
                        onMouseLeave={() => setShowServicesDropdown(false)}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl p-3 border border-gray-100"
                      >
                        {servicesMenu.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block p-3 rounded-lg hover:bg-[#f5f5f0] transition-colors text-[#2c3e50] hover:text-[#1a472a] font-medium"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#1a472a]'
                        : 'text-[#2c3e50] hover:text-[#1a472a]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919709633313" className="text-[#2c3e50] hover:text-[#1a472a] transition-colors">
              <Phone size={20} />
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open('https://wa.me/919709633313?text=Hello, I would like to make a booking', '_blank')}
            >
              Book Now
            </Button>
          </div>

          <button
            className="lg:hidden text-[#1a472a] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-slide-up">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.hasDropdown && link.type === 'properties' ? (
                  <>
                    <Link
                      to={link.path}
                      className="block py-3 text-[#2c3e50] hover:text-[#1a472a] font-medium transition-colors"
                    >
                      All Properties
                    </Link>
                    <div className="pl-4 space-y-2">
                      {properties.map((property) => (
                        <Link
                          key={property.id}
                          to={`/properties/${property.id}`}
                          className="block py-2 text-sm text-[#2c3e50] hover:text-[#1a472a] transition-colors"
                        >
                          {property.shortName}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : link.hasDropdown && link.type === 'services' ? (
                  <>
                    <Link
                      to={link.path}
                      className="block py-3 text-[#2c3e50] hover:text-[#1a472a] font-medium transition-colors"
                    >
                      Services
                    </Link>
                    <div className="pl-4 space-y-2">
                      {servicesMenu.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block py-2 text-sm text-[#2c3e50] hover:text-[#1a472a] transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`block py-3 font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#1a472a]'
                        : 'text-[#2c3e50] hover:text-[#1a472a]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+919709633313"
                className="flex items-center gap-2 text-[#2c3e50] hover:text-[#1a472a] transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">+91 9709633313</span>
              </a>
              <Button
                variant="primary"
                size="md"
                onClick={() => window.open('https://wa.me/919709633313?text=Hello, I would like to make a booking', '_blank')}
                className="w-full"
              >
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
