import React, { useState } from 'react';
import { FileText, Users, Shield, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('gabonais');
  const [appointmentStatus, setAppointmentStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const navigate = useNavigate();

  const handleAppointmentClick = async () => {
    setAppointmentStatus('loading');
    // Simulation de redirection vers système de rendez-vous
    await new Promise(resolve => setTimeout(resolve, 1000));
    setAppointmentStatus('success');
    setTimeout(() => {
      setAppointmentStatus('idle');
      // Rediriger vers page de contact ou système externe
      navigate('/contact');
    }, 2000);
  };

  const handleDownloadForms = () => {
    // Simulation de téléchargement de formulaires
    const link = document.createElement('a');
    link.href = '#'; // Remplacer par vraie URL des formulaires
    link.download = 'formulaires-consulaires-gabon.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const gabonaisServices = [
    {
      category: 'Passeports et Cartes d\'Identité',
      icon: FileText,
      services: [
        'Renouvellement de passeport gabonais',
        'Première demande de passeport',
        'Carte d\'identité nationale',
        'Documents d\'urgence de voyage'
      ]
    },
    {
      category: 'État Civil',
      icon: Users,
      services: [
        'Transcription d\'actes de naissance',
        'Légalisation d\'actes de mariage',
        'Certificats de célibat',
        'Actes de décès'
      ]
    },
    {
      category: 'Services Juridiques',
      icon: Shield,
      services: [
        'Légalisation de documents',
        'Procurations',
        'Attestations diverses',
        'Casier judiciaire'
      ]
    }
  ];

  const ivoiriensServices = [
    {
      type: 'Visa Touristique',
      description: 'Séjour touristique au Gabon jusqu\'à 90 jours',
      duration: '5-7 jours ouvrables',
      requirements: ['Passeport valide', 'Photo d\'identité', 'Justificatif d\'hébergement', 'Billet retour']
    },
    {
      type: 'Visa d\'Affaires',
      description: 'Voyage d\'affaires, mission commerciale ou conférence',
      duration: '3-5 jours ouvrables',
      requirements: ['Invitation d\'entreprise gabonaise', 'Justificatif d\'activité', 'Assurance voyage']
    },
    {
      type: 'Visa de Transit',
      description: 'Passage en transit par le Gabon',
      duration: '24-48 heures',
      requirements: ['Billet de continuation', 'Visa du pays de destination']
    },
    {
      type: 'Visa de Long Séjour',
      description: 'Résidence temporaire ou permanente',
      duration: '10-15 jours ouvrables',
      requirements: ['Contrat de travail', 'Certificat médical', 'Casier judiciaire']
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Services Consulaires</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'Ambassade du Gabon vous accompagne dans toutes vos démarches administratives 
            avec professionnalisme et efficacité.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="mb-12">
          <div className="border-b border-gray-200">
            <nav className="flex justify-center space-x-8">
              <button
                onClick={() => setActiveTab('gabonais')}
                className={`py-4 px-6 border-b-2 font-medium text-lg transition-colors duration-200 ${
                  activeTab === 'gabonais'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                🇬🇦 Services aux Ressortissants Gabonais
              </button>
              <button
                onClick={() => setActiveTab('ivoiriens')}
                className={`py-4 px-6 border-b-2 font-medium text-lg transition-colors duration-200 ${
                  activeTab === 'ivoiriens'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                🇨🇮 Services aux Citoyens Ivoiriens
              </button>
            </nav>
          </div>
        </div>

        {/* Gabonais Services */}
        {activeTab === 'gabonais' && (
          <div>
            {/* Important Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-800 text-lg mb-2">📋 Inscription Consulaire OBLIGATOIRE</h3>
                  <div className="text-blue-700">
                    <p className="mb-3"><strong>Pourquoi s'inscrire ?</strong></p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Lien juridique officiel avec le Gabon</li>
                      <li>Assistance consulaire en cas d'urgence</li>
                      <li>Accès facilité aux services</li>
                      <li>Participation aux élections gabonaises</li>
                      <li>Information sur les événements communautaires</li>
                    </ul>
                    <p className="font-medium">Procédure : Inscription en ligne → Documents requis → Validation consulaire</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Registration Notice */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 text-lg mb-2">✈️ Inscription de Voyage RECOMMANDÉE</h3>
                  <div className="text-yellow-700">
                    <p className="mb-3"><strong>Pourquoi enregistrer votre voyage ?</strong></p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Réception d'alertes de sécurité en temps réel</li>
                      <li>Assistance rapide en cas de catastrophes naturelles</li>
                      <li>Information sur les zones à risque et manifestations</li>
                      <li>Aide médicale d'urgence coordonnée</li>
                      <li>Communication efficace avec vos proches</li>
                      <li>Évacuation d'urgence si nécessaire</li>
                    </ul>
                    <p className="font-medium">Cette démarche n'est pas qu'une formalité - c'est votre sécurité !</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gabonaisServices.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Emergency Services */}
            <div className="mt-12 bg-red-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🚨 Services d'Urgence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Problèmes Juridiques</h3>
                  <p className="text-gray-600 text-sm">Orientation vers avocats et services juridiques locaux</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Passeport Perdu</h3>
                  <p className="text-gray-600 text-sm">Remplacement d'urgence et procédures accélérées</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Urgence Médicale</h3>
                  <p className="text-gray-600 text-sm">Aide pour trouver établissements de santé et contact famille</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Détention</h3>
                  <p className="text-gray-600 text-sm">Assistance consulaire et soutien aux ressortissants détenus</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ivoiriens Services */}
        {activeTab === 'ivoiriens' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Visas pour le Gabon</h2>
              <p className="text-gray-600">
                Découvrez les différents types de visas disponibles pour vos voyages au Gabon
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ivoiriensServices.map((visa, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{visa.type}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{visa.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{visa.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Documents requis :</h4>
                    <ul className="space-y-2">
                      {visa.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Besoin d'Assistance ?</h2>
          <p className="text-lg mb-6 opacity-90">
            Notre équipe consulaire est là pour vous accompagner dans toutes vos démarches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleAppointmentClick}
              disabled={appointmentStatus === 'loading'}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {appointmentStatus === 'loading' ? 'Redirection...' : 
               appointmentStatus === 'success' ? '✅ Redirection vers contact' : 
               'Prendre Rendez-vous'}
            </button>
            <button 
              onClick={handleDownloadForms}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Télécharger les Formulaires
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;