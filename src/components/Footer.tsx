
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { ComingSoonModal } from "./ComingSoonModal";
import { useState } from "react";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");

  const handleSocialClick = (platform: string) => {
    setSelectedPlatform(platform);
    setIsModalOpen(true);
  };

  return (
    <>
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-lg">
              <h2 className="text-3xl font-bold text-white">
                JAMZ
              </h2>
            </div>
            <p className="text-slate-300 text-lg">
              Empowering the future of casting with AI and smart technology
            </p>
          </div>

          <Separator className="bg-slate-700 mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-300">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Use Policy</a></li>
                <li><Link to="/gdpr" className="hover:text-white transition-colors">GDPR Compliance</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-slate-300">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/partnership" className="hover:text-white transition-colors">Technology Partnership Program</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <button 
                    onClick={() => handleSocialClick("LinkedIn")} 
                    className="hover:text-white transition-colors text-left"
                  >
                    LinkedIn
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSocialClick("Twitter")} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Twitter
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSocialClick("Instagram")} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Instagram
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSocialClick("YouTube")} 
                    className="hover:text-white transition-colors text-left"
                  >
                    YouTube
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-slate-700 mb-8" />

          <div className="text-center text-slate-400">
            <p>&copy; 2025 JAMZ. All rights reserved. Built with ❤️ for the casting community.</p>
          </div>
        </div>
      </footer>

      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        platform={selectedPlatform}
      />
    </>
  );
};
