
import { 
  RefreshCw, 
  Users, 
  Filter, 
  Scan, 
  Bell,
  Shield,
  MessageCircle,
  Globe,
  Instagram,
  Lock,
  User,
  Check,
  LayoutDashboard,
  Share2
} from "lucide-react";

interface FeatureIconProps {
  iconType: string;
}

export const FeatureIcon = ({ iconType }: FeatureIconProps) => {
  const iconClasses = "transition-all duration-300 group-hover:scale-110";
  
  switch (iconType) {
    case "centralized":
      return (
        <div className="relative flex items-center justify-center space-x-1">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <MessageCircle className={`w-5 h-5 text-green-500 ${iconClasses}`} />
          <Instagram className={`w-5 h-5 text-pink-500 ${iconClasses}`} />
          <Globe className={`w-5 h-5 text-blue-500 ${iconClasses}`} />
        </div>
      );
    case "refresh":
      return (
        <div className="relative">
          <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <RefreshCw className={`w-8 h-8 text-blue-600 ${iconClasses} group-hover:rotate-180`} />
        </div>
      );
    case "social-campaign":
      return (
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="relative grid grid-cols-2 gap-1">
            <Share2 className={`w-4 h-4 text-purple-600 ${iconClasses} group-hover:animate-pulse`} />
            <Instagram className={`w-4 h-4 text-pink-500 ${iconClasses}`} />
            <MessageCircle className={`w-4 h-4 text-green-500 ${iconClasses}`} />
            <Globe className={`w-4 h-4 text-blue-500 ${iconClasses}`} />
          </div>
        </div>
      );
    case "users":
      return (
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="relative grid grid-cols-2 gap-1">
            <div className="relative">
              <User className={`w-4 h-4 text-purple-600 ${iconClasses}`} />
              <Check className="w-2 h-2 text-green-500 absolute -top-1 -right-1 bg-white rounded-full" />
            </div>
            <div className="relative">
              <User className={`w-4 h-4 text-indigo-600 ${iconClasses}`} />
              <Lock className="w-2 h-2 text-orange-500 absolute -top-1 -right-1 bg-white rounded-full" />
            </div>
            <div className="relative col-span-2 flex justify-center">
              <Shield className={`w-4 h-4 text-purple-700 ${iconClasses} group-hover:animate-pulse`} />
            </div>
          </div>
        </div>
      );
    case "filter":
      return (
        <div className="relative">
          <div className="absolute inset-0 bg-orange-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <Filter className={`w-8 h-8 text-orange-600 ${iconClasses}`} />
        </div>
      );
    case "scan":
      return (
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <Scan className={`w-8 h-8 text-cyan-600 ${iconClasses} group-hover:animate-pulse`} />
        </div>
      );
    case "bell":
      return (
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <Bell className={`w-8 h-8 text-yellow-600 ${iconClasses} group-hover:animate-bounce`} />
        </div>
      );
    case "dashboard":
      return (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <LayoutDashboard className={`w-8 h-8 text-slate-700 ${iconClasses} group-hover:animate-pulse`} />
        </div>
      );
    default:
      return null;
  }
};
