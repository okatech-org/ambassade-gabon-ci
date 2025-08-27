import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Users, Globe, Coins, TreePine, Building, TrendingUp, Plane } from 'lucide-react';

const Gabon = () => {
  const navigate = useNavigate();

  const handleVisaRequest = () => {
    navigate('/services');
  };

  const handleInvestmentInfo = () => {
    navigate('/contact');
  };

  const facts = [
    { icon: MapPin, label: 'Capitale', value: 'Libreville' },
    { icon: Users, label: 'Population', value: '2,3 millions d\'habitants' },
    { icon: Globe, label: 'Langues', value: 'Français, Fang, Myéné, Punu' },
    { icon: Coins, label: 'Monnaie', value: 'Franc CFA (XAF)' },
  ];

  const investments = [
    {
      title: 'Zones Économiques Spéciales',
      description: 'GSEZ à Nkok, Mandji Island - Facilitations fiscales et administratives',
      icon: Building
    },
    {
      title: 'Secteurs Porteurs',
      description: 'Agro-industrie, mines, tourisme, services - Opportunités d\'investissement',
      icon: TrendingUp
    },
    {
      title: 'Projets Structurants',
      description: 'Transformations industrielles locales et infrastructures modernes',
      icon: Building
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Découvrir le Gabon</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un pays aux richesses naturelles exceptionnelles, leader mondial de la conservation 
            et terre d'opportunités pour les investisseurs.
          </p>
        </div>

        {/* Country Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Le Gabon en Chiffres</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {facts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
                    <div className="text-2xl font-bold mb-2">{fact.value}</div>
                    <div className="text-sm opacity-90">{fact.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Economic Assets */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Atouts Économiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Ressources Naturelles</h3>
              <p className="text-gray-600 text-sm">Pétrole, manganèse, or, bois précieux</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Biodiversité</h3>
              <p className="text-gray-600 text-sm">85% de forêt tropicale, leader de la conservation</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Tourisme</h3>
              <p className="text-gray-600 text-sm">Parcs nationaux, plages, écotourisme</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Agriculture</h3>
              <p className="text-gray-600 text-sm">Cacao, café, palmier à huile, hévéa</p>
            </div>
          </div>
        </section>

        {/* Investment Opportunities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Opportunités d'Investissement</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {investments.map((investment, index) => {
              const Icon = investment.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{investment.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{investment.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Travel Information */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Avant de Voyager au Gabon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">📋 Formalités</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Passeport + visa obligatoire pour les Ivoiriens</li>
                  <li>• Visa disponible à l'Ambassade ou en ligne</li>
                  <li>• Durée de séjour selon type de visa</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">💉 Santé</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vaccin fièvre jaune obligatoire</li>
                  <li>• Vaccinations recommandées : Hépatite A/B, Typhoïde</li>
                  <li>• Assurance voyage conseillée</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">💰 Monnaie</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Franc CFA (XAF)</li>
                  <li>• Euro accepté dans certains établissements</li>
                  <li>• Change disponible dans les banques</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">🌤️ Climat</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Climat équatorial</li>
                  <li>• Saison sèche : Mai à Septembre</li>
                  <li>• Température : 22°C - 30°C</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Prêt à Découvrir le Gabon ?</h2>
            <p className="text-lg mb-6 opacity-90">
              Contactez notre équipe consulaire pour planifier votre voyage ou vos investissements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleVisaRequest}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Demander un Visa
              </button>
              <button 
                onClick={handleInvestmentInfo}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
              >
                Information Investissements
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gabon;