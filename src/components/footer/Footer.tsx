import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';

export const Footer: React.FC = () => {
  const { scrollTo } = useSmoothScroll();

  const handleBackToTop = () => {
    scrollTo('#hero', { offset: 0, duration: 1.5 });
  };

  return (
    <footer className="w-full bg-[#0C0E10] border-t border-white/8 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 sm:py-14">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/6">
          <div className="flex items-center gap-3">
            <span className="font-geist text-lg sm:text-xl font-semibold text-[#E2E2E5] tracking-tight">
              RKA EDITZ
            </span>
            <span className="text-white/20">•</span>
            <span className="font-geist text-xs text-[#8D928C] tracking-wider uppercase">
              BY KRISH PATEL
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-geist text-xs text-[#8D928C]">
              AHMEDABAD, IN • GMT+5:30
            </span>
            <button
              onClick={handleBackToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#A3AAA9] hover:text-white transition-colors active:scale-95"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-inter text-xs text-[#8D928C]">
          <p>© 2024 RKA EDITZ. KRISH PATEL. ALL RIGHTS RESERVED. ARCHIVAL FOOTAGE & COMMERCIAL EDITS.</p>
          <div className="flex gap-4 font-geist text-xs text-[#8D928C]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#works" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
