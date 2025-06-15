
import { Button } from "@/components/ui/button";

interface ActorsMovementSectionProps {
  onJoinClick: () => void;
}

export const ActorsMovementSection = ({ onJoinClick }: ActorsMovementSectionProps) => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join a Growing Movement
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          From Nanded to Nungambakkam, Indore to Imphal—actors across India are switching to JAMZ.
          Why wait in lines when your profile can be working 24/7?
        </p>
        <Button 
          onClick={onJoinClick}
          size="lg"
          className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Join the JAMZ Movement - ₹500/month
        </Button>
      </div>
    </section>
  );
};
