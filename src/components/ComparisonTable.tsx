
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Clock, IndianRupee } from "lucide-react";

export const ComparisonTable = () => {
  const comparisons = [
    {
      feature: "Face-matching system",
      inHouse: "₹1.5 Cr + 8 months",
      jamz: "Ready now",
      inHouseIcon: X,
      jamzIcon: Check
    },
    {
      feature: "When assistant quits",
      inHouse: "All data lost",
      jamz: "Nothing changes",
      inHouseIcon: X,
      jamzIcon: Check
    },
    {
      feature: "GDPR violation fine",
      inHouse: "₹5 Cr penalty risk",
      jamz: "Bulletproof security",
      inHouseIcon: X,
      jamzIcon: Check
    },
    {
      feature: "Daily maintenance",
      inHouse: "Your headache",
      jamz: "We handle it",
      inHouseIcon: X,
      jamzIcon: Check
    },
    {
      feature: "When tech breaks",
      inHouse: "Project stops",
      jamz: "Keeps running",
      inHouseIcon: X,
      jamzIcon: Check
    }
  ];

  return (
    <section className="py-12 px-3 bg-white">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight">
            Build vs Buy: The Brutal Truth
          </h2>
          <p className="text-base text-slate-600">
            Stop burning money and months on custom disasters.
          </p>
        </div>

        <Card className="overflow-hidden shadow-lg">
          <CardHeader className="bg-slate-900 text-white p-4">
            <CardTitle className="text-center text-lg">Reality Check</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4 p-4">
              {comparisons.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">{item.feature}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-md border-l-4 border-red-400">
                      <span className="text-xs font-medium text-slate-600">Build It Yourself</span>
                      <div className="flex items-center">
                        <item.inHouseIcon className="w-4 h-4 text-red-500 mr-2" />
                        <span className="text-sm text-slate-700 font-medium">{item.inHouse}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-md border-l-4 border-green-400">
                      <span className="text-xs font-medium text-slate-600">JAMZ</span>
                      <div className="flex items-center">
                        <item.jamzIcon className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-slate-700 font-semibold">{item.jamz}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
