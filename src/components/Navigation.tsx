
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCastingDirectorsClick = () => {
    navigate("/casting-directors");
    setIsMobileMenuOpen(false);
  };

  const handleActingSchoolsClick = () => {
    navigate("/for-schools");
    setIsMobileMenuOpen(false);
  };

  const handleActorsClick = () => {
    navigate("/for-actors");
    setIsMobileMenuOpen(false);
  };

  const isCastingDirectorsActive = location.pathname === "/" || location.pathname === "/casting-directors";
  const isActingSchoolsActive = location.pathname === "/for-schools" || location.pathname === "/acting-schools" || location.pathname === "/acting-school-partnership";
  const isActorsActive = location.pathname === "/for-actors" || location.pathname === "/actors";

  return (
    <nav className="relative z-50 flex justify-between items-center p-4 bg-white/90 backdrop-blur-sm border-b border-gray-200 sm:p-6">
      {/* JAMZ Logo - Top Left */}
      <div className="flex items-center">
        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full shadow-lg border-2 border-white/20 sm:w-12 sm:h-12">
          <h2 className="text-sm font-bold text-white sm:text-lg">JAMZ</h2>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-2">
        <Button 
          variant={isCastingDirectorsActive ? "default" : "outline"}
          size="sm"
          className={isCastingDirectorsActive
            ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-2 text-xs font-medium rounded-lg"
            : "bg-white/80 backdrop-blur-md border-gray-300 text-gray-700 hover:bg-gray-100 px-3 py-2 text-xs font-medium rounded-lg"
          }
          onClick={handleCastingDirectorsClick}
        >
          For Directors
        </Button>
        
        <Button 
          variant={isActingSchoolsActive ? "default" : "outline"}
          size="sm"
          className={isActingSchoolsActive
            ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-2 text-xs font-medium rounded-lg"
            : "bg-white/80 backdrop-blur-md border-gray-300 text-gray-700 hover:bg-gray-100 px-3 py-2 text-xs font-medium rounded-lg"
          }
          onClick={handleActingSchoolsClick}
        >
          For Schools
        </Button>
        
        <Button 
          variant={isActorsActive ? "default" : "outline"}
          size="sm"
          className={isActorsActive
            ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-2 text-xs font-medium rounded-lg"
            : "bg-white/80 backdrop-blur-md border-gray-300 text-gray-700 hover:bg-gray-100 px-3 py-2 text-xs font-medium rounded-lg"
          }
          onClick={handleActorsClick}
        >
          For Actors
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg md:hidden">
          <div className="flex flex-col p-4 gap-2">
            <Button 
              variant={isCastingDirectorsActive ? "default" : "outline"}
              size="sm"
              className={isCastingDirectorsActive
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white justify-start"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100 justify-start"
              }
              onClick={handleCastingDirectorsClick}
            >
              For Directors
            </Button>
            
            <Button 
              variant={isActingSchoolsActive ? "default" : "outline"}
              size="sm"
              className={isActingSchoolsActive
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white justify-start"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100 justify-start"
              }
              onClick={handleActingSchoolsClick}
            >
              For Schools
            </Button>
            
            <Button 
              variant={isActorsActive ? "default" : "outline"}
              size="sm"
              className={isActorsActive
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white justify-start"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100 justify-start"
              }
              onClick={handleActorsClick}
            >
              For Actors
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
