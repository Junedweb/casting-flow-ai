
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Eye, TrendingUp } from "lucide-react";

interface ActorsHowItWorksSectionProps {
  onCreateProfileClick: () => void;
}

export const ActorsHowItWorksSection = ({ onCreateProfileClick }: ActorsHowItWorksSectionProps) => {
  const steps = [
    {
      icon: Upload,
      title: "Create Profile & Upload Videos",
      description: "Monologue, dance, intro, past work — keep it short and sharp.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Eye,
      title: "Get Seen by Real Casting Directors",
      description: "Verified CDs use JAMZ daily. No more email spam or WhatsApp blasts.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: TrendingUp,
      title: "Grow with JAMZ Coins & Leaderboards",
      description: "Every action counts. Coins = visibility. Top actors get spotlighted.",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Your JAMZ Profile is Your New CV.
          <span className="block text-purple-600">₹500/month for unlimited visibility.</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Button 
          onClick={onCreateProfileClick}
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          Start Your Profile - ₹500/month
        </Button>
      </div>
    </section>
  );
};
