import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

export const ScrollDragonCompanion: React.FC = () => {
  const dragonRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  // 2D Free-Roaming Coordinates (vw and vh units)
  const currentXRef = useRef(14); // in vw
  const currentYRef = useRef(20); // in vh
  const targetXRef = useRef(14);
  const targetYRef = useRef(20);

  // Facing direction (true = facing right, false = facing left)
  const facingRightRef = useRef(true);
  const facingTransformRef = useRef(1);

  const lastScrollYRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    // Canvas resize handler
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Scroll listener linking vertical page progression from Hero to Footer
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const deltaY = currentScroll - lastScrollYRef.current;

      if (Math.abs(deltaY) > 2) {
        // Boost sparkle trail emission on active user scrolling
        spawnPixieDust(2);
      }

      lastScrollYRef.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Helper to spawn glowing pixie dust sparkles from dragon's active tail coordinates
    const spawnPixieDust = (count: number = 1) => {
      if (!dragonRef.current) return;
      const rect = dragonRef.current.getBoundingClientRect();

      // Calculate tail position dynamically based on current facing direction
      const tailXRatio = facingRightRef.current ? 0.22 : 0.78;
      const originX = rect.left + rect.width * tailXRatio;
      const originY = rect.top + rect.height * 0.72;

      const colors = ['#00F2FE', '#38BDF8', '#67E8F9', '#A855F7', '#FFFFFF'];

      for (let i = 0; i < count; i++) {
        // Cap active particles to preserve performance
        if (particlesRef.current.length > 60) break;

        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.PI * 0.5 + (Math.random() - 0.5) * 1.1;
        const speed = 0.6 + Math.random() * 1.6;

        particlesRef.current.push({
          x: originX + (Math.random() - 0.5) * 16,
          y: originY + (Math.random() - 0.5) * 12,
          vx: Math.cos(angle) * speed + (facingRightRef.current ? -0.4 : 0.4),
          vy: Math.sin(angle) * speed + 0.35, // gentle downward drift
          size: 2.2 + Math.random() * 3.0,
          color,
          alpha: 0.95,
          decay: 0.014 + Math.random() * 0.016,
        });
      }
    };

    // Continuous 60 FPS Render Loop (2D Free-Roaming Physics, Flapping Sway & Trail)
    let frameTick = 0;
    const renderLoop = () => {
      const time = performance.now() * 0.00065; // Organic time counter

      // 1. Calculate Scroll Progression (0 at Hero to 1 at Footer)
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const scrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);

      // 2. Full Vertical Canvas Freedom:
      // Smoothly glides through Hero (12vh), mid-sections, all the way to Footer (78vh)
      const baseVertical = 12 + scrollProgress * 66; // 12vh to 78vh
      const waveVertical = Math.sin(time * 1.3) * 7 + Math.cos(time * 0.6) * 5;
      targetYRef.current = Math.min(Math.max(baseVertical + waveVertical, 8), 84);

      // 3. Full Horizontal Canvas Freedom:
      // Multi-stage sinusoidal flight path roaming between ~8vw and ~76vw behind text & cards
      const waveHorizontal = Math.sin(time * 0.75) * 28 + Math.cos(time * 0.35) * 14;
      targetXRef.current = Math.min(Math.max(42 + waveHorizontal, 6), 80);

      // 4. Smooth Spring Lerp for Fluid Roaming Trajectory
      currentXRef.current += (targetXRef.current - currentXRef.current) * 0.038;
      currentYRef.current += (targetYRef.current - currentYRef.current) * 0.045;

      // 5. Detect Flight Direction & Smoothly Face Travel Trajectory
      const deltaX = targetXRef.current - currentXRef.current;
      if (deltaX > 0.08) {
        facingRightRef.current = true;
      } else if (deltaX < -0.08) {
        facingRightRef.current = false;
      }

      // Smoothly interpolate facing scale (1 for right, -1 for left)
      const targetFacing = facingRightRef.current ? 1 : -1;
      facingTransformRef.current += (targetFacing - facingTransformRef.current) * 0.08;

      if (dragonRef.current) {
        dragonRef.current.style.left = `${currentXRef.current}vw`;
        dragonRef.current.style.top = `${currentYRef.current}vh`;
      }

      // 6. Continuous Pixie Dust Trail Emitter from Active Coordinates
      frameTick++;
      if (frameTick % 16 === 0) {
        spawnPixieDust(1);
      }

      // 7. Render Pixie Dust Particles on Canvas
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const activeParticles: Particle[] = [];

        for (let i = 0; i < particlesRef.current.length; i++) {
          const p = particlesRef.current[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.025; // soft downward gravity
          p.alpha -= p.decay;

          if (p.alpha > 0.02) {
            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.color;
            ctx.fillStyle = p.color;

            // Diamond star sparkle
            const s = p.size;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y - s);
            ctx.lineTo(p.x + s * 0.35, p.y - s * 0.35);
            ctx.lineTo(p.x + s, p.y);
            ctx.lineTo(p.x + s * 0.35, p.y + s * 0.35);
            ctx.lineTo(p.x, p.y + s);
            ctx.lineTo(p.x - s * 0.35, p.y + s * 0.35);
            ctx.lineTo(p.x - s, p.y);
            ctx.lineTo(p.x - s * 0.35, p.y - s * 0.35);
            ctx.closePath();
            ctx.fill();

            // Bright core
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(p.x, p.y, s * 0.28, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
            activeParticles.push(p);
          }
        }

        particlesRef.current = activeParticles;
      }

      animFrameRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-10 overflow-hidden">
      <style>{`
        /* ========================================================================= */
        /* ORGANIC MULTI-LAYERED FLIGHT ANIMATION (FLAPPING, TILTING & BREATHING)    */
        /* ========================================================================= */

        /* Layer 1: Body sway, banking tilt and heave */
        @keyframes organicFlight {
          0% {
            transform: translate3d(0, 0, 0) rotate(-2.5deg) scale(1, 1);
          }
          18% {
            transform: translate3d(6px, -14px, 0) rotate(1.5deg) scale(0.97, 1.03);
          }
          35% {
            transform: translate3d(14px, -24px, 0) rotate(4deg) scale(1.03, 0.97);
          }
          52% {
            transform: translate3d(18px, -10px, 0) rotate(2deg) scale(0.98, 1.02);
          }
          68% {
            transform: translate3d(12px, 12px, 0) rotate(-1deg) scale(1.02, 0.98);
          }
          84% {
            transform: translate3d(4px, 20px, 0) rotate(-3.5deg) scale(0.97, 1.03);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(-2.5deg) scale(1, 1);
          }
        }

        /* Layer 2: Natural wing-flapping illusion & body expansion pulse */
        @keyframes wingPulseFlap {
          0%, 100% {
            transform: scale(1, 1);
            filter: drop-shadow(0 0 20px rgba(0, 242, 254, 0.65)) drop-shadow(0 10px 25px rgba(0, 0, 0, 0.85));
          }
          50% {
            transform: scale(1.04, 0.96) rotate(1.2deg);
            filter: drop-shadow(0 0 28px rgba(0, 242, 254, 0.9)) drop-shadow(0 14px 30px rgba(0, 0, 0, 0.9));
          }
        }

        .dragon-organic-flight {
          animation: organicFlight 5.8s ease-in-out infinite;
          will-change: transform;
        }

        .dragon-wing-flap {
          animation: wingPulseFlap 1.9s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>

      {/* Fullscreen Pixie Dust Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Dragon Character Container: Full Free-Roaming Position across Viewport Coordinates */}
      <div
        ref={dragonRef}
        style={{ top: '20vh', left: '14vw' }}
        className="absolute w-[160px] h-[160px] pointer-events-none select-none transition-all duration-300 ease-out will-change-transform"
      >
        {/* Soft Ambient Neon Glow Aura behind Dragon */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,242,254,0.3)_0%,rgba(56,189,248,0.12)_45%,transparent_70%)] blur-2xl pointer-events-none" />

        {/* Dynamic Motion Box: Multi-Layered Organic Flapping & Roaming Path */}
        <div className="relative w-full h-full flex items-center justify-center dragon-organic-flight">
          {/* User Requested Clean Image Asset: Scaled to 160x160 with Flap/Sway Layering */}
          <div className="w-full h-full dragon-wing-flap">
            <a
              href="https://ibb.co/pBXhrGS1"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-none select-none block w-full h-full"
              tabIndex={-1}
            >
              <img
                src="https://i.ibb.co/0RJsV8xn/Untitled-design-removebg-preview.png"
                alt="Untitled-design-removebg-preview"
                border="0"
                className="w-[160px] h-[160px] object-contain drop-shadow-[0_0_24px_rgba(0,242,254,0.7)] drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)] pointer-events-none select-none"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
