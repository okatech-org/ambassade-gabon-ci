import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Ambassade du Gabon en Côte d'Ivoire",
  description = "Site officiel de l'Ambassade de la République du Gabon en République de Côte d'Ivoire. Services consulaires, visas, actualités et relations diplomatiques.",
  keywords = "Ambassade Gabon, Côte d'Ivoire, consulat, visa, passeport, diplomatie, services consulaires, relations bilatérales",
  image = "/og-image.jpg",
  url = "https://ambassade-gabon-ci.gov.ga/",
  type = "website",
  noIndex = false
}) => {
  const fullTitle = title.includes("Ambassade du Gabon") 
    ? title 
    : `${title} - Ambassade du Gabon en Côte d'Ivoire`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Ambassade du Gabon en Côte d'Ivoire" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Language */}
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:locale:alternate" content="en_US" />
    </Helmet>
  );
};

export default SEOHead;