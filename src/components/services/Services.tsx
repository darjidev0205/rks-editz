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

      // 2. Horizontal divider line expansion
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1.0,
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
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
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
      className="relative pt-20 md:pt-32 pb-20 md:pb-28 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1600px] mx-auto border-t border-white/8 bg-[#1A1C1E]/30"
    >
      {/* Section Header */}
      <div ref={headingRef} className="mb-12 md:mb-16 max-w-2xl">
        <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#C4C7C9] font-medium block mb-2">
          CAPABILITIES
        </span>
        <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#E2E2E5]">
          What I Do.
        </h2>
        <p className="font-inter text-sm sm:text-base text-[#A3AAA9] mt-2">
          From raw ideas to the final frame.
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
              className="py-6 sm:py-8 group cursor-pointer transition-colors duration-300 hover:bg-white/[0.02] px-2 sm:px-4 rounded-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow max-w-4xl pr-4">
                  <span className="font-geist text-xs text-[#8D928C] block mb-2 font-medium">
                    {service.number}
                  </span>
                  <h3 className="font-geist text-xl sm:text-2xl md:text-3xl font-medium text-[#E2E2E5] group-hover:text-[#C4D6C6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-[#A3AAA9] mt-2 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Expandable Details on Desktop/Mobile */}
                  <div
                    className={`mt-4 pt-4 border-t border-white/5 transition-all duration-300 overflow-hidden ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="font-inter text-xs sm:text-sm text-[#C3C8C1] leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded bg-[#25292B] border border-white/5 text-xs font-geist text-[#E2E2E5]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[#8D928C] group-hover:text-[#C4D6C6] transition-colors flex-shrink-0">
                  <ArrowForward
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isExpanded ? 'rotate-90 text-[#C4D6C6]' : 'group-hover:translate-x-1'
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
