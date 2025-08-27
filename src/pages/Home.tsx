import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { ExternalLink, FileText, Calendar, Users, ArrowRight, Sparkles, Globe, Shield, Heart, CheckCircle, Star, Award, MapPin, Phone, Mail } from 'lucide-react';
import FAQ from '../components/FAQ';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Home = () => {
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [newsletterStatus, setNewsletterStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Intersection Observer hooks for animations
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [servicesRef, servicesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [newsRef, newsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [statsRef, statsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [testimonialsRef, testimonialsVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterStatus('error');
      return;
    }
    
    setNewsletterStatus('loading');
    
    try {
      // Simulation d'inscription newsletter
      await new Promise(resolve => setTimeout(resolve, 1500));
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    } catch (error) {
      setNewsletterStatus('error');
    }
  };

  const handleServiceClick = (link: string) => {
    navigate(link);
  };

  const quickServices = [
    {
      title: 'Demande de Visa',
      description: 'Visa touristique, d\'affaires ou de transit pour le Gabon',
      icon: FileText,
      link: '/services',
      color: 'from-green-500 to-emerald-600',
      delay: '100'
    },
    {
      title: 'Renouvellement Passeport',
      description: 'Service de renouvellement pour ressortissants gabonais',
      icon: FileText,
      link: '/services',
      color: 'from-blue-500 to-cyan-600',
      delay: '200'
    },
    {
      title: 'Légalisation Documents',
      description: 'Authentification et légalisation de vos documents',
      icon: Shield,
      link: '/services',
      color: 'from-purple-500 to-violet-600',
      delay: '300'
    },
    {
      title: 'Audience Ambassadeur',
      description: 'Demande de rendez-vous avec Son Excellence l\'Ambassadeur',
      icon: Calendar,
      link: '/audience',
      color: 'from-yellow-500 to-orange-600',
      delay: '400'
    }
  ];

  const news = [
    {
      title: 'Élection Présidentielle 2025',
      excerpt: 'S.E.M. Brice Clotaire Oligui Nguema élu 4ème Président du Gabon avec 90,35% des voix',
      date: '15 Avril 2025',
      category: 'Politique',
      image: 'https://images.pexels.com/photos/6794590/pexels-photo-6794590.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Projets Majeurs 2025',
      excerpt: 'Lancement des trois grands chantiers : Port de Mayumba, ligne ferroviaire Bélinga-Boué-Mayumba, barrage de Boué',
      date: '10 Mars 2025',
      category: 'Économie',
      image: 'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Relations Bilatérales',
      excerpt: 'Renforcement de la coopération Gabon-Côte d\'Ivoire dans les secteurs agricole, minier et énergétique',
      date: '5 Mars 2025',
      category: 'Diplomatie',
      image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Obame',
      role: 'Ressortissante Gabonaise',
      content: 'L\'équipe de l\'ambassade m\'a aidée rapidement pour le renouvellement de mon passeport. Service professionnel et efficace.',
      rating: 5
    },
    {
      name: 'Jean-Baptiste Kouassi',
      role: 'Homme d\'affaires Ivoirien',
      content: 'Excellent accompagnement pour l\'obtention de mon visa d\'affaires. Procédure claire et délais respectés.',
      rating: 5
    },
    {
      name: 'Dr. Fatou Ndiaye',
      role: 'Étudiante',
      content: 'Assistance remarquable lors de mon urgence médicale. L\'ambassade a été réactive et m\'a orientée efficacement.',
      rating: 5
    }
  ];

  const stats = [
    { number: '60+', label: 'Années de Relations', icon: Globe },
    { number: '400B', label: 'FCFA d\'Échanges', icon: Award },
    { number: '27', label: 'Accords Bilatéraux', icon: FileText },
    { number: '24/7', label: 'Assistance d\'Urgence', icon: Shield }
  ];

  return (
    <div>
      <SEOHead 
        title="Accueil - Ambassade du Gabon en Côte d'Ivoire"
        description="Site officiel de l'Ambassade du Gabon en Côte d'Ivoire. Services consulaires, visas, actualités diplomatiques et relations bilatérales."
      />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: 'url(/gabonci.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        aria-labelledby="hero-title"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white bg-opacity-5 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-white bg-opacity-5 rounded-full animate-float animate-delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-float animate-delay-500"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        
        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="space-y-8">
            {/* Main Title */}
            <div className={`${heroVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
              <h1 id="hero-title" className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                  {/* Title removed */}
                </span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className={`${heroVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
              <p className="text-xl md:text-3xl mb-12 max-w-5xl mx-auto font-light text-balance opacity-95">
                L'Ambassade du Gabon en Côte d'Ivoire : 
                <span className="font-semibold text-yellow-200"> Votre lien avec la Patrie</span>
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center ${heroVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
              <Link
                to="/services"
                className="btn btn-primary text-lg px-10 py-4 hover-lift group"
              >
                <FileText className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Services Consulaires
              </Link>
              <Link
                to="/audience"
                className="btn btn-secondary text-lg px-10 py-4 hover-lift group"
              >
                <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Demander une Audience
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="py-12 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${statsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className={`text-center group ${statsVisible ? `animate-scale-in animate-delay-${(index + 1) * 100}` : 'opacity-0'}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Excellence Diplomatique & Service Consulaire
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Dans le contexte de renouveau que connaît notre pays sous la présidence de 
              <strong className="text-green-600"> S.E.M. Brice Clotaire Oligui Nguema</strong>, 
              nous œuvrons quotidiennement au renforcement des relations exceptionnelles qui unissent le Gabon et la Côte d'Ivoire.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group hover-lift">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">Relations Diplomatiques</h3>
                <p className="text-gray-600 text-sm">Renforcement des liens bilatéraux</p>
              </div>
              <div className="text-center group hover-lift">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Protection Consulaire</h3>
                <p className="text-gray-600 text-sm">Assistance aux ressortissants</p>
              </div>
              <div className="text-center group hover-lift">
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">Solidarité Fraternelle</h3>
                <p className="text-gray-600 text-sm">Accompagnement de la diaspora</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section 
        ref={servicesRef}
        className="py-16 bg-gradient-to-r from-green-50 to-emerald-50" 
        aria-labelledby="services-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 id="services-title" className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Services Consulaires</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Accédez rapidement à nos services consulaires essentiels</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {quickServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  role="listitem"
                  className={`card hover-lift group cursor-pointer p-8 ${servicesVisible ? `animate-scale-in animate-delay-${service.delay}` : 'opacity-0'}`}
                  aria-describedby={`service-desc-${index}`}
                  onClick={() => handleServiceClick(service.link)}
                >
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">{service.title}</h3>
                  <p id={`service-desc-${index}`} className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center text-green-600 group-hover:text-green-700 font-medium">
                    <span>En savoir plus</span>
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section 
        ref={newsRef}
        className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50" 
        aria-labelledby="news-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center mb-12 ${newsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="text-center md:text-left">
              <h2 id="news-title" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Actualités Diplomatiques</h2>
              <p className="text-xl text-gray-600">Les dernières nouvelles du Gabon et de l'Ambassade</p>
            </div>
            <Link
              to="/news"
              className="hidden md:flex items-center text-green-600 hover:text-green-700 font-semibold hover-scale"
            >
              Voir toutes les actualités
              <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10" role="list">
            {news.map((article, index) => (
              <article 
                key={index} 
                className={`card-elevated hover-lift overflow-hidden group ${newsVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 200}` : 'opacity-0'}`}
                role="listitem"
              >
                <div className="h-48 bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${article.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <time className="text-sm text-gray-500 font-medium">{article.date}</time>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">{article.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                  <Link
                    to="/news"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Lire la suite
                    <ExternalLink className="h-5 w-5 ml-2" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Newsletter Section */}
      <section className="py-12 bg-gabon-gradient text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-float animate-delay-300"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Restez Informé</h2>
          <p className="text-xl mb-8 opacity-95 max-w-3xl mx-auto">
            Recevez les actualités du Gabon et les informations importantes de l'Ambassade
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                disabled={newsletterStatus === 'loading'}
                className="flex-1 form-input text-gray-800 disabled:bg-gray-200"
              />
              <button 
                type="submit"
                disabled={newsletterStatus === 'loading'}
                className="btn bg-yellow-500 text-gray-800 px-8 py-4 font-bold hover:bg-yellow-400 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {newsletterStatus === 'loading' ? 'Inscription...' : 'S\'abonner'}
              </button>
            </div>
            {newsletterStatus === 'success' && (
              <p className="text-green-200 mt-4 animate-fade-in-up">✅ Inscription réussie ! Merci de votre intérêt.</p>
            )}
            {newsletterStatus === 'error' && (
              <p className="text-red-200 mt-4 animate-fade-in-up">❌ Erreur d'inscription. Vérifiez votre email.</p>
            )}
          </form>
        </div>
      </section>


      {/* FAQ & Contact Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQ Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Questions Fréquentes</h2>
              <FAQ compact={true} />
            </div>
            
            {/* Contact Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Rapide</h2>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/Sceau du Gabon.png" 
                    alt="Sceau de la République du Gabon" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Adresse</h3>
                      <p className="text-gray-600">Cocody Danga-Nord, Abidjan</p>
                      <p className="text-gray-600">01 BP 3765 Abidjan 01</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Téléphone</h3>
                      <p className="text-gray-600">+225 27 22 44 51 54</p>
                      <p className="text-gray-600">+225 27 22 44 51 74</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600 text-sm break-all">ambga.cotedivoire@diplomatie.gouv.ga</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Horaires d'ouverture</h3>
                      <p className="text-gray-600">Lundi - Vendredi : 8h30 - 15h30</p>
                      <p className="text-gray-600">Fermé les weekends et jours fériés</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full btn btn-primary py-3 hover-lift"
                  >
                    Nous Contacter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-emerald-700 text-white relative overflow-hidden" aria-labelledby="cta-title">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-white bg-opacity-5 rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-white bg-opacity-5 rounded-full animate-float animate-delay-400"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-title" className="text-4xl md:text-5xl font-bold mb-8">Découvrez les Opportunités du Nouveau Gabon</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-95 leading-relaxed">
            Sous la présidence de S.E.M. Brice Clotaire Oligui Nguema, le Gabon se transforme et offre 
            de nouvelles perspectives d'investissement et de partenariat.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate('/gabon')}
              className="btn bg-white text-green-600 px-10 py-4 font-bold hover:bg-gray-100 hover-lift"
            >
              Découvrir le Gabon
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="btn btn-ghost border-2 border-white text-white px-10 py-4 font-bold hover-lift"
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;