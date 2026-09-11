'use client';

import React, { useState } from 'react';
import { AsciiTextArt } from '@/components/ui/AsciiTextArt';
import { HERO_ASCII_MONOLITH, ASCII_GLYPH_SET } from '@/lib/ascii-data';

interface HeroAsciiCanvasProps {
  className?: string;
}

export const HeroAsciiCanvas: React.FC<HeroAsciiCanvasProps> = ({ className }) => {
  const [displayArt, setDisplayArt] = useState(HERO_ASCII_MONOLITH);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Subtle, temporary character scramble on hover
    let count = 0;
    const interval = setInterval(() => {
      count++;
      const scrambled = HERO_ASCII_MONOLITH.split('')
        .map((char) => {
          if (char === ' ' || char === '\n') return char;
          if (Math.random() < 0.15) {
            return ASCII_GLYPH_SET[Math.floor(Math.random() * ASCII_GLYPH_SET.length)];
          }
          return char;
        })
        .join('');

      setDisplayArt(scrambled);

      if (count >= 4) {
        clearInterval(interval);
        setDisplayArt(HERO_ASCII_MONOLITH);
      }
    }, 60);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setDisplayArt(HERO_ASCII_MONOLITH);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full flex flex-col justify-between items-center p-6 bg-charcoal/60 border border-border-gothic transition-colors duration-300 ${
        isHovered ? 'border-border-accent bg-elevated/40' : ''
      } ${className || ''}`}
    >
      <div className="w-full flex justify-between items-center font-mono text-[10px] text-stone mb-4 pb-2 border-b border-border-gothic">
        <span>[ASCII_MONOLITH]</span>
        <span className="text-olive">{isHovered ? 'STATUS: ACTIVE' : 'STATUS: READY'}</span>
      </div>

      <div className="my-auto overflow-x-auto max-w-full py-4 flex justify-center">
        <AsciiTextArt
          art={displayArt}
          ariaLabel="Computational ASCII Sigil Monolith for Jaideep Singh"
          colorClass={isHovered ? 'text-bone' : 'text-stone'}
          fontSize="text-[9px] sm:text-[11px] md:text-[12px]"
        />
      </div>

      <div className="w-full pt-3 border-t border-border-gothic flex justify-between items-center font-mono text-[10px] text-stone">
        <span>[ SOFTWARE / AI / SYSTEMS ]</span>
        <span>RES: 40x24</span>
      </div>
    </div>
  );
};
