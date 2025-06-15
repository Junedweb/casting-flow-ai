
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Zap, Users, TrendingUp, Clock, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const EnterpriseSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Clock,
      title: "3 Hours Saved Daily",
      description: "Organize actor searches efficiently. Find profiles in seconds instead of hours.",
      highlight: "Time Efficiency"
    },
    {
      icon: Crown,
      title: "White-Label Solution",
      description: "Complete branded solution for your business. We work behind the scenes.",
      highlight: "Your Brand"
    },
    {
      icon: Target,
      title: "No Upfront Investment",
      description: "Zero initial costs. No monthly fees. No financial risk.",
      highlight: "Risk-Free Start"
    },
    {
      icon: TrendingUp,
      title: "Revenue Sharing Model",
      description: "We earn 30% of the additional revenue you generate from time savings.",
      highlight: "Mutual Success"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Partnership That Works for Both Sides
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            You focus on casting excellence. We handle the technology. Together we increase your project capacity.
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
              Partnership Structure
            </h3>
            <div className="text-white/95 text-sm space-y-3 mb-6">
              <p className="font-semibold">
                📈 <strong>You Get:</strong> 3 hours daily back + Organized workflow + More project capacity
              </p>
              <p className="font-semibold">
                💰 <strong>We Get:</strong> 30% of additional revenue from your improved efficiency
              </p>
              <p className="text-white/90 text-xs">
                Handle 50% more projects with organized workflows. Mutual growth.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-slate-100 px-6 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              onClick={() => navigate("/contact")}
            >
              Explore Partnership
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-slate-300 text-sm">
            <strong>Limited partnership slots available.</strong> For casting directors seeking workflow improvements.
          </p>
        </div>
      </div>
    </section>
  );
};
