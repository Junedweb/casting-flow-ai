
import { Button } from "@/components/ui/button";
import { Shield, Users, Database } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gradient-to-br from-slate-800/20 to-slate-900/20"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              JAMZ
            </span>
          </h1>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Your Talent Database.<br />
          <span className="text-blue-400">Organized. Clear. Clean.</span><br />
          <span className="text-green-400">With AI by Your Side.</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          JAMZ empowers your casting process with smart dashboards, a clean user interface, and encrypted data.
          Discover searchable profiles with filters for screen age, sex, languages, ethnicity, past work, and AI-powered face-matching for faster, better decisions—all while adding value to your current system.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Free Process Consultation
          </Button>
        </div>
        
        <p className="text-slate-400 mt-6 text-lg">
          Meet tech and data experts who listen first, advise second. Zero pressure. 100% support.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Database className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Centralized Data</h3>
            <p className="text-slate-400">All profiles in one secure place</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">AI-Powered Matching</h3>
            <p className="text-slate-400">Find the perfect talent instantly</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">GDPR Compliant</h3>
            <p className="text-slate-400">End-to-end encryption & security</p>
          </div>
        </div>
      </div>
    </section>
  );
};
