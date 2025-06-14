
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CtaSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            We're Here to Support and Add Value to Your Casting Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Let's talk about your current system. No commitment—just 2–3 actionable suggestions 
            from our tech experts to improve your casting workflow.
          </p>
        </div>

        <Card className="bg-white shadow-xl border-0 mb-12">
          <CardContent className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Listen First</h3>
                <p className="text-slate-600">We understand your current challenges</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Actionable Advice</h3>
                <p className="text-slate-600">Immediate improvements you can implement</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Zero Pressure</h3>
                <p className="text-slate-600">100% support, no strings attached</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Book Free Consultation
            </Button>
          </CardContent>
        </Card>

        <p className="text-slate-500 text-lg">
          Meet tech and data experts who listen first, advise second. Zero pressure. 100% support.
        </p>
      </div>
    </section>
  );
};
