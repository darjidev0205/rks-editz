import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';
import { BrandLogo } from '../ui/BrandLogo';

export const Footer: React.FC = () => {
  const { scrollTo } = useSmoothScroll();

  const handleBackToTop = () => {
    scrollTo('#hero', { offset: 0, duration: 1.2 });
  };

  return (
    <footer className="w-full bg-[#1E3027] text-[#F7F6F0] border-t border-[#1E3027] px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <BrandLogo variant="light" size="md" className="h-8 sm:h-9 w-auto" />
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="font-display text-xs text-[#DDE9D7] font-medium tracking-wide">
              "Every Frame Matters."
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="font-mono text-xs text-[#DDE9D7]/80">
              AHMEDABAD, IN • GMT+5:30
            </span>
            <button
              onClick={handleBackToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors active:scale-95"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-inter text-xs text-[#DDE9D7]/70">
          <p>© 2024 RKA EDITZ. KRISH PATEL. ALL RIGHTS RESERVED. COMMERCIAL &amp; NARRATIVE ARCHIVES.</p>
          <div className="flex flex-wrap gap-5 font-mono text-xs text-[#DDE9D7]/80">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
