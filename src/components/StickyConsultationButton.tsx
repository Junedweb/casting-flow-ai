
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackButtonClick } from "@/utils/buttonTracker";

export const StickyConsultationButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    trackButtonClick("Book Consultation - Sticky Button");
    navigate("/contact");
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 sm:top-4 sm:right-4 sm:left-auto sm:transform-none">
      <Button 
        onClick={handleClick}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full flex items-center gap-2 text-sm font-semibold"
      >
        <Calendar className="w-4 h-4" />
        <span className="hidden sm:inline">Book Consultation</span>
        <span className="sm:hidden">Book Now</span>
      </Button>
    </div>
  );
};
