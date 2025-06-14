
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, User, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDate: "",
    preferredTime: ""
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md shadow-xl">
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
                Full Name
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
                Phone Number
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
                Preferred Date
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
                Preferred Time
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
              >
                Book Consultation
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
    </div>
  );
};

export default Contact;
