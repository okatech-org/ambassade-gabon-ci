import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Tag, ExternalLink } from 'lucide-react';

const News = () => {
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [newsletterStatus, setNewsletterStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterStatus('error');
      return;
    }
    
    setNewsletterStatus('loading');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    } catch (error) {
      setNewsletterStatus('error');
    }
  };

  const articles = [
    {
      title: 'S.E.M. Brice Clotaire Oligui Nguema élu 4ème Président du Gabon',
      excerpt: 'Avec 90,35% des voix, le Président Oligui Nguema remporte l\'élection présidentielle d\'avril 2025, ouvrant une nouvelle ère pour le Gabon.',
      content: 'L\'élection présidentielle du 20 avril 2025 a confirmé la confiance du peuple gabonais envers S.E.M. Brice Clotaire Oligui Nguema. Avec un score écrasant de 90,35% des suffrages exprimés, le Président entame un nouveau mandat axé sur la transformation structurelle du pays et le renforcement des institutions démocratiques.',
      date: '21 Avril 2025',
      category: 'Politique',
      image: 'https://images.pexels.com/photos/6794590/pexels-photo-6794590.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Lancement des Trois Grands Chantiers de 2025',
      excerpt: 'Le Gabon lance ses projets phares : Port de Mayumba, ligne ferroviaire Bélinga-Boué-Mayumba et barrage hydroélectrique de Boué.',
      content: 'Ces trois projets structurants vont révolutionner l\'économie gabonaise. Le port en eau profonde de Mayumba positionnera le Gabon comme hub logistique régional. La ligne ferroviaire ouvrira l\'exploitation minière de Bélinga. Le barrage de Boué garantira l\'indépendance énergétique. 163 000 emplois directs et indirects sont prévus.',
      date: '15 Mars 2025',
      category: 'Économie',
      image: 'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Renforcement de la Coopération Gabon-Côte d\'Ivoire',
      excerpt: 'Signature de nouveaux accords de partenariat dans l\'agriculture, les mines et l\'énergie entre les deux pays frères.',
      content: 'La Grande Commission Mixte Gabon-Côte d\'Ivoire a validé de nouveaux projets de coopération. L\'accent est mis sur le transfert de technologie agricole, l\'exploration minière conjointe et les échanges énergétiques. Ces partenariats renforcent les liens historiques entre nos nations.',
      date: '8 Mars 2025',
      category: 'Diplomatie',
      image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Nouvelle Constitution Gabonaise Adoptée',
      excerpt: 'Le Gabon se dote d\'une nouvelle Constitution moderne, renforçant la démocratie et la gouvernance.',
      content: 'Adoptée en novembre 2024, la nouvelle Constitution gabonaise modernise les institutions et renforce l\'État de droit. Elle consacre les droits fondamentaux, améliore la séparation des pouvoirs et introduit de nouveaux mécanismes de participation citoyenne.',
      date: '20 Novembre 2024',
      category: 'Politique',
      image: 'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Le Gabon dans l\'Opération Serengeti 2.0',
      excerpt: 'Participation active du Gabon dans la lutte internationale contre la cybercriminalité.',
      content: 'Le Gabon participe à l\'opération Serengeti 2.0 d\'Interpol contre la cybercriminalité. Cette initiative démontre l\'engagement du pays dans la sécurité numérique régionale et internationale, renforçant sa position de partenaire fiable.',
      date: '12 Février 2025',
      category: 'Sécurité',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Nouveau Pacte Environnemental du Gabon',
      excerpt: 'Lancement d\'une stratégie ambitieuse pour une économie verte et durable.',
      content: 'Le Gabon dévoile son nouveau pacte environnemental, visant à concilier développement économique et préservation de la biodiversité. Avec 85% de forêt tropicale, le pays se positionne comme leader mondial de la conservation.',
      date: '28 Janvier 2025',
      category: 'Environnement',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['Toutes', 'Politique', 'Économie', 'Diplomatie', 'Sécurité', 'Environnement'];
  const [activeCategory, setActiveCategory] = React.useState('Toutes');

  const filteredArticles = activeCategory === 'Toutes' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Actualités</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suivez les dernières nouvelles du Gabon, les relations bilatérales et les activités de l'Ambassade
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredArticles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }}>
                <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-white" />
                    <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">{article.content}</p>
                
                <button 
                  onClick={() => navigate(`/news/${index + 1}`)} // Simulation de navigation vers article
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                >
                  Lire l'article complet
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <section className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">📧 Newsletter de l'Ambassade</h2>
          <p className="text-lg mb-6 opacity-90">
            Recevez les actualités du Gabon et les informations importantes de l'Ambassade
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                disabled={newsletterStatus === 'loading'}
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:bg-gray-200"
              />
              <button 
                type="submit"
                disabled={newsletterStatus === 'loading'}
                className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {newsletterStatus === 'loading' ? 'Inscription...' : 'S\'abonner'}
              </button>
            </div>
            {newsletterStatus === 'success' && (
              <p className="text-green-200 text-sm mt-2">✅ Inscription réussie ! Merci de votre intérêt.</p>
            )}
            {newsletterStatus === 'error' && (
              <p className="text-red-200 text-sm mt-2">❌ Erreur d'inscription. Vérifiez votre email.</p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
};

export default News;