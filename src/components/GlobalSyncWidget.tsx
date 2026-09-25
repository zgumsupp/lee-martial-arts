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
        className="group relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#00F2FE]/40 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F2FE] shadow-[0_0_10px_#00F2FE]"></span>
        </span>

        <span className="text-xs sm:text-sm font-medium text-white/90 flex items-center gap-2">
          <span>Based in Pakistan</span>
          <span className="text-white/30">•</span>
          <span className="text-[#00F2FE] font-semibold">Available for Work</span>
        </span>

        {currentTime && (
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-mono font-medium">
            <Clock className="w-3 h-3 text-[#00F2FE]" />
            {currentTime} PKT
          </span>
        )}

        <ChevronRight
          className={`w-3.5 h-3.5 text-white/40 group-hover:text-white transition-transform duration-300 ${
            isExpanded ? 'rotate-90 text-[#00F2FE]' : ''
          }`}
        />
      </button>

      {/* Expanded Remote Coverage Popover */}
      {isExpanded && (
        <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-full mt-3 w-80 sm:w-96 z-50 rounded-2xl bg-[#0E1522]/95 border border-white/15 backdrop-blur-2xl p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(0,242,254,0.15)] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#00F2FE]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Global Remote Sync
              </span>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono font-medium">
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
                      ? 'bg-white/[0.08] border-[#00F2FE]/40 shadow-[0_0_15px_rgba(0,242,254,0.1)]'
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
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#00F2FE]/20 text-[#00F2FE] font-mono">
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
