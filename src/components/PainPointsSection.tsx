
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Quote, Users, Zap, TrendingUp } from "lucide-react";
import { useState } from "react";

export const PainPointsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const painPoints = [
    {
      text: "Our data's scattered—WhatsApp, Instagram, Google Drive, Excel sheets. It's chaos.",
      impact: "Lost 3+ hours daily searching for profiles",
      icon: AlertTriangle
    },
    {
      text: "After 200+ profiles, Excel just breaks.",
      impact: "System crashes during critical casting deadlines",
      icon: TrendingUp
    },
    {
      text: "Tried building our own app. Too expensive and never fits right.",
      impact: "₹5L+ wasted on incomplete solutions",
      icon: Zap
    }
  ];

  const actorComplaints = [
    {
      text: "Website doesn't work properly—I never know if my profile even reached the right person.",
      impact: "Missing 60% of opportunities",
      icon: AlertTriangle
    },
    {
      text: "I have to show up every month in person. Even though I've worked with this CD before.",
      impact: "₹2,000+ monthly travel costs",
      icon: Users
    },
    {
      text: "I live in Pune—traveling to Mumbai all the time is expensive. A proper online flow would help.",
      impact: "10+ hours monthly on travel",
      icon: TrendingUp
    }
  ];

  const InteractiveCard = ({ item, index, type }: { item: any, index: number, type: 'cd' | 'actor' }) => {
    const isHovered = hoveredCard === index + (type === 'actor' ? 100 : 0);
    const borderColor = type === 'cd' ? 'border-red-500' : 'border-blue-500';
    const gradientFrom = type === 'cd' ? 'from-red-50' : 'from-blue-50';
    const gradientTo = type === 'cd' ? 'to-red-100' : 'to-blue-100';
    const iconColor = type === 'cd' ? 'text-red-500' : 'text-blue-500';
    const impactColor = type === 'cd' ? 'text-red-600' : 'text-blue-600';

    return (
      <Card 
        className={`border-l-4 ${borderColor} transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer bg-gradient-to-br ${gradientFrom} ${gradientTo} ${isHovered ? 'shadow-2xl scale-105' : 'shadow-md'}`}
        onMouseEnter={() => setHoveredCard(index + (type === 'actor' ? 100 : 0))}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent className="p-6 relative overflow-hidden">
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-full bg-white shadow-lg ${iconColor}`}>
              <item.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-start mb-3">
                <Quote className={`w-5 h-5 ${iconColor} mr-2 mt-1 flex-shrink-0`} />
                <p className="text-slate-700 italic text-lg font-medium leading-relaxed">{item.text}</p>
              </div>
              <div className={`mt-4 p-3 bg-white/60 rounded-lg border-l-4 ${borderColor} backdrop-blur-sm`}>
                <p className={`text-sm font-semibold ${impactColor} flex items-center`}>
                  <Zap className="w-4 h-4 mr-2" />
                  Impact: {item.impact}
                </p>
              </div>
            </div>
          </div>
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-400 to-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-400 to-green-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mb-6 shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-red-600 to-blue-600 bg-clip-text text-transparent mb-6">
            We Understand Your Challenges
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Every casting director and actor faces the same frustrations. 
            <span className="font-semibold text-slate-800"> You're not alone in this struggle.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-lg mb-4">
                <AlertTriangle className="w-8 h-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white">Casting Directors</h3>
              </div>
              <p className="text-red-600 font-medium">Real pain points from industry professionals</p>
            </div>
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <InteractiveCard key={index} item={point} index={index} type="cd" />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg mb-4">
                <Users className="w-8 h-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white">Actors & Artists</h3>
              </div>
              <p className="text-blue-600 font-medium">Challenges faced by talented performers</p>
            </div>
            <div className="space-y-6">
              {actorComplaints.map((complaint, index) => (
                <InteractiveCard key={index} item={complaint} index={index} type="actor" />
              ))}
            </div>
          </div>
        </div>

        {/* Success Story Card - More Subtle Design */}
        <div className="relative">
          <Card className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-200 shadow-lg transform hover:scale-[1.01] transition-all duration-500 overflow-hidden">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300" />
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full mb-6 shadow-md">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <blockquote className="text-lg text-slate-600 italic mb-6 leading-relaxed max-w-4xl mx-auto">
                "JAMZ didn't charge a penny as my scale is small and I don't need a complex process. 
                They provided excellent support and guidance that truly helped streamline my workflow. 
                All the best and best wishes for all the good work they're doing!"
              </blockquote>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-700 font-semibold text-base">Small-Scale Casting Director</p>
                  <p className="text-slate-500 text-sm">Mumbai Film Industry</p>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-slate-400 to-slate-500 text-white rounded-full font-medium shadow-md text-sm">
                <Zap className="w-4 h-4 mr-2" />
                Dedicated Support & Guidance
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
