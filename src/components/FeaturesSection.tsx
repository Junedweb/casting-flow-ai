
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  RefreshCw, 
  Upload, 
  Users, 
  Filter, 
  Scan, 
  Bell,
  IndianRupee,
  Shield,
  AlertTriangle,
  MessageCircle,
  Globe,
  Instagram
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: "centralized",
      title: "Centralized Inbox",
      description: "Profiles from WhatsApp, Insta, site—synced and organized."
    },
    {
      icon: "refresh",
      title: "Self-Updating Talent Profiles",
      description: "Actor interest refreshes in real-time. Never chase old data again."
    },
    {
      icon: "upload",
      title: "Upload Old Data",
      description: "JAMZ imports and auto-organizes your existing database."
    },
    {
      icon: "users",
      title: "Multi-user Logins",
      description: "Casting team gets separate access. With encryption and role-based safety."
    },
    {
      icon: "filter",
      title: "Smart Filters",
      description: "Find talent by age, screen age, city, language, looks, etc."
    },
    {
      icon: "scan",
      title: "Face-Match AI",
      description: "Find a Shah Rukh or Samantha lookalike in seconds."
    },
    {
      icon: "bell",
      title: "Talent Interest Tracker",
      description: "Actors update availability directly. You save 100s of back-and-forth calls."
    }
  ];

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
      case "upload":
        return (
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <Upload className={`w-8 h-8 text-green-600 ${iconClasses} group-hover:-translate-y-1`} />
          </div>
        );
      case "users":
        return (
          <div className="relative">
            <div className="absolute inset-0 bg-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <Users className={`w-8 h-8 text-purple-600 ${iconClasses}`} />
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
            <Card key={index} className="group h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white border-0 shadow-lg">
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
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white mb-16 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
              <IndianRupee className="w-8 h-8 mr-3 relative z-10" />
            </div>
            <h3 className="text-2xl font-bold">Cost Positioning</h3>
          </div>
          <p className="text-center text-lg">
            Your average assistant costs ₹20K/month. JAMZ is your virtual assistant, analyst, and database—all in one.
          </p>
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
      </div>
    </section>
  );
};
