
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Shield } from "lucide-react";

export const GdprNotice = () => {
  return (
    <Card className="bg-red-50 border-red-200 hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8">
        <div className="flex items-start">
          <div className="relative mr-4 mt-1 flex-shrink-0">
            <div className="absolute inset-0 bg-red-200 rounded-full opacity-30 animate-pulse"></div>
            <AlertTriangle className="w-8 h-8 text-red-600 relative z-10" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-800 mb-4">
              NOTICE: GDPR ACT ENFORCEMENT FROM MARCH 15, 2025
            </h3>
            <p className="text-red-700 text-lg mb-4">
              PII data safety is very critical post GDPR act implementation. Penalty starts from ₹5 Cr, 
              can go up to hundreds. Traditional methods lack data encryption—JAMZ solves this.
            </p>
            <div className="flex items-center">
              <div className="relative mr-3">
                <div className="absolute inset-0 bg-green-200 rounded-full opacity-30"></div>
                <Shield className="w-6 h-6 text-green-600 relative z-10" />
              </div>
              <p className="text-slate-700 font-semibold">
                JAMZ is GDPR-compliant with end-to-end encryption and secure user permissions.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
