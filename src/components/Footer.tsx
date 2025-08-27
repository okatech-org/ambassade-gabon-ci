import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 text-yellow-400" />
                <div>
                  <p>Cocody Danga-Nord</p>
                  <p>Derrière la Direction de la Géologie</p>
                  <p>01 BP 3765 Abidjan 01</p>
                  <p>Côte d'Ivoire</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-yellow-400" />
                <div>
                  <p>+225 27 22 44 51 54</p>
                  <p>+225 27 22 44 66 84</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-yellow-400" />
                <p>ambga.cotedivoire@diplomatie.gouv.ga</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-400" />
                <p>Lun-Ven: 8h30 - 15h30</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-yellow-400 transition-colors">Passeports</Link></li>
              <li><Link to="/services" className="hover:text-yellow-400 transition-colors">Visas</Link></li>
              <li><Link to="/services" className="hover:text-yellow-400 transition-colors">Légalisation</Link></li>
              <li><Link to="/services" className="hover:text-yellow-400 transition-colors">État Civil</Link></li>
              <li><Link to="/audience" className="hover:text-yellow-400 transition-colors">Demande d'Audience</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">À Propos</Link></li>
              <li><Link to="/news" className="hover:text-yellow-400 transition-colors">Actualités</Link></li>
              <li><Link to="/gabon" className="hover:text-yellow-400 transition-colors">Découvrir le Gabon</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded hover:bg-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded hover:bg-blue-900 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Urgences Consulaires</h4>
              <p className="text-sm">24h/7j : +225 07 XX XX XX XX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Ambassade de la République du Gabon en République de Côte d'Ivoire. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Politique de Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;