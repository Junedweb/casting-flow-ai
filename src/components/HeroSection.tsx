
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
      <section className="relative py-12 px-6 overflow-hidden">
        {/* Background Image - Wall of Fame with JAMZ Platform */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content - positioned above background */}
        <div className="relative z-10">
          {/* JAMZ Logo */}
          <div className="max-w-5xl mx-auto mb-6">
            <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl border border-white/20 w-fit">
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
              <span className="inline-block bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-white/20 backdrop-blur-sm">
                For Casting Directors • Agencies • Productions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Turn Hours of Manual Work
              <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                Into Minutes of Smart Casting
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto font-light drop-shadow-lg">
              AI analyzes your scripts, organizes your existing talent pool, and instantly suggests 
              perfect character matches from your database.
            </p>

            {/* Clear Expectations */}
            <div className="mb-10">
              <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-black">📋</span>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Script Analysis</h3>
                    <p className="text-white/80 text-sm">Upload your script and get instant character breakdowns with casting requirements</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-white">🎯</span>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Smart Matching</h3>
                    <p className="text-white/80 text-sm">AI matches characters with actors from your existing talent database automatically</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-white">⚡</span>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Instant Results</h3>
                    <p className="text-white/80 text-sm">Get casting suggestions in minutes, not hours or days of manual searching</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
              <p className="text-white/70 text-sm mb-4">Trusted by casting professionals across India</p>
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
