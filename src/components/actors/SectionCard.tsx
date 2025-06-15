
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SectionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const SectionCard = ({ icon: Icon, title, description, className = "" }: SectionCardProps) => {
  return (
    <Card className={`bg-white p-8 rounded-2xl shadow-xl ${className}`}>
      <CardContent className="p-0 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
};
