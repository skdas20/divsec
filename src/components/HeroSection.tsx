export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen relative"
      style={{
        backgroundImage: "url('/assets/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Main content centered */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-10">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Diversion 2026
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The Ultimate Tech Festival & Hackathon Experience
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#registration"
              className="newspaper-button"
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
          bottom: '0px', // Changed from 20px
          right: '0px'  // Changed from 20px
        }}
      />
    </section>
  );
}