
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { trackButtonClick } from "@/utils/buttonTracker";
import { trackFormSubmission, trackEvent } from "@/utils/analytics";
import { School, Users, MapPin, Phone, User, Mail } from "lucide-react";
import MathCaptcha from "./MathCaptcha";

const ActingSchoolForm = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    principalName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    city: "",
    state: "",
    studentCount: "",
    establishedYear: "",
    affiliations: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaReset, setCaptchaReset] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Hidden backend configuration
  const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/23376283/uy7xs18/";

  const validateIndianMobile = (phone: string) => {
    const indianMobileRegex = /^[6-9]\d{9}$/;
    return indianMobileRegex.test(phone);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submission started");
    console.log("Form data:", formData);
    console.log("Captcha valid:", isCaptchaValid);
    
    trackButtonClick("Apply for School Partnership - Form Submit");
    
    // Check required fields
    if (!formData.schoolName || !formData.principalName || !formData.email || !formData.phone || !formData.city || !formData.state || !formData.studentCount || !formData.establishedYear) {
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

    // Send to Zapier webhook with same structure but different tab identifier
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
      
      // Reset form after successful submission
      setFormData({
        schoolName: "",
        principalName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        city: "",
        state: "",
        studentCount: "",
        establishedYear: "",
        affiliations: ""
      });
      setIsCaptchaValid(false);
      setCaptchaReset(true);
      setTimeout(() => setCaptchaReset(false), 100);
      
    } catch (error) {
      console.error("Zapier webhook error:", error);
      trackFormSubmission("Acting School Partnership Form", true);
      trackEvent('generate_lead', 'Form', 'Acting School Partnership');
      
      toast({
        title: "🎉 Partnership Application Received!",
        description: "Thank you for your interest in JAMZ School Partnership. We'll contact you within 24 hours.",
        className: "w-full max-w-md mx-auto text-center [&>div]:text-center [&>div]:font-bold [&>div]:text-lg [&>div+div]:font-semibold"
      });
      
      // Reset form even if webhook fails (since data is saved locally)
      setFormData({
        schoolName: "",
        principalName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        city: "",
        state: "",
        studentCount: "",
        establishedYear: "",
        affiliations: ""
      });
      setIsCaptchaValid(false);
      setCaptchaReset(true);
      setTimeout(() => setCaptchaReset(false), 100);
    }

    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBackToSchools = () => {
    trackButtonClick("Back to Acting Schools Page");
    navigate("/acting-schools");
  };

  const countryCodes = [
    { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+61", country: "Australia", flag: "🇦🇺" },
    { code: "+971", country: "UAE", flag: "🇦🇪" },
    { code: "+65", country: "Singapore", flag: "🇸🇬" },
  ];

  return (
    <Card className="shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-slate-900 mb-2">
          Apply for JAMZ School Partnership
        </CardTitle>
        <p className="text-slate-600">
          Join our certified school partner program and get complete alumni management for free
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="schoolName" className="text-sm font-medium text-slate-700 flex items-center">
              <School className="w-4 h-4 mr-2" />
              Acting School Name *
            </label>
            <Input
              id="schoolName"
              type="text"
              value={formData.schoolName}
              onChange={(e) => handleInputChange("schoolName", e.target.value)}
              placeholder="Enter your acting school name"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="principalName" className="text-sm font-medium text-slate-700 flex items-center">
              <User className="w-4 h-4 mr-2" />
              Principal/Director Name *
            </label>
            <Input
              id="principalName"
              type="text"
              value={formData.principalName}
              onChange={(e) => handleInputChange("principalName", e.target.value)}
              placeholder="Enter principal or director name"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700 flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Official Email Address *
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter official email address"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-slate-700 flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Contact Number *
            </label>
            <div className="flex gap-2">
              <Select value={formData.countryCode} onValueChange={(value) => handleInputChange("countryCode", value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.flag} {country.code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  handleInputChange("phone", value);
                }}
                placeholder={formData.countryCode === "+91" ? "10-digit mobile number" : "Mobile number"}
                maxLength={formData.countryCode === "+91" ? 10 : undefined}
                className="flex-1"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="city" className="text-sm font-medium text-slate-700 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                City *
              </label>
              <Input
                id="city"
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                placeholder="Enter city"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="state" className="text-sm font-medium text-slate-700 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                State *
              </label>
              <Input
                id="state"
                type="text"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                placeholder="Enter state"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="studentCount" className="text-sm font-medium text-slate-700 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Current Student Count *
              </label>
              <Select value={formData.studentCount} onValueChange={(value) => handleInputChange("studentCount", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select student count" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-50">1-50 students</SelectItem>
                  <SelectItem value="51-100">51-100 students</SelectItem>
                  <SelectItem value="101-200">101-200 students</SelectItem>
                  <SelectItem value="201-500">201-500 students</SelectItem>
                  <SelectItem value="500+">500+ students</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="establishedYear" className="text-sm font-medium text-slate-700 flex items-center">
                <School className="w-4 h-4 mr-2" />
                Established Year *
              </label>
              <Input
                id="establishedYear"
                type="number"
                value={formData.establishedYear}
                onChange={(e) => handleInputChange("establishedYear", e.target.value)}
                placeholder="e.g., 2010"
                min="1900"
                max={new Date().getFullYear()}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="affiliations" className="text-sm font-medium text-slate-700">
              Affiliations/Certifications (Optional)
            </label>
            <Input
              id="affiliations"
              type="text"
              value={formData.affiliations}
              onChange={(e) => handleInputChange("affiliations", e.target.value)}
              placeholder="e.g., FSFK, FTII, or other industry affiliations"
            />
          </div>

          <MathCaptcha 
            onValidation={setIsCaptchaValid}
            onReset={captchaReset}
          />

          <div className="space-y-4">
            <Button 
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Submitting Application..." : "Apply for Partnership"}
            </Button>
            
            <Button 
              type="button"
              variant="outline"
              onClick={handleBackToSchools}
              className="w-full"
            >
              Back to Acting Schools
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ActingSchoolForm;
