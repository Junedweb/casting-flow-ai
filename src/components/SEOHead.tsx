
import { Helmet } from 'react-helmet-async';
import { getCurrentUrl } from '@/utils/crawlerUtils';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
  pageType?: 'website' | 'article' | 'product' | 'service';
  lastModified?: string;
}

export const SEOHead = ({
  title = "JAMZ | AI-Powered Casting Platform for India's Entertainment Industry",
  description = "Discover and cast verified talent across India with JAMZ. AI-powered face matching, secure GDPR-compliant database, and streamlined casting workflow for directors and talent agencies.",
  keywords = "casting platform, talent search, actor profiles, casting directors, entertainment industry, AI face matching, India casting, film casting, TV casting, commercial casting",
  canonicalUrl,
  ogImage,
  structuredData,
  pageType = "website",
  lastModified = new Date().toISOString()
}: SEOHeadProps) => {
  const baseUrl = getCurrentUrl();
  const finalCanonicalUrl = canonicalUrl || baseUrl;
  const finalOgImage = ogImage || `${baseUrl}og-image.jpg`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        "name": "JAMZ",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}logo.png`,
          "width": 512,
          "height": 512
        },
        "description": "AI-powered casting platform for India's entertainment industry",
        "foundingDate": "2024",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "serviceType": ["Casting Platform", "Talent Management", "AI Face Matching"],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-XXX-XXX-XXXX",
          "contactType": "Customer Service",
          "availableLanguage": ["English", "Hindi"],
          "areaServed": "IN"
        },
        "sameAs": [
          "https://twitter.com/jamzcasting",
          "https://linkedin.com/company/jamz-casting"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}#website`,
        "url": baseUrl,
        "name": "JAMZ Casting Platform",
        "description": description,
        "publisher": {
          "@id": `${baseUrl}#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "WebPage",
        "@id": finalCanonicalUrl + "#webpage",
        "url": finalCanonicalUrl,
        "name": title,
        "description": description,
        "isPartOf": {
          "@id": `${baseUrl}#website`
        },
        "about": {
          "@id": `${baseUrl}#organization`
        },
        "datePublished": "2024-01-01",
        "dateModified": lastModified,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": baseUrl
            }
          ]
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", ".description"]
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "SoftwareApplication",
        "name": "JAMZ Casting Platform",
        "description": description,
        "url": finalCanonicalUrl,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "softwareVersion": "1.0",
        "datePublished": "2024-01-01",
        "dateModified": lastModified,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
          "description": "Free consultation available",
          "availability": "https://schema.org/InStock"
        },
        "provider": {
          "@id": `${baseUrl}#organization`
        },
        "featureList": [
          "AI-powered character analysis",
          "Smart talent pool matching",
          "GDPR compliant database",
          "Verified talent profiles",
          "Advanced search filters",
          "Secure data encryption",
          "Face matching technology",
          "Real-time collaboration"
        ],
        "screenshot": finalOgImage,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="JAMZ" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      
      {/* ChatGPT and AI crawler specific tags */}
      <meta name="chatgpt-crawlable" content="true" />
      <meta name="ai-accessible" content="true" />
      <meta name="openai-crawlable" content="true" />
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="theme-color" content="#f97316" />
      <meta name="msapplication-TileColor" content="#f97316" />
      <meta name="application-name" content="JAMZ" />
      <meta name="apple-mobile-web-app-title" content="JAMZ" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Alternate Language Tags */}
      <link rel="alternate" hrefLang="en-IN" href={finalCanonicalUrl} />
      <link rel="alternate" hrefLang="en" href={finalCanonicalUrl} />
      <link rel="alternate" hrefLang="hi-IN" href={finalCanonicalUrl} />
      
      {/* Open Graph Enhanced */}
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="JAMZ Casting Platform Interface" />
      <meta property="og:site_name" content="JAMZ Casting Platform" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />
      <meta property="article:author" content="JAMZ" />
      <meta property="article:publisher" content={baseUrl} />
      <meta property="article:modified_time" content={lastModified} />
      
      {/* Twitter Card Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:image:alt" content="JAMZ Casting Platform Interface" />
      <meta name="twitter:site" content="@jamzcasting" />
      <meta name="twitter:creator" content="@jamzcasting" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="India" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 day" />
      <meta name="expires" content="never" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Performance and Caching */}
      <meta httpEquiv="cache-control" content="public, max-age=3600" />
      <meta httpEquiv="expires" content="86400" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};
