
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
            Stop Wrestling with Excel Sheets and WhatsApp Screenshots
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Let's look at your current chaos. We'll show you exactly how to cut your casting time by 60%—no strings attached.
          </p>
        </div>

        <Card className="bg-white shadow-lg border-0 mb-8">
          <CardContent className="p-6">
            <div className="space-y-6 mb-6">
              <div className="text-center">
                <MessageCircle className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">We See Your Pain</h3>
                <p className="text-slate-600 text-sm">Scattered data, lost profiles, delayed projects</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">We Fix It Fast</h3>
                <p className="text-slate-600 text-sm">3 specific steps to organize your chaos</p>
              </div>
              <div className="text-center">
                <Heart className="w-10 h-10 text-red-500 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Zero Agenda</h3>
                <p className="text-slate-600 text-sm">Pure help, no hidden sales pitch</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              onClick={handleConsultationClick}
            >
              Show Me the 60% Time Cut
            </Button>
          </CardContent>
        </Card>

        <p className="text-slate-500 text-sm leading-relaxed">
          Real tech experts who understand casting hell. Zero pitch. 100% solutions.
        </p>
      </div>
    </section>
  );
};
