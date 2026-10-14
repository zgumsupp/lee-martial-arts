import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Activity } from 'lucide-react';
import { ProjectWork } from '../types';
import { MagneticButton } from './MagneticButton';

interface ProjectModalProps {
  project: ProjectWork | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-2xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#080E1C]/95 backdrop-blur-2xl border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_50px_rgba(0,242,254,0.2),0_0_70px_rgba(168,85,247,0.2),inset_0_1px_0_rgba(255,255,255,0.18)] p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle top edge light reflection */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none rounded-t-3xl" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 border border-white/12 text-white/70 hover:text-[#00F2FE] hover:bg-white/10 hover:border-[#00F2FE]/40 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all z-10"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/30 text-[#00F2FE] text-xs font-mono font-bold uppercase mb-2 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
            {project.category}
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-[0.1em] drop-shadow-[0_0_20px_rgba(0,242,254,0.25)]">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-[#00F2FE]/90 font-medium mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Project Image Preview */}
        <div className="relative rounded-2xl overflow-hidden mb-8 border border-white/12 group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080E1C] via-transparent to-transparent opacity-85" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {project.stats.map((st, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md text-center">
              <span className="text-lg sm:text-2xl font-mono font-black text-white block">
                {st.value}
              </span>
              <span className="text-[11px] font-mono uppercase text-white/50 block mt-1">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* Description & Architecture */}
        <div className="space-y-6 mb-8">
          <div>
            <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-white/50 mb-2">
              EXECUTIVE SUMMARY
            </h4>
            <p className="text-sm text-[#A0A0AB] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-white/50 mb-3">
              TECHNICAL ARCHITECTURE &amp; HIGHLIGHTS
            </h4>
            <div className="space-y-2">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-[#00F2FE] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-white/50 mb-2">
              TECHNOLOGY STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-white/50">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Deployed &amp; Verified on Vercel Edge</span>
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton
              onClick={() => alert(`Live preview instance for ${project.title} loaded successfully!`)}
              variant="primary"
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </MagneticButton>
            <MagneticButton
              onClick={onClose}
              variant="outline"
              className="px-5 py-2.5 text-xs font-semibold"
            >
              Close
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
};
