
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award } from "lucide-react";

interface HeroSectionProps {
  onApplyClick: () => void;
  onHowItWorksClick: () => void;
}

export const HeroSection = ({ onApplyClick, onHowItWorksClick }: HeroSectionProps) => {
  return (
    <section className="py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg">
            <GraduationCap className="w-8 h-8 text-amber-600" />
            <span className="text-lg font-semibold text-slate-900">For Acting Schools</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Turn Your Students Into 
          <span className="text-amber-600 block">Industry-Ready Talent</span>
        </h1>
        
        <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
          Give every student a professional digital portfolio, connect them directly with casting directors, 
          and build your school's reputation with our <strong>100% free</strong> certified partner program.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={onApplyClick}
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Apply for Free Partnership
          </Button>
          <Button 
            onClick={onHowItWorksClick}
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold"
          >
            See How It Works
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Complete Alumni Management</h3>
            <p className="text-slate-600">Worth ₹50L-₹2Cr annually - Free for partners</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <GraduationCap className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Student Portfolio Platform</h3>
            <p className="text-slate-600">₹500/month registration fee waived</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">JAMZ Certification Badge</h3>
            <p className="text-slate-600">Build credibility with industry recognition</p>
          </div>
        </div>
      </div>
    </section>
  );
};
