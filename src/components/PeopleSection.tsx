export default function PeopleSection() {
  return (
    <section 
      id="people" 
      className="min-h-screen flex items-center justify-center py-20 section-fold hazy-border"
      style={{
        backgroundImage: "url('/assets/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-6xl font-bold mb-12 text-center text-amber-900">
          Meet the Team
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">👨‍💻</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-amber-900">John Smith</h3>
            <p className="text-amber-800 mb-2">Event Director</p>
            <p className="text-amber-700">10+ years in tech events</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 bg-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">👩‍💼</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-amber-900">Sarah Johnson</h3>
            <p className="text-amber-800 mb-2">Operations Lead</p>
            <p className="text-amber-700">Expert in logistics</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 bg-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">👨‍🎓</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-amber-900">Mike Chen</h3>
            <p className="text-amber-800 mb-2">Technical Lead</p>
            <p className="text-amber-700">Full-stack developer</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-4xl font-bold mb-8 text-center text-amber-900">Speakers & Mentors</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-bold text-amber-900">Dr. Emily Wang</h4>
              <p className="text-amber-800 text-sm">AI Researcher, MIT</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <h4 className="font-bold text-amber-900">Alex Rodriguez</h4>
              <p className="text-amber-800 text-sm">CTO, TechCorp</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
              <h4 className="font-bold text-amber-900">Lisa Park</h4>
              <p className="text-amber-800 text-sm">Startup Founder</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="font-bold text-amber-900">David Kumar</h4>
              <p className="text-amber-800 text-sm">DevOps Expert</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="newspaper-button">
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
