import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img 
              src="/Sceau du Gabon.png" 
              alt="Sceau de la République du Gabon" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h3 className="text-base font-semibold text-white">Ambassade du Gabon</h3>
              <p className="text-gray-300 text-sm">République de Côte d'Ivoire</p>
            </div>
          </div>

          {/* Services rapides */}
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/services" className="hover:text-yellow-400 transition-colors">Visas</Link>
            <span className="text-gray-500">•</span>
            <Link to="/services" className="hover:text-yellow-400 transition-colors">Passeports</Link>
            <span className="text-gray-500">•</span>
            <Link to="/audience" className="hover:text-yellow-400 transition-colors">Audience</Link>
            <span className="text-gray-500">•</span>
            <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-300 mr-2">Suivez-nous:</span>
            <a 
              href="https://www.facebook.com/ambassade.gabon.ci" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 p-2 rounded hover:bg-blue-700 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a 
              href="https://www.tiktok.com/@ambassade.gabon.ci" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black p-2 rounded hover:bg-gray-900 transition-colors"
              aria-label="TikTok"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.34 6.34 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>
              © 2025 Ambassade de la République du Gabon en République de Côte d'Ivoire. Tous droits réservés.
            </p>
            <p>
              Conçu et développé par <a href="https://okatech.dev" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 font-semibold">OKA Tech</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;