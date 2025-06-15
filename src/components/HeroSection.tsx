
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
      <section className="flex items-center justify-center px-3 py-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden min-h-[85vh]">
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5760&q=80"
            alt="AI-powered technology interface with colorful code representing JAMZ platform innovation for movie casting"
            className="w-full h-full object-cover opacity-15"
            priority={true}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-purple-900/85 to-indigo-900/85"></div>
          
          {/* Movie film strips decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
          
          {/* AI circuit pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-400 rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-yellow-400 rounded-full"></div>
          </div>
        </div>
        
        <div className="relative w-full max-w-xs mx-auto text-center z-10">
          {/* Who We Are */}
          <div className="mb-2">
            <div className="inline-flex items-center justify-center w-10 h-10 mx-auto mb-1 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 rounded-full shadow-lg">
              <span className="text-sm font-bold text-white tracking-tight">
                JAMZ
              </span>
            </div>
            <p className="text-yellow-300 text-xs font-medium mb-1">
              AI-Powered Casting Technology
            </p>
          </div>

          {/* The Hook */}
          <h1 className="text-lg font-bold text-white mb-2 leading-tight drop-shadow-lg">
            Turn Your 3-Hour<br />
            Actor Search Into a<br />
            <span className="text-yellow-300 text-shadow-lg">3-Second Match</span>
          </h1>
          
          {/* What We Do */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-2 mb-2 border border-purple-500/30 shadow-lg">
            <h2 className="text-yellow-200 font-semibold text-xs mb-1">
              How We Streamline Your Casting Process:
            </h2>
            <div className="text-slate-200 text-xs leading-relaxed space-y-0.5">
              <p className="flex items-start text-left">
                <span className="text-cyan-400 mr-1.5 flex-shrink-0 font-bold">1.</span>
                <span>Upload any face and get 10 matching actors instantly</span>
              </p>
              <p className="flex items-start text-left">
                <span className="text-cyan-400 mr-1.5 flex-shrink-0 font-bold">2.</span>
                <span>Search organized profiles instead of scattered photos</span>
              </p>
              <p className="flex items-start text-left">
                <span className="text-cyan-400 mr-1.5 flex-shrink-0 font-bold">3.</span>
                <span>Your data stays secure with GDPR compliance</span>
              </p>
            </div>
          </div>

          {/* What's In It For You */}
          <div className="bg-gradient-to-r from-yellow-500/25 to-orange-600/25 backdrop-blur-sm rounded-lg p-2 mb-2 border border-yellow-400/40 shadow-lg">
            <h3 className="text-yellow-300 font-semibold text-xs mb-0.5">
              Benefits for Your Work:
            </h3>
            <p className="text-white text-xs font-medium drop-shadow">
              Save 3 hours daily on casting searches.<br />
              Handle more projects efficiently.
            </p>
          </div>
          
          <div className="mb-2">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-5 py-2.5 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full border border-yellow-400/30"
              onClick={handleConsultationClick}
            >
              See How It Works
            </Button>
          </div>
          
          <p className="text-slate-300 text-xs mb-2 drop-shadow">
            Free consultation. No sales pressure.
          </p>
          
          {/* Proof Points */}
          <div className="space-y-1">
            <div className="flex items-center text-left bg-slate-800/60 rounded-lg p-1.5 backdrop-blur-sm border border-slate-600/50">
              <Database className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 drop-shadow" aria-hidden="true" />
              <div>
                <h4 className="text-white font-semibold mb-0.5 text-xs drop-shadow">Organized Database</h4>
                <p className="text-slate-300 text-xs">Centralized profiles with instant search.</p>
              </div>
            </div>
            <div className="flex items-center text-left bg-slate-800/60 rounded-lg p-1.5 backdrop-blur-sm border border-slate-600/50">
              <Users className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0 drop-shadow" aria-hidden="true" />
              <div>
                <h4 className="text-white font-semibold mb-0.5 text-xs drop-shadow">AI Face Matching</h4>
                <p className="text-slate-300 text-xs">Find similar actors quickly and accurately.</p>
              </div>
            </div>
            <div className="flex items-center text-left bg-slate-800/60 rounded-lg p-1.5 backdrop-blur-sm border border-slate-600/50">
              <Shield className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0 drop-shadow" aria-hidden="true" />
              <div>
                <h4 className="text-white font-semibold mb-0.5 text-xs drop-shadow">Data Security</h4>
                <p className="text-slate-300 text-xs">GDPR compliant with secure access.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
