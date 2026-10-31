import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS, CATEGORIES, ProjectCategory } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

interface SelectedWorkProps {
  onOpenProject: (id: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 5);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Heading masked entrance
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current.children,
          { opacity: 0, y: 25 },
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

      // 2. Cards stagger reveal on scroll
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('article');
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 40,
              scale: 0.98,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              delay: (i % 2) * 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [displayedProjects, activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative pt-20 md:pt-32 pb-20 md:pb-28 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1600px] mx-auto border-t border-white/8"
    >
      {/* Section Header */}
      <div ref={headingRef} className="mb-8 md:mb-12 max-w-3xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#C4C7C9] font-medium">
            PORTFOLIO
          </span>
        </div>
        <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#E2E2E5]">
          Selected Work.
        </h2>
        <p className="font-inter text-sm sm:text-base text-[#A3AAA9] mt-2 leading-relaxed">
          Different formats. One commitment to the story.
        </p>
      </div>

      {/* Filter Pills with Horizontal Scroll on Mobile */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 sm:mb-10 -mx-5 px-5 sm:mx-0 sm:px-0">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-geist text-xs tracking-wider whitespace-nowrap transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'bg-[#282A2C] text-[#C4D6C6] border border-[#C4D6C6]/40 shadow-sm font-medium'
                  : 'bg-[#1A1C1E] text-[#A3AAA9] border border-white/6 hover:text-white hover:border-white/15'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Asymmetric Works Grid */}
      <div ref={gridRef} className="space-y-6 md:space-y-8">
        {/* Row 1: Featured 16:9 Documentary */}
        {displayedProjects[0] && (
          <div className="w-full">
            <ProjectCard
              project={displayedProjects[0]}
              onOpen={onOpenProject}
              className="w-full"
            />
          </div>
        )}

        {/* Row 2: 9:16 Portrait Pair (Side-by-side) */}
        {displayedProjects.length > 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <ProjectCard
              project={displayedProjects[1]}
              onOpen={onOpenProject}
              isPortrait={true}
            />
            <ProjectCard
              project={displayedProjects[2]}
              onOpen={onOpenProject}
              isPortrait={true}
            />
          </div>
        )}

        {/* Row 3: Landscape Campaign & Remaining Projects */}
        {displayedProjects.slice(3).map((project) => (
          <div key={project.id} className="w-full">
            <ProjectCard
              project={project}
              onOpen={onOpenProject}
            />
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center border border-dashed border-white/10 rounded-2xl">
            <Sparkles className="w-8 h-8 text-[#A3AAA9] mx-auto mb-3" />
            <p className="font-geist text-base text-[#E2E2E5]">No projects found in this category.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-4 text-xs font-geist text-[#C4D6C6] underline hover:text-white"
            >
              View all works
            </button>
          </div>
        )}
      </div>

      {/* View All Projects Button */}
      {filteredProjects.length > 5 && (
        <div className="mt-10 sm:mt-14 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl border border-white/15 hover:border-white/30 bg-[#1C2022] hover:bg-[#25292B] text-[#C4C7C9] hover:text-white font-geist text-xs tracking-widest uppercase transition-all duration-200 active:scale-98 shadow-lg"
          >
            <span>{showAll ? 'Show Fewer Projects' : `View All Projects (${filteredProjects.length})`}</span>
            <ArrowUpRight className="w-4 h-4 text-[#C4D6C6]" />
          </button>
        </div>
      )}
    </section>
  );
};
