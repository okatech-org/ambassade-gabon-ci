import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.1 });

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/about' },
    { name: 'Services Consulaires', href: '/services' },
    { name: 'Demande d\'Audience', href: '/audience' },
    { name: 'Actualités', href: '/news' },
    { name: 'Découvrir le Gabon', href: '/gabon' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-3 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-6 opacity-90">
              <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="hidden sm:inline">Cocody Danga-Nord, Abidjan</span>
                <span className="sm:hidden">Abidjan</span>
              </div>
              <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="hidden md:inline">+225 27 22 44 51 54</span>
                <span className="md:hidden">Téléphone</span>
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
              <Mail className="h-4 w-4 text-yellow-400" />
              <span className="hidden lg:inline">ambga.cotedivoire@diplomatie.gouv.ga</span>
              <span className="lg:hidden">Email</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        ref={headerRef}
        className="nav-blur sticky top-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className={`flex items-center ${headerVisible ? 'animate-slide-in-left' : ''}`}>
              <Link to="/" className="flex items-center gap-4 group">
                <div className="w-18 h-18 bg-gabon-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl" aria-label="Gabon">GA</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                    Ambassade du Gabon
                  </h1>
                  <p className="text-sm text-gray-600 font-medium">République de Côte d'Ivoire</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center space-x-2 ${headerVisible ? 'animate-fade-in-down animate-delay-200' : ''}`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                  className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 relative overflow-hidden group ${
                    location.pathname === item.href
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {location.pathname === item.href && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className={`lg:hidden ${headerVisible ? 'animate-slide-in-right animate-delay-300' : ''}`}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                className="p-3 text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isMenuOpen ? 
                  <X className="h-6 w-6 rotate-90 transition-transform duration-300" /> : 
                  <Menu className="h-6 w-6 transition-transform duration-300" />
                }
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden animate-fade-in-down" id="mobile-menu">
              <div className="px-4 pt-4 pb-6 space-y-2 bg-glass border-t border-gray-200 rounded-b-2xl shadow-xl">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={location.pathname === item.href ? 'page' : undefined}
                    className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'text-green-600 bg-green-100'
                        : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <Link
                    to="/services"
                    className="block w-full text-center btn btn-primary py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services Consulaires
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;