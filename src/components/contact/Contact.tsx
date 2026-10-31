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
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 2. CTA and Channels reveal
      if (ctaContainerRef.current) {
        gsap.fromTo(
          ctaContainerRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
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
      className="relative pt-24 md:pt-36 pb-20 md:pb-28 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1600px] mx-auto border-t border-white/8 bg-[#0C0E10]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Headline and Inquiries */}
        <div ref={headingRef} className="lg:col-span-7">
          <span className="font-geist text-xs uppercase tracking-[0.18em] text-[#C4C7C9] font-medium block mb-3">
            NEXT PROJECT?
          </span>
          <h2 className="font-geist text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#E2E2E5] uppercase leading-[1.08] mb-6">
            Let's Make <br />
            Something <br />
            <span className="text-[#C4D6C6]">Matter.</span>
          </h2>
          <p className="font-inter text-base sm:text-lg text-[#A3AAA9] max-w-lg mb-8 leading-relaxed">
            Have an idea, a story, or a brand that needs better visuals? I take on a limited number
            of editorial and commercial commissions each quarter.
          </p>

          {/* Primary Action Button */}
          <div className="mb-10">
            <a
              href="mailto:krish@rkaeditz.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-[#C4D6C6] hover:bg-[#DCE8DD] text-[#101F15] font-geist font-semibold text-base transition-all duration-300 shadow-xl shadow-[#C4D6C6]/10 active:scale-98"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-5 h-5 font-bold" />
            </a>
          </div>

          {/* Secondary Social & Contact Channels */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {channels.map((ch) => {
              const Icon = ch.icon;
              return (
                <a
                  key={ch.name}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-lg bg-[#1C2022] hover:bg-[#25292B] border border-white/8 hover:border-white/20 transition-all duration-200 group flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-4 h-4 text-[#A3AAA9] group-hover:text-[#C4D6C6] transition-colors" />
                    <ArrowUpRight className="w-3 h-3 text-[#8D928C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="font-geist text-xs text-[#E2E2E5] font-medium mt-1">{ch.name}</span>
                  <span className="font-inter text-[11px] text-[#8D928C] truncate">{ch.detail}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column: Fast Inquiry Quick-Form */}
        <div ref={ctaContainerRef} className="lg:col-span-5 w-full">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#1C2022] border border-white/10 shadow-2xl">
            <h3 className="font-geist text-xl font-semibold text-[#E2E2E5] mb-2">
              Send Direct Brief
            </h3>
            <p className="font-inter text-xs text-[#A3AAA9] mb-6">
              Fill out your project basics and I'll review and respond within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#C4D6C6]" />
                <h4 className="font-geist text-lg font-medium text-white">Inquiry Received</h4>
                <p className="font-inter text-xs text-[#A3AAA9] max-w-xs">
                  Thank you! Krish will get back to you with timeline and treatment options shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="font-geist text-xs uppercase tracking-wider text-[#A3AAA9] block mb-1.5 font-medium">
                    Your Name / Company
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Vance, Studio Apex"
                    className="w-full px-4 py-3 rounded-lg bg-[#121416] border border-white/10 focus:border-[#C4D6C6] text-[#E2E2E5] placeholder-[#8D928C] text-sm font-inter outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-geist text-xs uppercase tracking-wider text-[#A3AAA9] block mb-1.5 font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@studioapex.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#121416] border border-white/10 focus:border-[#C4D6C6] text-[#E2E2E5] placeholder-[#8D928C] text-sm font-inter outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-geist text-xs uppercase tracking-wider text-[#A3AAA9] block mb-1.5 font-medium">
                    Project Details & Scope
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the storyline, deliverables, timeline and visual references..."
                    className="w-full px-4 py-3 rounded-lg bg-[#121416] border border-white/10 focus:border-[#C4D6C6] text-[#E2E2E5] placeholder-[#8D928C] text-sm font-inter outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-[#25292B] hover:bg-[#C4D6C6] text-[#E2E2E5] hover:text-[#101F15] border border-white/10 hover:border-transparent font-geist text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 active:scale-98"
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
