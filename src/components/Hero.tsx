'use client';

import { useState } from 'react';

export default function Hero() {
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

  return (
    <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/Hero Section.jpg')"
        }}
      />
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
        <button className="bg-[#ff4500] bg-transparent border-2 border-[#ff4500]/80 hover:border-[#ff4500] text-white text-base font-medium px-9 py-1 rounded-full transition-all duration-300 hover:text-white shadow-lg hover:shadow-none">
          Book a Demo
        </button>
      </div>
    </section>
  );
}