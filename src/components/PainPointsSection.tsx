
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Quote, Users, Zap, Database, Eye, UserX, MapPin } from "lucide-react";
import { useState } from "react";

export const PainPointsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const painPoints = [
    {
      text: "Scrolling through 500+ WhatsApp photos at 2 AM looking for 'that tall guy from the soap ad'",
      impact: "4 hours daily hunting faces",
      icon: Database
    },
    {
      text: "Client says 'find someone like Hrithik' and you manually scan 1000+ profiles hoping for a match",
      impact: "Projects delayed by days",
      icon: AlertTriangle
    },
    {
      text: "Spent ₹8 lakhs on a custom app that crashes every time you upload more than 10 photos",
      impact: "Money down the drain",
      icon: Zap
    },
    {
      text: "Assistant quits, takes the Excel sheet password, and suddenly 2000 actor contacts vanish",
      impact: "Years of work gone",
      icon: UserX
    },
    {
      text: "Perfect actor exists in your database but buried under 50 folders of random screenshots",
      impact: "Lost the role to competition",
      icon: Eye
    },
    {
      text: "Actor moved to Goa, gained 15 kg, cut hair short—but still shows up in your 'available' list",
      impact: "Embarrassing client calls",
      icon: MapPin
    }
  ];

  const actorComplaints = [
    {
      text: "Website crashes every time I try uploading my portfolio. Meanwhile, they cast my friend who just DMed the CD on Instagram.",
      impact: "Missing 80% of auditions",
      icon: AlertTriangle
    },
    {
      text: "Traveling from Pune to Mumbai every month just to 'update my look' when I've been working with them for 2 years",
      impact: "₹3,000 monthly travel burns",
      icon: Users
    },
    {
      text: "Sent my profile 6 months ago, they're still asking if I'm available for auditions I missed last week",
      impact: "Reputation damaged",
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
              The Daily Casting Nightmare
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every casting professional faces this hell. <span className="font-semibold">You're drowning in digital chaos.</span>
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
              <span className="text-xs text-red-600 font-medium">Actual horror stories</span>
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
              <span className="text-xs text-blue-600 font-medium">Career killers</span>
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
                  <span className="ml-2 text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full">Escape Story</span>
                </div>
                <blockquote className="text-sm text-slate-700 italic mb-3 leading-relaxed">
                  "JAMZ saved my sanity. No more midnight WhatsApp scrolling. No more Excel sheet crashes. Found 5 perfect actors in 20 minutes for a last-minute shoot. They didn't even charge me!"
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Priya Sharma</p>
                    <p className="text-xs text-emerald-600">Escaped the Chaos, Mumbai</p>
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
