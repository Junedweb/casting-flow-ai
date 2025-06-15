
import { useEffect } from 'react';

export const HealthCheck = () => {
  useEffect(() => {
    // Create a simple health check mechanism
    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      environment: import.meta.env.MODE,
      url: window.location.href,
      userAgent: navigator.userAgent,
      deployment: 'preview--casting-flow-ai.lovable.app'
    };

    // Add health check meta tag
    const healthMeta = document.createElement('meta');
    healthMeta.setAttribute('name', 'health-check');
    healthMeta.setAttribute('content', JSON.stringify(healthData));
    document.head.appendChild(healthMeta);

    // Log health status
    console.log('💚 Health Check:', healthData);

    // Add to window for external access
    (window as any).healthCheck = healthData;

  }, []);

  return null;
};
