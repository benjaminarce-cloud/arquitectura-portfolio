'use client';

import { useEffect, useState } from 'react';

export function ArchitectsMark() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show mark after scrolling past 30% of viewport
      if (window.scrollY > window.innerHeight * 0.3) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed left-8 top-1/2 -translate-y-1/2 w-px bg-[#d4a574] z-50
        hidden md:block
        transition-all duration-700 ease-out
        ${isVisible ? 'h-[200px]' : 'h-0'}
      `}
      style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
    />
  );
}
