
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Quote, Users, Zap, Database, Eye, UserX, MapPin } from "lucide-react";
import { useState } from "react";

export const PainPointsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const painPoints = [
    {
      text: "Data scattered across WhatsApp, Instagram, Google Drive, Excel sheets.",
      impact: "3+ hours daily searching",
      icon: Database
    },
    {
      text: "Manual matching of casting requirements with profiles is a nightmare.",
      impact: "70% slower decisions",
      icon: AlertTriangle
    },
    {
      text: "Custom app development is too expensive and never fits right.",
      impact: "₹5L+ wasted",
      icon: Zap
    },
    {
      text: "High assistant turnover causes constant talent profile loss.",
      impact: "30% database lost yearly",
      icon: UserX
    },
    {
      text: "Low visibility of available actors when needed.",
      impact: "Missing quality talent",
      icon: Eye
    },
    {
      text: "Trained actors become outdated or leave location.",
      impact: "40% pool unavailable",
      icon: MapPin
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
      icon: Users
    }
  ];

  const CompactCard = ({ item, index, type }: { item: any, index: number, type: 'cd' | 'actor' }) => {
    const isHovered = hoveredCard === index + (type === 'actor' ? 100 : 0);
    const accentColor = type === 'cd' ? 'red' : 'blue';

    return (
      <Card 
        className={`group relative overflow-hidden border-l-2 border-l-${accentColor}-400 bg-white hover:shadow-md transition-all duration-300 cursor-pointer h-full`}
        onMouseEnter={() => setHoveredCard(index + (type === 'actor' ? 100 : 0))}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent className="p-2 h-full flex flex-col">
          <div className="flex items-start gap-1 mb-1">
            <div className={`p-0.5 rounded-full bg-${accentColor}-50 flex-shrink-0`}>
              <item.icon className={`w-2.5 h-2.5 text-${accentColor}-600`} />
            </div>
            <Quote className={`w-1.5 h-1.5 text-${accentColor}-400 mt-0.5 flex-shrink-0`} />
          </div>
          
          <p className="text-[10px] text-slate-700 leading-tight mb-1 flex-1">{item.text}</p>
          
          <div className={`px-1 py-0.5 bg-${accentColor}-50 rounded text-[8px] font-medium text-${accentColor}-700 border-l border-l-${accentColor}-300`}>
            <Zap className="w-1.5 h-1.5 inline mr-0.5" />
            {item.impact}
          </div>

          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse pointer-events-none" />
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-4 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Compact Header */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-2 mb-1">
            <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
              <Users className="w-2.5 h-2.5 text-white" />
            </div>
            <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-slate-900 via-red-600 to-blue-600 bg-clip-text text-transparent">
              We Understand Your Challenges
            </h2>
          </div>
          <p className="text-[10px] text-slate-600 max-w-2xl mx-auto">
            Every casting professional faces the same frustrations. <span className="font-semibold">You're not alone.</span>
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-3 mb-3">
          {/* Casting Directors */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="px-1.5 py-0.5 bg-red-500 rounded-md shadow-sm">
                <AlertTriangle className="w-2.5 h-2.5 text-white inline mr-1" />
                <span className="text-white font-semibold text-[10px]">Casting Directors</span>
              </div>
              <span className="text-[8px] text-red-600">Industry pain points</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
              {painPoints.map((point, index) => (
                <CompactCard key={index} item={point} index={index} type="cd" />
              ))}
            </div>
          </div>

          {/* Actors */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="px-1.5 py-0.5 bg-blue-500 rounded-md shadow-sm">
                <Users className="w-2.5 h-2.5 text-white inline mr-1" />
                <span className="text-white font-semibold text-[10px]">Actors & Artists</span>
              </div>
              <span className="text-[8px] text-blue-600">Performer challenges</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5">
              {actorComplaints.map((complaint, index) => (
                <CompactCard key={index} item={complaint} index={index} type="actor" />
              ))}
            </div>
          </div>
        </div>

        {/* Compact Success Story */}
        <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200 shadow-md">
          <CardContent className="p-2">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Quote className="w-2.5 h-2.5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                  ))}
                  <span className="ml-1 text-[8px] font-semibold text-emerald-700 bg-emerald-100 px-1 py-0.5 rounded-full">Success Story</span>
                </div>
                <blockquote className="text-[10px] text-slate-700 italic mb-1 leading-relaxed">
                  "JAMZ didn't charge a penny as my scale is small and I don't need a complex process. They provided excellent support and guidance that truly helped streamline my workflow. All the best and best wishes for all the good work they're doing!"
                </blockquote>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full flex items-center justify-center">
                    <Users className="w-1.5 h-1.5 text-white" />
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-slate-800">Priya Sharma</p>
                    <p className="text-[7px] text-emerald-600">Small-Scale Casting Director, Mumbai</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
