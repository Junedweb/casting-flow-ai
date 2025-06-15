
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { trackButtonClick } from "@/utils/buttonTracker";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { GraduationCap, Video, Award, DollarSign, Users, Star, CheckCircle } from "lucide-react";

const ActingSchools = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    trackButtonClick("Apply for JAMZ School Partner Program");
    navigate("/contact");
  };

  const handleHowItWorksClick = () => {
    trackButtonClick("See How It Works - Acting Schools");
    // Scroll to how it works section
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  const seoData = {
    title: "JAMZ for Acting Schools | Student Portfolio Platform & Revenue Sharing",
    description: "Free platform for acting schools to manage student portfolios, showcase performances, and connect with casting directors. Join our certified school partner program with revenue sharing.",
    keywords: "acting schools, student portfolios, performance platform, casting directors, acting school certification, revenue sharing, talent showcase",
    canonicalUrl: "https://jamz-casting.lovable.app/acting-schools"
  };

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative py-12 px-6 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/c4bb65e6-c38a-4df8-a9ff-648d29ba7037.png')`,
              opacity: 0.3
            }}
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 to-orange-900/40"></div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            {/* JAMZ Logo */}
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full shadow-2xl border-4 border-white/20">
                <h2 className="text-xl font-bold text-white">JAMZ</h2>
              </div>
            </div>

            <div className="mb-4">
              <Badge className="bg-white/90 text-amber-800 px-4 py-2 text-sm font-medium border border-white/20">
                For Acting Schools • Drama Institutes • Talent Academies
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
              Your Students Deserve
              <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text">
                the Spotlight
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto font-light drop-shadow-lg">
              JAMZ gives acting schools a free platform to manage student portfolios, upload performances, 
              and connect with casting directors nationwide. In return? You earn visibility, reputation, and revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0"
                onClick={handleApplyClick}
              >
                Apply for JAMZ School Partner Program
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-medium rounded-2xl"
                onClick={handleHowItWorksClick}
              >
                See How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="text-center">
              <p className="text-white/70 text-sm mb-2">Trusted by acting schools across India</p>
              <div className="flex justify-center items-center gap-8 text-white/60 text-xs flex-wrap">
                <span>Drama Institutes</span>
                <span>•</span>
                <span>Acting Academies</span>
                <span>•</span>
                <span>Theatre Schools</span>
                <span>•</span>
                <span>Performance Centers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Value Snapshot Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              What Your School Gets – <span className="text-amber-600">Completely Free</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                    <GraduationCap className="w-8 h-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">Student Portfolio Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center text-sm">
                    Store and showcase monologues, scenes, bios—digitally.
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
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                    <Award className="w-8 h-8 text-blue-600" />
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
                  <CardTitle className="text-lg font-bold text-slate-900">50/50 Revenue Share</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center text-sm">
                    Any YouTube income or sponsor partnerships are shared with your school.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 px-6 bg-gradient-to-r from-amber-100 to-orange-100">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-slate-700 italic mb-6 leading-relaxed">
                  "We never had a proper platform to showcase our students. With JAMZ, casting calls started coming in directly. 
                  Plus, the YouTube model helped us fund better workshops."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div>
                    <p className="font-semibold text-slate-900">Nisha R.</p>
                    <p className="text-sm text-slate-600">School Director, Indore</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              How It Works – <span className="text-amber-600">3 Simple Steps</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Sign Up & Get Verified</h3>
                <p className="text-slate-600">Fill a short form. Submit your school's credentials.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Start Uploading Student Content</h3>
                <p className="text-slate-600">Monologues, scenes, showreels—tagged and categorized.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Boost Your School's Reach</h3>
                <p className="text-slate-600">Get listed in JAMZ's certified directory. Share your badge proudly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It's Free */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why It's <span className="text-amber-600">100% Free</span>
            </h2>
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  JAMZ earns through platform ads, premium recruiter tools, and YouTube monetization. 
                  We believe student visibility should never cost you—so instead, we grow together.
                </p>
                <div className="mt-6 flex justify-center items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>No hidden fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Revenue sharing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Transparent model</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certification Program Banner */}
        <section className="py-16 px-6 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Be Recognized. Be Recommended.
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              JAMZ awards 2–5 schools every quarter with its official certification, 
              based on content quality, student growth, and placement activity.
            </p>
            <Button 
              size="lg"
              className="bg-white text-amber-600 hover:bg-amber-50 px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleApplyClick}
            >
              Apply for Evaluation
            </Button>
          </div>
        </section>

        {/* Join the Movement */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              We're Building India's Largest 
              <span className="block text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                Talent Launchpad—Join Us
              </span>
            </h2>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Whether you run a classroom in Bhopal or a campus in Mumbai, 
              JAMZ is built to showcase your talent and amplify your impact.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleApplyClick}
            >
              Partner With JAMZ
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ActingSchools;
