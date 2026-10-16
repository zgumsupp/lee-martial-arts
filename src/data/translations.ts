export const SUPPORTED_LANGUAGES = [
  'English',
  '한국어 (Korean)',
  '日本語 (Japanese)',
  'العربية (Arabic)',
  'Deutsch (German)',
] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export interface LanguageData {
  code: string;
  label: string;
  flag: string;
  nav: {
    about: string;
    capabilities: string;
    journey: string;
    vibeMatrix: string;
    works: string;
    reviews: string;
    contact: string;
    portfolioMatrixBadge: string;
    soundOn: string;
    soundOff: string;
  };
  hero: {
    statusBadge: string;
    heading: string;
    pill: string;
    bio: string;
    exploreBtn: string;
    worksBtn: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
  };
  about?: {
    sectionHeader: string;
    paragraph: string;
    card1: { title: string; text: string };
    card2: { title: string; text: string };
    card3: { title: string; text: string };
  };
  capabilities: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    categories: {
      all: string;
      performance: string;
      architecture: string;
      velocity: string;
      immersion: string;
      fullstack: string;
      optimization: string;
    };
    items: Array<{
      id: string;
      title: string;
      category: string;
      badge: string;
      description: string;
      metrics: string;
      tags: string[];
    }>;
  };
  journey: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    stages: Array<{
      stage: string;
      navLabel: string;
      stageBadge: string;
      year: string;
      title: string;
      subtitle: string;
      description: string;
      metricLabel: string;
      metric: string;
      status: string;
      keyDeliverables: string[];
      tools: string[];
    }>;
  };
  comparison: {
    badge: string;
    title: string;
    subtitle: string;
    traditionalCardTitle: string;
    traditionalBadge: string;
    vibeCardTitle: string;
    vibeBadge: string;
    rows: Array<{
      aspect: string;
      traditional: string;
      vibeCoding: string;
    }>;
  };
  works: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    categories: {
      all: string;
      ecommerce: string;
      digitalAssets: string;
      storefrontDesign: string;
    };
    viewLiveBtn: string;
    codebaseBtn: string;
    items: Array<{
      id: string;
      title: string;
      category: string;
      tagline: string;
      description: string;
      stats: Array<{ label: string; value: string }>;
      tags: string[];
      architecture: string[];
    }>;
  };
  testimonials: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: Array<{
      id: string;
      name: string;
      role: string;
      company: string;
      content: string;
      metrics: string;
    }>;
  };
  contact: {
    badge: string;
    heading: string;
    subtitle: string;
    directInbox: string;
    availableBadge: string;
    locationNote: string;
    networkMatrix: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      projectTypeLabel: string;
      budgetLabel: string;
      projectTypes: string[];
      budgetOptions: string[];
      messagePlaceholder: string;
      submitBtn: string;
      sendingBtn: string;
      successTitle: string;
      successDesc: string;
      resetBtn: string;
    };
  };
  chatbot: {
    headerTitle: string;
    headerSubtitle: string;
    statusOnline: string;
    initialGreeting: string;
    quickPrompts: string[];
    inputPlaceholder: string;
    botResponses: {
      etsy: string;
      vibe: string;
      speed: string;
      hire: string;
      default: string;
    };
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, LanguageData> = {
  English: {
    code: 'EN',
    label: 'English',
    flag: '🌐',
    nav: {
      about: 'About',
      capabilities: 'Capabilities',
      journey: 'Journey',
      vibeMatrix: 'Vibe Matrix',
      works: 'Featured Works',
      reviews: 'Reviews',
      contact: 'Contact',
      portfolioMatrixBadge: 'PORTFOLIO MATRIX 2026',
      soundOn: 'Audio FX Enabled',
      soundOff: 'Audio FX Muted',
    },
    hero: {
      statusBadge: 'PORTFOLIO MATRIX 2026',
      heading: 'ANZIL',
      pill: 'Hi, this is ANZIL ⚡ AI Vibecoder & Frontend Specialist',
      bio: 'I build modern, high-converting digital products and ultra-fast websites using advanced AI workflows. Turning creative ideas into secure, ready-to-sell digital flagships.',
      exploreBtn: 'Explore Journey',
      worksBtn: 'View Live Works',
      stat1Label: 'Vibecoding Velocity',
      stat2Label: 'Secure Codebase',
      stat3Label: 'Digital Products',
      stat4Label: 'Global Availability',
    },
    capabilities: {
      badge: 'CORE COMPETENCIES',
      title: 'HIGH-IMPACT DIGITAL',
      titleHighlight: 'CAPABILITIES',
      subtitle: 'Merging hands-on global e-commerce marketplace depth with next-generation AI vibe coding velocity.',
      categories: {
        all: 'All Capabilities',
        performance: 'Performance',
        architecture: 'Architecture',
        velocity: 'Velocity',
        immersion: 'Immersion',
        fullstack: 'Fullstack',
        optimization: 'Optimization',
      },
      items: [
        {
          id: 'ecommerce',
          title: 'Cross-Platform E-Commerce',
          category: 'PERFORMANCE',
          badge: 'CONVERSION CORE',
          description: 'Leveraging deep hands-on expertise in Amazon Wholesale/Private Label, TikTok Shop, and Etsy to manage full-lifecycle physical product stores and operations.',
          metrics: '<0.4s FCP • 99+ Speed Index',
          tags: ['Amazon PL/WS', 'TikTok Shop', 'Etsy Expert'],
        },
        {
          id: 'storefront-design',
          title: 'Storefront & Profile Design',
          category: 'ARCHITECTURE',
          badge: 'ENTERPRISE SCALE',
          description: 'Designing high-converting, custom digital storefront profiles and premium e-commerce layouts tailored to capture global marketplace audiences.',
          metrics: 'WCAG AAA • 100% Tokenized',
          tags: ['UI/UX Layouts', 'Brand Assets', 'Visual Identity'],
        },
        {
          id: 'vibecoding',
          title: 'AI Vibe Coding & Workflows',
          category: 'VELOCITY',
          badge: '10X VELOCITY',
          description: 'Accelerating web project execution by using advanced AI-driven coding setups to build functional, interactive micro-tools at 10x velocity.',
          metrics: '10x Speed-to-Market',
          tags: ['Cursor AI', 'Antigravity', 'AI Prompting'],
        },
        {
          id: 'digital-assets',
          title: 'Digital Asset Design',
          category: 'IMMERSION',
          badge: 'SPATIAL WEB',
          description: 'Crafting beautiful, high-value customized digital assets and premium downloadable templates optimized for seamless digital commerce scaling.',
          metrics: '60 FPS Smooth Canvas',
          tags: ['Notion Templates', 'E-Books', 'Premium Assets'],
        },
        {
          id: 'product-launch',
          title: 'Digital Product Launch',
          category: 'FULLSTACK',
          badge: 'REACT 19 CORE',
          description: 'Planning and implementing strategic end-to-end launch sequences for premium digital goods to successfully capture international buyers.',
          metrics: 'Zero Runtime Overhead',
          tags: ['Product Strategy', 'Growth Assets', 'Market Entry'],
        },
        {
          id: 'cro',
          title: 'Conversion Rate Optimization',
          category: 'OPTIMIZATION',
          badge: '100 LIGHTHOUSE',
          description: 'Analyzing user journeys and optimizing layout frameworks to turn passive storefront traffic into consistent sales, maximizing revenue.',
          metrics: '100/100 Lighthouse Benchmark',
          tags: ['CRO Tactics', 'User Behavior', 'Sales Growth'],
        },
      ],
    },
    journey: {
      badge: 'COMMERCE EVOLUTION // 2023 - 2026',
      title: 'EVOLUTION',
      titleHighlight: 'TIMELINE',
      subtitle: 'My professional journey from managing international e-commerce operations to mastering AI-driven digital product engineering.',
      stages: [
        {
          stage: 'STAGE 01',
          navLabel: 'Stage 01 • 2023',
          stageBadge: 'ENABLERS',
          year: 'Sep 2023 - 2024',
          title: 'Amazon Wholesale & Private Label Specialist (Remote)',
          subtitle: 'Product research, supplier sourcing, competitor analysis, and profitability assessments.',
          description: 'Worked remotely on Amazon Wholesale and Private Label projects. Conducted deep market research, profitability assessments, and product validation. Supported Amazon FBA operations and assisted in identifying profitable opportunities through data-driven decision-making.',
          metricLabel: 'SelfEmployed',
          metric: 'Amazon FBA',
          status: 'COMPLETED & ARCHIVED',
          keyDeliverables: [
            'Conducted extensive product validation',
            'Evaluated high-margin profitability metrics',
            'Optimized remote Amazon FBA workflows',
          ],
          tools: ['Amazon PL', 'Wholesale', 'Product Sourcing', 'Market Research', 'FBA Ops'],
        },
        {
          stage: 'STAGE 02',
          navLabel: 'Stage 02 • 2024',
          stageBadge: 'TIKTOK SHOP',
          year: 'Sep 2024 - Dec 2025',
          title: 'TikTok Shop Manager — UK Marketplace Operations',
          subtitle: 'Managing full-lifecycle store operations, product listings, and order fulfillment loops.',
          description: 'Managed a UK TikTok Shop account, handling all aspects of store operations. Led product listing optimization, order management, customer service, inventory coordination, and account performance monitoring to maintain high catalog accuracy and revenue growth.',
          metricLabel: 'Self-Employed',
          metric: 'UK Account',
          status: 'OPERATIONS COMPLETE',
          keyDeliverables: [
            'Managed end-to-end UK store operations',
            'Optimized product listings for visibility',
            'Coordinated inventory & customer service loops',
          ],
          tools: ['TikTok Shop', 'Order Management', 'Listing Optimization', 'UK E-Commerce'],
        },
        {
          stage: 'STAGE 03',
          navLabel: 'Stage 03 • Feb 2026',
          stageBadge: 'EMPOWERERS',
          year: 'Feb 2026 - Present',
          title: 'Etsy Store Management & E-Commerce Products Specialist',
          subtitle: 'Mastering niche research, Etsy SEO, physical product sourcing, and digital asset creation.',
          description: 'Completed comprehensive training at Empowerers. Developing specialized skills across both physical and digital product lifecycles, including niche research, Etsy SEO, keyword optimization, competitor analysis, digital asset creation, and storefront setup to build premium commerce businesses.',
          metricLabel: 'Empowerers',
          metric: 'Etsy Training',
          status: 'ACTIVE & RUNNING',
          keyDeliverables: [
            'Mastered Etsy SEO & Keyword Research',
            'Optimizing physical & digital listings',
            'Applying marketplace best practices',
          ],
          tools: ['Etsy Management', 'Physical Goods', 'Digital Products', 'Etsy SEO', 'Niche Research'],
        },
        {
          stage: 'STAGE 04',
          navLabel: 'Stage 04 • Vibe Coding',
          stageBadge: 'AI FLAGSHIP',
          year: 'Current 2026',
          title: 'AI Vibe Coding & Frontend Customization',
          subtitle: 'Transitioning e-commerce depth into building advanced AI-powered web storefronts.',
          description: 'Currently leveraging modern AI-driven coding environments (Cursor, Antigravity, Project IDX) and advanced prompt engineering to build secure, high-converting, and beautiful personal web frameworks and portfolio platforms.',
          metricLabel: '10x Build',
          metric: 'Velocity',
          status: 'ACTIVE IN 2026',
          keyDeliverables: [
            'Engineering custom web components',
            'Integrating interactive global UI effects',
            'Combining AI tech with commerce depth',
          ],
          tools: ['Cursor AI', 'Antigravity', 'AI Workflows', 'UI Customization'],
        },
      ],
    },
    comparison: {
      badge: 'THE VIBECODING ADVANTAGE',
      title: "TRADITIONAL E-COM VS. ANZIL'S VIBE CODING OS",
      subtitle: 'A radical paradigm shift in storefront deployment velocity, aesthetic sophistication, and digital asset scaling.',
      traditionalCardTitle: 'Traditional Development',
      traditionalBadge: 'LEGACY WORKFLOW',
      vibeCardTitle: "Anzil's Vibe Coding OS",
      vibeBadge: 'NEXT-GEN ARCHITECTURE',
      rows: [
        {
          aspect: 'LAUNCH VELOCITY & TIME',
          traditional: 'Weeks of manual store setup, slow marketplace approvals, and delayed assets deployment.',
          vibeCoding: '10x Engineering Velocity. Prompt-engineered agent workflows with responsive web setups built within hours.',
        },
        {
          aspect: 'VISUAL AESTHETIC & THEME',
          traditional: 'Generic cookie-cutter templates with flat, lifeless layouts that fail to engage modern global buyers.',
          vibeCoding: 'Bespoke Premium Luxury. Modern dark-mode glassmorphism, animated falling pixie dust, and high-converting typography.',
        },
        {
          aspect: 'INTERACTIVE COMMERCE FEATURES',
          traditional: 'Static product displays with rigid checkout buttons and slow user experience flows.',
          vibeCoding: 'Silky smooth hover micro-animations, dynamic glowing cards, and custom interactive assets.',
        },
        {
          aspect: 'STOREFRONT AUTOMATION',
          traditional: 'Heavy manual processing for customer downloads, product listings, and routine storefront maintenance.',
          vibeCoding: 'Built-in automated storefront logic, instant download paths, and zero friction scaling for global markets.',
        },
        {
          aspect: 'SECURITY & ASSET PROTECTION',
          traditional: 'Unprotected digital files, high risk of link sharing, and basic security configurations.',
          vibeCoding: '100% Secure clean codebase. Highly optimized background protocols to protect downloadable products safely.',
        },
      ],
    },
    works: {
      badge: 'FLAGSHIP PROJECTS',
      title: 'CURATED LIVE',
      titleHighlight: 'WORKS',
      subtitle: 'Selected flagship e-commerce stores, vibe-coded websites, and interactive spatial digital assets.',
      categories: {
        all: 'All Works',
        ecommerce: 'E-Commerce',
        digitalAssets: 'Digital Assets',
        storefrontDesign: 'Storefront Design',
      },
      viewLiveBtn: 'View Live Showcase',
      codebaseBtn: 'Inspect Architecture',
      items: [
        {
          id: 'aura-commerce',
          title: 'AURA COMMERCE — Global Amazon Flagship',
          category: 'E-Commerce',
          tagline: 'End-to-end data validation and operational scaling for international FBA Private Label and Wholesale architectures.',
          description: 'Executed deep competitor analysis and product sourcing validation. Streamlined inventory workflows, managed global suppliers, and optimized backend listings to drive consistent organic conversion lifts.',
          stats: [
            { label: 'Market Depth', value: '3+ Years' },
            { label: 'Buy Box Wins', value: '98%' },
            { label: 'Fulfillment Model', value: 'FBA Ops' },
          ],
          tags: ['Amazon Central', 'Product Sourcing', 'FBA Logistics', 'Data Analysis'],
          architecture: ['Amazon FBA inventory & supplier synchronization', 'Data-driven competitor & niche profitability validation', 'High-conversion listing & backend keyword optimization'],
        },
        {
          id: 'neon-assets',
          title: 'NEON ASSETS — Premium Digital Storefront',
          category: 'Digital Assets',
          tagline: 'AI-powered modern glassmorphic web hubs designed for selling instant-download templates and e-books.',
          description: 'Built using advanced vibe coding workflows and custom prompt engineering. Integrates seamless navigation systems, ultra-fast loading speeds, and high-converting typography blueprints optimized for international digital commerce.',
          stats: [
            { label: 'Conversion Lift', value: '+180%' },
            { label: 'Lighthouse Score', value: '100/100' },
            { label: 'File Delivery', value: 'Instant' },
          ],
          tags: ['Cursor AI', 'Antigravity', 'Tailwind CSS', 'Glassmorphism UI'],
          architecture: ['Prompt-driven reactive component architecture', 'Instant digital asset fulfillment hooks', 'Sub-second page speeds with 100/100 Lighthouse benchmark'],
        },
        {
          id: 'solaris-spatial',
          title: 'SOLARIS — 3D Spatial Audio & Visual Canvas',
          category: 'Storefront Design',
          tagline: 'Interactive browser-based generative soundscape and particle visualizer.',
          description: 'An exploration of Web Audio API synthesis combined with GPU-accelerated particle flow fields. Allows users to shape audio timbre while watching 20,000 particles dance in real time.',
          stats: [
            { label: 'Particle Count', value: '25,000+' },
            { label: 'Frame Rate', value: '60 FPS' },
            { label: 'Audio Engine', value: 'WebAudio' },
          ],
          tags: ['Three.js', 'GLSL Shaders', 'Web Audio API', 'GPU Compute'],
          architecture: ['Instanced particle mesh geometry', 'Fast Fourier Transform frequency analysis', 'Low-power mobile shader fallback'],
        },
        {
          id: 'prism-ui',
          title: 'PRISM DESIGN SYSTEM — Enterprise Tokens & Glass UI',
          category: 'Marketplace Ops',
          tagline: 'Comprehensive React UI component framework designed specifically for dark luxury experiences.',
          description: 'Features 40+ accessible UI primitives, mathematical corner nesting calculations, contrast-verified neon accents, and automatic CSS variable token injection.',
          stats: [
            { label: 'Components', value: '42+' },
            { label: 'Bundle Size', value: '8.4 kB' },
            { label: 'Accessibility', value: 'WCAG AAA' },
          ],
          tags: ['Radix UI', 'Tailwind CSS', 'Storybook', 'Zero-CSS-in-JS'],
          architecture: ['Headless Radix state machines', 'Tailwind 4 zero-config presets', 'Automated token regression tests'],
        },
      ],
    },
    testimonials: {
      badge: 'INDUSTRY PROOF',
      title: 'CLIENT REVIEWS &',
      titleHighlight: 'ENDORSEMENTS',
      subtitle: 'Feedback from founders, e-commerce partners, and digital store owners who scaled with Anzil.',
      items: [
        {
          id: 't-1',
          name: 'Marcus Vance',
          role: 'Managing Director',
          company: 'Vance Capital UK',
          content: 'Anzil managed our UK TikTok Shop with remarkable precision. From listing accuracy to customer satisfaction loops, our catalog conversion metrics improved dramatically.',
          metrics: '+210% Gross Revenue Lift',
        },
        {
          id: 't-2',
          name: 'Elena Rostova',
          role: 'Head of Product',
          company: 'Aura Studio',
          content: 'The vibe coding speed Anzil brought to our web storefront was breathtaking. What usually takes agencies 6 weeks was delivered in 4 days with flawless dark-mode aesthetics.',
          metrics: '4-Day Turnaround Velocity',
        },
        {
          id: 't-3',
          name: 'Hamza Tariq',
          role: 'Etsy Brand Partner',
          company: 'Empowerers Collective',
          content: 'His SEO mastery and digital product storefront frameworks are second to none. He understands conversion psychology and marketplace algorithms on a microscopic level.',
          metrics: 'Top 1% Store Conversion',
        },
      ],
    },
    contact: {
      badge: 'INITIATE COLLABORATION',
      heading: 'LAUNCH YOUR NEXT DIGITAL ASSET 🚀',
      subtitle: 'Specializing in designing high-converting Etsy digital product storefronts and engineering modern, fast-loading web layouts using advanced AI vibe coding workflows.',
      directInbox: 'DIRECT INBOX',
      availableBadge: 'Available for Work',
      locationNote: 'Based in Pakistan • Seamless 24/7 Global Timezone Coverage',
      networkMatrix: 'NETWORK MATRIX',
      form: {
        nameLabel: 'Your Name *',
        emailLabel: 'Your Email Address *',
        projectTypeLabel: 'Project Architecture',
        budgetLabel: 'Estimated Budget',
        projectTypes: [
          'Etsy Digital Storefront Design',
          'Vibe Coding Website Setup',
          'Digital Product Template Creation',
          'Custom Web Layout Refinement',
        ],
        budgetOptions: ['$100 — $250', '$250 — $500', '$500 — $1,000', '$1,000+'],
        messagePlaceholder: 'PROJECT SCOPE, TIMELINE & GOALS *',
        submitBtn: 'TRANSMIT PROJECT BRIEF',
        sendingBtn: 'TRANSMITTING BRIEF...',
        successTitle: 'Message Dispatched Successfully!',
        successDesc: 'Thank you. Your project brief has been transmitted directly to Anzil. Expect an architectural consultation response within 12 hours.',
        resetBtn: 'Send Another Inquiry',
      },
    },
    chatbot: {
      headerTitle: 'ANZIL AI COMPANION',
      headerSubtitle: 'Interactive Vibe Assistant',
      statusOnline: 'ONLINE',
      initialGreeting: "Hi, I'm Anzil's digital helper! Let's talk about your next web project, custom interactive micro-tools, or Etsy digital storefront design layouts.",
      quickPrompts: [
        'AI Vibe Coding ⚡',
        'Digital Products & Tools 📂',
        'Etsy Storefront Design 🎨',
      ],
      inputPlaceholder: 'Type your message or project question...',
      botResponses: {
        etsy: 'Anzil specializes in end-to-end Etsy digital product storefronts — from niche research and high-converting mockup assets to SEO-optimized listing copy and automated digital delivery setups!',
        vibe: 'Using next-gen AI vibe coding workflows, Anzil engineers responsive, high-performance web flagships in 24 to 72 hours with dark glassmorphism and 60 FPS micro-interactions.',
        speed: 'By combining Cursor AI, Claude, and deep prompt engineering, projects move from concept to live deployment at 10x velocity without sacrificing clean code quality.',
        hire: 'Anzil is currently available for work! You can scroll to the Contact section below or email him directly at anzilhayat.ecom@gmail.com.',
        default: 'That sounds like an exciting vision! Anzil excels at transforming ideas into interactive digital assets and modern web flagships. Would you like to transmit a project inquiry?',
      },
    },
  },

  '한국어 (Korean)': {
    code: 'KO',
    label: '한국어 (Korean)',
    flag: '🇰🇷',
    nav: {
      about: '소개',
      capabilities: '핵심 역량',
      journey: '성장 여정',
      vibeMatrix: '바이브 매트릭스',
      works: '대표 프로젝트',
      reviews: '고객 리뷰',
      contact: '문의하기',
      portfolioMatrixBadge: '포트폴리오 매트릭스 2026',
      soundOn: '오디오 효과 켜짐',
      soundOff: '오디오 효과 꺼짐',
    },
    hero: {
      statusBadge: '포트폴리오 매트릭스 2026',
      heading: 'ANZIL',
      pill: '안녕하세요, ANZIL입니다 ⚡ AI 바이브코더 & 프론트엔드 스페셜리스트',
      bio: '고도화된 AI 워크플로우를 활용하여 전환율 높은 최신 디지털 제품과 초고속 웹사이트를 구축합니다. 창의적인 아이디어를 안전하고 바로 판매 가능한 디지털 플래그십으로 전환합니다.',
      exploreBtn: '여정 살펴보기',
      worksBtn: '실제 프로젝트 보기',
      stat1Label: '바이브코딩 속도',
      stat2Label: '안전한 코드베이스',
      stat3Label: '디지털 제품',
      stat4Label: '글로벌 가용성',
    },
    capabilities: {
      badge: '핵심 역량',
      title: '고효율 디지털',
      titleHighlight: '전문 역량',
      subtitle: '글로벌 이커머스 마켓플레이스 실무 노하우와 차세대 AI 바이브 코딩 속도를 결합합니다.',
      categories: {
        all: '전체 역량',
        performance: '성능 최적화',
        architecture: '아키텍처',
        velocity: '개발 속도',
        immersion: '몰입형 웹',
        fullstack: '풀스택',
        optimization: '전환율 최적화',
      },
      items: [
        {
          id: 'ecommerce',
          title: '크로스 플랫폼 이커머스',
          category: 'PERFORMANCE',
          badge: '전환 핵심',
          description: 'Amazon 도매/자사 브랜드, TikTok Shop, Etsy 전반의 풍부한 실무 경험을 바탕으로 실물 상품 스토어와 운영의 전 주기를 관리합니다.',
          metrics: '<0.4초 FCP • 99+ 스피드 인덱스',
          tags: ['Amazon PL/WS', 'TikTok Shop', 'Etsy 전문가'],
        },
        {
          id: 'storefront-design',
          title: '스토어프론트 & 프로필 디자인',
          category: 'ARCHITECTURE',
          badge: '엔터프라이즈 스케일',
          description: '글로벌 마켓 구매자를 사로잡는 높은 전환율의 맞춤형 디지털 스토어프론트 프로필과 프리미엄 레이아웃을 디자인합니다.',
          metrics: 'WCAG AAA • 100% 토큰화',
          tags: ['UI/UX 레이아웃', '브랜드 에셋', '비주얼 아이덴티티'],
        },
        {
          id: 'vibecoding',
          title: 'AI 바이브 코딩 & 워크플로우',
          category: 'VELOCITY',
          badge: '10배 가속 개발',
          description: '첨단 AI 기반 코딩 환경을 활용하여 반응형 인터랙티브 마이크로 툴과 웹 프로젝트를 10배 빠른 속도로 완성합니다.',
          metrics: '10배 출시 속도',
          tags: ['Cursor AI', 'Antigravity', 'AI 프롬프팅'],
        },
        {
          id: 'digital-assets',
          title: '디지털 에셋 제작',
          category: 'IMMERSION',
          badge: '스페이셜 웹',
          description: '원활한 디지털 커머스 확장을 위해 고부가가치 맞춤형 디지털 템플릿과 프리미엄 다운로드 상품을 제작합니다.',
          metrics: '60 FPS 부드러운 캔버스',
          tags: ['노션 템플릿', '전자책', '프리미엄 에셋'],
        },
        {
          id: 'product-launch',
          title: '디지털 제품 론칭',
          category: 'FULLSTACK',
          badge: 'REACT 19 코어',
          description: '글로벌 구매자를 성공적으로 유치하기 위한 프리미엄 디지털 제품의 전략적 엔드투엔드 론칭 시퀀스를 기획 및 실행합니다.',
          metrics: '런타임 오버헤드 제로',
          tags: ['제품 전략', '그로스 에셋', '시장 진입'],
        },
        {
          id: 'cro',
          title: '전환율 최적화 (CRO)',
          category: 'OPTIMIZATION',
          badge: '라이트하우스 100점',
          description: '사용자 여정을 분석하고 레이아웃을 최적화하여 수동적인 스토어 트래픽을 지속적인 판매로 전환해 수익을 극대화합니다.',
          metrics: '100/100 라이트하우스 벤치마크',
          tags: ['CRO 전술', '사용자 행동', '매출 성장'],
        },
      ],
    },
    journey: {
      badge: '커머스 진화 // 2023 - 2026',
      title: '성장',
      titleHighlight: '타임라인',
      subtitle: '글로벌 이커머스 운영 관리에서부터 첨단 AI 기반 디지털 제품 엔지니어링까지의 성장 여정입니다.',
      stages: [
        {
          stage: '1단계',
          navLabel: '1단계 • 2023',
          stageBadge: '이네이블러',
          year: '2023년 9월 - 2024년',
          title: 'Amazon 도매 및 프라이빗 라벨 전문가 (원격)',
          subtitle: '제품 조사, 공급업체 소싱, 경쟁사 분석 및 수익성 평가.',
          description: 'Amazon 도매 및 프라이빗 라벨 프로젝트를 원격으로 수행했습니다. 심층적인 시장 조사, 수익성 분석 및 제품 검증을 진행하고 Amazon FBA 운영을 지원했습니다.',
          metricLabel: '개인 비즈니스',
          metric: 'Amazon FBA',
          status: '완료 및 보관됨',
          keyDeliverables: [
            '광범위한 제품 유효성 검증',
            '고수익 마진 지표 분석',
            '원격 Amazon FBA 워크플로우 최적화',
          ],
          tools: ['Amazon PL', '도매', '상품 소싱', '시장 조사', 'FBA 운영'],
        },
        {
          stage: '2단계',
          navLabel: '2단계 • 2024',
          stageBadge: 'TIKTOK SHOP',
          year: '2024년 9월 - 2025년 12월',
          title: 'TikTok Shop 매니저 — 영국 마켓플레이스 운영',
          subtitle: '스토어 운영 전 주기, 상품 등록 및 주문 처리 루프 관리.',
          description: '영국 TikTok Shop 계정을 전담 관리하며 상품 등록 최적화, 주문 관리, 고객 응대, 재고 조율 및 계정 성과 모니터링을 주도하여 카탈로그 정확도와 매출 성장을 달성했습니다.',
          metricLabel: '단독 운영',
          metric: '영국 계정',
          status: '운영 완료',
          keyDeliverables: [
            '영국 스토어 엔드투엔드 운영 총괄',
            '노출도 극대화를 위한 상품 리스팅 최적화',
            '재고 및 고객 응대 루프 조율',
          ],
          tools: ['TikTok Shop', '주문 관리', '리스팅 최적화', '영국 이커머스'],
        },
        {
          stage: '3단계',
          navLabel: '3단계 • 2026년 2월',
          stageBadge: '엠파워러스',
          year: '2026년 2월 - 현재',
          title: 'Etsy 스토어 관리 & 이커머스 제품 스페셜리스트',
          subtitle: '니치 시장 리서치, Etsy SEO, 실물 상품 소싱 및 디지털 에셋 제작 마스터.',
          description: 'Empowerers에서 종합 전문 과정을 이수했습니다. 실물 및 디지털 제품 라이프사이클 전반에 걸친 전문 기술(니치 조사, Etsy SEO, 키워드 최적화, 경쟁사 분석, 스토어 개설)을 발전시키고 있습니다.',
          metricLabel: '엠파워러스',
          metric: 'Etsy 전문 교육',
          status: '활성 진행 중',
          keyDeliverables: [
            'Etsy SEO 및 키워드 리서치 마스터',
            '실물 및 디지털 리스팅 최적화',
            '마켓플레이스 최고 실무 적용',
          ],
          tools: ['Etsy 관리', '실물 상품', '디지털 에셋', 'Etsy SEO', '니치 리서치'],
        },
        {
          stage: '4단계',
          navLabel: '4단계 • 바이브 코딩',
          stageBadge: 'AI 플래그십',
          year: '2026년 현재',
          title: 'AI 바이브 코딩 & 프론트엔드 커스터마이징',
          subtitle: '이커머스 경험을 첨단 AI 기반 웹 스토어프론트 구축으로 확장.',
          description: '최신 AI 기반 코딩 환경(Cursor, Antigravity, Project IDX)과 고급 프롬프트 엔지니어링을 활용하여 안전하고 전환율이 뛰어난 미려한 개인 웹 프레임워크와 포트폴리오를 제작합니다.',
          metricLabel: '10배 빌드',
          metric: '개발 속도',
          status: '2026년 진행 중',
          keyDeliverables: [
            '맞춤형 웹 컴포넌트 엔지니어링',
            '인터랙티브 글로벌 UI 효과 통합',
            'AI 기술과 이커머스 전문성의 결합',
          ],
          tools: ['Cursor AI', 'Antigravity', 'AI 워크플로우', 'UI 커스터마이징'],
        },
      ],
    },
    comparison: {
      badge: '바이브코딩의 압도적 우위',
      title: '기존 이커머스 개발 VS. ANZIL의 바이브 코딩 OS',
      subtitle: '스토어 출시 속도, 미적 완성도, 디지털 에셋 확장에 있어 획기적인 패러다임 전환입니다.',
      traditionalCardTitle: '기존 개발 방식',
      traditionalBadge: '과거 워크플로우',
      vibeCardTitle: 'Anzil의 바이브 코딩 OS',
      vibeBadge: '차세대 아키텍처',
      rows: [
        {
          aspect: '출시 속도 & 소요 시간',
          traditional: '몇 주간의 수동 스토어 설정, 지연되는 마켓플레이스 승인 및 느린 에셋 배포.',
          vibeCoding: '10배 엔지니어링 속도. 정밀 프롬프트 기반 에이전트 워크플로우로 몇 시간 만에 반응형 웹 구축.',
        },
        {
          aspect: '비주얼 미학 & 테마',
          traditional: '글로벌 구매자의 관심을 끌지 못하는 밋밋하고 생기 없는 기성 템플릿.',
          vibeCoding: '맞춤형 프리미엄 럭셔리. 모던 다크모드 글래스모피즘, 떨어지는 별가루 파티클 및 고전환 타이포그래피.',
        },
        {
          aspect: '인터랙티브 커머스 기능',
          traditional: '단조로운 상품 디스플레이와 딱딱한 결제 버튼, 느린 사용자 경험.',
          vibeCoding: '부드러운 마이크로 호버 인터랙션, 빛나는 동적 카드, 맞춤형 인터랙티브 에셋.',
        },
        {
          aspect: '스토어 자동화',
          traditional: '고객 다운로드, 상품 등록 및 일상적 스토어 유지보수에 드는 막대한 수작업.',
          vibeCoding: '내장된 스토어 자동화 로직, 즉시 다운로드 경로, 글로벌 시장을 위한 마찰 없는 확장.',
        },
        {
          aspect: '보안 & 자산 보호',
          traditional: '보호되지 않는 디지털 파일, 링크 유출의 높은 위험 및 기본적인 보안 구성.',
          vibeCoding: '100% 안전한 클린 코드베이스. 다운로드 상품을 안전하게 보호하는 고도화된 백그라운드 프로토콜.',
        },
      ],
    },
    works: {
      badge: '대표 프로젝트',
      title: '엄선된 실제',
      titleHighlight: '프로젝트',
      subtitle: '대표 이커머스 스토어, 바이브 코딩 웹사이트 및 인터랙티브 디지털 에셋 모음입니다.',
      categories: {
        all: '전체 프로젝트',
        ecommerce: '이커머스',
        digitalAssets: '디지털 에셋',
        storefrontDesign: '스토어프론트 디자인',
      },
      viewLiveBtn: '라이브 데모 보기',
      codebaseBtn: '아키텍처 확인',
      items: [
        {
          id: 'aura-commerce',
          title: 'AURA COMMERCE — 글로벌 Amazon 플래그십',
          category: '이커머스',
          tagline: '국제 FBA 자사 브랜드 및 도매 아키텍처를 위한 종합 데이터 검증 및 운영 확장.',
          description: '심층 경쟁사 분석 및 제품 소싱 검증을 수행했습니다. 재고 워크플로우를 간소화하고 글로벌 공급업체를 관리하며 백엔드 리스팅을 최적화하여 지속적인 유기적 전환을 이끌어냈습니다.',
          stats: [
            { label: '시장 경험', value: '3년 이상' },
            { label: '바이박스 승률', value: '98%' },
            { label: '풀필먼트 모델', value: 'FBA 운영' },
          ],
          tags: ['Amazon Central', '상품 소싱', 'FBA 물류', '데이터 분석'],
          architecture: ['Amazon FBA 재고 및 공급업체 동기화', '데이터 기반 경쟁사 및 니치 수익성 검증', '고전환 리스팅 및 키워드 최적화'],
        },
        {
          id: 'neon-assets',
          title: 'NEON ASSETS — 프리미엄 디지털 스토어프론트',
          category: '디지털 에셋',
          tagline: '즉시 다운로드 템플릿 및 전자책 판매를 위한 AI 기반 글래스모픽 웹 허브.',
          description: '첨단 바이브 코딩 워크플로우와 맞춤형 프롬프트 엔지니어링으로 제작되었습니다. 매끄러운 내비게이션, 초고속 로딩, 글로벌 디지털 커머스에 최적화된 고전환 타이포그래피를 통합했습니다.',
          stats: [
            { label: '전환율 상승', value: '+180%' },
            { label: '라이트하우스 점수', value: '100/100' },
            { label: '파일 전달', value: '즉시 완료' },
          ],
          tags: ['Cursor AI', 'Antigravity', 'Tailwind CSS', '글래스모피즘 UI'],
          architecture: ['프롬프트 주도 반응형 컴포넌트 아키텍처', '즉시 디지털 에셋 전달 훅', '100/100 라이트하우스 1초 미만 로딩 속도'],
        },
        {
          id: 'solaris-spatial',
          title: 'SOLARIS — 3D 스페이셜 오디오 & 비주얼 캔버스',
          category: '스토어프론트 디자인',
          tagline: '브라우저 기반 인터랙티브 생성형 사운드스케이프 및 파티클 시각화 도구.',
          description: 'Web Audio API 신디사이저와 GPU 가속 파티클 플로우 필드의 결합. 20,000개 이상의 파티클이 실시간으로 춤추는 동안 오디오 음색을 직접 조절할 수 있습니다.',
          stats: [
            { label: '파티클 수', value: '25,000+' },
            { label: '프레임 레이트', value: '60 FPS' },
            { label: '오디오 엔진', value: 'WebAudio' },
          ],
          tags: ['Three.js', 'GLSL 셰이더', 'Web Audio API', 'GPU 연산'],
          architecture: ['인스턴스 파티클 메시 지오메트리', 'FFT 주파수 분석', '저전력 모바일 셰이더 폴백'],
        },
        {
          id: 'prism-ui',
          title: 'PRISM 디자인 시스템 — 엔터프라이즈 토큰 & 글래스 UI',
          category: '마켓플레이스 운영',
          tagline: '다크 럭셔리 경험을 위해 특별히 설계된 포괄적인 React UI 컴포넌트 프레임워크.',
          description: '40개 이상의 접근 가능한 UI 프리미티브, 수학적 코너 네스팅 계산, 대비가 검증된 네온 악센트 및 빠른 전환을 위해 최적화된 자동 CSS를 제공합니다.',
          stats: [
            { label: '컴포넌트 수', value: '42+' },
            { label: '번들 크기', value: '8.4 kB' },
            { label: '접근성', value: 'WCAG AAA' },
          ],
          tags: ['Radix UI', 'Tailwind CSS', 'Storybook', 'Zero-CSS-in-JS'],
          architecture: ['헤드리스 Radix 상태 머신', 'Tailwind 4 제로 설정 프리셋', '자동 토큰 회귀 테스트'],
        },
      ],
    },
    testimonials: {
      badge: '실제 검증 실적',
      title: '고객 리뷰 및',
      titleHighlight: '추천사',
      subtitle: 'Anzil과 함께 스토어와 디지털 비즈니스를 성장시킨 창업자 및 파트너들의 평가입니다.',
      items: [
        {
          id: 't-1',
          name: 'Marcus Vance',
          role: '대표 이사',
          company: 'Vance Capital UK',
          content: 'Anzil은 놀라운 정확도로 영국 TikTok Shop을 관리했습니다. 상품 리스팅 정확도부터 고객 만족까지 카탈로그 전환 지표가 비약적으로 향상되었습니다.',
          metrics: '+210% 총매출 성장',
        },
        {
          id: 't-2',
          name: 'Elena Rostova',
          role: '제품 총괄',
          company: 'Aura Studio',
          content: 'Anzil이 우리 웹 스토어프론트에 불어넣은 바이브 코딩 속도는 경이로웠습니다. 보통 에이전시가 6주 걸릴 작업을 단 4일 만에 완벽한 다크모드로 완성했습니다.',
          metrics: '4일 만의 완성 속도',
        },
        {
          id: 't-3',
          name: 'Hamza Tariq',
          role: 'Etsy 브랜드 파트너',
          company: 'Empowerers Collective',
          content: '그의 SEO 숙련도와 디지털 제품 스토어프론트 프레임워크는 최고입니다. 전환 심리학과 마켓플레이스 알고리즘을 미세한 수준까지 꿰뚫고 있습니다.',
          metrics: '상위 1% 스토어 전환율',
        },
      ],
    },
    contact: {
      badge: '프로젝트 협업 시작',
      heading: 'LAUNCH YOUR NEXT DIGITAL ASSET 🚀',
      subtitle: '고전환 Etsy 디지털 제품 스토어프론트 디자인 및 첨단 AI 바이브코딩 워크플로우를 활용한 모던 고속 웹 레이아웃 구축을 전문으로 합니다.',
      directInbox: '다이렉트 이메일',
      availableBadge: '프로젝트 의뢰 가능',
      locationNote: '파키스탄 기반 • 24/7 글로벌 시차 대응',
      networkMatrix: '네트워크 매트릭스',
      form: {
        nameLabel: '성함 *',
        emailLabel: '이메일 주소 *',
        projectTypeLabel: '프로젝트 유형',
        budgetLabel: '예상 예산',
        projectTypes: [
          'Etsy 디지털 스토어프론트 디자인',
          '바이브 코딩 웹사이트 구축',
          '디지털 제품 템플릿 제작',
          '맞춤형 웹 레이아웃 개선',
        ],
        budgetOptions: ['$100 — $250', '$250 — $500', '$500 — $1,000', '$1,000+'],
        messagePlaceholder: '프로젝트 범위, 일정 및 목표를 적어주세요 *',
        submitBtn: '프로젝트 브리프 전송',
        sendingBtn: '브리프 전송 중...',
        successTitle: '메시지가 성공적으로 전송되었습니다!',
        successDesc: '감사합니다. 프로젝트 브리프가 Anzil에게 전달되었습니다. 12시간 이내에 상세 검토 답변을 드리겠습니다.',
        resetBtn: '다른 문의 보내기',
      },
    },
    chatbot: {
      headerTitle: 'ANZIL AI 도우미',
      headerSubtitle: '인터랙티브 바이브 어시스턴트',
      statusOnline: '온라인',
      initialGreeting: '안녕하세요! 안질의 디지털 어시스턴트입니다. 다음 웹 프로젝트, 맞춤형 인터랙티브 마이크로 툴, 또는 Etsy 디지털 스토어프론트 디자인에 대해 이야기해 볼까요?',
      quickPrompts: [
        'AI 바이브코딩 ⚡',
        '디지털 제품 & 도구 📂',
        'Etsy 스토어 디자인 🎨',
      ],
      inputPlaceholder: '메시지나 프로젝트 질문을 입력하세요...',
      botResponses: {
        etsy: 'Anzil은 틈새 시장 조사, 고전환 목업 에셋 제작, SEO 최적화 리스팅 작성, 자동 배송 설정까지 Etsy 디지털 제품 스토어 전 과정을 전문으로 합니다!',
        vibe: '차세대 AI 바이브 코딩 기술을 통해 다크 글래스모피즘과 60 FPS 마이크로 인터랙션을 갖춘 고성능 웹사이트를 24~72시간 내에 구축합니다.',
        speed: 'Cursor AI, Claude 및 심층 프롬프트 엔지니어링을 결합하여 코드 품질을 유지하면서도 10배 빠른 속도로 아이디어를 실현합니다.',
        hire: 'Anzil은 현재 새로운 프로젝트를 수락 중입니다! 아래 문의 섹션으로 스크롤하거나 anzilhayat.ecom@gmail.com으로 직접 메일을 보내실 수 있습니다.',
        default: '멋진 비전이네요! Anzil은 아이디어를 인터랙티브 디지털 에셋과 모던 웹 플래그십으로 변환하는 데 능숙합니다. 프로젝트 문의를 보내보시겠습니까?',
      },
    },
  },

  '日本語 (Japanese)': {
    code: 'JA',
    label: '日本語 (Japanese)',
    flag: '🇯🇵',
    nav: {
      about: '概要',
      capabilities: 'スキル・能力',
      journey: '経歴・歩み',
      vibeMatrix: 'バイブ・マトリクス',
      works: '実績・作品',
      reviews: 'レビュー',
      contact: 'お問い合わせ',
      portfolioMatrixBadge: 'ポートフォリオ・マトリクス 2026',
      soundOn: '効果音 有効',
      soundOff: '効果音 ミュート',
    },
    hero: {
      statusBadge: 'ポートフォリオ・マトリクス 2026',
      heading: 'ANZIL',
      pill: 'こんにちは、ANZILです ⚡ AIバイブコーダー＆フロントエンド専門家',
      bio: '高度なAIワークフローを駆使し、高CVRの先進的デジタル製品と超高速Webサイトを構築。創造的なアイデアを安全で即時展開可能なデジタルフラッグシップへと昇華させます。',
      exploreBtn: '経歴を見る',
      worksBtn: '制作実績を見る',
      stat1Label: 'バイブコーディング速度',
      stat2Label: '安全なコードベース',
      stat3Label: 'デジタル製品',
      stat4Label: 'グローバル対応',
    },
    capabilities: {
      badge: 'コアコンピタンス',
      title: '高インパクトな',
      titleHighlight: 'デジタル能力',
      subtitle: 'グローバルEコマースの実践的知見と、次世代AIバイブコーディングの高速開発力を融合。',
      categories: {
        all: '全機能',
        performance: 'パフォーマンス',
        architecture: 'アーキテクチャ',
        velocity: '開発速度',
        immersion: 'イマーシブ',
        fullstack: 'フルスタック',
        optimization: 'コンバージョン最適化',
      },
      items: [
        {
          id: 'ecommerce',
          title: 'クロスプラットフォームEC',
          category: 'PERFORMANCE',
          badge: 'コンバージョン核',
          description: 'Amazon卸売・プライベートブランド、TikTok Shop、Etsyにおける豊富な現場経験を活かし、実物商品のフルサイクル運営を管理。',
          metrics: '<0.4秒 FCP • 99+ スピード指数',
          tags: ['Amazon PL/WS', 'TikTok Shop', 'Etsy エキスパート'],
        },
        {
          id: 'storefront-design',
          title: '店舗＆プロフィールデザイン',
          category: 'ARCHITECTURE',
          badge: 'エンタープライズ規模',
          description: '世界のマーケットプレイス顧客を魅了する、高い購入率を誇るカスタムデジタル店舗と洗練されたレイアウトを構築。',
          metrics: 'WCAG AAA • 100% トークン化',
          tags: ['UI/UX 設計', 'ブランド素材', 'ビジュアルアイデンティティ'],
        },
        {
          id: 'vibecoding',
          title: 'AIバイブコーディング',
          category: 'VELOCITY',
          badge: '10倍の爆速開発',
          description: '最先端のAIコーディング環境を駆使し、機能的でインタラクティブなマイクロツールを通常の10倍のスピードで開発。',
          metrics: '10倍の市場投入速度',
          tags: ['Cursor AI', 'Antigravity', 'AIプロンプト'],
        },
        {
          id: 'digital-assets',
          title: 'デジタルアセット制作',
          category: 'IMMERSION',
          badge: '空間Web',
          description: 'スムーズなデジタル販売拡大に向け、高品質なカスタマイズテンプレートやダウンロード用プレミアム素材を制作。',
          metrics: '60 FPS 滑らかな描画',
          tags: ['Notionテンプレート', '電子書籍', 'プレミアム素材'],
        },
        {
          id: 'product-launch',
          title: 'デジタル商品ローンチ',
          category: 'FULLSTACK',
          badge: 'REACT 19 コア',
          description: '世界中のバイヤーを確実に獲得するため、プレミアムデジタル商品の戦略的エンドツーエンド展開を計画・実行。',
          metrics: 'ランタイム負荷ゼロ',
          tags: ['商品戦略', 'グロース資産', '市場参入'],
        },
        {
          id: 'cro',
          title: 'コンバージョン率最適化 (CRO)',
          category: 'OPTIMIZATION',
          badge: 'Lighthouse 100点',
          description: 'ユーザー行動を分析しレイアウトを最適化することで、閲覧者を安定した購買行動へと導き売上を最大化。',
          metrics: '100/100 Lighthouse基準',
          tags: ['CRO施策', '行動分析', '売上拡大'],
        },
      ],
    },
    journey: {
      badge: 'コマース進化の歩み // 2023 - 2026',
      title: '進化の',
      titleHighlight: 'タイムライン',
      subtitle: '国際的なEコマース運営から最先端AI主導のデジタルプロダクト開発への成長プロセス。',
      stages: [
        {
          stage: 'ステージ 01',
          navLabel: 'ステージ 01 • 2023',
          stageBadge: 'エネイブラーズ',
          year: '2023年9月 - 2024年',
          title: 'Amazon卸売＆自社ブランドスペシャリスト（リモート）',
          subtitle: '商品リサーチ、サプライヤー開拓、競合分析、収益性評価。',
          description: 'Amazonの卸売およびプライベートブランド事業にリモートで参画。徹底した市場調査と収益評価を行い、データ主導の意思決定を通じてFBA運営を支援しました。',
          metricLabel: '個人事業',
          metric: 'Amazon FBA',
          status: '完了・アーカイブ',
          keyDeliverables: [
            '綿密な製品ポテンシャル検証',
            '高利益率メトリクスの評価',
            'リモートFBA業務フローの効率化',
          ],
          tools: ['Amazon PL', '卸売', '商品調達', '市場調査', 'FBA運用'],
        },
        {
          stage: 'ステージ 02',
          navLabel: 'ステージ 02 • 2024',
          stageBadge: 'TIKTOK SHOP',
          year: '2024年9月 - 2025年12月',
          title: 'TikTok Shop マネージャー — 英国市場運営',
          subtitle: '店舗運営全般、商品登録最適化、注文配送サイクルの管理。',
          description: '英国向けTikTok Shopアカウントを統括。商品ページの最適化、在庫管理、カスタマーサポートを指揮し、高いカタログ精度と売上成長を維持しました。',
          metricLabel: '単独運用',
          metric: '英国アカウント',
          status: '運営完了',
          keyDeliverables: [
            '英国店舗の全行程運営マネジメント',
            '認知度向上に向けた商品登録最適化',
            '在庫・カスタマーサポートの円滑な連携',
          ],
          tools: ['TikTok Shop', '受注管理', '出品最適化', '英国EC'],
        },
        {
          stage: 'ステージ 03',
          navLabel: 'ステージ 03 • 2026年2月',
          stageBadge: 'エンパワラーズ',
          year: '2026年2月 - 現在',
          title: 'Etsyショップ運営＆ECプロダクトスペシャリスト',
          subtitle: 'ニッチ市場開拓、Etsy SEO、実物商品調達、デジタル資産制作の習熟。',
          description: 'Empowerersでの集中トレーニングを修了。ニッチ調査、SEO対策、競合分析、デジタル素材作成、ショップ構築など、物理・デジタル両面の専門ノウハウを展開中。',
          metricLabel: 'エンパワラーズ',
          metric: 'Etsy専門研修',
          status: '進行中',
          keyDeliverables: [
            'Etsy SEOとキーワード調査のマスター',
            '実物・デジタル商品の掲載最適化',
            'プラットフォーム最良プラクティスの実践',
          ],
          tools: ['Etsy運営', '実物商品', 'デジタル資産', 'Etsy SEO', 'ニッチ調査'],
        },
        {
          stage: 'ステージ 04',
          navLabel: 'ステージ 04 • バイブコーディング',
          stageBadge: 'AIフラッグシップ',
          year: '2026年 現在',
          title: 'AIバイブコーディング＆フロントエンド開発',
          subtitle: 'Eコマースの現場経験を次世代AI駆動型Webフロント構築へと昇華。',
          description: 'Cursor、Antigravity、Project IDXなどの先進AI開発環境と高度なプロンプト設計を駆使し、安全で高成約率を誇るWebプラットフォームを構築。',
          metricLabel: '10倍速開発',
          metric: '圧倒的スピード',
          status: '2026年 稼働中',
          keyDeliverables: [
            '独自Webコンポーネントの設計開発',
            'グローバルなインタラクティブUIの実装',
            'AI技術とEコマース知見の高度な融合',
          ],
          tools: ['Cursor AI', 'Antigravity', 'AIワークフロー', 'UIカスタマイズ'],
        },
      ],
    },
    comparison: {
      badge: 'バイブコーディングの優位性',
      title: '従来のEC開発 VS. ANZILのバイブコーディングOS',
      subtitle: '制作スピード、デザインの洗練度、デジタル資産の拡張性における劇的な変革。',
      traditionalCardTitle: '従来型開発',
      traditionalBadge: '旧世代の作業フロー',
      vibeCardTitle: 'AnzilのバイブコーディングOS',
      vibeBadge: '次世代アーキテクチャ',
      rows: [
        {
          aspect: 'リリース速度・期間',
          traditional: '店舗構築に数週間、承認待ち、素材展開の遅延。',
          vibeCoding: '10倍の開発速度。プロンプト駆動のエージェント活用により数時間でレスポンシブWebを完成。',
        },
        {
          aspect: '視覚的美しさとテーマ',
          traditional: 'ありふれた既製テンプレートで、現代の購入者を惹きつけられない無機質なデザイン。',
          vibeCoding: '完全オーダーメイドの高級感。最新ダークグラスモフィズム、舞い散る光の粒子、高成約率のタイポグラフィ。',
        },
        {
          aspect: 'インタラクティブな機能',
          traditional: '静的な商品表示、画一的な購入ボタン、重いユーザー体験。',
          vibeCoding: '滑らかなホバーマイクロアニメーション、発光カード、直感的なインタラクティブアセット。',
        },
        {
          aspect: '店舗の自動化',
          traditional: '購入者への手動ファイル送信、出品作業、日々のメンテナンスに多くの工数が必要。',
          vibeCoding: '自動納品ロジック内蔵、即時ダウンロード、世界展開に対応した完全シームレスな拡大。',
        },
        {
          aspect: 'セキュリティと権利保護',
          traditional: '未保護のデジタルファイル、共有リンク流出の高いリスク、最低限のセキュリティ。',
          vibeCoding: '100%安全な堅牢コード。ダウンロード商品を安全に保護する高度なバックグラウンドプロトコル。',
        },
      ],
    },
    works: {
      badge: '主要プロジェクト',
      title: '実績・制作',
      titleHighlight: 'アーカイブ',
      subtitle: 'フラッグシップECストア、バイブコーディングWebサイト、空間アセットの厳選事例。',
      categories: {
        all: 'すべての作品',
        ecommerce: 'Eコマース',
        digitalAssets: 'デジタル資産',
        storefrontDesign: '店舗デザイン',
      },
      viewLiveBtn: '実物デモを見る',
      codebaseBtn: '設計構成を確認',
      items: [
        {
          id: 'aura-commerce',
          title: 'AURA COMMERCE — Amazonグローバル旗艦店',
          category: 'Eコマース',
          tagline: 'FBAプライベートブランドおよび卸売構造の包括的データ検証と事業拡大。',
          description: '徹底した競合分析と商品調達の裏付けを実施。在庫フローの効率化、海外サプライヤー管理、キーワード最適化によりオーガニックな売上拡大を達成。',
          stats: [
            { label: '事業実績', value: '3年以上' },
            { label: 'Buy Box獲得率', value: '98%' },
            { label: '出荷モデル', value: 'FBA運用' },
          ],
          tags: ['Amazon Central', '商品調達', 'FBA物流', 'データ分析'],
          architecture: ['Amazon FBA在庫・サプライヤー同期', 'データ主導の競合・ニッチ収益性検証', '高成約率出品・検索キーワード最適化'],
        },
        {
          id: 'neon-assets',
          title: 'NEON ASSETS — プレミアムデジタルストア',
          category: 'デジタル資産',
          tagline: '即時ダウンロードテンプレートや電子書籍販売に特化したAIグラスモフィックWebハブ。',
          description: '高度なバイブコーディングとプロンプト工学により制作。滑らかなナビゲーション、超高速ロード、海外販売を想定したタイポグラフィを統合。',
          stats: [
            { label: 'CVR向上率', value: '+180%' },
            { label: 'Lighthouse評価', value: '100/100' },
            { label: '商品納品', value: '即時' },
          ],
          tags: ['Cursor AI', 'Antigravity', 'Tailwind CSS', 'グラスモフィズム'],
          architecture: ['プロンプト駆動のリアクティブコンポーネント構成', '即時ファイル納品フック', '100/100 Lighthouseの1秒未満表示'],
        },
        {
          id: 'solaris-spatial',
          title: 'SOLARIS — 3D空間オーディオ＆ビジュアルキャンバス',
          category: '店舗デザイン',
          tagline: 'ブラウザ上で動作するインタラクティブなサウンドスケープ＆粒子視覚化ツール。',
          description: 'Web Audio APIの音声合成とGPUアクセラレーションによる粒子フローフィールドを融合。20,000以上の粒子がリアルタイムに舞うインタラクティブ体験。',
          stats: [
            { label: '粒子数', value: '25,000+' },
            { label: '描画レート', value: '60 FPS' },
            { label: '音声エンジン', value: 'WebAudio' },
          ],
          tags: ['Three.js', 'GLSLシェーダー', 'Web Audio API', 'GPU演算'],
          architecture: ['インスタンス化パーティクルメッシュ', '高速フーリエ変換周波数解析', '低消費電力モバイルシェーダー'],
        },
        {
          id: 'prism-ui',
          title: 'PRISMデザインシステム — エンタープライズトークン & グラスUI',
          category: 'マーケットプレイス運用',
          tagline: 'ダークラグジュアリーな体験のために特別に設計された、包括的なReact UIコンポーネントフレームワーク。',
          description: '40以上のアクセシブルなUIプリミティブ、数学的なコーナーネ스팅計算、コントラスト検証済みのネオンアクセント、および高速な変換のために最適화された自動CSSを特徴としています。',
          stats: [
            { label: 'コンポーネント数', value: '42+' },
            { label: 'バンドルサイズ', value: '8.4 kB' },
            { label: 'アクセシビリティ', value: 'WCAG AAA' },
          ],
          tags: ['Radix UI', 'Tailwind CSS', 'Storybook', 'Zero-CSS-in-JS'],
          architecture: ['ヘッドレスRadixステートマシン', 'Tailwind 4ゼロ設定プリセット', '自動トークン回帰テスト'],
        },
      ],
    },
    testimonials: {
      badge: '信頼の実績',
      title: 'クライアントの評価・',
      titleHighlight: '推薦コメント',
      subtitle: 'Anzilとともに事業を拡大した創業者、ECパートナー、ストアオーナーからの声。',
      items: [
        {
          id: 't-1',
          name: 'Marcus Vance',
          role: '代表取締役',
          company: 'Vance Capital UK',
          content: 'Anzilは卓越した精度で英国TikTok Shopを運営してくれました。商品情報の正確性から顧客対応まで、すべての指標が劇的に改善しました。',
          metrics: '+210% 売上純増',
        },
        {
          id: 't-2',
          name: 'Elena Rostova',
          role: 'プロダクト責任者',
          company: 'Aura Studio',
          content: 'Anzilのバイブコーディングのスピードは息をのむほどでした。通常のエージェンシーが6週間かける作業を、わずか4日で洗練されたデザインで届けてくれました。',
          metrics: '4日間の超特急納品',
        },
        {
          id: 't-3',
          name: 'Hamza Tariq',
          role: 'Etsyブランドパートナー',
          company: 'Empowerers Collective',
          content: '彼のSEOスキルとデジタル商品ストアの構築フレームワークは唯一無二です。購入心理とアルゴリズムを微細な領域まで熟知しています。',
          metrics: '上位1%の成約率達成',
        },
      ],
    },
    contact: {
      badge: 'プロジェクト相談',
      heading: 'LAUNCH YOUR NEXT DIGITAL ASSET 🚀',
      subtitle: '高成約率なEtsyデジタル商品ショップの設計および最新AIバイブコーディングによる高速Webレイアウトの構築を専門としています。',
      directInbox: 'ダイレクトメール',
      availableBadge: '新規ご依頼 受付中',
      locationNote: 'パキスタン拠点 • 24時間グローバル時差対応',
      networkMatrix: 'ネットワーク',
      form: {
        nameLabel: 'お名前 *',
        emailLabel: 'メールアドレス *',
        projectTypeLabel: 'プロジェクトの種類',
        budgetLabel: 'ご予算の目安',
        projectTypes: [
          'Etsy デジタル店舗デザイン',
          'バイブコーディング Webサイト構築',
          'デジタル製品 テンプレート制作',
          'カスタムWebレイアウトの改善',
        ],
        budgetOptions: ['$100 — $250', '$250 — $500', '$500 — $1,000', '$1,000+'],
        messagePlaceholder: 'プロジェクトの概要、希望スケジュール、ゴールをご記入ください *',
        submitBtn: 'プロジェクト概要を送信',
        sendingBtn: '送信中...',
        successTitle: 'メッセージを送信しました！',
        successDesc: 'ありがとうございます。プロジェクトの概要がAnzilに直接送信されました。12時間以内に詳細なご連絡を差し上げます。',
        resetBtn: '別の問い合わせを送る',
      },
    },
    chatbot: {
      headerTitle: 'ANZIL AIアシスタント',
      headerSubtitle: 'インタラクティブAIパートナー',
      statusOnline: 'オンライン',
      initialGreeting: 'こんにちは！Anzilのデジタルアシスタントです。次のWebプロジェクト、インタラクティブツール、Etsyデジタル店舗デザインについてご相談ください。',
      quickPrompts: [
        'AIバイブコーディング ⚡',
        'デジタル製品＆ツール 📂',
        'Etsyショップデザイン 🎨',
      ],
      inputPlaceholder: 'メッセージやご質問を入力してください...',
      botResponses: {
        etsy: 'Anzilはニッチ調査、高CVRモックアップ制作、SEO最適化された出品文、自動納品設定まで、Etsyデジタル店舗の全工程を専門としています！',
        vibe: '最新のAIバイブコーディング技術を駆使し、洗練されたダークグラスモフィズムと60FPSマイクロインタラクションを備えた高速Webサイトを24〜72時間で構築します。',
        speed: 'Cursor AI、Claude、そして深いプロンプトエンジニアリングを組み合わせることで、高品質を維持しながら通常の10倍の速度で開発を実現します。',
        hire: 'Anzilは現在新規プロジェクトを受付中です！下の連絡フォームからご連絡いただくか、anzilhayat.ecom@gmail.comへ直接メールをお送りください。',
        default: '素晴らしい構想ですね！Anzilはアイデアをインタラクティブなデジタル資産や最新Webサイトへと具現化することを得意としています。ぜひお問い合わせください！',
      },
    },
  },

  'العربية (Arabic)': {
    code: 'AR',
    label: 'العربية (Arabic)',
    flag: '🇦🇪',
    nav: {
      about: 'نبذة',
      capabilities: 'القدرات',
      journey: 'مسيرة التطور',
      vibeMatrix: 'مصفوفة الأداء',
      works: 'الأعمال المميزة',
      reviews: 'التقييمات',
      contact: 'تواصل معي',
      portfolioMatrixBadge: 'مصفوفة الأعمال 2026',
      soundOn: 'المؤثرات الصوتية مفعلة',
      soundOff: 'المؤثرات الصوتية مكتومة',
    },
    hero: {
      statusBadge: 'مصفوفة الأعمال 2026',
      heading: 'ANZIL',
      pill: 'مرحباً، أنا أنزيل ⚡ مطور واجهات بالذكاء الاصطناعي وهندسة الويب',
      bio: 'أقوم ببناء منتجات رقمية عصرية ذات تحويلات عالية ومواقع فائقة السرعة باستخدام مسارات عمل الذكاء الاصطناعي المتقدمة، محولاً الأفكار الإبداعية إلى مشاريع رقمية آمنة وجاهزة للبيع.',
      exploreBtn: 'استكشف مسيرتي',
      worksBtn: 'شاهد الأعمال الحية',
      stat1Label: 'سرعة البرمجة الذكية',
      stat2Label: 'كود برمجي آمن',
      stat3Label: 'منتجات رقمية',
      stat4Label: 'توافر عالمي 24/7',
    },
    capabilities: {
      badge: 'الكفاءات الأساسية',
      title: 'قدرات رقمية',
      titleHighlight: 'عالية التأثير',
      subtitle: 'دمج الخبرة العملية العميقة في التجارة الإلكترونية العالمية مع سرعة التطوير بالذكاء الاصطناعي.',
      categories: {
        all: 'كافة القدرات',
        performance: 'الأداء والسرعة',
        architecture: 'الهندسة المعمارية',
        velocity: 'سرعة الإنجاز',
        immersion: 'التجارب التفاعلية',
        fullstack: 'التطوير الشامل',
        optimization: 'زيادة التحويلات',
      },
      items: [
        {
          id: 'ecommerce',
          title: 'التجارة الإلكترونية المتعددة',
          category: 'PERFORMANCE',
          badge: 'جوهر التحويل',
          description: 'توظيف خبرة عملية عميقة في أمازون (الجملة والماركة الخاصة) وتيك توك شوب وإتسي لإدارة المتاجر والمنتجات من البداية للنهاية.',
          metrics: 'أقل من 0.4 ثانية FCP • مؤشر 99+ سرعة',
          tags: ['أمازون FBA', 'تيك توك شوب', 'خبير إتسي'],
        },
        {
          id: 'storefront-design',
          title: 'تصميم واجهات المتاجر والملفات',
          category: 'ARCHITECTURE',
          badge: 'نطاق مؤسسي',
          description: 'تصميم واجهات متاجر رقمية مخصصة وتنسيقات تجارة إلكترونية فاخرة تحقق أعلى معدلات التحويل للمشترين الدوليين.',
          metrics: 'معايير WCAG AAA • نظام تصميمي متكامل',
          tags: ['تصميم UI/UX', 'أصول العلامة', 'الهوية البصرية'],
        },
        {
          id: 'vibecoding',
          title: 'البرمجة الذكية السريعة',
          category: 'VELOCITY',
          badge: 'سرعة مضاعفة 10X',
          description: 'تسريع إنجاز مشاريع الويب باستخدام بيئات البرمجة المعتمدة على الذكاء الاصطناعي لبناء أدوات تفاعلية بسرعة استثنائية.',
          metrics: 'إطلاق للسوق أسرع بـ 10 أضعاف',
          tags: ['Cursor AI', 'Antigravity', 'هندسة الأوامر'],
        },
        {
          id: 'digital-assets',
          title: 'تصميم الأصول الرقمية',
          category: 'IMMERSION',
          badge: 'الويب التفاعلي',
          description: 'ابتكار أصول رقمية مخصصة وقوالب جاهزة للتحميل ذات قيمة عالية مصممة للنمو السلس في التجارة الإلكترونية.',
          metrics: 'سلاسة تامة 60 إطاراً في الثانية',
          tags: ['قوالب Notion', 'كتب إلكترونية', 'أصول متميزة'],
        },
        {
          id: 'product-launch',
          title: 'إطلاق المنتجات الرقمية',
          category: 'FULLSTACK',
          badge: 'محرك REACT 19',
          description: 'تخطيط وتنفيذ استراتيجيات إطلاق متكاملة للمنتجات الرقمية الراقية لجذب المشترين الدوليين بنجاح.',
          metrics: 'خلو تام من الأعباء التشغيلية',
          tags: ['استراتيجية المنتج', 'أصول النمو', 'دخول السوق'],
        },
        {
          id: 'cro',
          title: 'تحسين معدل التحويل (CRO)',
          category: 'OPTIMIZATION',
          badge: '100% في Lighthouse',
          description: 'تحليل رحلات المستخدمين وتحسين هيكل الصفحات لتحويل الزوار المتصفحين إلى مبيعات متكررة لزيادة الإيرادات.',
          metrics: 'معيار 100/100 في Lighthouse',
          tags: ['تكتيكات CRO', 'سلوك المستخدم', 'نمو المبيعات'],
        },
      ],
    },
    journey: {
      badge: 'تطور مسيرة التجارة // 2023 - 2026',
      title: 'محطات',
      titleHighlight: 'المسيرة المهنية',
      subtitle: 'مسيرتي المهنية من إدارة عمليات التجارة الدولية إلى احتراف هندسة المنتجات الرقمية بالذكاء الاصطناعي.',
      stages: [
        {
          stage: 'المرحلة 01',
          navLabel: 'المرحلة 01 • 2023',
          stageBadge: 'التمكين',
          year: 'سبتمبر 2023 - 2024',
          title: 'أخصائي أمازون للجملة والعلامات الخاصة (عن بُعد)',
          subtitle: 'أبحاث المنتجات، استقطاب الموردين، تحليل المنافسين، وتقييم الربحية.',
          description: 'العمل عن بُعد في مشاريع أمازون للجملة والماركات الخاصة. إجراء أبحاث سوقية معمقة ودراسات جدوى ربحية لدعم عمليات أمازون FBA.',
          metricLabel: 'عمل حر',
          metric: 'أمازون FBA',
          status: 'مكتمل ومؤرشف',
          keyDeliverables: [
            'التحقق الشامل من جدوى المنتجات',
            'تقييم هوامش الربحية العالية',
            'تحسين مسارات عمل FBA عن بُعد',
          ],
          tools: ['أمازون PL', 'الجملة', 'توريد المنتجات', 'أبحاث السوق', 'إدارة FBA'],
        },
        {
          stage: 'المرحلة 02',
          navLabel: 'المرحلة 02 • 2024',
          stageBadge: 'TIKTOK SHOP',
          year: 'سبتمبر 2024 - ديسمبر 2025',
          title: 'مدير تيك توك شوب — السوق البريطاني',
          subtitle: 'إدارة العمليات الكاملة للمتجر، إدراج المنتجات، ومتابعة الطلبات.',
          description: 'إدارة متكاملة لحساب متجر تيك توك في المملكة المتحدة، بما يشمل تحسين القوائم وخدمة العملاء وتنسيق المخزون لتحقيق نمو الإيرادات.',
          metricLabel: 'إدارة ذاتية',
          metric: 'حساب بريطاني',
          status: 'اكتملت العمليات',
          keyDeliverables: [
            'إدارة العمليات الكاملة للمتجر في بريطانيا',
            'تحسين إدراج المنتجات لأعلى ظهور',
            'تنسيق المخزون وخدمة العملاء بسلاسة',
          ],
          tools: ['تيك توك شوب', 'إدارة الطلبات', 'تحسين القوائم', 'التجارة البريطانية'],
        },
        {
          stage: 'المرحلة 03',
          navLabel: 'المرحلة 03 • فبراير 2026',
          stageBadge: 'إمباوررز',
          year: 'فبراير 2026 - الحالي',
          title: 'إدارة متاجر إتسي وأخصائي منتجات التجارة الإلكترونية',
          subtitle: 'احتراف أبحاث السوق، سيو إتسي، توريد السلع وتصميم الأصول الرقمية.',
          description: 'إتمام التدريب المكثف في Empowerers مع تطوير مهارات متقدمة في سيو إتسي، والكلمات المفتاحية، وبناء واجهات المتاجر الرقمية الفاخرة.',
          metricLabel: 'إمباوررز',
          metric: 'تدريب إتسي المتقدم',
          status: 'نشط ويعمل حالياً',
          keyDeliverables: [
            'إتقان سيو إتسي وبحوث الكلمات المفتاحية',
            'تحسين القوائم المادية والرقمية',
            'تطبيق أفضل ممارسات التجارة الإلكترونية',
          ],
          tools: ['إدارة إتسي', 'السلع المادية', 'المنتجات الرقمية', 'سيو إتسي', 'أبحاث السوق'],
        },
        {
          stage: 'المرحلة 04',
          navLabel: 'المرحلة 04 • البرمجة الذكية',
          stageBadge: 'مشاريع الذكاء الاصطناعي',
          year: 'العام الحالي 2026',
          title: 'البرمجة بالذكاء الاصطناعي وتطوير الواجهات المخصصة',
          subtitle: 'تحويل عمق التجارة الإلكترونية إلى بناء واجهات ويب متطورة بالذكاء الاصطناعي.',
          description: 'استخدام أحدث بيئات البرمجة الذكية وهندسة الأوامر لبناء منصات شخصية ومواقع إلكترونية فائقة الأمان وسريعة التحويل.',
          metricLabel: 'بناء أسرع 10X',
          metric: 'سرعة فائقة',
          status: 'نشط في 2026',
          keyDeliverables: [
            'هندسة مكونات الويب المخصصة',
            'دمج التأثيرات التفاعلية العالمية',
            'الجمع بين تقنيات الذكاء وتجارة المنتجات',
          ],
          tools: ['Cursor AI', 'Antigravity', 'مسارات الذكاء الاصطناعي', 'تخصيص الواجهات'],
        },
      ],
    },
    comparison: {
      badge: 'أفضلية البرمجة الذكية السريعة',
      title: 'التطوير التقليدي مقارنة بنظام أنزيل المتطور',
      subtitle: 'نقلة نوعية في سرعة إطلاق المتاجر، الأناقة البصرية، والتوسع في المنتجات الرقمية.',
      traditionalCardTitle: 'التطوير التقليدي',
      traditionalBadge: 'طرق العمل السابقة',
      vibeCardTitle: 'نظام أنزيل المتطور بالذكاء الاصطناعي',
      vibeBadge: 'هندسة الجيل القادم',
      rows: [
        {
          aspect: 'سرعة الإطلاق والوقت',
          traditional: 'أسابيع من الإعداد اليدوي وتأخير الموافقات وبطء نشر الأصول والمحتوى.',
          vibeCoding: 'سرعة هندسية مضاعفة 10 مرات. بناء وتجهيز مواقع متجاوبة خلال ساعات قليلة عبر وكلاء الأوامر.',
        },
        {
          aspect: 'الجماليات البصرية والمظهر',
          traditional: 'قوالب جاهزة مكررة بتصاميم جامدة تفتقر للجاذبية ولا تلفت انتباه المشترين.',
          vibeCoding: 'فخامة مخصصة ومصممة بدقة. زجاج داكن عصري، جزيئات متساقطة، وطباعة نصوص مخصصة لرفع المبيعات.',
        },
        {
          aspect: 'الميزات التفاعلية المتطورة',
          traditional: 'عرض ثابت للمنتجات مع أزرار شراء تقليدية وتجربة مستخدم بطيئة.',
          vibeCoding: 'حركات تفاعلية فائقة النعومة عند التمرير، بطاقات متوهجة، وأصول تفاعلية فريدة.',
        },
        {
          aspect: 'أتمتة المتاجر الرقمية',
          traditional: 'معالجة يدوية مرهقة لملفات التنزيل وقوائم المنتجات والصيانة المستمرة.',
          vibeCoding: 'منطق أتمتة مدمج، مسارات تحميل فورية للملفات، وتوسع سلس للأسواق العالمية دون عوائق.',
        },
        {
          aspect: 'الأمان وحماية الأصول',
          traditional: 'ملفات رقمية غير محمية ومخاطر عالية لمشاركة الروابط وتكوينات أمان بدائية.',
          vibeCoding: 'كود نظيف وآمن 100%. بروتوكولات خلفية محسنة لحماية المنتجات الرقمية القابلة للتحميل بأمان تام.',
        },
      ],
    },
    works: {
      badge: 'أبرز المشاريع',
      title: 'الأعمال الحية',
      titleHighlight: 'المختارة',
      subtitle: 'مجموعة مختارة من متاجر التجارة الإلكترونية، المواقع المبرمجة بالذكاء الاصطناعي، والأصول التفاعلية.',
      categories: {
        all: 'كافة الأعمال',
        ecommerce: 'التجارة الإلكترونية',
        digitalAssets: 'المنتجات الرقمية',
        storefrontDesign: 'تصميم المتاجر',
      },
      viewLiveBtn: 'عرض المشروع الحي',
      codebaseBtn: 'استعراض الهيكلية',
      items: [
        {
          id: 'aura-commerce',
          title: 'AURA COMMERCE — متجر أمازون العالمي',
          category: 'التجارة الإلكترونية',
          tagline: 'التحقق الشامل من البيانات والتوسع التشغيلي لمشاريع الماركات الخاصة والجملة في أمازون FBA.',
          description: 'تحليل دقيق للمنافسين والتحقق من مصادر المنتجات مع تبسيط تدفق المخزون وإدارة الموردين لتحقيق أعلى مبيعات طبيعية.',
          stats: [
            { label: 'الخبرة السوقية', value: '+3 سنوات' },
            { label: 'نسبة الفوز بالصندوق', value: '98%' },
            { label: 'نموذج الشحن', value: 'أمازون FBA' },
          ],
          tags: ['أمازون سنترال', 'توريد المنتجات', 'لوجستيات FBA', 'تحليل البيانات'],
          architecture: ['مزامنة مخزون أمازون FBA والموردين', 'التحقق المبني على البيانات للربحية', 'تحسين القوائم والكلمات المفتاحية'],
        },
        {
          id: 'neon-assets',
          title: 'NEON ASSETS — متجر رقمي فاخر',
          category: 'المنتجات الرقمية',
          tagline: 'منصة ويب زجاجية عصرية لبيع القوالب الرقمية الجاهزة للتحميل الفوري والكتب الإلكترونية.',
          description: 'مبنية باستخدام مسارات عمل الذكاء الاصطناعي مع سرعة تحميل فائقة وتنسيقات نصوص مخصصة للتحويل العالمي.',
          stats: [
            { label: 'زيادة التحويلات', value: '+180%' },
            { label: 'تقييم Lighthouse', value: '100/100' },
            { label: 'تسليم الملفات', value: 'فوري' },
          ],
          tags: ['Cursor AI', 'Antigravity', 'Tailwind CSS', 'تصميم زجاجي'],
          architecture: ['هيكلية مكونات تفاعلية بالأوامر', 'تكامل تسليم فوري للأصول الرقمية', 'سرعة استجابة فائقة تحت ثانية واحدة'],
        },
        {
          id: 'solaris-spatial',
          title: 'SOLARIS — لوحة تفاعلية ثلاثية الأبعاد للصوت والضوء',
          category: 'تصميم المتاجر',
          tagline: 'تجربة صوتية وبصرية تفاعلية تعمل مباشرة في المتصفح مع محاكي للجزيئات المتدفقة.',
          description: 'دمج صوتي وتقني متقدم مع تسريع الرسوميات بواسطة GPU لمشاهدة أكثر من 20,000 جزيء ضوئي يتفاعل مع الصوت لحظياً.',
          stats: [
            { label: 'عدد الجزيئات', value: '+25,000' },
            { label: 'معدل الإطارات', value: '60 إطاراً' },
            { label: 'محرك الصوت', value: 'WebAudio' },
          ],
          tags: ['Three.js', 'مظللات GLSL', 'Web Audio API', 'معالجة GPU'],
          architecture: ['هندسة جزيئات متعددة النسخ', 'تحليل الترددات الصوتية FFT', 'توفير استهلاك الطاقة على الهواتف'],
        },
        {
          id: 'prism-ui',
          title: 'نظام تصميم بريزم — واجهة زجاجية للمؤسسات',
          category: 'عمليات السوق',
          tagline: 'إطار عمل شامل لمكونات React UI مصمم خصيصًا لتجارب الفخامة المظلمة.',
          description: 'يتميز بأكثر من 40 عنصرًا أساسيًا لواجهة المستخدم، وحسابات تداخل الزوايا الرياضية، ولمسات النيون المعتمدة على التباين، وتنسيق CSS التلقائي المصمم لسرعة التحويل.',
          stats: [
            { label: 'المكونات', value: '42+' },
            { label: 'حجم الحزمة', value: '8.4 kB' },
            { label: 'إمكانية الوصول', value: 'WCAG AAA' },
          ],
          tags: ['Radix UI', 'Tailwind CSS', 'Storybook', 'Zero-CSS-in-JS'],
          architecture: ['آلات حالة Radix بدون رأس', 'إعدادات Tailwind 4 المسبقة', 'اختبارات انحدار الرموز الآلية'],
        },
      ],
    },
    testimonials: {
      badge: 'شهادات النجاح',
      title: 'آراء وتقييمات',
      titleHighlight: 'العملاء والشركاء',
      subtitle: 'انطباعات المؤسسين وشركاء التجارة الرقمية الذين طوروا أعمالهم مع أنزيل.',
      items: [
        {
          id: 't-1',
          name: 'Marcus Vance',
          role: 'المدير التنفيذي',
          company: 'Vance Capital UK',
          content: 'أدار أنزيل متجرنا على تيك توك في بريطانيا بدقة متناهية، مما رفع معدلات التحويل ورضا العملاء بصورة لافتة.',
          metrics: '+210% نمو في الإيرادات',
        },
        {
          id: 't-2',
          name: 'Elena Rostova',
          role: 'رئيسة المنتجات',
          company: 'Aura Studio',
          content: 'سرعة الإنجاز التي قدمها أنزيل لموقعنا كانت مذهلة. المشروع الذي يستغرق مع الوكالات 6 أسابيع تم إنجازه في 4 أيام وبمظهر فخم.',
          metrics: 'إنجاز كامل في 4 أيام',
        },
        {
          id: 't-3',
          name: 'Hamza Tariq',
          role: 'شريك علامات إتسي',
          company: 'Empowerers Collective',
          content: 'خبرته في سيو المتاجر وهندسة المنتجات الرقمية لا تضاهى. يفهم سيكولوجية الشراء وخوارزميات الأسواق العالمية بأدق التفاصيل.',
          metrics: 'أفضل 1% في معدل التحويل',
        },
      ],
    },
    contact: {
      badge: 'بدء التعاون المشترك',
      heading: 'LAUNCH YOUR NEXT DIGITAL ASSET 🚀',
      subtitle: 'متخصص في تصميم واجهات متاجر المنتجات الرقمية على إتسي وهندسة مواقع عصرية فائقة السرعة باستخدام مسارات الذكاء الاصطناعي.',
      directInbox: 'البريد المباشر',
      availableBadge: 'متاح لقبول المشاريع',
      locationNote: 'من باكستان • تغطية شاملة لجميع المناطق الزمنية على مدار الساعة',
      networkMatrix: 'شبكات التواصل',
      form: {
        nameLabel: 'الاسم الكامل *',
        emailLabel: 'البريد الإلكتروني *',
        projectTypeLabel: 'نوع المشروع وهيكلته',
        budgetLabel: 'الميزانية التقديرية',
        projectTypes: [
          'تصميم واجهة متجر رقمي على إتسي',
          'بناء موقع ويب بالبرمجة الذكية السريعة',
          'إنشاء قوالب وأصول المنتجات الرقمية',
          'تحسين وتطوير واجهات الويب الحالية',
        ],
        budgetOptions: ['$100 — $250', '$250 — $500', '$500 — $1,000', '$1,000+'],
        messagePlaceholder: 'تفاصيل ونطاق المشروع، الجدول الزمني، والأهداف *',
        submitBtn: 'إرسال تفاصيل المشروع',
        sendingBtn: 'جاري الإرسال...',
        successTitle: 'تم إرسال رسالتك بنجاح!',
        successDesc: 'شكراً لك. تم إرسال تفاصيل مشروعك مباشرة إلى أنزيل. ستصلك استشارة تفصيلية خلال 12 ساعة.',
        resetBtn: 'إرسال استفسار آخر',
      },
    },
    chatbot: {
      headerTitle: 'مساعد أنزيل الذكي',
      headerSubtitle: 'المساعد التفاعلي للمشاريع',
      statusOnline: 'متصل الآن',
      initialGreeting: 'مرحباً! أنا المساعد الرقمي لأنزيل. لنتحدث حول مشروعك القادم، أو الأدوات التفاعلية، أو تصاميم متجر إتسي الرقمي.',
      quickPrompts: [
        'البرمجة بالذكاء الاصطناعي ⚡',
        'المنتجات الرقمية والأدوات 📂',
        'تصميم متجر إتسي 🎨',
      ],
      inputPlaceholder: 'اكتب رسالتك أو استفسارك هنا...',
      botResponses: {
        etsy: 'يتخصص أنزيل في متاجر إتسي الرقمية المتكاملة — من دراسة السوق وتصميم النماذج عالية التحويل إلى نصوص السيو والأتمتة!',
        vibe: 'باستخدام تقنيات البرمجة بالذكاء الاصطناعي، يطور أنزيل مواقع ويب زجاجية فاخرة تعمل بسرعة 60 إطاراً في الثانية خلال 24 إلى 72 ساعة.',
        speed: 'من خلال الجمع بين Cursor AI وClaude وهندسة الأوامر المتقدمة، ننتقل من الفكرة إلى الإطلاق بسرعة مضاعفة 10 مرات مع كود فائق النقاء.',
        hire: 'أنزيل متاح حالياً لاستلام مشاريع جديدة! يمكنك التمرير لأسفل لنموذج التواصل أو مراسلته مباشرة عبر anzilhayat.ecom@gmail.com.',
        default: 'هذه فكرة رائعة! يبرع أنزيل في تحويل الأفكار إلى منتجات رقمية تفاعلية ومواقع ويب متطورة. هل ترغب في إرسال تفاصيل مشروعك؟',
      },
    },
  },

  'Deutsch (German)': {
    code: 'DE',
    label: 'Deutsch (German)',
    flag: '🇩🇪',
    nav: {
      about: 'Über mich',
      capabilities: 'Kernkompetenzen',
      journey: 'Werdegang',
      vibeMatrix: 'Vibe-Matrix',
      works: 'Ausgewählte Arbeiten',
      reviews: 'Bewertungen',
      contact: 'Kontakt',
      portfolioMatrixBadge: 'PORTFOLIO MATRIX 2026',
      soundOn: 'Audioeffekte an',
      soundOff: 'Audioeffekte aus',
    },
    hero: {
      statusBadge: 'PORTFOLIO MATRIX 2026',
      heading: 'ANZIL',
      pill: 'Hallo, ich bin ANZIL ⚡ AI Vibecoder & Frontend-Spezialist',
      bio: 'Ich entwickle moderne, hochkonvertierende digitale Produkte und ultraschnelle Webseiten mit fortschrittlichen AI-Workflows. Aus kreativen Ideen mache ich sichere, marktreife digitale Flaggschiffe.',
      exploreBtn: 'Werdegang erkunden',
      worksBtn: 'Live-Projekte ansehen',
      stat1Label: 'Vibecoding-Geschwindigkeit',
      stat2Label: 'Sichere Codebasis',
      stat3Label: 'Digitale Produkte',
      stat4Label: 'Weltweite Verfügbarkeit',
    },
    capabilities: {
      badge: 'KERNKOMPETENZEN',
      title: 'HOCHEFFEKTIVE DIGITALE',
      titleHighlight: 'FÄHIGKEITEN',
      subtitle: 'Praxisnahe E-Commerce-Erfahrung vereint mit modernster AI-Vibecoding-Geschwindigkeit.',
      categories: {
        all: 'Alle Kompetenzen',
        performance: 'Performance',
        architecture: 'Architektur',
        velocity: 'Geschwindigkeit',
        immersion: 'Immersion',
        fullstack: 'Fullstack',
        optimization: 'Optimierung',
      },
      items: [
        {
          id: 'ecommerce',
          title: 'Plattformübergreifender E-Commerce',
          category: 'PERFORMANCE',
          badge: 'KONVERSIO-KERN',
          description: 'Fundierte Praxiserfahrung in Amazon Großhandel & Private Label, TikTok Shop und Etsy zur Steuerung des gesamten Store-Lebenszyklus.',
          metrics: '<0.4s FCP • 99+ Speed Index',
          tags: ['Amazon PL/WS', 'TikTok Shop', 'Etsy Experte'],
        },
        {
          id: 'storefront-design',
          title: 'Storefront- & Profildesign',
          category: 'ARCHITECTURE',
          badge: 'ENTERPRISE-NIVEAU',
          description: 'Gestaltung hochkonvertierender, maßgeschneiderter digitaler Shop-Layouts für internationale Marktplatz-Zielgruppen.',
          metrics: 'WCAG AAA • 100% Tokenisiert',
          tags: ['UI/UX Layouts', 'Brand Assets', 'Visuelle Identität'],
        },
        {
          id: 'vibecoding',
          title: 'AI Vibe Coding & Workflows',
          category: 'VELOCITY',
          badge: '10X GESCHWINDIGKEIT',
          description: 'Beschleunigung von Webprojekten durch fortschrittliche AI-gestützte Entwicklungsumgebungen und interaktive Micro-Tools.',
          metrics: '10x schnellere Time-to-Market',
          tags: ['Cursor AI', 'Antigravity', 'AI Prompting'],
        },
        {
          id: 'digital-assets',
          title: 'Design digitaler Assets',
          category: 'IMMERSION',
          badge: 'SPATIAL WEB',
          description: 'Entwicklung hochwertiger, sofort herunterladbarer Vorlagen und Vorzeigeprodukte für müheloses digitales E-Commerce-Wachstum.',
          metrics: '60 FPS Flüssiges Canvas',
          tags: ['Notion Vorlagen', 'E-Books', 'Premium Assets'],
        },
        {
          id: 'product-launch',
          title: 'Digitaler Produktlaunch',
          category: 'FULLSTACK',
          badge: 'REACT 19 KERN',
          description: 'Strategische Planung und Umsetzung kompletter Launch-Sequenzen für digitale Premium-Produkte zur internationalen Käufergewinnung.',
          metrics: 'Null Laufzeit-Overhead',
          tags: ['Produktstrategie', 'Wachstum', 'Markteintritt'],
        },
        {
          id: 'cro',
          title: 'Conversion-Rate-Optimierung',
          category: 'OPTIMIZATION',
          badge: '100 LIGHTHOUSE',
          description: 'Nutzerflussanalysen und Layout-Optimierungen, um Besucherströme in wiederkehrende Käufe und maximale Umsätze umzuwandeln.',
          metrics: '100/100 Lighthouse Benchmark',
          tags: ['CRO Taktiken', 'Nutzerverhalten', 'Umsatzwachstum'],
        },
      ],
    },
    journey: {
      badge: 'COMMERCE EVOLUTION // 2023 - 2026',
      title: 'WERDEGANG &',
      titleHighlight: 'TIMELINE',
      subtitle: 'Mein beruflicher Weg von internationalem E-Commerce-Management bis hin zur AI-gesteuerten digitalen Produktentwicklung.',
      stages: [
        {
          stage: 'STUFE 01',
          navLabel: 'Stufe 01 • 2023',
          stageBadge: 'ENABLERS',
          year: 'Sep 2023 - 2024',
          title: 'Amazon Großhandel & Private Label Spezialist (Remote)',
          subtitle: 'Produktforschung, Lieferantenauswahl, Wettbewerbsanalyse und Profitabilitätsprüfungen.',
          description: 'Remote-Tätigkeit für Amazon Wholesale- und Private Label-Projekte. Durchführung tiefgreifender Marktanalysen und Unterstützung von Amazon FBA-Abläufen.',
          metricLabel: 'Selbstständig',
          metric: 'Amazon FBA',
          status: 'ABGESCHLOSSEN & ARCHIVIERT',
          keyDeliverables: [
            'Umfassende Produktvalidierung',
            'Bewertung margenstarker Kennzahlen',
            'Optimierung von Remote-FBA-Prozessen',
          ],
          tools: ['Amazon PL', 'Großhandel', 'Produkt-Sourcing', 'Marktforschung', 'FBA Ops'],
        },
        {
          stage: 'STUFE 02',
          navLabel: 'Stufe 02 • 2024',
          stageBadge: 'TIKTOK SHOP',
          year: 'Sep 2024 - Dez 2025',
          title: 'TikTok Shop Manager — UK Marktplatz-Betrieb',
          subtitle: 'Verwaltung des gesamten Shop-Betriebs, Produkt-Listings und Bestellabwicklung.',
          description: 'Ganzheitliche Leitung eines britischen TikTok Shop-Accounts, Listing-Optimierung, Kundenservice und Bestandskoordination für stabiles Umsatzwachstum.',
          metricLabel: 'Selbstständig',
          metric: 'UK Account',
          status: 'ERFOLGREICH ABGESCHLOSSEN',
          keyDeliverables: [
            'End-to-End Steuerung des UK-Shops',
            'Listing-Optimierung für maximale Reichweite',
            'Nahtlose Bestands- und Kundenbetreuung',
          ],
          tools: ['TikTok Shop', 'Bestellverwaltung', 'Listing-Optimierung', 'UK E-Commerce'],
        },
        {
          stage: 'STUFE 03',
          navLabel: 'Stufe 03 • Feb 2026',
          stageBadge: 'EMPOWERERS',
          year: 'Feb 2026 - Heute',
          title: 'Etsy Store Management & E-Commerce Spezialist',
          subtitle: 'Nischenrecherche, Etsy SEO, Beschaffung physischer Güter und Erstellung digitaler Assets.',
          description: 'Abschluss einer umfassenden Fachausbildung bei Empowerers. Spezialisierung auf Nischenfindung, Etsy SEO, Keyword-Optimierung und Premium-Storefronts.',
          metricLabel: 'Empowerers',
          metric: 'Etsy Ausbildung',
          status: 'AKTIV & LAUFEND',
          keyDeliverables: [
            'Etsy SEO & Keyword-Recherche gemeistert',
            'Optimierung physischer & digitaler Produkte',
            'Etablierung bewährter Marktplatz-Standards',
          ],
          tools: ['Etsy Management', 'Physische Güter', 'Digitale Produkte', 'Etsy SEO', 'Nischensuche'],
        },
        {
          stage: 'STUFE 04',
          navLabel: 'Stufe 04 • Vibe Coding',
          stageBadge: 'AI FLAGSHIP',
          year: 'Aktuell 2026',
          title: 'AI Vibe Coding & Frontend-Entwicklung',
          subtitle: 'E-Commerce-Erfahrung fließt in moderne, AI-gestützte Web-Storefronts ein.',
          description: 'Nutzung moderner AI-Coding-Tools (Cursor, Antigravity, Project IDX) und Prompt-Engineering für sichere, hochkonvertierende Web-Plattformen.',
          metricLabel: '10x Speed',
          metric: 'Entwicklungsrate',
          status: 'AKTIV IN 2026',
          keyDeliverables: [
            'Entwicklung maßgeschneiderter Web-Komponenten',
            'Integration interaktiver UI-Effekte',
            'Synergie aus AI-Technologie und E-Commerce',
          ],
          tools: ['Cursor AI', 'Antigravity', 'AI Workflows', 'UI Anpassung'],
        },
      ],
    },
    comparison: {
      badge: 'DER VIBECODING-VORTEIL',
      title: 'TRADITIONELLER E-COM VS. ANZILS VIBE CODING OS',
      subtitle: 'Ein Paradigmenwechsel in Bereitstellungsgeschwindigkeit, Ästhetik und Skalierung.',
      traditionalCardTitle: 'Traditionelle Entwicklung',
      traditionalBadge: 'ALTES MODELL',
      vibeCardTitle: 'Anzils Vibe Coding OS',
      vibeBadge: 'NEXT-GEN ARCHITEKTUR',
      rows: [
        {
          aspect: 'LAUNCH-GESCHWINDIGKEIT & ZEIT',
          traditional: 'Wochenlange manuelle Einrichtung, zeitraubende Freigaben und verzögerte Bereitstellung.',
          vibeCoding: '10x schnellere Entwicklung. Prompt-gestützte Workflows erstellen responsive Web-Layouts in wenigen Stunden.',
        },
        {
          aspect: 'VISUELLE ÄSTHETIK & DESIGN',
          traditional: 'Generische Vorlagen mit starren Layouts, die moderne Käufer kaum ansprechen.',
          vibeCoding: 'Maßgeschneiderter Luxus. Dunkler Glassmorphismus, funkelnde Partikeleffekte und hochkonvertierende Typografie.',
        },
        {
          aspect: 'INTERAKTIVE COMMERCE-FEATURES',
          traditional: 'Statische Produktanzeigen, simple Buttons und träge Nutzerführung.',
          vibeCoding: 'Butterweiche Hover-Animationen, dynamisch leuchtende Karten und individuelle interaktive Assets.',
        },
        {
          aspect: 'SHOP-AUTOMATISIERUNG',
          traditional: 'Hoher manueller Aufwand bei Kundendownloads, Produkteinstellungen und Wartung.',
          vibeCoding: 'Integrierte automatische Auslieferung, direkte Download-Pfade und reibungslose globale Skalierung.',
        },
        {
          aspect: 'SICHERHEIT & PRODUKTSCHUTZ',
          traditional: 'Ungeschützte Dateien, hohes Risiko von Link-Weitergaben und Basis-Sicherheit.',
          vibeCoding: '100% sauberer, sicherer Code. Optimierte Backend-Protokolle schützen herunterladbare Produkte verlässlich.',
        },
      ],
    },
    works: {
      badge: 'FLAGSHIP-PROJEKTE',
      title: 'AUSGEWÄHLTE',
      titleHighlight: 'ARBEITEN',
      subtitle: 'Ausgewählte E-Commerce-Stores, Vibe-Coded Webseiten und interaktive digitale Assets.',
      categories: {
        all: 'Alle Arbeiten',
        ecommerce: 'E-Commerce',
        digitalAssets: 'Digitale Produkte',
        storefrontDesign: 'Storefront-Design',
      },
      viewLiveBtn: 'Live-Showcase ansehen',
      codebaseBtn: 'Architektur einsehen',
      items: [
        {
          id: 'aura-commerce',
          title: 'AURA COMMERCE — Globales Amazon-Flaggschiff',
          category: 'E-Commerce',
          tagline: 'End-to-End Datenvalidierung und operative Skalierung für FBA Private Label und Großhandel.',
          description: 'Umfassende Wettbewerbsanalyse und Lieferantenprüfung. Optimierte Inventar-Workflows und Listings für stetigen organischen Umsatzzuwachs.',
          stats: [
            { label: 'Markterfahrung', value: '3+ Jahre' },
            { label: 'Buy Box Rate', value: '98%' },
            { label: 'Fulfillment', value: 'FBA Ops' },
          ],
          tags: ['Amazon Central', 'Produktbeschaffung', 'FBA Logistik', 'Datenanalyse'],
          architecture: ['Amazon FBA Inventar- und Lieferantensynchronisation', 'Datenbasierte Nischen-Profitabilitätsprüfung', 'Keyword- und Listing-Optimierung'],
        },
        {
          id: 'neon-assets',
          title: 'NEON ASSETS — Premium Digital Storefront',
          category: 'Digitale Produkte',
          tagline: 'AI-gestützte, gläserne Web-Plattform für Sofort-Download-Vorlagen und E-Books.',
          description: 'Entwickelt mit Vibe-Coding-Workflows. Bietet intuitive Navigation, rasanten Seitenaufbau und konversionsstarke Typografie für den weltweiten Handel.',
          stats: [
            { label: 'Conversion-Anstieg', value: '+180%' },
            { label: 'Lighthouse Score', value: '100/100' },
            { label: 'Auslieferung', value: 'Sofort' },
          ],
          tags: ['Cursor AI', 'Antigravity', 'Tailwind CSS', 'Glassmorphism UI'],
          architecture: ['Prompt-gesteuerte reaktive Komponentenarchitektur', 'Direkte digitale Warenauslieferung', 'Ladezeiten unter 1 Sekunde mit 100/100 Lighthouse-Wert'],
        },
        {
          id: 'solaris-spatial',
          title: 'SOLARIS — 3D Audio- & Visual-Canvas',
          category: 'Storefront-Design',
          tagline: 'Interaktive generative Klanglandschaft und Partikel-Visualisierung im Browser.',
          description: 'Synthese aus Web Audio API und GPU-beschleunigten Partikelfeldern. 20.000 tanzende Partikel reagieren in Echtzeit auf Audioveränderungen.',
          stats: [
            { label: 'Partikelanzahl', value: '25.000+' },
            { label: 'Bildrate', value: '60 FPS' },
            { label: 'Audio-Engine', value: 'WebAudio' },
          ],
          tags: ['Three.js', 'GLSL Shader', 'Web Audio API', 'GPU Compute'],
          architecture: ['Instanziierte Partikelgeometrie', 'FFT-Frequenzanalyse in Echtzeit', 'Stromsparender mobiler Shader-Fallback'],
        },
        {
          id: 'prism-ui',
          title: 'PRISM DESIGN SYSTEM — Enterprise Tokens & Glass UI',
          category: 'Marktplatz-Ops',
          tagline: 'Ein umfassendes React UI-Komponenten-Framework, das speziell für dunkle Luxuserlebnisse entwickelt wurde.',
          description: 'Bietet über 40 zugängliche UI-Primitiven, mathematische Eckverschachtelungsberechnungen, kontrastgeprüfte Neon-Akzente und automatische CSS-Optimierung für maximale Konversion.',
          stats: [
            { label: 'Komponenten', value: '42+' },
            { label: 'Bundle-Größe', value: '8.4 kB' },
            { label: 'Barrierefreiheit', value: 'WCAG AAA' },
          ],
          tags: ['Radix UI', 'Tailwind CSS', 'Storybook', 'Zero-CSS-in-JS'],
          architecture: ['Headless Radix State Machines', 'Tailwind 4 Zero-Config-Presets', 'Automatisierte Token-Regressionstests'],
        },
      ],
    },
    testimonials: {
      badge: 'BEWÄHRTE ERFOLGE',
      title: 'KUNDENSTIMMEN &',
      titleHighlight: 'REFERENZEN',
      subtitle: 'Feedback von Gründern, E-Commerce-Partnern und Shop-Betreibern, die mit Anzil gewachsen sind.',
      items: [
        {
          id: 't-1',
          name: 'Marcus Vance',
          role: 'Geschäftsführer',
          company: 'Vance Capital UK',
          content: 'Anzil hat unseren britischen TikTok Shop mit bemerkenswerter Präzision geführt. Von den Produktdetails bis zum Kundenservice haben sich alle Kennzahlen sprunghaft verbessert.',
          metrics: '+210% Umsatzwachstum',
        },
        {
          id: 't-2',
          name: 'Elena Rostova',
          role: 'Leiterin Produktentwicklung',
          company: 'Aura Studio',
          content: 'Das Vibe-Coding-Tempo von Anzil war atemberaubend. Was Agenturen normalerweise 6 Wochen kostet, stand nach 4 Tagen in makelloser Dark-Mode-Optik bereit.',
          metrics: '4 Tage Umsetzungszeit',
        },
        {
          id: 't-3',
          name: 'Hamza Tariq',
          role: 'Etsy Markenpartner',
          company: 'Empowerers Collective',
          content: 'Seine SEO-Kenntnisse und digitalen Shop-Architekturen sind unübertroffen. Er versteht Verkaufspsychologie und Marktplatz-Algorithmen bis ins kleinste Detail.',
          metrics: 'Top 1% Shop-Conversion',
        },
      ],
    },
    contact: {
      badge: 'ZUSAMMENARBEIT STARTEN',
      heading: 'LAUNCH YOUR NEXT DIGITAL ASSET 🚀',
      subtitle: 'Spezialisiert auf konvertierende Etsy-Storefronts für digitale Produkte und moderne, ultraschnelle Web-Layouts durch modernste AI-Vibecoding-Workflows.',
      directInbox: 'DIREKTE E-MAIL',
      availableBadge: 'Verfügbar für Projekte',
      locationNote: 'Standort Pakistan • Nahtlose 24/7 globale Zeitzonenabdeckung',
      networkMatrix: 'NETZWERK',
      form: {
        nameLabel: 'Ihr Name *',
        emailLabel: 'Ihre E-Mail-Adresse *',
        projectTypeLabel: 'Projekt-Architektur',
        budgetLabel: 'Geschätztes Budget',
        projectTypes: [
          'Etsy Digital Storefront Design',
          'Vibe Coding Website Setup',
          'Digitale Produktvorlagen-Erstellung',
          'Individuelle Web-Layout Optimierung',
        ],
        budgetOptions: ['$100 — $250', '$250 — $500', '$500 — $1,000', '$1,000+'],
        messagePlaceholder: 'PROJEKTUMFANG, ZEITPLAN & ZIELE *',
        submitBtn: 'PROJEKTBRIEFING ABSENDEN',
        sendingBtn: 'WIRD ÜBERTRAGEN...',
        successTitle: 'Nachricht erfolgreich gesendet!',
        successDesc: 'Vielen Dank. Ihr Projektbriefing wurde direkt an Anzil übermittelt. Sie erhalten innerhalb von 12 Stunden eine ausführliche Rückmeldung.',
        resetBtn: 'Weitere Anfrage senden',
      },
    },
    chatbot: {
      headerTitle: 'ANZIL AI BEGLEITER',
      headerSubtitle: 'Interaktiver Vibe-Assistent',
      statusOnline: 'ONLINE',
      initialGreeting: 'Hallo, ich bin Anzils digitaler Assistent! Lass uns über dein nächstes Webprojekt, interaktive Micro-Tools oder Etsy-Storefront-Designs sprechen.',
      quickPrompts: [
        'AI Vibe Coding ⚡',
        'Digitale Produkte & Tools 📂',
        'Etsy Storefront Design 🎨',
      ],
      inputPlaceholder: 'Nachricht oder Projektfrage eingeben...',
      botResponses: {
        etsy: 'Anzil ist spezialisiert auf komplette Etsy-Digitalshops — von Marktrecherche und hochkonvertierenden Mockups bis zu SEO-optimierten Texten und automatischen Downloads!',
        vibe: 'Mit modernen AI-Vibecoding-Workflows baut Anzil responsive Web-Flaggschiffe in 24 bis 72 Stunden mit dunklem Glassmorphismus und 60 FPS Mikro-Interaktionen.',
        speed: 'Durch die Kombination von Cursor AI, Claude und tiefem Prompt-Engineering entstehen Projekte 10-mal schneller bei absolut sauberer Codequalität.',
        hire: 'Anzil nimmt derzeit neue Projekte an! Scrolle einfach zum Kontaktbereich unten oder schreibe direkt an anzilhayat.ecom@gmail.com.',
        default: 'Das klingt nach einer spannenden Idee! Anzil setzt Visionen in interaktive digitale Produkte und moderne Webseiten um. Möchtest du eine Anfrage absenden?',
      },
    },
  },
};
