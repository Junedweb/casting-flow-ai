
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
    <section className="py-6 px-4 bg-slate-50">
      <div className="max-w-sm mx-auto text-center">
        <div className="mb-4">
          <Heart className="w-10 h-10 text-red-500 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
            Ready to Improve Your Casting Process?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Let's show you how to reduce casting time by 60% with organized workflows.
          </p>
        </div>

        <Card className="bg-white shadow-lg border-0 mb-4">
          <CardContent className="p-3">
            <div className="space-y-3 mb-4">
              <div className="text-center">
                <MessageCircle className="w-6 h-6 text-blue-500 mx-auto mb-1.5" />
                <h3 className="font-bold text-slate-900 mb-1 text-xs">We Understand Your Challenges</h3>
                <p className="text-slate-600 text-xs">Disorganized data, lost profiles, project delays</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-1.5" />
                <h3 className="font-bold text-slate-900 mb-1 text-xs">We Provide Solutions</h3>
                <p className="text-slate-600 text-xs">Practical steps to organize your workflow</p>
              </div>
              <div className="text-center">
                <Heart className="w-6 h-6 text-red-500 mx-auto mb-1.5" />
                <h3 className="font-bold text-slate-900 mb-1 text-xs">No Sales Pressure</h3>
                <p className="text-slate-600 text-xs">Genuine help focused on your needs</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              onClick={handleConsultationClick}
            >
              Learn About Time Savings
            </Button>
          </CardContent>
        </Card>

        <p className="text-slate-500 text-xs leading-relaxed">
          Technical experts who understand casting workflows. Helpful guidance, not sales pitches.
        </p>
      </div>
    </section>
  );
};
