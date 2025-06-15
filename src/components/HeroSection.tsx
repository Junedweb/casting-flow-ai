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
            {/* Rotating background circle with enhanced glow */}
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-2xl animate-spin-slow opacity-90"></div>
            
            {/* Multiple glowing layers */}
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-md opacity-60 animate-pulse"></div>
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-red-400 to-orange-600 rounded-full blur-lg opacity-40 animate-pulse delay-300"></div>
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-orange-300 to-yellow-500 rounded-full blur-xl opacity-20 animate-pulse delay-700"></div>
            
            {/* Main logo container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-sm">
              {/* JAMz text with circular motion and glow */}
              <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight relative animate-circular-glow">
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

<style jsx>{`
    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes circular-glow {
      0% {
        transform: translateX(-10px) rotate(0deg);
        text-shadow: 0 0 20px #ff6b35, 0 0 40px #ff6b35, 0 0 60px #ff6b35, 0 0 80px #ff6b35;
      }
      25% {
        transform: translateX(0px) translateY(-10px) rotate(90deg);
        text-shadow: 0 0 25px #ffa500, 0 0 50px #ffa500, 0 0 75px #ffa500, 0 0 100px #ffa500;
      }
      50% {
        transform: translateX(10px) rotate(180deg);
        text-shadow: 0 0 30px #ffff00, 0 0 60px #ffff00, 0 0 90px #ffff00, 0 0 120px #ffff00;
      }
      75% {
        transform: translateX(0px) translateY(10px) rotate(270deg);
        text-shadow: 0 0 25px #ff4500, 0 0 50px #ff4500, 0 0 75px #ff4500, 0 0 100px #ff4500;
      }
      100% {
        transform: translateX(-10px) rotate(360deg);
        text-shadow: 0 0 20px #ff6b35, 0 0 40px #ff6b35, 0 0 60px #ff6b35, 0 0 80px #ff6b35;
      }
    }

    @keyframes text-glow {
      0%, 100% {
        text-shadow: 
          0 0 5px #fff,
          0 0 10px #fff,
          0 0 15px #ff6b35,
          0 0 20px #ff6b35,
          0 0 35px #ff6b35,
          0 0 40px #ff6b35;
        filter: brightness(1);
      }
      50% {
        text-shadow: 
          0 0 2px #fff,
          0 0 5px #fff,
          0 0 25px #ffa500,
          0 0 30px #ffa500,
          0 0 45px #ffa500,
          0 0 50px #ffa500;
        filter: brightness(1.3);
      }
    }

    .animate-spin-slow {
      animation: spin-slow 8s linear infinite;
    }

    .animate-circular-glow {
      animation: circular-glow 6s ease-in-out infinite;
    }

    .animate-text-glow {
      animation: text-glow 3s ease-in-out infinite;
    }
  `}</style>
