
import ActingSchoolForm from "@/components/ActingSchoolForm";
import { SEOHead } from "@/components/SEOHead";

const ActingSchoolPartnership = () => {
  const seoData = {
    title: "Apply for JAMZ School Partnership | Free Alumni Management System",
    description: "Apply to become a JAMZ certified acting school partner. Get free alumni management, student portfolios, and waived registration fees worth ₹500/month.",
    keywords: "acting school partnership, alumni management, student portfolios, acting school certification, JAMZ partnership",
    canonicalUrl: "https://jamz-casting.lovable.app/acting-school-partnership"
  };

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          <ActingSchoolForm />
        </div>
      </div>
    </>
  );
};

export default ActingSchoolPartnership;
