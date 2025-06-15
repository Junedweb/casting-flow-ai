
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const WhyFreeSection = () => {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Why It's <span className="text-amber-600">100% Free</span>
        </h2>
        <Card className="bg-white border-0 shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg text-slate-700 leading-relaxed">
              JAMZ earns through platform ads, premium recruiter tools, and YouTube monetization. 
              We believe student visibility should never cost you—so instead, we grow together.
            </p>
            <div className="mt-6 flex justify-center items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Revenue sharing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Transparent model</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
