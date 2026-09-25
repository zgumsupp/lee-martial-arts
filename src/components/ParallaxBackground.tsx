import React, { useEffect, useState } from 'react';

export const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to [-1, 1]
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x: nx, y: ny });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0B0F17]">
      {/* Layer 0: Subtle Luxury Grid Mesh (moves very slowly) */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          transform: `translate3d(0, ${scrollY * 0.04}px, 0)`,
        }}
      />

      {/* Layer 1: Ambient Neon Cyan Orb (Top Left - moves at 0.14 rate) */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #00F2FE 0%, rgba(0,242,254,0.15) 50%, transparent 80%)',
          top: '-150px',
          left: '-100px',
          transform: `translate3d(${mousePos.x * 25}px, ${scrollY * 0.14 + mousePos.y * 25}px, 0)`,
          transition: 'transform 0.2s cubic-bezier(0.1, 0.9, 0.2, 1)',
        }}
      />

      {/* Layer 2: Soft Amber Gold Orb (Center Right - moves at 0.22 rate) */}
      <div
        className="absolute w-[520px] h-[520px] rounded-full blur-[130px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #F59E0B 0%, rgba(245,158,11,0.15) 50%, transparent 80%)',
          top: '35%',
          right: '-120px',
          transform: `translate3d(${mousePos.x * -35}px, ${-scrollY * 0.2 + mousePos.y * -30}px, 0)`,
          transition: 'transform 0.25s cubic-bezier(0.1, 0.9, 0.2, 1)',
        }}
      />

      {/* Layer 3: Deep Royal Purple Glow (Bottom Left - moves at 0.18 rate) */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #7000FF 0%, rgba(112,0,255,0.12) 50%, transparent 80%)',
          bottom: '5%',
          left: '10%',
          transform: `translate3d(${mousePos.x * 30}px, ${scrollY * 0.08}px, 0)`,
          transition: 'transform 0.25s cubic-bezier(0.1, 0.9, 0.2, 1)',
        }}
      />

      {/* Layer 4: Abstract Glass Geometric Accents (moves at 0.32 rate) */}
      <div
        className="absolute top-[28%] left-[8%] w-32 h-32 rounded-3xl border border-white/[0.08] bg-white/[0.01] backdrop-blur-[2px] opacity-40 rotate-12"
        style={{
          transform: `translate3d(${mousePos.x * -18}px, ${-scrollY * 0.28}px, 0) rotate(${12 + scrollY * 0.03}deg)`,
          boxShadow: '0 0 30px rgba(0,242,254,0.08)',
        }}
      />
      <div
        className="absolute top-[65%] right-[12%] w-40 h-40 rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/[0.01] opacity-30"
        style={{
          transform: `translate3d(${mousePos.x * 20}px, ${-scrollY * 0.22}px, 0)`,
          boxShadow: '0 0 40px rgba(245,158,11,0.08)',
        }}
      />

      {/* Subtle Noise Vignette on Edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0B0F17_95%)] opacity-80" />
    </div>
  );
};
