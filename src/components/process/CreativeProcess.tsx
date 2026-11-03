import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, PenTool, Sparkles, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  number: string;
  name: string;
  icon: typeof Compass;
  description: string;
  details: string;
}

export const CreativeProcess: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const steps: ProcessStep[] = [
    {
      number: '01',
      name: 'Discover',
      icon: Compass,
      description: 'Understanding the goal, target audience, and narrative angle.',
      details: 'Footage audit, tone mapping, references alignment, and narrative intent analysis.',
    },
    {
      number: '02',
      name: 'Shape',
      icon: PenTool,
      description: 'Organizing the story, assembly cut, and editing approach.',
      details: 'Assembly cut, cadence scaffolding, sound selection, and rough narrative flow.',
    },
    {
      number: '03',
      name: 'Create',
      icon: Sparkles,
      description: 'Crafting the edit with thoughtful pacing, sound, and visuals.',
      details: 'Micro-timing cuts, custom kinetic type, sound design foley, and optical balancing.',
    },
    {
      number: '04',
      name: 'Refine',
      icon: CheckCircle2,
      description: 'Reviewing, finishing color grades, and exporting all deliverables.',
      details: 'DaVinci Resolve color finishing, dialogue leveling, and multi-aspect exports.',
    },
  ];

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(reducedMotionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    reducedMotionQuery.addEventListener('change', handleMotionChange);

    // Performance: Pause background video when the section is outside the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current || reducedMotionQuery.matches) return;
        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Scroll-driven subtle background parallax & text reveals
    const ctx = gsap.context(() => {
      if (!reducedMotionQuery.matches) {
        // Minimal vertical parallax on background video
        if (videoContainerRef.current) {
          gsap.to(videoContainerRef.current, {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          });
        }

        // Section heading reveal
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

        // Process timeline cards reveal
        if (timelineRef.current) {
          gsap.fromTo(
            timelineRef.current.children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: timelineRef.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => {
      observer.disconnect();
      reducedMotionQuery.removeEventListener('change', handleMotionChange);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full py-16 sm:py-24 overflow-hidden border-t border-[#1E3027]/10 scroll-mt-20"
    >
      {/* FULL-WIDTH, FULL-HEIGHT CINEMATIC VIDEO BACKGROUND LAYER */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none -z-10 overflow-hidden"
      >
        {/* Authentic editing suite poster fallback */}
        <img
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1920&auto=format&fit=crop"
          alt="Video editing timeline and post-production workflow background"
          className={`w-full h-full object-cover filter brightness-[0.95] contrast-[1.05] ${
            prefersReducedMotion ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />

        {/* Real HTML5 Inline Looping Video (Muted, Autoplay, Compressed) */}
        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            src="https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_2MB.mp4"
            poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1920&auto=format&fit=crop"
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] saturate-[0.85]"
          />
        )}

        {/* Warm off-white #F7F6F0 overlay (88% opacity) ensuring crystal-clear typography readability */}
        <div className="absolute inset-0 bg-[#F7F6F0]/88 backdrop-blur-[1.5px]" />

        {/* Gentle boundary gradient masks for natural seamless section transitions */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#EDF2E9] via-[#F7F6F0]/90 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#F7F6F0] via-[#F7F6F0]/90 to-transparent pointer-events-none" />
      </div>

      {/* FOREGROUND CONTENT CONTAINER */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* Compact Section Header */}
        <div ref={headingRef} className="mb-10 sm:mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF2E9]/90 backdrop-blur-xs border border-[#DDE9D7] mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3027]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1E3027] font-semibold">
              METHODOLOGY
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222A25]">
            Every Great Edit Starts <br className="hidden sm:inline" />
            <span className="text-[#1E3027]">With a Story.</span>
          </h2>
          <p className="font-inter text-xs sm:text-sm text-[#69736B] mt-1.5 max-w-lg">
            A connected four-step creative progression from raw unorganized rushes to polished final cut.
          </p>
        </div>

        {/* Connected 4-Step Progression */}
        <div
          ref={timelineRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative"
        >
          {/* Subtle horizontal connecting line on large screens */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-[#DDE9D7] -z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.name}
                className="relative z-10 flex flex-col p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-[#1E3027]/10 shadow-sm hover:shadow-md hover:border-[#1E3027]/25 transition-all duration-300 group"
              >
                {/* Step indicator node */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#EDF2E9] group-hover:bg-[#1E3027] text-[#1E3027] group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#69736B] group-hover:text-[#1E3027]">
                    STEP {step.number}
                  </span>
                </div>

                {/* Step Name */}
                <h3 className="font-display text-xl font-bold text-[#222A25] tracking-tight mb-2">
                  {step.name}
                </h3>

                {/* Core summary */}
                <p className="font-inter text-xs text-[#222A25] font-medium leading-relaxed mb-3">
                  {step.description}
                </p>

                {/* Specific details */}
                <p className="font-inter text-[11px] text-[#69736B] leading-relaxed mt-auto pt-3 border-t border-[#1E3027]/8">
                  {step.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
