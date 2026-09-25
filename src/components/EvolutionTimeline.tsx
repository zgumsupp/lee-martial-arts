import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Sparkles, Terminal, Calendar, Code } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

interface EvolutionTimelineProps {
  playClickSound: () => void;
}

export const EvolutionTimeline: React.FC<EvolutionTimelineProps> = ({ playClickSound }) => {
  const [activeStage, setActiveStage] = useState<number>(3); // Default to Stage 04 (Mastery)

  return (
    <section id="journey" className="relative z-10 scroll-mt-28 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-3">
            MILESTONES &amp; MASTERY
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-[0.12em]">
            EVOLUTION JOURNEY
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0AB] max-w-xl mx-auto mt-3">
            From raw DOM fundamentals to AI agent swarm orchestration and spatial 3D interfaces.
          </p>
        </div>

        {/* Desktop & Mobile Timeline Architecture */}
        <div className="relative">
          {/* Vertical Connecting Neon Line (centered on desktop, left on mobile) */}
          <div className="absolute top-8 bottom-8 left-4 sm:left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#00F2FE]/80 via-[#7000FF]/60 to-[#F59E0B]/80 shadow-[0_0_12px_rgba(0,242,254,0.5)]" />

          <div className="space-y-12 sm:space-y-16">
            {JOURNEY_MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const isSelected = activeStage === index;
              const isStage4 = index === 3;

              return (
                <div
                  key={milestone.stage}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node on the timeline */}
                  <div
                    onClick={() => {
                      playClickSound();
                      setActiveStage(index);
                    }}
                    className={`absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 cursor-pointer group flex items-center justify-center`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-[#0B0F17] transition-all duration-300 ${
                        isSelected
                          ? isStage4
                            ? 'bg-[#F59E0B] shadow-[0_0_20px_#F59E0B] scale-125'
                            : 'bg-[#00F2FE] shadow-[0_0_20px_#00F2FE] scale-125'
                          : 'bg-white/40 group-hover:bg-[#00F2FE] group-hover:scale-110'
                      }`}
                    />
                  </div>

                  {/* Spacer for 50% split on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Milestone Content Card */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven ? 'sm:pr-12' : 'sm:pl-12'
                    }`}
                  >
                    <GlassCard
                      glow={isStage4 ? 'amber' : isSelected ? 'cyan' : 'none'}
                      onClick={() => {
                        playClickSound();
                        setActiveStage(index);
                      }}
                      className={`p-6 sm:p-8 cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? 'border-[#00F2FE]/50 bg-[#0E1522]/90 shadow-[0_20px_50px_rgba(0,242,254,0.15)]'
                          : 'hover:border-white/20'
                      }`}
                    >
                      {/* Card Header: Stage + Badge + Year */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-xs font-black tracking-widest ${
                              isStage4 ? 'text-[#F59E0B]' : 'text-[#00F2FE]'
                            }`}
                          >
                            {milestone.stage}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-white/70">
                            {milestone.stageBadge}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-white/50 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {milestone.year}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                        {milestone.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-xs sm:text-sm font-medium text-[#00F2FE]/90 mb-3">
                        {milestone.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-[#A0A0AB] leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      {/* Key Deliverables */}
                      <div className="space-y-1.5 mb-5">
                        {milestone.keyDeliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-white/80">
                            <CheckCircle2
                              className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                                isStage4 ? 'text-[#F59E0B]' : 'text-[#00F2FE]'
                              }`}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tools & Tech Chips */}
                      <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                        {milestone.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-white/70 border border-white/10"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
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
