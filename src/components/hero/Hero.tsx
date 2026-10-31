import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Play } from 'lucide-react';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';

interface HeroProps {
  onOpenProject?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProject }) => {
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
            yPercent: 12,
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
            y: -40,
            opacity: 0.4,
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
            yPercent: 6,
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
      className="relative min-h-[92vh] md:min-h-screen pt-28 md:pt-36 pb-16 md:pb-28 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1600px] mx-auto flex flex-col justify-center overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Typographic Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="inline-flex items-center gap-2.5 mb-5 md:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C4D6C6] animate-pulse"></span>
            <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#C4C7C9] font-medium">
              INDEPENDENT CREATIVE / AHMEDABAD
            </span>
          </div>

          {/* Headline with Mask Containers */}
          <h1 className="font-geist font-semibold tracking-tight text-[#E2E2E5] uppercase text-[40px] leading-[44px] sm:text-5xl sm:leading-[52px] md:text-6xl md:leading-[64px] lg:text-[76px] lg:leading-[80px] xl:text-[88px] xl:leading-[90px] mb-6">
            <span className="block overflow-hidden py-1">
              <span ref={headlineLine1Ref} className="block transform-gpu">
                Stories,
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span ref={headlineLine2Ref} className="block transform-gpu">
                Shaped to
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span ref={headlineLine3Ref} className="block transform-gpu text-[#C4D6C6]">
                Stay.
              </span>
            </span>
          </h1>

          {/* Subhead */}
          <p
            ref={subheadRef}
            className="font-inter text-[#C3C8C1] text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-4 font-normal"
          >
            Video editing, motion and visual storytelling for creators and visionary brands.
          </p>

          {/* Technical Signature */}
          <div
            ref={signatureRef}
            className="font-geist text-xs tracking-wider uppercase text-[#8D928C] mb-8 font-medium"
          >
            KRISH PATEL — THE CREATIVE BEHIND RKA EDITZ
          </div>

          {/* CTAs */}
          <div ref={ctasRef} className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleExploreClick}
              className="px-7 py-3.5 rounded-full bg-[#C4D6C6] hover:bg-[#DCE8DD] text-[#101F15] font-geist font-medium text-sm tracking-wide transition-all duration-300 flex items-center gap-2 group shadow-lg active:scale-95"
            >
              <span>Explore Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={handleConnectClick}
              className="px-6 py-3.5 rounded-full border border-white/10 hover:border-white/25 hover:bg-white/5 text-[#C4C7C9] hover:text-[#E2E2E5] font-geist text-sm tracking-wide transition-all duration-300 active:scale-95"
            >
              Let's Connect
            </button>
          </div>
        </div>

        {/* Right Column: Cinematic Media Staggered Cards */}
        <div ref={mediaContainerRef} className="lg:col-span-5 relative w-full mt-4 lg:mt-0">
          <div className="relative w-full max-w-[420px] lg:max-w-none mx-auto">
            {/* Primary Portrait Card (NOIR LUXE) */}
            <div
              ref={primaryCardRef}
              onClick={() => onOpenProject?.('noir-luxe')}
              className="w-[85%] sm:w-[82%] rounded-xl overflow-hidden border border-white/10 bg-[#1E2022] shadow-2xl relative cursor-pointer group"
            >
              <div className="aspect-[9/13] sm:aspect-[9/14] w-full relative overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6oRbG6Rl3fL7gv02vLkjiAPbzuAKkeB9rvgkbfsuA_1TzrWYcg0x6SFryc3ug_7m5ofnGsXRgChrll2pH6euz6mFA67kiO04s6IdJDcxjmwYDpwNUmMfO9mr65cHPEg-Fm5bqjaHaFcsy2ISQCyWJJbYsSuErYbIgKMeSrN8ZDIAOCGn92Lz2Kk7kvqw9r1geDOL-VGVfJuoZYlJJKgJR5hVB7VdVcNNZt6wylDs"
                  alt="Noir Luxe commercial film still with editorial fashion framing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E10] via-transparent to-black/30"></div>

                {/* Card Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="font-geist text-[10px] uppercase tracking-wider text-[#C4D6C6] block font-semibold">
                      01 / COMMERCIAL
                    </span>
                    <span className="font-geist text-sm font-semibold text-[#E2E2E5] tracking-tight">
                      NOIR LUXE
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#0C0E10]/80 backdrop-blur-md flex items-center justify-center border border-white/15 group-hover:scale-110 group-hover:bg-[#C4D6C6] group-hover:text-black transition-all">
                    <Play className="w-3.5 h-3.5 text-[#C4D6C6] group-hover:text-black fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Staggered Secondary Landscape Preview (35MM REEL) */}
            <div
              ref={secondaryCardRef}
              onClick={() => onOpenProject?.('the-artisans-touch')}
              className="w-[68%] sm:w-[65%] absolute -bottom-6 -right-2 sm:-right-4 rounded-xl overflow-hidden border border-white/12 bg-[#282A2C] shadow-2xl z-20 cursor-pointer group"
            >
              <div className="aspect-video w-full relative overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL7hs5BjUXjdMSI2igwgLmUoEk9veFXsFLCfkh3IGYtOenOuY23MHjOtCDCXfLMJI4ctTNDxqJ8tVndTGPazxR65oa_F7Wwb6y_Ka9SdixuI7qI6efCmUJYL5vZwNfcm4abKZ6HIRzY6Qs36Ebx_Onm5GHCylUA6d_jQZcX24vak72PmMlrPZJ6d78IFTYgynKrIuzxg85LRJfMLKeJZSaw29bz6rax771ARPkcQ4"
                  alt="Luthier craftsman violin workshop documentary still"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#0C0E10]/80 backdrop-blur-md text-[9px] font-geist text-[#C3C8C1] border border-white/10">
                  35MM REEL
                </div>
                <div className="absolute bottom-2.5 left-2.5">
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
