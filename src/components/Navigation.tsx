
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleActingSchoolsClick = () => {
    navigate("/acting-schools");
  };

  const handleCastingClick = () => {
    navigate("/");
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-6">
      {/* JAMZ Logo - Top Left */}
      <div className="flex items-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full shadow-lg border-2 border-white/20">
          <h2 className="text-lg font-bold text-white">JAMZ</h2>
        </div>
      </div>

      {/* Navigation - Top Right */}
      <div className="flex items-center gap-3">
        <Button 
          variant="outline"
          className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-6 py-2 text-sm font-medium rounded-lg"
          onClick={handleCastingClick}
        >
          For Casting Directors
        </Button>
        <Button 
          variant="outline"
          className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-6 py-2 text-sm font-medium rounded-lg"
          onClick={handleActingSchoolsClick}
        >
          For Acting Schools
        </Button>
      </div>
    </nav>
  );
};
