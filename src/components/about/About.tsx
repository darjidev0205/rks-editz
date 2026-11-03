import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Eye, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Background subtle parallax
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      }

      // Card entrance
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 85%',
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
      className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden bg-[#0D0E10]"
    >
      {/* 1. CINEMATIC FULL-BLEED BACKGROUND PHOTO (Muted, Layered Desk/Suite Aesthetic) */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-[125%] -top-[12%] pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop"
          alt="Atmospheric creative video editing workstation with sound monitor speakers"
          className="w-full h-full object-cover filter brightness-[0.20] contrast-[1.2] saturate-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D] via-transparent to-[#0A0B0D]" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
      </div>

      {/* 2. FLOATING EDITORIAL CARD (Content scrolls over the photo layer) */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div
          ref={cardRef}
          className="rounded-3xl bg-[#14161A]/85 backdrop-blur-2xl border border-white/12 p-6 sm:p-10 lg:p-14 shadow-2xl"
        >
          {/* Header Track */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-8 sm:mb-10">
            <span className="font-geist text-xs font-semibold tracking-[0.2em] uppercase text-[#A5A7AA]">
              THE APPROACH // BEHIND THE EDIT
            </span>
            <span className="font-geist text-xs text-[#A5A7AA]/70">
              RKA EDITZ • FOUNDER STATEMENT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Authentic B&W Studio Portrait */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] w-full max-w-[380px] mx-auto rounded-2xl overflow-hidden bg-[#181B20] border border-white/12 shadow-2xl relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByuFePPDAYNXrvuAxFNFReLWWJ96A3p_ykM3PfkPOjW-YsHywRSU9wQxN6jyzb9yufW1lPxXZuKExKAhMTR9S9gyIFspzfn_fm-ZuiZCCYdhYKIr8YupT8xgZAr-b4Wk3W-bEGNwWjSWVAUtUU_wTkGW103w2sV_-7A7Dz5y3XFKkZ08I4nO6B_mdZWtiKMmxiFf0NtQe3wvpptZqqe0Bs3m0xveFl7TDT2cx1FPc"
                  alt="Krish Patel Director and Lead Video Editor"
                  className="w-full h-full object-cover grayscale contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <span className="font-geist text-xs font-semibold text-[#F4F3EF] block">
                      Krish Patel
                    </span>
                    <span className="font-inter text-[11px] text-[#A5A7AA]">
                      Creative Editor & Founder
                    </span>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-geist text-[#E8E7E3] border border-white/10">
                    AHMEDABAD, IN
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative on Storytelling, Rhythm & Retention */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="font-geist text-xs uppercase tracking-widest text-[#A5A7AA] mb-2 font-medium">
                PHILOSOPHY & CRAFT
              </span>
              <h2 className="font-geist text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F4F3EF] tracking-tight mb-5 leading-snug">
                Edits should feel invisible, yet impossible to ignore.
              </h2>
              <p className="font-inter text-sm sm:text-base text-[#A5A7AA] leading-relaxed mb-4">
                Great editing is not about flash or transitions for the sake of transitions. It is
                the invisible architecture of pacing, tension, silence, and sudden acceleration that
                locks an audience into a state of focused attention.
              </p>
              <p className="font-inter text-xs sm:text-sm text-[#A5A7AA]/90 leading-relaxed mb-8">
                From high-tempo YouTube retainers to high-fashion brand films and automotive campaigns,
                every cut is placed with intention. I handle full-pipeline post-production—story assembly,
                sound design sculpting, kinetic typography, and DaVinci Resolve color finishing.
              </p>

              {/* Stat Counters & Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/8">
                  <div className="flex items-center gap-1.5 text-xs text-[#A5A7AA] mb-1">
                    <Eye className="w-3.5 h-3.5 text-[#F4F3EF]" />
                    <span>Total Reach</span>
                  </div>
                  <span className="font-geist text-xl font-semibold text-[#F4F3EF]">100M+</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/8">
                  <div className="flex items-center gap-1.5 text-xs text-[#A5A7AA] mb-1">
                    <Layers className="w-3.5 h-3.5 text-[#F4F3EF]" />
                    <span>Projects</span>
                  </div>
                  <span className="font-geist text-xl font-semibold text-[#F4F3EF]">85+ Finished</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/8 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#A5A7AA] mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#F4F3EF]" />
                    <span>Turnaround</span>
                  </div>
                  <span className="font-geist text-xl font-semibold text-[#F4F3EF]">Frame Accurate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
