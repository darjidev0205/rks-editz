import React, { useState } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '919876543210',
  defaultMessage = 'Hi Krish, I checked out your RKA EDITZ portfolio and would love to discuss a project with you.',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Direct inquiry"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
    >
      {/* Monochromatic Tooltip Pill */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#202226]/95 backdrop-blur-md border border-white/12 shadow-xl text-xs font-geist text-[#F4F3EF] transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#F4F3EF] animate-pulse"></span>
        <span>Quick Chat</span>
        <ArrowUpRight className="w-3 h-3 text-[#A5A7AA]" />
      </div>

      {/* Floating Monochromatic Apple-Inspired Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Krish Patel on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#202226] hover:bg-[#292C30] border border-white/15 hover:border-white/30 shadow-2xl shadow-black/80 transition-all duration-200 active:scale-95"
      >
        {/* Subtle monochrome ripple */}
        <span className="absolute -inset-1 rounded-full bg-white/5 animate-ping opacity-30 pointer-events-none"></span>

        {/* Message Icon */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 text-[#F4F3EF] transition-all">
          <MessageCircle className="w-4 h-4 text-[#F4F3EF]" />
        </div>

        {/* Online Indicator Badge */}
        <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-[#E8E7E3] border-2 border-[#0D0E10]"></span>
      </a>
    </aside>
  );
};
