'use client';

import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-obsidian border-t border-border-gothic py-8 px-6 lg:px-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Copyright */}
        <div className="text-stone">
          JAIDEEP SINGH © {new Date().getFullYear()} {'//'} ALL RIGHTS RESERVED
        </div>

        {/* Center: Identity & Location */}
        <div className="text-olive text-[11px] tracking-widest uppercase">
          SOFTWARE & AI ENGINEER {'//'} INDIA
        </div>

        {/* Right: Back to top action */}
        <button
          type="button"
          onClick={scrollToTop}
          className="text-parchment hover:text-bone transition-colors uppercase tracking-wider focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent py-1 px-2 border border-transparent hover:border-border-gothic"
          aria-label="Return to top of page"
        >
          [ RETURN TO TOP ▲ ]
        </button>
      </div>
    </footer>
  );
};
