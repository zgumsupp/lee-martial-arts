import React, { useRef, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: 'cyan' | 'purple' | 'dual' | 'amber' | 'none';
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

    // Subtle 3D tilt calculation (max 5deg)
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
    glowStyles =
      'border-[#00F2FE]/25 hover:border-[#00F2FE]/70 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_30px_rgba(0,242,254,0.25)]';
  } else if (glow === 'purple') {
    glowStyles =
      'border-[#A855F7]/25 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#A855F7]/70 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_30px_rgba(168,85,247,0.25)]';
  } else if (glow === 'dual') {
    glowStyles =
      'border-[#00F2FE]/25 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(0,242,254,0.15)] hover:border-[#00F2FE]/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_35px_rgba(0,242,254,0.25),0_0_35px_rgba(168,85,247,0.2)]';
  } else if (glow === 'amber') {
    glowStyles =
      'border-[#F59E0B]/25 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#F59E0B]/70 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_30px_rgba(245,158,11,0.25)]';
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
        transition: isHovered
          ? 'transform 0.12s ease-out, border-color 0.3s, box-shadow 0.3s, background-color 0.3s'
          : 'transform 0.4s ease-out, border-color 0.3s, box-shadow 0.3s, background-color 0.3s',
      }}
      className={`relative rounded-2xl bg-[#070B14]/40 hover:bg-[#070B14]/55 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 ${glowStyles} ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Subtle top edge light reflection */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none rounded-t-2xl" />

      {/* Futuristic corner accents on hover */}
      <div
        className={`absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-[#00F2FE] pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-80' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-[#A855F7] pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-80' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-[#00F2FE] pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-80' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-[#A855F7] pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-80' : 'opacity-0'
        }`}
      />

      {children}
    </div>
  );
};

