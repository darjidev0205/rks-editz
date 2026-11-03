import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Subtitles,
  ArrowUpRight,
  Sparkles,
  Quote,
} from 'lucide-react';
import { CLIENT_STORY_DATA } from '../../data/testimonials';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';
import { BrandLogo } from '../ui/BrandLogo';

gsap.registerPlugin(ScrollTrigger);

export const BehindTheFeedback: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(CLIENT_STORY_DATA.video.duration);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);
  const [activeCaption, setActiveCaption] = useState<string>('');
  const [isHoveringPlayer, setIsHoveringPlayer] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);

  const data = CLIENT_STORY_DATA;

  // Cinematic GSAP ScrollTrigger Entrance
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left Column editorial reveal
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftColRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Right Column 16:9 stage reveal
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightColRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Quote strip reveal
      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Sync Video Time & Captions
  const handleTimeUpdate = () => {
    if (!videoRef.current || isSeeking) return;
    const current = videoRef.current.currentTime;
    setCurrentTime(current);

    // Find active synchronized caption cue
    const cue = data.captions.find((c) => current >= c.start && current <= c.end);
    setActiveCaption(cue ? cue.text : '');
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  // Play / Pause Toggle
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      // User intentional click enables sound
      video.muted = isMuted;
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If unmuted autoplay is blocked by browser, fallback to muted
          video.muted = true;
          setIsMuted(true);
          video.play().then(() => setIsPlaying(true)).catch(() => {});
        });
    }
  };

  // Mute / Unmute Toggle
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Seek Control
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
    }
  };

  // Fullscreen Toggle
  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const container = playerContainerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Keyboard navigation on player
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'm' || e.key === 'M') {
      e.preventDefault();
      const video = videoRef.current;
      if (video) {
        video.muted = !video.muted;
        setIsMuted(video.muted);
      }
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen(e as any);
    }
  };

  // Format seconds into MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1600px] mx-auto overflow-hidden scroll-mt-20 border-t border-[#1E3027]/10"
    >
      {/* SECTION HEADER / TOP ROW: 35/65 ASYMMETRIC CINEMATIC EDITORIAL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
        {/* LEFT COLUMN: EDITORIAL STORY & COLLABORATION CONTEXT (38-42%) */}
        <div ref={leftColRef} className="lg:col-span-5 flex flex-col justify-center">
          {/* Eyebrow Label with Official Icon Monogram */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EDF2E9] border border-[#DDE9D7] w-fit mb-5 shadow-xs">
            <BrandLogo variant="icon-dark" size="sm" className="h-3.5 w-auto object-contain" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1E3027] font-semibold">
              {data.eyebrow}
            </span>
          </div>

          {/* Master Section Headline */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-bold text-[#222A25] tracking-tight leading-[1.12] mb-6">
            {data.headline}
            <span className="text-[#1E3027] relative inline-block">
              {data.headlineAccent}
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#DDE9D7] rounded-full -z-10" />
            </span>
            {data.headlineEnd}
          </h2>

          {/* Supporting Paragraph */}
          <p className="font-inter text-sm sm:text-base md:text-lg text-[#66766B] leading-relaxed max-w-xl mb-6">
            {data.paragraph}
          </p>

          {/* Editorial Tagline */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#1E3027]/10 mb-8">
            <Sparkles className="w-4 h-4 text-[#1E3027]" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#1E3027] font-semibold">
              {data.tagline}
            </span>
          </div>

          {/* Direct CTA leading toward collaboration inquiry */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => scrollTo(data.cta.targetSection, { offset: -30 })}
              className="px-7 py-3.5 rounded-full bg-[#1E3027] hover:bg-[#2A4337] text-white font-display text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-md shadow-[#1E3027]/15 flex items-center gap-2 group cursor-pointer"
            >
              <span>{data.cta.buttonText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <span className="font-inter text-xs text-[#66766B] italic">
              {data.cta.prompt}
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: THE 16:9 VIDEO STAGE (58-62%) */}
        <div ref={rightColRef} className="lg:col-span-7 relative">
          {/* Subtle Sage-Green Offset Surface Backdrop */}
          <div
            className="absolute -inset-2.5 sm:-inset-3.5 rounded-[26px] sm:rounded-[32px] bg-[#E8EFE4]/80 border border-[#D7E0D3] -z-10 pointer-events-none transform -rotate-0.5 transition-transform duration-500"
            aria-hidden="true"
          />

          {/* 16:9 Main Cinema Frame Container */}
          <div
            ref={playerContainerRef}
            tabIndex={0}
            role="region"
            aria-label="Client video testimonial player"
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsHoveringPlayer(true)}
            onMouseLeave={() => setIsHoveringPlayer(false)}
            onClick={togglePlay}
            className="relative w-full aspect-video rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#18191C] border border-[#1E3027]/15 shadow-xl shadow-[#1E3027]/8 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#1E3027]"
          >
            {/* Real HTML5 Inline Video Element */}
            <video
              ref={videoRef}
              src={data.video.localSrc}
              poster={data.video.poster}
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              onError={(e) => {
                // If local file is not yet in public folder, switch to high-res preview stream
                const target = e.currentTarget;
                if (target.src !== data.video.fallbackSrc) {
                  target.src = data.video.fallbackSrc;
                  target.load();
                }
              }}
              className="w-full h-full object-cover"
            />

            {/* Corner Editorial Metadata Tag (Does not cover speaker's face) */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono tracking-wider text-[#DDE9D7] border border-white/15 uppercase font-medium shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                {data.video.label}
              </span>
            </div>

            {/* Duration Tag */}
            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <span className="inline-block px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/10">
                {data.video.durationFormatted}
              </span>
            </div>

            {/* SYNCHRONIZED CAPTIONS OVERLAY */}
            {showCaptions && activeCaption && isPlaying && (
              <div className="absolute bottom-16 inset-x-4 sm:inset-x-8 z-20 pointer-events-none flex justify-center text-center">
                <p className="px-3.5 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-white text-xs sm:text-sm font-inter leading-relaxed max-w-xl shadow-lg border border-white/10">
                  {activeCaption}
                </p>
              </div>
            )}

            {/* INITIAL POSTER & CENTER PLAY OVERLAY */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/35 flex flex-col items-center justify-center p-6 z-20 transition-opacity duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-[#1E3027] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-105 active:scale-95 group-hover:bg-white mb-3">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>
                <span className="font-display text-sm sm:text-base font-bold text-white tracking-wide uppercase drop-shadow-sm mb-1">
                  Watch the conversation
                </span>
                <span className="font-inter text-xs text-[#DDE9D7] drop-shadow-sm">
                  {data.quote.agency} • Click to listen with sound
                </span>
              </div>
            )}

            {/* ART-DIRECTED ACCESSIBLE CONTROLS (Revealed on play & hover) */}
            {isPlaying && (
              <div
                onClick={(e) => e.stopPropagation()}
                className={`absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-30 transition-opacity duration-300 ${
                  isHoveringPlayer ? 'opacity-100' : 'opacity-0 sm:opacity-90'
                }`}
              >
                {/* Custom Seek Track */}
                <div className="relative w-full flex items-center mb-2 group/track cursor-pointer">
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                    onMouseDown={() => setIsSeeking(true)}
                    onMouseUp={() => setIsSeeking(false)}
                    aria-label="Seek video progress"
                    className="w-full h-1.5 bg-[#CEDBCC]/40 rounded-full appearance-none cursor-pointer accent-[#1E3027] focus:outline-none"
                    style={{
                      background: `linear-gradient(to right, #1E3027 ${progressPercent}%, rgba(206, 219, 204, 0.35) ${progressPercent}%)`,
                    }}
                  />
                </div>

                {/* Control Icons Row */}
                <div className="flex items-center justify-between text-white text-xs font-inter">
                  <div className="flex items-center gap-3">
                    {/* Play/Pause */}
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    {/* Mute/Unmute */}
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    {/* Time Indicator */}
                    <span className="font-mono text-[11px] text-white/80 select-none">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Captions Toggle */}
                    <button
                      onClick={() => setShowCaptions(!showCaptions)}
                      aria-label={showCaptions ? 'Hide captions' : 'Show captions'}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        showCaptions ? 'text-white bg-white/20' : 'text-white/60 hover:bg-white/10'
                      }`}
                    >
                      <Subtitles className="w-4 h-4" />
                    </button>

                    {/* Fullscreen */}
                    <button
                      onClick={toggleFullscreen}
                      aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                      className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* LOWER SECTION: REFINED EDITORIAL CLIENT QUOTE & ATTRIBUTION STRIP */}
      <div
        ref={quoteRef}
        className="pt-10 sm:pt-14 border-t border-[#1E3027]/12 max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
          {/* Large Restrained Quotation Glyph */}
          <div className="w-12 h-12 rounded-2xl bg-[#EDF2E9] text-[#1E3027] flex items-center justify-center flex-shrink-0 shadow-xs">
            <Quote className="w-6 h-6 fill-current" />
          </div>

          <div className="flex-1">
            {/* The Authentic Quote */}
            <blockquote className="font-display text-lg sm:text-xl md:text-2xl font-medium text-[#222A25] leading-relaxed tracking-tight mb-5 italic">
              "{data.quote.text}"
            </blockquote>

            {/* Attribution */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1E3027]/10 text-xs font-inter text-[#66766B]">
              <div>
                <span className="font-display font-bold text-[#1E3027] text-sm block">
                  {data.quote.speaker}
                </span>
                <span>
                  {data.quote.role} • {data.quote.agency}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDF2E9] border border-[#DDE9D7] text-[11px] font-mono uppercase tracking-wider text-[#1E3027] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3027]" />
                {data.quote.verifiedBadge}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

