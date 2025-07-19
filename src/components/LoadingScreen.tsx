"use client";
import { useEffect } from "react";

interface LoadingScreenProps {
  onFinish: () => void;
}

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  useEffect(() => {
    // Auto finish after 3 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div 
      className="loading-screen"
      style={{
        backgroundImage: "url('/assets/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Vintage overlay */}
      <div className="loading-overlay"></div>
      
      {/* Loading content */}
      <div 
        className="text-center text-white"
        style={{ position: 'relative', zIndex: 10 }}
      >
        {/* Main title with steampunk styling */}
        <div className="mb-8">
          <h1 
            className="text-6xl md:text-8xl font-bold mb-4 animate-pulse"
            style={{ 
              fontFamily: 'UnifrakturCook, serif',
              textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(139, 69, 19, 0.6)',
              color: '#D4AF37'
            }}
          >
            DIVERSION
          </h1>
          <div 
            className="text-4xl md:text-6xl font-bold animate-bounce"
            style={{ 
              fontFamily: 'UnifrakturCook, serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              color: '#CD853F'
            }}
          >
            2026
          </div>
        </div>

        {/* Vintage loading bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="h-2 bg-amber-900 rounded-full shadow-inner border border-amber-600">
            <div className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-loading-bar shadow-lg"></div>
          </div>
        </div>

        {/* Loading text with typewriter effect */}
        <div 
          className="text-xl font-semibold animate-pulse"
          style={{ 
            color: '#DDD',
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
          }}
        >
          Preparing the Ultimate Tech Experience...
        </div>

        {/* Decorative gears */}
        <div className="mt-8 flex justify-center space-x-8">
          <div className="w-8 h-8 border-4 border-amber-500 rounded-full animate-spin-slow"></div>
          <div className="w-6 h-6 border-3 border-amber-400 rounded-full animate-spin-reverse"></div>
          <div className="w-8 h-8 border-4 border-amber-500 rounded-full animate-spin-slow"></div>
        </div>
      </div>
    </div>
  );
}
