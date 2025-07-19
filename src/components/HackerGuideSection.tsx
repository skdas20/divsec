export default function HackerGuideSection() {
  return (
    <section 
      id="hacker-guide" 
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
          Hacker Guide
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-amber-900">What to Bring</h3>
            <div className="bg-amber-50/80 backdrop-blur-sm p-6 rounded-lg border border-amber-300">
              <ul className="space-y-3 text-amber-800">
                <li>• Laptop with charger</li>
                <li>• Valid ID for registration</li>
                <li>• Sleeping bag (if staying overnight)</li>
                <li>• Comfortable clothes</li>
                <li>• Power banks and cables</li>
                <li>• Your creative mind!</li>
              </ul>
            </div>
            
            <h3 className="text-3xl font-bold mb-6 mt-12 text-amber-900">Rules & Guidelines</h3>
            <div className="bg-amber-50/80 backdrop-blur-sm p-6 rounded-lg border border-amber-300">
              <ul className="space-y-3 text-amber-800">
                <li>• Teams of 2-4 members</li>
                <li>• 48-hour development time</li>
                <li>• Original code only</li>
                <li>• Open source APIs allowed</li>
                <li>• No offensive content</li>
                <li>• Have fun and learn!</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-amber-900">Tracks & Themes</h3>
            <div className="space-y-4">
              <div className="bg-amber-50/80 backdrop-blur-sm p-4 rounded-lg border border-amber-300">
                <h4 className="font-bold text-amber-900">🌱 Sustainability</h4>
                <p className="text-amber-800">Build solutions for environmental challenges</p>
              </div>
              <div className="bg-amber-50/80 backdrop-blur-sm p-4 rounded-lg border border-amber-300">
                <h4 className="font-bold text-amber-900">🏥 Healthcare</h4>
                <p className="text-amber-800">Innovate in medical technology and wellness</p>
              </div>
              <div className="bg-amber-50/80 backdrop-blur-sm p-4 rounded-lg border border-amber-300">
                <h4 className="font-bold text-amber-900">🎓 Education</h4>
                <p className="text-amber-800">Transform learning and accessibility</p>
              </div>
              <div className="bg-amber-50/80 backdrop-blur-sm p-4 rounded-lg border border-amber-300">
                <h4 className="font-bold text-amber-900">🤖 AI/ML</h4>
                <p className="text-amber-800">Harness artificial intelligence</p>
              </div>
              <div className="bg-amber-50/80 backdrop-blur-sm p-4 rounded-lg border border-amber-300">
                <h4 className="font-bold text-amber-900">🌐 Open Innovation</h4>
                <p className="text-amber-800">Build anything that makes impact</p>
              </div>
            </div>
            
            <div className="mt-8">
              <button className="newspaper-button">
                Download Complete Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
