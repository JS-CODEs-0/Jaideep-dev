'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DitherHalftoneSurface } from '@/components/ui/DitherHalftoneSurface';
import { DataHeaderBar } from '@/components/ui/DataHeaderBar';

interface TechCategory {
  index: string;
  title: string;
  description: string;
  items: { name: string; context: string }[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    index: '01',
    title: 'AI & ML',
    description: 'Scikit-learn models, telemetry pattern analysis, load forecasting, and evaluation heuristics.',
    items: [
      { name: 'Python 3.11', context: 'Primary Language' },
      { name: 'scikit-learn', context: 'ML Forecasting & Anomaly' },
      { name: 'numpy', context: 'Numerical Computation' },
      { name: 'Pydantic v2', context: 'Schema Validation' },
      { name: 'Pattern Evaluation', context: 'Rule-based Heuristics' },
    ],
  },
  {
    index: '02',
    title: 'FULLSTACK & SYSTEMS',
    description: 'Asynchronous API servers, relational databases, ORMs, and telemetry stream architecture.',
    items: [
      { name: 'FastAPI', context: 'Async Web Framework' },
      { name: 'PostgreSQL 15', context: 'Relational Database' },
      { name: 'SQLAlchemy 2.0', context: 'AsyncIO ORM Core' },
      { name: 'asyncpg', context: 'Async DB Driver' },
      { name: 'Alembic', context: 'Schema Migrations' },
      { name: 'Node.js', context: 'JS Runtime Engine' },
      { name: 'REST APIs', context: 'Structured Endpoints' },
    ],
  },
  {
    index: '03',
    title: 'CREATIVE WEB & COMPUTATION',
    description: 'Type-safe frontend design systems, monospaced ASCII renderers, and editorial web applications.',
    items: [
      { name: 'TypeScript', context: 'Strict Type System' },
      { name: 'React 18', context: 'Component Architecture' },
      { name: 'Next.js 14', context: 'App Router Framework' },
      { name: 'Tailwind CSS', context: 'Utility Design Tokens' },
      { name: 'Framer Motion', context: 'Restrained Animation' },
      { name: 'Lenis', context: 'Smooth Scroll Core' },
      { name: 'ASCII Art System', context: 'Lightweight Renderer' },
    ],
  },
  {
    index: '04',
    title: 'DEVOPS & TOOLING',
    description: 'Containerization, automated testing frameworks, linting, and development workflows.',
    items: [
      { name: 'Docker', context: 'Container Runtime' },
      { name: 'Docker Compose', context: 'Multi-Container Stack' },
      { name: 'Git', context: 'Version Control' },
      { name: 'Pytest & HTTPX', context: 'Async Test Automation' },
      { name: 'ESLint & tsc', context: 'Static Code Checks' },
      { name: 'PowerShell / Bash', context: 'System Scripting' },
    ],
  },
];

export const TechnologyIndexSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="index" className="relative border-b border-border-gothic overflow-hidden bg-obsidian">
      {/* Background Gothic Cathedral Halftone Artwork Layer */}
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
            src="/images/tech-index-halftone.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover object-center lg:object-right opacity-35 mix-blend-screen filter contrast-125 brightness-110"
          />
          {/* Contrast Masks for WCAG AAA text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/75 via-obsidian/50 to-obsidian/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-transparent to-obsidian/50" />
        </div>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <SectionHeader
          index="03 // TECHNOLOGY INDEX"
          title="TECHNICAL STACK & TOOLING"
          subtitle="Categorized inventory of languages, frameworks, databases, and engineering tools."
        />

        {/* 4-Category Data Sheet Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {TECH_CATEGORIES.map((cat) => (
            <DitherHalftoneSurface key={cat.index} className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <DataHeaderBar
                  index={`${cat.index} // ${cat.title}`}
                  badge="VERIFIED"
                  className="mb-4"
                />

                <p className="font-sans text-sm text-stone mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-3 font-mono text-xs">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-2.5 bg-obsidian border border-border-gothic/70 hover:border-border-accent transition-colors"
                    >
                      <span className="text-bone font-medium">[{item.name}]</span>
                      <span className="text-[10px] text-stone uppercase tracking-wider bg-charcoal px-2 py-0.5 border border-border-gothic/40">
                        {item.context}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border-gothic/40 font-mono text-[10px] text-stone flex justify-between">
                <span>ENTRIES: {cat.items.length}</span>
                <span className="text-olive">REPO VERIFIED</span>
              </div>
            </DitherHalftoneSurface>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
