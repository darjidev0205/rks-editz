import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Pause, Volume2, VolumeX, Film, ArrowRight } from 'lucide-react';
import { PROJECTS, Project } from '../../data/projects';

gsap.registerPlugin(ScrollTrigger);

export const SelectedWork: React.FC = () => {
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);
  const [activeBgIndex, setActiveBgIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);

  // Background photos for layered parallax
  const bgPhotos = [
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop',
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // DESKTOP: Pinned Horizontal Showcase with Layered Parallax Background
        '(min-width: 1024px)': () => {
          if (!trackRef.current || !sectionRef.current) return;

          const scrollWidth = trackRef.current.scrollWidth - window.innerWidth + 200;

          const horizontalTween = gsap.to(trackRef.current, {
            x: () => -scrollWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              scrub: 1,
              start: 'top top',
              end: () => `+=${scrollWidth * 1.2}`,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const index = Math.min(
                  bgPhotos.length - 1,
                  Math.floor(self.progress * bgPhotos.length)
                );
                setActiveBgIndex(index);
              },
            },
          });

          // Background subtle parallax motion
          if (bgLayerRef.current) {
            gsap.to(bgLayerRef.current, {
              xPercent: -15,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                scrub: 1,
                start: 'top top',
                end: () => `+=${scrollWidth * 1.2}`,
              },
            });
          }

          return () => {
            horizontalTween.kill();
          };
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [bgPhotos.length]);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative w-full min-h-screen overflow-hidden bg-[#0A0B0D] py-16 lg:py-0 flex flex-col justify-center"
    >
      {/* 1. LAYERED BACKGROUND PHOTOS (Subtle parallax behind floating cards) */}
      <div
        ref={bgLayerRef}
        className="absolute inset-0 w-[120%] h-full pointer-events-none transition-opacity duration-1000 ease-out"
      >
        <img
          src={bgPhotos[activeBgIndex]}
          alt="Cinematic production background still"
          className="w-full h-full object-cover scale-105 filter brightness-[0.22] contrast-[1.15] saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-[#0A0B0D]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D] via-transparent to-[#0A0B0D]" />
      </div>

      {/* 2. SECTION HEADER (Floating above background photos) */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 pt-8 pb-6 lg:pt-12 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Film className="w-3.5 h-3.5 text-[#F4F3EF]" />
              <span className="font-geist text-xs uppercase tracking-[0.2em] text-[#A5A7AA] font-medium">
                CURATED EDITORIAL SHOWCASE
              </span>
            </div>
            <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F4F3EF] uppercase">
              Stories in Motion.
            </h2>
            <p className="font-inter text-xs sm:text-sm text-[#A5A7AA] mt-1.5 max-w-lg">
              Scroll to explore selected reels, brand films, and narrative cuts in a continuous
              editorial sequence.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-xs font-geist text-[#A5A7AA]">
            <span className="w-2 h-2 rounded-full bg-[#E8E7E3] animate-pulse"></span>
            <span>Vertical scroll controls horizontal showcase</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* 3. STAGGERED VERTICAL CARDS (Horizontal Progressing Track) */}
      <div className="relative z-10 w-full overflow-x-auto lg:overflow-visible no-scrollbar py-8 lg:py-14">
        <div
          ref={trackRef}
          className="flex gap-5 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-16 w-max items-center"
        >
          {PROJECTS.map((project, idx) => {
            // Alternating up/down vertical rhythm offsets
            const offsetClasses =
              idx % 2 === 0
                ? 'lg:-translate-y-8 xl:-translate-y-12'
                : 'lg:translate-y-8 xl:translate-y-12';

            return (
              <ShowcaseCard
                key={project.id}
                project={project}
                offsetClass={offsetClasses}
                isPlaying={activePlayingId === project.id}
                onPlay={() => setActivePlayingId(project.id)}
                onPause={() => setActivePlayingId(null)}
              />
            );
          })}

          {/* End of Track Exploration Card */}
          <div className="w-[280px] sm:w-[320px] h-[480px] sm:h-[540px] rounded-2xl bg-[#14161A]/80 backdrop-blur-xl border border-white/10 p-7 flex flex-col justify-between flex-shrink-0 shadow-2xl">
            <div>
              <span className="text-[11px] font-geist uppercase text-[#A5A7AA] tracking-wider block mb-2">
                COMPLETE ARCHIVE
              </span>
              <h3 className="font-geist text-2xl font-semibold text-[#F4F3EF] leading-tight">
                Every Frame Tells a Story.
              </h3>
              <p className="font-inter text-xs text-[#A5A7AA] mt-3 leading-relaxed">
                Over 80+ commercial cutdowns, YouTube creator retainers, and high-impact social
                campaigns completed in 2024.
              </p>
            </div>

            <div>
              <a
                href="#contact"
                className="w-full py-3.5 px-5 rounded-full bg-[#E8E7E3] hover:bg-[#D4D3CF] text-[#111214] font-geist font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sleek, Tall Editorial Card with Staggered Offset & Direct Playback
interface ShowcaseCardProps {
  project: Project;
  offsetClass: string;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  project,
  offsetClass,
  isPlaying,
  onPlay,
  onPause,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!videoRef.current || !project.videoUrl) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, project.videoUrl]);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project.videoUrl) return;
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
    <div
      onClick={handleTogglePlay}
      className={`group relative w-[290px] sm:w-[330px] lg:w-[360px] h-[490px] sm:h-[540px] lg:h-[570px] rounded-2xl overflow-hidden bg-[#181B20]/90 backdrop-blur-xl border border-white/12 shadow-2xl flex flex-col justify-between flex-shrink-0 cursor-pointer transition-all duration-500 hover:border-white/30 hover:scale-[1.02] ${offsetClass}`}
    >
      {/* Media Window Container */}
      <div className="absolute inset-0 overflow-hidden bg-[#121417]">
        {/* Poster Image */}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isPlaying && isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />

        {/* Real HTML5 Inline Video Player */}
        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            playsInline
            muted={isMuted}
            loop
            preload="metadata"
            onLoadedData={() => setIsLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover ${
              isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Gradient Vignette for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-black/25 to-black/40 pointer-events-none" />
      </div>

      {/* Top Card Metadata & Badges */}
      <div className="relative z-10 p-5 flex items-center justify-between">
        <span className="px-2.5 py-1 rounded-md bg-[#0D0E10]/80 backdrop-blur-md text-[10px] font-geist tracking-wider text-[#F4F3EF] border border-white/10 uppercase font-medium">
          {project.badge || project.category}
        </span>

        {/* Mute/Unmute Toggle */}
        {isPlaying && (
          <button
            onClick={handleToggleMute}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            className="w-8 h-8 rounded-full bg-[#181B20]/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* Central Play/Pause Minimal Button */}
      {project.videoUrl && (
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10 ${
            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-90 group-hover:opacity-100'
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-[#181B20]/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F4F3EF] group-hover:scale-105 transition-all shadow-2xl">
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </div>
        </div>
      )}

      {/* Bottom Editorial Content Info */}
      <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-[#0A0B0D] to-transparent">
        <div className="flex items-center gap-2 text-[11px] font-geist text-[#A5A7AA] mb-1">
          <span>{project.category}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>
        <h3 className="font-geist text-xl sm:text-2xl font-semibold text-[#F4F3EF] tracking-tight truncate">
          {project.title}
        </h3>
        <p className="font-inter text-xs text-[#A5A7AA] mt-1 line-clamp-2">
          {project.subtitle}
        </p>

        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-geist text-[#A5A7AA]">
          <span>Role: <strong className="text-[#F4F3EF] font-medium">{project.role}</strong></span>
          <span className="text-[#F4F3EF] opacity-60">↗</span>
        </div>
      </div>
    </div>
  );
};
