import { trackButtonClick as trackGA4ButtonClick, trackEvent } from '@/utils/analytics';
import { performanceUtils } from '@/utils/performance';

interface ButtonClickData {
  buttonName: string;
  timestamp: string;
  page: string;
  userAgent: string;
  sessionId?: string;
}

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/23376283/uy7xs18/";

// Generate session ID for better analytics
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('jamz_session_id');
  if (!sessionId) {
    sessionId = `jamz_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('jamz_session_id', sessionId);
  }
  return sessionId;
};

// Debounced function to prevent spam clicking
const debouncedTrackButtonClick = performanceUtils.debounce(async (buttonName: string) => {
  const timestamp = new Date().toISOString();
  const clickData: ButtonClickData = {
    buttonName,
    timestamp,
    page: window.location.pathname,
    userAgent: navigator.userAgent,
    sessionId: getSessionId()
  };

  console.log("Button clicked:", clickData);

  // Track with Google Analytics 4
  trackGA4ButtonClick(buttonName, window.location.pathname);
  trackEvent('click', 'Button', buttonName);

  // Batch save to local storage for better performance
  try {
    const buttonClicks = JSON.parse(localStorage.getItem('buttonClicks') || '[]');
    buttonClicks.push(clickData);
    
    // Keep only last 100 clicks to prevent storage bloat
    if (buttonClicks.length > 100) {
      buttonClicks.splice(0, buttonClicks.length - 100);
    }
    
    localStorage.setItem('buttonClicks', JSON.stringify(buttonClicks));
  } catch (error) {
    console.warn('Failed to save button click to localStorage:', error);
  }

  // Send to Zapier webhook with retry logic
  let retryCount = 0;
  const maxRetries = 3;
  
  const sendToZapier = async (): Promise<void> => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
      
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        signal: controller.signal,
        body: JSON.stringify({
          ...clickData,
          submitted: `${timestamp} - ${buttonName}`,
          source: "JAMZ Button Tracking",
          retryAttempt: retryCount
        }),
      });
      
      clearTimeout(timeoutId);
    } catch (error) {
      retryCount++;
      if (retryCount < maxRetries) {
        console.warn(`Retry attempt ${retryCount} for button tracking`);
        setTimeout(sendToZapier, Math.pow(2, retryCount) * 1000); // Exponential backoff
      } else {
        console.error("Failed to send button click to Zapier after retries:", error);
      }
    }
  };

  await sendToZapier();
}, 500); // 500ms debounce

export const trackButtonClick = (buttonName: string) => {
  debouncedTrackButtonClick(buttonName);
};

// Batch send stored clicks on page visibility change
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    // Send any pending analytics before page closes
    try {
      const pendingClicks = localStorage.getItem('buttonClicks');
      if (pendingClicks && navigator.sendBeacon) {
        navigator.sendBeacon('/api/analytics', pendingClicks);
      }
    } catch (error) {
      console.warn('Failed to send beacon:', error);
    }
  }
});
