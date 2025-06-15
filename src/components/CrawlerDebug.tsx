import { useEffect } from 'react';

export const CrawlerDebug = () => {
  useEffect(() => {
    // Enhanced crawler detection patterns
    const userAgent = navigator.userAgent.toLowerCase();
    const crawlerPatterns = [
      // Google crawlers
      'googlebot', 'google-extended', 'googleother',
      // Bing crawlers  
      'bingbot', 'msnbot', 'bingpreview',
      // Yahoo
      'slurp', 'yahoo',
      // Other search engines
      'duckduckbot', 'baiduspider', 'yandexbot',
      // Social media crawlers
      'facebookexternalhit', 'facebookcatalog', 'facebookplatform',
      'twitterbot', 'linkedinbot', 'whatsapp', 'telegrambot',
      // AI crawlers
      'chatgpt-user', 'gptbot', 'google-extended', 'ccbot',
      'anthropic-ai', 'claude-web', 'claude', 'anthropic',
      // SEO tools
      'semrushbot', 'ahrefsbot', 'mj12bot', 'dotbot',
      // Generic patterns
      'bot', 'crawler', 'spider', 'scraper'
    ];

    const isCrawler = crawlerPatterns.some(pattern => userAgent.includes(pattern));
    
    // Check for headless browsers (often used by crawlers)
    const isHeadless = navigator.webdriver || 
                     window.navigator.webdriver || 
                     !window.chrome ||
                     userAgent.includes('headless');

    // Enhanced logging
    console.log('=== Enhanced Crawler Debug Info ===');
    console.log('User Agent:', navigator.userAgent);
    console.log('Is Crawler Detected:', isCrawler);
    console.log('Is Headless Browser:', isHeadless);
    console.log('Current URL:', window.location.href);
    console.log('Document Title:', document.title);
    console.log('Meta Description:', document.querySelector('meta[name="description"]')?.getAttribute('content'));
    console.log('Canonical URL:', document.querySelector('link[rel="canonical"]')?.getAttribute('href'));
    console.log('Page Load Time:', performance.now());
    console.log('Screen Resolution:', `${screen.width}x${screen.height}`);
    console.log('Viewport Size:', `${window.innerWidth}x${window.innerHeight}`);
    console.log('Language:', navigator.language);
    console.log('Platform:', navigator.platform);
    console.log('Cookie Enabled:', navigator.cookieEnabled);
    console.log('Java Enabled:', navigator.javaEnabled());
    
    // Check for common crawler IPs or referrers
    const referrer = document.referrer;
    console.log('Referrer:', referrer || 'Direct access');
    
    if (isCrawler || isHeadless) {
      console.log('🤖 CRAWLER/BOT DETECTED:', userAgent);
      
      // Enhanced crawler tracking
      const crawlerInfo = {
        userAgent,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        isHeadless,
        detectedPatterns: crawlerPatterns.filter(pattern => userAgent.includes(pattern)),
        pageTitle: document.title,
        metaDescription: document.querySelector('meta[name="description"]')?.getAttribute('content'),
        canonicalUrl: document.querySelector('link[rel="canonical"]')?.getAttribute('href')
      };
      
      console.log('Crawler Info:', crawlerInfo);
      
      // Try to send to analytics (silently fail if not available)
      try {
        if (window.gtag) {
          window.gtag('event', 'crawler_visit', {
            event_category: 'crawler',
            event_label: userAgent,
            custom_map: { custom1: 'crawler_type' }
          });
        }
      } catch (e) {
        console.log('Analytics not available for crawler tracking');
      }
      
      // Store crawler visit in sessionStorage for debugging
      try {
        const crawlerVisits = JSON.parse(sessionStorage.getItem('crawler_visits') || '[]');
        crawlerVisits.push(crawlerInfo);
        sessionStorage.setItem('crawler_visits', JSON.stringify(crawlerVisits.slice(-10))); // Keep last 10
      } catch (e) {
        console.log('Could not store crawler visit data');
      }
    } else {
      console.log('👤 Human user detected');
    }
    
    console.log('=====================================');
  }, []);

  return null;
};
