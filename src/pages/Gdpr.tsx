
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle, Users } from "lucide-react";

const Gdpr = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="h-16 w-16 text-red-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-red-900">
              GDPR Compliance
            </h1>
          </div>
          <p className="text-xl text-red-700 font-semibold">
            Is Your Casting Agency GDPR Compliant? Non-Compliance Could Cost You ₹41 Crores
          </p>
          <p className="text-lg text-slate-600 mt-4">
            Last updated: June 14, 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center text-red-800">
                <AlertTriangle className="h-6 w-6 mr-2" />
                The Reality of GDPR Penalties
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-red-700 font-semibold">
                GDPR violations can result in fines up to €20 million or 4% of global annual turnover - 
                whichever is higher. For Indian casting agencies handling EU talent data, this translates 
                to potential fines of ₹41+ crores.
              </p>
              <ul className="list-disc list-inside text-red-600 space-y-2">
                <li>Amazon fined €746 million for GDPR violations</li>
                <li>WhatsApp fined €225 million for data transparency issues</li>
                <li>Google fined €50 million for lack of consent</li>
                <li>Indian companies are NOT exempt when handling EU data</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-800">
                <Users className="h-6 w-6 mr-2" />
                Are You At Risk?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                If your casting agency processes personal data of EU residents (actors, models, crew), 
                you MUST comply with GDPR regardless of your location in India.
              </p>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">High-Risk Activities:</h4>
                <ul className="list-disc list-inside text-orange-700 space-y-1">
                  <li>Storing actor portfolios and personal information</li>
                  <li>Processing casting applications from EU talent</li>
                  <li>Sharing talent data with international productions</li>
                  <li>Using non-compliant casting platforms or spreadsheets</li>
                  <li>Lack of proper consent mechanisms</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <Shield className="h-6 w-6 mr-2" />
                JAMZ: Your GDPR Compliance Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-700 font-semibold">
                JAMZ is built with GDPR compliance at its core, protecting your agency from 
                costly violations while streamlining your casting operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Data Protection
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• End-to-end encryption</li>
                    <li>• Secure data centers</li>
                    <li>• Regular security audits</li>
                    <li>• Data minimization protocols</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Consent Management
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Automated consent collection</li>
                    <li>• Withdrawal mechanisms</li>
                    <li>• Audit trails</li>
                    <li>• Granular permissions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Your GDPR Rights & Our Commitments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Your Rights:</h4>
                  <ul className="list-disc list-inside text-slate-600 space-y-1">
                    <li>Right to access your data</li>
                    <li>Right to rectification</li>
                    <li>Right to erasure ("right to be forgotten")</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Our Guarantees:</h4>
                  <ul className="list-disc list-inside text-slate-600 space-y-1">
                    <li>Data processed lawfully and transparently</li>
                    <li>Purpose limitation and data minimization</li>
                    <li>Accuracy and up-to-date information</li>
                    <li>Storage limitation and security</li>
                    <li>Accountability and governance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-slate-50">
            <CardHeader>
              <CardTitle>Don't Risk Your Agency's Future</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                GDPR compliance isn't optional - it's mandatory. Every day you operate without 
                proper compliance increases your risk exposure. Partner with JAMZ to ensure 
                your casting operations are secure, compliant, and future-ready.
              </p>
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Secure Your Agency?</h3>
                <p className="mb-4">Contact us today for a free GDPR compliance assessment</p>
                <p className="font-semibold">JAMz.techconnect@gmail.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gdpr;
