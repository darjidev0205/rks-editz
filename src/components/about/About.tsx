import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Light editorial surface entrance
      if (plateRef.current) {
        gsap.fromTo(
          plateRef.current,
          { opacity: 0.85, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 2. Portrait mask reveal
      if (portraitRef.current) {
        gsap.fromTo(
          portraitRef.current,
          { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.05 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            duration: 1.0,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: portraitRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 3. Editorial text reveal
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-16 sm:py-24 md:py-32 bg-[#ECECE6] text-[#171A19] transition-colors duration-700"
    >
      <div
        ref={plateRef}
        className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16"
      >
        {/* Monograph Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-8 sm:mb-12">
          <span className="font-geist text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-black/60">
            DIRECTOR'S STATEMENT
          </span>
          <span className="font-geist text-[10px] sm:text-xs text-black/40">
            VOL. 04 — RKA ARCHIVE
          </span>
        </div>

        {/* 2-Column Editorial Monograph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic B&W Portrait */}
          <div className="lg:col-span-5">
            <div
              ref={portraitRef}
              className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-neutral-300 shadow-xl relative"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByuFePPDAYNXrvuAxFNFReLWWJ96A3p_ykM3PfkPOjW-YsHywRSU9wQxN6jyzb9yufW1lPxXZuKExKAhMTR9S9gyIFspzfn_fm-ZuiZCCYdhYKIr8YupT8xgZAr-b4Wk3W-bEGNwWjSWVAUtUU_wTkGW103w2sV_-7A7Dz5y3XFKkZ08I4nO6B_mdZWtiKMmxiFf0NtQe3wvpptZqqe0Bs3m0xveFl7TDT2cx1FPc"
                alt="Krish Patel Director and Lead Video Editor Portrait in editing suite with dual monitors"
                className="w-full h-full object-cover grayscale contrast-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-[#ECECE6] text-[10px] sm:text-xs font-geist tracking-wider">
                AHMEDABAD • POST-STUDIO
              </div>
            </div>
          </div>

          {/* Right Column: Statement & Details */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-geist text-xs uppercase tracking-widest text-black/50 mb-2 font-medium">
              THE VISION
            </span>
            <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171A19] tracking-tight mb-6">
              Behind the Edit.
            </h2>
            <p className="font-inter text-base sm:text-lg text-black/80 leading-relaxed mb-6 font-normal">
              I'm Krish, a video editor and creative producer who loves turning ideas into visuals
              people want to watch. I work across storytelling, motion, filming and editing, combining
              creative judgment with modern production workflows.
            </p>
            <p className="font-inter text-sm sm:text-base text-black/70 leading-relaxed mb-8">
              Whether crafting high-intensity commercial spots or long-form documentary narratives,
              my focus remains absolute: frame-accurate rhythm, intentional color grade, and sound
              design that anchors the spectator inside the narrative universe.
            </p>

            {/* Clean Metadata Badges */}
            <div className="pt-6 border-t border-black/10 flex flex-wrap gap-4 sm:gap-6 font-geist text-xs text-black/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span className="font-medium">Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span className="font-medium">Available for Select Commissions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
