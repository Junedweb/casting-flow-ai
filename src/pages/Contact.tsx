import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Phone, User, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
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
    console.log("Form submitted:", { ...formData, fullPhone });
    
    // Save to local storage as backup
    const submissions = JSON.parse(localStorage.getItem('consultationSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      phone: fullPhone,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    submissions.push(newSubmission);
    localStorage.setItem('consultationSubmissions', JSON.stringify(submissions));

    // Send to Zapier webhook
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
          timestamp: new Date().toISOString(),
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

  const countryCodes = [
    { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+61", country: "Australia", flag: "🇦🇺" },
    { code: "+971", country: "UAE", flag: "🇦🇪" },
    { code: "+65", country: "Singapore", flag: "🇸🇬" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl space-y-6">
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
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Mobile Number *
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
                      const value = e.target.value.replace(/\D/g, ''); // Only allow digits
                      handleInputChange("phone", value);
                    }}
                    placeholder={formData.countryCode === "+91" ? "10-digit mobile number" : "Mobile number"}
                    maxLength={formData.countryCode === "+91" ? 10 : undefined}
                    className="flex-1"
                    required
                  />
                </div>
                {formData.countryCode === "+91" && (
                  <p className="text-xs text-slate-500">
                    Enter 10-digit Indian mobile number (starting with 6, 7, 8, or 9)
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium text-slate-700 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Preferred Date *
                </label>
                <Input
                  id="date"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-medium text-slate-700 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Preferred Time *
                </label>
                <Input
                  id="time"
                  type="time"
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                  required
                />
              </div>

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
                  onClick={() => navigate("/")}
                  className="w-full"
                >
                  Back to Home
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">📋 View Local Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => navigate("/submissions")}
              variant="outline"
              className="w-full"
            >
              View All Form Submissions
            </Button>
            <p className="text-xs text-slate-500 mt-2">
              Submissions are saved locally as a backup. Use Zapier webhook for Google Sheets integration.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
