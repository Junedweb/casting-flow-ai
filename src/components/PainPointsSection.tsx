
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

  const MobileCard = ({ item, index, type }: { item: any, index: number, type: 'cd' | 'actor' }) => {
    const accentColor = type === 'cd' ? 'red' : 'blue';

    return (
      <Card className={`border-l-4 border-l-${accentColor}-400 bg-white shadow-sm mb-3`}>
        <CardContent className="p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className={`p-2 rounded-full bg-${accentColor}-50 flex-shrink-0`}>
              <item.icon className={`w-4 h-4 text-${accentColor}-600`} />
            </div>
            <Quote className={`w-3 h-3 text-${accentColor}-400 mt-1 flex-shrink-0`} />
          </div>
          
          <p className="text-sm text-slate-700 leading-relaxed mb-3">{item.text}</p>
          
          <div className={`px-3 py-2 bg-${accentColor}-50 rounded-md text-xs font-medium text-${accentColor}-700 border-l-2 border-l-${accentColor}-300`}>
            <Zap className="w-3 h-3 inline mr-1" />
            {item.impact}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-8 px-3 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-lg mx-auto">
        {/* Mobile-First Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-red-600 to-blue-600 bg-clip-text text-transparent">
              We Understand Your Challenges
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every casting professional faces the same frustrations. <span className="font-semibold">You're not alone.</span>
          </p>
        </div>

        {/* Mobile Stack Layout */}
        <div className="space-y-6">
          {/* Casting Directors */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-2 bg-red-500 rounded-lg shadow-sm">
                <AlertTriangle className="w-4 h-4 text-white inline mr-2" />
                <span className="text-white font-semibold text-sm">Casting Directors</span>
              </div>
              <span className="text-xs text-red-600 font-medium">Industry pain points</span>
            </div>
            <div className="space-y-3">
              {painPoints.map((point, index) => (
                <MobileCard key={index} item={point} index={index} type="cd" />
              ))}
            </div>
          </div>

          {/* Actors */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-2 bg-blue-500 rounded-lg shadow-sm">
                <Users className="w-4 h-4 text-white inline mr-2" />
                <span className="text-white font-semibold text-sm">Actors & Artists</span>
              </div>
              <span className="text-xs text-blue-600 font-medium">Performer challenges</span>
            </div>
            <div className="space-y-3">
              {actorComplaints.map((complaint, index) => (
                <MobileCard key={index} item={complaint} index={index} type="actor" />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Success Story */}
        <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200 shadow-md mt-6">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Quote className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  ))}
                  <span className="ml-2 text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full">Success Story</span>
                </div>
                <blockquote className="text-sm text-slate-700 italic mb-3 leading-relaxed">
                  "JAMZ didn't charge a penny as my scale is small and I don't need a complex process. They provided excellent support and guidance that truly helped streamline my workflow. All the best and best wishes for all the good work they're doing!"
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Priya Sharma</p>
                    <p className="text-xs text-emerald-600">Small-Scale Casting Director, Mumbai</p>
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
