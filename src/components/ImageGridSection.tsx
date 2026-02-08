'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ImageGridSection() {
  const topRow1Ref = useRef<HTMLDivElement>(null);
  const topRow2Ref = useRef<HTMLDivElement>(null);
  const bottomRow1Ref = useRef<HTMLDivElement>(null);
  const bottomRow2Ref = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // First section - 4 images top row
  const topImages1 = [
    { url: '/Image grid section top 1.png' },
    { url: '/Image grid section top 2.png' },
    { url: '/Image grid section top 3.png' },
    { url: '/Image grid section top 4.png' },
  ];

  // First section - 5 images bottom row
  const topImages2 = [
    { url: '/Image grid section top 5.png' },
    { url: '/Image grid section top 6.jpg' },
    { url: '/Image grid section top 7.png' },
    { url: '/Image grid section top 8.jpg' },
    { url: '/Image grid section top 9.jpg' },
  ];

  // Second section - 5 images top row
  const bottomImages1 = [
    { url: '/Image grid section bottom 1.jpg' },
    { url: '/Image grid section bottom 2.jpg' },
    { url: '/Image grid section bottom 3.png' },
    { url: '/Image grid section bottom 4.jpg' },
    { url: '/Image grid section bottom 5.jpg' },
  ];

  // Second section - 4 images bottom row
  const bottomImages2 = [
    { url: '/Image grid section bottom 6.jpg' },
    { url: '/Image grid section bottom 7.jpg' },
    { url: '/Image grid section bottom 8.jpg' },
    { url: '/Image grid section bottom 9.jpg' },
  ];

  useEffect(() => {
    // Add null checks before animating
    if (!topRow1Ref.current || !topRow2Ref.current || !bottomRow1Ref.current || !bottomRow2Ref.current || !headingRef.current) return;

    // Animate first top row (4 images)
    gsap.fromTo(
      topRow1Ref.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: topRow1Ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      topRow1Ref.current.children,
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: topRow1Ref.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate second top row (5 images)
    gsap.fromTo(
      topRow2Ref.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: topRow2Ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      topRow2Ref.current.children,
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: topRow2Ref.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate first bottom row (5 images)
    gsap.fromTo(
      bottomRow1Ref.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bottomRow1Ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      bottomRow1Ref.current.children,
      { y: -50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: bottomRow1Ref.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate second bottom row (4 images)
    gsap.fromTo(
      bottomRow2Ref.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bottomRow2Ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      bottomRow2Ref.current.children,
      { y: -50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: bottomRow2Ref.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* First Top Row - 4 images */}
        <div 
          ref={topRow1Ref}
          className="flex justify-center items-center gap-4 mb-6"
        >
          {topImages1.map((img, idx) => (
            <div
              key={idx}
              className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer flex-shrink-0"
            >
              <img
                src={img.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Second Top Row - 5 images */}
        <div 
          ref={topRow2Ref}
          className="flex justify-center items-center gap-4 mb-10"
        >
          {topImages2.map((img, idx) => (
            <div
              key={idx}
              className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer flex-shrink-0"
            >
              <img
                src={img.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Heading */}
        <h2 
          ref={headingRef}
          className="text-3xl md:text-5xl text-center mb-10 px-4"
        >
          <span className="text-gray-800 font-['Poppins'] italic font-light">
            From dreaming in your room to
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#ff4500] to-[#ff6b35] bg-clip-text text-transparent font-['Poppins'] font-bold">
            living in another country.
          </span>
        </h2>

        {/* First Bottom Row - 5 images */}
        <div 
          ref={bottomRow1Ref}
          className="flex justify-center items-center gap-4 mb-6"
        >
          {bottomImages1.map((img, idx) => (
            <div
              key={idx}
              className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer flex-shrink-0"
            >
              <img
                src={img.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Second Bottom Row - 4 images */}
        <div 
          ref={bottomRow2Ref}
          className="flex justify-center items-center gap-4"
        >
          {bottomImages2.map((img, idx) => (
            <div
              key={idx}
              className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer flex-shrink-0"
            >
              <img
                src={img.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}