
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Zap, Users, TrendingUp, Clock, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const EnterpriseSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Clock,
      title: "60% Faster Casting",
      description: "Cut casting turnaround time (TAT) by over 60% with AI-powered workflows",
      highlight: "Proven Results"
    },
    {
      icon: Crown,
      title: "Co-branded App",
      description: "Complete branding control - your studio identity preserved",
      highlight: "Your Brand"
    },
    {
      icon: Target,
      title: "Zero Technology Cost",
      description: "No upfront fees, no monthly charges for partnership tier",
      highlight: "Cost-Free Tech"
    },
    {
      icon: TrendingUp,
      title: "30% Revenue Share",
      description: "We earn only when you grow - 30% of incremental casting revenue",
      highlight: "Win-Win Model"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Partnership Program
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Scale your casting business with our proven technology. We reduce your operational time by 60%+ while you focus on taking more projects and growing revenue.
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
              The Partnership Deal
            </h3>
            <div className="text-white/95 text-lg space-y-4 mb-8">
              <p className="font-semibold">
                🚀 <strong>You Get:</strong> 60%+ faster casting operations + Zero technology costs
              </p>
              <p className="font-semibold">
                💰 <strong>You Give:</strong> 30% share of incremental business revenue (quarterly basis)
              </p>
              <p className="text-white/90">
                Take on more casting projects with saved time. We grow together as your technology partner.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Become a Technology Partner
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-slate-300 text-lg">
            <strong>Limited partnership slots available.</strong> Exclusively for India's major casting agencies and directors already scaling with JAMZ technology.
          </p>
        </div>
      </div>
    </section>
  );
};
