
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We leverage cutting-edge AI to revolutionize the casting industry"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building bridges between talent and opportunities across India"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering world-class technology solutions for casting professionals"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by our love for entertainment and technology"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About JAMZ
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empowering the future of casting with AI and smart technology, connecting talent with opportunities across India's entertainment industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-lg leading-relaxed">
                To revolutionize the casting industry by providing AI-powered solutions that reduce operational time by 60%+ while helping casting directors and agencies scale their business efficiently.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-lg leading-relaxed">
                To become India's leading technology partner for casting agencies, creating a seamless ecosystem where talent meets opportunity through smart automation and AI.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <value.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">Why Choose JAMZ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-xl font-semibold mb-2">60% Faster Operations</h4>
                <p>Proven reduction in casting turnaround time</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Zero Upfront Cost</h4>
                <p>Partnership model with revenue sharing</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Complete Branding</h4>
                <p>Co-branded apps preserving your identity</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
