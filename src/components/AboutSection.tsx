export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center py-20 section-fold hazy-border"
      // background removed for video
    >
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-6xl mb-12 text-amber-900">
          About Diversion 2026
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <p className="text-xl text-amber-800 leading-relaxed">
              Diversion 2026 is the ultimate tech festival and hackathon experience, 
              bringing together the brightest minds in technology, innovation, and creativity.
            </p>
            <p className="text-lg text-amber-700 leading-relaxed">
              Join thousands of developers, designers, entrepreneurs, and tech enthusiasts 
              for an unforgettable journey of learning, building, and networking.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🚀</span>
                <span className="text-lg text-amber-800">Innovation & Technology</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🏆</span>
                <span className="text-lg text-amber-800">Competitive Hackathons</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🌟</span>
                <span className="text-lg text-amber-800">Expert Mentorship</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl mb-6 text-amber-900">Event Highlights</h3>
            <ul className="space-y-3 text-left">
              <li className="text-amber-800">• 48-hour intensive hackathon</li>
              <li className="text-amber-800">• Industry expert workshops</li>
              <li className="text-amber-800">• Networking opportunities</li>
              <li className="text-amber-800">• Prize pool worth $50,000</li>
              <li className="text-amber-800">• Startup pitch competitions</li>
              <li className="text-amber-800">• Tech talks and panels</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
