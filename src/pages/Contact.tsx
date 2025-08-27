import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.sujet.trim()) {
      newErrors.sujet = 'Le sujet est requis';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulation d'envoi d'email - remplacer par vraie API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ nom: '', email: '', sujet: '', message: '' });
      setErrors({});
      
      // Auto-reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Nous Contacter</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'équipe de l'Ambassade du Gabon est à votre écoute pour répondre à vos questions 
            et vous accompagner dans vos démarches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Informations de Contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Cocody Danga-Nord<br />
                      Derrière la Direction de la Géologie et Sodemi<br />
                      Rue B 5101<br />
                      01 BP 3765 Abidjan 01, Côte d'Ivoire
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Téléphones</h3>
                    <p className="text-gray-600">
                      +225 27 22 44 51 54<br />
                      +225 27 22 44 66 84
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">ambga.cotedivoire@diplomatie.gouv.ga</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Horaires d'Ouverture</h3>
                    <p className="text-gray-600">
                      Lundi au Vendredi : 8h30 - 15h30<br />
                      <span className="text-red-600 font-medium">(Sur rendez-vous uniquement)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-red-800 mb-3">🚨 Contacts d'Urgence</h3>
              <div className="space-y-2 text-red-700">
                <p><strong>Urgence Consulaire (24h/7j)</strong> : +225 07 XX XX XX XX</p>
                <p><strong>Police Gabon</strong> : 177 / 1730</p>
                <p><strong>Assistance Rapatriement</strong> : Via Assurance voyage obligatoire</p>
              </div>
            </div>

            {/* Security Information */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-800 mb-3">🛡️ Informations Sécuritaires</h3>
              <div className="space-y-2 text-blue-700">
                <p><strong>Alertes de Sécurité</strong> : Mises à jour régulières sur les conditions locales</p>
                <p><strong>Zones à Risque</strong> : Informations en temps réel sur les manifestations</p>
                <p><strong>Conseils de Voyage</strong> : Recommandations pour votre sécurité</p>
                <p className="text-sm italic">Inscrivez-vous à nos alertes pour rester informé</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Localisation</h3>
              <p className="text-gray-600 mb-4">Ambassade du Gabon - Cocody Danga-Nord</p>
              <button 
                onClick={() => window.open('https://maps.google.com/?q=Ambassade+Gabon+Abidjan', '_blank')}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Voir sur la carte
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Envoyez-nous un Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-green-800 font-medium">Message envoyé avec succès !</p>
                    <p className="text-green-700 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="text-red-800 font-medium">Erreur lors de l'envoi</p>
                    <p className="text-red-700 text-sm">Veuillez réessayer ou nous contacter directement.</p>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.nom ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.nom && (
                  <p className="mt-1 text-sm text-red-600">{errors.nom}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                  placeholder="Objet de votre message"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.sujet ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.sujet && (
                  <p className="mt-1 text-sm text-red-600">{errors.sujet}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Décrivez votre demande ou question en détail..."
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <LoadingSpinner size="sm" className="text-white" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Community Section */}
        <section className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Communauté Gabonaise en Côte d'Ivoire</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-2">🎭 Associations Culturelles</h3>
                <p className="opacity-90 text-sm">Promotion des arts et traditions gabonaises</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">💼 Réseau Professionnel</h3>
                <p className="opacity-90 text-sm">Cadres gabonais en Côte d'Ivoire</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🎓 Groupes Étudiants</h3>
                <p className="opacity-90 text-sm">Étudiants dans les universités ivoiriennes</p>
              </div>
            </div>
            <p className="text-lg opacity-90">
              Rejoignez la communauté gabonaise et participez aux événements culturels et célébrations nationales
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;