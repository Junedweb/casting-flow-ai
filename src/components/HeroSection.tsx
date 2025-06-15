
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { trackButtonClick } from "@/utils/buttonTracker";
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
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        {/* JAMZ Logo */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-gray-200 w-fit">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 leading-tight">JAMZ</h2>
              <p className="text-xs text-gray-600 font-medium">Casting Platform</p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
              For Casting Directors & Production Houses
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Find the Perfect Actor
            <span className="block text-transparent bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text">
              In Minutes, Not Days
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            Stop scrolling through endless portfolios. Our AI-powered platform instantly matches 
            your casting requirements with verified talent profiles across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0"
              onClick={handleConsultationClick}
            >
              See How It Works
            </Button>
            
            <div className="text-gray-600 text-sm">
              <span className="block">✓ Free consultation</span>
              <span className="block">✓ No setup fees</span>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">Trusted by leading production houses</p>
            <div className="flex justify-center items-center gap-8 text-gray-400 text-xs">
              <span>Mumbai Film Studios</span>
              <span>•</span>
              <span>Bollywood Productions</span>
              <span>•</span>
              <span>Regional Cinema</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
