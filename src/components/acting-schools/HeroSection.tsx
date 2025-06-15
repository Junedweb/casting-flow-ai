
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onApplyClick: () => void;
  onHowItWorksClick: () => void;
}

export const HeroSection = ({ onApplyClick, onHowItWorksClick }: HeroSectionProps) => {
  return (
    <section className="relative py-12 px-6 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/c4bb65e6-c38a-4df8-a9ff-648d29ba7037.png')`,
          opacity: 0.3
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 to-orange-900/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* JAMZ Logo */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full shadow-2xl border-4 border-white/20">
            <h2 className="text-xl font-bold text-white">JAMZ</h2>
          </div>
        </div>

        <div className="mb-4">
          <Badge className="bg-white/90 text-amber-800 px-4 py-2 text-sm font-medium border border-white/20">
            For Acting Schools • Drama Institutes • Talent Academies
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
          Stop Sending Basic Profiles to
          <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text">
            Casting Directors
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto font-light drop-shadow-lg">
          JAMZ transforms how you showcase students to casting directors. Instead of basic headshots and bio, 
          share complete digital portfolios with introduction videos, monologues, scenes, and past work—all in one link.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0"
            onClick={onApplyClick}
          >
            Apply for JAMZ School Partner Program
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-medium rounded-2xl"
            onClick={onHowItWorksClick}
          >
            See How It Works
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="text-center">
          <p className="text-white/70 text-sm mb-2">Trusted by acting schools across India</p>
          <div className="flex justify-center items-center gap-8 text-white/60 text-xs flex-wrap">
            <span>Drama Institutes</span>
            <span>•</span>
            <span>Acting Academies</span>
            <span>•</span>
            <span>Theatre Schools</span>
            <span>•</span>
            <span>Performance Centers</span>
          </div>
        </div>
      </div>
    </section>
  );
};
