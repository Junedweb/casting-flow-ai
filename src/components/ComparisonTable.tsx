
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export const ComparisonTable = () => {
  const comparisons = [
    {
      feature: "Face-matching system",
      traditional: "₹1.5 Cr + 8 months development",
      jamz: "Implemented based on requirements",
      traditionalIcon: X,
      jamzIcon: Check
    },
    {
      feature: "Implementation time",
      traditional: "8-12 months for basic features",
      jamz: "Immediate deployment, customized setup",
      traditionalIcon: X,
      jamzIcon: Check
    },
    {
      feature: "Cost structure",
      traditional: "Huge upfront investment + maintenance",
      jamz: "Partnership model - almost chargeless",
      traditionalIcon: X,
      jamzIcon: Check
    },
    {
      feature: "Feature customization",
      traditional: "Limited to initial specifications",
      jamz: "Tailored to your specific workflow needs",
      traditionalIcon: X,
      jamzIcon: Check
    }
  ];

  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
            Traditional vs Partnership Plan
          </h2>
          <p className="text-sm text-slate-600">
            Why partnership makes more sense than building from scratch.
          </p>
        </div>

        <Card className="overflow-hidden shadow-lg">
          <CardHeader className="bg-slate-900 text-white p-3">
            <CardTitle className="text-center text-base">Feature & Cost Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-3 p-3">
              {comparisons.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-3">
                  <h3 className="font-semibold text-slate-900 mb-3 text-xs">{item.feature}</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-red-50 rounded-md border-l-4 border-red-400">
                      <span className="text-xs font-medium text-slate-600">Traditional Approach</span>
                      <div className="flex items-center">
                        <item.traditionalIcon className="w-3 h-3 text-red-500 mr-1" />
                        <span className="text-xs text-slate-700 font-medium">{item.traditional}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 bg-green-50 rounded-md border-l-4 border-green-400">
                      <span className="text-xs font-medium text-slate-600">JAMZ Partnership</span>
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
