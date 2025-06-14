
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, FileText, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      available: "Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      action: "Send Email",
      available: "support@jamz.tech"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      action: "Call Now",
      available: "+91-XXXX-XXXXXX"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Browse our comprehensive knowledge base",
      action: "View Docs",
      available: "Available 24/7"
    }
  ];

  const faqs = [
    {
      question: "How does the partnership model work?",
      answer: "We provide technology solutions with zero upfront cost and share 30% of incremental business revenue on a quarterly basis."
    },
    {
      question: "How much faster is the casting process?",
      answer: "Our AI-powered platform reduces casting turnaround time by over 60% compared to traditional methods."
    },
    {
      question: "Can I maintain my brand identity?",
      answer: "Yes, our co-branded app solution preserves your studio identity and branding completely."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide dedicated relationship management, technical support, and regular platform updates as part of our partnership."
    }
  ];

  return (
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
            Support Center
          </h1>
          <p className="text-xl text-slate-600">
            Get the help you need to maximize your casting operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <option.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-xl">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{option.description}</p>
                <p className="text-sm text-slate-500">{option.available}</p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h3>
            <p className="text-xl mb-8">
              Our technical experts are ready to help you optimize your casting operations
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100">
              Contact Support Team
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;
