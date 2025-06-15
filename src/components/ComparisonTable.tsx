
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export const ComparisonTable = () => {
  const comparisons = [
    {
      feature: "Face-matching system",
      inHouse: "₹1.5 Cr + 8 months development",
      jamz: "Available immediately",
      inHouseIcon: X,
      jamzIcon: Check
    },
    {
      feature: "When staff changes",
      inHouse: "Data organization lost",
      jamz: "System continues smoothly",
      inHouseIcon: X,
      jamzIcon: Check
    },
    {
      feature: "GDPR compliance risk",
      inHouse: "₹5 Cr potential penalty",
      jamzIcon: Check,
      jamz: "Built-in compliance",
      inHouseIcon: X
    },
    {
      feature: "Technical maintenance",
      inHouse: "Work stops during issues",
      jamz: "Continuous operation",
      inHouseIcon: X,
      jamzIcon: Check
    }
  ];

  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
            Build vs Buy: Cost Comparison
          </h2>
          <p className="text-sm text-slate-600">
            Understanding the real investment required.
          </p>
        </div>

        <Card className="overflow-hidden shadow-lg">
          <CardHeader className="bg-slate-900 text-white p-3">
            <CardTitle className="text-center text-base">Reality Check</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-3 p-3">
              {comparisons.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-3">
                  <h3 className="font-semibold text-slate-900 mb-3 text-xs">{item.feature}</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-red-50 rounded-md border-l-4 border-red-400">
                      <span className="text-xs font-medium text-slate-600">Build Yourself</span>
                      <div className="flex items-center">
                        <item.inHouseIcon className="w-3 h-3 text-red-500 mr-1" />
                        <span className="text-xs text-slate-700 font-medium">{item.inHouse}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 bg-green-50 rounded-md border-l-4 border-green-400">
                      <span className="text-xs font-medium text-slate-600">JAMZ</span>
                      <div className="flex items-center">
                        <item.jamzIcon className="w-3 h-3 text-green-500 mr-1" />
                        <span className="text-xs text-slate-700 font-semibold">{item.jamz}</span>
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
