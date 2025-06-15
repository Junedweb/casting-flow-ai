import { useState } from "react";
import { ImageModal } from "./ImageModal";
import { FeatureCard } from "./FeatureCard";
import { GdprNotice } from "./GdprNotice";

interface Feature {
  icon: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features: Feature[] = [
    {
      icon: "social-campaign",
      title: "All Social Media Campaign for New Talent Search",
      description: "Post talent requirements across all social platforms in a single click. Reach thousands of potential candidates instantly.",
      imageSrc: "/lovable-uploads/0865ae1b-66c6-4a09-9f8c-e247ac327974.png"
    },
    {
      icon: "filter",
      title: "Smart Filters",
      description: "Find talent by age, screen age, city, language, looks, etc.",
      imageSrc: "/lovable-uploads/98d0f9f3-76ae-4244-a498-a348579d591a.png"
    },
    {
      icon: "scan",
      title: "Face-Match AI",
      description: "Find a Shah Rukh or Samantha lookalike in seconds.",
      imageSrc: "/lovable-uploads/ed79ee1d-052a-4ff3-983a-dcfc31607bdf.png"
    },
    {
      icon: "centralized",
      title: "Centralized Inbox",
      description: "Profiles from WhatsApp, Insta, site—synced and organized.",
      imageSrc: "/lovable-uploads/5ce113b3-a5e9-428d-a3e1-fce548cf5988.png"
    },
    {
      icon: "dashboard",
      title: "Dashboard with Project level progress tracking",
      description: "Track project milestones, casting progress, and team collaboration in real-time across multiple productions.",
      imageSrc: "/lovable-uploads/36ede622-7e3c-425b-90f3-caee291b93c5.png"
    },
    {
      icon: "refresh",
      title: "Self-Updating Talent Profiles",
      description: "Actor interest refreshes in real-time. Never chase old data again.",
      imageSrc: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      icon: "users",
      title: "Additional Suggestions of Actors and Actresses",
      description: "Get intelligent suggestions of actors and actresses beyond your own database as per the requirement to match your expectations and close the requirement quickly.",
      imageSrc: "/lovable-uploads/0e61e0b8-24e8-4882-8fee-58facc1e2214.png"
    },
    {
      icon: "users",
      title: "Multi-user Access Control",
      description: "Team-based permissions with role management. Secure access logs and visibility control for casting teams.",
      imageSrc: "/lovable-uploads/0e61e0b8-24e8-4882-8fee-58facc1e2214.png"
    }
  ];

  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Your Complete Casting Solution
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            JAMZ upgrades your entire casting lifecycle—not just a fancy dashboard for one piece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              feature={feature}
              onClick={handleFeatureClick}
            />
          ))}
        </div>

        <GdprNotice />

        {selectedFeature && (
          <ImageModal
            open={isModalOpen}
            onOpenChange={setIsModalOpen}
            title={selectedFeature.title}
            description={selectedFeature.description}
            imageSrc={selectedFeature.imageSrc}
          />
        )}
      </div>
    </section>
  );
};
