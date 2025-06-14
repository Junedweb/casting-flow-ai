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
  Globe
} from "lucide-react";
import { Instagram } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: () => (
        <div className="flex items-center justify-center space-x-2">
          <MessageCircle className="w-6 h-6 text-green-500" />
          <Instagram className="w-6 h-6 text-pink-500" />
          <Globe className="w-6 h-6 text-blue-500" />
        </div>
      ),
      title: "Centralized Inbox",
      description: "Profiles from WhatsApp, Insta, site—synced and organized."
    },
    {
      icon: RefreshCw,
      title: "Self-Updating Talent Profiles",
      description: "Actor interest refreshes in real-time. Never chase old data again."
    },
    {
      icon: Upload,
      title: "Upload Old Data",
      description: "JAMZ imports and auto-organizes your existing database."
    },
    {
      icon: Users,
      title: "Multi-user Logins",
      description: "Casting team gets separate access. With encryption and role-based safety."
    },
    {
      icon: Filter,
      title: "Smart Filters",
      description: "Find talent by age, screen age, city, language, looks, etc."
    },
    {
      icon: Scan,
      title: "Face-Match AI",
      description: "Find a Shah Rukh or Samantha lookalike in seconds."
    },
    {
      icon: Bell,
      title: "Talent Interest Tracker",
      description: "Actors update availability directly. You save 100s of back-and-forth calls."
    }
  ];

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
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                {typeof feature.icon === 'function' ? (
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon />
                  </div>
                ) : (
                  <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                )}
                <CardTitle className="text-xl font-bold text-slate-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white mb-16">
          <div className="flex items-center justify-center mb-4">
            <IndianRupee className="w-8 h-8 mr-3" />
            <h3 className="text-2xl font-bold">Cost Positioning</h3>
          </div>
          <p className="text-center text-lg">
            Your average assistant costs ₹20K/month. JAMZ is your virtual assistant, analyst, and database—all in one.
          </p>
        </div>

        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-8">
            <div className="flex items-start">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  NOTICE: GDPR ACT ENFORCEMENT FROM MARCH 15, 2025
                </h3>
                <p className="text-red-700 text-lg mb-4">
                  PII data safety is very critical post GDPR act implementation. Penalty starts from ₹5 Cr, 
                  can go up to hundreds. Traditional methods lack data encryption—JAMZ solves this.
                </p>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-green-600 mr-3" />
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
