
import { useNavigate } from "react-router-dom";
import { trackButtonClick } from "@/utils/buttonTracker";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActorsHeroSection } from "@/components/actors/ActorsHeroSection";
import { ActorsPainPointsSection } from "@/components/actors/ActorsPainPointsSection";
import { ActorsFeaturesSection } from "@/components/actors/ActorsFeaturesSection";
import { ActorsTestimonialSection } from "@/components/actors/ActorsTestimonialSection";
import { ActorsHowItWorksSection } from "@/components/actors/ActorsHowItWorksSection";
import { ActorsMovementSection } from "@/components/actors/ActorsMovementSection";
import { ActorsTrustSection } from "@/components/actors/ActorsTrustSection";

const Actors = () => {
  const navigate = useNavigate();

  const handleCreateProfileClick = () => {
    trackButtonClick("Create Your Free JAMZ Profile");
    navigate("/contact");
  };

  const handleWatchStoriesClick = () => {
    trackButtonClick("Watch Actor Success Stories");
    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
  };

  const seoData = {
    title: "JAMZ for Actors | Build Your Profile & Get Discovered",
    description: "Create your actor profile on JAMZ - showcase monologues, get discovered by casting directors, and build your career without agents. Free for actors.",
    keywords: "actor profile, casting calls, monologue showcase, actor portfolio, casting directors, auditions, actor career",
    canonicalUrl: "https://jamz-casting.lovable.app/actors"
  };

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
        <Navigation />
        <ActorsHeroSection 
          onCreateProfileClick={handleCreateProfileClick}
          onWatchStoriesClick={handleWatchStoriesClick}
        />
        <ActorsPainPointsSection />
        <ActorsFeaturesSection />
        <ActorsTestimonialSection />
        <ActorsHowItWorksSection onCreateProfileClick={handleCreateProfileClick} />
        <ActorsMovementSection onJoinClick={handleCreateProfileClick} />
        <ActorsTrustSection />
        <Footer />
      </div>
    </>
  );
};

export default Actors;
