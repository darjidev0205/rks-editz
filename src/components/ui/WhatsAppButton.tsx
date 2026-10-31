import React, { useState } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '919876543210', // Configurable WhatsApp number
  defaultMessage = 'Hi Krish, I checked out your RKA EDITZ portfolio and would love to discuss a project with you.',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Direct messaging"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
    >
      {/* Tooltip Pill */}
      <div
        className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C2022]/90 backdrop-blur-md border border-white/10 shadow-xl text-xs font-geist text-[#E2E2E5] transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
        <span>Quick Chat on WhatsApp</span>
        <ArrowUpRight className="w-3 h-3 text-[#A3AAA9]" />
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Krish Patel on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#1C2022] hover:bg-[#25292B] border border-white/10 hover:border-[#25D366]/40 shadow-2xl shadow-black/60 transition-all duration-300 active:scale-95"
      >
        {/* Subtle Green Pulse Wave */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping opacity-40 pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-black shadow-inner group-hover:scale-105 transition-transform duration-300">
          <MessageCircle className="w-5 h-5 fill-current text-white stroke-white" />
        </div>

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#101214]"></span>
      </a>
    </aside>
  );
};
