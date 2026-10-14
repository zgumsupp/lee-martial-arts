import React, { useState } from 'react';
import { X, Check, Zap, Sparkles, ShieldCheck, Gauge, Layers } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { COMPARISON_DATA } from '../data/portfolioData';

interface ComparisonMatrixProps {
  playClickSound: () => void;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({ playClickSound }) => {
  const [activeTab, setActiveTab] = useState<'table' | 'cards'>('cards');

  return (
    <section id="vibe-matrix" className="relative z-10 scroll-mt-28 py-10 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal-on-scroll">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-3">
            THE VIBECODING ADVANTAGE
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-[0.12em]">
            TRADITIONAL E-COM VS. ANZIL&apos;S VIBE CODING OS
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0AB] max-w-xl mx-auto mt-3">
            A radical paradigm shift in storefront deployment velocity, aesthetic sophistication, and digital asset scaling.
          </p>
        </div>

        {/* Side-by-Side Architectural Bento Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Traditional Dev Card */}
          <div className="reveal-on-scroll stagger-delay-1">
            <div className="rounded-3xl p-8 sm:p-10 backdrop-blur-md bg-[#070B14]/40 border border-white/10 hover:border-white/25 hover:bg-[#070B14]/55 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-red-400 font-bold uppercase block mb-1">
                      LEGACY WORKFLOW
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white/90">
                      Traditional Development
                    </h3>
                  </div>
                  <span className="text-2xl opacity-60">🐢</span>
                </div>

                <ul className="space-y-5">
                  {COMPARISON_DATA.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-red-400" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold uppercase text-white/40 block mb-0.5">
                          {item.aspect}
                        </span>
                        <p className="text-xs sm:text-sm text-[#A0A0AB] leading-relaxed">
                          {item.traditional}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-mono">
                <span>Avg Turnaround: 4-6 Weeks</span>
                <span>Store Friction: HIGH</span>
              </div>
            </div>
          </div>

          {/* Anzil's Vibe Coding OS Card */}
          <div className="reveal-on-scroll stagger-delay-2">
            <GlassCard
              glow="dual"
              className="p-8 sm:p-10 backdrop-blur-md bg-[#070B14]/40 hover:bg-[#070B14]/55 border border-[#00F2FE]/30 hover:border-[#00F2FE]/60 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_30px_rgba(0,242,254,0.2)] relative overflow-hidden h-full flex flex-col justify-between"
            >
              {/* Ambient Background Gradient accent */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[radial-gradient(circle,rgba(0,242,254,0.15)_0%,rgba(168,85,247,0.1)_50%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/15">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#00F2FE]/15 border border-[#00F2FE]/40 text-[#00F2FE] text-[10px] font-mono font-black uppercase tracking-wider mb-1 shadow-[0_0_12px_rgba(0,242,254,0.25)]">
                      <Zap className="w-3 h-3 text-[#00F2FE]" /> 10X ACCELERATION
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 drop-shadow-[0_0_20px_rgba(0,242,254,0.3)]">
                      ANZIL&apos;S VIBE CODING OS
                      <span className="text-lg">🚀</span>
                    </h3>
                  </div>
                  <span className="text-2xl">⚡</span>
                </div>

                <ul className="space-y-5">
                  {COMPARISON_DATA.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-[#00F2FE]/20 border border-[#00F2FE]/50 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_12px_rgba(0,242,254,0.45)]">
                        <Check className="w-3.5 h-3.5 text-[#00F2FE]" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold uppercase text-[#00F2FE] block mb-0.5">
                          {item.aspect}
                        </span>
                        <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                          {item.vibeCoding}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-[#00F2FE] font-mono font-semibold relative z-10">
                <span>Avg Turnaround: 24-72 Hours</span>
                <span>E-Com Scaling: 10X</span>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Velocity Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="reveal-on-scroll stagger-delay-1">
            <GlassCard glow="cyan" className="p-6 text-center h-full">
              <div className="inline-flex p-3 rounded-2xl bg-[#00F2FE]/10 border border-[#00F2FE]/30 mb-3 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
                <Zap className="w-6 h-6 text-[#00F2FE]" />
              </div>
              <div className="font-mono text-3xl font-black text-white drop-shadow-[0_0_15px_rgba(0,242,254,0.35)]">
                10<span className="text-[#00F2FE]">X</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/80 mt-1">
                ENGINEERING VELOCITY
              </div>
              <p className="text-xs text-[#A0A0AB] mt-2">
                Prompt-driven web architecture workflows deploy functional store pages and digital frameworks in hours rather than weeks.
              </p>
            </GlassCard>
          </div>

          <div className="reveal-on-scroll stagger-delay-2">
            <GlassCard glow="purple" className="p-6 text-center h-full">
              <div className="inline-flex p-3 rounded-2xl bg-[#A855F7]/10 border border-[#A855F7]/30 mb-3 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <ShieldCheck className="w-6 h-6 text-[#C084FC]" />
              </div>
              <div className="font-mono text-3xl font-black text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.35)]">
                100<span className="text-[#C084FC]">%</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/80 mt-1">
                ASSET SECURITY & INTEGRITY
              </div>
              <p className="text-xs text-[#A0A0AB] mt-2">
                Robust structural code paths to safeguard downloadable premium assets and ensure bulletproof international checkout setups.
              </p>
            </GlassCard>
          </div>

          <div className="reveal-on-scroll stagger-delay-3">
            <GlassCard glow="cyan" className="p-6 text-center h-full">
              <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 mb-3 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                <Gauge className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="font-mono text-3xl font-black text-white drop-shadow-[0_0_15px_rgba(52,211,153,0.35)]">
                60<span className="text-emerald-400"> FPS</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/80 mt-1">
                FLUID USER EXPERIENCES
              </div>
              <p className="text-xs text-[#A0A0AB] mt-2">
                Buttery-smooth UI micro-interactions, responsive glassmorphic cards, and dynamic hover layouts designed to boost conversions.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
