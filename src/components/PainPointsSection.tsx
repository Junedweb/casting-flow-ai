
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Quote, Users, Zap, TrendingUp, Star, Heart, CheckCircle, Database, Eye, UserX } from "lucide-react";
import { useState } from "react";

export const PainPointsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [testimonialHovered, setTestimonialHovered] = useState(false);

  const painPoints = [
    {
      text: "Our data's scattered across WhatsApp, Instagram, Google Drive, Excel sheets. It's complete chaos.",
      impact: "Lost 3+ hours daily searching for profiles",
      icon: Database
    },
    {
      text: "Manually matching casting requirements with our current set of profiles is a nightmare in this setup.",
      impact: "70% slower casting decisions",
      icon: AlertTriangle
    },
    {
      text: "Tried building our own app. Too expensive and never fits right.",
      impact: "₹5L+ wasted on incomplete solutions",
      icon: Zap
    },
    {
      text: "High iterations of assistant casting directors cause us to lose talent profiles constantly.",
      impact: "30% talent database lost yearly",
      icon: UserX
    },
    {
      text: "Visibility of actors centrally is very low - we can't see who's available when we need them.",
      impact: "Missing quality talent opportunities",
      icon: Eye
    }
  ];

  const actorComplaints = [
    {
      text: "Website doesn't work properly—I never know if my profile even reached the right person.",
      impact: "Missing 60% of opportunities",
      icon: AlertTriangle
    },
    {
      text: "I have to show up every month in person. Even though I've worked with this CD before.",
      impact: "₹2,000+ monthly travel costs",
      icon: Users
    },
    {
      text: "I live in Pune—traveling to Mumbai all the time is expensive. A proper online flow would help.",
      impact: "10+ hours monthly on travel",
      icon: TrendingUp
    }
  ];

  const InteractiveCard = ({ item, index, type }: { item: any, index: number, type: 'cd' | 'actor' }) => {
    const isHovered = hoveredCard === index + (type === 'actor' ? 100 : 0);
    const borderColor = type === 'cd' ? 'border-red-500' : 'border-blue-500';
    const gradientFrom = type === 'cd' ? 'from-red-50' : 'from-blue-50';
    const gradientTo = type === 'cd' ? 'to-red-100' : 'to-blue-100';
    const iconColor = type === 'cd' ? 'text-red-500' : 'text-blue-500';
    const impactColor = type === 'cd' ? 'text-red-600' : 'text-blue-600';

    return (
      <Card 
        className={`border-l-4 ${borderColor} transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer bg-gradient-to-br ${gradientFrom} ${gradientTo} ${isHovered ? 'shadow-2xl scale-105' : 'shadow-md'} h-full`}
        onMouseEnter={() => setHoveredCard(index + (type === 'actor' ? 100 : 0))}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent className="p-3 relative overflow-hidden h-full flex flex-col">
          <div className="flex items-start space-x-2 flex-1">
            <div className={`p-1.5 rounded-full bg-white shadow-lg ${iconColor} flex-shrink-0`}>
              <item.icon className="w-3 h-3" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start mb-1.5">
                <Quote className={`w-2.5 h-2.5 ${iconColor} mr-1 mt-0.5 flex-shrink-0`} />
                <p className="text-slate-700 italic text-xs font-medium leading-tight">{item.text}</p>
              </div>
              <div className={`mt-1.5 p-1.5 bg-white/60 rounded-lg border-l-2 ${borderColor} backdrop-blur-sm`}>
                <p className={`text-[10px] font-semibold ${impactColor} flex items-center`}>
                  <Zap className="w-2.5 h-2.5 mr-1" />
                  {item.impact}
                </p>
              </div>
            </div>
          </div>
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-8 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-400 to-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-400 to-green-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mb-3 shadow-lg">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-red-600 to-blue-600 bg-clip-text text-transparent mb-3">
            We Understand Your Challenges
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Every casting director and actor faces the same frustrations. 
            <span className="font-semibold text-slate-800"> You're not alone in this struggle.</span>
          </p>
        </div>

        {/* Casting Directors Section */}
        <div className="mb-6">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-xl shadow-lg mb-2">
              <AlertTriangle className="w-5 h-5 text-white mr-2" />
              <h3 className="text-lg font-bold text-white">Casting Directors</h3>
            </div>
            <p className="text-red-600 font-medium text-sm">Real pain points from industry professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {painPoints.map((point, index) => (
              <InteractiveCard key={index} item={point} index={index} type="cd" />
            ))}
          </div>
        </div>

        {/* Actors Section */}
        <div className="mb-6">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg mb-2">
              <Users className="w-5 h-5 text-white mr-2" />
              <h3 className="text-lg font-bold text-white">Actors & Artists</h3>
            </div>
            <p className="text-blue-600 font-medium text-sm">Challenges faced by talented performers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {actorComplaints.map((complaint, index) => (
              <InteractiveCard key={index} item={complaint} index={index} type="actor" />
            ))}
          </div>
        </div>

        {/* Compact Success Story Card */}
        <div className="relative">
          <Card 
            className={`bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-2 border-emerald-200 shadow-xl transform transition-all duration-700 overflow-hidden ${testimonialHovered ? 'scale-[1.02] shadow-2xl border-emerald-300' : 'hover:scale-[1.01]'}`}
            onMouseEnter={() => setTestimonialHovered(true)}
            onMouseLeave={() => setTestimonialHovered(false)}
          >
            <CardContent className="p-6 text-center relative">
              {/* Animated Background Elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 animate-pulse" />
              
              {/* Floating Stars */}
              <div className="absolute top-4 left-6 animate-bounce delay-100">
                <Star className="w-3 h-3 text-emerald-400 fill-current" />
              </div>
              <div className="absolute top-8 right-8 animate-bounce delay-300">
                <Heart className="w-4 h-4 text-green-400 fill-current" />
              </div>
              <div className="absolute bottom-12 left-12 animate-bounce delay-500">
                <CheckCircle className="w-3 h-3 text-teal-400 fill-current" />
              </div>

              {/* Main Icon with Animation */}
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full mb-4 shadow-lg transition-all duration-500 ${testimonialHovered ? 'animate-pulse scale-110' : ''}`}>
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Star Rating */}
              <div className="flex justify-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 text-yellow-400 fill-current transition-all duration-300 delay-${i * 100} ${testimonialHovered ? 'animate-pulse scale-110' : ''}`} 
                  />
                ))}
              </div>

              {/* Quote Text with Dynamic Colors */}
              <blockquote className="text-base text-slate-700 italic mb-4 leading-relaxed max-w-4xl mx-auto font-medium">
                <span className="text-emerald-600">"</span>
                <span className="bg-gradient-to-r from-slate-700 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
                  JAMZ didn't charge a penny as my scale is small and I don't need a complex process. 
                  They provided excellent support and guidance that truly helped streamline my workflow. 
                  All the best and best wishes for all the good work they're doing!
                </span>
                <span className="text-emerald-600">"</span>
              </blockquote>

              {/* Author Info with Enhanced Design */}
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-slate-800 font-bold text-sm">Priya Sharma (Small-Scale Casting Director)</p>
                  <p className="text-emerald-600 font-medium text-xs">Mumbai Film Industry</p>
                </div>
              </div>

              {/* Success Badge */}
              <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-semibold shadow-lg text-sm hover:shadow-xl transition-all duration-300">
                <CheckCircle className="w-4 h-4 mr-1" />
                Success Story
                <Zap className="w-4 h-4 ml-1 animate-pulse" />
              </div>

              {/* Hover Effect Overlay */}
              {testimonialHovered && (
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 via-green-100/30 to-teal-100/30 animate-pulse pointer-events-none" />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
