
import { Card, CardContent } from "@/components/ui/card";
import { X, CheckCircle } from "lucide-react";

export const ActorsPainPointsSection = () => {
  const painPoints = [
    {
      problem: "I don't know if CDs even saw my portfolio.",
      solution: "Live profile views and reach tracker"
    },
    {
      problem: "I keep submitting the same details everywhere.",
      solution: "One profile, visible to many CDs"
    },
    {
      problem: "I travel to Mumbai every month just to stay visible.",
      solution: "Get seen from anywhere via smart filters"
    },
    {
      problem: "I've done work, but there's no legit place to showcase it.",
      solution: "Link YouTube videos, upload monologues & scenes"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Why JAMZ – 
          <span className="text-purple-600">Actor Pain vs. JAMZ Solution</span>
        </h2>
        
        <div className="grid gap-6">
          {painPoints.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  {/* Problem side */}
                  <div className="bg-red-50 p-6 flex items-center">
                    <X className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                    <p className="text-slate-700 font-medium">{item.problem}</p>
                  </div>
                  
                  {/* Solution side */}
                  <div className="bg-green-50 p-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <p className="text-slate-700 font-medium">{item.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
