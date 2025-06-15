
import { useEffect } from 'react';

export const CrawlerErrorHandler = () => {
  useEffect(() => {
    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled Promise Rejection:', event.reason);
      // Prevent the error from crashing the app for crawlers
      event.preventDefault();
    };

    // Handle general errors
    const handleError = (event: ErrorEvent) => {
      console.error('Global Error:', event.error);
      // Log additional context for debugging
      console.error('Error details:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    };

    // Add event listeners
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleError);

    // Cleanup
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return null;
};
