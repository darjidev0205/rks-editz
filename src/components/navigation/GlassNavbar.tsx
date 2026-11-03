import React, { useState, useEffect } from 'react';
import { Film, Menu, ArrowUpRight } from 'lucide-react';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';
import { MobileMenuDrawer } from './MobileMenuDrawer';

interface GlassNavbarProps {
  activeSection: string;
}

export const GlassNavbar: React.FC<GlassNavbarProps> = ({ activeSection }) => {
  const { scrollTo } = useSmoothScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'showcase', label: 'Showcase' },
    { id: 'about', label: 'Approach' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      scrollTo(el, { offset: -60 });
    }
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 w-[calc(100%-2rem)] max-w-[358px] md:max-w-4xl rounded-full ${
          isScrolled
            ? 'bg-[#202226]/90 backdrop-blur-xl border border-white/12 shadow-2xl shadow-black/60 py-2 px-4 md:px-6'
            : 'bg-[#202226]/75 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40 py-2.5 px-5 md:px-7'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Brand Monogram */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="RKA EDITZ Home"
          >
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#F4F3EF] group-hover:scale-105 transition-transform">
              <Film className="w-3.5 h-3.5" />
            </div>
            <span className="font-geist font-semibold text-lg tracking-tight text-[#F4F3EF] group-hover:text-white transition-colors">
              RKA<span className="text-[#F4F3EF]">.</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-geist tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-white/15 text-[#F4F3EF] font-medium'
                      : 'text-[#A5A7AA] hover:text-[#F4F3EF] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA / Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8E7E3] hover:bg-[#D4D3CF] text-[#111214] font-geist font-medium text-xs tracking-wider transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-[#A5A7AA] hover:text-[#F4F3EF] active:scale-90 transition-transform"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavClick}
      />
    </>
  );
};
