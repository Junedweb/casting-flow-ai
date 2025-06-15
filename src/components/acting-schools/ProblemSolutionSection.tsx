
export const ProblemSolutionSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          The Problem with Traditional Student Sharing
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
              <h3 className="text-xl font-bold text-red-800 mb-4">❌ The Old Way</h3>
              <ul className="space-y-3 text-red-700">
                <li>• Sending basic headshots and CVs via email</li>
                <li>• Limited information about acting range</li>
                <li>• No way to showcase actual performances</li>
                <li>• Casting directors can't assess real talent</li>
                <li>• Students get overlooked for opportunities</li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-green-50 border-l-4 border-green-400 p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">✅ The JAMZ Way</h3>
              <ul className="space-y-3 text-green-700">
                <li>• Complete digital portfolio in one shareable link</li>
                <li>• Introduction videos showing personality</li>
                <li>• Multiple monologues and scene performances</li>
                <li>• Past work and achievements showcase</li>
                <li>• Casting directors see the full talent picture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
