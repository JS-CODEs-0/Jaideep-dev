'use client';

import React, { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BentoCard } from '@/components/ui/BentoCard';
import { AsciiTextArt } from '@/components/ui/AsciiTextArt';
import { ASCII_GLYPH_SET } from '@/lib/ascii-data';

const EXPERIMENT_SIGIL = `
      /\\
     /  \\     +----------------------+
    / /\\ \\    | ARCHIVAL LABORATORY  |
   / /  \\ \\   | GOTHIC COMPUTATION   |
  / /____\\ \\  +----------------------+
 /________\\ \\ | MATRIX DENSITY: 100% |
    ||  ||    +----------------------+
    ||  ||    | GLYPH MUTATION: READY|
    ||__||    +----------------------+
`;

const TYPO_MATRIX = `
0101010101010101010101010101010101
+---+---+---+---+---+---+---+---+
| G | O | T | H | I | C | _ |   |
+---+---+---+---+---+---+---+---+
| A | R | C | H | I | V | E | ! |
+---+---+---+---+---+---+---+---+
#################################
`;

export const AsciiLabSection: React.FC = () => {
  const [sigilArt, setSigilArt] = useState(EXPERIMENT_SIGIL);
  const [isMutating, setIsMutating] = useState(false);

  const handleMutateSigil = () => {
    if (isMutating) return;
    setIsMutating(true);

    let count = 0;
    const interval = setInterval(() => {
      count++;
      const mutated = EXPERIMENT_SIGIL.split('')
        .map((char) => {
          if (char === ' ' || char === '\n') return char;
          if (Math.random() < 0.2) {
            return ASCII_GLYPH_SET[Math.floor(Math.random() * ASCII_GLYPH_SET.length)];
          }
          return char;
        })
        .join('');

      setSigilArt(mutated);

      if (count >= 5) {
        clearInterval(interval);
        setSigilArt(EXPERIMENT_SIGIL);
        setIsMutating(false);
      }
    }, 80);
  };

  return (
    <SectionWrapper id="lab" className="border-b border-border-gothic">
      <SectionHeader
        index="05 // ASCII & PIXEL LAB"
        title="EXPERIMENTAL ARCHIVE"
        subtitle="Monospaced visual studies, dither density samplers, and character matrix lab."
      />

      <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Lab Card 1: Sigil Monolith */}
        <BentoCard colSpan="col-span-12 lg:col-span-7" className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-stone mb-4 pb-3 border-b border-border-gothic/50">
              <span>[ EXP_01 // SIGIL_MUTATOR ]</span>
              <span className="text-olive">{isMutating ? 'MUTATING...' : 'READY'}</span>
            </div>

            <div className="py-6 flex justify-center bg-obsidian/80 border border-border-gothic/60 overflow-x-auto mb-6">
              <AsciiTextArt
                art={sigilArt}
                ariaLabel="Experimental interactive ASCII sigil artwork"
                colorClass={isMutating ? 'text-bone' : 'text-olive'}
                fontSize="text-[10px] sm:text-[12px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border-gothic/40 font-mono text-xs">
            <span className="text-stone text-[10px] uppercase hidden sm:inline">INTERACTIVE GLYPH SAMPLER</span>
            <button
              type="button"
              onClick={handleMutateSigil}
              className="text-xs uppercase tracking-wider text-obsidian bg-bone hover:bg-white px-4 py-2 border border-bone transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
            >
              [ TRIGGER MUTATION ⚡ ]
            </button>
          </div>
        </BentoCard>

        {/* Lab Card 2: Dither Density Sampler */}
        <BentoCard colSpan="col-span-12 lg:col-span-5" className="p-6 sm:p-8 bg-dither flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-stone mb-4 pb-3 border-b border-border-gothic/50">
              <span>[ EXP_02 // DITHER_TEXTURE ]</span>
              <span className="text-olive">SVG PATTERN</span>
            </div>

            <h4 className="font-serif text-3xl text-bone uppercase mb-3">
              PIXEL DITHER GRID
            </h4>

            <p className="font-sans text-sm text-parchment leading-relaxed mb-6">
              Lightweight SVG dither noise pattern overlaid on charcoal elevated surfaces, creating retro-technical depth without GPU overhead.
            </p>
          </div>

          <div className="font-mono text-xs text-stone pt-4 border-t border-border-gothic/40 flex justify-between">
            <span>RES: 4x4 PX PATTERN</span>
            <span className="text-olive">ZERO WEBGL</span>
          </div>
        </BentoCard>

        {/* Lab Card 3: Monospaced Alignment Grid */}
        <BentoCard colSpan="col-span-12" className="p-6 sm:p-8">
          <div className="flex items-center justify-between font-mono text-xs text-stone mb-4 pb-3 border-b border-border-gothic/50">
            <span>[ EXP_03 // TYPOGRAPHIC_MATRIX ]</span>
            <span className="text-olive">JETBRAINS MONO</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-serif text-2xl sm:text-3xl text-bone uppercase mb-3">
                CHARACTER ALIGNMENT & SYMBOL DENSITY
              </h4>
              <p className="font-sans text-sm text-parchment leading-relaxed">
                Precision mono-spacing ensures exact grid alignment across high-density technical metadata, ASCII schematics, and border frames.
              </p>
            </div>

            <div className="p-4 bg-obsidian border border-border-gothic flex justify-center overflow-x-auto">
              <AsciiTextArt
                art={TYPO_MATRIX}
                ariaLabel="Monospaced alignment grid demonstration"
                colorClass="text-stone"
                fontSize="text-[11px]"
              />
            </div>
          </div>
        </BentoCard>
      </div>
    </SectionWrapper>
  );
};
