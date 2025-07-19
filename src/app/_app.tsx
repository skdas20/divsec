import '@/app/globals.css';
import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return <Component {...pageProps} />;
}
