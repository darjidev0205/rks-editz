import React, { useEffect, useRef } from 'react';
import { Play, Activity, User, Mail, X, Layers, ArrowUpRight, MessageSquare } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
  onNavigate,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navItems = [
    { id: 'work', label: 'Selected Work', icon: Play },
    { id: 'testimonials', label: 'Client Stories', icon: MessageSquare },
    { id: 'about', label: 'About RKA', icon: User },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'process', label: 'Creative Process', icon: Activity },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-[#14221B]/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-[320px] bg-[#F7F6F0] border-l border-[#1E3027]/10 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between p-7 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#1E3027]/10">
            <div>
              <BrandLogo variant="dark" size="sm" className="h-7 w-auto mb-1" />
              <p className="text-xs font-inter text-[#69736B]">Creative Post-Production Studio</p>
            </div>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close menu"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#69736B] hover:text-[#222A25] bg-[#EDF2E9] active:scale-95 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all ${
                    isActive
                      ? 'bg-[#EDF2E9] text-[#1E3027] font-semibold border border-[#DDE9D7]'
                      : 'text-[#222A25] hover:bg-[#EDF2E9]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-[#69736B]" />
                    <span className="font-display text-sm tracking-wide">{item.label}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#69736B]" />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Info inside drawer */}
        <div className="pt-6 border-t border-[#1E3027]/10">
          <p className="text-xs font-mono text-[#69736B]">Ahmedabad, IN</p>
          <a
            href="mailto:krish@rkaeditz.com"
            className="text-xs font-display font-medium text-[#1E3027] hover:underline mt-1 block"
          >
            krish@rkaeditz.com
          </a>
        </div>
      </div>
    </>
  );
};
