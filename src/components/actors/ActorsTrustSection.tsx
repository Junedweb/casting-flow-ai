
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

export const ActorsTrustSection = () => {
  return (
    <section className="py-12 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-4 text-center">
              <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
              <p className="text-slate-700 font-medium">
                <strong>Your videos and data are safe.</strong> JAMZ complies with India's new data protection rules. 
                No fake profiles. No middlemen.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
