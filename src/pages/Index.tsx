
import { memo } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { EnterpriseSection } from "@/components/EnterpriseSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

// Memoized components for better performance
const MemoizedNavigation = memo(Navigation);
const MemoizedHeroSection = memo(HeroSection);
const MemoizedPainPointsSection = memo(PainPointsSection);
const MemoizedFeaturesSection = memo(FeaturesSection);
const MemoizedComparisonTable = memo(ComparisonTable);
const MemoizedEnterpriseSection = memo(EnterpriseSection);
const MemoizedCtaSection = memo(CtaSection);
const MemoizedFooter = memo(Footer);

const Index = () => {
  return (
    <>
      <SEOHead
        title="JAMZ | AI-Powered Casting Platform for India's Entertainment Industry"
        description="Discover and cast verified talent across India with JAMZ. AI-powered face matching, secure GDPR-compliant database, and streamlined casting workflow for directors and talent agencies."
        keywords="casting platform, talent search, actor profiles, casting directors, entertainment industry, AI face matching, India casting, film casting, TV casting, commercial casting"
        canonicalUrl="https://jamz-casting.lovable.app/"
        pageType="website"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative">
        <MemoizedNavigation />
        <MemoizedHeroSection />
        <MemoizedPainPointsSection />
        <MemoizedFeaturesSection />
        <MemoizedComparisonTable />
        <MemoizedEnterpriseSection />
        <MemoizedCtaSection />
        <MemoizedFooter />
      </div>
    </>
  );
};

export default memo(Index);
