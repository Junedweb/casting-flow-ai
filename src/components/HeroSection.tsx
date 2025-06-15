
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
    "description": "Transform your casting workflow with AI-powered character analysis, smart matching from existing talent pool, and faster casting decisions.",
    "url": "https://jamz-casting.lovable.app/",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "JAMZ Casting Platform",
      "applicationCategory": "BusinessApplication",
      "description": "AI-powered casting platform for India's entertainment industry",
      "featureList": [
        "AI Character Analysis",
        "Smart Pool Matching",
        "External Candidate Requests",
        "Fitment Percentage Scoring"
      ]
    }
  };

  return (
    <>
      <SEOHead structuredData={heroStructuredData} />
      <section className="relative py-16 px-4 overflow-hidden sm:py-20 md:py-24 sm:px-6">
        {/* Background Image - Wall of Fame with JAMZ Platform */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/c4bb65e6-c38a-4df8-a9ff-648d29ba7037.png')`,
            opacity: 0.5
          }}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content - positioned above background */}
        <div className="relative z-10">
          {/* Content */}
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-6 leading-tight drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                3 Hours of Manual Work
              </span>
              In Seconds
            </h1>
            
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto font-light drop-shadow-lg sm:text-xl">
              AI-powered character analysis and smart talent matching for faster casting decisions.
              <br />
              <span className="text-yellow-300">Save multiple hours per month on every project.</span>
            </p>

            <p className="text-base text-white/80 mb-8 max-w-2xl mx-auto">
              Outsource requirements when needed - all key information is preserved for professional casting workflow.
            </p>

            {/* How it works - simplified */}
            <div className="mb-8">
              <div className="grid gap-4 max-w-4xl mx-auto sm:gap-6 md:grid-cols-3">
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/20 sm:p-6">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:w-12 sm:h-12">
                      <span className="text-lg font-bold text-white sm:text-xl">1</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Analyze Character</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Upload script. AI extracts requirements.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/20 sm:p-6">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:w-12 sm:h-12">
                      <span className="text-lg font-bold text-white sm:text-xl">2</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Smart Matching</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Match from your pool with fitment scores.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/20 sm:p-6">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:w-12 sm:h-12">
                      <span className="text-lg font-bold text-white sm:text-xl">3</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Review & Cast</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Review ranked candidates instantly.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 justify-center items-center mb-6 sm:flex-row sm:gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0 w-full sm:w-auto sm:px-10 sm:py-6 sm:text-xl"
                onClick={handleConsultationClick}
              >
                See How It Works
              </Button>
            </div>
            
            {/* Trust indicators - simplified */}
            <div className="text-center">
              <p className="text-white/70 text-sm">Trusted by casting professionals across India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
