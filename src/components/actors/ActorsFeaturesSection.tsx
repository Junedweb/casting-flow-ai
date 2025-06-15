
import { Card, CardContent } from "@/components/ui/card";
import { Video, Briefcase, Brain, Trophy, Smartphone } from "lucide-react";

export const ActorsFeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Video-First Profile",
      description: "Showcase monologues, scenes, dance reels — not just photos.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Briefcase,
      title: "Direct Audition Access",
      description: "Verified casting directors post directly. No agents needed.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Brain,
      title: "AI Tagging & Matching",
      description: "Get noticed faster via filters like age, language, face-match, and more.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Trophy,
      title: "Leaderboards + JAMZ Coins",
      description: "Earn coins for activity. Rise in the rankings. Get spotlighted.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Update your profile anytime, anywhere. Even from a basic smartphone.",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
          Feature Highlights
        </h2>
        <p className="text-xl text-center text-slate-600 mb-12">
          JAMZ is more than a profile — it's a launchpad.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
