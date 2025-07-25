export default function ScheduleSection() {
  const events = [
    { time: '6:00 PM', label: 'Venue Opens', icon: '🏰' },
    { time: '6:00 PM', label: 'Registration', icon: '🚩' },
    { time: '7:00 PM', label: 'Opening Ceremony', icon: '🎉' },
    { time: '8:00 PM', label: 'Team Formation', icon: '👥' },
    { time: '9:00 PM', label: 'Hacking Begins!', icon: '💻' },
    { time: '10:00 PM', label: 'Dinner & Networking', icon: '🍽️' },
    { time: '8:00 AM', label: 'Breakfast', icon: '🍽️' },
    { time: '10:00 AM', label: 'Workshops', icon: '🛠️' },
    { time: '1:00 PM', label: 'Lunch', icon: '🍽️' },
    { time: '3:00 PM', label: 'Mentorship', icon: '🧑‍🏫' },
    { time: '7:00 PM', label: 'Dinner', icon: '🍽️' },
    { time: '9:00 PM', label: 'Tech Talks', icon: '🎤' },
    { time: '8:00 AM', label: 'Breakfast', icon: '🍽️' },
    { time: '9:00 AM', label: 'Hacking Ends', icon: '🛑' },
    { time: '10:00 AM', label: 'Project Demos', icon: '🖥️' },
    { time: '2:00 PM', label: 'Judging', icon: '⚖️' },
    { time: '4:00 PM', label: 'Awards Ceremony', icon: '🏆' },
    { time: '5:00 PM', label: 'Closing', icon: '🎬' },
  ];

  return (
    <section 
      id="schedule" 
      className="min-h-screen flex items-center justify-center py-20 section-fold hazy-border"
    >
      {/* Your background video stays here */}
      
      <div className="max-w-4xl mx-auto px-4 relative">
        <h2 className="text-6xl mb-16 text-center text-amber-900 font-rye">
          EVENT TIMELINE
        </h2>
        
        <div className="relative min-h-[800px]">
          {/* Curved dotted path - simplified and cleaner */}
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 800 800"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M 150 60 
                 C 250 80, 300 140, 220 200
                 C 140 260, 200 320, 300 340
                 C 400 360, 450 420, 370 480
                 C 290 540, 350 600, 450 620
                 C 550 640, 600 700, 520 760"
              stroke="#8B4513"
              strokeWidth="4"
              strokeDasharray="12,8"
              fill="none"
              opacity="0.9"
            />
          </svg>

          {/* Events positioned along the path */}
          {events.map((event, idx) => {
            // Better positioned coordinates that follow the path naturally
            const pathPositions = [
              { x: '18%', y: '8%' },   // Start
              { x: '28%', y: '12%' },  // Registration
              { x: '35%', y: '18%' },  // Opening
              { x: '30%', y: '25%' },  // Team Formation
              { x: '25%', y: '32%' },  // Hacking Begins
              { x: '32%', y: '38%' },  // Dinner
              { x: '40%', y: '43%' },  // Breakfast
              { x: '48%', y: '47%' },  // Workshops
              { x: '52%', y: '53%' },  // Lunch
              { x: '48%', y: '60%' },  // Mentorship
              { x: '42%', y: '66%' },  // Dinner
              { x: '38%', y: '72%' },  // Tech Talks
              { x: '45%', y: '77%' },  // Breakfast
              { x: '52%', y: '82%' },  // Hacking Ends
              { x: '60%', y: '86%' },  // Demos
              { x: '68%', y: '90%' },  // Judging
              { x: '72%', y: '94%' },  // Awards
              { x: '65%', y: '98%' },  // Closing
            ];
            
            const pos = pathPositions[idx];
            
            return (
              <div
                key={idx}
                className="absolute group cursor-pointer"
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Marker circle with icon */}
                <div className="relative">
                  <div className="w-12 h-12 bg-amber-100 border-3 border-amber-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                    <span className="text-xl">{event.icon}</span>
                  </div>
                  
                  {/* Event info tooltip */}
                  <div className="absolute left-14 top-1/2 transform -translate-y-1/2 
                                  bg-amber-50 border-2 border-amber-600 rounded-lg px-4 py-2 
                                  shadow-xl opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-300 whitespace-nowrap z-10
                                  before:content-[''] before:absolute before:right-full before:top-1/2 
                                  before:transform before:-translate-y-1/2 before:border-8 
                                  before:border-transparent before:border-r-amber-50">
                    <div className="text-sm font-bold text-amber-800">{event.time}</div>
                    <div className="text-base text-amber-900 font-rye">{event.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-amber-800 mb-6 font-rye">Mark your calendars!</p>
          <button className="newspaper-button">
            Add to Calendar
          </button>
        </div>
      </div>
    </section>
  );
}
