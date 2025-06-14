
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Quote } from "lucide-react";

export const PainPointsSection = () => {
  const painPoints = [
    "Our data's scattered—WhatsApp, Instagram, Google Drive, Excel sheets. It's chaos.",
    "After 200+ profiles, Excel just breaks.",
    "Tried building our own app. Too expensive and never fits right."
  ];

  const actorComplaints = [
    "Website doesn't work properly—I never know if my profile even reached the right person.",
    "I have to show up every month in person. Even though I've worked with this CD before.",
    "I live in Pune—traveling to Mumbai all the time is expensive. A proper online flow would help."
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            We Understand Your Challenges
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every casting director faces the same frustrations. You're not alone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3" />
              What Casting Directors Tell Us
            </h3>
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <Card key={index} className="border-l-4 border-l-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Quote className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-slate-700 italic text-lg">{point}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3" />
              What Actors Tell Us
            </h3>
            <div className="space-y-4">
              {actorComplaints.map((complaint, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Quote className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-slate-700 italic text-lg">{complaint}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-8 text-center">
            <Quote className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <p className="text-lg text-slate-700 italic mb-4">
              "I didn't expect much—but JAMZ's team gave solid advice, no strings attached. 
              It actually helped fix our flow before we signed up."
            </p>
            <p className="text-green-600 font-semibold">— Casting Director, Mumbai</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
