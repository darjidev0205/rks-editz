import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';

export const Footer: React.FC = () => {
  const { scrollTo } = useSmoothScroll();

  const handleBackToTop = () => {
    scrollTo('#hero', { offset: 0, duration: 1.2 });
  };

  return (
    <footer className="w-full bg-[#0D0E10] border-t border-white/10 px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <span className="font-geist text-base sm:text-lg font-semibold text-[#F4F3EF] tracking-tight">
              RKA EDITZ
            </span>
            <span className="text-white/20">•</span>
            <span className="font-geist text-xs text-[#A5A7AA] tracking-wider uppercase">
              BY KRISH PATEL
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="font-geist text-xs text-[#A5A7AA]">
              AHMEDABAD, IN • GMT+5:30
            </span>
            <button
              onClick={handleBackToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-[#A5A7AA] hover:text-[#F4F3EF] transition-colors active:scale-95"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-inter text-xs text-[#A5A7AA]/80">
          <p>© 2024 RKA EDITZ. KRISH PATEL. ALL RIGHTS RESERVED. ARCHIVAL FOOTAGE & COMMERCIAL EDITS.</p>
          <div className="flex gap-4 font-geist text-xs text-[#A5A7AA]">
            <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
