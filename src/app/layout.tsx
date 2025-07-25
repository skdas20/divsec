"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useRef, useEffect } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.5;
    }

    let lastScrollY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (!video) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const maxScroll = document.body.scrollHeight - window.innerHeight;
          const scrollFraction = maxScroll > 0 ? window.scrollY / maxScroll : 0;
          // Scrub video based on scroll position (play back and forth)
          video.currentTime = scrollFraction * video.duration;
          video.pause();
          ticking = false;
        });
        ticking = true;
      }
      // After scroll ends, resume slow forward playback
      clearTimeout((window as any)._scrollTimeout);
      (window as any)._scrollTimeout = setTimeout(() => {
        if (video) {
          video.playbackRate = 0.5;
          video.play();
        }
      }, 100);
    };

    window.addEventListener('scroll', onScroll);

    // On mount, ensure video plays at 0.5x
    if (video) {
      video.playbackRate = 0.5;
      video.play();
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout((window as any)._scrollTimeout);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <video
          ref={videoRef}
          src="/assets/back.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: -1,
            pointerEvents: 'none',
          }}
        />
        {children}
      </body>
    </html>
  );
}
