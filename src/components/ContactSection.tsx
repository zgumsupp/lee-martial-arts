import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Clock,
  Github,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { GlassCard } from './GlassCard';
import { MagneticButton } from './MagneticButton';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  playClickSound: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ playClickSound }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Landing Page Flagship',
    budget: '$3,000 — $5,000',
    message: '',
  });

  const handleCopyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    setSubmitted(true);
  };

  return (
    <footer
      id="contact"
      className="relative z-10 scroll-mt-28 pt-16 pb-12 border-t border-white/10 bg-gradient-to-b from-transparent via-[#080B12]/80 to-[#05070B]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main CTA Glass Card */}
        <GlassCard
          glow="cyan"
          className="p-8 sm:p-14 mb-16 relative overflow-hidden bg-[#0D1424]/90"
        >
          {/* Subtle Ambient glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00F2FE]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-4">
                  INITIATE COLLABORATION
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-[0.12em] leading-tight mb-4">
                  LET&apos;S BUILD THE EXTRAORDINARY
                </h2>
                <p className="text-sm sm:text-base text-[#A0A0AB] leading-relaxed mb-8">
                  Whether you require a category-defining landing page, a high-concurrency SaaS dashboard, or 3D WebGL spatial immersion, I deliver at 10x engineering velocity.
                </p>

                {/* Direct Email Card with Quick Copy */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-6 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-[#00F2FE]/10 text-[#00F2FE]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-mono text-white/40 uppercase block">
                        DIRECT INBOX
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-semibold text-white truncate block">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/[0.06] hover:bg-[#00F2FE]/20 hover:text-[#00F2FE] border border-white/10 text-white/70 transition-colors flex-shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* System Availability Badge */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#22C55E] animate-pulse" />
                    <span>Currently Accepting Q2 / Q3 Strategic Engagements</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/50 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-white/40" />
                    <span>Based in Pakistan • Seamless 24/7 Global Coverage</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-8 mt-8 border-t border-white/10 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/[0.04] hover:bg-[#00F2FE]/15 hover:text-[#00F2FE] border border-white/10 text-white/70 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/[0.04] hover:bg-[#00F2FE]/15 hover:text-[#00F2FE] border border-white/10 text-white/70 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/[0.04] hover:bg-[#00F2FE]/15 hover:text-[#00F2FE] border border-white/10 text-white/70 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Project Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Transmission Dispatched!
                    </h3>
                    <p className="text-sm text-[#A0A0AB] max-w-md mx-auto">
                      Thank you. Your project brief has been routed directly to Anzil. Expect an architectural response within 12 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2 rounded-full bg-white/10 text-xs font-mono font-bold text-white hover:bg-white/20 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase font-bold tracking-wider text-white/60 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Julian Vance"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] text-white text-sm outline-none transition-all placeholder:text-white/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase font-bold tracking-wider text-white/60 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="julian@hypershift.ai"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] text-white text-sm outline-none transition-all placeholder:text-white/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase font-bold tracking-wider text-white/60 mb-2">
                          Project Architecture
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0E1522] border border-white/10 focus:border-[#00F2FE] text-white text-sm outline-none transition-all"
                        >
                          <option value="Landing Page Flagship">Landing Page Flagship</option>
                          <option value="AI SaaS Web Application">AI SaaS Web Application</option>
                          <option value="3D WebGL / Spatial Canvas">3D WebGL / Spatial Canvas</option>
                          <option value="Design System & Audit">Design System &amp; Audit</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase font-bold tracking-wider text-white/60 mb-2">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0E1522] border border-white/10 focus:border-[#00F2FE] text-white text-sm outline-none transition-all"
                        >
                          <option value="$3,000 — $5,000">$3,000 — $5,000</option>
                          <option value="$5,000 — $10,000">$5,000 — $10,000</option>
                          <option value="$10,000+">$10,000+ (Enterprise / Retainer)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-bold tracking-wider text-white/60 mb-2">
                        Project Scope &amp; Goals
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share your timeline, target audience, and any reference designs..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] text-white text-sm outline-none transition-all placeholder:text-white/30 resize-none"
                      />
                    </div>

                    <MagneticButton
                      id="submit-inquiry-btn"
                      variant="primary"
                      className="w-full py-4 text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,242,254,0.4)]"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Dispatch Project Brief ➔</span>
                      </span>
                    </MagneticButton>
                  </form>
                )}
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Footer Navigation & System Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F2FE] shadow-[0_0_10px_#00F2FE]" />
              <span className="font-heading font-black text-lg tracking-[0.16em] text-white">
                ANZIL
              </span>
            </div>
            <p className="text-xs text-[#A0A0AB] leading-relaxed max-w-xs">
              Professional Vibecoder &amp; Frontend Architect crafting category-leading digital flagships at 10x velocity.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-white/80 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A0A0AB]">
              <li>
                <a href="#about" className="hover:text-[#00F2FE] transition-colors">
                  About Anzil
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#00F2FE] transition-colors">
                  Core Capabilities
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#00F2FE] transition-colors">
                  Evolution Journey
                </a>
              </li>
              <li>
                <a href="#vibe-matrix" className="hover:text-[#00F2FE] transition-colors">
                  Vibe Matrix
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-[#00F2FE] transition-colors">
                  Featured Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-white/80 mb-3">
              Specialization
            </h4>
            <ul className="space-y-2 text-xs text-[#A0A0AB]">
              <li>High-Conversion Landing Pages</li>
              <li>3D Glassmorphism Design Systems</li>
              <li>WebGL Shaders &amp; Canvas Arts</li>
              <li>AI Agent Swarm Pipelines</li>
              <li>100/100 Core Web Vitals</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-white/80 mb-3">
              Operational Status
            </h4>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#22C55E]" />
              <span>Available for Global Engagements</span>
            </div>
            <p className="text-xs text-white/50 font-mono">
              📍 Hub: Pakistan (UTC+5)
            </p>
            <p className="text-[11px] text-white/40 mt-2 font-mono">
              Overlapping with US, UK, and UAE business hours.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} ANZIL. Engineered with React 19 &amp; 3D Glassmorphism.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-[#00F2FE] transition-colors">
              Return to Zenith ↑
            </a>
            <span>•</span>
            <span>Zero-Lighthouse Penalty</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
