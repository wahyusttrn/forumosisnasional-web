'use client';

import type React from 'react';

import { useEffect, useRef } from 'react';

interface ParallaxHeroProps {
  children: React.ReactNode;
  imageUrl: string;
  alt: string;
}

export default function ParallaxHero({ children, imageUrl, alt }: ParallaxHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current) return;

      const scrolled = window.pageYOffset;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollProgress = Math.min(scrolled / heroHeight, 1);

      // Parallax effect: move image slower than scroll
      const parallaxOffset = scrolled * 0.5;
      imageRef.current.style.transform = `translate3d(0, ${parallaxOffset}px, 0) scale(1.1)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src={imageUrl || '/placeholder.svg'}
          alt={alt}
          className="w-full h-full object-cover will-change-transform"
          style={{ transform: 'translate3d(0, 0, 0) scale(1.1)' }}
        />
        <div className="absolute inset-0 bg-blue-900/50"></div>
      </div>
      {children}
    </section>
  );
}
