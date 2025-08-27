import React, { useState } from 'react';
import { Calendar, User, Building, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

const Audience = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    organisation: '',
    fonction: '',
    motif: '',
    description: '',
    datePreferee: '',
    documents: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const motifsEligibles = [
    'Affaires économiques et commerciales',
    'Coopération institutionnelle', 
    'Investissements au Gabon',
    'Questions consulaires complexes',
    'Partenariats éducatifs ou culturels',
    'Relations diplomatiques',
    'Autre (à préciser)'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    if (!formData.telephone.trim()) newErrors.telephone = 'Le téléphone est requis';
    if (!formData.organisation.trim()) newErrors.organisation = 'L\'organisation est requise';
    if (!formData.fonction.trim()) newErrors.fonction = 'La fonction est requise';
    if (!formData.motif) newErrors.motif = 'Le motif est requis';
    if (!formData.description.trim()) {
      newErrors.description = 'La description est requise';
    } else if (formData.description.trim().length < 50) {
      newErrors.description = 'La description doit contenir au moins 50 caractères';
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
      // Simulation d'envoi - remplacer par vraie API
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setSubmitStatus('success');
      setFormData({
        nom: '', prenom: '', email: '', telephone: '', organisation: '',
        fonction: '', motif: '', description: '', datePreferee: '', documents: null
      });
      setErrors({});
      
      setTimeout(() => setSubmitStatus('idle'), 8000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erreur lors de la soumission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFormData(prev => ({ ...prev, documents: files }));
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src="/Sceau du Gabon.png" 
              alt="Sceau de la République du Gabon" 
              className="w-20 h-20 object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Demande d'Audience avec l'Ambassadeur</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Son Excellence l'Ambassadeur reçoit sur rendez-vous pour les affaires officielles, 
            les partenariats et les questions consulaires importantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Process Info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Procédure</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Préparation</h3>
                    <p className="text-gray-600 text-sm">Préparer un dossier justifiant votre demande d'audience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Soumission</h3>
                    <p className="text-gray-600 text-sm">Remplir le formulaire avec pièces justificatives</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Traitement</h3>
                    <p className="text-gray-600 text-sm">Analyse de la demande (7 à 14 jours ouvrables)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Confirmation</h3>
                    <p className="text-gray-600 text-sm">Notification par email avec date et heure</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-800 mb-2">⏰ Délais</h3>
                <p className="text-yellow-700 text-sm">
                  Les demandes d'audience sont traitées dans un délai de 7 à 14 jours ouvrables. 
                  Une réponse vous sera communiquée par email.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Formulaire de Demande</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="text-green-800 font-semibold mb-2">Demande d'audience soumise avec succès !</h3>
                      <p className="text-green-700 mb-2">
                        Votre demande d'audience a été transmise au cabinet de Son Excellence l'Ambassadeur.
                      </p>
                      <p className="text-green-700 text-sm">
                        Vous recevrez une réponse par email dans un délai de 7 à 14 jours ouvrables.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-red-800 font-medium">Erreur lors de la soumission</p>
                      <p className="text-red-700 text-sm">Veuillez réessayer ou contacter l'ambassade directement.</p>
                    </div>
                  </div>
                )}

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
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
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.prenom ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                    {errors.prenom && (
                      <p className="mt-1 text-sm text-red-600">{errors.prenom}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
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
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.telephone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                    {errors.telephone && (
                      <p className="mt-1 text-sm text-red-600">{errors.telephone}</p>
                    )}
                  </div>
                </div>

                {/* Professional Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organisation *
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.organisation ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                    {errors.organisation && (
                      <p className="mt-1 text-sm text-red-600">{errors.organisation}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fonction *
                    </label>
                    <input
                      type="text"
                      name="fonction"
                      value={formData.fonction}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.fonction ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                    {errors.fonction && (
                      <p className="mt-1 text-sm text-red-600">{errors.fonction}</p>
                    )}
                  </div>
                </div>

                {/* Meeting Details */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motif de la demande *
                  </label>
                  <select
                    name="motif"
                    value={formData.motif}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.motif ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Sélectionner un motif</option>
                    {motifsEligibles.map((motif, idx) => (
                      <option key={idx} value={motif}>{motif}</option>
                    ))}
                  </select>
                  {errors.motif && (
                    <p className="mt-1 text-sm text-red-600">{errors.motif}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description détaillée *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Décrivez l'objet de votre demande d'audience de manière précise..."
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.description ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date préférée
                  </label>
                  <input
                    type="date"
                    name="datePreferee"
                    value={formData.datePreferee}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Documents justificatifs
                  </label>
                  <input
                    type="file"
                    name="documents"
                    onChange={handleFileChange}
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Formats acceptés : PDF, DOC, JPG, PNG (Max 5MB par fichier)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <LoadingSpinner size="sm" className="text-white" />
                  ) : (
                    <Calendar className="h-5 w-5" />
                  )}
                  {isSubmitting ? 'Soumission en cours...' : 'Soumettre la Demande d\'Audience'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Informations Importantes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Délai de Traitement</h3>
                <p className="text-gray-600">7 à 14 jours ouvrables</p>
              </div>
              <div className="text-center">
                <User className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Présence Requise</h3>
                <p className="text-gray-600">En personne à l'Ambassade</p>
              </div>
              <div className="text-center">
                <FileText className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Dossier Complet</h3>
                <p className="text-gray-600">Tous documents justificatifs requis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audience;