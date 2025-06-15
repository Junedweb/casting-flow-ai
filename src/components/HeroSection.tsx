
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
      <section className="relative min-h-screen flex items-center justify-center px-3 py-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
        
        <div className="relative max-w-sm sm:max-w-lg md:max-w-4xl mx-auto text-center px-2">
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-2xl">
              <span className="text-lg font-bold text-white tracking-tight">
                JAMZ
              </span>
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-tight px-2">
            Stop Drowning in WhatsApp Messages,<br />
            <span className="text-orange-400">Start Finding Perfect Faces in Seconds</span>
          </h1>
          
          <h2 className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed px-2">
            Your casting database is scattered. Actors are lost in chat histories. Projects get delayed.
            <span className="text-yellow-400 font-semibold"> JAMZ</span> turns chaos into 
            <span className="text-green-400 font-semibold"> instant results.</span>
          </h2>

          <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-4 mb-6 max-w-lg mx-auto border border-slate-700">
            <div className="text-slate-300 text-sm leading-relaxed space-y-2">
              <p className="flex items-start">
                <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                <span>Upload a face → Get 10 similar actors in 3 seconds</span>
              </p>
              <p className="flex items-start">
                <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                <span>₹5 Cr penalty-proof data protection (GDPR ready)</span>
              </p>
              <p className="flex items-start">
                <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                <span>Zero training needed - works like Google for faces</span>
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              onClick={handleConsultationClick}
            >
              See How It Saves 3 Hours Daily
            </Button>
          </div>
          
          <p className="text-slate-400 text-sm mb-8 px-2">
            No sales pitch. Just 2-3 ways to fix your current mess.
          </p>
          
          <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
            <div className="flex items-center text-left bg-slate-800/40 rounded-lg p-4 backdrop-blur-sm">
              <Database className="w-8 h-8 text-blue-400 mr-3 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-white font-semibold mb-1 text-sm">End WhatsApp Hell</h3>
                <p className="text-slate-400 text-xs">All actors in one searchable place</p>
              </div>
            </div>
            <div className="flex items-center text-left bg-slate-800/40 rounded-lg p-4 backdrop-blur-sm">
              <Users className="w-8 h-8 text-green-400 mr-3 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-white font-semibold mb-1 text-sm">Face = Results</h3>
                <p className="text-slate-400 text-xs">AI finds lookalikes instantly</p>
              </div>
            </div>
            <div className="flex items-center text-left bg-slate-800/40 rounded-lg p-4 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-orange-400 mr-3 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-white font-semibold mb-1 text-sm">₹5 Cr Safe</h3>
                <p className="text-slate-400 text-xs">GDPR bulletproof security</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
