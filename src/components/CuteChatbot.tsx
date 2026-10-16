import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Sparkles, MessageCircle, ArrowUpRight, CheckCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

interface CuteChatbotProps {
  playClickSound?: () => void;
}

export const CuteChatbot: React.FC<CuteChatbotProps> = ({ playClickSound }) => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-init',
      sender: 'bot',
      text: t.chatbot.initialGreeting,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  useEffect(() => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === 'msg-init' ? { ...m, text: t.chatbot.initialGreeting } : m
      )
    );
  }, [language, t.chatbot.initialGreeting]);

  const quickPrompts = t.chatbot.quickPrompts;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowTooltip(false);
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 250);
    }
  }, [isOpen, messages]);

  const getBotReply = (userQuery: string): string => {
    const q = userQuery.toLowerCase();
    if (q.includes('etsy') || q.includes('store') || q.includes('product') || q.includes('쇼핑몰') || q.includes('ストア') || q.includes('متجر') || q.includes('shop')) {
      return t.chatbot.botResponses.etsy;
    }
    if (q.includes('vibe') || q.includes('code') || q.includes('web') || q.includes('site') || q.includes('개발') || q.includes('開発') || q.includes('موقع') || q.includes('webseite')) {
      return t.chatbot.botResponses.vibe;
    }
    if (q.includes('time') || q.includes('turnaround') || q.includes('fast') || q.includes('long') || q.includes('speed') || q.includes('기간') || q.includes('期間') || q.includes('مدة') || q.includes('zeit')) {
      return t.chatbot.botResponses.speed;
    }
    if (q.includes('price') || q.includes('cost') || q.includes('budget') || q.includes('hire') || q.includes('contact') || q.includes('가격') || q.includes('비용') || q.includes('価格') || q.includes('料金') || q.includes('سعر') || q.includes('kosten')) {
      return t.chatbot.botResponses.hire;
    }
    return t.chatbot.botResponses.default;
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    if (playClickSound) playClickSound();

    const newMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulated responsive AI helper typing delay
    setTimeout(() => {
      const replyText = getBotReply(text);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    if (playClickSound) playClickSound();
    setIsOpen(!isOpen);
    setShowTooltip(false);
  };

  return (
    <>
      {/* Scoped CSS Keyframes for Cute Anime Chatbot Micro-interactions */}
      <style>{`
        @keyframes cuteFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(1.5deg);
          }
        }
        @keyframes cuteBlink {
          0%, 90%, 100% {
            transform: scaleY(1);
          }
          95% {
            transform: scaleY(0.1);
          }
        }
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 242, 254, 0.4), 0 0 35px rgba(168, 85, 247, 0.25);
          }
          50% {
            box-shadow: 0 0 32px rgba(0, 242, 254, 0.75), 0 0 50px rgba(168, 85, 247, 0.45);
          }
        }
        .anime-blink {
          animation: cuteBlink 4s infinite ease-in-out;
          transform-origin: center;
        }
        .bot-floating {
          animation: cuteFloat 4s infinite ease-in-out;
        }
        .bot-glow-pulse {
          animation: glowPulse 2.8s infinite ease-in-out;
        }
      `}</style>

      {/* Floating Chatbot Overlay Container (Fixed Position Physics) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none select-none">
        {/* Floating Proactive Helper Bubble when closed */}
        {!isOpen && showTooltip && (
          <div
            onClick={toggleChat}
            className="pointer-events-auto mb-3 cursor-pointer group flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#080E1C]/90 backdrop-blur-2xl border border-[#00F2FE]/40 text-white text-xs font-medium shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(0,242,254,0.3)] animate-in fade-in slide-in-from-bottom-2 duration-300 hover:border-[#00F2FE] hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all max-w-[240px]"
          >
            <span className="text-[#00F2FE] text-sm animate-bounce flex-shrink-0">✨</span>
            <p className="text-[11px] leading-tight font-mono">
              <span className="text-white block">Want a custom web tool?</span>
              <span className="text-[#00F2FE] font-bold block">Let's build it!</span>
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-white/40 hover:text-white p-0.5 rounded-full hover:bg-white/10 transition-colors ml-auto"
              title="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* EXPANDED GLASSMORPHIC CHAT WINDOW                                         */}
        {/* ========================================================================= */}
        {isOpen && (
          <div
            className="pointer-events-auto mb-3 w-[92vw] max-w-[360px] sm:max-w-[390px] h-[520px] max-h-[80vh] rounded-3xl bg-[#080E1C]/95 backdrop-blur-2xl border border-[#00F2FE]/30 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(0,242,254,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-3 zoom-in-95 duration-200 select-auto"
            role="dialog"
            aria-label="Digital Helper Chatbot Window"
          >
            {/* Chat Window Header */}
            <div className="px-4 py-3.5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                {/* Mini Cute Anime Avatar */}
                <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#00F2FE] via-[#0EA5E9] to-[#A855F7] p-[1.5px] shadow-[0_0_15px_rgba(0,242,254,0.4)] flex-shrink-0">
                  <div className="w-full h-full rounded-[14px] bg-[#070B14] flex items-center justify-center overflow-hidden">
                    {/* Cute Bot SVG Face */}
                    <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
                      {/* Antenna with LED */}
                      <line x1="18" y1="4" x2="18" y2="8" stroke="#00F2FE" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="18" cy="3" r="2" fill="#00F2FE" className="animate-pulse" />
                      {/* Ears / Headset Nodes */}
                      <rect x="3" y="14" width="3" height="8" rx="1.5" fill="#A855F7" />
                      <rect x="30" y="14" width="3" height="8" rx="1.5" fill="#A855F7" />
                      {/* Head outline */}
                      <rect x="5" y="8" width="26" height="20" rx="8" fill="#0E1628" stroke="#00F2FE" strokeWidth="1.5" />
                      {/* Visor Screen */}
                      <rect x="8" y="11" width="20" height="14" rx="5" fill="#050811" />
                      {/* Anime Eyes */}
                      <g className="anime-blink">
                        <circle cx="13" cy="17" r="3.2" fill="#00F2FE" />
                        <circle cx="12" cy="15.8" r="1.2" fill="#FFFFFF" />
                        <circle cx="23" cy="17" r="3.2" fill="#00F2FE" />
                        <circle cx="22" cy="15.8" r="1.2" fill="#FFFFFF" />
                      </g>
                      {/* Blush marks */}
                      <ellipse cx="10.5" cy="21.5" rx="2" ry="1" fill="#FF7AC6" opacity="0.8" />
                      <ellipse cx="25.5" cy="21.5" rx="2" ry="1" fill="#FF7AC6" opacity="0.8" />
                      {/* Smile */}
                      <path d="M16 20.5 Q18 22.5 20 20.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  {/* Online LED indicator */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#070B14] shadow-[0_0_8px_#34D399]" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-heading font-black text-xs sm:text-sm tracking-wider text-white">
                      {t.chatbot.headerTitle}
                    </h3>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#00F2FE]/15 border border-[#00F2FE]/30 text-[#00F2FE] font-mono font-bold">
                      AI ⚡
                    </span>
                  </div>
                  <p className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    {t.chatbot.statusOnline}
                  </p>
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={toggleChat}
                  className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.12] text-white/70 hover:text-white border border-white/10 transition-all flex items-center justify-center cursor-pointer"
                  aria-label="Close chat window"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Flow */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
              {messages.map((m) => {
                const isUser = m.sender === 'user';
                return (
                  <div
                    key={m.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-1 duration-200`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                        isUser
                          ? 'bg-gradient-to-r from-[#00F2FE] to-[#0EA5E9] text-[#050811] font-semibold rounded-tr-xs shadow-[0_4px_18px_rgba(0,242,254,0.3)]'
                          : 'bg-[#0E1528]/80 text-[#F4F4F6] border border-white/10 rounded-tl-xs shadow-[0_4px_16px_rgba(0,0,0,0.4)] backdrop-blur-md'
                      }`}
                    >
                      <p className="text-xs break-words">{m.text}</p>
                    </div>
                    <span className="text-[9px] font-mono text-white/40 mt-1 px-1 flex items-center gap-1">
                      {m.timestamp}
                      {isUser && <CheckCheck className="w-3 h-3 text-[#00F2FE]" />}
                    </span>
                  </div>
                );
              })}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl rounded-tl-xs bg-[#0E1528]/80 border border-white/10 w-fit backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-bounce [animation-delay:300ms]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Inquiry Suggestion Chips */}
            <div className="px-3 pb-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar flex-shrink-0">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSendMessage(prompt)}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono whitespace-nowrap bg-white/[0.04] hover:bg-[#00F2FE]/15 text-white/80 hover:text-[#00F2FE] border border-white/10 hover:border-[#00F2FE]/40 transition-all cursor-pointer flex-shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat Form Input & Send Button Container */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 border-t border-white/10 bg-[#060A14]/80 flex-shrink-0"
            >
              <div className="relative flex flex-col gap-2">
                <textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t.chatbot.inputPlaceholder}
                  rows={2}
                  className="w-full bg-[#0B1020]/90 border border-white/12 focus:border-[#00F2FE]/60 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none resize-none focus:ring-1 focus:ring-[#00F2FE]/40 transition-all font-sans leading-relaxed"
                />

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] font-mono text-white/40 hidden sm:inline">
                    Enter to send • Shift+Enter for newline
                  </span>
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className={`ml-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      inputValue.trim()
                        ? 'bg-gradient-to-r from-[#00F2FE] via-[#0EA5E9] to-[#A855F7] text-[#050811] shadow-[0_0_18px_rgba(0,242,254,0.4)] hover:shadow-[0_0_25px_rgba(0,242,254,0.6)] hover:scale-105 active:scale-95'
                        : 'bg-white/[0.06] text-white/30 border border-white/10 cursor-not-allowed'
                    }`}
                  >
                    <span>{t.contact.form.submitBtn}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PERSISTENT FLOATING BOT BUTTON (ANIME HELPER AVATAR)                       */}
        {/* ========================================================================= */}
        <button
          type="button"
          onClick={toggleChat}
          className="pointer-events-auto relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#00F2FE] via-[#38BDF8] to-[#A855F7] bot-glow-pulse transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center flex-shrink-0"
          aria-label={isOpen ? 'Close Digital Helper Chat' : 'Open Digital Helper Chat'}
          title="Chat with Anzil's Digital Helper"
        >
          {/* Ambient Radar Ping Wave */}
          <span className="absolute -inset-1 rounded-full bg-[#00F2FE] opacity-40 animate-ping pointer-events-none" />

          {/* Internal Button Surface */}
          <div className="relative w-full h-full rounded-full bg-[#070B14] flex items-center justify-center overflow-hidden border border-white/20">
            {isOpen ? (
              // Open State Icon (Smooth Cyan Close X)
              <div className="w-full h-full flex items-center justify-center bg-[#070B14]/90 text-[#00F2FE]">
                <X className="w-6 h-6 drop-shadow-[0_0_10px_#00F2FE] transition-transform duration-300 group-hover:rotate-90" />
              </div>
            ) : (
              // Closed State: Cute Animated Anime Bot Character Avatar
              <div className="bot-floating w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10 sm:w-11 sm:h-11" fill="none">
                  {/* Cyber Antenna with Pulsing Tip */}
                  <line x1="20" y1="4" x2="20" y2="8" stroke="#00F2FE" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="20" cy="3" r="2.2" fill="#00F2FE" className="animate-pulse shadow-[0_0_10px_#00F2FE]" />

                  {/* Mecha Cat Ears / Audio Flaps */}
                  <path d="M7 11 L12 16 L7 17 Z" fill="#A855F7" />
                  <path d="M33 11 L28 16 L33 17 Z" fill="#A855F7" />

                  {/* Helmet Faceplate Contour */}
                  <rect x="7" y="9" width="26" height="23" rx="10" fill="#0E1628" stroke="#00F2FE" strokeWidth="1.6" />

                  {/* Dark Glass Visor */}
                  <rect x="10" y="12" width="20" height="16" rx="6" fill="#050811" />

                  {/* Cute Kawaii Eyes with Sparkle Highlights & Blinking */}
                  <g className="anime-blink">
                    {/* Left Eye */}
                    <circle cx="15.5" cy="19" r="3.6" fill="#00F2FE" />
                    <circle cx="14.5" cy="17.6" r="1.4" fill="#FFFFFF" />
                    <circle cx="16.5" cy="20.2" r="0.7" fill="#FFFFFF" />

                    {/* Right Eye */}
                    <circle cx="24.5" cy="19" r="3.6" fill="#00F2FE" />
                    <circle cx="23.5" cy="17.6" r="1.4" fill="#FFFFFF" />
                    <circle cx="25.5" cy="20.2" r="0.7" fill="#FFFFFF" />
                  </g>

                  {/* Rosy Blush Spots */}
                  <ellipse cx="12.5" cy="23.5" rx="2" ry="1.2" fill="#FF7AC6" opacity="0.85" />
                  <ellipse cx="27.5" cy="23.5" rx="2" ry="1.2" fill="#FF7AC6" opacity="0.85" />

                  {/* Sweet Anime Smile Curve */}
                  <path d="M18 23.5 Q20 25.5 22 23.5" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </div>

          {/* Floating Online Badge */}
          {!isOpen && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#070B14] shadow-[0_0_10px_#34D399] flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-white" />
            </span>
          )}
        </button>
      </div>
    </>
  );
};
