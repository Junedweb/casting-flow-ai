
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackButtonClick } from "@/utils/buttonTracker";

export const CtaSection = () => {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    trackButtonClick("Book Free Consultation - CTA");
    navigate("/contact");
  };

  return (
    <section className="py-12 px-3 bg-slate-50">
      <div className="max-w-lg mx-auto text-center">
        <div className="mb-8">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight">
            We're Here to Support and Add Value to Your Casting Process
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Let's talk about your current system. No commitment—just 2–3 actionable suggestions 
            from our tech experts to improve your casting workflow.
          </p>
        </div>

        <Card className="bg-white shadow-lg border-0 mb-8">
          <CardContent className="p-6">
            <div className="space-y-6 mb-6">
              <div className="text-center">
                <MessageCircle className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Listen First</h3>
                <p className="text-slate-600 text-sm">We understand your current challenges</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Actionable Advice</h3>
                <p className="text-slate-600 text-sm">Immediate improvements you can implement</p>
              </div>
              <div className="text-center">
                <Heart className="w-10 h-10 text-red-500 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Zero Pressure</h3>
                <p className="text-slate-600 text-sm">100% support, no strings attached</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              onClick={handleConsultationClick}
            >
              Book Free Consultation
            </Button>
          </CardContent>
        </Card>

        <p className="text-slate-500 text-sm leading-relaxed">
          Meet tech and data experts who listen first, advise second. Zero pressure. 100% support.
        </p>
      </div>
    </section>
  );
};
