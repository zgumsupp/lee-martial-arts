import React, { useState, useEffect } from 'react';
import { Globe, Clock, Radio, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TIMEZONE_NODES } from '../data/portfolioData';

export const GlobalSyncWidget: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedNode, setSelectedNode] = useState(0);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      // Format Pakistan Time (Asia/Karachi)
      const pktString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(pktString);
    };

    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        id="global-sync-status-btn"
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#080E1C]/70 hover:bg-[#080E1C]/90 border border-white/12 hover:border-[#00F2FE]/50 backdrop-blur-2xl transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] hover:shadow-[0_0_20px_rgba(0,242,254,0.25)] text-xs"
      >
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F2FE] shadow-[0_0_10px_#00F2FE]"></span>
        </span>

        <span className="text-[11px] sm:text-xs font-medium text-white/90 flex items-center gap-1.5 whitespace-nowrap">
          <span>Based in Pakistan</span>
          <span className="text-white/30">•</span>
          <span className="text-[#00F2FE] font-semibold">Available for Work</span>
        </span>

        {currentTime && (
          <span className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/30 text-[#00F2FE] text-[10px] font-mono font-medium shadow-[0_0_10px_rgba(0,242,254,0.2)] whitespace-nowrap">
            <Clock className="w-2.5 h-2.5 text-[#00F2FE]" />
            {currentTime} PKT
          </span>
        )}

        <ChevronRight
          className={`w-3.5 h-3.5 text-white/40 group-hover:text-white transition-transform duration-300 flex-shrink-0 ${
            isExpanded ? 'rotate-90 text-[#00F2FE]' : ''
          }`}
        />
      </button>

      {/* Expanded Remote Coverage Popover */}
      {isExpanded && (
        <div className="absolute right-0 top-full mt-3 w-80 sm:w-96 z-50 rounded-2xl bg-[#080E1C]/95 border border-white/15 backdrop-blur-2xl p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(0,242,254,0.18),0_0_50px_rgba(168,85,247,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#00F2FE]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Global Remote Sync
              </span>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono font-medium shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              Live 24/7 Overlap
            </span>
          </div>

          <div className="space-y-2">
            {TIMEZONE_NODES.map((node, index) => {
              // Calculate live time for this timezone
              const nodeTime = new Date().toLocaleTimeString('en-US', {
                timeZone: node.timezone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              });

              const isPk = node.flag === '🇵🇰';

              return (
                <div
                  key={node.city}
                  onClick={() => setSelectedNode(index)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedNode === index
                      ? 'bg-white/[0.08] border-[#00F2FE]/50 shadow-[0_0_18px_rgba(0,242,254,0.2)]'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{node.flag}</span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white tracking-wide">
                          {node.city}
                        </span>
                        {isPk && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#00F2FE]/20 text-[#00F2FE] font-mono border border-[#00F2FE]/30 shadow-[0_0_8px_rgba(0,242,254,0.2)]">
                            HOME
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-white/50 block">
                        {node.coverage}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-[#00F2FE]">
                      {nodeTime}
                    </span>
                    <span className="text-[10px] text-white/40 block font-mono">
                      {node.utcOffset}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Direct async + real-time comms
            </span>
            <a
              href="#contact"
              onClick={() => setIsExpanded(false)}
              className="text-[#00F2FE] hover:underline font-semibold"
            >
              Book Intro Call ➔
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
