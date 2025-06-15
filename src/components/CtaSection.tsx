
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
    <section className="py-8 px-4 bg-slate-50">
      <div className="max-w-sm mx-auto text-center">
        <div className="mb-6">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
            Stop Wrestling with Excel & Screenshots
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Let's fix your chaos. We'll show you exactly how to cut casting time by 60%.
          </p>
        </div>

        <Card className="bg-white shadow-lg border-0 mb-6">
          <CardContent className="p-4">
            <div className="space-y-4 mb-6">
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-bold text-slate-900 mb-1 text-sm">We See Your Pain</h3>
                <p className="text-slate-600 text-xs">Scattered data, lost profiles, delayed projects</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-bold text-slate-900 mb-1 text-sm">We Fix It Fast</h3>
                <p className="text-slate-600 text-xs">3 specific steps to organize your chaos</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h3 className="font-bold text-slate-900 mb-1 text-sm">Zero Agenda</h3>
                <p className="text-slate-600 text-xs">Pure help, no hidden sales pitch</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              onClick={handleConsultationClick}
            >
              Show Me the 60% Time Cut
            </Button>
          </CardContent>
        </Card>

        <p className="text-slate-500 text-xs leading-relaxed">
          Real tech experts who understand casting hell. Zero pitch. 100% solutions.
        </p>
      </div>
    </section>
  );
};
