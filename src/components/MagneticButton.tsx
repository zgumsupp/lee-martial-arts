import React, { useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'amber';
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
      'bg-gradient-to-r from-[#00F2FE] to-[#0099FF] text-[#070A10] font-bold shadow-[0_0_25px_rgba(0,242,254,0.45)] hover:shadow-[0_0_40px_rgba(0,242,254,0.7)] border border-[#00F2FE]/50';
  } else if (variant === 'amber') {
    variantStyles =
      'bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#070A10] font-bold shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] border border-[#F59E0B]/50';
  } else if (variant === 'outline') {
    variantStyles =
      'bg-white/[0.04] text-white border border-white/20 hover:border-[#00F2FE]/60 hover:bg-[#00F2FE]/10 hover:text-[#00F2FE] hover:shadow-[0_0_25px_rgba(0,242,254,0.25)]';
  } else {
    variantStyles =
      'bg-white/[0.06] text-[#F4F4F6] border border-white/15 hover:bg-white/[0.12] hover:border-white/30';
  }

  const baseClasses = `relative inline-flex items-center justify-center rounded-full transition-transform duration-200 ease-out cursor-pointer select-none ${variantStyles} ${className}`;

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
