
import { useEffect, useState } from 'react';
import { detectCrawler } from '@/utils/crawlerUtils';

export const CrawlerStatusIndicator = () => {
  const [status, setStatus] = useState<string>('initializing');

  useEffect(() => {
    try {
      const userAgent = navigator.userAgent;
      const isCrawler = detectCrawler(userAgent);
      
      // Create a status indicator for debugging
      const statusInfo = {
        timestamp: new Date().toISOString(),
        userAgent,
        isCrawler,
        url: window.location.href,
        status: 'healthy',
        loadTime: performance.now()
      };

      console.log('🔍 Crawler Status:', statusInfo);
      setStatus('ready');

      // Add a meta tag that external tools can check
      const statusMeta = document.createElement('meta');
      statusMeta.setAttribute('name', 'site-status');
      statusMeta.setAttribute('content', 'operational');
      document.head.appendChild(statusMeta);

      // Add a simple endpoint simulation for health checks
      (window as any).healthCheck = () => {
        return {
          status: 'healthy',
          timestamp: new Date().toISOString(),
          version: '1.0.0',
          environment: 'preview'
        };
      };

    } catch (error) {
      console.error('Error in CrawlerStatusIndicator:', error);
      setStatus('error');
    }
  }, []);

  // Only show debug info in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div style={{ display: 'none' }} data-status={status}>
      Crawler Status: {status}
    </div>
  );
};
