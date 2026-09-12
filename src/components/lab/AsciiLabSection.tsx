'use client';

import React, { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DitherHalftoneSurface } from '@/components/ui/DitherHalftoneSurface';
import { DataHeaderBar } from '@/components/ui/DataHeaderBar';
import { AsciiTextArt } from '@/components/ui/AsciiTextArt';
import { ASCII_GLYPH_SET } from '@/lib/ascii-data';

const EXPERIMENT_SIGIL = `
      /\\
     /  \\     +----------------------+
    / /\\ \\    | EXPERIMENT: SIGIL_V1 |
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
  const [ditherDensity, setDitherDensity] = useState(60);

  const handleMutateSigil = () => {
    if (isMutating) return;
    setIsMutating(true);
  
    let count = 0;
    const interval = setInterval(() => {
      count++;
      const mutated = EXPERIMENT_SIGIL.split('')
        .map((char) => {
          if (char === ' ' || char === '\n') return char;
          if (Math.random() < 0.25) {
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
    }, 70);
  };

  return (
    <SectionWrapper id="lab" className="border-b border-border-gothic">
      <SectionHeader
        index="05 // COMPUTATIONAL LAB"
        title="GOTHIC COMPUTATIONAL LAB"
        subtitle="Experiments in ASCII, typography, generative interfaces, and visual computation."
      />

      <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Specimen 01: Dither Halftone Density Sampler */}
        <DitherHalftoneSurface colSpan="col-span-12 lg:col-span-6" className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <DataHeaderBar index="EXPERIMENT_01" title="DITHER HALFTONE SAMPLER" badge="INTERACTIVE" className="mb-4" />

            <p className="font-sans text-sm text-parchment leading-relaxed mb-6">
              Interactive pixel dot density simulator exploring tactile 3D shading and light highlights on dark obsidian surfaces without WebGL dependencies.
            </p>

            {/* Dither Visual Box */}
            <div
              className="w-full h-32 border border-border-gothic flex items-center justify-center transition-all duration-200 mb-6 relative overflow-hidden"
              style={{
                backgroundColor: '#08080A',
                backgroundImage: `radial-gradient(#F0EDE6 ${Math.max(1, ditherDensity / 25)}px, transparent 1px)`,
                backgroundSize: `${Math.max(4, 20 - ditherDensity / 6)}px ${Math.max(4, 20 - ditherDensity / 6)}px`,
              }}
            >
              <span className="font-mono text-xs text-bone bg-obsidian/90 px-3 py-1 border border-border-gothic z-10 uppercase tracking-widest">
                DENSITY: {ditherDensity}%
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-border-gothic/40 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-stone text-[10px] uppercase">MODULATE HALFTONE DENSITY:</span>
            <input
              type="range"
              min="20"
              max="100"
              value={ditherDensity}
              onChange={(e) => setDitherDensity(Number(e.target.value))}
              aria-label="Modulate dither halftone density slider"
              className="w-full sm:w-36 accent-olive bg-obsidian border border-border-gothic"
            />
          </div>
        </DitherHalftoneSurface>

        {/* Specimen 02: Monospaced ASCII Sigil Mutator */}
        <DitherHalftoneSurface colSpan="col-span-12 lg:col-span-6" className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <DataHeaderBar index="EXPERIMENT_02" title="ASCII SIGIL MUTATOR" badge={isMutating ? 'MUTATING' : 'READY'} className="mb-4" />

            <div className="py-4 flex justify-center bg-obsidian/90 border border-border-gothic/70 overflow-x-auto mb-6">
              <AsciiTextArt
                art={sigilArt}
                ariaLabel="Experimental interactive ASCII sigil artwork"
                colorClass={isMutating ? 'text-bone' : 'text-olive'}
                fontSize="text-[10px] sm:text-[12px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border-gothic/40 font-mono text-xs">
            <span className="text-stone text-[10px] uppercase hidden sm:inline">GLYPH RECOMBINATION ENGINE</span>
            <button
              type="button"
              onClick={handleMutateSigil}
              className="text-xs uppercase tracking-wider text-obsidian bg-bone hover:bg-white px-4 py-2 border border-bone transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
            >
              [ TRIGGER MUTATION ⚡ ]
            </button>
          </div>
        </DitherHalftoneSurface>

        {/* Specimen 03: Character Matrix & Micro-Barcode Grid */}
        <DitherHalftoneSurface colSpan="col-span-12" className="p-6 sm:p-8">
          <DataHeaderBar index="EXPERIMENT_03" title="TYPOGRAPHIC MATRIX & ALIGNMENT GRID" badge="JETBRAINS MONO" className="mb-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-serif text-2xl sm:text-3xl text-bone uppercase mb-3">
                MONOSPACED GRID SCHEMATICS
              </h4>
              <p className="font-sans text-sm text-parchment leading-relaxed">
                Precision character alignment ensures exact layout bounds across technical data headers, status badges, and interface grids.
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
        </DitherHalftoneSurface>
      </div>
    </SectionWrapper>
  );
};
