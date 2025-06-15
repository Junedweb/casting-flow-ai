
import { useEffect } from 'react';

export const CrawlerDebug = () => {
  useEffect(() => {
    // Log all available information for debugging crawler access
    console.log('=== Crawler Debug Info ===');
    console.log('User Agent:', navigator.userAgent);
    console.log('Current URL:', window.location.href);
    console.log('Document Title:', document.title);
    console.log('Meta Description:', document.querySelector('meta[name="description"]')?.getAttribute('content'));
    console.log('Canonical URL:', document.querySelector('link[rel="canonical"]')?.getAttribute('href'));
    console.log('=========================');

    // Check if this looks like a crawler
    const userAgent = navigator.userAgent.toLowerCase();
    const crawlerPatterns = [
      'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
      'facebookexternalhit', 'twitterbot', 'linkedinbot', 'whatsapp',
      'chatgpt', 'gptbot', 'anthropic', 'claude', 'bot', 'crawler', 'spider'
    ];
    
    const isCrawler = crawlerPatterns.some(pattern => userAgent.includes(pattern));
    
    if (isCrawler) {
      console.log('🤖 CRAWLER DETECTED:', userAgent);
      
      // Send a simple beacon to track crawler visits
      try {
        fetch('/api/crawler-log', {
          method: 'POST',
          body: JSON.stringify({
            userAgent,
            url: window.location.href,
            timestamp: new Date().toISOString()
          })
        }).catch(() => {
          // Silently fail if endpoint doesn't exist
        });
      } catch (e) {
        // Ignore errors
      }
    }
  }, []);

  return null;
};
