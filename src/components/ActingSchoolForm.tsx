
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { trackButtonClick } from "@/utils/buttonTracker";
import MathCaptcha from "./MathCaptcha";
import { ActingSchoolFormFields } from "./acting-schools/ActingSchoolFormFields";
import { useActingSchoolSubmission } from "@/hooks/useActingSchoolSubmission";

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
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaReset, setCaptchaReset] = useState(false);
  const navigate = useNavigate();
  const { submitForm, isLoading } = useActingSchoolSubmission();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackButtonClick("Apply for School Partnership - Form Submit");
    
    await submitForm(formData, isCaptchaValid, resetForm);
  };

  const resetForm = () => {
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
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBackToSchools = () => {
    trackButtonClick("Back to Acting Schools Page");
    navigate("/acting-schools");
  };

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
          <ActingSchoolFormFields 
            formData={formData}
            onInputChange={handleInputChange}
          />

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
