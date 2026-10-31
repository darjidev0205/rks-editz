import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Instagram, Linkedin, MessageCircle, ArrowUpRight, CheckCircle2, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Heading line-by-line reveal
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 2. CTA and Channels reveal
      if (ctaContainerRef.current) {
        gsap.fromTo(
          ctaContainerRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaContainerRef.current,
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
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', detail: '@rkaeditz' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', detail: 'Krish Patel' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/919876543210?text=Hi%20Krish,%20I%20am%20interested%20in%20working%20together', detail: '+91 98765 43210' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative pt-20 md:pt-28 pb-20 md:pb-28 px-4 sm:px-6 md:px-8 max-w-[1280px] mx-auto border-t border-white/10 bg-[#0D0E10]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Headline and Inquiries */}
        <div ref={headingRef} className="lg:col-span-7">
          <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#A5A7AA] font-medium block mb-3">
            NEXT PROJECT?
          </span>
          <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F4F3EF] uppercase leading-[1.08] mb-5">
            Let's Make <br />
            Something <br />
            <span className="text-[#F4F3EF]">Matter.</span>
          </h2>
          <p className="font-inter text-sm sm:text-base text-[#A5A7AA] max-w-lg mb-7 leading-relaxed">
            Have an idea, a story, or a brand that needs better visuals? I take on a limited number
            of editorial and commercial commissions each quarter.
          </p>

          {/* Primary Action Button */}
          <div className="mb-8">
            <a
              href="mailto:krish@rkaeditz.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full bg-[#E8E7E3] hover:bg-[#D4D3CF] text-[#111214] font-geist font-semibold text-sm transition-all duration-200 active:scale-98 shadow-md"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 font-bold" />
            </a>
          </div>

          {/* Secondary Social & Contact Channels */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {channels.map((ch) => {
              const Icon = ch.icon;
              return (
                <a
                  key={ch.name}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#202226] hover:bg-[#292C30] border border-white/10 hover:border-white/20 transition-all duration-200 group flex flex-col gap-1"
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
        </div>

        {/* Right Column: Fast Inquiry Quick-Form */}
        <div ref={ctaContainerRef} className="lg:col-span-5 w-full">
          <div className="p-5 sm:p-7 rounded-card bg-[#202226] border border-white/10 shadow-xl">
            <h3 className="font-geist text-lg font-semibold text-[#F4F3EF] mb-1.5">
              Send Direct Brief
            </h3>
            <p className="font-inter text-xs text-[#A5A7AA] mb-5">
              Fill out your project basics and I'll review and respond within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="py-10 text-center flex flex-col items-center justify-center space-y-2.5">
                <CheckCircle2 className="w-10 h-10 text-[#F4F3EF]" />
                <h4 className="font-geist text-base font-medium text-white">Inquiry Received</h4>
                <p className="font-inter text-xs text-[#A5A7AA] max-w-xs">
                  Thank you! Krish will get back to you with timeline and treatment options shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label htmlFor="name" className="font-geist text-xs uppercase tracking-wider text-[#A5A7AA] block mb-1 font-medium">
                    Your Name / Company
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Vance, Studio Apex"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#17191C] border border-white/10 focus:border-[#E8E7E3] text-[#F4F3EF] placeholder-[#A5A7AA]/60 text-xs font-inter outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-geist text-xs uppercase tracking-wider text-[#A5A7AA] block mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@studioapex.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#17191C] border border-white/10 focus:border-[#E8E7E3] text-[#F4F3EF] placeholder-[#A5A7AA]/60 text-xs font-inter outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-geist text-xs uppercase tracking-wider text-[#A5A7AA] block mb-1 font-medium">
                    Project Details & Scope
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the storyline, deliverables, timeline..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#17191C] border border-white/10 focus:border-[#E8E7E3] text-[#F4F3EF] placeholder-[#A5A7AA]/60 text-xs font-inter outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-lg bg-[#E8E7E3] hover:bg-[#D4D3CF] text-[#111214] font-geist text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
