import React, { useState, useEffect, useRef } from 'react';
import {
  Gem,
  Cpu,
  Layers,
  Globe,
  Terminal,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { CAPABILITIES, PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguage } from '../data/translations';

const getIcon = (iconName: string, theme: 'cyan' | 'purple' | 'amber') => {
  const colorClass =
    theme === 'purple'
      ? 'text-[#C084FC] drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]'
      : theme === 'amber'
      ? 'text-[#F59E0B] drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]'
      : 'text-[#00F2FE] drop-shadow-[0_0_10px_rgba(0,242,254,0.6)]';

  switch (iconName) {
    case 'Gem':
      return <Gem className={`w-6 h-6 ${colorClass}`} />;
    case 'Cpu':
      return <Cpu className={`w-6 h-6 ${colorClass}`} />;
    case 'Layers':
      return <Layers className={`w-6 h-6 ${colorClass}`} />;
    case 'Globe':
      return <Globe className={`w-6 h-6 ${colorClass}`} />;
    case 'Terminal':
      return <Terminal className={`w-6 h-6 ${colorClass}`} />;
    case 'Zap':
      return <Zap className={`w-6 h-6 ${colorClass}`} />;
    default:
      return <Gem className={`w-6 h-6 ${colorClass}`} />;
  }
};

const CAPABILITY_CARD_ANIMATIONS = [
  'floatCapCard1 5.6s ease-in-out infinite 0s',
  'floatCapCard2 6.5s ease-in-out infinite 0.7s',
  'floatCapCard3 5.9s ease-in-out infinite 1.4s',
  'floatCapCard4 6.7s ease-in-out infinite 0.3s',
  'floatCapCard5 5.5s ease-in-out infinite 1.1s',
  'floatCapCard6 7.0s ease-in-out infinite 1.8s',
];

interface CardFallingDustProps {
  seed?: number;
}

const CardFallingDust: React.FC<CardFallingDustProps> = ({ seed = 0 }) => {
  const baseOffset = (seed * 0.75) % 4;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* Sparkle 1: 4-Point Diamond Star (Cyan) */}
      <div
        className="absolute left-[18%] top-3"
        style={{
          animation: `cardDustFall1 4.5s ease-in-out infinite ${(0.2 + baseOffset) % 4}s`,
        }}
      >
        <svg
          className="w-2.5 h-2.5 text-[#00F2FE] drop-shadow-[0_0_8px_#00F2FE]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      {/* Sparkle 2: Luminous White Orb with Cyan Glow */}
      <div
        className="absolute left-[52%] top-5"
        style={{
          animation: `cardDustFall2 5.0s ease-in-out infinite ${(1.8 + baseOffset) % 4}s`,
        }}
      >
        <span className="block w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#00F2FE,0_0_12px_rgba(56,189,248,0.8)]" />
      </div>

      {/* Sparkle 3: 4-Point Diamond Star (Sky Blue) */}
      <div
        className="absolute left-[78%] top-2"
        style={{
          animation: `cardDustFall3 4.6s ease-in-out infinite ${(1.0 + baseOffset) % 4}s`,
        }}
      >
        <svg
          className="w-2 h-2 text-[#38BDF8] drop-shadow-[0_0_7px_#38BDF8]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      {/* Sparkle 4: Soft Shimmering Aqua Orb */}
      <div
        className="absolute left-[36%] top-6"
        style={{
          animation: `cardDustFall4 5.2s ease-in-out infinite ${(2.6 + baseOffset) % 4}s`,
        }}
      >
        <span className="block w-1 h-1 rounded-full bg-[#67E8F9] shadow-[0_0_6px_#67E8F9,0_0_10px_#00F2FE]" />
      </div>
    </div>
  );
};

interface AboutCapabilitiesProps {
  playClickSound?: () => void;
  currentLanguage?: SupportedLanguage;
  locale?: SupportedLanguage;
}

interface AboutSectionTranslation {
  sectionHeader: string;
  paragraph: string;
  card1: { title: string; text: string };
  card2: { title: string; text: string };
  card3: { title: string; text: string };
}

export const ABOUT_TRANSLATIONS: Record<SupportedLanguage, AboutSectionTranslation> = {
  English: {
    sectionHeader: 'WHO I AM',
    paragraph:
      "Hi, I'm ANZIL HAYAT. I am an AI-powered commerce specialist and digital creator. Backed by a strong background in scaling brands across Amazon, TikTok Shop, and Etsy, I now combine advanced vibe coding workflows with e-commerce strategy to build high-converting digital storefronts and premium assets.",
    card1: {
      title: 'Digital Products',
      text: 'Creating premium, ready-to-sell assets, e-books, and custom digital templates optimized for global audiences.',
    },
    card2: {
      title: 'AI Automation',
      text: 'Leveraging cutting-edge AI workflows and vibe coding systems to build intelligent, fast-scaling web applications.',
    },
    card3: {
      title: 'UI/UX Design',
      text: 'Crafting beautiful, dark-mode glassmorphic user interfaces that deliver smooth animations and a premium user experience.',
    },
  },
  '한국어 (Korean)': {
    sectionHeader: '자기소개',
    paragraph:
      '안녕하세요, 안질 하야트(ANZIL HAYAT)입니다. 저는 AI 기반 커머스 전문가이자 디지털 크리에이터입니다. 아마존, 틱톡 숍, 엣시에서 브랜드를 성장시킨 탄탄한 경험을 바탕으로, 이제는 고급 바이브 코딩 워크플로우와 이커머스 전략을 결합하여 전환율이 높은 디지털 스토어프론트와 프리미엄 자산을 구축하고 있습니다.',
    card1: {
      title: '디지털 상품',
      text: '글로벌 오디언스에 최적화된 프리미엄 바로 판매 가능한 자산, 전자책, 맞춤형 디지털 템플릿 제작.',
    },
    card2: {
      title: 'AI 자동화',
      text: '최첨단 AI 워크플로우와 바이브 코딩 시스템을 활용하여 지능적이고 빠르게 확장 가능한 웹 애플리케이션 구축.',
    },
    card3: {
      title: 'UI/UX 디자인',
      text: '부드러운 애니메이션과 프리미엄 사용자 경험을 제공하는 아름다운 다크 모드 글래스모피즘 사용자 인터페이스 제작.',
    },
  },
  '日本語 (Japanese)': {
    sectionHeader: '自己紹介',
    paragraph:
      'こんにちは、アンジル・ハヤト（ANZIL HAYAT）です。私はAI駆動型커머스（コマース）専門家であり、デジタルクリエイターです。Amazon、TikTok Shop、Etsyでブランドをスケールさせた強力なバックグラウンドを持ち、現在は高度なバイブコーディングワークフローとEコマース戦略を組み合わせて、高コンバージョンなデジタルストアフロントとプレミアムアセットを構築しています。',
    card1: {
      title: 'デジタル製品',
      text: 'グローバルオーディエンス向けに最適化された、プレミアムな即売可能アセット、電子書籍、カスタムデジタルテンプレートの作成。',
    },
    card2: {
      title: 'AI自動化',
      text: '最先端のAIワークフローとバイブコーディングシステムを活用して、インテリジェントで高速スケールなウェブアプリケーションを構築。',
    },
    card3: {
      title: 'UI/UXデザイン',
      text: '滑らかなアニメーションとプレミアムなユーザーエクスペリエンスを提供する、美しいダークモードのグラスモフィズムユーザーインターフェイスの制作。',
    },
  },
  'العربية (Arabic)': {
    sectionHeader: 'من أنا',
    paragraph:
      'مرحباً، أنا أنزيل حياة. خبيرة تجارة إلكترونية مدعومة بالذكاء الاصطناعي وصانعة محتوى رقمي. مع خلفية قوية في توسيع نطاق العلامات التجارية عبر أمازون، وتيك توك شوب، وإيتسي، أجمع الآن بين سير عمل البرمجة المتقدمة (vibe coding) واستراتيجيات التجارة الإلكترونية لبناء واجهات متاجر رقمية عالية التحويل وأصول مميزة.',
    card1: {
      title: 'المنتجات الرقمية',
      text: 'إنشاء أصول مميزة جاهزة للبيع، وكتب إلكترونية، وقوالب رقمية مخصصة ومحسنة للجماهير العالمية.',
    },
    card2: {
      title: 'أتمتة الذكاء الاصطناعي',
      text: 'الاستفادة من سير عمل الذكاء الاصطناعي المتطور وأنظمة البرمجة (vibe coding) لبناء تطبيقات ويب ذكية وسريعة التوسع.',
    },
    card3: {
      title: 'تصميم واجهة المستخدم',
      text: 'صياغة واجهات مستخدم زجاجية (glassmorphic) جميلة بالوضع الداكن توفر رسومًا متحركة سلسة وتجربة مستخدم مميزة.',
    },
  },
  'Deutsch (German)': {
    sectionHeader: 'WER ICH BIN',
    paragraph:
      'Hallo, ich bin ANZIL HAYAT. Ich bin eine KI-gestützte E-Commerce-Spezialistin und digitale Schöpferin. Mit einem starken Hintergrund in der Skalierung von Marken auf Amazon, TikTok Shop und Etsy kombiniere ich nun fortschrittliche Vibe-Coding-Workflows mit E-Commerce-Strategien, um hochkonvertierende digitale Storefronts und Premium-Assets aufzubauen.',
    card1: {
      title: 'Digitale Produkte',
      text: 'Erstellung von verkaufsfertigen Premium-Assets, E-Books und maßgeschneiderten digitalen Vorlagen, optimiert für ein globales Publikum.',
    },
    card2: {
      title: 'KI-Automatisierung',
      text: 'Nutzung modernster KI-Workflows und Vibe-Coding-Systeme zur Erstellung intelligenter, schnell skalierbarer Webanwendungen.',
    },
    card3: {
      title: 'UI/UX Design',
      text: 'Gestaltung wunderschöner, dunkelmodus-glassmorphischer Benutzeroberflächen, die flüssige Animationen und ein erstklassiges Benutzererlebnis bieten.',
    },
  },
};

const renderParagraphWithHighlight = (text: string) => {
  const highlights = [
    '안질 하야트(ANZIL HAYAT)',
    'アンジル・ハヤト（ANZIL HAYAT）',
    'أنزيل حياة',
    'ANZIL HAYAT',
  ];

  for (const name of highlights) {
    if (text.includes(name)) {
      const parts = text.split(name);
      return (
        <>
          {parts[0]}
          <strong className="text-[#00F2FE] font-black drop-shadow-[0_0_15px_rgba(0,242,254,0.6)]">
            {name}
          </strong>
          {parts.slice(1).join(name)}
        </>
      );
    }
  }

  return text;
};

interface CardSparkleParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
  rotation: number;
  rotSpeed: number;
  isStar: boolean;
}

export const AboutCapabilities: React.FC<AboutCapabilitiesProps> = ({
  playClickSound,
  currentLanguage,
  locale,
}) => {
  const { language: contextLanguage, t } = useLanguage();
  const activeLanguage: SupportedLanguage = currentLanguage || locale || contextLanguage || 'English';
  const aboutData = ABOUT_TRANSLATIONS[activeLanguage] || ABOUT_TRANSLATIONS['English'];
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [isAboutRevealed, setIsAboutRevealed] = useState<boolean>(false);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const capabilitiesSectionRef = useRef<HTMLElement | null>(null);
  const capabilitiesCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const cardSparklesRef = useRef<CardSparkleParticle[]>([]);
  const isSparkleAnimatingRef = useRef<boolean>(false);
  const startSparkleAnimationRef = useRef<() => void>(() => {});
  const lastMovePosRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

  // Scroll reveal observer for About / Who I Am section
  useEffect(() => {
    const container = aboutSectionRef.current;
    if (!container) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAboutRevealed(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealObserver.observe(container);
    return () => revealObserver.disconnect();
  }, []);

  // Canvas resize and render loop for Core Capabilities interactive hover sparkles
  useEffect(() => {
    const canvas = capabilitiesCanvasRef.current;
    const section = capabilitiesSectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number | null = null;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const updateSize = () => {
      const rect = section.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(section);
    window.addEventListener('resize', updateSize);

    const render = () => {
      const particles = cardSparklesRef.current;
      if (particles.length === 0) {
        ctx.clearRect(0, 0, width, height);
        isSparkleAnimatingRef.current = false;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy += 0.035; // Gentle downward gravity
        p.rotation += p.rotSpeed;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.alpha;

        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fillStyle = p.color;

        if (p.isStar) {
          // 4-point glowing diamond star sparkle
          const s = p.size;
          ctx.beginPath();
          ctx.moveTo(0, -s * 1.6);
          ctx.quadraticCurveTo(0, 0, s * 1.6, 0);
          ctx.quadraticCurveTo(0, 0, 0, s * 1.6);
          ctx.quadraticCurveTo(0, 0, -s * 1.6, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s * 1.6);
          ctx.closePath();
          ctx.fill();
        } else {
          // Shimmering circular orb
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    startSparkleAnimationRef.current = () => {
      if (!isSparkleAnimatingRef.current && cardSparklesRef.current.length > 0) {
        isSparkleAnimatingRef.current = true;
        animId = requestAnimationFrame(render);
      }
    };

    return () => {
      if (animId) cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const section = capabilitiesSectionRef.current;
    if (!section) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const dist = Math.hypot(mouseX - lastMovePosRef.current.x, mouseY - lastMovePosRef.current.y);
    if (dist < 3 && cardSparklesRef.current.length > 50) return;

    lastMovePosRef.current = { x: mouseX, y: mouseY };

    const sectionRect = section.getBoundingClientRect();
    const cursorX = mouseX - sectionRect.left;
    const cursorY = mouseY - sectionRect.top;

    const colors = ['#00F2FE', '#38BDF8', '#FFFFFF', '#67E8F9', '#C084FC'];
    const count = 1 + (Math.random() < 0.65 ? 1 : 0);

    for (let k = 0; k < count; k++) {
      if (cardSparklesRef.current.length >= 90) break;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const speed = 0.5 + Math.random() * 0.9;

      cardSparklesRef.current.push({
        x: cursorX + (Math.random() - 0.5) * 6,
        y: cursorY + (Math.random() - 0.5) * 4,
        vx: (Math.random() - 0.5) * 0.7,
        vy: speed, // Gently float downwards for a few pixels
        size: 1.6 + Math.random() * 1.8,
        alpha: 1,
        decay: 0.034 + Math.random() * 0.02, // Quick fade-out (~25 frames)
        color,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.15,
        isStar: Math.random() < 0.65,
      });
    }

    startSparkleAnimationRef.current();
  };

  const filteredCapabilities =
    activeFilter === 'ALL'
      ? CAPABILITIES
      : CAPABILITIES.filter((c) => c.category === activeFilter);

  const categories = [
    'ALL',
    'PERFORMANCE',
    'VELOCITY',
    'ARCHITECTURE',
    'IMMERSION',
    'FULLSTACK',
    'OPTIMIZATION',
  ];

  const categoryLabels: Record<string, string> = {
    ALL: t.capabilities.categories.all,
    PERFORMANCE: t.capabilities.categories.performance,
    ARCHITECTURE: t.capabilities.categories.architecture,
    VELOCITY: t.capabilities.categories.velocity,
    IMMERSION: t.capabilities.categories.immersion,
    FULLSTACK: t.capabilities.categories.fullstack,
    OPTIMIZATION: t.capabilities.categories.optimization,
  };

  return (
    <div className="space-y-24">
      {/* ========================================================================= */}
      {/* 1. WHO I AM / PHILOSOPHY SECTION (COMPLETELY TRANSPARENT WRAPPER)          */}
      {/* ========================================================================= */}
      <section
        ref={aboutSectionRef}
        id="about"
        className="relative z-10 scroll-mt-28 overflow-hidden py-10 sm:py-14 bg-transparent"
      >
        {/* Scoped CSS Keyframes for Gentle Floating Cards */}
        <style>{`
          @keyframes floatCard1 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes floatCard2 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-11px); }
          }
          @keyframes floatCard3 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-7px); }
          }
          @keyframes cardDustFall1 {
            0% {
              transform: translate3d(0, 0, 0) scale(0.35) rotate(0deg);
              opacity: 0;
            }
            15% {
              opacity: 0.85;
              transform: translate3d(3px, 22px, 0) scale(1) rotate(25deg);
            }
            60% {
              opacity: 0.65;
              transform: translate3d(7px, 75px, 0) scale(0.85) rotate(60deg);
            }
            85% {
              opacity: 0.2;
            }
            100% {
              transform: translate3d(10px, 120px, 0) scale(0.3) rotate(90deg);
              opacity: 0;
            }
          }
          @keyframes cardDustFall2 {
            0% {
              transform: translate3d(0, 0, 0) scale(0.3) rotate(0deg);
              opacity: 0;
            }
            20% {
              opacity: 0.9;
              transform: translate3d(-3px, 28px, 0) scale(1) rotate(35deg);
            }
            65% {
              opacity: 0.6;
              transform: translate3d(-7px, 85px, 0) scale(0.8) rotate(75deg);
            }
            85% {
              opacity: 0.2;
            }
            100% {
              transform: translate3d(-10px, 135px, 0) scale(0.25) rotate(110deg);
              opacity: 0;
            }
          }
          @keyframes cardDustFall3 {
            0% {
              transform: translate3d(0, 0, 0) scale(0.35) rotate(0deg);
              opacity: 0;
            }
            18% {
              opacity: 0.8;
              transform: translate3d(3px, 20px, 0) scale(1) rotate(-30deg);
            }
            60% {
              opacity: 0.55;
              transform: translate3d(6px, 70px, 0) scale(0.8) rotate(-70deg);
            }
            85% {
              opacity: 0.15;
            }
            100% {
              transform: translate3d(9px, 110px, 0) scale(0.3) rotate(-100deg);
              opacity: 0;
            }
          }
          @keyframes cardDustFall4 {
            0% {
              transform: translate3d(0, 0, 0) scale(0.3) rotate(0deg);
              opacity: 0;
            }
            22% {
              opacity: 0.85;
              transform: translate3d(-2px, 32px, 0) scale(0.95) rotate(40deg);
            }
            65% {
              opacity: 0.6;
              transform: translate3d(-6px, 90px, 0) scale(0.75) rotate(80deg);
            }
            88% {
              opacity: 0.15;
            }
            100% {
              transform: translate3d(-9px, 140px, 0) scale(0.25) rotate(120deg);
              opacity: 0;
            }
          }
        `}</style>

        {/* Completely Transparent Wrapper Container (Seamless bleed through from global background video) */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 bg-transparent">
          <div className="bg-transparent p-0">
            {/* Header: Badge & Title with Scroll Reveal */}
            <div className="mb-6 reveal-on-scroll">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-3">
                ABOUT THE ARCHITECT
              </span>
              <h2
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  textShadow: 'none',
                  filter: 'none',
                  WebkitFilter: 'none',
                  backdropFilter: 'none',
                  WebkitBackdropFilter: 'none',
                }}
                className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[0.12em] leading-tight antialiased select-none"
              >
                {aboutData.sectionHeader}
              </h2>
            </div>

            {/* Lead Narrative with Scroll Reveal */}
            <p className="text-base sm:text-xl lg:text-2xl text-white font-medium leading-relaxed max-w-4xl mb-10 drop-shadow-[0_2px_16px_rgba(0,0,0,0.98)] reveal-on-scroll stagger-delay-1">
              {renderParagraphWithHighlight(aboutData.paragraph)}
            </p>

            {/* Individual Feature Cards with Soft Glassmorphism, Floating Animations & Staggered Scroll Reveal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Card 1: Digital Products */}
              <div className="reveal-on-scroll stagger-delay-2">
                <div
                  style={{ animation: 'floatCard1 5.5s ease-in-out infinite' }}
                  className="relative z-20 group p-6 sm:p-7 rounded-2xl backdrop-blur-md bg-[#070B14]/40 border border-[#00F2FE]/25 hover:border-[#00F2FE]/70 hover:bg-[#070B14]/55 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(0,242,254,0.25)] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {/* Top specular reflection hairline */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00F2FE]/50 to-transparent pointer-events-none rounded-t-2xl" />

                  {/* Continuous automated falling dust */}
                  <CardFallingDust seed={0} />

                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <span className="text-2xl drop-shadow-[0_0_10px_rgba(0,242,254,0.5)]">⚡</span>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/30 shadow-[0_0_10px_rgba(0,242,254,0.2)]">
                      E-COMMERCE
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00F2FE] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-colors relative z-10">
                    {aboutData.card1.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D1D1DB] leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] relative z-10">
                    {aboutData.card1.text}
                  </p>
                </div>
              </div>

              {/* Card 2: AI Automation */}
              <div className="reveal-on-scroll stagger-delay-3">
                <div
                  style={{ animation: 'floatCard2 6.8s ease-in-out infinite 0.7s' }}
                  className="relative z-20 group p-6 sm:p-7 rounded-2xl backdrop-blur-md bg-[#070B14]/40 border border-[#A855F7]/25 hover:border-[#A855F7]/70 hover:bg-[#070B14]/55 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {/* Top specular reflection hairline */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#A855F7]/50 to-transparent pointer-events-none rounded-t-2xl" />

                  {/* Continuous automated falling dust */}
                  <CardFallingDust seed={1} />

                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <span className="text-2xl drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">✨</span>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#A855F7]/10 text-[#C084FC] border border-[#A855F7]/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                      10X SPEED
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C084FC] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-colors relative z-10">
                    {aboutData.card2.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D1D1DB] leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] relative z-10">
                    {aboutData.card2.text}
                  </p>
                </div>
              </div>

              {/* Card 3: UI/UX Design */}
              <div className="reveal-on-scroll stagger-delay-4">
                <div
                  style={{ animation: 'floatCard3 5.9s ease-in-out infinite 1.4s' }}
                  className="relative z-20 group p-6 sm:p-7 rounded-2xl backdrop-blur-md bg-[#070B14]/40 border border-emerald-400/25 hover:border-emerald-400/70 hover:bg-[#070B14]/55 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(52,211,153,0.25)] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {/* Top specular reflection hairline */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent pointer-events-none rounded-t-2xl" />

                  {/* Continuous automated falling dust */}
                  <CardFallingDust seed={2} />

                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <span className="text-2xl drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">💎</span>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                      MODERN UI
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-colors relative z-10">
                    {aboutData.card3.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D1D1DB] leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] relative z-10">
                    {aboutData.card3.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Status & Action Bar with Soft Translucent Glass */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#070B14]/40 backdrop-blur-md border border-[#00F2FE]/25 hover:border-[#00F2FE]/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-wrap items-center justify-between gap-4 relative z-20 reveal-on-scroll stagger-delay-5">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F2FE] shadow-[0_0_10px_#00F2FE] animate-pulse" />
                <span className="text-sm font-semibold text-white/90">
                  Ready to deploy high-impact web flagships immediately
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MagneticButton
                  href="#contact"
                  onClick={playClickSound}
                  variant="primary"
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider"
                >
                  Let&apos;s Build Together ➔
                </MagneticButton>
                <MagneticButton
                  href="#works"
                  onClick={playClickSound}
                  variant="outline"
                  className="px-6 py-2.5 text-xs font-semibold"
                >
                  View Featured Reel ↗
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE CAPABILITIES SECTION                                              */}
      {/* ========================================================================= */}
      <section ref={capabilitiesSectionRef} id="capabilities" className="relative z-10 scroll-mt-28 bg-transparent">
        {/* Interactive Hover Sparkles Canvas Layer */}
        <canvas
          ref={capabilitiesCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-hidden"
          aria-hidden="true"
        />

        {/* Scoped CSS Keyframes for Gentle Floating Capability Cards */}
        <style>{`
          @keyframes floatCapCard1 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes floatCapCard2 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-11px); }
          }
          @keyframes floatCapCard3 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-7px); }
          }
          @keyframes floatCapCard4 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes floatCapCard5 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes floatCapCard6 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-11px); }
          }
        `}</style>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 reveal-on-scroll">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-3 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              {t.capabilities.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-[0.12em]">
              {t.capabilities.title}{' '}
              <span className="bg-gradient-to-r from-[#00F2FE] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">
                {t.capabilities.titleHighlight}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0AB] max-w-xl mx-auto mt-3">
              {t.capabilities.subtitle}
            </p>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    playClickSound();
                    setActiveFilter(cat);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-gradient-to-r from-[#00F2FE] via-[#0EA5E9] to-[#A855F7] text-[#050811] font-black shadow-[0_0_20px_rgba(0,242,254,0.45)] border border-cyan-300/40'
                      : 'bg-[#090F1C]/60 text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-[#A855F7]/40 border border-white/10 backdrop-blur-md'
                  }`}
                >
                  {categoryLabels[cat] || cat}
                </button>
              ))}
            </div>
          </div>

          {/* Capabilities Grid with Interactive Animated Glowing Borders & Lift */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCapabilities.map((cap, idx) => {
              const isAmber = cap.accentColor === 'amber';
              const isPurple = !isAmber && idx % 2 === 1;
              const capT = t.capabilities.items.find((item) => item.id === cap.id);
              const cardTitle = capT?.title || cap.title;
              const cardBadge = capT?.badge || cap.badge;
              const cardDescription = capT?.description || cap.description;
              const cardMetrics = capT?.metrics || cap.metrics;
              const cardTags = capT?.tags || cap.tags;

              return (
                <div
                  key={cap.id}
                  className="reveal-on-scroll h-full flex flex-col"
                  style={{
                    transitionDelay: `${(idx % 6) * 100 + 100}ms`,
                  }}
                >
                  <div
                    style={{
                      animation: CAPABILITY_CARD_ANIMATIONS[idx % CAPABILITY_CARD_ANIMATIONS.length],
                    }}
                    className="h-full flex flex-col"
                  >
                    <div
                      id={`capability-card-${cap.id}`}
                      onMouseMove={handleCardMouseMove}
                      className="relative p-[1px] rounded-2xl overflow-hidden group/skill transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(0,242,254,0.3),0_0_45px_rgba(168,85,247,0.25)] flex flex-col h-full cursor-default"
                    >
                    {/* Rotating Neon Cyan & Purple Glowing Border on Hover */}
                    <div
                      className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,#00F2FE_0deg,#A855F7_90deg,#00F2FE_180deg,#A855F7_270deg,#00F2FE_360deg)] opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 animate-spin [animation-duration:4s] pointer-events-none"
                    />

                    {/* Resting thin border when not hovered */}
                    <div
                      className={`absolute inset-0 rounded-2xl border pointer-events-none transition-opacity duration-300 group-hover/skill:opacity-0 ${
                        isPurple ? 'border-[#A855F7]/25' : isAmber ? 'border-[#F59E0B]/25' : 'border-[#00F2FE]/25'
                      }`}
                    />

                    {/* Inner Card Surface */}
                    <div className="relative rounded-[15px] bg-[#070B14]/40 group-hover/skill:bg-[#070B14]/55 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-7 sm:p-8 flex flex-col justify-between h-full z-10 overflow-hidden transition-colors duration-300">
                      {/* Top specular reflection glint */}
                      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none rounded-t-[15px]" />

                      {/* Continuous automated falling dust */}
                      <CardFallingDust seed={idx + 3} />

                      {/* Futuristic corner brackets that illuminate on hover */}
                      <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-[#00F2FE] pointer-events-none opacity-0 group-hover/skill:opacity-90 transition-opacity duration-300" />
                      <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-[#A855F7] pointer-events-none opacity-0 group-hover/skill:opacity-90 transition-opacity duration-300" />
                      <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-[#00F2FE] pointer-events-none opacity-0 group-hover/skill:opacity-90 transition-opacity duration-300" />
                      <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-[#A855F7] pointer-events-none opacity-0 group-hover/skill:opacity-90 transition-opacity duration-300" />

                      <div className="relative z-10">
                        {/* Header: Icon + Badge (Perfect Alignment) */}
                        <div className="flex items-center justify-between gap-4 mb-6">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.04] border flex-shrink-0 transition-all duration-300 group-hover/skill:scale-110 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] ${
                              isPurple
                                ? 'border-[#A855F7]/30 group-hover/skill:border-[#A855F7]/60 group-hover/skill:shadow-[0_0_18px_rgba(168,85,247,0.35)]'
                                : isAmber
                                ? 'border-[#F59E0B]/30 group-hover/skill:border-[#F59E0B]/60 group-hover/skill:shadow-[0_0_18px_rgba(245,158,11,0.35)]'
                                : 'border-[#00F2FE]/30 group-hover/skill:border-[#00F2FE]/60 group-hover/skill:shadow-[0_0_18px_rgba(0,242,254,0.35)]'
                            }`}
                          >
                            {getIcon(cap.iconName, isPurple ? 'purple' : isAmber ? 'amber' : 'cyan')}
                          </div>

                          <span
                            className={`text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full border whitespace-nowrap shadow-sm ${
                              isPurple
                                ? 'bg-[#A855F7]/10 border-[#A855F7]/30 text-[#C084FC] shadow-[0_0_10px_rgba(168,85,247,0.2)]'
                                : isAmber
                                ? 'bg-[#F59E0B]/10 border-[#F59E0B]/30 text-[#F59E0B] shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                                : 'bg-[#00F2FE]/10 border-[#00F2FE]/30 text-[#00F2FE] shadow-[0_0_10px_rgba(0,242,254,0.2)]'
                            }`}
                          >
                            {cardBadge}
                          </span>
                        </div>

                        {/* Title & Metrics */}
                        <div>
                          <h3 className="text-xl font-bold text-white tracking-wide transition-all duration-300 leading-snug mb-2.5 group-hover/skill:text-transparent group-hover/skill:bg-clip-text group-hover/skill:bg-gradient-to-r group-hover/skill:from-white group-hover/skill:via-[#00F2FE] group-hover/skill:to-[#A855F7]">
                            {cardTitle}
                          </h3>

                          {/* Metric pill */}
                          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 shadow-sm">
                            <Sparkles
                              className={`w-3.5 h-3.5 flex-shrink-0 ${
                                isPurple ? 'text-[#C084FC]' : isAmber ? 'text-[#F59E0B]' : 'text-[#00F2FE]'
                              }`}
                            />
                            <span className="text-white/85">{cardMetrics}</span>
                          </div>

                          <p className="text-sm text-[#A0A0AB] leading-relaxed mb-6 font-normal">
                            {cardDescription}
                          </p>
                        </div>
                      </div>

                      {/* Tags Footer */}
                      <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 items-center relative z-10">
                        {cardTags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-white/70 border border-white/10 hover:border-white/25 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
