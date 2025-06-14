
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
            Terms of Service
          </h1>
          <p className="text-xl text-slate-600">
            Last updated: June 14, 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                By accessing and using JAMZ platform, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use License</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Permission is granted to temporarily use JAMZ platform for personal, non-commercial 
                transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for commercial purposes or public display</li>
                <li>Attempt to reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in prohibited activities</li>
                <li>Comply with applicable laws and regulations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Partnership Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                For technology partnership arrangements, specific terms including revenue sharing 
                (30% of incremental business on quarterly basis) and operational commitments will 
                be outlined in separate partnership agreements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                JAMZ shall not be liable for any damages that may arise from the use or inability 
                to use the platform, including but not limited to direct, indirect, incidental, 
                punitive, and consequential damages.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
