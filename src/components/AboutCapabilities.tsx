import React, { useState } from 'react';
import {
  Gem,
  Cpu,
  Layers,
  Globe,
  Terminal,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { GlassCard } from './GlassCard';
import { MagneticButton } from './MagneticButton';
import { CAPABILITIES, PERSONAL_INFO } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Gem: <Gem className="w-6 h-6 text-[#00F2FE]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#F59E0B]" />,
  Layers: <Layers className="w-6 h-6 text-[#00F2FE]" />,
  Globe: <Globe className="w-6 h-6 text-[#F59E0B]" />,
  Terminal: <Terminal className="w-6 h-6 text-[#00F2FE]" />,
  Zap: <Zap className="w-6 h-6 text-[#00F2FE]" />,
};

interface AboutCapabilitiesProps {
  playClickSound: () => void;
}

export const AboutCapabilities: React.FC<AboutCapabilitiesProps> = ({ playClickSound }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filteredCapabilities =
    activeFilter === 'ALL'
      ? CAPABILITIES
      : CAPABILITIES.filter((c) => c.category === activeFilter);

  const categories = ['ALL', 'PERFORMANCE', 'VELOCITY', 'ARCHITECTURE', 'IMMERSION'];

  return (
    <div className="space-y-24">
      {/* 1. Who I Am / Philosophy Section */}
      <section id="about" className="relative z-10 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <GlassCard glow="cyan" className="p-8 sm:p-14">
            <div className="mb-6">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-3">
                ABOUT THE ARCHITECT
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-[0.12em] leading-tight">
                WHO I AM
              </h2>
            </div>

            <p className="text-base sm:text-xl lg:text-2xl text-[#F4F4F6] font-medium leading-relaxed max-w-4xl mb-8">
              Hi, I&apos;m <strong className="text-[#00F2FE] font-black">{PERSONAL_INFO.name}</strong>.
              I engineer high-converting, modern digital experiences by unifying frontend craftsmanship with
              AI-driven development methodologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00F2FE]/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">⚡</span>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/25">
                    SPEED TO SHIP
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Vibecoding Velocity</h3>
                <p className="text-xs sm:text-sm text-[#A0A0AB] leading-relaxed">
                  Harnessing agentic swarm loops and Cursor pipelines to prototype, iterate, and deploy at 10x the speed of legacy engineering teams.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#F59E0B]/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">✨</span>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/25">
                    DARK LUXURY
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Glassmorphism &amp; Polish</h3>
                <p className="text-xs sm:text-sm text-[#A0A0AB] leading-relaxed">
                  Rejecting boilerplate templates in favor of bespoke 3D glass surfaces, subtle neon edge reflections, and tactile spring physics.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00F2FE]/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">💎</span>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                    CORE WEB VITALS
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">100/100 Lighthouse</h3>
                <p className="text-xs sm:text-sm text-[#A0A0AB] leading-relaxed">
                  Zero cumulative layout shift, instantaneous first contentful paint, and pristine semantic SEO structure built into every page.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
                <span className="text-sm font-semibold text-white/90">
                  Ready to deploy high-impact web flagships immediately
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MagneticButton
                  href="#contact"
                  onClick={playClickSound}
                  variant="primary"
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider"
                >
                  Let&apos;s Build Together ➔
                </MagneticButton>
                <MagneticButton
                  href="#works"
                  onClick={playClickSound}
                  variant="outline"
                  className="px-6 py-2.5 text-xs font-semibold"
                >
                  View Featured Reel ↗
                </MagneticButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* 2. Core Capabilities Section */}
      <section id="capabilities" className="relative z-10 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-3">
              SYSTEM ARCHITECTURE &amp; SKILLS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-[0.12em]">
              CORE CAPABILITIES
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0AB] max-w-xl mx-auto mt-3">
              Precision engineering applied across high-performance interfaces, 3D WebGL immersion, and next-gen AI workflows.
            </p>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    playClickSound();
                    setActiveFilter(cat);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-200 ${
                    activeFilter === cat
                      ? 'bg-[#00F2FE] text-[#070A10] shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                      : 'bg-white/[0.04] text-white/70 hover:text-white hover:bg-white/[0.08] border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCapabilities.map((cap) => {
              const isAmber = cap.accentColor === 'amber';
              return (
                <GlassCard
                  key={cap.id}
                  id={`capability-card-${cap.id}`}
                  glow={isAmber ? 'amber' : 'cyan'}
                  className="p-7 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 group-hover:scale-110 transition-transform">
                        {iconMap[cap.iconName] || <Gem className="w-6 h-6 text-[#00F2FE]" />}
                      </div>
                      <span
                        className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full border ${
                          isAmber
                            ? 'bg-[#F59E0B]/10 border-[#F59E0B]/30 text-[#F59E0B]'
                            : 'bg-[#00F2FE]/10 border-[#00F2FE]/30 text-[#00F2FE]'
                        }`}
                      >
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F2FE] transition-colors">
                      {cap.title}
                    </h3>

                    {/* Metric pill */}
                    <div className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-white/80 mb-3 bg-white/[0.04] px-2.5 py-0.5 rounded">
                      <Sparkles className="w-3 h-3 text-[#00F2FE]" />
                      <span>{cap.metrics}</span>
                    </div>

                    <p className="text-sm text-[#A0A0AB] leading-relaxed mb-6">
                      {cap.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-white/60 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
