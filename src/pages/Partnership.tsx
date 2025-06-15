
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Zap, Users, TrendingUp, Clock, Target, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";

const Partnership = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Technology Partnership Program
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Scale your casting business with our proven technology. We reduce your operational time by 60%+ while you focus on taking more projects and growing revenue.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => navigate("/contact")}
          >
            Apply for Partnership <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Partnership Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <feature.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <CardTitle className="text-slate-900 text-xl">
                    {feature.title}
                  </CardTitle>
                  <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {feature.highlight}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center text-lg">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership Deal */}
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
            </CardContent>
          </Card>

          {/* Legal Clause */}
          <Card className="bg-slate-100 border-slate-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                Partnership Terms
              </h3>
              <div className="text-slate-700 space-y-4">
                <p className="text-lg leading-relaxed">
                  Our Technology Partnership Program offers the framework outlined above as a starting point for collaboration. The specific terms, conditions, revenue sharing arrangements, service level agreements, and implementation details will be finalized through mutual agreement between JAMZ and the partner organization.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>All partnership agreements are subject to mutual consent and customization based on the specific needs, scale, and requirements of both parties.</strong> We believe in creating partnerships that work for everyone involved.
                </p>
                <p className="text-base text-slate-600 italic">
                  * Limited partnership slots available. Exclusively for India's major casting agencies and directors.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Start Partnership Discussion
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnership;
