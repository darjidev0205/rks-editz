import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail,
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  Send,
  Loader2,
  Copy,
  Check,
} from 'lucide-react';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';
import { BrandLogo } from '../ui/BrandLogo';

gsap.registerPlugin(ScrollTrigger);

type SubmitStatus = 'idle' | 'submitting' | 'success';

export const Contact: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const videoCardsRef = useRef<HTMLDivElement>(null);
  const infoAndFormRef = useRef<HTMLDivElement>(null);

  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Play background videos when rendered
  useEffect(() => {
    const playVideo = (v: HTMLVideoElement | null) => {
      if (!v) return;
      const p = v.play();
      if (p !== undefined) {
        p.catch(() => {
          // Autoplay fallback: poster stays visible
        });
      }
    };
    playVideo(video1Ref.current);
    playVideo(video2Ref.current);
  }, []);

  // GSAP scroll entrance animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (videoCardsRef.current) {
        gsap.fromTo(
          videoCardsRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: videoCardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (infoAndFormRef.current) {
        gsap.fromTo(
          infoAndFormRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: infoAndFormRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Form submission with instant tactile feedback (<50ms) and state recovery
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanContact = formData.contact.trim();
    const cleanMessage = formData.message.trim();

    if (!cleanContact || !cleanMessage) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 650);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({ name: '', contact: '', message: '' });
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const channels = [
    {
      key: 'email',
      name: 'Email',
      icon: Mail,
      href: 'mailto:krish@rkaeditz.com',
      detail: 'krish@rkaeditz.com',
      copyValue: 'krish@rkaeditz.com',
    },
    {
      key: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/919537324164?text=Hi%20Krish,%20I%20have%20a%20project%20in%20mind',
      detail: '+91 95373 24164',
      copyValue: '+919537324164',
    },
    {
      key: 'instagram',
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/rkaeditz',
      detail: '@rkaeditz',
      copyValue: 'https://instagram.com/rkaeditz',
    },
    {
      key: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      detail: 'Krish Patel',
      copyValue: 'Krish Patel',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative pt-20 sm:pt-28 pb-20 sm:pb-28 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1440px] mx-auto overflow-hidden scroll-mt-20 border-t border-[#1E3027]/10"
    >
      <div className="relative z-10 max-w-[1360px] mx-auto">
        {/* 03 — EDITORIAL SECTION HEADER */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EDF2E9] border border-[#DDE9D7] mb-4 shadow-xs">
            <BrandLogo variant="icon-dark" size="sm" className="h-3.5 w-auto object-contain" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1E3027] font-semibold">
              THE NEXT FRAME / 001
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#222A25] leading-tight mb-5">
            Your Next Big Idea <br />
            <span className="text-[#1E3027]">Starts Here.</span>
          </h2>

          <p className="font-inter text-sm sm:text-base md:text-lg text-[#69736B] max-w-xl mx-auto leading-relaxed">
            Whether it's a brand film, a documentary, or content built for the scroll — let's make something worth watching.
          </p>
        </div>

        {/* 04 & 05 — TWO CINEMATIC VIDEO CTA CARDS WITH PHOTOGRAPHIC BUTTONS */}
        <div
          ref={videoCardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {/* ========================================================
              CARD 01: LET'S BUILD SOMETHING (PRODUCTION / WORKFLOW)
             ======================================================== */}
          <div className="group relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[380px] sm:min-h-[420px] p-7 sm:p-9 lg:p-10 flex flex-col justify-between border border-white/20 shadow-xl shadow-black/20 transition-all duration-300">
            {/* LAYER 1: Full-card continuously moving video */}
            <video
              ref={video1Ref}
              src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4"
              poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none scale-100 group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85] contrast-[1.05]"
            />

            {/* LAYER 2: Directional dark protective gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Subtle editorial film frame lines */}
            <div className="absolute top-5 right-5 pointer-events-none font-mono text-[10px] tracking-widest text-white/50 uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>REC • STUDIO TIMELINE</span>
            </div>

            {/* LAYER 3: Foreground Content (Eyebrow, Headline, Paragraph) */}
            <div className="relative z-10 max-w-md">
              <span className="inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-[#DDE9D7] font-semibold mb-2.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-xs border border-white/10">
                01 / START A COLLABORATION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#F7F6F0] leading-tight mb-3">
                Let's Build Something.
              </h3>
              <p className="font-inter text-xs sm:text-sm text-[#DDE9D7]/85 leading-relaxed">
                Have a story, a brand, or an idea? Let's bring it to life.
              </p>
            </div>

            {/* LAYER 4: PREMIUM BUTTON WITH PHOTOGRAPHIC BACKGROUND (SECTION 06) */}
            <div className="relative z-10 pt-8 sm:pt-10 flex items-center justify-between border-t border-white/15">
              <span className="font-mono text-xs text-[#DDE9D7]/80 font-medium hidden sm:inline">
                Direct Studio Line
              </span>

              <button
                onClick={() => {
                  const formEl = document.getElementById('contact-form');
                  if (formEl) {
                    scrollTo(formEl, { offset: -60 });
                  }
                }}
                className="group/btn relative overflow-hidden rounded-full px-6 sm:px-7 py-3 sm:py-3.5 flex items-center gap-2.5 shadow-lg shadow-black/40 border border-white/30 cursor-pointer transition-all active:scale-95"
                aria-label="Start Your Project"
              >
                {/* Real Photographic Still Background */}
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop"
                  alt="Creative editing suite keyboard"
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover/btn:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                />
                {/* Controlled Dark Overlay for High-Contrast Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#1E3027]/75 to-black/80 group-hover/btn:from-black/70 group-hover/btn:to-black/70 transition-colors duration-300" />

                {/* Text and Icon */}
                <span className="relative z-10 font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#F7F6F0]">
                  START YOUR PROJECT
                </span>
                <ArrowUpRight className="relative z-10 w-4 h-4 text-[#F7F6F0] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* ========================================================
              CARD 02: EXPLORE THE WORK (CINEMATIC OUTPUT / PORTFOLIO)
             ======================================================== */}
          <div className="group relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[380px] sm:min-h-[420px] p-7 sm:p-9 lg:p-10 flex flex-col justify-between border border-white/20 shadow-xl shadow-black/20 transition-all duration-300">
            {/* LAYER 1: Full-card continuously moving video (DIFFERENT video from Card 01) */}
            <video
              ref={video2Ref}
              src="https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4"
              poster="https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=1200&auto=format&fit=crop"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none scale-100 group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85] contrast-[1.05]"
            />

            {/* LAYER 2: Directional dark protective gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Subtle editorial film frame lines */}
            <div className="absolute top-5 right-5 pointer-events-none font-mono text-[10px] tracking-widest text-white/50 uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>4K MASTER • 24 FPS</span>
            </div>

            {/* LAYER 3: Foreground Content (Eyebrow, Headline, Paragraph) */}
            <div className="relative z-10 max-w-md">
              <span className="inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-[#DDE9D7] font-semibold mb-2.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-xs border border-white/10">
                02 / SELECTED PROJECTS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#F7F6F0] leading-tight mb-3">
                Explore the Work.
              </h3>
              <p className="font-inter text-xs sm:text-sm text-[#DDE9D7]/85 leading-relaxed">
                Every frame has a purpose. Explore what we have created.
              </p>
            </div>

            {/* LAYER 4: PREMIUM BUTTON WITH PHOTOGRAPHIC BACKGROUND (SECTION 06) */}
            <div className="relative z-10 pt-8 sm:pt-10 flex items-center justify-between border-t border-white/15">
              <span className="font-mono text-xs text-[#DDE9D7]/80 font-medium hidden sm:inline">
                Curated Showcase
              </span>

              <button
                onClick={() => scrollTo('#work', { offset: -30 })}
                className="group/btn relative overflow-hidden rounded-full px-6 sm:px-7 py-3 sm:py-3.5 flex items-center gap-2.5 shadow-lg shadow-black/40 border border-white/30 cursor-pointer transition-all active:scale-95"
                aria-label="View Selected Work"
              >
                {/* Real Photographic Still Background (DIFFERENT photograph from Button 01) */}
                <img
                  src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop"
                  alt="Cinema projection light beam"
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover/btn:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                />
                {/* Controlled Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#1E3027]/75 to-black/80 group-hover/btn:from-black/70 group-hover/btn:to-black/70 transition-colors duration-300" />

                {/* Text and Icon */}
                <span className="relative z-10 font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#F7F6F0]">
                  VIEW SELECTED WORK
                </span>
                <ArrowUpRight className="relative z-10 w-4 h-4 text-[#F7F6F0] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* 08 — CONTACT INFORMATION & PROJECT INQUIRY FORM */}
        <div
          id="contact-form"
          ref={infoAndFormRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24"
        >
          {/* Left: Contact Channels (Editorial composition) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="mb-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#69736B] font-semibold block mb-1">
                COMMUNICATION LINES
              </span>
              <h3 className="font-display text-2xl font-bold text-[#222A25]">
                Direct Contacts
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {channels.map((ch) => {
                const Icon = ch.icon;
                const isCopied = copiedKey === ch.key;

                return (
                  <div
                    key={ch.key}
                    className="p-4 rounded-2xl bg-white hover:bg-[#EDF2E9]/60 border border-[#1E3027]/10 hover:border-[#1E3027]/25 transition-all duration-200 flex items-center justify-between group shadow-xs"
                  >
                    <a
                      href={ch.href}
                      target={ch.key !== 'email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 flex-1 min-w-0"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#EDF2E9] group-hover:bg-[#1E3027] text-[#1E3027] group-hover:text-[#F7F6F0] flex items-center justify-center transition-colors flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="font-display text-xs font-bold text-[#222A25] block group-hover:text-[#1E3027] transition-colors">
                          {ch.name}
                        </span>
                        <span className="font-mono text-[11px] text-[#69736B] block truncate">
                          {ch.detail}
                        </span>
                      </div>
                    </a>

                    <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                      <button
                        onClick={() => handleCopy(ch.copyValue, ch.key)}
                        title={`Copy ${ch.name}`}
                        aria-label={`Copy ${ch.name}`}
                        className="p-2 rounded-lg hover:bg-black/5 text-[#69736B] hover:text-[#222A25] transition-colors"
                      >
                        {isCopied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <a
                        href={ch.href}
                        target={ch.key !== 'email' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        aria-label={`Open ${ch.name}`}
                        className="p-2 rounded-lg hover:bg-black/5 text-[#69736B] group-hover:text-[#1E3027] transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Project Inquiry Form on elevated warm off-white surface */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[24px] bg-white border border-[#1E3027]/10 shadow-lg shadow-[#1E3027]/5">
              <div className="mb-6 pb-4 border-b border-[#1E3027]/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#69736B] font-semibold block mb-0.5">
                    PROJECT INQUIRY
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#222A25]">
                    Tell Us About Your Vision
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#1E3027] font-semibold bg-[#EDF2E9] px-3 py-1.5 rounded-full border border-[#DDE9D7]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>24–48h Turnaround</span>
                </div>
              </div>

              {status === 'success' ? (
                <div className="py-10 text-center flex flex-col items-center justify-center space-y-3.5">
                  <div className="w-14 h-14 rounded-full bg-[#EDF2E9] text-[#1E3027] flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-7 h-7 text-[#1E3027]" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#222A25]">
                    Project Brief Received
                  </h4>
                  <p className="font-inter text-xs sm:text-sm text-[#69736B] max-w-sm leading-relaxed">
                    Thank you! Krish will personally review your narrative goals, turnaround timeline, and reply within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-3 px-5 py-2.5 rounded-full bg-[#1E3027] text-[#F7F6F0] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#2A4337] transition-all cursor-pointer"
                  >
                    Submit Another Brief &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="font-mono text-[11px] uppercase tracking-wider text-[#69736B] block mb-1.5 font-semibold"
                      >
                        Your Name / Brand *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Vance, Studio Apex"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F6F0] border border-[#1E3027]/12 focus:border-[#1E3027] focus:bg-white text-[#222A25] placeholder-[#69736B]/60 text-xs font-inter outline-none transition-all shadow-xs"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact"
                        className="font-mono text-[11px] uppercase tracking-wider text-[#69736B] block mb-1.5 font-semibold"
                      >
                        Email or WhatsApp *
                      </label>
                      <input
                        id="contact"
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="alex@studioapex.com or +1..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F6F0] border border-[#1E3027]/12 focus:border-[#1E3027] focus:bg-white text-[#222A25] placeholder-[#69736B]/60 text-xs font-inter outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="font-mono text-[11px] uppercase tracking-wider text-[#69736B] block mb-1.5 font-semibold"
                    >
                      Project Details &amp; Deliverables *
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, target channels, timeline, and reference footage..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F6F0] border border-[#1E3027]/12 focus:border-[#1E3027] focus:bg-white text-[#222A25] placeholder-[#69736B]/60 text-xs font-inter outline-none transition-all resize-none shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#1E3027] hover:bg-[#2A4337] disabled:bg-[#1E3027]/70 text-white font-display text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 shadow-md shadow-[#1E3027]/15 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Brief...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
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
