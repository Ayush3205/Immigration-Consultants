'use client';

import { useState } from 'react';

type HeroProps = {
  scrollProgress?: number;
};

export default function Hero({ scrollProgress = 0 }: HeroProps) {
  const [mousePos1, setMousePos1] = useState({ x: -100, index: -10 });
  const [mousePos2, setMousePos2] = useState({ x: -100, index: -10 });

  const text1 = "Migration simplified.";
  const text2 = "Dreams amplified.";

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

  // Text fades faster, video stays visible
  const textOpacity = Math.max(1 - scrollProgress * 2.5, 0);

  return (
    <section className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 pt-28">
      {/* Video background - ALWAYS VISIBLE AND PLAYING */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        key="hero-video"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20" />

      {/* Text content - fades early */}
      <div 
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6"
        style={{
          opacity: textOpacity,
          pointerEvents: textOpacity < 0.3 ? 'none' : 'auto',
          transition: 'opacity 0.15s ease-out',
        }}
      >
        <h1 className="mb-6 max-w-4xl select-none text-center text-5xl font-medium leading-tight text-white md:text-6xl">
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
        <button className="rounded-full border-2 border-[#ff4500]/80 bg-transparent px-9 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:border-[#ff4500] hover:bg-[#ff4500] hover:shadow-xl">
          Book a Demo
        </button>
      </div>
    </section>
  );
}