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
    <section id="vibe-matrix" className="relative z-10 scroll-mt-28 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-3">
            THE VIBECODING ADVANTAGE
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-[0.12em]">
            TRADITIONAL DEV VS. ANZIL&apos;S VIBE CODING OS
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0AB] max-w-xl mx-auto mt-3">
            A radical paradigm shift in delivery speed, aesthetic sophistication, and defect elimination.
          </p>
        </div>

        {/* Side-by-Side Architectural Bento Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Traditional Dev Card */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#0E131E]/60 border border-white/10 backdrop-blur-xl opacity-90 shadow-2xl">
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

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-mono">
              <span>Avg Turnaround: 4-6 Weeks</span>
              <span>Iteration Friction: HIGH</span>
            </div>
          </div>

          {/* Anzil's Vibe Coding OS Card */}
          <GlassCard
            glow="cyan"
            className="p-8 sm:p-10 bg-[#0F1B2C]/85 border-[#00F2FE]/40 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(0,242,254,0.2)] relative overflow-hidden"
          >
            {/* Ambient Background Gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F2FE]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/15 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#00F2FE]/20 border border-[#00F2FE]/40 text-[#00F2FE] text-[10px] font-mono font-black uppercase tracking-wider mb-1">
                  <Zap className="w-3 h-3 text-[#00F2FE]" /> 10X ACCELERATION
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  ANZIL&apos;S VIBE CODING OS
                  <span className="text-lg">🚀</span>
                </h3>
              </div>
              <span className="text-2xl">⚡</span>
            </div>

            <ul className="space-y-5 relative z-10">
              {COMPARISON_DATA.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#00F2FE]/20 border border-[#00F2FE]/50 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(0,242,254,0.4)]">
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

            <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-[#00F2FE] font-mono font-semibold relative z-10">
              <span>Avg Turnaround: 24-72 Hours</span>
              <span>Lighthouse Score: 100/100</span>
            </div>
          </GlassCard>
        </div>

        {/* Velocity Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GlassCard className="p-6 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-[#00F2FE]/10 border border-[#00F2FE]/30 mb-3">
              <Zap className="w-6 h-6 text-[#00F2FE]" />
            </div>
            <div className="font-mono text-3xl font-black text-white">
              10<span className="text-[#00F2FE]">X</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/80 mt-1">
              Engineering Velocity
            </div>
            <p className="text-xs text-[#A0A0AB] mt-2">
              Prompt-driven architecture pipelines ship in hours rather than months.
            </p>
          </GlassCard>

          <GlassCard className="p-6 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 mb-3">
              <ShieldCheck className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <div className="font-mono text-3xl font-black text-white">
              0<span className="text-[#F59E0B]">.0</span>%
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/80 mt-1">
              Regression Flaws
            </div>
            <p className="text-xs text-[#A0A0AB] mt-2">
              Automated compiler hooks and self-healing lint QA eliminate layout bugs.
            </p>
          </GlassCard>

          <GlassCard className="p-6 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 mb-3">
              <Gauge className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="font-mono text-3xl font-black text-white">
              60<span className="text-emerald-400"> FPS</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/80 mt-1">
              Fluid Micro-Interactions
            </div>
            <p className="text-xs text-[#A0A0AB] mt-2">
              Hardware-accelerated CSS GPU transforms and buttery spring dynamics.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
