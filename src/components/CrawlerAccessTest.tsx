
import { useEffect, useState } from 'react';
import { detectCrawler, getCrawlerType } from '@/utils/crawlerUtils';

export const CrawlerAccessTest = () => {
  const [accessInfo, setAccessInfo] = useState<any>(null);

  useEffect(() => {
    try {
      const userAgent = navigator.userAgent;
      const isCrawler = detectCrawler(userAgent);
      const crawlerType = getCrawlerType(userAgent);
      
      const info = {
        timestamp: new Date().toISOString(),
        userAgent,
        isCrawler,
        crawlerType,
        url: window.location.href,
        origin: window.location.origin,
        hostname: window.location.hostname,
        protocol: window.location.protocol,
        isHttps: window.location.protocol === 'https:',
        referrer: document.referrer || 'Direct access',
        language: navigator.language,
        platform: navigator.platform,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        connection: (navigator as any).connection?.effectiveType || 'unknown',
        screenSize: `${screen.width}x${screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`,
        pageTitle: document.title,
        metaDescription: document.querySelector('meta[name="description"]')?.getAttribute('content'),
        hasRobotsMeta: !!document.querySelector('meta[name="robots"]'),
        hasCanonical: !!document.querySelector('link[rel="canonical"]'),
        hasStructuredData: !!document.querySelector('script[type="application/ld+json"]'),
        errors: []
      };

      setAccessInfo(info);
      
      // Log for debugging
      console.log('🔍 Crawler Access Test:', info);
      
      // Store in sessionStorage for external inspection
      try {
        sessionStorage.setItem('crawlerAccessTest', JSON.stringify(info));
      } catch (e) {
        info.errors.push('SessionStorage not available');
      }

      // Test essential page elements
      const essentialTests = {
        hasTitle: !!document.title,
        hasMetaDescription: !!document.querySelector('meta[name="description"]'),
        hasH1: !!document.querySelector('h1'),
        hasMainContent: !!document.querySelector('main, [role="main"], #main-content'),
        hasNavigation: !!document.querySelector('nav, [role="navigation"]'),
        hasFooter: !!document.querySelector('footer, [role="contentinfo"]')
      };

      console.log('📋 Essential Elements Test:', essentialTests);

      // If this is a crawler, make content more accessible
      if (isCrawler) {
        document.body.classList.add('crawler-optimized');
        
        // Add crawler-specific meta tag
        const crawlerMeta = document.createElement('meta');
        crawlerMeta.setAttribute('name', 'crawler-status');
        crawlerMeta.setAttribute('content', `detected-${crawlerType.toLowerCase()}`);
        document.head.appendChild(crawlerMeta);
        
        console.log(`🤖 Crawler optimization applied for: ${crawlerType}`);
      }

    } catch (error) {
      console.error('❌ Error in CrawlerAccessTest:', error);
      setAccessInfo({ error: error.message });
    }
  }, []);

  // Only render debug info in development or for crawlers
  const userAgent = navigator.userAgent.toLowerCase();
  const isCrawler = detectCrawler(userAgent);
  
  if (!isCrawler && process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div style={{ display: 'none' }} id="crawler-debug-info">
      {accessInfo && (
        <script
          type="application/json"
          id="crawler-access-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(accessInfo, null, 2)
          }}
        />
      )}
    </div>
  );
};
