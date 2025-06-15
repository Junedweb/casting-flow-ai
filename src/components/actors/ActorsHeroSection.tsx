
import { Button } from "@/components/ui/button";
import { Video, Users } from "lucide-react";

interface ActorsHeroSectionProps {
  onCreateProfileClick: () => void;
  onWatchStoriesClick: () => void;
}

export const ActorsHeroSection = ({ onCreateProfileClick, onWatchStoriesClick }: ActorsHeroSectionProps) => {
  return (
    <section className="py-20 px-6 text-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg">
            <Video className="w-8 h-8 text-purple-600" />
            <span className="text-lg font-semibold text-slate-900">For Actors</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          No Agent? No Problem.
          <span className="block text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
            Your Talent Speaks Loudest on JAMZ.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          JAMZ is where India's next-generation actors build real profiles—not just headshots. 
          Upload monologues, share reels, and let casting directors find you directly.
        </p>
        
        <div className="flex justify-center mb-12">
          <Button 
            onClick={onCreateProfileClick}
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Create Your JAMZ Profile - ₹500/month
          </Button>
        </div>
        
        {/* Visual representation of split-screen concept */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Film Your Talent</h3>
            <p className="text-slate-600">Upload monologues, scenes, and reels from anywhere. Your smartphone is your studio.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Get Discovered</h3>
            <p className="text-slate-600">Casting directors shortlist talent directly on JAMZ dashboard. No middlemen needed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
