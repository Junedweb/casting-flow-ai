
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, User, Clock, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    zapierWebhook: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log("Form submitted:", formData);
    
    // Save to local storage as backup
    const submissions = JSON.parse(localStorage.getItem('consultationSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    submissions.push(newSubmission);
    localStorage.setItem('consultationSubmissions', JSON.stringify(submissions));

    // Send to Zapier webhook if provided
    if (formData.zapierWebhook) {
      try {
        await fetch(formData.zapierWebhook, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            preferredDate: formData.preferredDate,
            preferredTime: formData.preferredTime,
            timestamp: new Date().toISOString(),
            source: "JAMZ Consultation Form"
          }),
        });
        
        toast({
          title: "Success!",
          description: "Your consultation request has been sent to Google Sheets via Zapier.",
        });
      } catch (error) {
        console.error("Zapier webhook error:", error);
        toast({
          title: "Webhook Sent",
          description: "Your request was sent to Zapier. Please check your Zap history to confirm it was received.",
        });
      }
    } else {
      toast({
        title: "Form Submitted!",
        description: "Your consultation request has been saved locally. Add a Zapier webhook to save to Google Sheets.",
      });
    }

    setIsLoading(false);
    // Reset form
    setFormData({
      name: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      zapierWebhook: formData.zapierWebhook // Keep webhook URL
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
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

              <div className="space-y-2">
                <label htmlFor="webhook" className="text-sm font-medium text-slate-700 flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Zapier Webhook URL (Optional)
                </label>
                <Textarea
                  id="webhook"
                  value={formData.zapierWebhook}
                  onChange={(e) => handleInputChange("zapierWebhook", e.target.value)}
                  placeholder="Paste your Zapier webhook URL here to save submissions to Google Sheets"
                  className="min-h-[60px]"
                />
                <p className="text-xs text-slate-500">
                  Create a Zap with "Webhooks by Zapier" trigger and "Google Sheets" action to automatically save form submissions.
                </p>
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
