'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});



export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Adjust the smoothness
      smooth: true,
      smoothWheel: true,
      smoothTouch: true,
    });

    // Request animation frame for Lenis
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup Lenis on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
