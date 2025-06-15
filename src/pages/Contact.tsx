
import ContactForm from "@/components/ContactForm";
import SubmissionsCard from "@/components/SubmissionsCard";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl space-y-6">
        <ContactForm />
        <SubmissionsCard />
      </div>
    </div>
  );
};

export default Contact;
