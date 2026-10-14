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
import { GlobalPixieDust } from './components/GlobalPixieDust';
import { CuteChatbot } from './components/CuteChatbot';
import { ScrollDragonCompanion } from './components/ScrollDragonCompanion';
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

  // Ultra-Smooth Scroll-Driven Reveal Observer
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      elements.forEach((el) => revealObserver.observe(el));
    };

    observeAll();

    // Dynamically observe filtered or newly mounted cards
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Initial check for viewport elements
    const rafId = requestAnimationFrame(() => {
      observeAll();
    });

    // Safety fallback: ensure all elements are visible after 3s
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
        el.classList.add('is-revealed');
      });
    }, 3000);

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
      cancelAnimationFrame(rafId);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0F17] text-[#F4F4F6] font-body selection:bg-[#00F2FE]/30 selection:text-[#00F2FE] overflow-x-hidden">
      {/* Global Interactive Pixie Dust Cursor Trail */}
      <GlobalPixieDust />

      {/* 1. Multi-layer Parallax Background */}
      <ParallaxBackground />

      {/* 2. Floating Glassmorphic Header Navigation */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        playClickSound={handlePlayClickSound}
      />

      {/* 3. Main Content Flow */}
      <main className="relative z-10">
        {/* Dedicated Background Layer for Animated Dragon Companion (Behind cards and text, in front of background) */}
        <ScrollDragonCompanion />

        {/* Hero Section */}
        <HeroSection playClickSound={handlePlayClickSound} />

        {/* Global Background Wrapper for All Sections BELOW the Hero Section */}
        <div className="relative [clip-path:inset(0)]">
          {/* Seamless Blend Layer between Hero Video & Lower Background */}
          <div className="absolute top-0 inset-x-0 h-36 pointer-events-none z-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />

          {/* Global Fixed Background Image Layer */}
          <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 select-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_160px,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_160px,black_100%)]">
            {/* Static HTML background image locked in viewport */}
            <img
              src="https://i.ibb.co/0R0Mygkz/web.png"
              alt="web"
              className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none border-0"
            />

            {/* CSS fixed background attachment fallback */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 pointer-events-none"
              style={{
                backgroundImage: "url('https://i.ibb.co/0R0Mygkz/web.png')",
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />

            {/* Subtle dark tint overlay ensuring white text & neon cards stay 100% crisp and readable */}
            <div className="absolute inset-0 bg-[#070B14]/60 pointer-events-none" />
          </div>

          {/* Lower Content Flow (Completely Transparent Sections) */}
          <div className="relative z-30 space-y-16 sm:space-y-24">
            {/* About & Core Capabilities Grid */}
            <AboutCapabilities playClickSound={handlePlayClickSound} />

            {/* Evolution Journey Timeline */}
            <EvolutionTimeline playClickSound={handlePlayClickSound} />

            {/* Comparison Matrix: Traditional Dev vs. Anzil's Vibe Coding OS */}
            <ComparisonMatrix playClickSound={handlePlayClickSound} />

            {/* Curated Featured Works Reel */}
            <FeaturedWorks playClickSound={handlePlayClickSound} />

            {/* Testimonials & Industry Proof */}
            <TestimonialsSection playClickSound={handlePlayClickSound} />

            {/* Contact & Dispatch Matrix */}
            <ContactSection playClickSound={handlePlayClickSound} />
          </div>
        </div>
      </main>

      {/* Floating Interactive Cute Anime Chatbot Widget (Position Fixed Bottom-Right) */}
      <CuteChatbot playClickSound={handlePlayClickSound} />
    </div>
  );
}
