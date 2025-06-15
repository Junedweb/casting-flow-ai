
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
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-8 overflow-hidden">
        {/* JAMZ Logo - Top Left */}
        <div className="absolute top-6 left-6 z-20">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-lg">
            <h2 className="text-xl font-bold text-white">
              JAMZ
            </h2>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6052&q=80"
            alt="Futuristic casting studio with people working on laptops and movie displays in background"
            className="w-full h-full object-cover"
            priority={true}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            Advanced Casting Solutions for 
            <span className="text-blue-400 block mt-2">Modern Filmmakers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Discover how leading production houses are streamlining their casting process 
            with AI-powered talent matching and comprehensive database management
          </p>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={handleConsultationClick}
          >
            Explore Our Solutions
          </Button>
        </div>
      </section>
    </>
  );
};
