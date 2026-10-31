import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROCESS_PHASES } from '../../data/process';

gsap.registerPlugin(ScrollTrigger);

export const CreativeProcess: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const phasesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Heading reveal
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 2. Timeline line extending scrub as user scrolls through the section
      if (timelineLineRef.current && phasesContainerRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: phasesContainerRef.current,
              start: 'top 75%',
              end: 'bottom 85%',
              scrub: 0.6,
            },
          }
        );
      }

      // 3. Stagger phases as they enter
      if (phasesContainerRef.current) {
        const phases = phasesContainerRef.current.children;
        Array.from(phases).forEach((phase) => {
          gsap.fromTo(
            phase,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: phase,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative pt-20 md:pt-32 pb-20 md:pb-28 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1600px] mx-auto border-t border-white/8 bg-[#101214]"
    >
      {/* Section Header */}
      <div ref={headingRef} className="mb-12 md:mb-16 max-w-2xl">
        <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#C4C7C9] font-medium block mb-2">
          METHODOLOGY
        </span>
        <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#E2E2E5]">
          How Ideas Become Visuals.
        </h2>
        <p className="font-inter text-sm sm:text-base text-[#A3AAA9] mt-2">
          A disciplined four-phase pipeline built for clarity, speed and editorial excellence.
        </p>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative pl-7 sm:pl-10 md:pl-12 max-w-4xl">
        {/* Background Inactive Rail */}
        <div className="absolute left-2.5 sm:left-3 top-3 bottom-6 w-[2px] bg-white/10" />

        {/* Scrub-extended Active Timeline Rail */}
        <div
          ref={timelineLineRef}
          className="absolute left-2.5 sm:left-3 top-3 bottom-6 w-[2px] bg-gradient-to-b from-[#C4D6C6] via-[#C4D6C6] to-[#E0F2E2] shadow-sm shadow-[#C4D6C6]/50 origin-top"
        />

        {/* Phase Items */}
        <div ref={phasesContainerRef} className="space-y-10 sm:space-y-12">
          {PROCESS_PHASES.map((p, idx) => (
            <div key={p.phase} className="relative group">
              {/* Timeline Node Dot */}
              <div
                className={`absolute -left-[1.85rem] sm:-left-[2.1rem] md:-left-[2.35rem] top-1.5 w-4 h-4 rounded-full bg-[#101214] border-2 transition-all duration-300 ${
                  idx === 0 || idx === 3
                    ? 'border-[#C4D6C6] shadow-sm shadow-[#C4D6C6]/40'
                    : 'border-white/30 group-hover:border-[#C4D6C6]'
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full m-auto mt-[3px] transition-colors ${
                    idx === 0 || idx === 3
                      ? 'bg-[#C4D6C6]'
                      : 'bg-transparent group-hover:bg-[#C4D6C6]'
                  }`}
                />
              </div>

              {/* Phase Content */}
              <div className="bg-[#1C2022]/60 hover:bg-[#1E2022] p-5 sm:p-6 rounded-xl border border-white/8 transition-colors duration-300">
                <span className="font-geist text-xs text-[#C4D6C6] font-semibold tracking-wider uppercase block mb-1">
                  {p.phase}
                </span>
                <h3 className="font-geist text-xl sm:text-2xl font-medium text-[#E2E2E5] group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                <p className="font-inter text-sm sm:text-base text-[#A3AAA9] mt-2 leading-relaxed">
                  {p.description}
                </p>

                {/* Sub-steps */}
                <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {p.details.map((detail) => (
                    <span
                      key={detail}
                      className="px-2.5 py-1 rounded bg-[#25292B] text-xs font-geist text-[#C3C8C1] border border-white/5"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
