
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Clock, IndianRupee } from "lucide-react";

export const ComparisonTable = () => {
  const comparisons = [
    {
      feature: "App + Database + Dashboard",
      inHouse: "₹1–2 Cr",
      jamz: "₹20K/month",
      inHouseIcon: X,
      jamzIcon: Check
    },
    {
      feature: "Setup Time",
      inHouse: "6–12 months",
      jamz: "As per custom requirement",
      inHouseIcon: Clock,
      jamzIcon: Check
    },
    {
      feature: "Data Security",
      inHouse: "Needs extra dev work",
      jamz: "Built-in encryption",
      inHouseIcon: X,
      jamzIcon: Check
    },
    {
      feature: "Support",
      inHouse: "Your team",
      jamz: "JAMZ RM",
      inHouseIcon: X,
      jamzIcon: Check
    },
    {
      feature: "Feature Enhancements",
      inHouse: "Your cost",
      jamz: "Part of roadmap",
      inHouseIcon: X,
      jamzIcon: Check
    }
  ];

  return (
    <section className="py-12 px-3 bg-white">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight">
            Why Choose JAMZ Over Building In-House?
          </h2>
          <p className="text-base text-slate-600">
            Save time, money, and headaches with our ready-to-use solution.
          </p>
        </div>

        <Card className="overflow-hidden shadow-lg">
          <CardHeader className="bg-slate-900 text-white p-4">
            <CardTitle className="text-center text-lg">Cost Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4 p-4">
              {comparisons.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">{item.feature}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-md border-l-4 border-red-400">
                      <span className="text-xs font-medium text-slate-600">Build In-House</span>
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
