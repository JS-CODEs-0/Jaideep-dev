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

        {/* Center: Social & Direct Links */}
        <div className="flex flex-wrap justify-center items-center gap-3 text-[11px] tracking-wider uppercase text-stone">
          <a
            href="mailto:jaideepsingh2878@gmail.com"
            className="hover:text-bone transition-colors"
          >
            [ EMAIL ]
          </a>
          <span className="text-border-gothic">/</span>
          <a
            href="https://github.com/JS-CODEs-0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bone transition-colors"
          >
            [ GITHUB ]
          </a>
          <span className="text-border-gothic">/</span>
          <a
            href="https://www.linkedin.com/in/jaideep-singh-6a54bb436"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bone transition-colors"
          >
            [ LINKEDIN ]
          </a>
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
