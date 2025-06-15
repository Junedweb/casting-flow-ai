
import { useState } from "react";
import { trackButtonClick } from "@/utils/buttonTracker";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ComingSoonModal } from "@/components/ComingSoonModal";
import { ActorsHeroSection } from "@/components/actors/ActorsHeroSection";
import { ActorsPainPointsSection } from "@/components/actors/ActorsPainPointsSection";
import { ActorsFeaturesSection } from "@/components/actors/ActorsFeaturesSection";
import { ActorsTestimonialSection } from "@/components/actors/ActorsTestimonialSection";
import { ActorsHowItWorksSection } from "@/components/actors/ActorsHowItWorksSection";
import { ActorsMovementSection } from "@/components/actors/ActorsMovementSection";
import { ActorsTrustSection } from "@/components/actors/ActorsTrustSection";

const Actors = () => {
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  const handleCreateProfileClick = () => {
    trackButtonClick("Create Your JAMZ Profile - ₹500/month");
    setShowComingSoonModal(true);
  };

  const handleWatchStoriesClick = () => {
    trackButtonClick("Watch Actor Success Stories");
    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
  };

  const seoData = {
    title: "JAMZ for Actors | Build Your Profile & Get Discovered",
    description: "Create your actor profile on JAMZ - showcase monologues, get discovered by casting directors, and build your career without agents. ₹500/month subscription.",
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
      
      <ComingSoonModal 
        isOpen={showComingSoonModal}
        onClose={() => setShowComingSoonModal(false)}
        platform="UPI Payment Integration"
      />
    </>
  );
};

export default Actors;
