
import { Button } from "@/components/ui/button";

interface CertificationBannerProps {
  onApplyClick: () => void;
}

export const CertificationBanner = ({ onApplyClick }: CertificationBannerProps) => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-amber-600 to-orange-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Be Recognized. Be Recommended.
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          JAMZ awards 2–5 schools every quarter with its official certification, 
          based on content quality, student growth, and placement activity.
        </p>
        <Button 
          size="lg"
          className="bg-white text-amber-600 hover:bg-amber-50 px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          onClick={onApplyClick}
        >
          Apply for Evaluation
        </Button>
      </div>
    </section>
  );
};
