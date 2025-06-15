
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
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gradient-to-br from-slate-800/20 to-slate-900/20"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <div className="relative inline-block">
            {/* Much more subdued rotating background circle */}
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-slate-600 to-slate-700 rounded-full shadow-lg animate-spin-slow opacity-60"></div>
            
            {/* Subtle glowing layers with muted colors */}
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-slate-500 to-slate-600 rounded-full blur-md opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-slate-400 to-slate-500 rounded-full blur-lg opacity-20 animate-pulse delay-300"></div>
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-slate-300 to-slate-400 rounded-full blur-xl opacity-10 animate-pulse delay-700"></div>
            
            {/* Main logo container with calmer colors */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm">
              {/* JAMz text with much more subtle animation and muted glow */}
              <h1 className="text-6xl md:text-8xl font-bold text-slate-100 tracking-tight relative animate-circular-glow">
                <span className="relative inline-block animate-text-glow">
                  JAMZ
                </span>
              </h1>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
          You Know Casting,<br />
          <span className="text-orange-400">We Know Technology</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Let's bring synergies between the best. <span className="text-yellow-400 font-semibold">JAMZ</span> transforms your casting workflow into a 
          <span className="text-green-400 font-semibold"> smart, searchable database</span> with AI-powered matching.
        </p>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto border border-slate-700">
          <p className="text-slate-300 text-lg">
            ✓ Find talent by face, age, ethnicity, or past work in seconds<br />
            ✓ GDPR compliant with military-grade encryption<br />
            ✓ Integrates seamlessly with your existing workflow
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleConsultationClick}
          >
            Book Free Process Consultation
          </Button>
        </div>
        
        <p className="text-slate-400 text-base mb-12">
          Zero pressure. 100% support. Tech experts who listen first.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center bg-slate-800/30 rounded-lg p-4 backdrop-blur-sm">
            <Database className="w-10 h-10 text-blue-400 mb-3" />
            <h3 className="text-white font-semibold mb-1 text-sm">Centralized Database</h3>
            <p className="text-slate-400 text-sm">All profiles in one secure place</p>
          </div>
          <div className="flex flex-col items-center text-center bg-slate-800/30 rounded-lg p-4 backdrop-blur-sm">
            <Users className="w-10 h-10 text-green-400 mb-3" />
            <h3 className="text-white font-semibold mb-1 text-sm">AI Face Matching</h3>
            <p className="text-slate-400 text-sm">Find perfect talent instantly</p>
          </div>
          <div className="flex flex-col items-center text-center bg-slate-800/30 rounded-lg p-4 backdrop-blur-sm">
            <Shield className="w-10 h-10 text-orange-400 mb-3" />
            <h3 className="text-white font-semibold mb-1 text-sm">GDPR Secure</h3>
            <p className="text-slate-400 text-sm">End-to-end encryption</p>
          </div>
        </div>
      </div>
    </section>
  );
};
