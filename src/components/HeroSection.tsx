
import { Button } from "@/components/ui/button";
import { Shield, Users, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackButtonClick } from "@/utils/buttonTracker";
import { OptimizedImage } from "./OptimizedImage";
import { SEOHead } from "./SEOHead";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    trackButtonClick("Book Free Process Consultation - Hero");
    navigate("/contact");
  };

  const heroStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "JAMZ - AI-Powered Casting Platform",
    "description": "Transform your casting workflow with AI-powered face matching, secure GDPR-compliant database, and streamlined talent discovery.",
    "url": "https://jamz-casting.lovable.app/",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "JAMZ Casting Platform",
      "applicationCategory": "BusinessApplication",
      "description": "AI-powered casting platform for India's entertainment industry",
      "featureList": [
        "AI Face Matching",
        "GDPR Compliant Database",
        "Centralized Talent Profiles",
        "Advanced Search Filters"
      ]
    }
  };

  return (
    <>
      <SEOHead structuredData={heroStructuredData} />
      <section className="min-h-screen flex items-center justify-center px-3 py-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80"
            alt="AI-powered casting technology interface with code and digital elements representing JAMZ platform innovation"
            className="w-full h-full object-cover opacity-10"
            priority={true}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90"></div>
        </div>
        
        <div className="relative w-full max-w-xs mx-auto text-center">
          {/* Who We Are */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-2xl">
              <span className="text-lg font-bold text-white tracking-tight">
                JAMZ
              </span>
            </div>
            <p className="text-orange-400 text-sm font-medium mb-2">
              We Build Casting Tech for Directors
            </p>
          </div>

          {/* The Hook */}
          <h1 className="text-xl font-bold text-white mb-4 leading-tight">
            We Turn Your 3-Hour<br />
            Actor Hunt Into a<br />
            <span className="text-orange-400">3-Second Search</span>
          </h1>
          
          {/* What We Do */}
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-4 mb-6 border border-slate-700">
            <h2 className="text-white font-semibold text-sm mb-3">
              Here's How We Kill Your Casting Hell:
            </h2>
            <div className="text-slate-300 text-xs leading-relaxed space-y-2">
              <p className="flex items-start text-left">
                <span className="text-green-400 mr-2 flex-shrink-0">1.</span>
                <span>Upload any face → Get 10 perfect matches instantly</span>
              </p>
              <p className="flex items-start text-left">
                <span className="text-green-400 mr-2 flex-shrink-0">2.</span>
                <span>No more scrolling through 500+ WhatsApp photos</span>
              </p>
              <p className="flex items-start text-left">
                <span className="text-green-400 mr-2 flex-shrink-0">3.</span>
                <span>Your data stays protected (₹5 Cr penalty-proof)</span>
              </p>
            </div>
          </div>

          {/* What's In It For You */}
          <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-lg p-4 mb-6 border border-orange-500/30">
            <h3 className="text-orange-400 font-semibold text-sm mb-2">
              What You Get:
            </h3>
            <p className="text-white text-xs font-medium">
              3 hours of your life back every single day.<br />
              Take on 50% more projects. Make more money.
            </p>
          </div>
          
          <div className="mb-6">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              onClick={handleConsultationClick}
            >
              Show Me How This Works
            </Button>
          </div>
          
          <p className="text-slate-400 text-xs mb-6">
            No sales pitch. Just real solutions.
          </p>
          
          {/* Proof Points */}
          <div className="space-y-2">
            <div className="flex items-center text-left bg-slate-800/40 rounded-lg p-3 backdrop-blur-sm">
              <Database className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" aria-hidden="true" />
              <div>
                <h4 className="text-white font-semibold mb-1 text-xs">End Photo Chaos</h4>
                <p className="text-slate-400 text-xs">One place. All actors. Instant search.</p>
              </div>
            </div>
            <div className="flex items-center text-left bg-slate-800/40 rounded-lg p-3 backdrop-blur-sm">
              <Users className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" aria-hidden="true" />
              <div>
                <h4 className="text-white font-semibold mb-1 text-xs">AI Face Match</h4>
                <p className="text-slate-400 text-xs">Find lookalikes in seconds, not hours.</p>
              </div>
            </div>
            <div className="flex items-center text-left bg-slate-800/40 rounded-lg p-3 backdrop-blur-sm">
              <Shield className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0" aria-hidden="true" />
              <div>
                <h4 className="text-white font-semibold mb-1 text-xs">Legal Shield</h4>
                <p className="text-slate-400 text-xs">GDPR bulletproof. Zero risk.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
