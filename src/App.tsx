import { useEffect, lazy, Suspense } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { StickyConsultationButton } from "@/components/StickyConsultationButton";
import { CookieConsent } from "@/components/CookieConsent";
import { CrawlerOptimization } from "@/components/CrawlerOptimization";
import { CrawlerDebug } from "@/components/CrawlerDebug";
import { LazyWrapper } from "@/components/LazyWrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { initGA, trackPageView } from "@/utils/analytics";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { performanceUtils } from "@/utils/performance";

// Lazy load pages for better code splitting
const Index = lazy(() => import("./pages/Index"));
const Contact = lazy(() => import("./pages/Contact"));
const Submissions = lazy(() => import("./pages/Submissions"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Careers = lazy(() => import("./pages/Careers"));
const Support = lazy(() => import("./pages/Support"));
const Gdpr = lazy(() => import("./pages/Gdpr"));
const Partnership = lazy(() => import("./pages/Partnership"));
const ActingSchools = lazy(() => import("./pages/ActingSchools"));
const ActingSchoolPartnership = lazy(() => import("./pages/ActingSchoolPartnership"));
const Actors = lazy(() => import("./pages/Actors"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Optimized QueryClient with better defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

// Page loading fallback component
const PageLoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
    <div className="max-w-7xl mx-auto space-y-8">
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-64 w-full" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  </div>
);

// Component to handle page tracking with performance optimization
const PageTracker = () => {
  const location = useLocation();
  useScrollTracking();

  useEffect(() => {
    // Debounced page view tracking to avoid excessive calls
    const debouncedTrackPageView = performanceUtils.debounce(() => {
      trackPageView(document.title, window.location.href);
    }, 300);

    debouncedTrackPageView();
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    // Initialize Google Analytics on app load
    initGA();
    
    // Log initial performance metrics
    if (process.env.NODE_ENV === 'development') {
      performanceUtils.logMemoryUsage();
    }
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <CrawlerOptimization />
            <CrawlerDebug />
            <PageTracker />
            <StickyConsultationButton />
            <CookieConsent />
            <Routes>
              {/* Main landing pages for each target audience */}
              <Route path="/" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <Index />
                </LazyWrapper>
              } />
              <Route path="/casting-directors" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <Index />
                </LazyWrapper>
              } />
              <Route path="/for-actors" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <Actors />
                </LazyWrapper>
              } />
              <Route path="/for-schools" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <ActingSchools />
                </LazyWrapper>
              } />
              
              {/* Legacy routes for backward compatibility */}
              <Route path="/actors" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <Actors />
                </LazyWrapper>
              } />
              <Route path="/acting-schools" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <ActingSchools />
                </LazyWrapper>
              } />
              
              {/* Other pages */}
              <Route path="/contact" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <Contact />
                </LazyWrapper>
              } />
              <Route path="/submissions" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <Submissions />
                </LazyWrapper>
              } />
              <Route path="/about" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <About />
                </LazyWrapper>
              } />
              <Route path="/privacy" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <Privacy />
                </LazyWrapper>
              } />
              <Route path="/terms" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <Terms />
                </LazyWrapper>
              } />
              <Route path="/careers" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <Careers />
                </LazyWrapper>
              } />
              <Route path="/support" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <Support />
                </LazyWrapper>
              } />
              <Route path="/gdpr" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <Gdpr />
                </LazyWrapper>
              } />
              <Route path="/partnership" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <Partnership />
                </LazyWrapper>
              } />
              <Route path="/acting-school-partnership" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <ActingSchoolPartnership />
                </LazyWrapper>
              } />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={
                <LazyWrapper fallback={<PageLoadingFallback />}>
                  <NotFound />
                </LazyWrapper>
              } />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
