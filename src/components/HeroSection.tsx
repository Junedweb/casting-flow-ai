
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
      <section className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80"
            alt="AI-powered casting technology interface with code and digital elements representing JAMZ platform innovation"
            className="w-full h-full object-cover opacity-15"
            priority={true}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/85 to-slate-900/85"></div>
        </div>
        
        <div className="relative w-full max-w-sm mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-2xl">
              <span className="text-xl font-bold text-white tracking-tight">
                JAMZ
              </span>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-4 leading-tight">
            Your WhatsApp is NOT a<br />
            <span className="text-orange-400">Casting Database</span>
          </h1>
          
          <h2 className="text-base text-slate-300 mb-6 leading-relaxed">
            Stop scrolling through 500+ photos at 2 AM.<br />
            <span className="text-yellow-400 font-semibold">Find any face in 3 seconds.</span>
          </h2>

          <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 mb-6 border border-slate-700">
            <div className="text-slate-300 text-sm leading-relaxed space-y-3">
              <p className="flex items-start">
                <span className="text-green-400 mr-2 flex-shrink-0 text-base">✓</span>
                <span>Upload face → 10 matches in seconds</span>
              </p>
              <p className="flex items-start">
                <span className="text-green-400 mr-2 flex-shrink-0 text-base">✓</span>
                <span>₹5 Cr penalty-proof data protection</span>
              </p>
              <p className="flex items-start">
                <span className="text-green-400 mr-2 flex-shrink-0 text-base">✓</span>
                <span>Works like Google for faces</span>
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              onClick={handleConsultationClick}
            >
              Stop the WhatsApp Hell
            </Button>
          </div>
          
          <p className="text-slate-400 text-sm mb-8">
            No sales pitch. Just real solutions.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center text-left bg-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
              <Database className="w-8 h-8 text-blue-400 mr-3 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-white font-semibold mb-1 text-sm">End Chat Chaos</h3>
                <p className="text-slate-400 text-xs">All actors in one searchable place</p>
              </div>
            </div>
            <div className="flex items-center text-left bg-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
              <Users className="w-8 h-8 text-green-400 mr-3 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-white font-semibold mb-1 text-sm">Face = Results</h3>
                <p className="text-slate-400 text-xs">AI finds lookalikes instantly</p>
              </div>
            </div>
            <div className="flex items-center text-left bg-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-orange-400 mr-3 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-white font-semibold mb-1 text-sm">Legal Protection</h3>
                <p className="text-slate-400 text-xs">GDPR bulletproof security</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
