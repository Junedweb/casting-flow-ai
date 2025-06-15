
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileVideo, Video, Award, DollarSign } from "lucide-react";

export const ValuePropositionSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          What Your School Gets – <span className="text-amber-600">Completely Free</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                <FileVideo className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg font-bold text-slate-900">Complete Digital Portfolios</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-center text-sm">
                Introduction videos, monologues, scenes, past work—all in one shareable link for casting directors.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-pink-100 group-hover:from-red-200 group-hover:to-pink-200 transition-all duration-300">
                <Video className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-lg font-bold text-slate-900">YouTube Performance Hub</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-center text-sm">
                All uploads go to JAMZ's verified channel for exposure and monetization.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <CardTitle className="text-lg font-bold text-slate-900">JAMZ Certification Badge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-center text-sm">
                Build credibility with the "JAMZ-Certified School" mark—powered by placement and content metrics.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-lg font-bold text-slate-900">Content Success Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-center text-sm">
                When your content performs well, you get the credit and rewards you deserve.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
