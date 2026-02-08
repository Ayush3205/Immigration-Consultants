'use client';

import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [mousePos1, setMousePos1] = useState({ x: -100, index: -10 });
  const [mousePos2, setMousePos2] = useState({ x: -100, index: -10 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const text1 = "Migration simplified.";
  const text2 = "Dreams amplified.";

  // Handle scroll for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const heroHeight = heroRef.current.offsetHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / heroHeight, 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLSpanElement>,
    setMousePos: (pos: { x: number; index: number }) => void,
    text: string
  ) => {
    const span = e.currentTarget;
    const rect = span.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const charWidth = rect.width / text.length;
    const index = Math.floor(x / charWidth);
    
    setMousePos({ x, index });
  };

  const getCharStyle = (index: number, hoveredIndex: number) => {
    const distance = Math.abs(index - hoveredIndex);
    
    if (distance === 0) {
      return {
        fontWeight: 900,
        transform: 'scale(1.15)',
      };
    } else if (distance === 1) {
      return {
        fontWeight: 850,
        transform: 'scale(1.08)',
      };
    } else if (distance === 2) {
      return {
        fontWeight: 800,
        transform: 'scale(1.04)',
      };
    } else {
      return {
        fontWeight: 700,
        transform: 'scale(1)',
      };
    }
  };

  // Calculate transform based on scroll
  const scale = 1 - (scrollProgress * 0.5); // Shrinks to 50%
  const opacity = 1 - scrollProgress;

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden pt-28"
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Fallback image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-60 -z-10"
        style={{
          backgroundImage: "url('/Hero Section.jpg')"
        }}
      /> */}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl mb-6 leading-tight select-none">
          <span
            className="block cursor-pointer"
            onMouseMove={(e) => handleMouseMove(e, setMousePos1, text1)}
            onMouseLeave={() => setMousePos1({ x: -100, index: -10 })}
          >
            {text1.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block transition-all duration-150 ease-out"
                style={getCharStyle(index, mousePos1.index)}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
          <span
            className="block cursor-pointer"
            onMouseMove={(e) => handleMouseMove(e, setMousePos2, text2)}
            onMouseLeave={() => setMousePos2({ x: -100, index: -10 })}
          >
            {text2.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block transition-all duration-150 ease-out"
                style={getCharStyle(index, mousePos2.index)}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        </h1>
        <button className="bg-[#ff4500] bg-transparent border-2 border-[#ff4500]/80 hover:border-[#ff4500] text-white text-base font-medium px-9 py-3 rounded-full transition-all duration-300 hover:bg-[#ff4500] shadow-lg hover:shadow-xl">
          Book a Demo
        </button>
      </div>
    </section>
  );
}