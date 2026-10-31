import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS, CATEGORIES, ProjectCategory } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

export const SelectedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  // Pause playback when switching categories
  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setActivePlayingId(null);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Heading subtle entrance
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

      // Refresh ScrollTrigger after gallery renders
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [displayedProjects, activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative pt-16 md:pt-24 pb-20 md:pb-28 px-4 sm:px-6 md:px-8 max-w-[1280px] mx-auto border-t border-white/10"
    >
      {/* Section Header */}
      <div ref={headingRef} className="mb-8 md:mb-10 max-w-2xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#A5A7AA] font-medium">
            PORTFOLIO
          </span>
        </div>
        <h2 className="font-geist text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#F4F3EF]">
          Selected Work.
        </h2>
        <p className="font-inter text-xs sm:text-sm text-[#A5A7AA] mt-1.5 leading-relaxed">
          Different formats. One commitment to the story.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3.5 py-1.5 rounded-full font-geist text-xs tracking-wide whitespace-nowrap transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'bg-[#E8E7E3] text-[#111214] font-medium shadow-sm'
                  : 'bg-[#17191C] text-[#A5A7AA] border border-white/10 hover:text-[#F4F3EF] hover:border-white/20'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Curated Editorial Asymmetric 12-Column Grid (Desktop) & Responsive Mobile */}
      <div ref={galleryRef}>
        {/* DESKTOP LAYOUT (Hidden on mobile) */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 lg:gap-5">
          {/* Row 1: 7 cols Landscape + 5 cols Portrait */}
          {displayedProjects[0] && (
            <div className="md:col-span-7 flex flex-col justify-end">
              <ProjectCard
                project={displayedProjects[0]}
                isPlaying={activePlayingId === displayedProjects[0].id}
                onPlay={(id) => setActivePlayingId(id)}
                onPause={() => setActivePlayingId(null)}
              />
            </div>
          )}

          {displayedProjects[1] && (
            <div className="md:col-span-5 flex flex-col justify-end">
              <ProjectCard
                project={displayedProjects[1]}
                isPlaying={activePlayingId === displayedProjects[1].id}
                onPlay={(id) => setActivePlayingId(id)}
                onPause={() => setActivePlayingId(null)}
              />
            </div>
          )}

          {/* Row 2: Three project cards (4 cols each = 12 cols) */}
          {displayedProjects.slice(2, 5).map((project) => (
            <div key={project.id} className="md:col-span-4 flex flex-col justify-end">
              <ProjectCard
                project={project}
                isPlaying={activePlayingId === project.id}
                onPlay={(id) => setActivePlayingId(id)}
                onPause={() => setActivePlayingId(null)}
              />
            </div>
          ))}

          {/* Row 3: Two medium project cards (7 cols + 5 cols or 8 cols + 4 cols) */}
          {displayedProjects.slice(5, 7).map((project, idx) => (
            <div
              key={project.id}
              className={`${idx === 0 ? 'md:col-span-7' : 'md:col-span-5'} flex flex-col justify-end`}
            >
              <ProjectCard
                project={project}
                isPlaying={activePlayingId === project.id}
                onPlay={(id) => setActivePlayingId(id)}
                onPause={() => setActivePlayingId(null)}
              />
            </div>
          ))}

          {/* Remaining if showAll is active */}
          {displayedProjects.slice(7).map((project) => (
            <div key={project.id} className="md:col-span-6 flex flex-col justify-end">
              <ProjectCard
                project={project}
                isPlaying={activePlayingId === project.id}
                onPlay={(id) => setActivePlayingId(id)}
                onPause={() => setActivePlayingId(null)}
              />
            </div>
          ))}
        </div>

        {/* MOBILE LAYOUT (<768px): Curated, Compact, No Overflow */}
        <div className="md:hidden space-y-3.5">
          {/* Card 1: Featured Landscape full width */}
          {displayedProjects[0] && (
            <div className="w-full">
              <ProjectCard
                project={displayedProjects[0]}
                isPlaying={activePlayingId === displayedProjects[0].id}
                onPlay={(id) => setActivePlayingId(id)}
                onPause={() => setActivePlayingId(null)}
              />
            </div>
          )}

          {/* Cards 2 & 3: Two portrait reels side by side */}
          {displayedProjects.length > 2 && (
            <div className="grid grid-cols-2 gap-2.5">
              <ProjectCard
                project={displayedProjects[1]}
                isPlaying={activePlayingId === displayedProjects[1].id}
                onPlay={(id) => setActivePlayingId(id)}
                onPause={() => setActivePlayingId(null)}
              />
              <ProjectCard
                project={displayedProjects[2]}
                isPlaying={activePlayingId === displayedProjects[2].id}
                onPlay={(id) => setActivePlayingId(id)}
                onPause={() => setActivePlayingId(null)}
              />
            </div>
          )}

          {/* Card 4: Landscape or next item */}
          {displayedProjects[3] && (
            <div className="w-full">
              <ProjectCard
                project={displayedProjects[3]}
                isPlaying={activePlayingId === displayedProjects[3].id}
                onPlay={(id) => setActivePlayingId(id)}
                onPause={() => setActivePlayingId(null)}
              />
            </div>
          )}

          {/* Cards 5 & 6: Pair or stacked */}
          {displayedProjects.length > 5 ? (
            <div className="grid grid-cols-2 gap-2.5">
              <ProjectCard
                project={displayedProjects[4]}
                isPlaying={activePlayingId === displayedProjects[4].id}
                onPlay={(id) => setActivePlayingId(id)}
                onPause={() => setActivePlayingId(null)}
              />
              <ProjectCard
                project={displayedProjects[5]}
                isPlaying={activePlayingId === displayedProjects[5].id}
                onPlay={(id) => setActivePlayingId(id)}
                onPause={() => setActivePlayingId(null)}
              />
            </div>
          ) : (
            displayedProjects[4] && (
              <div className="w-full">
                <ProjectCard
                  project={displayedProjects[4]}
                  isPlaying={activePlayingId === displayedProjects[4].id}
                  onPlay={(id) => setActivePlayingId(id)}
                  onPause={() => setActivePlayingId(null)}
                />
              </div>
            )
          )}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center border border-dashed border-white/10 rounded-xl">
            <Sparkles className="w-6 h-6 text-[#A5A7AA] mx-auto mb-2" />
            <p className="font-geist text-sm text-[#F4F3EF]">No projects in this category.</p>
            <button
              onClick={() => handleCategoryChange('All')}
              className="mt-2 text-xs font-geist text-[#E8E7E3] underline"
            >
              View all works
            </button>
          </div>
        )}
      </div>

      {/* View All Button */}
      {filteredProjects.length > 6 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg border border-white/12 bg-[#202226] hover:bg-[#292C30] text-[#F4F3EF] font-geist text-xs tracking-wider uppercase transition-all duration-200 active:scale-98"
          >
            <span>{showAll ? 'Show Fewer Projects' : `View All Projects (${filteredProjects.length})`}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F4F3EF]" />
          </button>
        </div>
      )}
    </section>
  );
};
