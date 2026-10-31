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
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 2. Timeline line extending scrub
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
              scrub: 0.5,
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
            { opacity: 0, x: -15 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
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
      className="relative pt-16 md:pt-24 pb-20 md:pb-28 px-4 sm:px-6 md:px-8 max-w-[1280px] mx-auto border-t border-white/10 bg-[#0D0E10]"
    >
      {/* Section Header */}
      <div ref={headingRef} className="mb-10 md:mb-12 max-w-2xl">
        <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#A5A7AA] font-medium block mb-2">
          METHODOLOGY
        </span>
        <h2 className="font-geist text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#F4F3EF]">
          How Ideas Become Visuals.
        </h2>
        <p className="font-inter text-xs sm:text-sm text-[#A5A7AA] mt-1.5">
          A disciplined four-phase pipeline built for clarity, speed and editorial excellence.
        </p>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative pl-6 sm:pl-9 max-w-3xl">
        {/* Background Inactive Rail */}
        <div className="absolute left-2.5 sm:left-3 top-2.5 bottom-6 w-[1.5px] bg-white/10" />

        {/* Scrub-extended Active Timeline Rail */}
        <div
          ref={timelineLineRef}
          className="absolute left-2.5 sm:left-3 top-2.5 bottom-6 w-[1.5px] bg-[#E8E7E3] origin-top"
        />

        {/* Phase Items */}
        <div ref={phasesContainerRef} className="space-y-8 sm:space-y-10">
          {PROCESS_PHASES.map((p, idx) => (
            <div key={p.phase} className="relative group">
              {/* Timeline Node Dot */}
              <div
                className={`absolute -left-[1.8rem] sm:-left-[2.1rem] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0D0E10] border-2 transition-all duration-300 ${
                  idx === 0 || idx === 3
                    ? 'border-[#E8E7E3]'
                    : 'border-white/30 group-hover:border-[#E8E7E3]'
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full m-auto mt-[2px] transition-colors ${
                    idx === 0 || idx === 3
                      ? 'bg-[#E8E7E3]'
                      : 'bg-transparent group-hover:bg-[#E8E7E3]'
                  }`}
                />
              </div>

              {/* Phase Content */}
              <div className="bg-[#202226] hover:bg-[#292C30] p-4.5 sm:p-5 rounded-card border border-white/10 transition-colors duration-200">
                <span className="font-geist text-[11px] text-[#A5A7AA] font-semibold tracking-wider uppercase block mb-1">
                  {p.phase}
                </span>
                <h3 className="font-geist text-lg sm:text-xl font-medium text-[#F4F3EF] group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                <p className="font-inter text-xs sm:text-sm text-[#A5A7AA] mt-1.5 leading-relaxed">
                  {p.description}
                </p>

                {/* Sub-steps */}
                <div className="mt-3.5 pt-3.5 border-t border-white/5 flex flex-wrap gap-1.5">
                  {p.details.map((detail) => (
                    <span
                      key={detail}
                      className="px-2 py-0.5 rounded bg-[#17191C] text-[11px] font-geist text-[#A5A7AA] border border-white/5"
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
