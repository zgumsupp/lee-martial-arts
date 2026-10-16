import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  playClickSound: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ playClickSound }) => {
  const { t } = useLanguage();
  const [isEntered, setIsEntered] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Live Production Bypass: Programmatic video.play() on mount to guarantee autoplay on Vercel
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn('Hero video autoplay notice:', err);
      });
    }
  }, []);

  // Trigger smooth left-to-right entrance animation on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntered(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end items-center relative pt-20 sm:pt-24 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 z-10 overflow-hidden bg-transparent"
    >
      {/* ========================================================================= */}
      {/* 1. HERO BACKGROUND VIDEO & AMBIENT NEON GLOW LAYER                         */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Native HTML5 Video Background Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            {...({ 'webkit-playsinline': 'true' } as any)}
            preload="auto"
            controls={false}
            style={{
              pointerEvents: 'none',
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
            src="/hero-bg.mp4"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Deep dark tint overlay ensuring white text & neon elements stay 100% crisp and readable */}
        <div className="absolute inset-0 bg-[#070B14]/45 backdrop-blur-[0.5px] pointer-events-none" />

        {/* Ambient Cyan & Purple Glowing Nebulas */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[1100px] h-[550px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,242,254,0.12)_0%,rgba(168,85,247,0.08)_45%,transparent_75%)] blur-3xl" />
        <div className="absolute top-12 left-10 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(0,242,254,0.1)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-16 right-10 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,rgba(0,242,254,0.06)_50%,transparent_70%)] blur-3xl" />

        {/* Soft Vignette & Seamless Transition Blend Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#050811_95%)] opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-36 pointer-events-none z-10 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTENT WRAPPER - CLEAN WHITE & BRIGHT NEON COLORS                */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-3xl mx-auto w-full mt-auto mb-1 sm:mb-2 md:mb-3 flex flex-col items-center justify-center text-center">
        {/* Transparent Container: Clean and unblocked, letting the background video play gracefully behind */}
        <div className="relative bg-transparent w-full flex flex-col items-center justify-center pt-20 sm:pt-32 md:pt-44 pb-1 sm:pb-2">
          {/* Editorial Display Heading: ANZIL (Clean White with Cyan Glow, Slide-Right Entrance) */}
          <div
            className={`relative z-20 mb-2.5 sm:mb-3 select-none transition-all duration-1000 ease-out delay-200 ${
              isEntered
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-24'
            }`}
          >
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-[0.14em] text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] drop-shadow-[0_0_40px_rgba(0,242,254,0.35)]">
              ANZIL
            </h1>
            <div className="absolute -inset-x-12 -inset-y-8 bg-gradient-to-r from-[#00F2FE]/0 via-[#00F2FE]/15 to-[#00F2FE]/0 blur-3xl -z-10 pointer-events-none" />
          </div>

          {/* Persona & Subtitle Pill (Clean White Text on Glass Capsule) */}
          <div
            className={`relative z-20 flex items-center justify-center mb-3 sm:mb-4 transition-all duration-1000 ease-out delay-350 ${
              isEntered
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-16'
            }`}
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.7)] max-w-full">
              <span className="text-[#00F2FE] text-[11px] sm:text-xs flex-shrink-0 animate-bounce">
                ⚡
              </span>
              <p className="text-[11px] sm:text-xs font-medium text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {t.hero.pill}
              </p>
            </div>
          </div>

          {/* Bio Statement (Clean White / Light Gray with High Contrast) */}
          <p
            className={`relative z-20 max-w-xl mx-auto text-xs sm:text-sm text-gray-200 leading-relaxed mb-5 sm:mb-6 font-normal drop-shadow-[0_2px_14px_rgba(0,0,0,0.98)] transition-all duration-1000 ease-out delay-500 ${
              isEntered
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            {t.hero.bio}
          </p>

          {/* Interactive CTA Buttons with Magnetic Pull (High Z-Index & Full Interactivity) */}
          <div
            className={`relative z-30 flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-1000 ease-out delay-650 ${
              isEntered
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <MagneticButton
              id="hero-cta-explore-journey"
              href="#journey"
              onClick={playClickSound}
              variant="primary"
              className="px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm uppercase tracking-wider font-bold group shadow-[0_10px_30px_rgba(0,242,254,0.35)]"
            >
              <span>{t.hero.exploreBtn}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            <MagneticButton
              id="hero-cta-view-works"
              href="#works"
              onClick={playClickSound}
              variant="outline"
              className="px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-semibold tracking-wide shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <span>{t.hero.worksBtn}</span>
              <Sparkles className="w-3.5 h-3.5 ml-2 text-[#00F2FE]" />
            </MagneticButton>
          </div>

          {/* Quick Stats Strip (Dark Glass with Clean White & Bright Neon Numbers) */}
          <div
            className={`relative z-20 pt-4 sm:pt-5 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-2xl mx-auto text-left sm:text-center transition-all duration-1000 ease-out delay-800 ${
              isEntered
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white/[0.04] border border-white/10 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
              <span className="text-base sm:text-lg md:text-xl font-black font-mono text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                10<span className="text-[#00F2FE]">x</span>
              </span>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/60 mt-0.5 font-medium">
                {t.hero.stat1Label}
              </p>
            </div>
            <div className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white/[0.04] border border-white/10 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
              <span className="text-base sm:text-lg md:text-xl font-black font-mono text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                100<span className="text-[#00F2FE]">%</span>
              </span>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/60 mt-0.5 font-medium">
                {t.hero.stat2Label}
              </p>
            </div>
            <div className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white/[0.04] border border-white/10 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
              <span className="text-base sm:text-lg md:text-xl font-black font-mono text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                15<span className="text-[#00F2FE]">+</span>
              </span>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/60 mt-0.5 font-medium">
                {t.hero.stat3Label}
              </p>
            </div>
            <div className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white/[0.04] border border-white/10 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
              <span className="text-base sm:text-lg md:text-xl font-black font-mono text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                24<span className="text-[#00F2FE]">/</span>7
              </span>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/60 mt-0.5 font-medium">
                {t.hero.stat4Label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
