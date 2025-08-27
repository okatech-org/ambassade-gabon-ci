import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">À Propos de l'Ambassade</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'Ambassade du Gabon en Côte d'Ivoire : Plus de 60 ans de relations diplomatiques 
            et d'amitié fraternelle entre nos deux nations.
          </p>
        </div>

        {/* Ambassador's Message */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Mot de l'Ambassadeur</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  "Chers compatriotes gabonais vivant en Côte d'Ivoire, chers amis ivoiriens,
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  L'Ambassade du Gabon en Côte d'Ivoire représente le lien indéfectible entre notre patrie et vous. 
                  Dans le contexte de renouveau que connaît notre pays sous la présidence de S.E.M. Brice Clotaire Oligui Nguema, 
                  nous œuvrons quotidiennement au renforcement des relations exceptionnelles qui unissent le Gabon et la Côte d'Ivoire.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Notre mission est de vous servir avec excellence et de promouvoir les intérêts du Gabon dans ce pays frère."
                </p>
                <div className="mt-8 text-right">
                  <p className="font-semibold text-gray-800">Son Excellence l'Ambassadeur</p>
                  <p className="text-gray-600">République du Gabon</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre Mission</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Service aux Ressortissants</h3>
                    <p className="text-gray-600">Assistance consulaire de qualité à tous les Gabonais résidant en Côte d'Ivoire</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Relations Diplomatiques</h3>
                    <p className="text-gray-600">Renforcement des liens bilatéraux et promotion des intérêts gabonais</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Promotion du Gabon</h3>
                    <p className="text-gray-600">Valorisation de l'image, de la culture et des opportunités économiques du Gabon</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Solidarité Fraternelle</h3>
                    <p className="text-gray-600">Accompagnement de la diaspora et animation de la communauté gabonaise</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Informations Pratiques</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">📍 Adresse</h3>
                  <p className="text-gray-600">
                    Cocody Danga-Nord<br />
                    Derrière la Direction de la Géologie et Sodemi<br />
                    Rue B 5101<br />
                    01 BP 3765 Abidjan 01, Côte d'Ivoire
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">📞 Téléphones</h3>
                  <p className="text-gray-600">
                    +225 27 22 44 51 54<br />
                    +225 27 22 44 66 84
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">📧 Email</h3>
                  <p className="text-gray-600">ambga.cotedivoire@diplomatie.gouv.ga</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">🕒 Horaires</h3>
                  <p className="text-gray-600">
                    Lundi au Vendredi<br />
                    8h30 - 15h30<br />
                    <span className="text-red-600 font-medium">(Sur rendez-vous uniquement)</span>
                  </p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-yellow-800 mb-1">⚡ Urgences Consulaires</h4>
                  <p className="text-yellow-700 text-sm">24h/7j : +225 07 XX XX XX XX</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relations History */}
        <section className="mb-16 py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Relations Gabon-Côte d'Ivoire</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">60+</div>
                <p className="text-lg">Années de Relations Diplomatiques</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">400B</div>
                <p className="text-lg">FCFA d'Échanges Commerciaux (2023)</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">27</div>
                <p className="text-lg">Accords Sectoriels de Partenariat</p>
              </div>
            </div>
            <p className="text-xl mt-8 opacity-90">
              Une coopération exemplaire dans l'agriculture, les mines, l'énergie, la pêche et la formation
            </p>
          </div>
        </section>

        {/* Diplomatic Presence */}
        <section className="py-12 bg-blue-50 rounded-2xl">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Présence Diplomatique Gabonaise</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                L'ambassade du Gabon en Côte d'Ivoire joue un rôle essentiel dans la promotion des relations 
                bilatérales entre les deux pays. Située à Abidjan, la capitale économique, elle sert de point 
                focal pour les services consulaires et diplomatiques.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                En plus de l'ambassade principale, le Gabon maintient une présence consulaire dans d'autres 
                grandes villes ivoiriennes pour mieux servir la diaspora gabonaise et faciliter les échanges 
                entre nos deux nations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cette représentation diplomatique renforce la coopération dans divers domaines, y compris le 
                commerce, la culture et la sécurité, tout en offrant un soutien vital aux ressortissants 
                gabonais vivant ou voyageant en Côte d'Ivoire.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">🏛️ Services Diplomatiques</h3>
                <p className="text-gray-600 text-sm">Relations bilatérales et coopération institutionnelle</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">🛂 Services Consulaires</h3>
                <p className="text-gray-600 text-sm">Assistance aux ressortissants et délivrance de visas</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">🤝 Promotion Économique</h3>
                <p className="text-gray-600 text-sm">Facilitation des échanges commerciaux et investissements</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;