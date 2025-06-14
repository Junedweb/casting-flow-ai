
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { EnterpriseSection } from "@/components/EnterpriseSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <ComparisonTable />
      <EnterpriseSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
