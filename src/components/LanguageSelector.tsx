import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguage } from '../data/translations';

interface LanguageSelectorProps {
  playClickSound?: () => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ playClickSound }) => {
  const { language, setLanguage, languages, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectLanguage = (lang: SupportedLanguage) => {
    playClickSound?.();
    setLanguage(lang);
    setIsOpen(false);
  };

  const handleToggle = () => {
    playClickSound?.();
    setIsOpen(!isOpen);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left flex-shrink-0">
      {/* Sleek Glassmorphic Dropdown Trigger Button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select Language"
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border transition-all duration-200 cursor-pointer text-xs font-mono select-none backdrop-blur-md ${
          isOpen
            ? 'bg-[#00F2FE]/15 border-[#00F2FE]/60 text-white shadow-[0_0_15px_rgba(0,242,254,0.35)]'
            : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/12 hover:border-[#00F2FE]/40 text-white/85 hover:text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)]'
        }`}
      >
        {/* Subtle Neon Cyan Globe Icon */}
        <Globe className="w-3.5 h-3.5 text-[#00F2FE] drop-shadow-[0_0_6px_rgba(0,242,254,0.6)] flex-shrink-0 animate-[spin_18s_linear_infinite]" />
        
        {/* Default Language Code Tag & Label */}
        <span className="font-bold tracking-wider text-[11px] sm:text-xs">
          {t.code}
        </span>

        {/* Downward Chevron with Rotation Transition */}
        <ChevronDown
          className={`w-3 h-3 text-white/50 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#00F2FE]' : ''
          }`}
        />
      </button>

      {/* Glassmorphic Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Languages"
          className="absolute left-0 mt-2 w-48 sm:w-52 p-1.5 rounded-2xl bg-[#080E1C]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_20px_rgba(0,242,254,0.15),inset_0_1px_0_rgba(255,255,255,0.12)] z-50 origin-top-left transition-all animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header pill inside dropdown */}
          <div className="px-3 py-1.5 mb-1 border-b border-white/10 flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest uppercase text-white/40">
              Select Language
            </span>
            <span className="text-xs">🌐</span>
          </div>

          <div className="space-y-0.5">
            {languages.map((lang) => {
              const isSelected = language === lang;
              return (
                <button
                  key={lang}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelectLanguage(lang)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#00F2FE]/15 text-white font-semibold border border-[#00F2FE]/30 shadow-[0_0_12px_rgba(0,242,254,0.2)]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.06] border border-transparent'
                  }`}
                >
                  <span className="truncate">{lang}</span>
                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-[#00F2FE] drop-shadow-[0_0_6px_#00F2FE] flex-shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
