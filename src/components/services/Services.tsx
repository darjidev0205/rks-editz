import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowForward } from './ArrowIcon';
import { SERVICES } from '../../data/services';

gsap.registerPlugin(ScrollTrigger);

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Heading masked reveal
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

      // 2. Horizontal divider line expansion
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 0.9,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: dividerRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 3. Service rows stagger reveal
      if (rowsRef.current) {
        const rows = rowsRef.current.children;
        gsap.fromTo(
          rows,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rowsRef.current,
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
      id="services"
      className="relative pt-20 md:pt-28 pb-20 md:pb-28 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1280px] mx-auto border-t border-white/10"
    >
      {/* Section Header */}
      <div ref={headingRef} className="mb-10 md:mb-12 max-w-2xl">
        <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#A5A7AA] font-medium block mb-2">
          CAPABILITIES & RETAINERS
        </span>
        <h2 className="font-geist text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#F4F3EF]">
          What I Do.
        </h2>
        <p className="font-inter text-xs sm:text-sm text-[#A5A7AA] mt-1.5">
          From the first assembly cut to frame-accurate master deliverables.
        </p>
      </div>

      {/* Hairline Divider */}
      <div ref={dividerRef} className="w-full h-[1px] bg-white/10 mb-2"></div>

      {/* Service Rows */}
      <div ref={rowsRef} className="divide-y divide-white/10">
        {SERVICES.map((service) => {
          const isExpanded = activeService === service.id;
          return (
            <div
              key={service.id}
              onClick={() => setActiveService(isExpanded ? null : service.id)}
              className="py-5 sm:py-7 group cursor-pointer transition-colors duration-200 hover:bg-white/[0.02] px-2 sm:px-4 rounded-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow max-w-3xl pr-4">
                  <span className="font-geist text-xs text-[#A5A7AA]/70 block mb-1.5 font-medium">
                    {service.number}
                  </span>
                  <h3 className="font-geist text-lg sm:text-xl md:text-2xl font-medium text-[#F4F3EF] group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-[#A5A7AA] mt-1.5 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Expandable Details on Desktop/Mobile */}
                  <div
                    className={`mt-3.5 pt-3.5 border-t border-white/5 transition-all duration-300 overflow-hidden ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="font-inter text-xs sm:text-sm text-[#A5A7AA] leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded bg-[#181B20] border border-white/10 text-xs font-geist text-[#F4F3EF]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-1.5 text-[#A5A7AA] group-hover:text-white transition-colors flex-shrink-0">
                  <ArrowForward
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isExpanded ? 'rotate-90 text-white' : 'group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
