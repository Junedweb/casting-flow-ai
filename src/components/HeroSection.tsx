
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
      <section className="relative py-8 px-6 overflow-hidden">
        {/* Background Image - Wall of Fame with JAMZ Platform */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/2d4ae63f-1922-4804-9c05-ce6e7a8069fe.png')`,
            opacity: 0.4
          }}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content - positioned above background */}
        <div className="relative z-10">
          {/* JAMZ Logo - matching footer style */}
          <div className="max-w-5xl mx-auto mb-4">
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-2xl border-4 border-white/20">
                <h2 className="text-xl font-bold text-white">
                  JAMZ
                </h2>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-4">
              <span className="inline-block bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-white/20 backdrop-blur-sm">
                For Casting Directors • Agencies • Productions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
              Turn Hours of Manual Work
              <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                Into Minutes of Smart Casting
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed max-w-4xl mx-auto font-light drop-shadow-lg">
              AI analyzes your scripts, organizes your existing talent pool, and instantly suggests 
              perfect character matches from your database.
            </p>

            {/* Clear Expectations */}
            <div className="mb-6">
              <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg font-bold text-black">📋</span>
                    </div>
                    <h3 className="font-semibold text-white mb-1 text-sm">Script Analysis</h3>
                    <p className="text-white/80 text-xs">Upload your script and get instant character breakdowns with casting requirements</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg font-bold text-white">🎯</span>
                    </div>
                    <h3 className="font-semibold text-white mb-1 text-sm">Smart Matching</h3>
                    <p className="text-white/80 text-xs">AI matches characters with actors from your existing talent database automatically</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg font-bold text-white">⚡</span>
                    </div>
                    <h3 className="font-semibold text-white mb-1 text-sm">Instant Results</h3>
                    <p className="text-white/80 text-xs">Get casting suggestions in minutes, not hours or days of manual searching</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0"
                onClick={handleConsultationClick}
              >
                See How It Works
              </Button>
              
              <div className="text-white/80 text-sm">
                <span className="block">✓ Free consultation</span>
                <span className="block">✓ Works with your existing talent pool</span>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="text-center">
              <p className="text-white/70 text-sm mb-2">Trusted by casting professionals across India</p>
              <div className="flex justify-center items-center gap-8 text-white/60 text-xs flex-wrap">
                <span>Casting Agencies</span>
                <span>•</span>
                <span>Film Productions</span>
                <span>•</span>
                <span>TV Studios</span>
                <span>•</span>
                <span>Regional Cinema</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
