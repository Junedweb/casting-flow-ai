import { useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { StickyConsultationButton } from "@/components/StickyConsultationButton";
import { CookieConsent } from "@/components/CookieConsent";
import { CrawlerOptimization } from "@/components/CrawlerOptimization";
import { initGA, trackPageView } from "@/utils/analytics";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Submissions from "./pages/Submissions";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Careers from "./pages/Careers";
import Support from "./pages/Support";
import Gdpr from "./pages/Gdpr";
import Partnership from "./pages/Partnership";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle page tracking
const PageTracker = () => {
  const location = useLocation();
  useScrollTracking();

  useEffect(() => {
    // Track page view on route change
    trackPageView(document.title, window.location.href);
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    // Initialize Google Analytics on app load
    initGA();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <CrawlerOptimization />
            <PageTracker />
            <StickyConsultationButton />
            <CookieConsent />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/submissions" element={<Submissions />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/support" element={<Support />} />
              <Route path="/gdpr" element={<Gdpr />} />
              <Route path="/partnership" element={<Partnership />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
