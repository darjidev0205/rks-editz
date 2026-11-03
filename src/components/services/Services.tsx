import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SERVICES, ServiceItem } from '../../data/services';

gsap.registerPlugin(ScrollTrigger);

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
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

      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeService: ServiceItem = SERVICES[activeServiceIndex];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#EDF2E9] overflow-hidden scroll-mt-20 border-t border-[#1E3027]/10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div ref={headingRef} className="mb-14 lg:mb-20 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDE9D7] border border-[#C3D4BC] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3027]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1E3027] font-semibold">
              CORE CAPABILITIES
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222A25]">
            What We Bring to <br className="hidden sm:inline" />
            <span className="text-[#1E3027]">the Frame.</span>
          </h2>
          <p className="font-inter text-sm sm:text-base text-[#69736B] mt-2 leading-relaxed">
            Five tailored post-production disciplines crafted to deliver maximum narrative clarity,
            aesthetic weight, and audience retention.
          </p>
        </div>

        {/* Interactive Editorial Layout: Interactive List on Left + Live Still Reveal on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Services Interactive List (7 cols on Desktop) */}
          <div ref={listRef} className="lg:col-span-7 flex flex-col divide-y divide-[#1E3027]/10">
            {SERVICES.map((service, index) => {
              const isActive = activeServiceIndex === index;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  onClick={() => setActiveServiceIndex(index)}
                  className={`py-7 transition-all duration-300 cursor-pointer group ${
                    isActive ? 'pl-2 sm:pl-4' : 'hover:pl-2'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="font-mono text-sm sm:text-base text-[#69736B] group-hover:text-[#1E3027] font-medium pt-1">
                        {service.number}
                      </span>
                      <div>
                        <h3
                          className={`font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
                            isActive
                              ? 'text-[#1E3027]'
                              : 'text-[#222A25] group-hover:text-[#1E3027]'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="font-inter text-xs sm:text-sm text-[#69736B] mt-1.5 max-w-lg leading-relaxed">
                          {service.tagline}
                        </p>

                        {/* Deliverables tags */}
                        <div className="flex flex-wrap gap-2 mt-3.5">
                          {service.deliverables.map((item) => (
                            <span
                              key={item}
                              className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                                isActive
                                  ? 'bg-[#DDE9D7] text-[#1E3027] font-medium'
                                  : 'bg-white/70 text-[#69736B] group-hover:bg-[#DDE9D7]/60'
                              }`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        {/* Mobile-Only Inline Visual (Guarantees visibility without relying on hover) */}
                        <div className="block lg:hidden mt-4 rounded-xl overflow-hidden aspect-[16/9] border border-[#1E3027]/10 shadow-sm relative">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono text-white font-medium">
                            {service.title}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        isActive
                          ? 'bg-[#1E3027] text-white rotate-45'
                          : 'bg-white border border-[#1E3027]/10 text-[#69736B] group-hover:bg-[#1E3027] group-hover:text-white'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Right Side Sticky Live Visual Preview Portal (5 cols) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="rounded-3xl overflow-hidden bg-white border border-[#1E3027]/12 shadow-2xl p-5 flex flex-col gap-4">
              {/* Media Still with smooth crossfade */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#18191C]">
                <img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover animate-fade-in transition-all duration-500 scale-100 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#DDE9D7] uppercase tracking-wider block mb-0.5">
                      FEATURED DELIVERABLE
                    </span>
                    <span className="font-display text-sm font-bold text-white">
                      {activeService.title}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Service description callout */}
              <div className="p-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#1E3027] font-semibold block mb-1">
                  DELIVERY SCOPE
                </span>
                <p className="font-inter text-xs text-[#69736B] leading-relaxed">
                  {activeService.description}
                </p>

                <div className="mt-4 pt-4 border-t border-[#1E3027]/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#69736B]">Standard Turnaround: 2-5 Days</span>
                  <a
                    href="#contact"
                    className="font-display text-xs font-bold text-[#1E3027] hover:underline flex items-center gap-1"
                  >
                    <span>Inquire for Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
