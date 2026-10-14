import React, { useState } from 'react';
import {
  Star,
  Quote,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Layers,
  SlidersHorizontal,
  Play,
  Pause,
  Award,
  TrendingUp,
} from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  playClickSound?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ playClickSound }) => {
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const handleToggleMode = (mode: 'marquee' | 'grid') => {
    if (playClickSound) playClickSound();
    setViewMode(mode);
  };

  const handleTogglePause = () => {
    if (playClickSound) playClickSound();
    setIsPaused(!isPaused);
  };

  const renderReviewCard = (t: Testimonial, idx: number, isGrid = false) => {
    const isPurple = idx % 2 === 1;

    return (
      <div
        key={`${t.id}-${idx}`}
        className={`relative group rounded-2xl p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${
          isGrid ? 'w-full' : 'w-[360px] sm:w-[420px] shrink-0'
        } ${
          isPurple
            ? 'bg-[#070B14]/40 border border-[#A855F7]/25 hover:border-[#A855F7]/70 hover:bg-[#070B14]/55 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:-translate-y-1.5'
            : 'bg-[#070B14]/40 border border-[#00F2FE]/25 hover:border-[#00F2FE]/70 hover:bg-[#070B14]/55 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(0,242,254,0.25)] hover:-translate-y-1.5'
        }`}
      >
        {/* Top Specular Glint Line */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-t-2xl" />

        {/* Cyber Corner HUD Brackets */}
        <span className="absolute top-2.5 left-2.5 text-[9px] font-mono text-white/20 pointer-events-none select-none">
          +
        </span>
        <span className="absolute top-2.5 right-2.5 text-[9px] font-mono text-white/20 pointer-events-none select-none">
          +
        </span>

        <div>
          {/* Card Top: Small Glowing Stars & Domain Badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-1.5">
              {/* 5 Small Glowing Stars */}
              <div className="flex items-center gap-1">
                {[...Array(t.rating)].map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24] drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                  />
                ))}
              </div>
              <span className="font-mono text-xs font-bold text-amber-300 ml-1">5.0</span>
            </div>

            {/* Project Domain Badge */}
            <span
              className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${
                isPurple
                  ? 'bg-[#A855F7]/10 border-[#A855F7]/30 text-[#C084FC]'
                  : 'bg-[#00F2FE]/10 border-[#00F2FE]/30 text-[#00F2FE]'
              }`}
            >
              {t.projectDomain || 'SaaS Flagship'}
            </span>
          </div>

          {/* Quote Body with Cyber Quote Watermark */}
          <div className="relative mb-5">
            <Quote
              className={`absolute -top-2 -left-2 w-8 h-8 pointer-events-none opacity-10 ${
                isPurple ? 'text-[#C084FC]' : 'text-[#00F2FE]'
              }`}
            />
            <p className="text-sm text-white/90 leading-relaxed font-sans relative z-10 italic pl-1">
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>

          {/* Verified Impact Highlight */}
          <div
            className={`p-3 rounded-xl border backdrop-blur-md mb-6 ${
              isPurple
                ? 'bg-[#A855F7]/[0.07] border-[#A855F7]/25 text-[#E9D5FF]'
                : 'bg-[#00F2FE]/[0.07] border-[#00F2FE]/25 text-[#CFFAFE]'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <Sparkles
                className={`w-3.5 h-3.5 ${isPurple ? 'text-[#C084FC]' : 'text-[#00F2FE]'}`}
              />
              <span
                className={`text-[10px] font-mono uppercase tracking-wider font-bold ${
                  isPurple ? 'text-[#C084FC]' : 'text-[#00F2FE]'
                }`}
              >
                VERIFIED OUTCOME
              </span>
            </div>
            <p className="text-xs text-white/90 font-medium leading-snug">
              {t.impact}
            </p>
          </div>
        </div>

        {/* Author Profile Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={t.avatar}
                alt={t.clientName}
                className={`w-11 h-11 rounded-full object-cover border ${
                  isPurple
                    ? 'border-[#A855F7]/50 shadow-[0_0_12px_rgba(168,85,247,0.35)]'
                    : 'border-[#00F2FE]/50 shadow-[0_0_12px_rgba(0,242,254,0.35)]'
                }`}
                referrerPolicy="no-referrer"
              />
              <div
                className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#070B14] flex items-center justify-center`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${isPurple ? 'bg-[#A855F7]' : 'bg-[#00F2FE]'}`}
                />
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>{t.clientName}</span>
                <CheckCircle2
                  className={`w-3.5 h-3.5 flex-shrink-0 ${
                    isPurple ? 'text-[#C084FC]' : 'text-[#00F2FE]'
                  }`}
                />
              </h4>
              <p className="text-xs text-white/50 leading-tight">
                {t.role} • <span className="text-white/75">{t.company}</span>
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-white/[0.03] border border-white/10 text-[10px] font-mono text-white/40">
            <ShieldCheck className="w-3 h-3 text-[#00F2FE]" />
            <span>VERIFIED</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="reviews" className="relative z-10 scroll-mt-28 py-16 sm:py-24 overflow-hidden bg-transparent">
      {/* Background ambient glowing orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-gradient-to-b from-[#00F2FE]/10 via-[#A855F7]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-4 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
            <Award className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>VERIFIED REPUTATION &amp; CLIENT PROOF</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-[0.08em] uppercase">
            CLIENT REVIEWS &amp; <span className="bg-gradient-to-r from-[#00F2FE] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">TESTIMONIALS</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A0A0AB] max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
            Direct feedback from international e-commerce brand owners, marketplace sellers, and store founders who partnered with Anzil for growth.
          </p>

          {/* Social Proof Metric Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 text-xs font-mono text-white/70">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
              <Star className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />
              <span className="text-white font-bold">5.0 / 5.0</span>
              <span className="text-white/40">Average Rating</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00F2FE]" />
              <span className="text-white font-bold">100%</span>
              <span className="text-white/40">On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
              <TrendingUp className="w-3.5 h-3.5 text-[#A855F7]" />
              <span className="text-white font-bold">3+ Years</span>
              <span className="text-white/40">E-Com Experience</span>
            </div>
          </div>

          {/* Controls: Marquee Stream vs. Stacked Grid Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
              <button
                onClick={() => handleToggleMode('marquee')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  viewMode === 'marquee'
                    ? 'bg-[#00F2FE]/20 text-[#00F2FE] border border-[#00F2FE]/40 shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Infinite Marquee</span>
              </button>

              <button
                onClick={() => handleToggleMode('grid')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#A855F7]/20 text-[#C084FC] border border-[#A855F7]/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Stacked Grid</span>
              </button>
            </div>

            {/* Play/Pause Button for Marquee */}
            {viewMode === 'marquee' && (
              <button
                onClick={handleTogglePause}
                title={isPaused ? 'Resume scrolling' : 'Pause scrolling'}
                className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-white/70 hover:text-white hover:border-white/30 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-xl"
              >
                {isPaused ? (
                  <>
                    <Play className="w-3 h-3 text-[#00F2FE]" />
                    <span className="hidden sm:inline">Resume</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-amber-400" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* View 1 & 2: Reviews Container with Staggered Scroll Reveal */}
        <div className="reveal-on-scroll stagger-delay-2">
          {viewMode === 'marquee' ? (
            <div className="relative w-full overflow-hidden marquee-pause py-4">
              {/* Left and Right Cosmic Edge Vignette Fade Masks */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#070B14] via-[#070B14]/80 to-transparent z-20" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#070B14] via-[#070B14]/80 to-transparent z-20" />

              {/* Infinite Marquee Track (Seamless Duplicate for 100% Looping) */}
              <div
                className="animate-marquee-track flex gap-6"
                style={{
                  animationPlayState: isPaused ? 'paused' : undefined,
                }}
              >
                {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) =>
                  renderReviewCard(t, idx, false)
                )}
              </div>

              {/* Subtle bottom helper note */}
              <p className="text-center text-[11px] font-mono text-white/35 mt-4">
                Hover over any card to pause stream • All testimonials verified via LinkedIn and GitHub
              </p>
            </div>
          ) : (
            /* View 2: Beautifully Stacked Proof Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {TESTIMONIALS.map((t, idx) => renderReviewCard(t, idx, true))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
