'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
}

export default function ScrollAnimation({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, isVisible]);

  const getInitialStyles = () => {
    switch (animation) {
      case 'fadeInUp':
        return 'opacity-0 translate-y-12';
      case 'fadeInLeft':
        return 'opacity-0 -translate-x-8';
      case 'fadeInRight':
        return 'opacity-0 translate-x-8';
      case 'scaleIn':
        return 'opacity-0 scale-95';
      default:
        return 'opacity-0 translate-y-12';
    }
  };

  const getVisibleStyles = () => {
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={elementRef}
      className={`
        transition-all duration-700 ease-out will-change-transform
        ${isVisible ? getVisibleStyles() : getInitialStyles()}
        ${className}
      `}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
}
