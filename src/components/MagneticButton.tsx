import React, { useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'purple' | 'amber';
  id?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  variant = 'primary',
  id,
}) => {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Magnetic pull with dampening
    setPosition({
      x: distanceX * 0.28,
      y: distanceY * 0.28,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  let variantStyles = '';
  if (variant === 'primary') {
    variantStyles =
      'bg-gradient-to-r from-[#00F2FE] via-[#0EA5E9] to-[#38BDF8] text-[#050811] font-black shadow-[0_0_25px_rgba(0,242,254,0.45),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(0,242,254,0.7),inset_0_1px_0_rgba(255,255,255,0.6)] border border-cyan-200/50';
  } else if (variant === 'purple') {
    variantStyles =
      'bg-gradient-to-r from-[#A855F7] via-[#9333EA] to-[#7E22CE] text-white font-black shadow-[0_0_25px_rgba(168,85,247,0.45),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7),inset_0_1px_0_rgba(255,255,255,0.5)] border border-purple-300/40';
  } else if (variant === 'amber') {
    variantStyles =
      'bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] text-[#050811] font-black shadow-[0_0_25px_rgba(245,158,11,0.45),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] border border-amber-300/40';
  } else if (variant === 'outline') {
    variantStyles =
      'bg-[#090F1C]/60 text-white backdrop-blur-xl border border-white/15 hover:border-[#00F2FE]/60 hover:bg-[#00F2FE]/10 hover:text-[#00F2FE] hover:shadow-[0_0_25px_rgba(0,242,254,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]';
  } else {
    variantStyles =
      'bg-[#090F1C]/60 text-white backdrop-blur-xl border border-white/12 hover:border-[#A855F7]/50 hover:bg-[#A855F7]/10 hover:text-[#C084FC] hover:shadow-[0_0_25px_rgba(168,85,247,0.25),inset_0_1px_0_rgba(255,255,255,0.15)]';
  }

  const baseClasses = `relative inline-flex items-center justify-center rounded-full transition-all duration-200 ease-out cursor-pointer select-none ${variantStyles} ${className}`;

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
  };

  if (href) {
    return (
      <a
        id={id}
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      id={id}
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={baseClasses}
    >
      {children}
    </button>
  );
};
