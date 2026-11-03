import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Instagram, Linkedin, MessageCircle, ArrowUpRight, CheckCircle2, Send, Film, Calendar } from 'lucide-react';
import { useSmoothScroll } from '../ui/SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const sectionRef = useRef<HTMLElement>(null);
  const wideCardsRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (wideCardsRef.current) {
        gsap.fromTo(
          wideCardsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wideCardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const channels = [
    { name: 'Email', icon: Mail, href: 'mailto:krish@rkaeditz.com', detail: 'krish@rkaeditz.com' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/919876543210?text=Hi%20Krish,%20I%20am%20interested%20in%20working%20together', detail: '+91 98765 43210' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', detail: '@rkaeditz' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', detail: 'Krish Patel' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative pt-20 md:pt-28 pb-20 md:pb-28 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1280px] mx-auto border-t border-white/10"
    >
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#A5A7AA] font-medium block mb-2">
          NEXT CHAPTER
        </span>
        <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F4F3EF] uppercase">
          Let's Make Something Matter.
        </h2>
        <p className="font-inter text-xs sm:text-sm text-[#A5A7AA] mt-2">
          Available for select commercial commissions, YouTube creator retainers, and narrative films.
        </p>
      </div>

      {/* TWO HORIZONTALLY WIDE CARDS (Sketch Layout Specification) */}
      <div ref={wideCardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
        {/* Wide Card 1: View Projects & Archive Highlights */}
        <div className="rounded-3xl bg-[#14161A] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F4F3EF] mb-4">
              <Film className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-geist uppercase text-[#A5A7AA] tracking-wider block mb-1">
              PORTFOLIO SHOWCASE
            </span>
            <h3 className="font-geist text-2xl font-semibold text-[#F4F3EF] mb-2">
              Explore All Projects
            </h3>
            <p className="font-inter text-xs sm:text-sm text-[#A5A7AA] leading-relaxed max-w-md">
              Review full commercial spots, 9:16 vertical reels, cinematic color grades, and
              breakdown timelines in the interactive showcase.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/8 flex items-center justify-between relative z-10">
            <span className="text-xs font-geist text-[#A5A7AA]">
              85+ High-Retention Edits
            </span>
            <button
              onClick={() => scrollTo('#showcase', { offset: -20 })}
              className="px-5 py-2.5 rounded-full bg-[#E8E7E3] hover:bg-[#D4D3CF] text-[#111214] font-geist text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all active:scale-95"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Decorative subtle backdrop image */}
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop"
              alt="Decorative film still"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Wide Card 2: Work With Me / Book a Project */}
        <div className="rounded-3xl bg-[#14161A] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F4F3EF] mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-geist uppercase text-[#A5A7AA] tracking-wider block mb-1">
              DIRECT INQUIRY
            </span>
            <h3 className="font-geist text-2xl font-semibold text-[#F4F3EF] mb-2">
              Start a Project
            </h3>
            <p className="font-inter text-xs sm:text-sm text-[#A5A7AA] leading-relaxed max-w-md">
              Send a project brief or schedule a creative consultation to deconstruct your timeline,
              editing scope, and delivery schedule.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/8 flex items-center justify-between relative z-10">
            <span className="text-xs font-geist text-[#A5A7AA]">
              Fast 24h Response
            </span>
            <a
              href="mailto:krish@rkaeditz.com"
              className="px-5 py-2.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 text-[#F4F3EF] font-geist text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all active:scale-95"
            >
              <span>Work With Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* QUICK INQUIRY FORM & DIRECT CHANNELS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Secondary Social & Contact Channels */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3">
          {channels.map((ch) => {
            const Icon = ch.icon;
            return (
              <a
                key={ch.name}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#14161A] hover:bg-[#1A1D22] border border-white/8 hover:border-white/20 transition-all duration-200 group flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between">
                  <Icon className="w-4 h-4 text-[#A5A7AA] group-hover:text-white transition-colors" />
                  <ArrowUpRight className="w-3 h-3 text-[#A5A7AA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <span className="font-geist text-xs text-[#F4F3EF] font-medium mt-1">{ch.name}</span>
                <span className="font-inter text-[11px] text-[#A5A7AA] truncate">{ch.detail}</span>
              </a>
            );
          })}
        </div>

        {/* Right: Inline Fast Brief Submission */}
        <div className="lg:col-span-7">
          <div className="p-6 rounded-2xl bg-[#14161A] border border-white/10 shadow-xl">
            {formSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center justify-center space-y-2.5">
                <CheckCircle2 className="w-9 h-9 text-[#F4F3EF]" />
                <h4 className="font-geist text-base font-medium text-white">Inquiry Received</h4>
                <p className="font-inter text-xs text-[#A5A7AA] max-w-xs">
                  Thank you! Krish will review your brief and reply with timeline options shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="font-geist text-[11px] uppercase tracking-wider text-[#A5A7AA] block mb-1 font-medium">
                      Your Name / Company
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Vance, Studio Apex"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D0E10] border border-white/10 focus:border-[#E8E7E3] text-[#F4F3EF] placeholder-[#A5A7AA]/50 text-xs font-inter outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-geist text-[11px] uppercase tracking-wider text-[#A5A7AA] block mb-1 font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@studioapex.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D0E10] border border-white/10 focus:border-[#E8E7E3] text-[#F4F3EF] placeholder-[#A5A7AA]/50 text-xs font-inter outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="font-geist text-[11px] uppercase tracking-wider text-[#A5A7AA] block mb-1 font-medium">
                    Project Scope & Timeline
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the story, format (9:16 / 16:9), footage status, and deadlines..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D0E10] border border-white/10 focus:border-[#E8E7E3] text-[#F4F3EF] placeholder-[#A5A7AA]/50 text-xs font-inter outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-lg bg-[#E8E7E3] hover:bg-[#D4D3CF] text-[#111214] font-geist text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Project Brief</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
