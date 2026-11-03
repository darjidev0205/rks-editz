import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Scissors, Sliders, MonitorPlay } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const photoFrameRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Gentle photographic parallax
      if (photoFrameRef.current) {
        gsap.to(photoFrameRef.current, {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      }

      // Restrained text reveal
      if (textContentRef.current) {
        gsap.fromTo(
          textContentRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textContentRef.current,
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
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#F7F6F0] overflow-hidden scroll-mt-20 border-t border-[#1E3027]/10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* Subtle background section watermark number */}
        <div className="absolute right-6 top-12 font-display text-[160px] sm:text-[220px] font-bold text-[#1E3027]/[0.03] select-none pointer-events-none leading-none">
          02
        </div>

        {/* Editorial Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (5 of 12 cols): Personal & Philosophy Copy */}
          <div ref={textContentRef} className="lg:col-span-5 flex flex-col justify-center z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF2E9] border border-[#DDE9D7] w-fit mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E3027]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1E3027] font-semibold">
                ABOUT THE STUDIO
              </span>
            </div>

            {/* Exact Heading */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222A25] leading-[1.12] mb-6">
              There's More to an Edit Than Just <br className="hidden sm:inline" />
              <span className="text-[#1E3027]">Cutting Clips.</span>
            </h2>

            {/* Exact Description */}
            <p className="font-inter text-base sm:text-lg text-[#69736B] leading-relaxed mb-6">
              We believe great editing is about rhythm, emotion, and knowing exactly when a moment
              matters. Every project is a chance to make something people genuinely enjoy watching.
            </p>

            {/* Pull Quote */}
            <div className="p-5 rounded-2xl bg-[#EDF2E9] border border-[#DDE9D7] mb-8">
              <p className="font-display text-base text-[#1E3027] font-medium italic">
                "Pacing is the heartbeat of a film. When the timing is true, audience attention follows naturally."
              </p>
              <div className="mt-3 pt-3 border-t border-[#1E3027]/10 flex items-center justify-between">
                <span className="font-display text-xs font-bold text-[#222A25]">
                  Krish Patel — Founder &amp; Lead Editor
                </span>
                <span className="font-mono text-[10px] text-[#69736B] uppercase">AHMEDABAD, IN</span>
              </div>
            </div>

            {/* Three Pillar Icons */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="p-3 rounded-xl bg-white border border-[#1E3027]/8 shadow-xs">
                <Scissors className="w-4 h-4 text-[#1E3027] mb-1.5" />
                <span className="font-display text-xs font-semibold text-[#222A25] block">Narrative Flow</span>
                <span className="text-[10px] text-[#69736B]">Cadence &amp; rhythm</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#1E3027]/8 shadow-xs">
                <Sliders className="w-4 h-4 text-[#1E3027] mb-1.5" />
                <span className="font-display text-xs font-semibold text-[#222A25] block">Color &amp; Sound</span>
                <span className="text-[10px] text-[#69736B]">DaVinci mastering</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#1E3027]/8 shadow-xs">
                <MonitorPlay className="w-4 h-4 text-[#1E3027] mb-1.5" />
                <span className="font-display text-xs font-semibold text-[#222A25] block">Retention</span>
                <span className="text-[10px] text-[#69736B]">Hook optimization</span>
              </div>
            </div>

            {/* Direct Studio CTA */}
            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1E3027] hover:bg-[#2A4337] text-white font-display text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-sm"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column (7 of 12 cols): Authentic Editorial Workstation & Suite Visuals */}
          <div className="lg:col-span-7">
            <div
              ref={photoFrameRef}
              className="relative grid grid-cols-12 gap-4 items-center"
            >
              {/* Main Primary Image: Video editing workstation, dual monitors, timeline in NLE */}
              <div className="col-span-12 sm:col-span-8 rounded-2xl overflow-hidden bg-[#18191C] border border-[#1E3027]/12 shadow-2xl aspect-[4/4.5] group relative">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
                  alt="Professional video editor workstation with timeline, keyboard shortcuts, and calibrated color monitor"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#DDE9D7] uppercase tracking-wider block mb-0.5">
                      STUDIO EDITING SUITE
                    </span>
                    <span className="font-display text-sm font-bold text-white">
                      RKA Editz Post-Production
                    </span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#DDE9D7] border border-white/10">
                    4K / 10-BIT SUITE
                  </div>
                </div>
              </div>

              {/* Offset Secondary Image: Camera rig & BTS timeline frame */}
              <div className="hidden sm:flex col-span-4 flex-col gap-4">
                <div className="rounded-2xl overflow-hidden bg-[#18191C] border border-[#1E3027]/12 shadow-lg aspect-[3/3.8] group relative">
                  <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop"
                    alt="Cinema camera setup on production set"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[9px] font-mono text-[#DDE9D7] uppercase block">ORIGIN</span>
                    <span className="font-display text-xs font-semibold">Production Ready</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#1E3027]/10 shadow-sm flex flex-col justify-between">
                  <span className="text-[10px] font-mono uppercase text-[#69736B]">PRIMARY FOCUS</span>
                  <p className="font-display text-xs font-bold text-[#222A25] mt-1">
                    Documentary, Short-Form &amp; Brand Storytelling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
