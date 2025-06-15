
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { trackFormSubmission, trackEvent } from "@/utils/analytics";
import { validateIndianMobile, validateEmail, validateRequiredFields } from "@/utils/actingSchoolValidation";

interface FormData {
  schoolName: string;
  principalName: string;
  email: string;
  countryCode: string;
  phone: string;
  city: string;
  state: string;
  studentCount: string;
  establishedYear: string;
  affiliations: string;
}

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/23376283/uy7xs18/";

export const useActingSchoolSubmission = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const submitForm = async (formData: FormData, isCaptchaValid: boolean, resetForm: () => void) => {
    console.log("Form submission started");
    console.log("Form data:", formData);
    console.log("Captcha valid:", isCaptchaValid);
    
    // Validation checks
    if (!validateRequiredFields(formData)) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }
    
    if (!isCaptchaValid) {
      toast({
        title: "Captcha Required",
        description: "Please solve the math problem to verify you're human.",
        variant: "destructive",
      });
      return;
    }
    
    if (!validateEmail(formData.email)) {
      trackFormSubmission("Acting School Partnership Form", false);
      trackEvent('form_validation_error', 'Form', 'Invalid email address');
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.countryCode === "+91" && !validateIndianMobile(formData.phone)) {
      trackFormSubmission("Acting School Partnership Form", false);
      trackEvent('form_validation_error', 'Form', 'Invalid Indian mobile number');
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
    console.log("Acting School form submitted:", { ...formData, fullPhone });
    
    // Save to local storage as backup
    const submissions = JSON.parse(localStorage.getItem('actingSchoolSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      phone: fullPhone,
      timestamp: submissionTimestamp,
      id: Date.now()
    };
    submissions.push(newSubmission);
    localStorage.setItem('actingSchoolSubmissions', JSON.stringify(submissions));

    // Send to Zapier webhook
    try {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          schoolName: formData.schoolName,
          principalName: formData.principalName,
          email: formData.email,
          phone: fullPhone,
          city: formData.city,
          state: formData.state,
          studentCount: formData.studentCount,
          establishedYear: formData.establishedYear,
          affiliations: formData.affiliations,
          timestamp: submissionTimestamp,
          source: "JAMZ Acting School Partnership Form",
          formType: "acting_school_partnership"
        }),
      });
      
      console.log("Form submitted successfully");
      trackFormSubmission("Acting School Partnership Form", true);
      trackEvent('generate_lead', 'Form', 'Acting School Partnership');
      
      toast({
        title: "🎉 Partnership Application Received!",
        description: "Thank you for your interest in JAMZ School Partnership. We'll contact you within 24 hours to discuss the next steps.",
        className: "w-full max-w-md mx-auto text-center [&>div]:text-center [&>div]:font-bold [&>div]:text-lg [&>div+div]:font-semibold"
      });
      
      resetForm();
      
    } catch (error) {
      console.error("Zapier webhook error:", error);
      trackFormSubmission("Acting School Partnership Form", true);
      trackEvent('generate_lead', 'Form', 'Acting School Partnership');
      
      toast({
        title: "🎉 Partnership Application Received!",
        description: "Thank you for your interest in JAMZ School Partnership. We'll contact you within 24 hours.",
        className: "w-full max-w-md mx-auto text-center [&>div]:text-center [&>div]:font-bold [&>div]:text-lg [&>div+div]:font-semibold"
      });
      
      resetForm();
    }

    setIsLoading(false);
  };

  return { submitForm, isLoading };
};
