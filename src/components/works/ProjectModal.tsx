import React, { useEffect, useRef } from 'react';
import { X, Play, Clock, ExternalLink, Volume2, VolumeX } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = React.useState(true);
  const [isPlaying, setIsPlaying] = React.useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0C0E10]/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Stage Container */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-2xl bg-[#1C2022] border border-white/12 shadow-2xl shadow-black/80 flex flex-col animate-in zoom-in-95 duration-300"
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#1C2022]/90 backdrop-blur-md border-b border-white/8">
          <div className="flex items-center gap-3">
            <span className="font-geist text-xs uppercase tracking-widest text-[#C4D6C6] font-semibold">
              {project.category}
            </span>
            <span className="text-white/20">•</span>
            <span className="font-geist text-xs text-[#A3AAA9]">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/15 text-[#C3C8C1] hover:text-white transition-colors active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Player Stage */}
        <div className="relative w-full bg-black aspect-video overflow-hidden flex items-center justify-center group">
          {project.videoPreview ? (
            <>
              <video
                ref={videoRef}
                src={project.videoPreview}
                poster={project.image}
                autoPlay
                playsInline
                loop
                muted={isMuted}
                className="w-full h-full object-cover"
              />

              {/* Player Overlay Controls */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black transition-all"
                >
                  <Play className={`w-4 h-4 ml-0.5 ${isPlaying ? 'opacity-40' : 'opacity-100'}`} />
                </button>
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black transition-all"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}

          {project.duration && (
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-xs font-geist text-white flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C4D6C6]" />
              <span>{project.duration}</span>
            </div>
          )}
        </div>

        {/* Project Details Information */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/8 pb-6">
            <div>
              <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-geist font-semibold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-[#C4C7C9] text-sm mt-1">{project.subtitle}</p>
            </div>
            <div className="font-geist text-xs text-[#8D928C]">
              ROLE: <span className="text-[#C4D6C6] font-medium">{project.role}</span>
            </div>
          </div>

          {/* Synopsis */}
          <div>
            <h3 className="font-geist text-xs uppercase tracking-widest text-[#8D928C] mb-2 font-medium">
              SYNOPSIS & EDITORIAL APPROACH
            </h3>
            <p className="text-[#C3C8C1] font-inter text-sm sm:text-base leading-relaxed">
              {project.synopsis}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-white/8">
            <div className="bg-[#25292B] p-4 rounded-xl border border-white/5">
              <span className="font-geist text-[10px] uppercase tracking-wider text-[#8D928C] block mb-1">
                Client / Production
              </span>
              <span className="font-geist text-sm text-[#E2E2E5] font-medium">{project.client}</span>
            </div>

            <div className="bg-[#25292B] p-4 rounded-xl border border-white/5">
              <span className="font-geist text-[10px] uppercase tracking-wider text-[#8D928C] block mb-1">
                Aspect Ratio / Master
              </span>
              <span className="font-geist text-sm text-[#E2E2E5] font-medium">
                {project.aspectRatio} Native Cinematic
              </span>
            </div>

            <div className="bg-[#25292B] p-4 rounded-xl border border-white/5 sm:col-span-2 md:col-span-1">
              <span className="font-geist text-[10px] uppercase tracking-wider text-[#8D928C] block mb-1">
                Editing Suite & Plugins
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-[#1C2022] text-[10px] font-geist text-[#A3AAA9] border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 flex items-center justify-between">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C4D6C6] hover:bg-[#DCE8DD] text-[#101F15] font-geist font-medium text-xs tracking-wider uppercase transition-colors"
            >
              <span>Inquire About Similar Edit</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
