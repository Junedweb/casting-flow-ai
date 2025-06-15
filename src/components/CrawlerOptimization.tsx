
import { useEffect } from 'react';

export const CrawlerOptimization = () => {
  useEffect(() => {
    // Add hreflang if multiple languages are supported in future
    const addHrefLang = () => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = 'en-IN';
      link.href = window.location.href;
      document.head.appendChild(link);
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
      const httpEquiv = document.createElement('meta');
      httpEquiv.setAttribute('http-equiv', 'X-UA-Compatible');
      httpEquiv.setAttribute('content', 'IE=edge');
      document.head.appendChild(httpEquiv);
    };

    // Preload critical resources for better Core Web Vitals
    const preloadCriticalResources = () => {
      // Preload Inter font
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    addHrefLang();
    ensureMetaTags();
    preloadCriticalResources();

    // Add breadcrumb structured data for better navigation understanding
    const addBreadcrumbData = () => {
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
    };

    addBreadcrumbData();
  }, []);

  return null;
};
