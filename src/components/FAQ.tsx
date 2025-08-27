import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FAQProps {
  compact?: boolean;
}

const FAQ = ({ compact = false }: FAQProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [faqRef, faqVisible] = useIntersectionObserver({ threshold: 0.1 });

  const faqItems = [
    {
      question: "L'ambassade du Gabon peut-elle m'aider en cas de problèmes juridiques à l'étranger ?",
      answer: "Oui, l'ambassade peut vous fournir des conseils précieux et vous orienter vers des avocats qualifiés ou des services juridiques locaux. Nous maintenons un réseau de professionnels du droit pour vous accompagner dans vos démarches."
    },
    {
      question: "Que dois-je faire si je perds mon passeport gabonais en Côte d'Ivoire ?",
      answer: "Contactez immédiatement l'ambassade pour signaler la perte. Nous vous guiderons sur la procédure de remplacement d'urgence. Vous devrez fournir une déclaration de perte, des photos d'identité et des documents justificatifs. Le processus peut être accéléré en cas d'urgence."
    },
    {
      question: "L'ambassade aide-t-elle en cas d'urgence médicale ?",
      answer: "Absolument. L'ambassade peut vous aider à trouver des établissements de santé adaptés, contacter vos proches si nécessaire, et coordonner avec les autorités médicales locales. Nous maintenons une liste d'hôpitaux et de médecins recommandés."
    },
    {
      question: "Comment puis-je obtenir des informations sur les conditions de sécurité en Côte d'Ivoire ?",
      answer: "L'ambassade fournit régulièrement des alertes de sécurité et des mises à jour sur la situation dans le pays. Inscrivez-vous à notre newsletter et suivez nos canaux officiels pour recevoir ces informations en temps réel."
    },
    {
      question: "Quels sont les délais pour obtenir un visa pour le Gabon ?",
      answer: "Les délais varient selon le type de visa : 24-48h pour le transit, 3-5 jours pour les affaires, 5-7 jours pour le tourisme, et 10-15 jours pour les longs séjours. Les demandes complètes sont traitées plus rapidement."
    },
    {
      question: "L'ambassade peut-elle m'aider à rapatrier un proche décédé ?",
      answer: "Oui, nous assistons les familles dans toutes les démarches de rapatriement. Cela inclut la coordination avec les autorités locales, les formalités administratives, et l'accompagnement des familles endeuillées."
    },
    {
      question: "Comment puis-je voter aux élections gabonaises depuis la Côte d'Ivoire ?",
      answer: "Les ressortissants inscrits au registre consulaire peuvent voter à l'ambassade lors des élections. Nous organisons des bureaux de vote et communiquons les modalités via nos canaux officiels."
    },
    {
      question: "L'ambassade organise-t-elle des événements culturels ?",
      answer: "Oui, nous organisons régulièrement des événements pour célébrer les fêtes nationales, promouvoir la culture gabonaise et renforcer les liens communautaires. Suivez notre agenda culturel pour ne rien manquer."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  if (compact) {
    return (
      <div ref={faqRef}>
        <div className="space-y-3">
          {faqItems.slice(0, 4).map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-green-50 transition-colors"
              >
                <h3 className="text-sm font-semibold text-gray-800 pr-3">
                  {item.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-4 w-4 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-green-600 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-4 pb-3">
                  <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <button 
            onClick={() => window.location.href = '/contact'}
            className="w-full btn btn-secondary py-3"
          >
            Plus de Questions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={faqRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${faqVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800">Questions Fréquentes</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses aux questions les plus courantes
          </p>
        </div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`card-elevated overflow-hidden hover-lift ${faqVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 100}` : 'opacity-0'}`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-green-50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-gray-800 pr-4 group-hover:text-green-600 transition-colors">
                  {item.question}
                </h3>
                <div className={`w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-all duration-300 ${openItems.includes(index) ? 'bg-green-500 group-hover:bg-green-600' : ''}`}>
                  {openItems.includes(index) ? (
                    <ChevronUp className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${openItems.includes(index) ? 'text-white' : 'text-green-600'}`} />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-600 flex-shrink-0 transition-all duration-300" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6 animate-fade-in-up">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-700 leading-relaxed text-lg">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center ${faqVisible ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Notre équipe consulaire est là pour vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="btn btn-primary px-8 py-4 hover-lift"
              >
                Nous Contacter
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="btn btn-secondary px-8 py-4 hover-lift"
              >
                Prendre Rendez-vous
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;