
import { Button } from "@/components/ui/button";
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* JAMZ Logo - Top Left */}
        <div className="absolute top-8 left-8 z-20">
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-gray-200">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 leading-tight">JAMZ</h2>
              <p className="text-xs text-gray-600 font-medium">Casting Platform</p>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Modern casting studio with digital screens and technology"
            className="w-full h-full object-cover"
            priority={true}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-slate-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-6">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              For Casting Directors & Production Houses
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Find the Perfect Actor
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
              In Minutes, Not Days
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            Stop scrolling through endless portfolios. Our AI-powered platform instantly matches 
            your casting requirements with verified talent profiles across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0"
              onClick={handleConsultationClick}
            >
              See How It Works
            </Button>
            
            <div className="text-white/80 text-sm">
              <span className="block">✓ Free consultation</span>
              <span className="block">✓ No setup fees</span>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <p className="text-white/60 text-sm mb-4">Trusted by leading production houses</p>
            <div className="flex justify-center items-center gap-8 text-white/40 text-xs">
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
