
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
      jamz: "Instant",
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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose JAMZ Over Building In-House?
          </h2>
          <p className="text-xl text-slate-600">
            Save time, money, and headaches with our ready-to-use solution.
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-slate-900 text-white">
            <CardTitle className="text-center text-2xl">Cost Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-6 font-bold text-slate-900">Feature</th>
                    <th className="text-center p-6 font-bold text-red-600">Build In-House</th>
                    <th className="text-center p-6 font-bold text-green-600">JAMZ</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-6 font-semibold text-slate-900">{item.feature}</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center">
                          <item.inHouseIcon className="w-5 h-5 text-red-500 mr-2" />
                          <span className="text-slate-700">{item.inHouse}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center">
                          <item.jamzIcon className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-slate-700 font-semibold">{item.jamz}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
