
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const StickyConsultationButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button 
        onClick={() => navigate("/contact")}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full flex items-center gap-2"
      >
        <Calendar className="w-4 h-4" />
        Book Consultation
      </Button>
    </div>
  );
};
