'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DitherHalftoneSurface } from '@/components/ui/DitherHalftoneSurface';
import { DataHeaderBar } from '@/components/ui/DataHeaderBar';
import { CornerMarks } from '@/components/ui/CornerMarks';

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="about" className="relative border-b border-border-gothic overflow-hidden bg-obsidian">
      {/* Background Monochrome Halftone Artwork Layer Stretching Across Full Section */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/about-halftone.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover object-center opacity-35 mix-blend-screen filter contrast-125 brightness-110"
          />
          {/* Subtle Vignette Masks to guarantee 100% text legibility across the full canvas */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-obsidian/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-transparent to-obsidian/50" />
        </div>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <SectionHeader
          index="02 // ABOUT"
          title="ABOUT"
          subtitle="Background, engineering approach, and domain focus."
        />

        {/* Tri-Column Gothic Editorial Floor */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch relative">
          <CornerMarks />

          {/* Column 1: Vertical Index & Architectural Intent (3 cols desktop) */}
          <DitherHalftoneSurface className="col-span-12 lg:col-span-3 p-6 flex flex-col justify-between">
            <div>
              <DataHeaderBar index="01" title="APPROACH" className="mb-4" />
              <h4 className="font-serif text-2xl text-bone uppercase mb-3">
                STRUCTURED & RELIABLE
              </h4>
              <p className="font-sans text-xs text-stone leading-relaxed mb-4">
                Prioritizing clear system architecture, test validation, and responsive interface design over unnecessary complexity.
              </p>
            </div>

            <div className="pt-4 border-t border-border-gothic/50 font-mono text-[10px] text-olive uppercase tracking-widest">
              FOCUS: SOFTWARE & AI
            </div>
          </DitherHalftoneSurface>

          {/* Column 2: Main Display Editorial Statement (5 cols desktop) */}
          <DitherHalftoneSurface className="col-span-12 lg:col-span-5 p-8 flex flex-col justify-between">
            <div>
              <DataHeaderBar index="02" title="OVERVIEW" className="mb-4" />

              <h3 className="font-serif text-3xl sm:text-4xl text-bone uppercase mb-6 leading-snug">
                BUILDING RELIABLE SOFTWARE & INTELLIGENT SYSTEMS.
              </h3>

              <div className="space-y-4 font-sans text-sm sm:text-base text-parchment leading-relaxed">
                <p>
                  I&apos;m a first-year Computer Science student focused on learning by building. I work across software development, AI/ML, backend systems, and modern web applications, using projects to turn what I learn into working systems.
                </p>
                <p>
                  Projects like PolarEMS have taken me into asynchronous backend architecture, energy-management simulation, forecasting, and optimization, while my web builds have given me experience creating responsive digital experiences for real-world businesses.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border-gothic/50 font-mono text-xs text-stone flex justify-between">
              <span>IDENTITY: JAIDEEP SINGH</span>
              <span className="text-olive">LOCATION: INDIA</span>
            </div>
          </DitherHalftoneSurface>

          {/* Column 3: Factual Metadata Data Sheet Cards (4 cols desktop) */}
          <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-6">
            {/* Card: Focus */}
            <DitherHalftoneSurface className="p-6">
              <DataHeaderBar index="01 // DOMAIN FOCUS" className="mb-3" />
              <h4 className="font-serif text-xl text-bone uppercase mb-1">SYSTEMS & AI</h4>
              <p className="font-sans text-xs text-stone leading-relaxed">
                Asynchronous backend APIs, ML forecasting models, telemetry processing, and clean web applications.
              </p>
            </DitherHalftoneSurface>

            {/* Card: Currently */}
            <DitherHalftoneSurface className="p-6">
              <DataHeaderBar index="02 // CURRENT PROJECTS" className="mb-3" />
              <h4 className="font-serif text-xl text-bone uppercase mb-1">POLAREMS & WEB BUILDS</h4>
              <p className="font-sans text-xs text-stone leading-relaxed">
                Developing energy management simulation solvers, async database pipelines, and responsive web platforms.
              </p>
            </DitherHalftoneSurface>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
