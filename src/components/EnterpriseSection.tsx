
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Zap, Users, TrendingUp, Clock, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const EnterpriseSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Clock,
      title: "3 Hours Back Daily",
      description: "Stop hunting through screenshots. Find any face in 10 seconds.",
      highlight: "Time = Money"
    },
    {
      icon: Crown,
      title: "Your Brand, Our Brain",
      description: "Complete white-label solution. Your clients never know we exist.",
      highlight: "Invisible Partner"
    },
    {
      icon: Target,
      title: "₹0 Upfront Cost",
      description: "Zero investment. Zero monthly fees. Zero risk.",
      highlight: "Pure Profit"
    },
    {
      icon: TrendingUp,
      title: "We Grow When You Grow",
      description: "30% of extra revenue you make from saved time. Fair deal.",
      highlight: "Win-Win Reality"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Partnership That Actually Makes Sense
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            You master casting. We handle tech chaos. Together we double your project capacity.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <feature.icon className="w-10 h-10 text-orange-400 mx-auto mb-2" />
                <CardTitle className="text-white text-base">
                  {feature.title}
                </CardTitle>
                <div className="inline-block bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {feature.highlight}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-300 text-center text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-orange-500 to-red-600 border-none mb-6">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              The Deal That Works
            </h3>
            <div className="text-white/95 text-sm space-y-3 mb-6">
              <p className="font-semibold">
                🚀 <strong>You Get:</strong> 3 hours daily back + Zero tech headaches + More projects
              </p>
              <p className="font-semibold">
                💰 <strong>We Get:</strong> 30% of the extra revenue you earn from saved time
              </p>
              <p className="text-white/90 text-xs">
                Take on 50% more projects with saved time. We both win.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-slate-100 px-6 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              onClick={() => navigate("/contact")}
            >
              Kill Your Tech Problems
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-slate-300 text-sm">
            <strong>Only 12 partnership slots left.</strong> For casting directors drowning in Excel chaos.
          </p>
        </div>
      </div>
    </section>
  );
};
