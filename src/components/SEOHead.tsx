
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

export const SEOHead = ({
  title = "JAMZ | AI-Powered Casting Platform for India's Entertainment Industry",
  description = "Discover and cast verified talent across India with JAMZ. AI-powered face matching, secure GDPR-compliant database, and streamlined casting workflow for directors and talent agencies.",
  keywords = "casting platform, talent search, actor profiles, casting directors, entertainment industry, AI face matching, India casting, film casting, TV casting, commercial casting",
  canonicalUrl = "https://jamz-casting.lovable.app/",
  ogImage = "https://jamz-casting.lovable.app/og-image.jpg",
  structuredData
}: SEOHeadProps) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "JAMZ Casting Platform",
    "description": description,
    "url": canonicalUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free consultation available"
    },
    "provider": {
      "@type": "Organization",
      "@id": "https://jamz-casting.lovable.app/#organization",
      "name": "JAMZ",
      "description": "AI-powered casting platform for India's entertainment industry",
      "url": "https://jamz-casting.lovable.app/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jamz-casting.lovable.app/logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXX-XXX-XXXX",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Hindi"]
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Casting Platform"
    },
    "featureList": [
      "AI-powered face matching",
      "GDPR compliant database",
      "Verified talent profiles",
      "Advanced search filters",
      "Secure data encryption"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="JAMZ" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="JAMZ Casting Platform" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@jamzcasting" />
      
      {/* Additional SEO */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};
