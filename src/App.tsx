import React, { useState, useEffect } from 'react';
import { ParallaxBackground } from './components/ParallaxBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutCapabilities } from './components/AboutCapabilities';
import { EvolutionTimeline } from './components/EvolutionTimeline';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { FeaturedWorks } from './components/FeaturedWorks';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { playMicroClick } from './utils/audio';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const handlePlayClickSound = () => {
    if (soundEnabled) {
      playMicroClick();
    }
  };

  const handleToggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    if (newState) {
      playMicroClick();
    }
  };

  // Setup global smooth reveal observer for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0F17] text-[#F4F4F6] font-body selection:bg-[#00F2FE]/30 selection:text-[#00F2FE] overflow-x-hidden">
      {/* 1. Multi-layer Parallax Background */}
      <ParallaxBackground />

      {/* 2. Floating Glassmorphic Header Navigation */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        playClickSound={handlePlayClickSound}
      />

      {/* 3. Main Content Flow */}
      <main className="relative z-10 space-y-16 sm:space-y-24">
        {/* Hero Section */}
        <HeroSection playClickSound={handlePlayClickSound} />

        {/* About & Core Capabilities Grid */}
        <AboutCapabilities playClickSound={handlePlayClickSound} />

        {/* Evolution Journey Timeline */}
        <EvolutionTimeline playClickSound={handlePlayClickSound} />

        {/* Comparison Matrix: Traditional Dev vs. Anzil's Vibe Coding OS */}
        <ComparisonMatrix playClickSound={handlePlayClickSound} />

        {/* Curated Featured Works Reel */}
        <FeaturedWorks playClickSound={handlePlayClickSound} />

        {/* Testimonials & Industry Proof */}
        <TestimonialsSection />

        {/* Contact & Dispatch Matrix */}
        <ContactSection playClickSound={handlePlayClickSound} />
      </main>
    </div>
  );
}
