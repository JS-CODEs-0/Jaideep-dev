'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DitherHalftoneSurface } from '@/components/ui/DitherHalftoneSurface';
import { DataHeaderBar } from '@/components/ui/DataHeaderBar';

interface BuildArchiveEntry {
  index: string;
  title: string;
  category: string;
  scope: string;
  status: string;
  summary: string;
  deliverables: string[];
}

const ARCHIVE_ENTRIES: BuildArchiveEntry[] = [
  {
    index: '01',
    title: 'POLAREMS ENERGY SYSTEM ARCHITECTURE',
    category: 'SYSTEMS & AI BUILD',
    scope: 'Microgrid Energy Management & Async Backend',
    status: 'VERIFIED REPO',
    summary:
      'Engineered an asynchronous backend system for polar microgrids pairing FastAPI, SQLAlchemy 2.0 AsyncIO, PostgreSQL 15, and scikit-learn forecasting models.',
    deliverables: [
      'Developed 11 functional REST API domain modules covering telemetry, forecasting, dispatch optimization, and digital-twin simulation.',
      'Validated end-to-end API and database reliability using Pytest-AsyncIO across 670+ automated test cases.',
      'Containerized database environment using Docker Compose and managed schemas with Alembic migrations.',
    ],
  },
  {
    index: '02',
    title: 'SK YOGA DIGITAL PLATFORM',
    category: 'WEB DEVELOPMENT BUILD',
    scope: 'Responsive Web Application & Video Media Integration',
    status: 'DEPLOYED REPO',
    summary:
      'Built a responsive web application for SK Yoga Classes in Jodhpur, featuring HTML5 video intro, studio value showcases, class schedules, and WhatsApp direct links.',
    deliverables: [
      'Implemented clean HTML5, custom CSS styling, and responsive layout across mobile and desktop breakpoints.',
      'Constructed custom full-screen intro video overlay with user bypass controls and media optimization.',
      'Integrated direct WhatsApp communication channels for client inquiry handling.',
    ],
  },
  {
    index: '03',
    title: 'EDITOR MOHIT PORTFOLIO SHOWCASE',
    category: 'WEB DEVELOPMENT BUILD',
    scope: 'High-Impact Editorial & Video Portfolio Site',
    status: 'DEPLOYED REPO',
    summary:
      'Engineered a visual-first portfolio showcase site for cinematic video editor Mohit Motwani, featuring HTML5 background video loopers and interactive service matrices.',
    deliverables: [
      'Built dynamic background video wrappers with custom dark overlays to enforce high text contrast.',
      'Created custom cursor tracking effects, scroll reveal animations, and video project cards.',
      'Structured interactive service cards, skills indicators, and client hire triggers.',
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="archive" className="relative border-b border-border-gothic overflow-hidden bg-obsidian">
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
            src="/images/experience-halftone.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover object-center opacity-35 mix-blend-screen filter contrast-125 brightness-110"
          />
          {/* Vignette Masks to ensure text legibility while displaying background artwork */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/75 via-obsidian/45 to-obsidian/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-transparent to-obsidian/50" />
        </div>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <SectionHeader
          index="04 // BUILD ARCHIVE"
          title="BUILD ARCHIVE"
          subtitle="Selected personal projects, experiments, and engineering builds."
        />

        <div className="space-y-6">
          {ARCHIVE_ENTRIES.map((entry) => (
            <DitherHalftoneSurface key={entry.index} className="p-6 sm:p-8">
              <DataHeaderBar
                index={`${entry.index} // ${entry.category}`}
                badge={entry.status}
                className="mb-4"
              />

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-bone uppercase mb-3">
                {entry.title}
              </h3>

              <p className="font-sans text-base text-parchment leading-relaxed mb-6 max-w-4xl">
                {entry.summary}
              </p>

              <div className="pt-4 border-t border-border-gothic/40">
                <span className="font-mono text-xs text-stone uppercase tracking-widest block mb-3">
                  KEY TECHNICAL DELIVERABLES:
                </span>
                <ul className="space-y-2 font-sans text-sm text-parchment list-disc list-inside">
                  {entry.deliverables.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </DitherHalftoneSurface>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
