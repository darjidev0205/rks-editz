import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  isPlaying: boolean;
  onPlay: (id: string) => void;
  onPause: () => void;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isPlaying,
  onPlay,
  onPause,
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Synchronize playing state with HTML5 video element
  useEffect(() => {
    if (!videoRef.current || !project.videoUrl) return;

    if (isPlaying) {
      videoRef.current.play().catch(() => {
        // Handle autoplay or interruption cleanly
      });
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, project.videoUrl]);

  // Fallback image if external URL fails
  const fallbackImage =
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop';

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project.videoUrl) return;

    if (isPlaying) {
      onPause();
    } else {
      onPlay(project.id);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const isPortrait = project.aspectRatio === '9/16';

  return (
    <article
      className={`group relative bg-[#202226] rounded-card overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col ${className}`}
    >
      {/* Video & Thumbnail Container */}
      <div
        className={`relative w-full overflow-hidden bg-[#17191C] cursor-pointer ${
          isPortrait ? 'aspect-[9/16]' : 'aspect-video'
        }`}
        onClick={handleTogglePlay}
      >
        {/* Poster Still Image - Remains visible until video is actively playing */}
        <img
          src={imageError ? fallbackImage : project.image}
          alt={project.title}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025] ${
            isPlaying && isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          loading="lazy"
        />

        {/* Real HTML5 Inline Video Element */}
        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            playsInline
            muted={isMuted}
            loop
            preload="metadata"
            onLoadedData={() => setIsLoaded(true)}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => onPause()}
            className={`absolute inset-0 w-full h-full object-cover ${
              isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        )}

        {/* Subtle vignette gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-md bg-[#17191C]/85 backdrop-blur-md text-[10px] font-geist tracking-wider text-[#F4F3EF] border border-white/10 uppercase font-medium">
            {project.badge || project.category}
          </span>

          {/* Mute/Unmute Toggle Button when playing */}
          {isPlaying && (
            <button
              onClick={handleToggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="pointer-events-auto w-8 h-8 rounded-full bg-[#202226]/85 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#F4F3EF] hover:bg-white/20 transition-all"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          )}
        </div>

        {/* Central Minimal Play/Pause Button */}
        {project.videoUrl && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-250 z-10 ${
              isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-90 group-hover:opacity-100'
            }`}
          >
            <button
              onClick={handleTogglePlay}
              aria-label={isPlaying ? `Pause ${project.title}` : `Play ${project.title} video`}
              className="w-12 h-12 rounded-full bg-[#202226]/85 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#F4F3EF] hover:scale-105 active:scale-95 shadow-xl transition-all duration-200"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>
          </div>
        )}

        {/* Scrub progress rail at the bottom when playing */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/15 z-10">
            <div
              className="h-full bg-[#E8E7E3] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Meta Information Bar Below Media */}
      <div className="p-4 sm:p-4.5 bg-[#202226] flex items-center justify-between gap-3 border-t border-white/5">
        <div className="min-w-0">
          <h3 className="font-geist text-sm sm:text-base font-medium text-[#F4F3EF] truncate">
            {project.title}
          </h3>
          <p className="font-inter text-xs text-[#A5A7AA] mt-0.5 truncate">
            {project.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="font-geist text-xs text-[#A5A7AA]">
            {project.year}
          </span>
        </div>
      </div>
    </article>
  );
};
