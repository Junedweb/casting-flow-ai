
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleActingSchoolsClick = () => {
    navigate("/acting-schools");
  };

  const handleCastingClick = () => {
    navigate("/");
  };

  // Determine which button to show based on current route
  const isOnActingSchoolsPage = location.pathname === "/acting-schools" || location.pathname === "/acting-school-partnership";
  const isOnCastingPage = location.pathname === "/";

  return (
    <nav className="relative z-50 flex justify-between items-center p-6 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      {/* JAMZ Logo - Top Left */}
      <div className="flex items-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full shadow-lg border-2 border-white/20">
          <h2 className="text-lg font-bold text-white">JAMZ</h2>
        </div>
      </div>

      {/* Navigation - Top Right */}
      <div className="flex items-center gap-3">
        {isOnActingSchoolsPage && (
          <Button 
            variant="outline"
            className="bg-white/80 backdrop-blur-md border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-2 text-sm font-medium rounded-lg"
            onClick={handleCastingClick}
          >
            For Casting Directors
          </Button>
        )}
        {(isOnCastingPage || (!isOnActingSchoolsPage && !isOnCastingPage)) && (
          <Button 
            variant="outline"
            className="bg-white/80 backdrop-blur-md border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-2 text-sm font-medium rounded-lg"
            onClick={handleActingSchoolsClick}
          >
            For Acting Schools
          </Button>
        )}
      </div>
    </nav>
  );
};
