import React from 'react';
import { ArrowUp, ArrowUpRight, Film, Clock, MapPin, Sparkles } from 'lucide-react';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';
import { BrandLogo } from '../ui/BrandLogo';

export const Footer: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    scrollTo('#hero', { offset: 0, duration: 1.2 });
  };

  const navLinks = [
    { label: 'Work', href: '#work', offset: -30 },
    { label: 'Testimonial', href: '#testimonials', offset: -30 },
    { label: 'AI Videos', href: '#ai-videos', offset: -30 },
    { label: 'About', href: '#about', offset: -30 },
    { label: 'Services', href: '#services', offset: -30 },
    { label: 'Process', href: '#process', offset: -30 },
    { label: 'Contact', href: '#contact', offset: -30 },
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com/rkaeditz' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'WhatsApp', href: 'https://wa.me/919537324164' },
    { label: 'Email', href: 'mailto:krish@rkaeditz.com' },
  ];

  return (
    <footer className="relative w-full bg-[#111D16] text-[#F7F6F0] overflow-hidden border-t border-[#1E3027]">
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#1E3027]/40 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#2A4337]/25 blur-[160px] pointer-events-none" />

      {/* Large Low-Contrast Editorial Watermark Typography (Layer B Background) */}
      <div
        aria-hidden="true"
        className="absolute bottom-16 sm:bottom-12 right-0 translate-x-12 select-none pointer-events-none opacity-[0.035] font-display text-[16vw] font-bold leading-none tracking-tighter whitespace-nowrap text-white"
      >
        RKA EDITZ
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-16 sm:pt-24 pb-28 sm:pb-24 flex flex-col gap-14 sm:gap-20">
        {/* ========================================================
            LAYER A — CINEMATIC CLOSING STATEMENT ("THE FINAL FRAME")
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center border-b border-white/10 pb-14 sm:pb-20">
          {/* Left Column: Bold Editorial Outro Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Editorial Eyebrow */}
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[#DDE9D7]/80 font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>RKA EDITZ / END FRAME</span>
            </div>

            {/* Large Typography Closing Statement */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-[#F7F6F0] leading-[1.05] mb-5">
              Your Story. <br />
              <span className="text-[#DDE9D7]">Our Next Frame.</span>
            </h2>

            {/* Subheading */}
            <p className="font-inter text-base sm:text-lg text-[#DDE9D7]/75 max-w-lg leading-relaxed mb-8">
              Let's make something people remember. From rough cut to final master, we build cinematic momentum that lasts.
            </p>

            {/* Refined Contact CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('#contact-form', { offset: -60 })}
                className="group relative px-8 py-4 rounded-full bg-[#F7F6F0] hover:bg-[#DDE9D7] text-[#111D16] font-display text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all duration-300 shadow-xl shadow-black/30 active:scale-95 cursor-pointer"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4 text-[#111D16] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('#work', { offset: -30 })}
                className="px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-[#F7F6F0] font-display text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer"
              >
                Explore Archives
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Cinematic Film Frame / Media Accent (Calm, not marquee) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl shadow-black/50 group">
              {/* Cinematic Letterbox Film Frame Preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop"
                  alt="RKA Editz Studio Master Frame"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.8] contrast-[1.1]"
                />
                {/* Film Frame Overlays: Viewfinder & Timecode HUD */}
                <div className="absolute inset-0 border-[8px] sm:border-[10px] border-black/80 pointer-events-none" />
                <div className="absolute top-4 left-4 font-mono text-[10px] text-white/70 tracking-widest uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>MASTER OUT • 24 FPS</span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white/70 tracking-widest">
                  TC 00:24:18:04
                </div>
                {/* Center crosshair */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                  <div className="w-8 h-8 border border-white/60 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Bottom Film Frame Metadata Bar */}
              <div className="px-5 py-3.5 bg-black/80 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#DDE9D7]/80">
                <div className="flex items-center gap-2">
                  <Film className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold text-white">RKA Studio Standard</span>
                </div>
                <span>4K DCI • REC.709</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            LAYER B — BRAND PRESENCE
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
            <BrandLogo variant="light" size="lg" className="h-9 sm:h-11 w-auto" />
            <div className="hidden sm:block w-[1px] h-8 bg-white/15" />
            <div>
              <span className="font-display text-sm sm:text-base text-[#F7F6F0] font-bold tracking-wide block">
                "Every Frame Matters."
              </span>
              <span className="font-mono text-xs text-[#DDE9D7]/60 block">
                Creative Post-Production &amp; Narrative Video Editing
              </span>
            </div>
          </div>

          {/* Studio Metadata Pills */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#DDE9D7]/75">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ahmedabad, IN • GMT+5:30</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>24–48h Turnaround</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>In-House Sound &amp; Color</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            LAYER C — FUNCTIONAL FOOTER
           ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Navigation Links with refined rhythm */}
          <div className="flex flex-wrap gap-x-6 gap-y-2.5 font-mono text-xs uppercase tracking-wider text-[#DDE9D7]/80">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href, { offset: link.offset })}
                className="hover:text-white transition-colors duration-200 cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#DDE9D7] after:transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-5 font-mono text-xs uppercase tracking-wider text-[#DDE9D7]/80">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group py-1"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Metadata: Dynamic Copyright + Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-8 border-t border-white/10 font-mono text-xs text-[#DDE9D7]/60">
          <p className="max-w-md">
            &copy; {currentYear} RKA EDITZ • KRISH PATEL. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#DDE9D7]/70 hidden sm:inline">
              Back to Top
            </span>
            <button
              onClick={handleBackToTop}
              aria-label="Back to top of page"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all duration-200 active:scale-95 cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
