import React, { useState, useEffect } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';
import { MobileMenuDrawer } from './MobileMenuDrawer';
import { BrandLogo } from '../ui/BrandLogo';

interface GlassNavbarProps {
  activeSection: string;
}

const SECTIONS = [
  { id: 'hero', name: 'Hero' },
  { id: 'work', name: 'Selected Work' },
  { id: 'testimonials', name: 'Client Story' },
  { id: 'about', name: 'About' },
  { id: 'services', name: 'Services' },
  { id: 'process', name: 'Process' },
  { id: 'contact', name: 'Contact' },
];

export const GlassNavbar: React.FC<GlassNavbarProps> = ({ activeSection }) => {
  const { scrollTo } = useSmoothScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      scrollTo(el, { offset: -70 });
    }
  };

  const activeIndex = Math.max(0, SECTIONS.findIndex((s) => s.id === activeSection));
  const currentSection = SECTIONS[activeIndex] || SECTIONS[0];
  const TOTAL_FRAMES = SECTIONS.length;

  return (
    <>
      <header
        className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 w-[calc(100%-1.25rem)] sm:w-[calc(100%-2rem)] max-w-5xl rounded-2xl ${
          isScrolled
            ? 'bg-[#F7F6F0]/95 backdrop-blur-xl border border-[#1E3027]/12 shadow-lg shadow-[#1E3027]/5 py-2 sm:py-2.5 px-3.5 sm:px-5 md:px-7'
            : 'bg-[#F7F6F0]/85 backdrop-blur-md border border-[#1E3027]/8 shadow-sm py-2.5 sm:py-3 px-4 sm:px-6 md:px-8'
        }`}
      >
        <div className="flex items-center justify-between w-full min-h-[44px]">
          {/* LEFT: Official Brand Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center group focus:outline-none flex-shrink-0"
            aria-label="RKA EDITZ Home"
          >
            <BrandLogo
              variant="dark"
              size="md"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain group-hover:opacity-80 transition-opacity"
            />
          </button>

          {/* CENTER: RKA Film-Frame Timeline Indicator (Mobile Only, md:hidden)
              Inspired by video-editing timelines: communicates exact position through the 6 editorial frames */}
          <div
            className="flex md:hidden flex-col items-center justify-center pointer-events-none select-none px-1.5"
            aria-label={`Portfolio progress: Frame ${String(activeIndex + 1).padStart(2, '0')} of ${String(TOTAL_FRAMES).padStart(2, '0')}, ${currentSection.name}`}
            role="status"
          >
            {/* Small editorial frame label */}
            <div className="flex items-center gap-1 font-mono text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-[#1E3027] font-semibold leading-tight mb-1">
              <span>FRAME</span>
              <span className="tabular-nums font-bold text-[#1E3027]">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-[#69736B]/50">/</span>
              <span className="tabular-nums text-[#69736B]">
                {String(TOTAL_FRAMES).padStart(2, '0')}
              </span>
            </div>

            {/* Timeline frame segments */}
            <div
              className="flex items-center gap-1 sm:gap-1.5 h-1.5"
              role="progressbar"
              aria-valuenow={activeIndex + 1}
              aria-valuemin={1}
              aria-valuemax={TOTAL_FRAMES}
              aria-valuetext={`Frame ${activeIndex + 1} of ${TOTAL_FRAMES}: ${currentSection.name}`}
            >
              {SECTIONS.map((sec, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <span
                    key={sec.id}
                    className={`h-[4px] rounded-full transition-all duration-300 ease-out ${
                      isActive
                        ? 'w-4 sm:w-5 bg-[#1E3027]'
                        : 'w-2 sm:w-2.5 bg-[#CEDBCC]'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-xl text-xs font-inter tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-[#1E3027] font-semibold bg-[#EDF2E9]'
                      : 'text-[#69736B] hover:text-[#222A25] hover:bg-[#EDF2E9]/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#1E3027] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* RIGHT: Discreet "Let's Talk" CTA (desktop) & Accessible 44x44px Hamburger Menu (mobile) */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#1E3027] hover:bg-[#2A4337] text-white font-display font-medium text-xs tracking-wider transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            {/* Mobile Menu Button - 44x44px accessible touch target */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-[#EDF2E9] text-[#222A25] hover:bg-[#DDE9D7] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#1E3027]/20 cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Menu Drawer */}
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavClick}
      />
    </>
  );
};
