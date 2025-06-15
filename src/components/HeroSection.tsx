
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
      <section className="flex items-center justify-center px-3 py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
          <div className="mb-3">
            <div className="inline-flex items-center justify-center w-10 h-10 mx-auto mb-1.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-lg">
              <span className="text-sm font-bold text-white tracking-tight">
                JAMZ
              </span>
            </div>
            <p className="text-orange-400 text-xs font-medium mb-1.5">
              Casting Technology Solutions
            </p>
          </div>

          {/* The Hook */}
          <h1 className="text-lg font-bold text-white mb-2.5 leading-tight">
            Turn Your 3-Hour<br />
            Actor Search Into a<br />
            <span className="text-orange-400">3-Second Match</span>
          </h1>
          
          {/* What We Do */}
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-2.5 mb-3 border border-slate-700">
            <h2 className="text-white font-semibold text-xs mb-1.5">
              How We Streamline Your Casting Process:
            </h2>
            <div className="text-slate-300 text-xs leading-relaxed space-y-0.5">
              <p className="flex items-start text-left">
                <span className="text-green-400 mr-1.5 flex-shrink-0">1.</span>
                <span>Upload any face and get 10 matching actors instantly</span>
              </p>
              <p className="flex items-start text-left">
                <span className="text-green-400 mr-1.5 flex-shrink-0">2.</span>
                <span>Search organized profiles instead of scattered photos</span>
              </p>
              <p className="flex items-start text-left">
                <span className="text-green-400 mr-1.5 flex-shrink-0">3.</span>
                <span>Your data stays secure with GDPR compliance</span>
              </p>
            </div>
          </div>

          {/* What's In It For You */}
          <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-lg p-2.5 mb-3 border border-orange-500/30">
            <h3 className="text-orange-400 font-semibold text-xs mb-0.5">
              Benefits for Your Work:
            </h3>
            <p className="text-white text-xs font-medium">
              Save 3 hours daily on casting searches.<br />
              Handle more projects efficiently.
            </p>
          </div>
          
          <div className="mb-3">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              onClick={handleConsultationClick}
            >
              See How It Works
            </Button>
          </div>
          
          <p className="text-slate-400 text-xs mb-3">
            Free consultation. No sales pressure.
          </p>
          
          {/* Proof Points */}
          <div className="space-y-1">
            <div className="flex items-center text-left bg-slate-800/40 rounded-lg p-2 backdrop-blur-sm">
              <Database className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" aria-hidden="true" />
              <div>
                <h4 className="text-white font-semibold mb-0.5 text-xs">Organized Database</h4>
                <p className="text-slate-400 text-xs">Centralized profiles with instant search.</p>
              </div>
            </div>
            <div className="flex items-center text-left bg-slate-800/40 rounded-lg p-2 backdrop-blur-sm">
              <Users className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" aria-hidden="true" />
              <div>
                <h4 className="text-white font-semibold mb-0.5 text-xs">AI Face Matching</h4>
                <p className="text-slate-400 text-xs">Find similar actors quickly and accurately.</p>
              </div>
            </div>
            <div className="flex items-center text-left bg-slate-800/40 rounded-lg p-2 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" aria-hidden="true" />
              <div>
                <h4 className="text-white font-semibold mb-0.5 text-xs">Data Security</h4>
                <p className="text-slate-400 text-xs">GDPR compliant with secure access.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
