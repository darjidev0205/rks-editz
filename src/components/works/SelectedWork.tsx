import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, Film, ArrowRight } from 'lucide-react';
import { PORTFOLIO_CARDS, PortfolioCardData } from '../../data/projects';

gsap.registerPlugin(ScrollTrigger);

export const SelectedWork: React.FC = () => {
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);
  const [activeBgIndex, setActiveBgIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bgContainerRef = useRef<HTMLDivElement>(null);

  // Curated Editorial Background Photos for the canvas behind cards
  const bgImages = [
    {
      src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1800&auto=format&fit=crop',
      title: 'Cinematic Production Environment',
    },
    {
      src: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=1800&auto=format&fit=crop',
      title: 'Documentary Natural Light Composition',
    },
    {
      src: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1800&auto=format&fit=crop',
      title: 'Studio Timeline & Color Grading Workstation',
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // DESKTOP & LAPTOP (1024px+): Pinned Horizontal Gallery driven by Vertical Scroll
        '(min-width: 1024px)': () => {
          if (!trackRef.current || !sectionRef.current) return;

          const track = trackRef.current;
          const section = sectionRef.current;
          const totalWidth = track.scrollWidth;
          const viewportWidth = window.innerWidth;
          const xDistance = totalWidth - viewportWidth + 140;

          // Main horizontal translation timeline
          const pinTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              pin: true,
              scrub: 1,
              start: 'top top',
              end: () => `+=${xDistance * 1.15}`,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const index = Math.min(
                  bgImages.length - 1,
                  Math.floor(self.progress * bgImages.length)
                );
                setActiveBgIndex(index);
              },
            },
          });

          // Horizontal track travel
          pinTimeline.to(track, {
            x: -xDistance,
            ease: 'none',
          });

          // Photographic background subtle parallax
          if (bgContainerRef.current) {
            gsap.to(bgContainerRef.current, {
              xPercent: -15,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                scrub: 1,
                start: 'top top',
                end: () => `+=${xDistance * 1.15}`,
              },
            });
          }

          // Individual vertical card drift on desktop during horizontal travel
          PORTFOLIO_CARDS.forEach((card) => {
            const el = document.getElementById(`card-${card.id}`);
            if (el) {
              gsap.to(el, {
                y: `+=${card.driftY}`,
                ease: 'none',
                scrollTrigger: {
                  trigger: section,
                  scrub: 1,
                  start: 'top top',
                  end: () => `+=${xDistance * 1.15}`,
                },
              });
            }
          });
        },

        // MOBILE & TABLET (< 1024px): Clear transforms and ensure native horizontal scroll
        '(max-width: 1023px)': () => {
          if (trackRef.current) {
            gsap.set(trackRef.current, { clearProps: 'transform' });
          }
          PORTFOLIO_CARDS.forEach((card) => {
            const el = document.getElementById(`card-${card.id}`);
            if (el) {
              gsap.set(el, { clearProps: 'y' });
            }
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [bgImages.length]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full min-h-screen overflow-hidden bg-[#EDF2E9] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:py-0 flex flex-col justify-center scroll-mt-24 sm:scroll-mt-20"
    >
      {/* LAYER 1: Subtle photographic backdrop behind cards */}
      <div
        ref={bgContainerRef}
        className="absolute inset-0 w-[125%] h-full pointer-events-none z-0 transition-opacity duration-1000 ease-out opacity-25"
      >
        <img
          src={bgImages[activeBgIndex].src}
          alt={bgImages[activeBgIndex].title}
          className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.1] saturate-[0.7]"
        />
        {/* Soft edge blend overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#EDF2E9] via-transparent to-[#EDF2E9]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#EDF2E9] via-transparent to-[#EDF2E9]" />
      </div>

      {/* SECTION INTRO HEADER */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 pt-6 pb-4 lg:pt-10 max-w-[1500px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDE9D7] border border-[#C3D4BC] mb-2.5 shadow-xs">
              <Film className="w-3.5 h-3.5 text-[#1E3027]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1E3027] font-semibold">
                SELECTED WORK // PORTFOLIO
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222A25]">
              Featured Projects.
            </h2>
            <p className="font-inter text-xs sm:text-sm text-[#69736B] mt-1.5 max-w-lg">
              Vertical scroll guides the desktop horizontal gallery. Six distinct creative formats with
              authentic footage and inline preview.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-[#69736B] pb-2">
            {/* Desktop prompt */}
            <div className="hidden lg:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1E3027]" />
              <span>Scroll Vertically to Explore</span>
            </div>
            {/* Mobile swipe prompt */}
            <div className="flex lg:hidden items-center gap-2 text-[#1E3027] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#1E3027] animate-pulse" />
              <span>Swipe Horizontally to Explore</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#1E3027] font-semibold">
              <span>01 — 06</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* HORIZONTAL CARDS TRACK: NATIVE SWIPE ON MOBILE, PINNED ON DESKTOP */}
      <div
        data-lenis-prevent
        className="relative z-10 w-full overflow-x-auto lg:overflow-visible no-scrollbar py-6 sm:py-8 lg:py-10 scroll-smooth snap-x snap-mandatory overscroll-x-contain touch-pan-x"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollPaddingInline: '1.25rem',
        }}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-5 sm:gap-6 lg:gap-10 px-5 sm:px-8 md:px-12 lg:px-16 w-max lg:w-auto"
        >
          {PORTFOLIO_CARDS.map((card) => (
            <PortfolioCardItem
              key={card.id}
              card={card}
              isPlaying={activePlayingId === card.id}
              onPlay={() => setActivePlayingId(card.id)}
              onPause={() => setActivePlayingId(null)}
            />
          ))}

          {/* End of Gallery Minimal Anchor Card */}
          <div className="snap-center w-[82vw] max-w-[300px] h-[450px] sm:h-[470px] lg:h-[440px] rounded-[22px] bg-white border border-[#1E3027]/10 p-7 flex flex-col justify-between flex-shrink-0 shadow-lg">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#69736B] block mb-2 font-semibold">
                ARCHIVE &amp; COLLABORATION
              </span>
              <h3 className="font-display text-2xl font-bold text-[#222A25] tracking-tight">
                Want to See More Specific Formats?
              </h3>
              <p className="font-inter text-xs text-[#69736B] mt-3 leading-relaxed">
                We have an extensive private library of commercial cuts, creator reels, and documentary roughs.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-[#1E3027] text-white hover:bg-[#2A4337] transition-all font-display text-xs font-semibold tracking-wider uppercase shadow-xs active:scale-95"
            >
              <span>Request Private Reel</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sleek, Tall Editorial Card with Desktop-Only Vertical Rhythm and Mobile Full-Visibility
interface PortfolioCardItemProps {
  card: PortfolioCardData;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const PortfolioCardItem: React.FC<PortfolioCardItemProps> = ({
  card,
  isPlaying,
  onPlay,
  onPause,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!videoRef.current || !card.videoUrl) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, card.videoUrl]);

  const handleTogglePlay = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    if (!card.videoUrl) return;
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <article
      id={`card-${card.id}`}
      style={{ '--card-init-y': `${card.initialY}px` } as React.CSSProperties}
      onClick={handleTogglePlay}
      tabIndex={0}
      role="button"
      aria-label={`${isPlaying ? 'Pause' : 'Play'} ${card.heading} case study video`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleTogglePlay(e);
        }
      }}
      className="group relative flex-shrink-0 w-[82vw] max-w-[340px] sm:w-[320px] lg:w-[335px] h-[450px] sm:h-[470px] lg:h-[480px] rounded-[22px] overflow-hidden bg-white border border-[#1E3027]/12 shadow-xl flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[#1E3027]/30 hover:shadow-2xl hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[#1E3027] snap-center [transform:none] lg:[transform:translateY(var(--card-init-y))]"
    >
      {/* Media Window Container */}
      <div className="absolute inset-0 overflow-hidden bg-[#18191C]">
        {/* Poster Image */}
        <img
          src={card.image}
          alt={card.heading}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isPlaying && isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />

        {/* Real HTML5 Inline Video Player */}
        {card.videoUrl && (
          <video
            ref={videoRef}
            src={card.videoUrl}
            playsInline
            muted={isMuted}
            loop
            preload="metadata"
            onLoadedData={() => setIsLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Gradient Vignette for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 pointer-events-none" />
      </div>

      {/* Layer: Top Category Label & Audio Controls */}
      <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] sm:text-[11px] font-mono tracking-wider text-[#1E3027] border border-[#1E3027]/15 uppercase font-bold shadow-xs">
          {card.category}
        </span>

        {/* Mute/Unmute Toggle Button when playing */}
        {isPlaying && (
          <button
            onClick={handleToggleMute}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all shadow-sm cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* Central Play/Pause Minimal Button */}
      {card.videoUrl && (
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10 ${
            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-90 group-hover:opacity-100'
          }`}
        >
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md border border-[#1E3027]/20 flex items-center justify-center text-[#1E3027] group-hover:scale-105 transition-all shadow-xl">
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </div>
        </div>
      )}

      {/* Bottom Editorial Content with Guaranteed Vertical Containment */}
      <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
        <div className="flex items-center gap-2 text-[10px] font-mono text-[#DDE9D7] mb-1">
          <span>{card.cardIndex}</span>
          <span>•</span>
          <span>{card.year}</span>
        </div>
        <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug">
          {card.heading}
        </h3>
        <p className="font-inter text-xs text-[#E8E6DF] mt-1.5 line-clamp-2 leading-relaxed">
          {card.description}
        </p>

        <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] font-inter text-[#DDE9D7]">
          <span className="font-medium text-white truncate max-w-[75%]">{card.client}</span>
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/25 transition-all flex-shrink-0">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>
    </article>
  );
};
