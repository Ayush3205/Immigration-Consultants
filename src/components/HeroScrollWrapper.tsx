'use client';

import { useState, useEffect, useRef } from 'react';

type HeroScrollWrapperProps = {
  heroTargetRef: React.RefObject<HTMLDivElement>;
  children: (scrollProgress: number) => React.ReactNode;
};

export default function HeroScrollWrapper({ heroTargetRef, children }: HeroScrollWrapperProps) {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = (): void => {
      rafId = requestAnimationFrame(() => {
        const vh: number = window.innerHeight;
        const scrolled: number = window.scrollY;
        const scrollRange: number = vh * 1.2;
        const progress: number = Math.min(Math.max(scrolled / scrollRange, 0), 1);
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!heroTargetRef?.current || !videoContainerRef.current) return;

    const container: HTMLDivElement = videoContainerRef.current;
    const target: HTMLDivElement = heroTargetRef.current;
    
    const targetRect: DOMRect = target.getBoundingClientRect();
    const vh: number = window.innerHeight;
    const vw: number = window.innerWidth;

    const targetWidth: number = targetRect.width;
    const targetHeight: number = targetRect.height;

    const sizeProgress: number = Math.min(scrollProgress / 0.85, 1);

    if (scrollProgress >= 0.85) {
      const scrollTop: number = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft: number = window.pageXOffset || document.documentElement.scrollLeft;
      
      const absoluteTop: number = targetRect.top + scrollTop;
      const absoluteLeft: number = targetRect.left + scrollLeft;
      
      container.style.position = 'absolute';
      container.style.top = `${absoluteTop}px`;
      container.style.left = `${absoluteLeft}px`;
      container.style.width = `${targetWidth}px`;
      container.style.height = `${targetHeight}px`;
      container.style.borderRadius = '16px';
    } else {
      const targetCenterX: number = targetRect.left + targetRect.width / 2;
      const targetCenterY: number = targetRect.top + targetRect.height / 2;

      const startTop: number = 0;
      const startLeft: number = 0;
      const startWidth: number = vw;
      const startHeight: number = vh;

      const endTop: number = targetCenterY - (targetHeight / 2);
      const endLeft: number = targetCenterX - (targetWidth / 2);
      const endWidth: number = targetWidth;
      const endHeight: number = targetHeight;

      const currentTop: number = startTop + (endTop - startTop) * sizeProgress;
      const currentLeft: number = startLeft + (endLeft - startLeft) * sizeProgress;
      const currentWidth: number = startWidth + (endWidth - startWidth) * sizeProgress;
      const currentHeight: number = startHeight + (endHeight - startHeight) * sizeProgress;
      const borderRadius: number = sizeProgress * 16;

      container.style.position = 'fixed';
      container.style.top = `${currentTop}px`;
      container.style.left = `${currentLeft}px`;
      container.style.width = `${currentWidth}px`;
      container.style.height = `${currentHeight}px`;
      container.style.borderRadius = `${borderRadius}px`;
    }

  }, [scrollProgress, heroTargetRef]);

  const textOpacity: number = Math.max(1 - scrollProgress * 2, 0);
  const backgroundOpacity: number = scrollProgress;

  return (
    <>
      {/* Scroll container */}
      <div 
        className="relative" 
        style={{ 
          minHeight: '120vh',
          marginBottom: '-20vh'
        }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* White background */}
          <div 
            className="absolute inset-0 bg-white z-30 transition-opacity duration-100"
            style={{
              opacity: backgroundOpacity,
            }}
          />
        </div>
      </div>

      {/* Video container - positioned independently */}
      <div
        ref={videoContainerRef}
        className="overflow-hidden z-[40] will-change-transform"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: scrollProgress >= 0.85 ? 10 : 40,
        }}
      >
        {/* Hero Video - ALWAYS PLAYING */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-gray-900/40" />

        {/* Text content - fades out early - ON TOP OF VIDEO */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10 transition-opacity duration-200"
          style={{
            opacity: textOpacity,
            pointerEvents: textOpacity < 0.3 ? 'none' : 'auto',
          }}
        >
          <h1 className="mb-6 max-w-4xl select-none text-center text-5xl font-medium leading-tight text-white md:text-6xl">
            <span className="block">Migration simplified.</span>
            <span className="block">Dreams amplified.</span>
          </h1>
          <button className="rounded-full border-2 border-[#ff4500]/80 bg-transparent px-9 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:border-[#ff4500] hover:bg-[#ff4500] hover:shadow-xl">
            Book a Demo
          </button>
        </div>
      </div>

      {/* Grid section */}
      {children(scrollProgress)}
    </>
  );
}
