
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // Enable Google Analytics tracking
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handleClose = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
    // Disable Google Analytics tracking
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="bg-slate-900 border-slate-700 text-white shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Cookie Consent</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We use cookies to improve your experience and analyze website usage. 
                  By clicking "Accept", you consent to our use of cookies for analytics and functionality.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 items-start">
                  <div className="flex gap-2">
                    <Button 
                      onClick={handleAccept}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6"
                    >
                      Accept
                    </Button>
                  </div>
                  <Link 
                    to="/privacy" 
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 underline"
                  >
                    Privacy Policy
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
            <Button
              onClick={handleClose}
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white hover:bg-slate-800 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
