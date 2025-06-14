
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
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
            Last updated: June 14, 2025
          </p>
        </div>

        <div className="space-y-8">
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
                <li>Usage data and analytics</li>
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
                <li>To improve our platform and develop new features</li>
                <li>To ensure security and prevent fraud</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                We implement industry-standard security measures to protect your personal information. 
                All data is encrypted in transit and at rest. We regularly audit our security practices 
                and comply with applicable data protection regulations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Export your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                If you have any questions about this Privacy Policy, please contact us at JAMz.techconnect@gmail.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
