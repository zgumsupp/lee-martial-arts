import React from 'react';
import { ArrowRight, Sparkles, Code2, Terminal, Flame } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { GlobalSyncWidget } from './GlobalSyncWidget';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  playClickSound: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ playClickSound }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-36 pb-20 flex items-center justify-center z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
        {/* Main 3D Glass Card Container */}
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-18 bg-[#0E1522]/70 backdrop-blur-2xl border border-white/12 shadow-[0_30px_90px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.12)]">
          {/* Subtle Corner Accents */}
          <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-[#00F2FE]/60" />
          <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#00F2FE]/60" />
          <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-[#00F2FE]/60" />
          <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-[#00F2FE]/60" />

          {/* Top Pill: Live Sync + Status */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/30 text-[#00F2FE] text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(0,242,254,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00F2FE] shadow-[0_0_8px_#00F2FE] animate-pulse" />
              PORTFOLIO MATRIX 2026
            </div>
            <GlobalSyncWidget />
          </div>

          {/* Editorial Display Heading: ANZIL */}
          <div className="relative mb-6 select-none">
            <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E2E8F0] to-white/40 drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
              ANZIL
            </h1>
            <div className="absolute -inset-x-10 -inset-y-6 bg-gradient-to-r from-[#00F2FE]/0 via-[#00F2FE]/5 to-[#00F2FE]/0 blur-2xl -z-10 pointer-events-none" />
          </div>

          {/* Persona & Subtitle Pill */}
          <div className="min-h-[50px] flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 rounded-full bg-white/[0.04] border border-white/12 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] max-w-full">
              <span className="text-[#00F2FE] text-base sm:text-lg flex-shrink-0 animate-bounce">
                ⚡
              </span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight">
                Hi, this is ANZIL ⚡ AI Vibecoder &amp; Frontend Specialist
              </p>
            </div>
          </div>

          {/* Bio statement */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#A0A0AB] leading-relaxed mb-10 font-normal">
            Pioneering the intersection of elite frontend architecture and AI agent-driven velocity.
            Crafting luxury dark-mode web applications, high-converting digital flagships, and spatial WebGL experiences.
          </p>

          {/* Interactive CTA Buttons with Magnetic Pull */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
            <MagneticButton
              id="hero-cta-explore-journey"
              href="#journey"
              onClick={playClickSound}
              variant="primary"
              className="px-8 py-4 text-sm uppercase tracking-wider font-bold group"
            >
              <span>Explore Journey</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            <MagneticButton
              id="hero-cta-view-works"
              href="#works"
              onClick={playClickSound}
              variant="outline"
              className="px-8 py-4 text-sm font-semibold tracking-wide"
            >
              <span>View Live Works</span>
              <Sparkles className="w-4 h-4 ml-2 text-[#00F2FE]" />
            </MagneticButton>
          </div>

          {/* Quick Stats Strip */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left sm:text-center">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
                10<span className="text-[#00F2FE]">x</span>
              </span>
              <p className="text-[11px] uppercase tracking-wider text-white/50 mt-1 font-medium">
                Vibecoding Velocity
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
                100<span className="text-[#F59E0B]">/</span>100
              </span>
              <p className="text-[11px] uppercase tracking-wider text-white/50 mt-1 font-medium">
                Lighthouse Score
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
                40<span className="text-[#00F2FE]">+</span>
              </span>
              <p className="text-[11px] uppercase tracking-wider text-white/50 mt-1 font-medium">
                UI Flagships Built
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-2xl sm:text-3xl font-black font-mono text-[#22C55E] tracking-tight">
                99.9%
              </span>
              <p className="text-[11px] uppercase tracking-wider text-white/50 mt-1 font-medium">
                Zero Regression QA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
