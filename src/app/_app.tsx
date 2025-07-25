import '@/app/globals.css';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
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

  return <Component {...pageProps} />;
}
