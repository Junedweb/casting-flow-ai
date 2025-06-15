
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, IndianRupee } from "lucide-react";

export const WhyFreeSection = () => {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Why It's <span className="text-amber-600">100% Free</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
                <IndianRupee className="w-6 h-6 text-red-600" />
                Traditional Alumni Management
              </h3>
              <p className="text-lg text-red-700 font-semibold mb-4">₹50 Lakhs - ₹2 Crores annually</p>
              <p className="text-slate-600 text-sm">
                Most acting schools spend enormous amounts on expensive alumni tracking systems that barely connect students to opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                JAMZ Partnership
              </h3>
              <p className="text-lg text-green-700 font-semibold mb-4">₹0 + Waived Registration Fees</p>
              <p className="text-slate-600 text-sm">
                Complete alumni management + student portfolio platform. Even the ₹500/month actor registration is waived for partner school students.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white border-0 shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              JAMZ earns through platform ads, premium recruiter tools, and YouTube monetization. 
              We believe student visibility should never cost you—so instead, we grow together.
            </p>
            <div className="flex justify-center items-center gap-6 text-sm text-slate-600 flex-wrap">
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
                <span>Waived student fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Alumni management included</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
