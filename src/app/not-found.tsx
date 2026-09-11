import React from 'react';
import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { CornerMarks } from '@/components/ui/CornerMarks';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-obsidian py-20">
      <SectionWrapper className="max-w-2xl text-center">
        <div className="relative p-8 sm:p-12 bg-charcoal/40 border border-border-gothic">
          <CornerMarks />
          <div className="font-mono text-xs text-olive uppercase tracking-widest mb-4">
            [ ERROR 404 // ARCHIVAL RECORD MISSING ]
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl text-bone uppercase mb-4">
            NULL REFERENCE
          </h1>
          <p className="font-sans text-stone text-base sm:text-lg mb-8 max-w-md mx-auto">
            The requested project or archival record does not exist in this computational repository.
          </p>
          <Link
            href="/"
            className="inline-block font-mono text-xs uppercase tracking-wider text-obsidian bg-bone hover:bg-white px-6 py-3 border border-bone transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
          >
            [ RETURN TO INDEX ]
          </Link>
        </div>
      </SectionWrapper>
    </main>
  );
}
