export default function RegistrationSection() {
  return (
    <section 
      id="registration" 
      className="min-h-screen flex items-center justify-center py-20 section-fold hazy-border"
      style={{
        backgroundImage: "url('/assets/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-6xl font-bold mb-12 text-amber-900">
          Registration
        </h2>
        
        <div className="bg-amber-50/80 backdrop-blur-sm p-12 rounded-lg border border-amber-300">
          <h3 className="text-4xl font-bold mb-8 text-amber-900">Join Diversion 2026</h3>
          <p className="text-xl text-amber-800 mb-8 leading-relaxed">
            Don't miss your chance to be part of the most exciting tech event of the year!
            Register now and secure your spot.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-left">
              <h4 className="text-2xl font-bold mb-4 text-amber-900">Early Bird</h4>
              <div className="text-3xl font-bold text-amber-800 mb-2">$99</div>
              <p className="text-amber-700 mb-4">Until March 15, 2026</p>
              <ul className="space-y-2 text-amber-800">
                <li>• Full event access</li>
                <li>• Welcome kit</li>
                <li>• Meals included</li>
                <li>• Certificate</li>
              </ul>
            </div>
            
            <div className="text-left">
              <h4 className="text-2xl font-bold mb-4 text-amber-900">Regular</h4>
              <div className="text-3xl font-bold text-amber-800 mb-2">$149</div>
              <p className="text-amber-700 mb-4">After March 15, 2026</p>
              <ul className="space-y-2 text-amber-800">
                <li>• Full event access</li>
                <li>• Welcome kit</li>
                <li>• Meals included</li>
                <li>• Certificate</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <button className="newspaper-button mr-4">
              Register Now
            </button>
            <button className="newspaper-button">
              Team Registration
            </button>
          </div>
          
          <div className="mt-8 text-amber-700">
            <p>Registration includes access to all workshops, mentorship sessions, and networking events.</p>
            <p className="mt-2">Limited spots available - Register early to secure your place!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
