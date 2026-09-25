import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  playClickSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundEnabled,
  onToggleSound,
  playClickSound,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Journey', href: '#journey' },
    { label: 'Vibe Matrix', href: '#vibe-matrix' },
    { label: 'Featured Works', href: '#works' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section tracker
      const sections = ['hero', 'about', 'capabilities', 'journey', 'vibe-matrix', 'works', 'reviews', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    playClickSound();
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1140px]">
      <div
        className={`w-full transition-all duration-300 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 flex items-center justify-between border ${
          scrolled
            ? 'bg-[#0B0F17]/85 backdrop-blur-2xl border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(0,242,254,0.1)]'
            : 'bg-[#0E1522]/60 backdrop-blur-xl border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)]'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-2.5 text-decoration-none group"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-80"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00F2FE] shadow-[0_0_12px_#00F2FE]"></span>
          </span>
          <div className="flex flex-col">
            <span className="font-heading font-black text-base sm:text-lg tracking-[0.18em] text-white group-hover:text-[#00F2FE] transition-colors">
              ANZIL
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#00F2FE]/80 -mt-1 hidden sm:block">
              VIBECODER OS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 relative ${
                  isActive
                    ? 'text-white bg-white/[0.08] shadow-[0_0_15px_rgba(0,242,254,0.15)] font-semibold'
                    : 'text-[#A0A0AB] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Audio toggle button */}
          <button
            type="button"
            onClick={onToggleSound}
            title={soundEnabled ? 'Mute micro-interaction audio' : 'Enable audio feedback'}
            className="p-2 rounded-full text-white/60 hover:text-[#00F2FE] hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all text-xs"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#00F2FE]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* CTA Hire Button */}
          <MagneticButton
            href="#contact"
            onClick={() => handleNavClick('#contact')}
            variant="primary"
            className="px-4 py-1.5 sm:px-5 sm:py-2 text-xs font-bold uppercase tracking-wider hidden sm:inline-flex items-center gap-1.5"
          >
            <span>HIRE ANZIL</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#070A10]" />
          </MagneticButton>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-white hover:text-[#00F2FE] bg-white/[0.04] border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-3xl bg-[#0E1522]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/[0.06] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#00F2FE]" />
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#0099FF] text-[#070A10] font-bold text-center text-xs tracking-wider uppercase block shadow-[0_0_20px_rgba(0,242,254,0.4)]"
              >
                HIRE ANZIL ➔
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
