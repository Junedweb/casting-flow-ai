
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
    <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gradient-to-br from-slate-800/20 to-slate-900/20"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-2">
          <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 mx-auto mb-1 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-2xl">
            <h1 className="text-xs md:text-sm font-bold text-white tracking-tight">
              JAMZ
            </h1>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
          You Know Casting,<br />
          <span className="text-orange-400">We Know Technology</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-3 leading-relaxed">
          Let's bring synergies between the best. <span className="text-yellow-400 font-semibold">JAMZ</span> transforms your casting workflow into a 
          <span className="text-green-400 font-semibold"> smart, searchable database</span> with AI-powered matching.
        </p>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-2 mb-3 max-w-2xl mx-auto border border-slate-700">
          <p className="text-slate-300 text-xs leading-snug">
            ✓ Find talent by face, age, ethnicity, or past work in seconds<br />
            ✓ GDPR compliant with military-grade encryption<br />
            ✓ Integrates seamlessly with your existing workflow
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-2">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleConsultationClick}
          >
            Book Free Process Consultation
          </Button>
        </div>
        
        <p className="text-slate-400 text-sm mb-4">
          Zero pressure. 100% support. Tech experts who listen first.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center bg-slate-800/30 rounded-lg p-2 backdrop-blur-sm">
            <Database className="w-6 h-6 text-blue-400 mb-1" />
            <h3 className="text-white font-semibold mb-0.5 text-xs">Centralized Database</h3>
            <p className="text-slate-400 text-xs">All profiles in one secure place</p>
          </div>
          <div className="flex flex-col items-center text-center bg-slate-800/30 rounded-lg p-2 backdrop-blur-sm">
            <Users className="w-6 h-6 text-green-400 mb-1" />
            <h3 className="text-white font-semibold mb-0.5 text-xs">AI Face Matching</h3>
            <p className="text-slate-400 text-xs">Find perfect talent instantly</p>
          </div>
          <div className="flex flex-col items-center text-center bg-slate-800/30 rounded-lg p-2 backdrop-blur-sm">
            <Shield className="w-6 h-6 text-orange-400 mb-1" />
            <h3 className="text-white font-semibold mb-0.5 text-xs">GDPR Secure</h3>
            <p className="text-slate-400 text-xs">End-to-end encryption</p>
          </div>
        </div>
      </div>
    </section>
  );
};
