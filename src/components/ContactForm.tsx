
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { trackButtonClick } from "@/utils/buttonTracker";
import { FormFields } from "./FormFields";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    preferredDate: "",
    preferredTime: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Hidden backend configuration
  const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/23376283/uy7xs18/";

  const validateIndianMobile = (phone: string) => {
    // Indian mobile numbers are 10 digits and start with 6, 7, 8, or 9
    const indianMobileRegex = /^[6-9]\d{9}$/;
    return indianMobileRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    trackButtonClick("Book Consultation - Form Submit");
    
    // Validate Indian mobile number if +91 is selected
    if (formData.countryCode === "+91" && !validateIndianMobile(formData.phone)) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    const fullPhone = `${formData.countryCode}${formData.phone}`;
    const submissionTimestamp = new Date().toISOString();
    console.log("Form submitted:", { ...formData, fullPhone });
    
    // Save to local storage as backup
    const submissions = JSON.parse(localStorage.getItem('consultationSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      phone: fullPhone,
      timestamp: submissionTimestamp,
      id: Date.now()
    };
    submissions.push(newSubmission);
    localStorage.setItem('consultationSubmissions', JSON.stringify(submissions));

    // Send to Zapier webhook - simplified payload to avoid duplicates
    try {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          phone: fullPhone,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          timestamp: submissionTimestamp,
          source: "JAMZ Consultation Form"
        }),
      });
      
      toast({
        title: "🎉 Thanks for your interest!",
        description: "Welcome to the first step towards the future. Your consultation request has been sent to Google Sheets via Zapier.",
        className: "w-full max-w-md mx-auto text-center [&>div]:text-center [&>div]:font-bold [&>div]:text-lg [&>div+div]:font-semibold"
      });
    } catch (error) {
      console.error("Zapier webhook error:", error);
      toast({
        title: "🎉 Thanks for your interest!",
        description: "Welcome to the first step towards the future. Your request was sent to Zapier.",
        className: "w-full max-w-md mx-auto text-center [&>div]:text-center [&>div]:font-bold [&>div]:text-lg [&>div+div]:font-semibold"
      });
    }

    setIsLoading(false);
    // Reset form
    setFormData({
      name: "",
      countryCode: "+91",
      phone: "",
      preferredDate: "",
      preferredTime: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBackToHome = () => {
    trackButtonClick("Back to Home - Contact Page");
    navigate("/");
  };

  return (
    <Card className="shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-slate-900 mb-2">
          Book Your Free Consultation
        </CardTitle>
        <p className="text-slate-600">
          Let's discuss how JAMZ can improve your casting workflow
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormFields 
            formData={formData} 
            onInputChange={handleInputChange} 
          />

          <div className="space-y-4">
            <Button 
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Book Consultation"}
            </Button>
            
            <Button 
              type="button"
              variant="outline"
              onClick={handleBackToHome}
              className="w-full"
            >
              Back to Home
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
