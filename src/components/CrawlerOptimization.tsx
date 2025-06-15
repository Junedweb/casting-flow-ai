
import { useEffect } from 'react';

export const CrawlerOptimization = () => {
  useEffect(() => {
    try {
      // Add hreflang if multiple languages are supported in future
      const addHrefLang = () => {
        // Check if hreflang already exists
        if (!document.querySelector('link[hreflang="en-IN"]')) {
          const link = document.createElement('link');
          link.rel = 'alternate';
          link.hreflang = 'en-IN';
          link.href = window.location.href;
          document.head.appendChild(link);
        }
      };

      // Ensure proper meta tags for crawlers
      const ensureMetaTags = () => {
        // Add charset if not present
        if (!document.querySelector('meta[charset]')) {
          const charset = document.createElement('meta');
          charset.setAttribute('charset', 'UTF-8');
          document.head.insertBefore(charset, document.head.firstChild);
        }

        // Add HTTP-equiv meta tags for better crawler understanding
        if (!document.querySelector('meta[http-equiv="X-UA-Compatible"]')) {
          const httpEquiv = document.createElement('meta');
          httpEquiv.setAttribute('http-equiv', 'X-UA-Compatible');
          httpEquiv.setAttribute('content', 'IE=edge');
          document.head.appendChild(httpEquiv);
        }
      };

      // Add breadcrumb structured data for better navigation understanding
      const addBreadcrumbData = () => {
        // Check if breadcrumb data already exists
        if (!document.querySelector('script[type="application/ld+json"]')) {
          const breadcrumbData = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://jamz-casting.lovable.app/"
              }
            ]
          };

          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.textContent = JSON.stringify(breadcrumbData);
          document.head.appendChild(script);
        }
      };

      // Execute all functions with error handling
      addHrefLang();
      ensureMetaTags();
      addBreadcrumbData();

    } catch (error) {
      console.error('Error in CrawlerOptimization:', error);
    }
  }, []);

  return null;
};
