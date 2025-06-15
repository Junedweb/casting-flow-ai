
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCastingClick = () => {
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const handleActingSchoolsClick = () => {
    navigate("/acting-schools");
    setIsMobileMenuOpen(false);
  };

  const handleActorsClick = () => {
    navigate("/actors");
    setIsMobileMenuOpen(false);
  };

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
          variant={location.pathname === "/" ? "default" : "outline"}
          size="sm"
          className={location.pathname === "/" 
            ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-2 text-xs font-medium rounded-lg"
            : "bg-white/80 backdrop-blur-md border-gray-300 text-gray-700 hover:bg-gray-100 px-3 py-2 text-xs font-medium rounded-lg"
          }
          onClick={handleCastingClick}
        >
          Casting Directors
        </Button>
        
        <Button 
          variant={location.pathname === "/acting-schools" || location.pathname === "/acting-school-partnership" ? "default" : "outline"}
          size="sm"
          className={location.pathname === "/acting-schools" || location.pathname === "/acting-school-partnership"
            ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-2 text-xs font-medium rounded-lg"
            : "bg-white/80 backdrop-blur-md border-gray-300 text-gray-700 hover:bg-gray-100 px-3 py-2 text-xs font-medium rounded-lg"
          }
          onClick={handleActingSchoolsClick}
        >
          Acting Schools
        </Button>
        
        <Button 
          variant={location.pathname === "/actors" ? "default" : "outline"}
          size="sm"
          className={location.pathname === "/actors"
            ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-2 text-xs font-medium rounded-lg"
            : "bg-white/80 backdrop-blur-md border-gray-300 text-gray-700 hover:bg-gray-100 px-3 py-2 text-xs font-medium rounded-lg"
          }
          onClick={handleActorsClick}
        >
          Actors
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg md:hidden">
          <div className="flex flex-col p-4 gap-2">
            <Button 
              variant={location.pathname === "/" ? "default" : "outline"}
              size="sm"
              className={location.pathname === "/" 
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white justify-start"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100 justify-start"
              }
              onClick={handleCastingClick}
            >
              Casting Directors
            </Button>
            
            <Button 
              variant={location.pathname === "/acting-schools" || location.pathname === "/acting-school-partnership" ? "default" : "outline"}
              size="sm"
              className={location.pathname === "/acting-schools" || location.pathname === "/acting-school-partnership"
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white justify-start"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100 justify-start"
              }
              onClick={handleActingSchoolsClick}
            >
              Acting Schools
            </Button>
            
            <Button 
              variant={location.pathname === "/actors" ? "default" : "outline"}
              size="sm"
              className={location.pathname === "/actors"
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white justify-start"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100 justify-start"
              }
              onClick={handleActorsClick}
            >
              Actors
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
