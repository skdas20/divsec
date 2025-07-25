'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Registration', href: '#registration' },
    { name: 'Hacker Guide', href: '#hacker-guide' },
    { name: 'F.A.Q', href: '#faq' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'People', href: '#people' },
    { name: 'Contact Us', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textStyle = {
    fontFamily: 'Rye, serif',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  return (
    <>
      {/* Name banner that scrolls away with the page */}
      {isAtTop && (
        <img 
          src="/assets/name.png" 
          alt="Name Banner" 
          className="absolute top-2 left-1/2 transform -translate-x-1/2 z-80"
          style={{ 
            width: '600px',
            height: 'auto',
          }}
        />
      )}

      {/* Fixed Navigation that animates and stays on screen */}
      {isAtTop && (
        <nav className="fixed left-1/2 transform -translate-x-1/2 transition-all duration-500 z-60 w-11/12 max-w-7xl top-44">
          {/* Navigation container with centered borders */}
          <div className="relative w-full">
            
            {/* Top decorative border - Enhanced with ornate design */}
            <div className="flex justify-center items-center w-full mb-3">
              <div className="text-white text-xl" style={textStyle}>
                ❦═══◊◈◊═══════════════════════════════════════════════════════════════════════════════════════════════════════════════◊◈◊═══❦
              </div>
            </div>
            
            {/* Navigation items */}
            <div className="flex flex-wrap justify-between items-center w-full px-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white text-lg transition-all duration-300 ease-in-out hover:text-red-500 hover:scale-110 hover:drop-shadow-[0_0_8px_#ef4444]"
                  style={textStyle}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Bottom decorative border - Enhanced with ornate design */}
            <div className="flex justify-center items-center w-full mt-3">
              <div className="text-white text-xl" style={textStyle}>
                ❦═══◊◈◊═══════════════════════════════════════════════════════════════════════════════════════════════════════════════◊◈◊═══❦
              </div>
            </div>
            
          </div>
        </nav>
      )}
    </>
  );
}
