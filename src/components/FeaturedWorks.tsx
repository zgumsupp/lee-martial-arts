import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ArrowUpRight, Sparkles, Filter, Eye } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { MagneticButton } from './MagneticButton';
import { ProjectModal } from './ProjectModal';
import { FEATURED_WORKS } from '../data/portfolioData';
import { ProjectWork } from '../types';

interface FeaturedWorksProps {
  playClickSound: () => void;
}

export const FeaturedWorks: React.FC<FeaturedWorksProps> = ({ playClickSound }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<ProjectWork | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const categories = ['ALL', 'Landing Page', 'AI SaaS', '3D WebGL', 'Design System'];

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
    <section id="works" className="relative z-10 scroll-mt-28 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 uppercase mb-3">
              CURATED PRODUCTION REEL
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-[0.12em]">
              FEATURED WORKS
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0AB] max-w-xl mt-2">
              High-converting flagship landing pages, AI software platforms, and spatial WebGL digital canvases.
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#00F2FE] text-[#070A10] font-bold shadow-[0_0_15px_rgba(0,242,254,0.35)]'
                    : 'bg-white/[0.04] text-white/70 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid of Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            return (
              <div
                key={project.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out [&.reveal-visible]:opacity-100 [&.reveal-visible]:translate-y-0"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <GlassCard
                  glow="cyan"
                  className="overflow-hidden flex flex-col h-full group cursor-pointer"
                  onClick={() => {
                    playClickSound();
                    setActiveModalProject(project);
                  }}
                >
                  {/* Visual Image Banner with Parallax Zoom */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-black/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:brightness-110 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1522] via-[#0E1522]/30 to-transparent" />

                    {/* Top Overlay Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#0B0F17]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold text-[#00F2FE]">
                        {project.category}
                      </span>
                    </div>

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="px-4 py-2 rounded-full bg-[#00F2FE] text-[#070A10] font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(0,242,254,0.6)]">
                        <Eye className="w-3.5 h-3.5" /> Inspect Project
                      </span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00F2FE] transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#00F2FE] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>

                      <p className="text-xs sm:text-sm text-[#00F2FE]/90 font-medium mb-3">
                        {project.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#A0A0AB] line-clamp-2 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Metric Strip */}
                      <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-white/[0.03] border border-white/10 mb-4 text-center">
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
                        {project.tags.map((tag) => (
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
