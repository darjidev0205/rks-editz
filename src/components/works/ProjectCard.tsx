import React, { useState, useRef } from 'react';
import { Play, Clock, ArrowUpRight } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  onOpen: (id: string) => void;
  className?: string;
  isPortrait?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpen,
  className = '',
  isPortrait = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.videoPreview) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Autoplay policy or video load handled silently
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const fallbackImage =
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop';

  return (
    <article
      onClick={() => onOpen(project.id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative bg-[#1E2022] rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer flex flex-col ${className}`}
    >
      {/* Media Window */}
      <div
        className={`relative w-full overflow-hidden bg-[#0C0E10] ${
          isPortrait ? 'aspect-[9/14]' : 'aspect-video'
        }`}
      >
        {/* Poster / Still Image */}
        <img
          src={imageError ? fallbackImage : project.image}
          alt={project.title}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isHovered && project.videoPreview ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />

        {/* Hover Silent Video Preview */}
        {project.videoPreview && (
          <video
            ref={videoRef}
            src={project.videoPreview}
            playsInline
            muted
            loop
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0'
            }`}
          />
        )}

        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121416]/90 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {project.badge ? (
            <span className="px-2 py-0.5 rounded bg-[#0C0E10]/80 backdrop-blur-md text-[9px] font-geist tracking-wider text-[#C4D6C6] border border-white/10 uppercase font-medium">
              {project.badge}
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded bg-[#0C0E10]/80 backdrop-blur-md text-[9px] font-geist tracking-wider text-[#A3AAA9] border border-white/10 uppercase">
              {project.category}
            </span>
          )}

          {project.duration && (
            <span className="px-2 py-0.5 rounded bg-[#0C0E10]/80 backdrop-blur-md text-[10px] font-geist text-[#E2E2E5] border border-white/10 flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#C4D6C6]" />
              <span>{project.duration}</span>
            </span>
          )}
        </div>

        {/* Center Play Button on hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-[#0C0E10]/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#C4D6C6] group-hover:scale-110 group-hover:bg-[#C4D6C6] group-hover:text-[#101F15] transition-all duration-300">
            <Play className="w-5 h-5 ml-0.5 fill-current" />
          </div>
        </div>
      </div>

      {/* Meta Bar */}
      <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#1C2022] flex-grow">
        <div className="min-w-0">
          <h3 className="font-geist text-base sm:text-lg font-medium text-[#E2E2E5] group-hover:text-white transition-colors truncate">
            {project.title}
          </h3>
          <p className="font-inter text-xs text-[#A3AAA9] mt-0.5 truncate">
            {project.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="font-geist text-xs text-[#8D928C] hidden sm:inline">
            {project.year}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#A3AAA9] group-hover:text-[#C4D6C6] group-hover:bg-[#C4D6C6]/15 transition-all">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </article>
  );
};
