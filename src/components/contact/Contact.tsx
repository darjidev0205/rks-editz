import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Instagram, Linkedin, MessageCircle, ArrowUpRight, CheckCircle2, Send, Film, MessageSquare, Loader2 } from 'lucide-react';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';
import { BrandLogo } from '../ui/BrandLogo';

gsap.registerPlugin(ScrollTrigger);

type SubmitStatus = 'idle' | 'submitting' | 'success';

export const Contact: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const wideCardsRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrance animation for content
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Postel's Law + Doherty Threshold (<400ms state response)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanContact = formData.contact.trim();
    const cleanMessage = formData.message.trim();

    if (!cleanContact || !cleanMessage) return;

    // Instant tactile UI feedback (<50ms)
    setStatus('submitting');

    // Simulate reliable dispatch with state recovery
    setTimeout(() => {
      setStatus('success');
    }, 700);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({ name: '', contact: '', message: '' });
  };

  const channels = [
    { name: 'Email', icon: Mail, href: 'mailto:krish@rkaeditz.com', detail: 'krish@rkaeditz.com' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/919537324164?text=Hi%20Krish,%20I%20have%20a%20project%20in%20mind', detail: '+91 95373 24164' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/rkaeditz', detail: '@rkaeditz' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', detail: 'Krish Patel' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative pt-20 sm:pt-28 pb-20 sm:pb-28 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1440px] mx-auto overflow-hidden scroll-mt-20 border-t border-[#1E3027]/10"
    >
      <div ref={contentRef} className="relative z-10 max-w-[1360px] mx-auto">
        {/* Main CTA Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EDF2E9] border border-[#DDE9D7] mb-4 shadow-xs">
            <BrandLogo variant="icon-dark" size="sm" className="h-3.5 w-auto object-contain" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1E3027] font-semibold">
              START A PROJECT
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#222A25] leading-tight mb-5">
            Have Something <br />
            <span className="text-[#1E3027]">Worth Creating?</span>
          </h2>
          <p className="font-inter text-sm sm:text-base md:text-lg text-[#69736B] max-w-xl mx-auto leading-relaxed mb-8">
            Let's turn your next idea into something people remember. Share your raw footage, timeline, or project goals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:krish@rkaeditz.com"
              className="px-8 py-3.5 rounded-full bg-[#1E3027] hover:bg-[#2A4337] text-white font-display text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-md shadow-[#1E3027]/15"
            >
              Start a Conversation
            </a>
            <button
              onClick={() => scrollTo('#work', { offset: -30 })}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-[#EDF2E9] border border-[#1E3027]/15 text-[#222A25] font-display font-medium text-xs sm:text-sm tracking-wider uppercase transition-all active:scale-95 shadow-xs"
            >
              Explore More Work
            </button>
          </div>
        </div>

        {/* TWO HORIZONTALLY WIDE BOTTOM CARDS */}
        <div ref={wideCardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {/* Card A: Let's Build Something */}
          <div className="rounded-3xl bg-white border border-[#1E3027]/10 hover:border-[#1E3027]/30 p-8 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-xl group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EDF2E9] text-[#1E3027] flex items-center justify-center mb-5">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#69736B] block mb-1">
                DIRECT INQUIRY
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#222A25] mb-2">
                Let's Build Something.
              </h3>
              <p className="font-inter text-xs sm:text-sm text-[#69736B] leading-relaxed">
                Tell us what you're working on. Whether an episodic series, brand campaign, or
                high-retention reels.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1E3027]/10 flex items-center justify-between">
              <span className="font-mono text-xs text-[#1E3027] font-semibold">Direct Studio Line</span>
              <a
                href="mailto:krish@rkaeditz.com"
                className="px-5 py-2.5 rounded-full bg-[#1E3027] hover:bg-[#2A4337] text-white font-display text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs"
              >
                <span>Inquire Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card B: Explore the Work */}
          <div className="rounded-3xl bg-white border border-[#1E3027]/10 hover:border-[#1E3027]/30 p-8 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-xl group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EDF2E9] text-[#1E3027] flex items-center justify-center mb-5">
                <Film className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#69736B] block mb-1">
                EXECUTION &amp; ARCHIVE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#222A25] mb-2">
                Explore the Work.
              </h3>
              <p className="font-inter text-xs sm:text-sm text-[#69736B] leading-relaxed">
                See what happens when ideas meet execution. Review our color finishing, pacing benchmarks,
                and documentary cuts.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1E3027]/10 flex items-center justify-between">
              <span className="font-mono text-xs text-[#1E3027] font-semibold">6 Formats Showcase</span>
              <button
                onClick={() => scrollTo('#work', { offset: -30 })}
                className="px-5 py-2.5 rounded-full border border-[#1E3027]/20 hover:border-[#1E3027]/50 hover:bg-[#EDF2E9] text-[#222A25] font-display text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all"
              >
                <span>Jump to Gallery</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* QUICK INQUIRY BRIEF & CHANNELS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Social & Contact Channels */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            {channels.map((ch) => {
              const Icon = ch.icon;
              return (
                <a
                  key={ch.name}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white hover:bg-[#EDF2E9] border border-[#1E3027]/10 hover:border-[#1E3027]/30 transition-all duration-200 group flex flex-col gap-1.5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-4 h-4 text-[#69736B] group-hover:text-[#1E3027] transition-colors" />
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#69736B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="font-display text-xs text-[#222A25] font-bold mt-1">{ch.name}</span>
                  <span className="font-mono text-[11px] text-[#69736B] truncate">{ch.detail}</span>
                </a>
              );
            })}
          </div>

          {/* Quick Brief Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#1E3027]/10 shadow-lg">
              {status === 'success' ? (
                <div className="py-8 text-center flex flex-col items-center justify-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#EDF2E9] text-[#1E3027] flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-6 h-6 text-[#1E3027]" />
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-[#222A25]">Project Brief Received</h4>
                  <p className="font-inter text-xs sm:text-sm text-[#69736B] max-w-sm leading-relaxed">
                    Thank you! Krish will review your storyline, pacing requirements, and reply with custom timeline options within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#1E3027] hover:underline"
                  >
                    Submit Another Brief &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wider text-[#69736B] block mb-1 font-semibold">
                        Your Name / Brand
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Vance, Studio Apex"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F6F0] border border-[#1E3027]/12 focus:border-[#1E3027] text-[#222A25] placeholder-[#69736B]/60 text-xs font-inter outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact" className="font-mono text-[11px] uppercase tracking-wider text-[#69736B] block mb-1 font-semibold">
                        Email or WhatsApp
                      </label>
                      <input
                        id="contact"
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="alex@studioapex.com or +1..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F6F0] border border-[#1E3027]/12 focus:border-[#1E3027] text-[#222A25] placeholder-[#69736B]/60 text-xs font-inter outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wider text-[#69736B] block mb-1 font-semibold">
                      Project Details &amp; Deliverables
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, target channels, timeline, and reference footage..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F6F0] border border-[#1E3027]/12 focus:border-[#1E3027] text-[#222A25] placeholder-[#69736B]/60 text-xs font-inter outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 px-5 rounded-xl bg-[#1E3027] hover:bg-[#2A4337] disabled:bg-[#1E3027]/70 text-white font-display text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 shadow-sm cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending Brief...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Project Brief</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
