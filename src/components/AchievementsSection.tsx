export default function AchievementsSection() {
  return (
    <section 
      id="achievements" 
      className="min-h-screen flex items-center justify-center py-20 section-fold hazy-border"
      // background removed for video
    >
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-6xl mb-12 text-amber-900">
          Our Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-3xl mb-4 text-amber-900">500+</h3>
            <p className="text-amber-800">Projects Built</p>
          </div>
          <div>
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-3xl mb-4 text-amber-900">2000+</h3>
            <p className="text-amber-800">Participants</p>
          </div>
          <div>
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-3xl mb-4 text-amber-900">$100k+</h3>
            <p className="text-amber-800">Prize Money Distributed</p>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div className="text-left">
            <h3 className="text-3xl mb-6 text-amber-900">Past Winners</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-amber-900">EcoTrack - 2025</h4>
                <p className="text-amber-800">AI-powered environmental monitoring system</p>
              </div>
              <div>
                <h4 className="text-amber-900">HealthBot - 2024</h4>
                <p className="text-amber-800">Telemedicine chatbot for rural areas</p>
              </div>
              <div>
                <h4 className="text-amber-900">SmartCity - 2023</h4>
                <p className="text-amber-800">IoT solution for urban management</p>
              </div>
            </div>
          </div>
          
          <div className="text-left">
            <h3 className="text-3xl mb-6 text-amber-900">Recognition</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🥇</span>
                <span className="text-amber-800">Best Tech Event - TechCrunch 2025</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🌟</span>
                <span className="text-amber-800">Innovation Award - IEEE 2024</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🚀</span>
                <span className="text-amber-800">Top Startup Accelerator - Forbes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
