
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageModal } from "./ImageModal";
import { 
  RefreshCw, 
  Users, 
  Filter, 
  Scan, 
  Bell,
  Shield,
  AlertTriangle,
  MessageCircle,
  Globe,
  Instagram,
  Lock,
  User,
  Check,
  LayoutDashboard,
  Share2
} from "lucide-react";

export const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: "social-campaign",
      title: "All Social Media Campaign for New Talent Search",
      description: "Post talent requirements across all social platforms in a single click. Reach thousands of potential candidates instantly.",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      icon: "filter",
      title: "Smart Filters",
      description: "Find talent by age, screen age, city, language, looks, etc.",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      icon: "scan",
      title: "Face-Match AI",
      description: "Find a Shah Rukh or Samantha lookalike in seconds.",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      icon: "centralized",
      title: "Centralized Inbox",
      description: "Profiles from WhatsApp, Insta, site—synced and organized.",
      imageSrc: "/lovable-uploads/5ce113b3-a5e9-428d-a3e1-fce548cf5988.png"
    },
    {
      icon: "bell",
      title: "Talent Interest Tracker",
      description: "Actors update availability directly. You save 100s of back-and-forth calls.",
      imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      icon: "refresh",
      title: "Self-Updating Talent Profiles",
      description: "Actor interest refreshes in real-time. Never chase old data again.",
      imageSrc: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      icon: "dashboard",
      title: "Team and Project Dashboard Visibility",
      description: "Real-time project tracking with completion status, timelines, and team collaboration. Monitor multiple productions simultaneously.",
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      icon: "users",
      title: "Multi-user Access Control",
      description: "Team-based permissions with role management. Secure access logs and visibility control for casting teams.",
      imageSrc: "/lovable-uploads/0e61e0b8-24e8-4882-8fee-58facc1e2214.png"
    }
  ];

  const handleFeatureClick = (feature: any) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const renderIcon = (iconType: string) => {
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

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Your Complete Casting Solution
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            JAMZ upgrades your entire casting lifecycle—not just a fancy dashboard for one piece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white border-0 shadow-lg cursor-pointer"
              onClick={() => handleFeatureClick(feature)}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-slate-100 group-hover:to-slate-200 transition-all duration-300">
                  {renderIcon(feature.icon)}
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center group-hover:text-slate-700 transition-colors duration-300">{feature.description}</p>
                <p className="text-xs text-slate-400 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view details
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-red-50 border-red-200 hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-8">
            <div className="flex items-start">
              <div className="relative mr-4 mt-1 flex-shrink-0">
                <div className="absolute inset-0 bg-red-200 rounded-full opacity-30 animate-pulse"></div>
                <AlertTriangle className="w-8 h-8 text-red-600 relative z-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  NOTICE: GDPR ACT ENFORCEMENT FROM MARCH 15, 2025
                </h3>
                <p className="text-red-700 text-lg mb-4">
                  PII data safety is very critical post GDPR act implementation. Penalty starts from ₹5 Cr, 
                  can go up to hundreds. Traditional methods lack data encryption—JAMZ solves this.
                </p>
                <div className="flex items-center">
                  <div className="relative mr-3">
                    <div className="absolute inset-0 bg-green-200 rounded-full opacity-30"></div>
                    <Shield className="w-6 h-6 text-green-600 relative z-10" />
                  </div>
                  <p className="text-slate-700 font-semibold">
                    JAMZ is GDPR-compliant with end-to-end encryption and secure user permissions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {selectedFeature && (
          <ImageModal
            open={isModalOpen}
            onOpenChange={setIsModalOpen}
            title={selectedFeature.title}
            description={selectedFeature.description}
            imageSrc={selectedFeature.imageSrc}
          />
        )}
      </div>
    </section>
  );
};
