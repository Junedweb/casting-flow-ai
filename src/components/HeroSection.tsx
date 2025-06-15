
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
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5760&q=80"
            alt="Movie theater with AI technology overlay representing JAMZ casting platform"
            className="w-full h-full object-cover"
            priority={true}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Turn 3-Hour Actor Searches Into 
            <span className="text-yellow-400 block mt-2">3-Second Matches</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            AI-powered casting platform that finds perfect actors instantly
          </p>
          
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleConsultationClick}
          >
            See How It Works
          </Button>
        </div>
      </section>
    </>
  );
};
