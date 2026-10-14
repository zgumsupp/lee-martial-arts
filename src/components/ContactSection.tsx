import React, { useState, useRef } from 'react';
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
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { GlassCard } from './GlassCard';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  playClickSound: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ playClickSound }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Etsy Digital Storefront Design',
    budget: '$100 — $250',
    message: '',
  });

  const handleCopyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const triggerParticleBurst = (event?: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    const originX = event && rect ? event.clientX - rect.left : 150;
    const originY = event && rect ? event.clientY - rect.top : 24;

    const colors = ['#00F2FE', '#A855F7', '#38BDF8', '#C084FC', '#FBBF24', '#FFFFFF'];
    const newParticles: Particle[] = [];

    for (let i = 0; i < 32; i++) {
      const angle = (i / 32) * 2 * Math.PI + (Math.random() - 0.5) * 0.4;
      const speed = 40 + Math.random() * 90;
      newParticles.push({
        id: Date.now() + i,
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 5,
      });
    }

    setParticles(newParticles);
    setTimeout(() => {
      setParticles([]);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    triggerParticleBurst();
    setSubmitted(true);
  };

  return (
    <footer
      id="contact"
      className="relative z-10 scroll-mt-28 pt-16 pb-12 border-t border-white/10 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main CTA Glass Card */}
        <div className="reveal-on-scroll mb-16">
          <GlassCard
            glow="dual"
            className="p-8 sm:p-14 relative overflow-hidden backdrop-blur-md bg-[#070B14]/40 hover:bg-[#070B14]/55 border border-[#00F2FE]/25 hover:border-[#00F2FE]/50 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_35px_rgba(0,242,254,0.18),0_0_45px_rgba(168,85,247,0.15)]"
          >
          {/* Subtle Ambient dual-neon glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[radial-gradient(circle,rgba(0,242,254,0.15)_0%,rgba(168,85,247,0.12)_50%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 relative z-10">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 flex flex-col justify-between min-w-0">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-4 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
                  INITIATE COLLABORATION
                </span>
                <div className="flex flex-col max-w-full mb-4">
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-[0_0_20px_rgba(0,242,254,0.25)]">
                    LAUNCH YOUR NEXT DIGITAL ASSET 🚀
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#A0A0AB] leading-relaxed mb-8">
                  Specializing in designing high-converting Etsy digital product storefronts and engineering modern, fast-loading web layouts using advanced AI vibe coding workflows.
                </p>

                {/* Direct Email Card with Quick Copy */}
                <div className="p-4 rounded-2xl bg-[#070B14]/40 border border-[#00F2FE]/25 backdrop-blur-md mb-6 flex items-center justify-between gap-3 hover:border-[#00F2FE]/50 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-[#00F2FE]/10 text-[#00F2FE] shadow-[0_0_12px_rgba(0,242,254,0.25)]">
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
                    className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-[#00F2FE]/20 hover:text-[#00F2FE] border border-white/10 hover:border-[#00F2FE]/40 text-white/70 transition-all flex-shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Status: Available for Work with map pin & pulse animation */}
                <div className="p-4 rounded-2xl bg-[#070B14]/40 border border-white/10 backdrop-blur-md space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#00F2FE] flex-shrink-0" />
                    <div className="relative flex h-2.5 w-2.5 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_10px_#22C55E]" />
                    </div>
                    <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 tracking-wide uppercase">
                      Available for Work
                    </span>
                  </div>
                  <p className="text-xs text-white/50 font-mono pl-6 leading-relaxed">
                    Based in Pakistan • Seamless 24/7 Global Timezone Coverage
                  </p>
                </div>
              </div>

              {/* Social links (GitHub, LinkedIn, Twitter) - Aligned perfectly */}
              <div className="pt-8 mt-8 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block mb-3">
                  NETWORK MATRIX
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/[0.04] hover:bg-[#00F2FE]/15 hover:text-[#00F2FE] border border-white/10 hover:border-[#00F2FE]/50 hover:shadow-[0_0_18px_rgba(0,242,254,0.35)] text-white/70 transition-all flex items-center justify-center cursor-pointer"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/[0.04] hover:bg-[#00F2FE]/15 hover:text-[#00F2FE] border border-white/10 hover:border-[#00F2FE]/50 hover:shadow-[0_0_18px_rgba(0,242,254,0.35)] text-white/70 transition-all flex items-center justify-center cursor-pointer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/[0.04] hover:bg-[#A855F7]/15 hover:text-[#C084FC] border border-white/10 hover:border-[#A855F7]/50 hover:shadow-[0_0_18px_rgba(168,85,247,0.35)] text-white/70 transition-all flex items-center justify-center cursor-pointer"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Project Inquiry Form with Floating Labels */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#080E1C]/85 border border-white/12 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] relative">
                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(52,211,153,0.4)]">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Message Dispatched Successfully!
                    </h3>
                    <p className="text-sm text-[#A0A0AB] max-w-md mx-auto leading-relaxed">
                      Thank you. Your project brief has been transmitted directly to Anzil. Expect an architectural consultation response within 12 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-white/10 text-xs font-mono font-bold text-white hover:bg-white/20 border border-white/15 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Field with Floating Label */}
                      <div className="relative rounded-xl bg-white/[0.03] border border-white/12 focus-within:border-[#00F2FE] focus-within:bg-[#00F2FE]/[0.02] focus-within:shadow-[0_0_20px_rgba(0,242,254,0.25)] transition-all duration-300">
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 pt-6 pb-2 bg-transparent text-white text-sm outline-none font-sans"
                        />
                        <label
                          htmlFor="contact-name"
                          className={`absolute left-4 pointer-events-none transition-all duration-200 font-mono uppercase ${
                            focusedField === 'name' || formData.name
                              ? 'top-2 text-[10px] font-bold text-[#00F2FE] tracking-wider'
                              : 'top-4 text-xs text-white/40 tracking-wide'
                          }`}
                        >
                          Your Name *
                        </label>
                      </div>

                      {/* Email Field with Floating Label */}
                      <div className="relative rounded-xl bg-white/[0.03] border border-white/12 focus-within:border-[#A855F7] focus-within:bg-[#A855F7]/[0.02] focus-within:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-300">
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 pt-6 pb-2 bg-transparent text-white text-sm outline-none font-sans"
                        />
                        <label
                          htmlFor="contact-email"
                          className={`absolute left-4 pointer-events-none transition-all duration-200 font-mono uppercase ${
                            focusedField === 'email' || formData.email
                              ? 'top-2 text-[10px] font-bold text-[#C084FC] tracking-wider'
                              : 'top-4 text-xs text-white/40 tracking-wide'
                          }`}
                        >
                          Your Email Address *
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Project Architecture with Floating Label */}
                      <div className="relative rounded-xl bg-white/[0.03] border border-white/12 focus-within:border-[#00F2FE] focus-within:bg-[#00F2FE]/[0.02] focus-within:shadow-[0_0_20px_rgba(0,242,254,0.25)] transition-all duration-300">
                        <label
                          htmlFor="contact-project-type"
                          className="absolute left-4 top-2 text-[10px] font-mono font-bold text-[#00F2FE] uppercase tracking-wider pointer-events-none"
                        >
                          Project Architecture
                        </label>
                        <select
                          id="contact-project-type"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 pt-6 pb-2 bg-transparent text-white text-sm outline-none cursor-pointer [&>option]:bg-[#070B14] [&>option]:text-white font-sans"
                        >
                          <option value="Etsy Digital Storefront Design">Etsy Digital Storefront Design</option>
                          <option value="Vibe Coding Website Setup">Vibe Coding Website Setup</option>
                          <option value="Digital Product Template Creation">Digital Product Template Creation</option>
                          <option value="Custom Web Layout Refinement">Custom Web Layout Refinement</option>
                        </select>
                      </div>

                      {/* Estimated Budget with Floating Label */}
                      <div className="relative rounded-xl bg-white/[0.03] border border-white/12 focus-within:border-[#00F2FE] focus-within:bg-[#00F2FE]/[0.02] focus-within:shadow-[0_0_20px_rgba(0,242,254,0.25)] transition-all duration-300">
                        <label
                          htmlFor="contact-budget"
                          className="absolute left-4 top-2 text-[10px] font-mono font-bold text-[#00F2FE] uppercase tracking-wider pointer-events-none"
                        >
                          Estimated Budget
                        </label>
                        <select
                          id="contact-budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 pt-6 pb-2 bg-transparent text-white text-sm outline-none cursor-pointer [&>option]:bg-[#070B14] [&>option]:text-white font-sans"
                        >
                          <option value="$100 — $250">$100 — $250</option>
                          <option value="$250 — $500">$250 — $500</option>
                          <option value="$500 — $1,000">$500 — $1,000</option>
                          <option value="$1,000+">$1,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Field with Clean Single Placeholder */}
                    <div className="relative rounded-xl bg-white/[0.03] border border-white/12 focus-within:border-[#00F2FE] focus-within:bg-[#00F2FE]/[0.02] focus-within:shadow-[0_0_20px_rgba(0,242,254,0.25)] transition-all duration-300">
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="PROJECT SCOPE, TIMELINE & GOALS *"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 bg-transparent text-white text-sm outline-none font-sans resize-none placeholder:text-white/40 placeholder:font-mono placeholder:text-xs"
                      />
                    </div>

                    {/* Glowing 'Send Message' Button with Particle Burst & Slick Hover Effect */}
                    <div className="relative pt-2">
                      {/* Particle Burst Elements */}
                      {particles.map((p) => (
                        <span
                          key={p.id}
                          className="pointer-events-none absolute rounded-full animate-particle z-50"
                          style={
                            {
                              left: `${p.x}px`,
                              top: `${p.y}px`,
                              width: `${p.size}px`,
                              height: `${p.size}px`,
                              backgroundColor: p.color,
                              boxShadow: `0 0 10px ${p.color}`,
                              '--tx': `${p.vx}px`,
                              '--ty': `${p.vy}px`,
                            } as React.CSSProperties
                          }
                        />
                      ))}

                      <button
                        ref={buttonRef}
                        type="submit"
                        id="submit-inquiry-btn"
                        className="group relative w-full py-4 rounded-xl font-mono text-xs font-black uppercase tracking-wider text-[#050811] bg-gradient-to-r from-[#00F2FE] via-[#38BDF8] to-[#A855F7] shadow-[0_0_30px_rgba(0,242,254,0.5),0_0_45px_rgba(168,85,247,0.35)] hover:shadow-[0_0_55px_rgba(0,242,254,0.85),0_0_75px_rgba(168,85,247,0.6)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer flex items-center justify-center gap-2 border border-cyan-200/50"
                      >
                        {/* Slick Light Shimmer Sweep on Hover */}
                        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[320%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        <span className="relative z-10 font-bold">Send Message</span>
                        <Zap className="w-3.5 h-3.5 text-amber-300 transition-transform duration-300 group-hover:scale-125" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </GlassCard>
        </div>

        {/* Footer Navigation & System Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10 reveal-on-scroll stagger-delay-1">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F2FE] shadow-[0_0_10px_#00F2FE]" />
              <span className="font-heading font-black text-lg tracking-[0.16em] text-white">
                ANZIL
              </span>
            </div>
            <p className="text-xs text-[#A0A0AB] leading-relaxed max-w-xs mb-4">
              Professional Vibecoder &amp; Frontend Architect crafting category-leading digital flagships at 10x velocity.
            </p>
            {/* Symmetrically aligned social icons in footer column */}
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-[#00F2FE]/15 hover:text-[#00F2FE] border border-white/10 hover:border-[#00F2FE]/40 hover:shadow-[0_0_12px_rgba(0,242,254,0.3)] text-white/70 transition-all flex items-center justify-center cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-[#00F2FE]/15 hover:text-[#00F2FE] border border-white/10 hover:border-[#00F2FE]/40 hover:shadow-[0_0_12px_rgba(0,242,254,0.3)] text-white/70 transition-all flex items-center justify-center cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-[#A855F7]/15 hover:text-[#C084FC] border border-white/10 hover:border-[#A855F7]/40 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] text-white/70 transition-all flex items-center justify-center cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
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
              <li>
                <a href="#reviews" className="hover:text-[#00F2FE] transition-colors">
                  Client Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-white/80 mb-3">
              Specialization
            </h4>
            <ul className="space-y-2 text-xs text-[#A0A0AB]">
              <li>Etsy Digital Storefront Design</li>
              <li>AI Vibe Coding Web Architecture</li>
              <li>Digital Product Template Creation</li>
              <li>High-Converting E-Commerce Layouts</li>
              <li>100/100 Core Web Vitals</li>
            </ul>
          </div>

          {/* Operational Status with MapPin & Pulse animation */}
          <div>
            <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-white/80 mb-3">
              Operational Status
            </h4>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md mb-3">
              <MapPin className="w-4 h-4 text-[#00F2FE] flex-shrink-0" />
              <div className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#22C55E]" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                Available for Work
              </span>
            </div>
            <p className="text-xs text-white/50 font-mono">
              📍 Hub: Pakistan (UTC+5)
            </p>
            <p className="text-[11px] text-white/40 mt-1.5 font-mono">
              Overlapping with US, UK, and UAE business hours.
            </p>
          </div>
        </div>

        {/* Bottom copyright & Status Pill with aligned social icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40 reveal-on-scroll stagger-delay-2">
          <div className="flex items-center gap-3">
            <p>© {new Date().getFullYear()} ANZIL. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            {/* Status with MapPin and pulse in the bottom bar */}
            <div className="flex items-center gap-2 text-emerald-400">
              <MapPin className="w-3.5 h-3.5 text-[#00F2FE]" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_6px_#22C55E]" />
              </span>
              <span className="font-semibold text-[11px]">Available for Work</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-[#00F2FE]/15 hover:text-[#00F2FE] border border-white/10 hover:border-[#00F2FE]/40 text-white/60 transition-all flex items-center justify-center cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-[#00F2FE]/15 hover:text-[#00F2FE] border border-white/10 hover:border-[#00F2FE]/40 text-white/60 transition-all flex items-center justify-center cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
            <span>•</span>
            <a href="#hero" className="hover:text-[#00F2FE] transition-colors">
              Return to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
