import { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import HeroScrollWrapper from './components/HeroScrollWrapper';
import ImageGridSection from './components/ImageGridSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import WhatWeDo from './components/WhatWeDo';
import FastTrack from './components/FastTrack';
import SkillsSection from './components/SkillsSection';
import PlacesSection from './components/PlacesSection';
import StoriesSection from './components/StoriesSection';
import NewsSection from './components/NewsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  const heroTargetRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        const progress = Math.min(window.scrollY / (vh * 2.5), 1);
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

  return (
    <div className="min-h-screen">
      <Header />
      <HeroScrollWrapper heroTargetRef={heroTargetRef}>
        {(scrollProgress) => (
          <ImageGridSection 
            heroTargetRef={heroTargetRef} 
            scrollProgress={scrollProgress}
          />
        )}
      </HeroScrollWrapper>
      <StatsSection />
      <ServicesSection />
      <WhatWeDo />
      <FastTrack />
      <SkillsSection />
      <PlacesSection />
      <StoriesSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;