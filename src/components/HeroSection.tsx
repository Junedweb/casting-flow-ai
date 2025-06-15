
import { Button } from "@/components/ui/button";
import { Shield, Users, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackButtonClick } from "@/utils/buttonTracker";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    trackButtonClick("Book Free Process Consultation - Hero");
    navigate("/contact");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Subtle Logo Section */}
        <div className="mb-12">
          <div className="relative inline-block">
            {/* Minimal background with subtle glow */}
            <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-slate-700 to-slate-800 rounded-full shadow-lg opacity-80"></div>
            <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full blur-md"></div>
            
            {/* Refined logo container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full shadow-xl flex items-center justify-center border border-slate-600/30">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-200 tracking-wide animate-text-glow">
                JAMZ
              </h1>
            </div>
          </div>
        </div>
        
        {/* Main Content - Now the Hero */}
        <div className="space-y-8 mb-12">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            You Know <span className="text-blue-400">Casting</span>,<br />
            <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">We Know Technology</span>
          </h2>
          
          <p className="text-xl md:text-3xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed font-light">
            Transform your casting workflow into a 
            <span className="text-emerald-400 font-medium"> smart, searchable database</span> with AI-powered matching.
          </p>

          {/* Key Benefits Highlight */}
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-2xl p-8 mb-10 max-w-4xl mx-auto border border-slate-600/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-emerald-400 font-semibold text-lg">Instant Search</span>
                </div>
                <p className="text-slate-300 text-sm pl-5">Find talent by face, age, ethnicity, or past work in seconds</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-400 font-semibold text-lg">GDPR Secure</span>
                </div>
                <p className="text-slate-300 text-sm pl-5">Military-grade encryption with full compliance</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-purple-400 font-semibold text-lg">Seamless</span>
                </div>
                <p className="text-slate-300 text-sm pl-5">Integrates with your existing workflow</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="space-y-6">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
            onClick={handleConsultationClick}
          >
            Book Free Process Consultation
          </Button>
          
          <p className="text-slate-400 text-lg">
            Zero pressure. <span className="text-emerald-400">100% support.</span> Tech experts who listen first.
          </p>
        </div>
        
        {/* Feature Icons - Minimalist */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Database className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Centralized Database</h3>
            <p className="text-slate-400 text-sm">All profiles in one secure place</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">AI Face Matching</h3>
            <p className="text-slate-400 text-sm">Find perfect talent instantly</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">GDPR Secure</h3>
            <p className="text-slate-400 text-sm">End-to-end encryption</p>
          </div>
        </div>
      </div>
    </section>
  );
};
