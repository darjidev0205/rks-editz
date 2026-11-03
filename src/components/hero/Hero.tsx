import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Play } from 'lucide-react';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';
import { HERO_ROW_TOP, HERO_ROW_BOTTOM, HeroVideoCard } from '../../data/projects';
import rkaWatercolor4K from '../../assets/rka-hero-watercolor-4k.jpg';
import { BrandLogo } from '../ui/BrandLogo';

export const Hero: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const videoWallRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const btn1VideoRef = useRef<HTMLVideoElement>(null);
  const btn2VideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay CTA button video backgrounds
    const v1 = btn1VideoRef.current;
    if (v1) {
      v1.play().catch(() => {});
    }
    const v2 = btn2VideoRef.current;
    if (v2) {
      v2.play().catch(() => {});
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 });

      tl.fromTo(eyebrowRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 });
      tl.fromTo(headlineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.35');
      tl.fromTo(subheadRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
      tl.fromTo(ctasRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
      tl.fromTo(statsRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
      tl.fromTo(videoWallRef.current, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.9 }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-[92vh] sm:min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* LAYER 0: 4K ULTRA-HIGH RESOLUTION SEAMLESS WATERCOLOR BACKGROUND
          Luxury editorial aesthetic with 3840x2160 crisp resolution, fine-art handmade paper grain,
          deep forest-to-sage green washes in the lower-left & upper-right, and clean negative space.
          Seamlessly continuous throughout the entire hero with zero rectangular patches or seam lines. */}
      <picture className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Mobile vertical portrait optimization */}
        <source media="(max-width: 640px)" srcSet="/images/rka-hero-watercolor-mobile.jpg" />
        {/* Standard desktop 1080p optimization */}
        <source media="(max-width: 1536px)" srcSet="/images/rka-hero-watercolor-desktop.jpg" />
        {/* 4K master image for wide / high-DPI screens */}
        <img
          src={rkaWatercolor4K}
          alt="RKA Editz Organic 4K Watercolor Background"
          className="w-full h-full object-cover object-left-bottom sm:object-center mix-blend-multiply opacity-95 contrast-[1.05] saturate-[1.12]"
          loading="eager"
          decoding="async"
        />
      </picture>

      {/* Main Grid: Left Typography (38-45%) + Right Moving Video Wall (Layer 2 & 3: z-10) */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
          {/* Left Section: Editorial Brand Intro & Headline */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            {/* Eyebrow Label with Official Icon Monogram */}
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#EDF2E9]/90 backdrop-blur-xs border border-[#DDE9D7] w-fit mb-5 shadow-xs"
            >
              <BrandLogo variant="icon-dark" size="sm" className="h-3.5 w-auto object-contain" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1E3027] font-semibold">
                RKA EDITZ • CREATIVE POST-PRODUCTION
              </span>
            </div>

            {/* Master Headline */}
            <h1
              ref={headlineRef}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-bold text-[#222A25] tracking-tight leading-[1.08] mb-6"
            >
              We Make Every <br className="hidden sm:inline" />
              <span className="text-[#1E3027] relative inline-block">
                Frame Matter.
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#DDE9D7] rounded-full -z-10" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              ref={subheadRef}
              className="font-inter text-base sm:text-lg text-[#69736B] leading-relaxed max-w-lg mb-8"
            >
              Creative video editing, cinematic storytelling, and visuals that make people stop,
              watch, and remember.
            </p>

            {/* Action CTAs: Full Video-Background Miniature Cinematic Pill Screens */}
            <div ref={ctasRef} className="flex flex-wrap items-center gap-4">
              {/* Button 1: EXPLORE OUR WORK (Full video background) */}
              <button
                onClick={() => scrollTo('#work', { offset: -30 })}
                className="group relative h-14 sm:h-[58px] px-6 sm:px-7 rounded-full overflow-hidden border border-white/20 hover:border-white/40 shadow-lg shadow-black/15 flex items-center justify-between gap-3 sm:gap-4 transition-all duration-300 active:scale-95 cursor-pointer flex-shrink-0"
                aria-label="Explore Our Work"
              >
                {/* Layer 1: Full-bleed continuously looping video background */}
                <video
                  ref={btn1VideoRef}
                  src="https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4"
                  poster="https://lh3.googleusercontent.com/aida-public/AB6AXuB6oRbG6Rl3fL7gv02vLkjiAPbzuAKkeB9rvgkbfsuA_1TzrWYcg0x6SFryc3ug_7m5ofnGsXRgChrll2pH6euz6mFA67kiO04s6IdJDcxjmwYDpwNUmMfO9mr65cHPEg-Fm5bqjaHaFcsy2ISQCyWJJbYsSuErYbIgKMeSrN8ZDIAOCGn92Lz2Kk7kvqw9r1geDOL-VGVfJuoZYlJJKgJR5hVB7VdVcNNZt6wylDs"
                  playsInline
                  muted
                  loop
                  autoPlay
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] pointer-events-none"
                />

                {/* Layer 2: Subtle dark gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/55 group-hover:from-black/50 group-hover:via-black/35 group-hover:to-black/45 transition-colors duration-300 pointer-events-none" />

                {/* Layer 3: Foreground Content */}
                <span className="relative z-10 font-display text-xs sm:text-sm font-bold tracking-wider uppercase text-white drop-shadow-sm">
                  EXPLORE OUR WORK
                </span>
                <div className="relative z-10 w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white/30">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </button>

              {/* Button 2: LET'S CREATE SOMETHING (Different full video background) */}
              <button
                onClick={() => scrollTo('#contact', { offset: -30 })}
                className="group relative h-14 sm:h-[58px] px-6 sm:px-7 rounded-full overflow-hidden border border-white/20 hover:border-white/40 shadow-lg shadow-black/15 flex items-center justify-between gap-3 sm:gap-4 transition-all duration-300 active:scale-95 cursor-pointer flex-shrink-0"
                aria-label="Let's Create Something"
              >
                {/* Layer 1: Full-bleed continuous looping editing/BTS video */}
                <video
                  ref={btn2VideoRef}
                  src="https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4"
                  poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop"
                  playsInline
                  muted
                  loop
                  autoPlay
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] pointer-events-none"
                />

                {/* Layer 2: Subtle dark gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/55 group-hover:from-black/50 group-hover:via-black/35 group-hover:to-black/45 transition-colors duration-300 pointer-events-none" />

                {/* Layer 3: Foreground Content */}
                <span className="relative z-10 font-display text-xs sm:text-sm font-bold tracking-wider uppercase text-white drop-shadow-sm">
                  LET'S CREATE SOMETHING
                </span>
                <div className="relative z-10 w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white/30">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </button>
            </div>

            {/* Micro studio statistics - Grounded, authentic post-production craft metrics */}
            <div
              ref={statsRef}
              className="mt-10 pt-6 border-t border-[#1E3027]/10 flex items-center gap-8 text-xs font-inter text-[#69736B]"
            >
              <div>
                <span className="font-display text-base font-bold text-[#222A25] block">High Retention</span>
                <span>Audience Engagement</span>
              </div>
              <div className="w-[1px] h-7 bg-[#1E3027]/10" />
              <div>
                <span className="font-display text-base font-bold text-[#222A25] block">24–48hr</span>
                <span>Initial Cut Turnaround</span>
              </div>
              <div className="w-[1px] h-7 bg-[#1E3027]/10" />
              <div>
                <span className="font-display text-base font-bold text-[#222A25] block">100%</span>
                <span>In-House Color &amp; Sound</span>
              </div>
            </div>
          </div>

          {/* Right Section: TWO CONTINUOUSLY MOVING VIDEO ROWS — GENUINELY TRANSPARENT WITH SEAMLESS ALPHA MASK */}
          <div
            ref={videoWallRef}
            className="lg:col-span-7 relative w-full overflow-hidden py-2 bg-transparent [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]"
          >
            <div className="flex flex-col gap-4 sm:gap-5 bg-transparent">
              {/* ROW 1: Continuously moves right-to-left */}
              <div className="overflow-hidden w-full flex bg-transparent">
                <div className="animate-marquee-left flex gap-4 sm:gap-5 items-center">
                  {/* Original items */}
                  {HERO_ROW_TOP.map((item) => (
                    <HeroVideoCardItem key={item.id} item={item} />
                  ))}
                  {/* Seamless clone for infinite 50% loop */}
                  {HERO_ROW_TOP.map((item) => (
                    <HeroVideoCardItem key={`clone-${item.id}`} item={item} />
                  ))}
                </div>
              </div>

              {/* ROW 2: Continuously moves left-to-right (opposite direction, independent timing) */}
              <div className="overflow-hidden w-full flex bg-transparent">
                <div className="animate-marquee-right flex gap-4 sm:gap-5 items-center">
                  {/* Original items */}
                  {HERO_ROW_BOTTOM.map((item) => (
                    <HeroVideoCardItem key={item.id} item={item} />
                  ))}
                  {/* Seamless clone for infinite 50% loop */}
                  {HERO_ROW_BOTTOM.map((item) => (
                    <HeroVideoCardItem key={`clone-${item.id}`} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Moving Video Card with muted inline playback and poster preview
interface HeroVideoCardItemProps {
  item: HeroVideoCard;
}

const HeroVideoCardItem: React.FC<HeroVideoCardItemProps> = ({ item }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play muted video preview automatically when visible
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !item.videoUrl) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay may be restricted; poster will remain cleanly visible
      });
    }
  }, [item.videoUrl]);

  const isPortrait = item.aspect === 'portrait';

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-[#18191C] border border-[#1E3027]/10 shadow-lg flex-shrink-0 group ${
        isPortrait
          ? 'w-[140px] sm:w-[170px] md:w-[190px] h-[210px] sm:h-[250px] md:h-[270px]'
          : 'w-[230px] sm:w-[280px] md:w-[320px] h-[140px] sm:h-[160px] md:h-[180px]'
      }`}
    >
      {/* Poster Image */}
      <img
        src={item.poster}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Real HTML5 Muted Inline Video */}
      {item.videoUrl && (
        <video
          ref={videoRef}
          src={item.videoUrl}
          playsInline
          muted
          loop
          autoPlay
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
        />
      )}

      {/* Subtle vignette for typography contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Card Info Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 z-10 flex items-end justify-between">
        <div>
          <span className="inline-block px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[9px] font-mono uppercase tracking-wider text-[#DDE9D7] mb-1">
            {item.category}
          </span>
          <h4 className="font-display text-xs sm:text-sm font-semibold text-white tracking-tight leading-tight line-clamp-1">
            {item.title}
          </h4>
        </div>
        <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white flex-shrink-0">
          <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
        </div>
      </div>
    </div>
  );
};
