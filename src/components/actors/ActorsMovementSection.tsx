
import { Button } from "@/components/ui/button";

interface ActorsMovementSectionProps {
  onJoinClick: () => void;
}

export const ActorsMovementSection = ({ onJoinClick }: ActorsMovementSectionProps) => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join a Growing Movement
        </h2>
        <p className="text-xl mb-8 leading-relaxed opacity-90">
          From Nanded to Nungambakkam, Indore to Imphal—actors across India are switching to JAMZ.
          <span className="block mt-2 font-semibold">
            Why wait in lines when your profile can be working 24/7?
          </span>
        </p>
        <Button 
          onClick={onJoinClick}
          size="lg"
          className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          Join the JAMZ Movement
        </Button>
      </div>
    </section>
  );
};
