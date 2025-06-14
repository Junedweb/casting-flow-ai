
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Zap, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const EnterpriseSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Crown,
      title: "White-label",
      description: "Brand-first studios preserve legacy",
      highlight: "Your Brand"
    },
    {
      icon: Zap,
      title: "Premium Access",
      description: "Always a step ahead in features",
      highlight: "Early Access"
    },
    {
      icon: Users,
      title: "Feature-Shaping",
      description: "You shape the tool, not the other way around",
      highlight: "Your Voice"
    },
    {
      icon: TrendingUp,
      title: "Revenue-Sharing",
      description: "Shared upside = long-term partnership",
      highlight: "Mutual Growth"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise Partner Benefits
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Switch mindset from "vendor" to "co-pilot". Get emotional + strategic buy-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader className="text-center">
                <feature.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <CardTitle className="text-white text-xl">
                  {feature.title}
                </CardTitle>
                <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {feature.highlight}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center text-lg">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-orange-500 to-red-600 border-none">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Join JAMZ Founding Circle
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Shape the future of casting tech. Exclusive access, premium features, and revenue sharing opportunities.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Join Founding Circle
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
