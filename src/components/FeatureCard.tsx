
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureIcon } from "./FeatureIcon";

interface Feature {
  icon: string;
  title: string;
  description: string;
  imageSrc: string;
}

interface FeatureCardProps {
  feature: Feature;
  onClick: (feature: Feature) => void;
}

export const FeatureCard = ({ feature, onClick }: FeatureCardProps) => {
  return (
    <Card 
      className="group h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white border-0 shadow-lg cursor-pointer"
      onClick={() => onClick(feature)}
    >
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-slate-100 group-hover:to-slate-200 transition-all duration-300">
          <FeatureIcon iconType={feature.icon} />
        </div>
        <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
          {feature.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 text-center group-hover:text-slate-700 transition-colors duration-300">
          {feature.description}
        </p>
        <p className="text-xs text-slate-400 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to view details
        </p>
      </CardContent>
    </Card>
  );
};
