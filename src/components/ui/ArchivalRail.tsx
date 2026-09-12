'use client';

import React from 'react';

export const ArchivalRail: React.FC = () => {
  return (
    <>
      {/* Desktop Left Rail */}
      <aside
        aria-label="Archival System Index Rail"
        className="hidden lg:flex fixed top-16 left-0 w-12 h-[calc(100vh-4rem)] z-30 bg-obsidian border-r border-border-gothic flex-col justify-between items-center py-6 font-mono text-[10px] text-stone pointer-events-none select-none"
      >
        <div className="writing-vertical-rl rotate-180 tracking-[0.25em] uppercase text-stone flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
          <span>JAIDEEP SINGH {'//'} COMPUTER SCIENCE STUDENT · AI & SOFTWARE DEVELOPER</span>
        </div>

        <div className="writing-vertical-rl rotate-180 tracking-widest text-olive uppercase">
          INDIA {'//'} ARCHIVE_V1
        </div>
      </aside>

      {/* Mobile Top Status Strip */}
      <div className="lg:hidden w-full bg-obsidian border-b border-border-gothic px-6 py-2 font-mono text-[10px] text-stone flex justify-between items-center uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
          <span className="text-bone">JAIDEEP SINGH</span>
        </div>
        <span className="text-olive">[CS STUDENT · AI & SOFTWARE DEVELOPER // INDIA]</span>
      </div>
    </>
  );
};
