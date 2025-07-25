export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen relative"
      // background removed for video
    >
      {/* Left sidebar text - positioned lower */}
      <div className="absolute left-6 top-3/5 transform -translate-y-1/2 z-20 max-w-xs">
        <div className="text-white text-sm leading-relaxed" 
             style={{ 
               fontFamily: 'Rye, serif',
               textShadow: '2px 2px 4px rgba(0,0,0,0.9)' 
             }}>
          <p className="mb-3">
            Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried.
          </p>
          <p className="mb-3">
            Now are our brows bound with victorious wreaths; Our bruised arms hung up for monuments;
          </p>
          <p className="mb-3">
            Our stern alarums changed to merry meetings, Our dreadful marches to delightful measures.
          </p>
          <p className="text-center italic text-xs">
            Web contents details about the hackathon
          </p>
        </div>
      </div>

      {/* Vertical divider with curly endings - moved back left a bit */}
      <div className="absolute left-88 top-3/5 transform -translate-y-1/2 z-15">
        <div className="flex flex-col items-center h-64">
          {/* Top curl - black */}
          <div className="text-black text-2xl mb-2" 
               style={{ 
                 fontFamily: 'Rye, serif',
                 textShadow: '1px 1px 2px rgba(255,255,255,0.3)' 
               }}>
            ❦
          </div>
          
          {/* Vertical line - changed to black */}
          <div className="w-0.5 bg-black flex-grow"
               style={{
                 boxShadow: '1px 1px 3px rgba(255,255,255,0.2)'
               }}>
          </div>
          
          {/* Bottom curl - black */}
          <div className="text-black text-2xl mt-2" 
               style={{ 
                 fontFamily: 'Rye, serif',
                 textShadow: '1px 1px 2px rgba(255,255,255,0.3)' 
               }}>
            ❦
          </div>
        </div>
      </div>

      {/* Main content centered */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-10">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl mb-6"
              style={{ 
                fontFamily: 'Rye, serif',
                textShadow: '3px 3px 6px rgba(0,0,0,0.8)' 
              }}>
            Diversion 2026
          </h1>
          <p className="text-xl md:text-2xl mb-8"
             style={{ 
               fontFamily: 'Rye, serif',
               textShadow: '2px 2px 4px rgba(0,0,0,0.7)' 
             }}>
            The Ultimate Tech Festival & Hackathon Experience
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#registration"
              className="newspaper-button mr-4"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="newspaper-button"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Flag - Top right corner */}
      <img 
        src="/assets/flag.png" 
        alt="Flag Banner" 
        className="absolute animate-fade-in-right"
        style={{ 
          zIndex: 60,
          width: '100px',
          height: 'auto',
          top: '0px',
          right: '0px'
        }}
      />

      {/* Plane - Bottom right corner */}
      <img 
        src="/assets/plane.png" 
        alt="Plane" 
        className="absolute animate-fly-in"
        style={{ 
          zIndex: 60,
          width: '350px',
          height: 'auto',
          bottom: '0px',
          right: '0px'
        }}
      />
    </section>
  );
}
