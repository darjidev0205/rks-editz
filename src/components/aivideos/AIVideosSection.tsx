import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Cpu,
} from 'lucide-react';
import { AI_VIDEOS_DATA } from '../../data/aiVideos';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

export const AIVideosSection: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const marqueeTextRef1 = useRef<HTMLDivElement>(null);
  const marqueeTextRef2 = useRef<HTMLDivElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Cinematic GSAP ScrollTrigger Entrance & Ambient Parallax
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header entrance animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
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

      // Parallax scroll on repeated background words
      if (marqueeTextRef1.current) {
        gsap.to(marqueeTextRef1.current, {
          xPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      if (marqueeTextRef2.current) {
        gsap.to(marqueeTextRef2.current, {
          xPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Carousel manual navigation
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselTrackRef.current) return;
    const scrollAmount = carouselTrackRef.current.clientWidth * 0.75;
    carouselTrackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleTogglePlay = (projectId: string) => {
    setActiveVideoId((prev) => (prev === projectId ? null : projectId));
  };

  return (
    <section
      ref={sectionRef}
      id="ai-videos"
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#050814] text-white overflow-hidden scroll-mt-16 selection:bg-[#2DD4BF] selection:text-[#050814]"
    >
      {/* ============================================================
          LAYER 0: DARK CINEMATIC ATMOSPHERE & SUBTLE WAVE LINES
          ============================================================ */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
        {/* Radial ambient gradient blooms */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#0e214d]/35 via-[#08132e]/20 to-transparent rounded-full blur-[110px]" />
        <div className="absolute -bottom-20 right-10 w-[550px] h-[400px] bg-[#2DD4BF]/[0.04] rounded-full blur-[130px]" />

        {/* Elegant flowing contour/wave line pattern (User's Reference Aesthetic) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06] mix-blend-screen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,250 C300,100 600,400 950,220 C1300,40 1500,320 1800,240"
            fill="none"
            stroke="url(#cyanGrad)"
            strokeWidth="1.5"
          />
          <path
            d="M-100,380 C320,240 620,520 980,360 C1340,200 1520,440 1800,360"
            fill="none"
            stroke="url(#cyanGrad)"
            strokeWidth="1.5"
          />
          <path
            d="M-100,510 C340,380 640,640 1010,490 C1380,340 1540,560 1800,480"
            fill="none"
            stroke="url(#cyanGrad)"
            strokeWidth="1.5"
          />
          <path
            d="M-100,640 C360,520 660,760 1040,620 C1420,480 1560,680 1800,600"
            fill="none"
            stroke="url(#cyanGrad)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Subtle grid dots for digital depth */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* ============================================================
          LAYER 1: LARGE REPEATED OVERSIZED BACKGROUND TYPOGRAPHY
          (Atmospheric design layer inspired by oneforedits Work/Process)
          ============================================================ */}
      <div className="absolute inset-0 flex flex-col justify-around pointer-events-none select-none overflow-hidden -z-10 py-10 opacity-70">
        {/* Row 1: Leftward drifting oversized words */}
        <div
          ref={marqueeTextRef1}
          className="whitespace-nowrap font-display font-extrabold text-[90px] sm:text-[140px] md:text-[170px] lg:text-[210px] tracking-tighter text-white/[0.035] leading-none select-none transition-transform"
        >
          AI VIDEOS &bull; SHOWREEL &bull; NEURAL VISION &bull; GENERATIVE CRAFT &bull; AI VIDEOS &bull; SHOWREEL &bull;
        </div>

        {/* Row 2: Rightward drifting oversized words */}
        <div
          ref={marqueeTextRef2}
          className="whitespace-nowrap font-display font-extrabold text-[90px] sm:text-[140px] md:text-[170px] lg:text-[210px] tracking-tighter text-white/[0.025] leading-none select-none transition-transform"
        >
          SYNTHETIC MOTION &bull; DIRECTION &bull; CINEMATIC EDITS &bull; FUTURE FRAMES &bull; SYNTHETIC MOTION &bull;
        </div>
      </div>

      {/* ============================================================
          LAYER 2: EDITORIAL HEADER & CATEGORY INTRO
          ============================================================ */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div ref={headerRef} className="max-w-4xl mb-12 sm:mb-16">
          {/* Eyebrow Pill with Glowing Teal Dot */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] shadow-[0_0_10px_#2DD4BF] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2DD4BF] font-semibold">
              CATEGORY 01 / AI VISUALS
            </span>
            <span className="text-white/20">•</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
              SHOWREEL / AI EDITS
            </span>
          </div>

          {/* Master Headline */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.08] mb-6">
            AI Videos That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#38BDF8] to-white relative inline-block">
              Don’t Look Generic.
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#2DD4BF] to-transparent rounded-full" />
            </span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="font-inter text-base sm:text-lg md:text-xl text-[#A0AAB5] leading-relaxed max-w-2xl mb-8">
            From AI-generated visuals to stylized motion pieces, we craft AI video edits that feel intentional,
            cinematic, and scroll-stopping — not cheap or template-made.
          </p>

          {/* Meta specs strip */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-white/50 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>Multi-Model Temporal Coherence</span>
            </div>
            <div className="hidden sm:inline text-white/20">•</div>
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Custom Audio Mastering &amp; Foley</span>
            </div>
            <div className="hidden sm:inline text-white/20">•</div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-white/80" />
              <span>100% Post-Production Polish</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          LAYER 3: WIDE HORIZONTAL SHOWCASE CARDS (3 MAIN + CROPPED EDGES)
          ============================================================ */}
      <div className="relative z-10 w-full mb-12 sm:mb-16">
        {/* Navigation Arrows for Desktop Controls */}
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between mb-6">
          <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">
            DRAG OR ARROW TO EXPLORE 5 FEATURED PIECES
          </span>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollCarousel('left')}
              aria-label="Previous AI Project"
              className="w-10 h-10 rounded-full border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              aria-label="Next AI Project"
              className="w-10 h-10 rounded-full border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Card Track with edge peek */}
        <div
          ref={carouselTrackRef}
          className="flex items-center gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-8 md:px-12 lg:px-16 pb-6 pt-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {AI_VIDEOS_DATA.map((project) => {
            const isPlaying = activeVideoId === project.id;
            const isPortrait = project.aspect === 'portrait';
            const isCenterpiece = project.featured;

            return (
              <div
                key={project.id}
                style={{ scrollSnapAlign: 'center' }}
                onClick={() => handleTogglePlay(project.id)}
                className={`group relative flex-shrink-0 rounded-[22px] overflow-hidden bg-[#0a0f1e] border transition-all duration-500 cursor-pointer ${
                  isCenterpiece
                    ? 'w-[300px] sm:w-[420px] md:w-[480px] lg:w-[540px] h-[460px] sm:h-[500px] md:h-[540px] border-[#2DD4BF]/40 shadow-[0_0_35px_rgba(45,212,191,0.12)] scale-[1.02] sm:scale-105 z-20'
                    : isPortrait
                    ? 'w-[230px] sm:w-[270px] md:w-[310px] h-[440px] sm:h-[480px] md:h-[510px] border-white/12 hover:border-[#2DD4BF]/50 shadow-xl z-10'
                    : 'w-[280px] sm:w-[360px] md:w-[420px] h-[360px] sm:h-[400px] md:h-[430px] border-white/12 hover:border-[#2DD4BF]/50 shadow-xl z-10'
                } hover:-translate-y-1.5 hover:shadow-2xl`}
              >
                {/* Poster / Video Display Window */}
                <div className="absolute inset-0 overflow-hidden bg-[#070b16]">
                  {/* Poster Image */}
                  <img
                    src={project.poster}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                      isPlaying ? 'opacity-0' : 'opacity-90'
                    }`}
                    loading="lazy"
                  />

                  {/* HTML5 Inline Video Element */}
                  {project.videoUrl && (
                    <video
                      src={project.videoUrl}
                      playsInline
                      muted={isMuted}
                      loop
                      autoPlay={isPlaying}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                      ref={(el) => {
                        if (el) {
                          if (isPlaying) {
                            el.play().catch(() => {});
                          } else {
                            el.pause();
                          }
                        }
                      }}
                    />
                  )}

                  {/* Dark Cinema Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-[#050814]/40 to-transparent pointer-events-none" />
                </div>

                {/* Top Corner Badge & Specs */}
                <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-bold backdrop-blur-md border shadow-xs ${
                      isCenterpiece
                        ? 'bg-[#2DD4BF]/20 text-[#2DD4BF] border-[#2DD4BF]/40'
                        : 'bg-black/60 text-white/90 border-white/15'
                    }`}
                  >
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {/* Audio mute toggle when video is active */}
                    {isPlaying && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                        className="w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer"
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    )}
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/70 border border-white/10">
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Central Play/Pause Indicator */}
                <div
                  className={`absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-all duration-300 ${
                    isPlaying ? 'opacity-0 group-hover:opacity-90 scale-95' : 'opacity-90 group-hover:opacity-100 group-hover:scale-105'
                  }`}
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-2xl ${
                      isCenterpiece
                        ? 'bg-[#2DD4BF] text-[#050814] shadow-[0_0_30px_rgba(45,212,191,0.5)]'
                        : 'bg-white/90 text-[#050814] shadow-black/80'
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-0.5" />
                    )}
                  </div>
                </div>

                {/* Bottom Editorial Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#2DD4BF] mb-1">
                    <span>{project.index}</span>
                    <span>•</span>
                    <span className="truncate">{project.subtitle}</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-snug mb-1.5">
                    {project.title}
                  </h3>

                  <p className="font-inter text-xs text-white/70 line-clamp-2 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Model & Craft Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-white/10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-[9px] font-mono text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================
          LAYER 4: VIEW MORE CTA & INQUIRY PROMPT
          ============================================================ */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
        <div className="text-center sm:text-left">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#2DD4BF] block mb-1">
            CUSTOM AI GENERATIVE WORKFLOWS
          </span>
          <p className="font-inter text-xs sm:text-sm text-white/70 max-w-md">
            Need high-end AI visuals for your brand film, social campaign, or cinematic spec project?
          </p>
        </div>

        {/* Refined "View More" & Collaboration Action */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo('#work', { offset: -30 })}
            className="group relative px-6 sm:px-7 py-3 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-display text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 active:scale-95 flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>View More</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={() => scrollTo('#contact', { offset: -30 })}
            className="group relative px-6 sm:px-7 py-3 rounded-full bg-[#2DD4BF] hover:bg-[#22bca8] text-[#050814] font-display text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 active:scale-95 flex items-center gap-2 cursor-pointer shadow-lg shadow-[#2DD4BF]/20"
          >
            <span>Start an AI Brief</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
