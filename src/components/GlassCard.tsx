import React, { useRef, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: 'cyan' | 'amber' | 'none';
  tilt?: boolean;
  onClick?: () => void;
  id?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glow = 'none',
  tilt = true,
  onClick,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation (max 6deg)
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  let glowStyles = '';
  if (glow === 'cyan' || (isHovered && glow === 'none')) {
    glowStyles = 'hover:border-[#00F2FE]/40 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_30px_-5px_rgba(0,242,254,0.25)]';
  }
  if (glow === 'amber') {
    glowStyles = 'border-[#F59E0B]/30 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_30px_-5px_rgba(245,158,11,0.22)] hover:border-[#F59E0B]/60 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_40px_-5px_rgba(245,158,11,0.35)]';
  }

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transform || undefined,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'transform 0.12s ease-out, border-color 0.3s, box-shadow 0.3s, background-color 0.3s' : 'transform 0.4s ease-out, border-color 0.3s, box-shadow 0.3s, background-color 0.3s',
      }}
      className={`relative rounded-2xl bg-[#0E1522]/75 backdrop-blur-xl border border-white/[0.09] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] ${glowStyles} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Subtle top edge light reflection */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-t-2xl" />
      {children}
    </div>
  );
};
