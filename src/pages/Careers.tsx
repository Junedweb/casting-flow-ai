import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Zap, Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ComingSoonModal } from "@/components/ComingSoonModal";
import { useState } from "react";

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Mumbai / Remote",
      type: "Full-time"
    },
    {
      title: "AI/ML Engineer",
      department: "Technology",
      location: "Bangalore / Remote",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Mumbai",
      type: "Full-time"
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Delhi / Mumbai",
      type: "Full-time"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Cutting-edge Technology",
      description: "Work with latest AI and tech stack"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborate with passionate professionals"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible hours and remote options"
    },
    {
      icon: Briefcase,
      title: "Growth Opportunities",
      description: "Career development and learning"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
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
              Join Our Team
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Be part of the revolution in casting technology. Help us build the future of entertainment industry.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Why Work at JAMZ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <benefit.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openings.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-slate-600">
                          <span>📍 {job.location}</span>
                          <span>🏢 {job.department}</span>
                          <span>⏰ {job.type}</span>
                        </div>
                      </div>
                      <Button 
                        className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-6">Don't See Your Role?</h3>
              <p className="text-xl mb-8">
                We're always looking for talented individuals to join our team. Send us your resume!
              </p>
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-slate-100"
                onClick={() => setIsModalOpen(true)}
              >
                Send Your Resume
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Careers;
