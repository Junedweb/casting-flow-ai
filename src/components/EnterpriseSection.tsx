
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
      description: "Stop hunting through WhatsApp screenshots. Find any face in 10 seconds.",
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
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Partnership That Actually Makes Sense
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            You master casting. We handle the tech chaos. Together we double your project capacity while cutting your stress in half.
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

        <Card className="bg-gradient-to-r from-orange-500 to-red-600 border-none mb-8">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              The Deal That Works
            </h3>
            <div className="text-white/95 text-lg space-y-4 mb-8">
              <p className="font-semibold">
                🚀 <strong>You Get:</strong> 3 hours daily back + Zero tech headaches + More projects
              </p>
              <p className="font-semibold">
                💰 <strong>We Get:</strong> 30% of the extra revenue you earn from saved time
              </p>
              <p className="text-white/90">
                Take on 50% more projects with the time you save. We both win when you win.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Let's Kill Your Tech Problems
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-slate-300 text-lg">
            <strong>Only 12 partnership slots left.</strong> For casting directors already drowning in Excel sheets and WhatsApp chaos.
          </p>
        </div>
      </div>
    </section>
  );
};
