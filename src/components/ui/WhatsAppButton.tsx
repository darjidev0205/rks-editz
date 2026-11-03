import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '919537324164',
  defaultMessage = "Hi Krish, I'm interested in working together on a video project!",
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Contact on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-2.5 px-3.5 py-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl hover:shadow-[#25D366]/25 transition-all duration-300 active:scale-95"
      >
        {/* Official WhatsApp SVG glyph */}
        <div className="w-7 h-7 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full fill-white"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.9 12.04 8.02 12.2C8.14 12.37 9.73 14.83 12.18 15.88C12.76 16.13 13.22 16.28 13.57 16.39C14.16 16.58 14.7 16.55 15.13 16.49C15.61 16.42 16.6 15.89 16.81 15.3C17.02 14.71 17.02 14.21 16.96 14.1C16.9 13.99 16.74 13.93 16.49 13.81C16.25 13.68 15.04 13.09 14.81 13.01C14.59 12.92 14.42 12.88 14.26 13.13C14.09 13.37 13.62 13.93 13.48 14.09C13.34 14.26 13.2 14.28 12.95 14.15C12.71 14.03 11.92 13.77 10.99 12.94C10.26 12.29 9.77 11.49 9.63 11.24C9.49 11 9.61 10.87 9.74 10.75C9.85 10.63 9.99 10.45 10.12 10.3C10.24 10.16 10.29 10.05 10.37 9.89C10.45 9.72 10.41 9.58 10.35 9.46C10.29 9.33 9.77 8.07 9.55 7.56C9.34 7.07 9.13 7.13 8.97 7.12C8.82 7.12 8.67 7.12 8.53 7.12V7.33Z" />
          </svg>
        </div>

        {/* Text label on desktop, compact on small screens */}
        <span className="hidden sm:inline font-display text-xs font-bold tracking-wide uppercase text-white pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
