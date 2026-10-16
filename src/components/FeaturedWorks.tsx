import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ArrowUpRight, Sparkles, Filter, Eye } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { MagneticButton } from './MagneticButton';
import { ProjectModal } from './ProjectModal';
import { FEATURED_WORKS } from '../data/portfolioData';
import { ProjectWork } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FeaturedWorksProps {
  playClickSound: () => void;
}

export const FeaturedWorks: React.FC<FeaturedWorksProps> = ({ playClickSound }) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<ProjectWork | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const categories = ['ALL', 'E-Commerce', 'Digital Assets', 'Storefront Design', 'Marketplace Ops'];

  const categoryLabels: Record<string, string> = {
    ALL: t.works.categories.all,
    'E-Commerce': t.works.categories.ecommerce,
    'Digital Assets': t.works.categories.digitalAssets,
    'Storefront Design': t.works.categories.storefrontDesign,
    'Marketplace Ops': 'Marketplace Ops',
  };

  const filteredProjects =
    selectedCategory === 'ALL'
      ? FEATURED_WORKS
      : FEATURED_WORKS.filter((p) => p.category === selectedCategory);

  // Intersection Observer API for staggered scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section id="works" className="relative z-10 scroll-mt-28 py-14 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 reveal-on-scroll">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-3">
              {t.works.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-[0.12em]">
              {t.works.title}{' '}
              <span className="bg-gradient-to-r from-[#00F2FE] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">
                {t.works.titleHighlight}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0AB] max-w-xl mt-2">
              {t.works.subtitle}
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClickSound();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#00F2FE] via-[#0EA5E9] to-[#A855F7] text-[#050811] font-black shadow-[0_0_20px_rgba(0,242,254,0.45)] border border-cyan-300/40'
                    : 'bg-[#090F1C]/60 text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-[#A855F7]/40 border border-white/10 backdrop-blur-md'
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid of Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isPurpleCard = index % 2 === 1;
            const projT = t.works.items.find((item) => item.id === project.id);
            const cardTitle = projT?.title || project.title;
            const cardTagline = projT?.tagline || project.tagline;
            const cardDescription = projT?.description || project.description;
            const cardTags = projT?.tags || project.tags;

            return (
              <div
                key={project.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="reveal-on-scroll h-full opacity-0 translate-y-8 transition-all duration-700 ease-out [&.reveal-visible]:opacity-100 [&.reveal-visible]:translate-y-0"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <GlassCard
                  glow={isPurpleCard ? 'purple' : 'cyan'}
                  className="overflow-hidden flex flex-col h-full group cursor-pointer"
                  onClick={() => {
                    playClickSound();
                    setActiveModalProject({
                      ...project,
                      title: cardTitle,
                      tagline: cardTagline,
                      description: cardDescription,
                      tags: cardTags,
                    });
                  }}
                >
                  {/* Visual Image Banner with Parallax Zoom */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-black/40">
                    <img
                      src={project.image}
                      alt={cardTitle}
                      className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:brightness-110 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-[#070B14]/20 to-transparent" />

                    {/* Top Overlay Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full bg-[#070B14]/60 backdrop-blur-md border text-[11px] font-mono font-bold ${
                          isPurpleCard
                            ? 'text-[#C084FC] border-[#A855F7]/40 shadow-[0_0_12px_rgba(168,85,247,0.25)]'
                            : 'text-[#00F2FE] border-[#00F2FE]/40 shadow-[0_0_12px_rgba(0,242,254,0.25)]'
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00F2FE] via-[#0EA5E9] to-[#A855F7] text-[#050811] font-black text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-[0_0_30px_rgba(0,242,254,0.7)] border border-cyan-200/50">
                        <Eye className="w-3.5 h-3.5" /> Inspect Project
                      </span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3
                          className={`text-xl sm:text-2xl font-bold text-white transition-colors ${
                            isPurpleCard ? 'group-hover:text-[#C084FC]' : 'group-hover:text-[#00F2FE]'
                          }`}
                        >
                          {cardTitle}
                        </h3>
                        <ArrowUpRight
                          className={`w-5 h-5 text-white/40 transition-all ${
                            isPurpleCard
                              ? 'group-hover:text-[#C084FC] group-hover:translate-x-1 group-hover:-translate-y-1'
                              : 'group-hover:text-[#00F2FE] group-hover:translate-x-1 group-hover:-translate-y-1'
                          }`}
                        />
                      </div>

                      <p
                        className={`text-xs sm:text-sm font-medium mb-3 ${
                          isPurpleCard ? 'text-[#C084FC]/90' : 'text-[#00F2FE]/90'
                        }`}
                      >
                        {cardTagline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#A0A0AB] line-clamp-2 leading-relaxed mb-6">
                        {cardDescription}
                      </p>
                    </div>

                    <div>
                      {/* Metric Strip */}
                      <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4 text-center">
                        {project.stats.map((st, sIdx) => (
                          <div key={sIdx}>
                            <span className="text-xs sm:text-sm font-mono font-black text-white block">
                              {st.value}
                            </span>
                            <span className="text-[10px] font-mono text-white/50 block">
                              {st.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {cardTags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white/60 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-xs font-mono text-white/50 mb-3 uppercase tracking-wider">
            Looking for a custom architecture or live demo walkthrough?
          </p>
          <MagneticButton
            href="#contact"
            onClick={playClickSound}
            variant="primary"
            className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider"
          >
            Inquire About Custom Engineering ➔
          </MagneticButton>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
