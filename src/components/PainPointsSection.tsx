import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Quote, Users, Zap, Database, UserX } from "lucide-react";

export const PainPointsSection = () => {
  const painPoints = [
    {
      text: "Spending hours searching through hundreds of photos to find actors who match client requirements, then manually reviewing profiles when clients ask for 'someone like this actor'",
      impact: "3-4 hours daily on searches and comparisons",
      icon: Database
    },
    {
      text: "Relying on expensive custom software that crashes with large files, and losing years of organized contact data when assistants leave",
      impact: "Wasted investment and lost productivity",
      icon: AlertTriangle
    }
  ];

  const actorComplaints = [
    {
      text: "Platform crashes during every photo upload while opportunities are shared via social media",
      impact: "Missing most audition opportunities",
      icon: AlertTriangle
    },
    {
      text: "Monthly travel from other cities just to update profile photos after years of collaboration",
      impact: "₹3,000 monthly unnecessary travel costs",
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
          
          <div className={`px-3 py-2 bg-${accentColor}-50 rounded-lg text-xs font-medium text-${accentColor}-700 border-l-2 border-l-${accentColor}-300`}>
            <Zap className="w-3 h-3 inline mr-1" />
            {item.impact}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-8 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-red-600 to-blue-600 bg-clip-text text-transparent">
              Common Challenges
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            <span className="font-semibold">Many face similar workflow issues.</span>
          </p>
        </div>

        <Tabs defaultValue="casting-directors" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="casting-directors" className="text-xs">Casting Directors</TabsTrigger>
            <TabsTrigger value="actors" className="text-xs">Actors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="casting-directors" className="space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-2 bg-red-500 rounded-lg shadow-sm">
                <AlertTriangle className="w-4 h-4 text-white inline mr-2" />
                <span className="text-white font-semibold text-sm">Daily challenges</span>
              </div>
            </div>
            {painPoints.map((point, index) => (
              <MobileCard key={index} item={point} index={index} type="cd" />
            ))}
          </TabsContent>
          
          <TabsContent value="actors" className="space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-2 bg-blue-500 rounded-lg shadow-sm">
                <Users className="w-4 h-4 text-white inline mr-2" />
                <span className="text-white font-semibold text-sm">Common issues</span>
              </div>
            </div>
            {actorComplaints.map((complaint, index) => (
              <MobileCard key={index} item={complaint} index={index} type="actor" />
            ))}
          </TabsContent>
        </Tabs>

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
                  "JAMZ helped organize our workflow. Found 5 suitable actors in 20 minutes for a last-minute project."
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Priya Sharma</p>
                    <p className="text-xs text-emerald-600">Mumbai</p>
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
