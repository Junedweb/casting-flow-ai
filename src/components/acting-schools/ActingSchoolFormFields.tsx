
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { School, Users, MapPin, Phone, User, Mail } from "lucide-react";

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

interface ActingSchoolFormFieldsProps {
  formData: FormData;
  onInputChange: (field: string, value: string) => void;
}

const countryCodes = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
];

export const ActingSchoolFormFields = ({ formData, onInputChange }: ActingSchoolFormFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <label htmlFor="schoolName" className="text-sm font-medium text-slate-700 flex items-center">
          <School className="w-4 h-4 mr-2" />
          Acting School Name *
        </label>
        <Input
          id="schoolName"
          type="text"
          value={formData.schoolName}
          onChange={(e) => onInputChange("schoolName", e.target.value)}
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
          onChange={(e) => onInputChange("principalName", e.target.value)}
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
          onChange={(e) => onInputChange("email", e.target.value)}
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
              const value = e.target.value.replace(/\D/g, '');
              onInputChange("phone", value);
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
            onChange={(e) => onInputChange("city", e.target.value)}
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
            onChange={(e) => onInputChange("state", e.target.value)}
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
          <Select value={formData.studentCount} onValueChange={(value) => onInputChange("studentCount", value)}>
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
            onChange={(e) => onInputChange("establishedYear", e.target.value)}
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
          onChange={(e) => onInputChange("affiliations", e.target.value)}
          placeholder="e.g., FSFK, FTII, or other industry affiliations"
        />
      </div>
    </>
  );
};
