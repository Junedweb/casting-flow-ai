
export const HowItWorksSection = () => {
  return (
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
  );
};
