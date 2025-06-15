
import { useEffect } from 'react';

export const CrawlerOptimization = () => {
  useEffect(() => {
    try {
      // Simple crawler optimization without duplicating structured data
      const ensureBasicMetaTags = () => {
        // Ensure charset is first
        const existingCharset = document.querySelector('meta[charset]');
        if (!existingCharset) {
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

        // Add X-UA-Compatible for better crawler compatibility
        if (!document.querySelector('meta[http-equiv="X-UA-Compatible"]')) {
          const httpEquiv = document.createElement('meta');
          httpEquiv.setAttribute('http-equiv', 'X-UA-Compatible');
          httpEquiv.setAttribute('content', 'IE=edge');
          document.head.appendChild(httpEquiv);
        }
      };

      // Log crawler access for debugging
      const logCrawlerAccess = () => {
        const userAgent = navigator.userAgent.toLowerCase();
        const crawlers = [
          'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
          'facebookexternalhit', 'twitterbot', 'linkedinbot', 'whatsapp',
          'chatgpt-user', 'gptbot', 'anthropic-ai', 'claude-web'
        ];
        
        const isCrawler = crawlers.some(crawler => userAgent.includes(crawler));
        if (isCrawler) {
          console.log('Crawler detected:', userAgent);
        }
      };

      ensureBasicMetaTags();
      logCrawlerAccess();

    } catch (error) {
      console.error('Error in CrawlerOptimization:', error);
    }
  }, []);

  return null;
};
