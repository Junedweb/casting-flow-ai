
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-amber-100 to-orange-100">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-slate-700 italic mb-6 leading-relaxed">
              "Previously, we lacked a professional platform to showcase our students' capabilities. With JAMZ, casting opportunities began arriving directly to our institution. 
              Additionally, the revenue-sharing model has enabled us to invest in superior workshop facilities."
            </blockquote>
            <div className="flex items-center justify-center">
              <div>
                <p className="font-semibold text-slate-900">Nisha R.</p>
                <p className="text-sm text-slate-600">Director, Premier Acting Institute, Indore</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
