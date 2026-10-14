import React, { useState, useEffect, useRef } from 'react';
import {
  Code2,
  Layers,
  Globe,
  Sparkles,
  Calendar,
  CheckCircle2,
  Zap,
  Activity,
  Terminal,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { GlassCard } from './GlassCard';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

const TIMELINE_CARD_ANIMATIONS = [
  'floatTimelineCard1 5.6s ease-in-out infinite 0s',
  'floatTimelineCard2 6.5s ease-in-out infinite 0.7s',
  'floatTimelineCard3 5.9s ease-in-out infinite 1.4s',
  'floatTimelineCard4 6.7s ease-in-out infinite 0.3s',
];

interface TimelineFallingDustProps {
  seed?: number;
}

const TimelineFallingDust: React.FC<TimelineFallingDustProps> = ({ seed = 0 }) => {
  const baseOffset = (seed * 0.75) % 4;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* Sparkle 1: 4-Point Diamond Star (Cyan) */}
      <div
        className="absolute left-[16%] top-3"
        style={{
          animation: `timelineDustFall1 4.5s ease-in-out infinite ${(0.2 + baseOffset) % 4}s`,
        }}
      >
        <svg
          className="w-2.5 h-2.5 text-[#00F2FE] drop-shadow-[0_0_8px_#00F2FE]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      {/* Sparkle 2: Luminous White Orb with Cyan Glow */}
      <div
        className="absolute left-[54%] top-5"
        style={{
          animation: `timelineDustFall2 5.0s ease-in-out infinite ${(1.8 + baseOffset) % 4}s`,
        }}
      >
        <span className="block w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#00F2FE,0_0_12px_rgba(56,189,248,0.8)]" />
      </div>

      {/* Sparkle 3: 4-Point Diamond Star (Sky Blue) */}
      <div
        className="absolute left-[80%] top-2"
        style={{
          animation: `timelineDustFall3 4.6s ease-in-out infinite ${(1.0 + baseOffset) % 4}s`,
        }}
      >
        <svg
          className="w-2 h-2 text-[#38BDF8] drop-shadow-[0_0_7px_#38BDF8]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      {/* Sparkle 4: Soft Shimmering Aqua Orb */}
      <div
        className="absolute left-[34%] top-6"
        style={{
          animation: `timelineDustFall4 5.2s ease-in-out infinite ${(2.6 + baseOffset) % 4}s`,
        }}
      >
        <span className="block w-1 h-1 rounded-full bg-[#67E8F9] shadow-[0_0_6px_#67E8F9,0_0_10px_#00F2FE]" />
      </div>
    </div>
  );
};

interface EvolutionTimelineProps {
  playClickSound: () => void;
}

export const EvolutionTimeline: React.FC<EvolutionTimelineProps> = ({ playClickSound }) => {
  const [activeStage, setActiveStage] = useState<number>(3); // Default to Stage 04 (Frontier)
  const [revealedItems, setRevealedItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll observer to trigger smooth staggered fade-in animations
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setRevealedItems(new Set(JOURNEY_MILESTONES.map((_, i) => i)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexStr = entry.target.getAttribute('data-index');
            if (indexStr !== null) {
              const index = parseInt(indexStr, 10);
              setRevealedItems((prev) => {
                const next = new Set(prev);
                next.add(index);
                return next;
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Safety fallback: ensure milestones are visible after brief delay
    const timer = setTimeout(() => {
      setRevealedItems((prev) => {
        if (prev.size === 0) {
          return new Set(JOURNEY_MILESTONES.map((_, i) => i));
        }
        return prev;
      });
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const getStageIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="journey" className="relative z-10 scroll-mt-28 py-16 sm:py-24 bg-transparent">
      {/* Scoped CSS Keyframes for Gentle Floating Timeline Cards & Automated Falling Dust */}
      <style>{`
        @keyframes floatTimelineCard1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatTimelineCard2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-11px); }
        }
        @keyframes floatTimelineCard3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes floatTimelineCard4 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes timelineDustFall1 {
          0% {
            transform: translate3d(0, 0, 0) scale(0.35) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.85;
            transform: translate3d(3px, 22px, 0) scale(1) rotate(25deg);
          }
          60% {
            opacity: 0.65;
            transform: translate3d(7px, 75px, 0) scale(0.85) rotate(60deg);
          }
          85% {
            opacity: 0.2;
          }
          100% {
            transform: translate3d(10px, 120px, 0) scale(0.3) rotate(90deg);
            opacity: 0;
          }
        }
        @keyframes timelineDustFall2 {
          0% {
            transform: translate3d(0, 0, 0) scale(0.3) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.9;
            transform: translate3d(-3px, 28px, 0) scale(1) rotate(35deg);
          }
          65% {
            opacity: 0.6;
            transform: translate3d(-7px, 85px, 0) scale(0.8) rotate(75deg);
          }
          85% {
            opacity: 0.2;
          }
          100% {
            transform: translate3d(-10px, 135px, 0) scale(0.25) rotate(110deg);
            opacity: 0;
          }
        }
        @keyframes timelineDustFall3 {
          0% {
            transform: translate3d(0, 0, 0) scale(0.35) rotate(0deg);
            opacity: 0;
          }
          18% {
            opacity: 0.8;
            transform: translate3d(3px, 20px, 0) scale(1) rotate(-30deg);
          }
          60% {
            opacity: 0.55;
            transform: translate3d(6px, 70px, 0) scale(0.8) rotate(-70deg);
          }
          85% {
            opacity: 0.15;
          }
          100% {
            transform: translate3d(9px, 110px, 0) scale(0.3) rotate(-100deg);
            opacity: 0;
          }
        }
        @keyframes timelineDustFall4 {
          0% {
            transform: translate3d(0, 0, 0) scale(0.3) rotate(0deg);
            opacity: 0;
          }
          22% {
            opacity: 0.85;
            transform: translate3d(-2px, 32px, 0) scale(0.95) rotate(40deg);
          }
          65% {
            opacity: 0.6;
            transform: translate3d(-6px, 90px, 0) scale(0.75) rotate(80deg);
          }
          88% {
            opacity: 0.15;
          }
          100% {
            transform: translate3d(-9px, 140px, 0) scale(0.25) rotate(120deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#00F2FE]/10 via-[#A855F7]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-4 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
            <span>COMMERCE EVOLUTION // 2023 - 2026</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-[0.08em] uppercase">
            EVOLUTION <span className="bg-gradient-to-r from-[#00F2FE] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">TIMELINE</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A0A0AB] max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
            My professional journey from managing international e-commerce operations to mastering AI-driven digital product engineering.
          </p>

          {/* Quick-Jump Stage Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {JOURNEY_MILESTONES.map((m, idx) => {
              const isSelected = activeStage === idx;
              const isPurple = idx % 2 === 1;

              return (
                <button
                  key={m.stage}
                  onClick={() => {
                    playClickSound();
                    setActiveStage(idx);
                    const el = itemRefs.current[idx];
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? isPurple
                        ? 'bg-[#A855F7]/20 border border-[#A855F7] text-[#C084FC] shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                        : 'bg-[#00F2FE]/20 border border-[#00F2FE] text-[#00F2FE] shadow-[0_0_20px_rgba(0,242,254,0.4)]'
                      : 'bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/[0.08]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? (isPurple ? 'bg-[#A855F7]' : 'bg-[#00F2FE]') : 'bg-white/40'}`} />
                  <span className="font-bold">{m.navLabel || m.stage}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Track & Cards */}
        <div className="relative">
          {/* Vertical Connecting Neon Spine Line */}
          {/* Center on desktop (sm:left-1/2), Left on mobile (left-6) */}
          <div
            className="absolute top-10 bottom-10 left-6 sm:left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#00F2FE] via-[#A855F7] to-[#00F2FE] shadow-[0_0_18px_rgba(0,242,254,0.7),0_0_30px_rgba(168,85,247,0.5)] z-0"
            aria-hidden="true"
          />

          {/* Spine Traveling Ambient Energy Pulse (subtle floating glow) */}
          <div
            className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-20 rounded-full bg-gradient-to-b from-transparent via-[#00F2FE] to-transparent blur-sm pointer-events-none opacity-80 animate-pulse z-0"
            style={{ top: `${(activeStage / (JOURNEY_MILESTONES.length - 1)) * 80 + 5}%`, transition: 'top 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
          />

          {/* Milestones Container */}
          <div className="space-y-16 sm:space-y-24 relative z-10">
            {JOURNEY_MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const isSelected = activeStage === index;
              const isPurple = index % 2 === 1;
              const isRevealed = revealedItems.has(index);

              return (
                <div
                  key={milestone.stage}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  data-index={index}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center transition-all duration-800 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } ${
                    isRevealed
                      ? 'opacity-100 translate-y-0 scale-100'
                      : `opacity-0 translate-y-12 scale-[0.97] ${isEven ? 'sm:-translate-x-6' : 'sm:translate-x-6'}`
                  }`}
                  style={{
                    transitionDelay: `${index * 120}ms`,
                  }}
                >
                  {/* Central Modern Step Node on the Timeline */}
                  <div
                    onClick={() => {
                      playClickSound();
                      setActiveStage(index);
                    }}
                    className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-20 cursor-pointer group flex items-center justify-center top-0 sm:top-1/2 sm:-translate-y-1/2"
                  >
                    {/* Pulsing Active Radar Ring */}
                    {isSelected && (
                      <span
                        className={`absolute -inset-2 rounded-2xl sm:rounded-full animate-ping opacity-35 ${
                          isPurple ? 'bg-[#A855F7]' : 'bg-[#00F2FE]'
                        }`}
                      />
                    )}

                    {/* Outer Step Node Housing */}
                    <div
                      className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-500 border ${
                        isSelected
                          ? isPurple
                            ? 'bg-[#070B14]/65 border-[#A855F7]/70 shadow-[0_0_30px_rgba(168,85,247,0.7),inset_0_0_15px_rgba(168,85,247,0.3)] scale-110'
                            : 'bg-[#070B14]/65 border-[#00F2FE]/70 shadow-[0_0_30px_rgba(0,242,254,0.7),inset_0_0_15px_rgba(0,242,254,0.3)] scale-110'
                          : 'bg-[#070B14]/50 border border-[#00F2FE]/25 hover:border-[#00F2FE]/60 hover:scale-105 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                      }`}
                    >
                      {/* Step Stage Number or Icon */}
                      <div
                        className={`transition-colors duration-300 flex flex-col items-center justify-center ${
                          isSelected
                            ? isPurple
                              ? 'text-[#C084FC]'
                              : 'text-[#00F2FE]'
                            : 'text-white/60 group-hover:text-white'
                        }`}
                      >
                        {getStageIcon(milestone.iconName)}
                        <span className="text-[9px] font-mono font-black mt-0.5 tracking-tighter">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Small Status LED on Node */}
                      <span
                        className={`absolute top-0 right-0 w-2.5 h-2.5 rounded-full border border-[#070B14] ${
                          isSelected
                            ? isPurple
                              ? 'bg-[#A855F7] shadow-[0_0_8px_#A855F7]'
                              : 'bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]'
                            : 'bg-white/30'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Horizontal Glowing Branch / Bus Line (Desktop connection to card) */}
                  <div
                    className={`hidden sm:block absolute top-1/2 -translate-y-1/2 z-10 w-12 pointer-events-none transition-opacity duration-300 ${
                      isEven
                        ? 'right-1/2 mr-7'
                        : 'left-1/2 ml-7'
                    }`}
                  >
                    <div
                      className={`h-[2px] w-full rounded-full transition-all duration-300 ${
                        isSelected
                          ? isPurple
                            ? isEven
                              ? 'bg-gradient-to-l from-[#A855F7] to-transparent shadow-[0_0_10px_#A855F7]'
                              : 'bg-gradient-to-r from-[#A855F7] to-transparent shadow-[0_0_10px_#A855F7]'
                            : isEven
                              ? 'bg-gradient-to-l from-[#00F2FE] to-transparent shadow-[0_0_10px_#00F2FE]'
                              : 'bg-gradient-to-r from-[#00F2FE] to-transparent shadow-[0_0_10px_#00F2FE]'
                          : 'bg-white/10'
                      }`}
                    />
                  </div>

                  {/* Spacer for 50% split on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Milestone Content Card */}
                  <div
                    className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${
                      isEven ? 'sm:pr-12 lg:pr-16' : 'sm:pl-12 lg:pl-16'
                    }`}
                  >
                    <div
                      onClick={() => {
                        playClickSound();
                        setActiveStage(index);
                      }}
                      style={{
                        animation: isRevealed
                          ? TIMELINE_CARD_ANIMATIONS[index % TIMELINE_CARD_ANIMATIONS.length]
                          : 'none',
                      }}
                      className={`relative group rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden ${
                        isSelected
                          ? isPurple
                            ? 'bg-[#070B14]/55 border border-[#A855F7]/70 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_30px_rgba(168,85,247,0.3)] ring-1 ring-[#A855F7]/40'
                            : 'bg-[#070B14]/55 border border-[#00F2FE]/70 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_30px_rgba(0,242,254,0.3)] ring-1 ring-[#00F2FE]/40'
                          : isPurple
                            ? 'bg-[#070B14]/40 border border-[#A855F7]/25 hover:border-[#A855F7]/70 hover:bg-[#070B14]/55 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:-translate-y-1.5'
                            : 'bg-[#070B14]/40 border border-[#00F2FE]/25 hover:border-[#00F2FE]/70 hover:bg-[#070B14]/55 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(0,242,254,0.25)] hover:-translate-y-1.5'
                      }`}
                    >
                      {/* Top Specular Glint Line */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-t-2xl sm:rounded-t-3xl" />

                      {/* Continuous automated falling dust sparkles */}
                      <TimelineFallingDust seed={index} />

                      {/* Top Corner HUD Bracket */}
                      <span className="absolute top-2.5 left-2.5 text-[10px] font-mono text-white/20 pointer-events-none select-none">
                        +
                      </span>
                      <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-white/20 pointer-events-none select-none">
                        +
                      </span>

                      {/* Header: Stage Pill, Status Chip & Year */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`font-mono text-xs font-black tracking-widest px-2.5 py-1 rounded-md border ${
                              isPurple
                                ? 'bg-[#A855F7]/15 border-[#A855F7]/40 text-[#C084FC]'
                                : 'bg-[#00F2FE]/15 border-[#00F2FE]/40 text-[#00F2FE]'
                            }`}
                          >
                            {milestone.stage}
                          </span>

                          <span
                            className={`text-[10px] font-mono font-semibold tracking-wider px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${
                              isPurple
                                ? 'bg-[#A855F7]/10 border-[#A855F7]/30 text-[#C084FC]'
                                : 'bg-[#00F2FE]/10 border-[#00F2FE]/30 text-[#00F2FE]'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isPurple ? 'bg-[#C084FC] animate-ping' : 'bg-[#00F2FE] animate-ping'
                              }`}
                            />
                            {milestone.stageBadge}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-white/60 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/10">
                          <Calendar className="w-3.5 h-3.5 text-white/50" />
                          <span>{milestone.year}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug tracking-tight group-hover:text-white transition-colors">
                        {milestone.title}
                      </h3>

                      {/* Subtitle */}
                      <p
                        className={`text-xs sm:text-sm font-mono font-medium mb-3.5 ${
                          isPurple ? 'text-[#C084FC]' : 'text-[#00F2FE]'
                        }`}
                      >
                        // {milestone.subtitle.replace(/^\/\/\s*/, '')}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#A0A0AB] leading-relaxed mb-5 font-sans">
                        {milestone.description}
                      </p>

                      {/* Key Deliverables Matrix */}
                      <div className="space-y-2 mb-5 bg-black/30 p-3.5 rounded-xl border border-white/5">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1.5 flex items-center justify-between">
                          <span>CORE DELIVERABLES</span>
                          <span className="text-[9px] text-white/30">{milestone.keyDeliverables.length} VERIFIED</span>
                        </div>
                        {milestone.keyDeliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs text-white/85 leading-relaxed">
                            <CheckCircle2
                              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                isPurple ? 'text-[#C084FC]' : 'text-[#00F2FE]'
                              }`}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metric / Impact Badge Banner */}
                      {milestone.metric && (
                        <div
                          className={`mb-5 p-2.5 rounded-xl flex items-center justify-between border text-xs font-mono gap-2 ${
                            isPurple
                              ? 'bg-[#A855F7]/10 border-[#A855F7]/25 text-[#E9D5FF]'
                              : 'bg-[#00F2FE]/10 border-[#00F2FE]/25 text-[#CFFAFE]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Zap className={`w-3.5 h-3.5 ${isPurple ? 'text-[#C084FC]' : 'text-[#00F2FE]'}`} />
                            {milestone.metricLabel ? (
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-bold text-white">{milestone.metricLabel}</span>
                                <span className="text-white/40">/</span>
                                <span className={isPurple ? 'text-[#C084FC] font-semibold' : 'text-[#00F2FE] font-semibold'}>
                                  {milestone.metric}
                                </span>
                              </div>
                            ) : (
                              <>
                                <span className="text-white/60">MILESTONE IMPACT:</span>
                                <span className="font-bold text-white">{milestone.metric}</span>
                              </>
                            )}
                          </div>
                          {milestone.status && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/40 border border-white/10 uppercase tracking-widest text-white/70 whitespace-nowrap">
                              {milestone.status}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Tools & Tech Chips */}
                      <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-mono uppercase text-white/40 mr-1">TECH STACK:</span>
                        {milestone.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-white/75 border border-white/10 transition-colors hover:border-white/30 hover:bg-white/[0.08]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
