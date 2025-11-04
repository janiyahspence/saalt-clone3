import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { properties } from '../data/properties';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#d4a574]">SAALT</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Modern Hospitality with Traditional Values since 2019. Experience Bihar's finest accommodations across our four properties.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/saalthotels/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/saalt.hotels/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#d4a574]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-white/80 hover:text-white transition-colors">
                  All Properties
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-white/80 hover:text-white transition-colors">
                  Events & Weddings
                </Link>
              </li>
              <li>
                <Link to="/guest-services" className="text-white/80 hover:text-white transition-colors">
                  Guest Services
                </Link>
              </li>
              <li>
                <Link to="/corporate-services" className="text-white/80 hover:text-white transition-colors">
                  Corporate Services
                </Link>
              </li>
              <li>
                <Link to="/pilgrimage-tourism" className="text-white/80 hover:text-white transition-colors">
                  Pilgrimage Tourism
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#d4a574]">Our Properties</h4>
            <ul className="space-y-2">
              {properties.map((property) => (
                <li key={property.id}>
                  <Link
                    to={`/properties/${property.id}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {property.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#d4a574]">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Patliputra Colony, Patna, Bihar, India</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+919709633313" className="hover:text-white transition-colors">
                  +91 9709633313
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+917909046993" className="hover:text-white transition-colors">
                  +91 7909046993
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@saalthotels.com" className="hover:text-white transition-colors">
                  info@saalthotels.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/terms-conditions" className="text-white/70 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/faq" className="text-white/70 hover:text-white transition-colors">
              FAQ
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/sitemap" className="text-white/70 hover:text-white transition-colors">
              Sitemap
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/careers" className="text-white/70 hover:text-white transition-colors">
              Careers
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/press-media" className="text-white/70 hover:text-white transition-colors">
              Press & Media
            </Link>
          </div>
          <p className="text-center text-white/70 text-sm">&copy; {new Date().getFullYear()} Saalt Group of Hotels. All rights reserved. | Crafted with excellence since 2019</p>
        </div>
      </div>
    </footer>
  );
};
