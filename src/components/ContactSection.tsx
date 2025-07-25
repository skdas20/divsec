export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="min-h-screen flex items-center justify-center py-20 section-fold hazy-border"
      // background removed for video
    >
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-6xl mb-12 text-center text-amber-900">
          Contact Us
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl mb-6 text-amber-900">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-amber-900">Email</p>
                    <p className="text-amber-800">info@diversion2026.com</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="text-amber-900">Phone</p>
                    <p className="text-amber-800">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-amber-900">Location</p>
                    <p className="text-amber-800">Tech Convention Center<br />123 Innovation Ave, Tech City</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="text-amber-900">Social Media</p>
                    <div className="space-x-4 text-amber-800">
                      <span>Twitter: @Diversion2026</span>
                      <span>LinkedIn: Diversion2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl mb-6 text-amber-900">Send a Message</h3>
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-amber-900 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-amber-300 rounded bg-white/80"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-amber-900 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-amber-300 rounded bg-white/80"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-amber-900 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-amber-300 rounded bg-white/80"
                    placeholder="Message Subject"
                  />
                </div>
                
                <div>
                  <label className="block text-amber-900 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border border-amber-300 rounded bg-white/80"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button type="submit" className="newspaper-button w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-amber-800">
            We're here to help! Don't hesitate to reach out with any questions.
          </p>
        </div>
      </div>
    </section>
  );
}
