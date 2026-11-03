import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Play, Disc3, Sparkles } from 'lucide-react';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const heroRef = useRef<HTMLElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const headlineLine3Ref = useRef<HTMLSpanElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const clusterRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const discRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 });

      // Eyebrow
      tl.fromTo(eyebrowRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 });

      // Headline line masks
      tl.fromTo(
        [headlineLine1Ref.current, headlineLine2Ref.current, headlineLine3Ref.current],
        { y: '105%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.85, stagger: 0.12 },
        '-=0.3'
      );

      // Subhead & CTAs
      tl.fromTo(subheadRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
      tl.fromTo(ctasRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');

      // Right Upper Visual Cluster entrance
      if (clusterRef.current) {
        tl.fromTo(
          [card1Ref.current, card2Ref.current, discRef.current],
          { opacity: 0, scale: 0.94, y: 25 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'back.out(1.2)' },
          '-=0.5'
        );
      }

      // Parallax on scroll
      ScrollTrigger.matchMedia({
        '(min-width: 768px)': () => {
          gsap.to(clusterRef.current, {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.5,
            },
          });
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleExploreClick = () => {
    scrollTo('#showcase', { offset: -20 });
  };

  const handleConnectClick = () => {
    scrollTo('#contact', { offset: -20 });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen pt-28 md:pt-36 pb-16 md:pb-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1440px] mx-auto flex flex-col justify-center overflow-hidden"
    >
      {/* Background Cinematic Texture Layer with Subtle Vignette */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* Left Column: Spacious Editorial Intro */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="inline-flex items-center gap-2.5 mb-4 md:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4F3EF] animate-pulse"></span>
            <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#A5A7AA] font-medium">
              RKA EDITZ • CREATIVE POST-PRODUCTION
            </span>
          </div>

          {/* Headline with Mask Containers */}
          <h1 className="font-geist font-semibold tracking-tight text-[#F4F3EF] uppercase text-[42px] leading-[46px] sm:text-5xl sm:leading-[54px] md:text-6xl md:leading-[64px] lg:text-[74px] lg:leading-[78px] mb-5">
            <span className="block overflow-hidden py-0.5">
              <span ref={headlineLine1Ref} className="block transform-gpu">
                Crafting Edits
              </span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <span ref={headlineLine2Ref} className="block transform-gpu">
                That Hold
              </span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <span ref={headlineLine3Ref} className="block transform-gpu text-[#F4F3EF]">
                Attention.
              </span>
            </span>
          </h1>

          {/* Subhead */}
          <p
            ref={subheadRef}
            className="font-inter text-[#A5A7AA] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-6 font-normal"
          >
            Cinematic edits. Strong visuals. Real impact. Video editing, sound sculpting, and visual
            storytelling engineered for high-retention brands and creators.
          </p>

          {/* CTAs */}
          <div ref={ctasRef} className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={handleExploreClick}
              className="px-7 py-3.5 rounded-full bg-[#E8E7E3] hover:bg-[#D4D3CF] text-[#111214] font-geist font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center gap-2 group shadow-xl active:scale-95"
            >
              <span>View Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={handleConnectClick}
              className="px-6 py-3.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 text-[#F4F3EF] font-geist font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 active:scale-95"
            >
              Book a Project
            </button>
          </div>

          {/* Key Specs Pill */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-geist text-[#A5A7AA]/80">
            <span className="px-2.5 py-1 rounded bg-[#17191C] border border-white/8">4K Native Mastering</span>
            <span className="px-2.5 py-1 rounded bg-[#17191C] border border-white/8">Rhythm & Sound Design</span>
            <span className="px-2.5 py-1 rounded bg-[#17191C] border border-white/8">High Retention Pacing</span>
          </div>
        </div>

        {/* Right Upper Cluster: Compact Curated Media Blocks */}
        <div ref={clusterRef} className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px] aspect-[4/4] sm:aspect-[4/3.8]">
            {/* Ambient Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-700/20 rounded-full blur-3xl pointer-events-none" />

            {/* Block 1: Main Rounded Card (Studio & Timeline Still) */}
            <div
              ref={card1Ref}
              onClick={handleExploreClick}
              className="absolute top-0 right-0 w-[82%] sm:w-[80%] rounded-2xl overflow-hidden border border-white/12 bg-[#202226] shadow-2xl cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#17191C]">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
                  alt="Video editing suite monitor with high contrast timeline waveforms"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E10] via-black/30 to-transparent"></div>

                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-geist text-[#F4F3EF] border border-white/10">
                  REEL #01 • 4K
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-geist text-[#A5A7AA] block uppercase tracking-wider">
                      Commercial Edit
                    </span>
                    <span className="text-xs sm:text-sm font-semibold font-geist text-[#F4F3EF]">
                      Noir Luxe 35mm
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:scale-110 group-hover:bg-[#E8E7E3] group-hover:text-black transition-all">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: Floating Audio / Workflow Glass Pill Card */}
            <div
              ref={card2Ref}
              className="absolute -bottom-2 left-0 w-[64%] rounded-xl p-3.5 bg-[#17191C]/90 backdrop-blur-xl border border-white/15 shadow-2xl z-20 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F4F3EF]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-geist uppercase text-[#A5A7AA] block tracking-wider">
                  Workflow Engine
                </span>
                <span className="text-xs font-geist font-medium text-[#F4F3EF] truncate block">
                  DaVinci & Premiere Suite
                </span>
              </div>
            </div>

            {/* Block 3: Circular Camera / Lens Aperture Badge */}
            <div
              ref={discRef}
              className="absolute top-16 left-2 sm:-left-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#202226]/90 backdrop-blur-md border border-white/15 shadow-2xl flex items-center justify-center z-10 group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-dashed border-white/25 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                <Disc3 className="w-6 h-6 sm:w-8 sm:h-8 text-[#A5A7AA]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#F4F3EF]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
