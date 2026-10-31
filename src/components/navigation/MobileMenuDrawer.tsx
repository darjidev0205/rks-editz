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

  // Handle escape key & body scroll lock
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
    { id: 'works', label: 'Featured Works', icon: Play },
    { id: 'process', label: 'Creative Process', icon: Activity },
    { id: 'about', label: 'Behind the Edit', icon: User },
    { id: 'contact', label: 'Inquiries', icon: Mail },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-[#0C0E10]/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${
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
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-[340px] bg-[#1A1C1E]/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between p-7 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <h2 className="text-xl font-geist font-semibold tracking-tight text-[#E2E2E5]">
                Krish Patel
              </h2>
              <p className="text-xs font-inter text-[#A3AAA9] mt-0.5">Director & Video Editor</p>
            </div>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#A3AAA9] hover:text-[#C4D6C6] bg-white/5 active:scale-95 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 space-y-2.5">
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
                  className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-lg text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-[#282A2C]/80 text-[#C4D6C6] border border-[#C4D6C6]/30 font-medium'
                      : 'text-[#C3C8C1] hover:bg-[#333537]/40 hover:text-[#C4D6C6]'
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
        <div className="pt-6 border-t border-white/10 font-geist text-xs text-[#8D928C]">
          <span className="tracking-wider block uppercase font-medium">RKA EDITZ • 2024 ARCHIVE</span>
          <span className="text-[11px] text-[#A3AAA9]/70 mt-1 block">
            Ahmedabad • Commercial & Narrative
          </span>
        </div>
      </div>
    </>
  );
};
