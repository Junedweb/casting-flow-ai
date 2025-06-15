
import { useNavigate } from "react-router-dom";
import { trackButtonClick } from "@/utils/buttonTracker";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/acting-schools/HeroSection";
import { ProblemSolutionSection } from "@/components/acting-schools/ProblemSolutionSection";
import { ValuePropositionSection } from "@/components/acting-schools/ValuePropositionSection";
import { TestimonialSection } from "@/components/acting-schools/TestimonialSection";
import { HowItWorksSection } from "@/components/acting-schools/HowItWorksSection";
import { WhyFreeSection } from "@/components/acting-schools/WhyFreeSection";
import { CertificationBanner } from "@/components/acting-schools/CertificationBanner";
import { JoinMovementSection } from "@/components/acting-schools/JoinMovementSection";

const ActingSchools = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    trackButtonClick("Apply for JAMZ School Partner Program");
    navigate("/acting-school-partnership");
  };

  const handleHowItWorksClick = () => {
    trackButtonClick("See How It Works - Acting Schools");
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  const seoData = {
    title: "JAMZ for Acting Schools | Student Portfolio Platform & Revenue Sharing",
    description: "Professional platform for acting schools to manage student portfolios, showcase performances, and connect with casting directors. Join our certified school partner program with revenue sharing.",
    keywords: "acting schools, student portfolios, performance platform, casting directors, acting school certification, revenue sharing, talent showcase",
    canonicalUrl: "https://jamz-casting.lovable.app/acting-schools"
  };

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <Navigation />
        <HeroSection 
          onApplyClick={handleApplyClick}
          onHowItWorksClick={handleHowItWorksClick}
        />
        <ProblemSolutionSection />
        <ValuePropositionSection />
        <TestimonialSection />
        <HowItWorksSection />
        <WhyFreeSection />
        <CertificationBanner onApplyClick={handleApplyClick} />
        <JoinMovementSection onApplyClick={handleApplyClick} />
        <Footer />
      </div>
    </>
  );
};

export default ActingSchools;
