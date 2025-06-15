
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Shield, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600">
            Last updated: June 15, 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-orange-200">
            <CardHeader className="bg-orange-50">
              <CardTitle className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-orange-600" />
                Cookie Policy & Data Collection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p className="text-slate-600">
                We use cookies and similar technologies to enhance your experience on JAMZ. 
                This includes analytics cookies to understand how you use our platform.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Analytics Cookies:</strong> Google Analytics to understand user behavior (requires consent)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Your Choice:</strong> You can manage cookie preferences through our consent banner 
                  or by clearing your browser data. Declining analytics cookies will not affect core functionality.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                We collect information you provide directly to us, such as when you create an account, 
                submit casting applications, or contact us for support.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Personal information (name, email, phone number)</li>
                <li>Professional information (portfolio, experience, skills)</li>
                <li>Usage data and analytics (with consent)</li>
                <li>Device and browser information</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>To provide and maintain our casting platform services</li>
                <li>To match talent with appropriate casting opportunities</li>
                <li>To communicate with you about our services</li>
                <li>To improve our platform and develop new features (analytics with consent)</li>
                <li>To ensure security and prevent fraud</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                GDPR Compliance & Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                We implement industry-standard security measures to protect your personal information. 
                All data is encrypted in transit and at rest. We comply with GDPR and India's IT Act requirements.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>Legal Basis:</strong> We process data based on consent, contract performance, 
                  legitimate interests, and legal obligations as required by GDPR.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights Under GDPR</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate information</li>
                <li><strong>Erasure:</strong> Delete your account and data ("right to be forgotten")</li>
                <li><strong>Portability:</strong> Export your data in machine-readable format</li>
                <li><strong>Withdraw Consent:</strong> Opt-out of analytics and marketing</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                If you have any questions about this Privacy Policy, cookie usage, or wish to exercise 
                your data protection rights, please contact us at JAMz.techconnect@gmail.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
