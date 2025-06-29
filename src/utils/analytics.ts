
// Google Analytics 4 Configuration and Tracking Utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// GA4 Measurement ID - Your actual GA4 measurement ID
export const GA_MEASUREMENT_ID = 'G-C6DZLWX1D6';

// Check if user has given consent
const hasAnalyticsConsent = () => {
  const consent = localStorage.getItem('cookie-consent');
  return consent === 'accepted';
};

// Initialize Google Analytics asynchronously to prevent render blocking
export const initGA = () => {
  // Use requestIdleCallback for non-critical initialization
  const initializeGA = () => {
    // Create gtag script asynchronously
    const script1 = document.createElement('script');
    script1.async = true;
    script1.defer = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    
    window.gtag('js', new Date());
    
    // Set default consent state
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      wait_for_update: 2000
    });

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: hasAnalyticsConsent(),
      // Enable enhanced measurement for automatic scroll tracking
      enhanced_measurements: {
        scrolls: true,
        outbound_clicks: true,
        site_search: false,
        video_engagement: false,
        file_downloads: true
      }
    });

    console.log('Google Analytics 4 initialized with consent management');
  };

  // Use requestIdleCallback if available, otherwise setTimeout
  if ('requestIdleCallback' in window) {
    requestIdleCallback(initializeGA, { timeout: 2000 });
  } else {
    setTimeout(initializeGA, 100);
  }
};

// Track page views
export const trackPageView = (page_title: string, page_location: string) => {
  if (typeof window.gtag !== 'undefined' && hasAnalyticsConsent()) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title,
      page_location,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag !== 'undefined' && hasAnalyticsConsent()) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  if (typeof window.gtag !== 'undefined' && hasAnalyticsConsent()) {
    window.gtag('event', 'click', {
      event_category: 'Button',
      event_label: buttonName,
      page_location: location || window.location.pathname,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  if (typeof window.gtag !== 'undefined' && hasAnalyticsConsent()) {
    window.gtag('event', success ? 'form_submit' : 'form_submit_failed', {
      event_category: 'Form',
      event_label: formName,
      page_location: window.location.pathname,
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  if (typeof window.gtag !== 'undefined' && hasAnalyticsConsent()) {
    window.gtag('event', 'scroll', {
      event_category: 'Engagement',
      event_label: `${percentage}% scrolled`,
      value: percentage,
    });
  }
};

// Track user engagement time
export const trackEngagement = (engagementTimeMs: number) => {
  if (typeof window.gtag !== 'undefined' && hasAnalyticsConsent()) {
    window.gtag('event', 'user_engagement', {
      engagement_time_msec: engagementTimeMs,
    });
  }
};
