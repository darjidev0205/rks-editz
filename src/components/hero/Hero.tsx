import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Play } from 'lucide-react';
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
  const signatureRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const primaryCardRef = useRef<HTMLDivElement>(null);
  const secondaryCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Initial Master Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 });

      // Stage 2: Eyebrow reveal
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 }
      );

      // Stage 3: Headline line by line mask reveal
      const headlineLines = [
        headlineLine1Ref.current,
        headlineLine2Ref.current,
        headlineLine3Ref.current,
      ].filter(Boolean);

      tl.fromTo(
        headlineLines,
        { y: '105%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
        },
        '-=0.3'
      );

      // Stage 4: Supporting paragraph & signature
      tl.fromTo(
        [subheadRef.current, signatureRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        '-=0.4'
      );

      // Stage 5: CTAs appear
      tl.fromTo(
        ctasRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      );

      // Stage 6: Hero media cards reveal through clip-path and gentle scale
      if (primaryCardRef.current) {
        tl.fromTo(
          primaryCardRef.current,
          {
            clipPath: 'inset(100% 0% 0% 0%)',
            scale: 1.06,
            opacity: 0,
          },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.inOut',
          },
          '-=0.6'
        );
      }

      if (secondaryCardRef.current) {
        tl.fromTo(
          secondaryCardRef.current,
          {
            clipPath: 'inset(0% 0% 100% 0%)',
            scale: 1.08,
            opacity: 0,
          },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            opacity: 1,
            duration: 1.0,
            ease: 'power3.inOut',
          },
          '-=0.7'
        );
      }

      // 2. On Scroll: Responsive Parallax & Gentle Content Fade
      ScrollTrigger.matchMedia({
        // Desktop parallax
        '(min-width: 768px)': () => {
          gsap.to(mediaContainerRef.current, {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.5,
            },
          });

          // Text parallax slightly faster
          gsap.to([eyebrowRef.current, headlineLine1Ref.current?.parentElement?.parentElement, subheadRef.current, ctasRef.current], {
            y: -35,
            opacity: 0.35,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'center top',
              end: 'bottom top',
              scrub: true,
            },
          });
        },
        // Mobile subtle parallax
        '(max-width: 767px)': () => {
          gsap.to(primaryCardRef.current, {
            yPercent: 5,
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
    const el = document.getElementById('works');
    if (el) {
      scrollTo(el, { offset: -40 });
    }
  };

  const handleConnectClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      scrollTo(el, { offset: -40 });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen pt-24 md:pt-32 pb-14 md:pb-24 px-4 sm:px-6 md:px-8 max-w-[1280px] mx-auto flex flex-col justify-center overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typographic Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="inline-flex items-center gap-2.5 mb-4 md:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4F3EF] animate-pulse"></span>
            <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#A5A7AA] font-medium">
              INDEPENDENT CREATIVE / AHMEDABAD
            </span>
          </div>

          {/* Headline with Mask Containers */}
          <h1 className="font-geist font-semibold tracking-tight text-[#F4F3EF] uppercase text-[38px] leading-[42px] sm:text-5xl sm:leading-[52px] md:text-6xl md:leading-[64px] lg:text-[72px] lg:leading-[76px] mb-5">
            <span className="block overflow-hidden py-0.5">
              <span ref={headlineLine1Ref} className="block transform-gpu">
                Stories,
              </span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <span ref={headlineLine2Ref} className="block transform-gpu">
                Shaped to
              </span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <span ref={headlineLine3Ref} className="block transform-gpu text-[#F4F3EF]">
                Stay.
              </span>
            </span>
          </h1>

          {/* Subhead */}
          <p
            ref={subheadRef}
            className="font-inter text-[#A5A7AA] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-3 font-normal"
          >
            Video editing, motion and visual storytelling for creators and visionary brands.
          </p>

          {/* Technical Signature */}
          <div
            ref={signatureRef}
            className="font-geist text-xs tracking-wider uppercase text-[#A5A7AA]/70 mb-7 font-medium"
          >
            KRISH PATEL — THE CREATIVE BEHIND RKA EDITZ
          </div>

          {/* CTAs */}
          <div ref={ctasRef} className="flex flex-wrap items-center gap-3.5">
            <button
              onClick={handleExploreClick}
              className="px-6 py-3 rounded-full bg-[#E8E7E3] hover:bg-[#D4D3CF] text-[#111214] font-geist font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center gap-2 group shadow-lg active:scale-95"
            >
              <span>Explore Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={handleConnectClick}
              className="px-5 py-3 rounded-full border border-white/12 hover:border-white/25 hover:bg-white/5 text-[#F4F3EF] font-geist text-xs sm:text-sm tracking-wide transition-all duration-200 active:scale-95"
            >
              Let's Connect
            </button>
          </div>
        </div>

        {/* Right Column: Hero Media Preview */}
        <div ref={mediaContainerRef} className="lg:col-span-5 relative w-full mt-4 lg:mt-0">
          <div className="relative w-full max-w-[380px] lg:max-w-none mx-auto">
            {/* Primary Portrait Card (NOIR LUXE) */}
            <div
              ref={primaryCardRef}
              onClick={handleExploreClick}
              className="w-[84%] rounded-card overflow-hidden border border-white/10 bg-[#202226] shadow-2xl relative cursor-pointer group"
            >
              <div className="aspect-[9/13] w-full relative overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6oRbG6Rl3fL7gv02vLkjiAPbzuAKkeB9rvgkbfsuA_1TzrWYcg0x6SFryc3ug_7m5ofnGsXRgChrll2pH6euz6mFA67kiO04s6IdJDcxjmwYDpwNUmMfO9mr65cHPEg-Fm5bqjaHaFcsy2ISQCyWJJbYsSuErYbIgKMeSrN8ZDIAOCGn92Lz2Kk7kvqw9r1geDOL-VGVfJuoZYlJJKgJR5hVB7VdVcNNZt6wylDs"
                  alt="Noir Luxe commercial film still with editorial fashion framing"
                  className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E10] via-transparent to-black/30"></div>

                {/* Card Badge Overlay */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex justify-between items-end">
                  <div>
                    <span className="font-geist text-[10px] uppercase tracking-wider text-[#A5A7AA] block font-medium">
                      01 / COMMERCIAL
                    </span>
                    <span className="font-geist text-xs sm:text-sm font-semibold text-[#F4F3EF] tracking-tight">
                      NOIR LUXE
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#202226]/85 backdrop-blur-md flex items-center justify-center border border-white/12 group-hover:scale-105 group-hover:bg-[#E8E7E3] group-hover:text-[#111214] transition-all">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Staggered Secondary Landscape Preview (35MM REEL) */}
            <div
              ref={secondaryCardRef}
              onClick={handleExploreClick}
              className="w-[66%] absolute -bottom-5 -right-1 sm:-right-3 rounded-card overflow-hidden border border-white/12 bg-[#292C30] shadow-2xl z-20 cursor-pointer group"
            >
              <div className="aspect-video w-full relative overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL7hs5BjUXjdMSI2igwgLmUoEk9veFXsFLCfkh3IGYtOenOuY23MHjOtCDCXfLMJI4ctTNDxqJ8tVndTGPazxR65oa_F7Wwb6y_Ka9SdixuI7qI6efCmUJYL5vZwNfcm4abKZ6HIRzY6Qs36Ebx_Onm5GHCylUA6d_jQZcX24vak72PmMlrPZJ6d78IFTYgynKrIuzxg85LRJfMLKeJZSaw29bz6rax771ARPkcQ4"
                  alt="Luthier craftsman violin workshop documentary still"
                  className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#17191C]/85 backdrop-blur-md text-[9px] font-geist text-[#A5A7AA] border border-white/10">
                  35MM REEL
                </div>
                <div className="absolute bottom-2 left-2">
                  <span className="font-geist text-xs font-medium text-white block drop-shadow-md">
                    The Artisan's Touch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
