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
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      icon: "filter",
      title: "Smart Filters",
      description: "Find talent by age, screen age, city, language, looks, etc.",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      icon: "scan",
      title: "Face-Match AI",
      description: "Find a Shah Rukh or Samantha lookalike in seconds.",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
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
      imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      icon: "refresh",
      title: "Self-Updating Talent Profiles",
      description: "Actor interest refreshes in real-time. Never chase old data again.",
      imageSrc: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      icon: "dashboard",
      title: "Team and Project Dashboard Visibility",
      description: "Real-time project tracking with completion status, timelines, and team collaboration. Monitor multiple productions simultaneously.",
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
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
