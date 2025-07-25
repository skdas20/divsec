"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Loading screen will auto-hide after 6 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return <>{children}</>;
}
