
import { useEffect } from 'react';

export const CrawlerOptimization = () => {
  useEffect(() => {
    try {
      // Ensure basic meta tags for crawler compatibility
      const ensureMetaTags = () => {
        // Ensure charset is first
        if (!document.querySelector('meta[charset]')) {
          const charset = document.createElement('meta');
          charset.setAttribute('charset', 'UTF-8');
          document.head.insertBefore(charset, document.head.firstChild);
        }

        // Ensure viewport meta tag
        if (!document.querySelector('meta[name="viewport"]')) {
          const viewport = document.createElement('meta');
          viewport.setAttribute('name', 'viewport');
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
          document.head.appendChild(viewport);
        }

        // Add robots meta tag if missing
        if (!document.querySelector('meta[name="robots"]')) {
          const robots = document.createElement('meta');
          robots.setAttribute('name', 'robots');
          robots.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
          document.head.appendChild(robots);
        }

        // Add language meta tag
        if (!document.querySelector('meta[name="language"]')) {
          const language = document.createElement('meta');
          language.setAttribute('name', 'language');
          language.setAttribute('content', 'English');
          document.head.appendChild(language);
        }

        // Ensure HTML lang attribute
        if (!document.documentElement.getAttribute('lang')) {
          document.documentElement.setAttribute('lang', 'en-IN');
        }
      };

      // Add structured data for better crawler understanding
      const addStructuredData = () => {
        if (!document.querySelector('script[type="application/ld+json"]')) {
          const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "JAMZ Casting Platform",
            "description": "AI-powered casting platform for India's entertainment industry",
            "url": "https://jamz-casting.lovable.app/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://jamz-casting.lovable.app/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          };
          
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.textContent = JSON.stringify(structuredData);
          document.head.appendChild(script);
        }
      };

      // Enhance page accessibility for crawlers
      const enhanceAccessibility = () => {
        // Add skip to content link for screen readers and crawlers
        if (!document.querySelector('#skip-to-content')) {
          const skipLink = document.createElement('a');
          skipLink.id = 'skip-to-content';
          skipLink.href = '#main-content';
          skipLink.textContent = 'Skip to main content';
          skipLink.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;';
          skipLink.addEventListener('focus', () => {
            skipLink.style.cssText = 'position:absolute;left:6px;top:7px;z-index:999999;padding:8px 16px;background:#000;color:#fff;text-decoration:none;';
          });
          skipLink.addEventListener('blur', () => {
            skipLink.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;';
          });
          document.body.insertBefore(skipLink, document.body.firstChild);
        }

        // Add main content identifier
        const mainContent = document.querySelector('main') || document.querySelector('#root > div');
        if (mainContent && !mainContent.id) {
          mainContent.id = 'main-content';
        }
      };

      // Execute optimizations
      ensureMetaTags();
      addStructuredData();
      enhanceAccessibility();

      // Log optimization completion
      console.log('✅ Crawler optimization completed');

    } catch (error) {
      console.error('❌ Error in CrawlerOptimization:', error);
    }
  }, []);

  return null;
};
