
import { Button } from "@/components/ui/button";

interface JoinMovementSectionProps {
  onApplyClick: () => void;
}

export const JoinMovementSection = ({ onApplyClick }: JoinMovementSectionProps) => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Join India's Premier 
          <span className="block text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
            Talent Development Ecosystem
          </span>
        </h2>
        <p className="text-xl text-slate-700 mb-8 leading-relaxed">
          Whether you operate an intimate studio in Bhopal or manage a comprehensive campus in Mumbai, 
          JAMZ is designed to elevate your talent and amplify your institutional impact across the industry.
        </p>
        <Button 
          size="lg"
          className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          onClick={onApplyClick}
        >
          Partner With JAMZ
        </Button>
      </div>
    </section>
  );
};
