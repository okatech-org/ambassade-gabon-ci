# Ambassade du Gabon en Côte d'Ivoire - Site Web Officiel

Site web moderne et professionnel pour l'Ambassade de la République du Gabon en République de Côte d'Ivoire.

## 🚀 Fonctionnalités

### Services Consulaires
- **Services aux Gabonais** : Passeports, état civil, légalisation de documents
- **Services aux Ivoiriens** : Visas pour le Gabon (tourisme, affaires, transit, long séjour)
- **Inscription consulaire obligatoire** avec système de suivi
- **Inscription de voyage recommandée** pour la sécurité

### Fonctionnalités Diplomatiques
- **Demande d'audience** avec l'Ambassadeur
- **Actualités** du Gabon et relations bilatérales
- **Informations pays** et opportunités d'investissement
- **Services d'urgence** 24h/7j

### Fonctionnalités Techniques
- **Design responsive** optimisé mobile-first
- **Accessibilité WCAG 2.1 AA** complète
- **SEO optimisé** avec métadonnées structurées
- **Performance optimisée** (< 3s de chargement)
- **Sécurité renforcée** avec headers de sécurité

## 🛠️ Technologies Utilisées

- **Frontend** : React 18 + TypeScript
- **Styling** : Tailwind CSS avec système de design personnalisé
- **Routing** : React Router v6
- **Icons** : Lucide React
- **Build Tool** : Vite
- **SEO** : React Helmet Async
- **Accessibility** : Utilitaires d'accessibilité personnalisés

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx      # Navigation principale
│   ├── Footer.tsx      # Pied de page
│   ├── FAQ.tsx         # Questions fréquentes
│   ├── ErrorBoundary.tsx # Gestion d'erreurs
│   ├── LoadingSpinner.tsx # Indicateur de chargement
│   └── SEOHead.tsx     # Métadonnées SEO
├── pages/              # Pages principales
│   ├── Home.tsx        # Page d'accueil
│   ├── About.tsx       # À propos de l'ambassade
│   ├── Services.tsx    # Services consulaires
│   ├── Audience.tsx    # Demande d'audience
│   ├── News.tsx        # Actualités
│   ├── Gabon.tsx       # Découvrir le Gabon
│   └── Contact.tsx     # Contact
├── hooks/              # Hooks personnalisés
│   ├── useIntersectionObserver.ts
│   └── useLocalStorage.ts
├── utils/              # Utilitaires
│   ├── analytics.ts    # Suivi analytique
│   └── accessibility.ts # Utilitaires d'accessibilité
└── index.css          # Styles globaux et système de design
```

## 🎨 Système de Design

### Couleurs
- **Primaire** : Vert inspiré du drapeau gabonais (#16A085)
- **Secondaire** : Jaune gabonais (#F1C40F)  
- **Accent** : Bleu gabonais (#2980B9)
- **Neutres** : Échelle de gris complète

### Typographie
- **Police** : Inter (Google Fonts)
- **Échelle** : Système modulaire de 12 tailles
- **Hauteurs de ligne** : 120% (titres) à 150% (corps)

### Espacement
- **Système** : Base 8px avec échelle cohérente
- **Grille** : CSS Grid et Flexbox

### Composants
- **Boutons** : Styles primaire/secondaire avec états
- **Formulaires** : Validation et états d'erreur
- **Cartes** : Ombres et animations subtiles

## ♿ Accessibilité

### Conformité WCAG 2.1 AA
- **Navigation clavier** complète
- **Lecteurs d'écran** optimisés
- **Contrastes** respectés (4.5:1 minimum)
- **Focus management** pour les modales
- **Skip links** pour la navigation rapide

### Fonctionnalités Inclusives
- **Reduced motion** respecté
- **High contrast** supporté
- **Screen reader** announcements
- **Keyboard trapping** dans les overlays

## 🔧 Installation et Développement

```bash
# Installation des dépendances
npm install

# Développement local
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview

# Linting
npm run lint
```

## 📊 Performance

### Métriques Cibles
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **First Input Delay** : < 100ms

### Optimisations
- **Code splitting** automatique
- **Lazy loading** des images
- **Preconnect** aux domaines externes
- **Font display swap** pour les polices
- **Compression** des assets

## 🔒 Sécurité

### Headers de Sécurité
- **Content Security Policy** (CSP)
- **X-Frame-Options** : DENY
- **X-Content-Type-Options** : nosniff
- **X-XSS-Protection** : activé

### Bonnes Pratiques
- **Validation** côté client et serveur
- **Sanitization** des entrées utilisateur
- **HTTPS** obligatoire en production
- **Secrets** via variables d'environnement

## 🌐 SEO et Référencement

### Métadonnées
- **Open Graph** pour les réseaux sociaux
- **Twitter Cards** optimisées
- **Schema.org** structured data
- **Canonical URLs** définies

### Contenu
- **Sitemap XML** généré
- **Robots.txt** configuré
- **Alt text** sur toutes les images
- **Headings** hiérarchisés (H1-H6)

## 📱 Responsive Design

### Breakpoints
- **Mobile** : < 640px
- **Tablet** : 640px - 1024px  
- **Desktop** : > 1024px
- **Large** : > 1280px

### Approche Mobile-First
- Design optimisé mobile en priorité
- Progressive enhancement pour desktop
- Touch-friendly sur tous les appareils

## 🚀 Déploiement

### Environnements
- **Développement** : Local avec Vite
- **Staging** : Preview deployments
- **Production** : CDN avec cache optimisé

### CI/CD
- **Build** automatique sur commit
- **Tests** de qualité et accessibilité
- **Déploiement** automatisé

## 📞 Support et Maintenance

### Monitoring
- **Analytics** : Suivi des performances
- **Error tracking** : Capture des erreurs
- **Uptime monitoring** : Surveillance 24/7

### Mises à jour
- **Sécurité** : Patches automatiques
- **Contenu** : CMS pour l'équipe
- **Fonctionnalités** : Releases planifiées

## 📄 Licence

Ce projet est développé pour l'Ambassade de la République du Gabon en République de Côte d'Ivoire.

---

**Contact Technique** : Pour toute question technique, contactez l'équipe de développement.
**Contact Ambassade** : ambga.cotedivoire@diplomatie.gouv.ga