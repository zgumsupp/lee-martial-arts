import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative z-10 scroll-mt-28 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-3">
            VERIFIED INDUSTRY ENDORSEMENTS
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-[0.12em]">
            CLIENT REVIEWS &amp; PROOF
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0AB] max-w-xl mx-auto mt-3">
            What technical founders, product leaders, and investors say about engineering with Anzil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <GlassCard
              key={t.id}
              glow="cyan"
              className="p-8 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#00F2FE]/30" />
                </div>

                {/* Quote body */}
                <p className="text-sm text-white/90 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Impact Highlight */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#00F2FE] block font-bold mb-0.5">
                    VERIFIED IMPACT
                  </span>
                  <p className="text-xs text-white/80 font-medium">
                    {t.impact}
                  </p>
                </div>
              </div>

              {/* Author Profile */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.clientName}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1">
                    {t.clientName}
                    <CheckCircle className="w-3.5 h-3.5 text-[#00F2FE]" />
                  </h4>
                  <p className="text-xs text-white/50">
                    {t.role} • <span className="text-white/70">{t.company}</span>
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
