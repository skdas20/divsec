export default function ScheduleSection() {
  return (
    <section 
      id="schedule" 
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
          Event Schedule
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Day 1 */}
          <div className="bg-amber-50/80 backdrop-blur-sm p-6 rounded-lg border border-amber-300">
            <h3 className="text-3xl font-bold mb-6 text-amber-900 text-center">Day 1</h3>
            <h4 className="text-xl font-bold mb-4 text-amber-800">Friday - Opening</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-amber-800">6:00 PM</span>
                <span className="text-amber-800">Registration</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">7:00 PM</span>
                <span className="text-amber-800">Opening Ceremony</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">8:00 PM</span>
                <span className="text-amber-800">Team Formation</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">9:00 PM</span>
                <span className="text-amber-800">Hacking Begins!</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">10:00 PM</span>
                <span className="text-amber-800">Dinner & Networking</span>
              </div>
            </div>
          </div>
          
          {/* Day 2 */}
          <div className="bg-amber-50/80 backdrop-blur-sm p-6 rounded-lg border border-amber-300">
            <h3 className="text-3xl font-bold mb-6 text-amber-900 text-center">Day 2</h3>
            <h4 className="text-xl font-bold mb-4 text-amber-800">Saturday - Build</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-amber-800">8:00 AM</span>
                <span className="text-amber-800">Breakfast</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">10:00 AM</span>
                <span className="text-amber-800">Workshops</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">1:00 PM</span>
                <span className="text-amber-800">Lunch</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">3:00 PM</span>
                <span className="text-amber-800">Mentorship</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">7:00 PM</span>
                <span className="text-amber-800">Dinner</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">9:00 PM</span>
                <span className="text-amber-800">Tech Talks</span>
              </div>
            </div>
          </div>
          
          {/* Day 3 */}
          <div className="bg-amber-50/80 backdrop-blur-sm p-6 rounded-lg border border-amber-300">
            <h3 className="text-3xl font-bold mb-6 text-amber-900 text-center">Day 3</h3>
            <h4 className="text-xl font-bold mb-4 text-amber-800">Sunday - Demo</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-amber-800">8:00 AM</span>
                <span className="text-amber-800">Breakfast</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">9:00 AM</span>
                <span className="text-amber-800">Hacking Ends</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">10:00 AM</span>
                <span className="text-amber-800">Project Demos</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">2:00 PM</span>
                <span className="text-amber-800">Judging</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">4:00 PM</span>
                <span className="text-amber-800">Awards Ceremony</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">5:00 PM</span>
                <span className="text-amber-800">Closing</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl text-amber-800 mb-6">Mark your calendars!</p>
          <button className="newspaper-button">
            Add to Calendar
          </button>
        </div>
      </div>
    </section>
  );
}
