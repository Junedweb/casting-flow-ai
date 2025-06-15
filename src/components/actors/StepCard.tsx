
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  stepNumber: number;
}

export const StepCard = ({ icon: Icon, title, description, color, stepNumber }: StepCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 text-center">
        <div className="relative mb-6">
          <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
            {stepNumber}
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
};
