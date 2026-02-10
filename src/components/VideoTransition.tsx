'use client';

import { useEffect, useRef, useState } from 'react';

type VideoTransitionProps = {
  scrollProgress: number;
  heroTargetRef: React.RefObject<HTMLDivElement>;
};

export default function VideoTransition({ scrollProgress, heroTargetRef }: VideoTransitionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStyle, setVideoStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const updateVideoPosition = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const target = heroTargetRef?.current;

      if (!target) {
        // Default centered position
        setVideoStyle({
          position: 'fixed',
          left: '50%',
          top: '50%',
          width: `${vw}px`,
          height: `${vh}px`,
          transform: 'translate(-50%, -50%)',
          borderRadius: '0px',
          zIndex: 100,
        });
        return;
      }

      const rect = target.getBoundingClientRect();
      
      // Start position (center of screen)
      const startX = vw / 2;
      const startY = vh / 2;
      const startWidth = vw;
      const startHeight = vh;
      
      // End position (grid box)
      const endX = rect.left + rect.width / 2;
      const endY = rect.top + rect.height / 2;
      const endWidth = rect.width;
      const endHeight = rect.height;

      // Interpolate based on scroll progress
      const currentX = startX + (endX - startX) * scrollProgress;
      const currentY = startY + (endY - startY) * scrollProgress;
      const currentWidth = startWidth + (endWidth - startWidth) * scrollProgress;
      const currentHeight = startHeight + (endHeight - startHeight) * scrollProgress;
      const currentRadius = scrollProgress * 16;

      setVideoStyle({
        position: 'fixed',
        left: `${currentX}px`,
        top: `${currentY}px`,
        width: `${currentWidth}px`,
        height: `${currentHeight}px`,
        transform: 'translate(-50%, -50%)',
        borderRadius: `${currentRadius}px`,
        zIndex: scrollProgress >= 0.95 ? 10 : 100,
        transition: 'z-index 0.3s ease-out',
      });
    };

    updateVideoPosition();
    window.addEventListener('resize', updateVideoPosition);
    
    return () => {
      window.removeEventListener('resize', updateVideoPosition);
    };
  }, [scrollProgress, heroTargetRef]);

  // Text opacity
  const textOpacity = Math.max(1 - scrollProgress * 2.5, 0);

  return (
    <div
      style={{
        ...videoStyle,
        overflow: 'hidden',
        willChange: 'transform, width, height',
      }}
    >
      {/* Video - ALWAYS PLAYING */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-gray-900/40" />
      
      {/* Text content */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-28"
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
  );
}