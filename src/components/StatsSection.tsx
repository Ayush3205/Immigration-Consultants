'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StatsSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const stat3Ref = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const overlayGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !paragraphRef.current || !statsRef.current || 
        !stat1Ref.current || !stat2Ref.current || !stat3Ref.current ||
        !imageContainerRef.current || !overlayGridRef.current) return;

    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate paragraph
    gsap.fromTo(
      paragraphRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Counter animation for stat 1 (140,000+)
    const counter1 = { value: 0 };
    gsap.to(counter1, {
      value: 140000,
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: stat1Ref.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      onUpdate: function() {
        if (stat1Ref.current) {
          stat1Ref.current.textContent = Math.floor(counter1.value).toLocaleString() + '+';
        }
      }
    });

    // Counter animation for stat 2 (1.9m+)
    const counter2 = { value: 0 };
    gsap.to(counter2, {
      value: 1.9,
      duration: 2.5,
      delay: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: stat2Ref.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      onUpdate: function() {
        if (stat2Ref.current) {
          stat2Ref.current.textContent = counter2.value.toFixed(1) + 'm+';
        }
      }
    });

    // Counter animation for stat 3 (13,000+)
    const counter3 = { value: 0 };
    gsap.to(counter3, {
      value: 13000,
      duration: 2.5,
      delay: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: stat3Ref.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      onUpdate: function() {
        if (stat3Ref.current) {
          stat3Ref.current.textContent = Math.floor(counter3.value).toLocaleString() + '+';
        }
      }
    });

    // Animate stat descriptions
    const statDescriptions = statsRef.current.querySelectorAll('.stat-description');
    gsap.fromTo(
      statDescriptions,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate background image
    gsap.fromTo(
      imageContainerRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate overlay grid images with stagger
    const overlayImages = overlayGridRef.current.children;
    gsap.fromTo(
      overlayImages,
      { scale: 0, opacity: 0, rotation: -10 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: overlayGridRef.current,
          start: 'top 80%',
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
    <section className="py-15 bg-[#FFFDF6]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-[45px] mb-6 leading-[1.15] tracking-[-0.015em] font-['Poppins']"
            >
              <span className="text-gray-800 font-medium">Why </span>
              <span className="bg-gradient-to-r from-[#ff4500] to-[#ff6b35] bg-clip-text text-transparent font-['Poppins'] italic">
                Australia
              </span>
              <span className="text-gray-800 font-medium"> is the</span>
              <br />
              <span className="text-gray-800 font-medium">Global Destination of</span>
              <br />
              <span className="text-gray-800 font-medium">Choice</span>
            </h2>
            
            <p 
              ref={paragraphRef}
              className="text-gray-600 mb-12 leading-relaxed text-[15px]"
            >
              With 42 top universities, studying in Australia offers high-quality education, career opportunities, and cultural experience. It is known for its globally recognized degrees, research facilities, and strong industry connections, making it one of the top destinations for international students.
            </p>

            <div ref={statsRef} className="grid grid-cols-2 gap-8">
              <div>
                <div 
                  ref={stat1Ref}
                  className="text-5xl font-bold text-[#ff4500] mb-2"
                >
                  0+
                </div>
                <div className="stat-description text-gray-700 text-sm">skilled and family visas granted</div>
              </div>
              
              <div>
                <div 
                  ref={stat2Ref}
                  className="text-5xl font-bold text-[#ff4500] mb-2"
                >
                  0m+
                </div>
                <div className="stat-description text-gray-700 text-sm">temporary visas granted</div>
              </div>
              
              <div className="col-span-2">
                <div 
                  ref={stat3Ref}
                  className="text-5xl font-bold text-[#ff4500] mb-2"
                >
                  0+
                </div>
                <div className="stat-description text-gray-700 text-sm">humanitarian visas granted</div>
              </div>
            </div>
          </div>
          
          <div ref={imageContainerRef} className="relative w-full">
            <img
              src="/Stats Section background image.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[65%]">
              <div ref={overlayGridRef} className="grid grid-cols-2 grid-rows-2 h-full">
                <img
                  src="Stats Section Overlay image top left.png"
                  alt="Overlay 1 top left"
                  className="w-full h-full object-cover"
                />
                
                <img
                  src="/Stats Section Overlay image top right.png"
                  alt="Overlay 2 top right"
                  className="w-full h-full object-cover"
                />
                
                <img
                  src="/Stats Section Overlay image bottom left.png"
                  alt="Overlay 3 bottom left"
                  className="w-full h-full object-cover"
                />
                
                <img
                  src="Stats Section Overlay image bottom right.png"
                  alt="Overlay 4 bottom right"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}