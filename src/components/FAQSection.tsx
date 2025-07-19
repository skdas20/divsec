export default function FAQSection() {
  return (
    <section 
      id="faq" 
      className="min-h-screen flex items-center justify-center py-20 section-fold hazy-border"
      style={{
        backgroundImage: "url('/assets/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-6xl font-bold mb-12 text-center text-amber-900">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-amber-900">What is Diversion 2026?</h3>
            <p className="text-amber-800">
              Diversion 2026 is a 48-hour hackathon and tech festival where developers, designers, 
              and innovators come together to build amazing projects and learn from industry experts.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-3 text-amber-900">Who can participate?</h3>
            <p className="text-amber-800">
              Anyone with a passion for technology! Whether you're a student, professional, 
              or entrepreneur, all skill levels are welcome.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-3 text-amber-900">Do I need a team?</h3>
            <p className="text-amber-800">
              You can participate solo or in teams of up to 4 members. We'll also have team 
              formation sessions for those looking to find teammates.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-3 text-amber-900">What should I bring?</h3>
            <p className="text-amber-800">
              Bring your laptop, charger, valid ID, and enthusiasm! We'll provide meals, 
              snacks, and all the caffeine you need.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-3 text-amber-900">Are there prizes?</h3>
            <p className="text-amber-800">
              Yes! We have a prize pool of $50,000 across various categories including 
              Best Overall, Most Creative, and track-specific awards.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-3 text-amber-900">Is accommodation provided?</h3>
            <p className="text-amber-800">
              The venue will be open 24/7 during the event. You can bring sleeping bags, 
              or we can help arrange nearby accommodation at discounted rates.
            </p>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-amber-800 mb-6">Still have questions?</p>
            <button className="newspaper-button">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
