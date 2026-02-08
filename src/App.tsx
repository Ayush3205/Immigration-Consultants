import Header from './components/Header';
import Hero from './components/Hero';
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
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ImageGridSection />
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
