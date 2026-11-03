import React, { useEffect, useRef } from 'react';
import { Play, Activity, User, Mail, X } from 'lucide-react';

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
    { id: 'showcase', label: 'Portfolio Showcase', icon: Play },
    { id: 'about', label: 'About & Approach', icon: User },
    { id: 'services', label: 'Services', icon: Activity },
    { id: 'contact', label: 'Inquiries', icon: Mail },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-[#0D0E10]/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${
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
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-[320px] bg-[#17191C]/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between p-6 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <h2 className="text-lg font-geist font-semibold tracking-tight text-[#F4F3EF]">
                Krish Patel
              </h2>
              <p className="text-xs font-inter text-[#A5A7AA] mt-0.5">Director & Video Editor</p>
            </div>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close menu"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#A5A7AA] hover:text-[#F4F3EF] bg-white/5 active:scale-95 transition-colors"
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
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-white/10 text-[#F4F3EF] border border-white/20 font-medium'
                      : 'text-[#A5A7AA] hover:bg-white/5 hover:text-[#F4F3EF]'
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-80" />
                  <span className="font-geist text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Meta */}
        <div className="pt-6 border-t border-white/10 font-geist text-xs text-[#A5A7AA]">
          <span className="tracking-wider block uppercase font-medium">RKA EDITZ • ARCHIVE</span>
          <span className="text-[11px] text-[#A5A7AA]/70 mt-1 block">
            Ahmedabad • Commercial & Narrative
          </span>
        </div>
      </div>
    </>
  );
};
