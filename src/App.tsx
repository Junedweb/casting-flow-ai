
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Gdpr from "./pages/Gdpr";
import Careers from "./pages/Careers";
import Support from "./pages/Support";
import Submissions from "./pages/Submissions";
import Partnership from "./pages/Partnership";
import ActingSchoolPartnership from "./pages/ActingSchoolPartnership";
import ActingSchools from "./pages/ActingSchools";
import Actors from "./pages/Actors";
import NotFound from "./pages/NotFound";
import { CrawlerOptimization } from "./components/CrawlerOptimization";
import { CrawlerDebug } from "./components/CrawlerDebug";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { CrawlerAccessTest } from "./components/CrawlerAccessTest";

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <BrowserRouter>
              <CrawlerOptimization />
              <CrawlerDebug />
              <CrawlerAccessTest />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/gdpr" element={<Gdpr />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/support" element={<Support />} />
                <Route path="/submissions" element={<Submissions />} />
                <Route path="/partnership" element={<Partnership />} />
                <Route path="/casting-directors" element={<Partnership />} />
                <Route path="/acting-school-partnership" element={<ActingSchoolPartnership />} />
                <Route path="/for-schools" element={<ActingSchools />} />
                <Route path="/for-actors" element={<Actors />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toaster />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
