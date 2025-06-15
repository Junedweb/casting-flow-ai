
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Phone, User, Clock } from "lucide-react";

interface FormData {
  name: string;
  countryCode: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
}

interface FormFieldsProps {
  formData: FormData;
  onInputChange: (field: string, value: string) => void;
}

const FormFields = ({ formData, onInputChange }: FormFieldsProps) => {
  const countryCodes = [
    { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+61", country: "Australia", flag: "🇦🇺" },
    { code: "+971", country: "UAE", flag: "🇦🇪" },
    { code: "+65", country: "Singapore", flag: "🇸🇬" },
  ];

  return (
    <>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-700 flex items-center">
          <User className="w-4 h-4 mr-2" />
          Full Name *
        </label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => onInputChange("name", e.target.value)}
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
          <Select value={formData.countryCode} onValueChange={(value) => onInputChange("countryCode", value)}>
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
              onInputChange("phone", value);
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
          onChange={(e) => onInputChange("preferredDate", e.target.value)}
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
          onChange={(e) => onInputChange("preferredTime", e.target.value)}
          required
        />
      </div>
    </>
  );
};

export { FormFields };
