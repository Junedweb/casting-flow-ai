
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
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gradient-to-br from-slate-800/20 to-slate-900/20"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              JAMZ
            </h1>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          You Know Casting,<br />
          <span className="text-orange-400">We Know Technology</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
          Let's bring synergies between the best. <span className="text-yellow-400 font-semibold">JAMZ</span> transforms your casting workflow into a 
          <span className="text-green-400 font-semibold"> smart, searchable database</span> with AI-powered matching.
        </p>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 mb-6 max-w-2xl mx-auto border border-slate-700">
          <p className="text-slate-300 text-base leading-snug">
            ✓ Find talent by face, age, ethnicity, or past work in seconds<br />
            ✓ GDPR compliant with military-grade encryption<br />
            ✓ Integrates seamlessly with your existing workflow
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleConsultationClick}
          >
            Book Free Process Consultation
          </Button>
        </div>
        
        <p className="text-slate-400 text-base mb-8">
          Zero pressure. 100% support. Tech experts who listen first.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center bg-slate-800/30 rounded-lg p-3 backdrop-blur-sm">
            <Database className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="text-white font-semibold mb-1 text-sm">Centralized Database</h3>
            <p className="text-slate-400 text-xs">All profiles in one secure place</p>
          </div>
          <div className="flex flex-col items-center text-center bg-slate-800/30 rounded-lg p-3 backdrop-blur-sm">
            <Users className="w-8 h-8 text-green-400 mb-2" />
            <h3 className="text-white font-semibold mb-1 text-sm">AI Face Matching</h3>
            <p className="text-slate-400 text-xs">Find perfect talent instantly</p>
          </div>
          <div className="flex flex-col items-center text-center bg-slate-800/30 rounded-lg p-3 backdrop-blur-sm">
            <Shield className="w-8 h-8 text-orange-400 mb-2" />
            <h3 className="text-white font-semibold mb-1 text-sm">GDPR Secure</h3>
            <p className="text-slate-400 text-xs">End-to-end encryption</p>
          </div>
        </div>
      </div>
    </section>
  );
};
