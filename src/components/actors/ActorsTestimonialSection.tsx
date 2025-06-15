
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const ActorsTestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 px-6 bg-gradient-to-r from-purple-100 to-indigo-100">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8">
            <Quote className="w-12 h-12 text-purple-600 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-slate-700 italic mb-6 leading-relaxed">
              "I uploaded my JAMZ monologue in 2 minutes—and landed a web audition within 3 days. This is real."
            </blockquote>
            <div className="flex items-center justify-center">
              <div>
                <p className="font-semibold text-slate-900">Shivam A.</p>
                <p className="text-sm text-slate-600">Actor, Lucknow</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
