import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowUpRight,
} from 'lucide-react';
import { AI_VIDEOS_DATA } from '../../data/aiVideos';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

export const AIVideosSection: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Scroll-Driven Horizontal Translation on Desktop + Native Swipe on Mobile
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // DESKTOP & TABLET (768px+): Pinned Vertical Scroll -> Horizontal Translation + Dynamic Fan-Arch
        '(min-width: 768px)': () => {
          if (!sectionRef.current || !trackRef.current) return;

          const section = sectionRef.current;
          const track = trackRef.current;
          const totalScrollWidth = track.scrollWidth;
          const viewportWidth = window.innerWidth;
          const xDistance = Math.max(400, totalScrollWidth - viewportWidth + 120);

          // Update card rotations and vertical arch based on distance from viewport center
          const updateCardArch = () => {
            const viewportCenter = window.innerWidth / 2;
            cardsRef.current.forEach((card) => {
              if (!card) return;
              const rect = card.getBoundingClientRect();
              const cardCenter = rect.left + rect.width / 2;
              const dist = (cardCenter - viewportCenter) / (window.innerWidth * 0.42);
              const clampedDist = Math.max(-1.5, Math.min(1.5, dist));

              // Rotation: positive on right, 0 at center, negative on left (matching user's sketch)
              const rot = clampedDist * 6.5;
              // Parabolic arch: highest (Y = 0) at center, drops down by ~28px on edges
              const yArch = Math.min(42, Math.pow(clampedDist, 2) * 22);
              // Scale: slight hero enlargement near center
              const scale = 1.03 - Math.min(0.07, Math.abs(clampedDist) * 0.05);

              gsap.set(card, {
                rotation: rot,
                y: yArch,
                scale: scale,
                transformOrigin: '50% 85%',
                force3D: true,
              });
            });
          };

          // Main pinned horizontal translation timeline
          const pinTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              pin: true,
              scrub: 1,
              start: 'top top',
              end: () => `+=${xDistance * 1.1}`,
              invalidateOnRefresh: true,
              onUpdate: updateCardArch,
            },
          });

          // Translate track from RIGHT to LEFT as user scrolls down
          pinTimeline.to(track, {
            x: -xDistance,
            ease: 'none',
          });

          // Initial layout pass
          updateCardArch();
        },

        // MOBILE (< 768px): Native touch-driven horizontal swipe gallery (NO PINNING, NO STUCK STATE)
        '(max-width: 767px)': () => {
          if (!sectionRef.current || !trackRef.current) return;

          // Clear any desktop GSAP transforms so native horizontal scroll works without conflict
          gsap.set(trackRef.current, { clearProps: 'transform' });

          // Apply subtle, restrained tilt for editorial character without clipping outside container
          cardsRef.current.forEach((card, idx) => {
            if (!card) return;
            const tilt = idx % 2 === 0 ? -1.5 : 1.5;
            gsap.set(card, {
              rotation: tilt,
              y: 0,
              scale: 1,
              clearProps: 'x,transformOrigin',
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleTogglePlay = (projectId: string) => {
    setActiveVideoId((prev) => (prev === projectId ? null : projectId));
  };

  return (
    <section
      ref={sectionRef}
      id="ai-videos"
      className="relative w-full min-h-screen bg-[#050814] text-white flex flex-col justify-between pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden scroll-mt-24 sm:scroll-mt-20 selection:bg-[#2DD4BF] selection:text-[#050814]"
    >
      {/* ============================================================
          LAYER 0: DARK CINEMATIC ATMOSPHERE & REPEATED BACKGROUND WORDS
          ============================================================ */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
        {/* Subtle radial ambient lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#0a1a3a]/25 to-transparent rounded-full blur-[120px]" />

        {/* Flowing contour wave lines in background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-screen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,320 C320,180 620,440 980,280 C1340,120 1520,380 1800,280"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M-100,480 C340,340 640,600 1010,440 C1380,280 1540,520 1800,420"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>

        {/* Large Repeated Oversized Atmospheric Typography */}
        <div className="absolute inset-0 flex flex-col justify-around pointer-events-none select-none overflow-hidden py-4 opacity-75">
          <div className="whitespace-nowrap font-display font-black text-[100px] sm:text-[150px] lg:text-[190px] tracking-tighter text-white/[0.03] leading-none select-none">
            AI VIDEOS &bull; IN MOTION &bull; NEURAL REEL &bull; AI VIDEOS &bull; IN MOTION &bull;
          </div>
          <div className="whitespace-nowrap font-display font-black text-[100px] sm:text-[150px] lg:text-[190px] tracking-tighter text-white/[0.02] leading-none select-none">
            CURATED STRIP &bull; SCROLL SHOWCASE &bull; FUTURE FRAMES &bull; CURATED STRIP &bull;
          </div>
        </div>
      </div>

      {/* ============================================================
          LAYER 1: MINIMAL EDITORIAL HEADER (CONCISE & FOCUSED)
          ============================================================ */}
      <div className="relative z-10 max-w-[1500px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-12 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-3 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] shadow-[0_0_8px_#2DD4BF] animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2DD4BF] font-semibold">
                CATEGORY 01 / AI VISUALS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.1]">
              AI Videos, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-white to-white/90">In Motion.</span>
            </h2>
          </div>

          {/* Short supporting subtitle */}
          <p className="font-inter text-xs sm:text-sm text-white/60 max-w-sm sm:text-right leading-relaxed">
            A curated strip of AI-driven edits, revealed horizontally through motion as you scroll.
          </p>
        </div>
      </div>

      {/* ============================================================
          LAYER 2: HORIZONTAL VIDEO STRIP
          Desktop: Scroll-driven curved fan arrangement moving RIGHT to LEFT
          Mobile: Native touch-driven horizontal swipe gallery with scroll snap
          ============================================================ */}
      <div
        ref={containerRef}
        data-lenis-prevent
        className="relative z-10 w-full overflow-x-auto md:overflow-hidden py-6 sm:py-8 flex items-center no-scrollbar snap-x snap-mandatory overscroll-x-contain touch-pan-x"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollPaddingInline: '1.25rem',
        }}
      >
        {/* Horizontal Moving Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-5 sm:gap-6 md:gap-8 px-5 sm:px-12 md:px-24 flex-nowrap w-max md:w-auto will-change-transform"
        >
          {AI_VIDEOS_DATA.map((project, idx) => {
            const isPlaying = activeVideoId === project.id;

            return (
              <div
                key={project.id}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                onClick={() => handleTogglePlay(project.id)}
                className="group relative flex-shrink-0 w-[82vw] max-w-[340px] sm:w-[320px] md:w-[340px] lg:w-[360px] h-[430px] sm:h-[460px] md:h-[500px] rounded-[24px] sm:rounded-[30px] overflow-hidden bg-[#0c1122] border border-white/15 hover:border-[#2DD4BF]/60 transition-colors duration-300 shadow-2xl shadow-black/80 cursor-pointer select-none snap-center"
              >
                {/* Media Window Container */}
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

                  {/* Inline HTML5 Video */}
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

                  {/* Dark Cinema Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/95 via-[#050814]/30 to-black/20 pointer-events-none" />
                </div>

                {/* Top Corner Badge & Specs */}
                <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono tracking-wider text-white/90 border border-white/15 uppercase font-semibold shadow-xs">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {isPlaying && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                        className="pointer-events-auto w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer"
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    )}
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/70 border border-white/10">
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Central Play/Pause Trigger */}
                <div
                  className={`absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-all duration-300 ${
                    isPlaying ? 'opacity-0 group-hover:opacity-90 scale-95' : 'opacity-90 group-hover:opacity-100 group-hover:scale-105'
                  }`}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 group-hover:bg-[#2DD4BF] text-[#050814] flex items-center justify-center backdrop-blur-md transition-all shadow-2xl">
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    )}
                  </div>
                </div>

                {/* Bottom Minimal Media Title (Clean, not cluttered) */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10 pointer-events-none">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#2DD4BF] mb-1">
                    <span>{project.index}</span>
                    <span>•</span>
                    <span className="uppercase tracking-wider">AI Edit</span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================
          LAYER 3: REFINED "VIEW MORE" CTA STRIP
          ============================================================ */}
      <div className="relative z-10 max-w-[1500px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <span className="font-mono text-[11px] uppercase tracking-wider text-white/50">
          <span className="hidden sm:inline">SCROLL TO EXPLORE &bull; CLICK ANY CARD TO PLAY</span>
          <span className="sm:hidden">SWIPE HORIZONTALLY &bull; TAP CARD TO PLAY</span>
        </span>

        <button
          onClick={() => scrollTo('#work', { offset: -30 })}
          className="group relative px-7 py-3 rounded-full border border-white/20 hover:border-[#2DD4BF]/60 bg-white/5 hover:bg-white/10 text-white font-display text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 active:scale-95 flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(45,212,191,0.15)]"
        >
          <span>View More</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#2DD4BF]" />
        </button>
      </div>
    </section>
  );
};
