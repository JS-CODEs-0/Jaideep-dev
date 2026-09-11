'use client';

import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BentoCard } from '@/components/ui/BentoCard';

interface EngineeringArchiveEntry {
  index: string;
  title: string;
  category: string;
  scope: string;
  status: string;
  summary: string;
  deliverables: string[];
}

const ARCHIVE_ENTRIES: EngineeringArchiveEntry[] = [
  {
    index: '01',
    title: 'POLAREMS ENERGY SYSTEM ARCHITECTURE',
    category: 'SYSTEMS & AI INITIATIVE',
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
    title: 'GOTHIC COMPUTATIONAL WEB SYSTEM',
    category: 'CREATIVE COMPUTATION BUILD',
    scope: 'Gothic Digital Archive & Editorial Design System',
    status: 'ACTIVE SYSTEM',
    summary:
      'Designed and implemented a high-density, monospaced personal archive and portfolio platform utilizing Next.js 14, React 18, and Tailwind CSS.',
    deliverables: [
      'Constructed asymmetric Bento grid layout primitives with 1px hairline borders and subtle corner crosshairs.',
      'Implemented accessible, lightweight monospaced ASCII art rendering systems without WebGL overhead.',
      'Enforced strict keyboard accessibility, reduced motion compatibility, and zero-error TypeScript type safety.',
    ],
  },
  {
    index: '03',
    title: 'AGENTIC SYSTEMS & DISTRIBUTED LAB',
    category: 'SYSTEMS RESEARCH PROJECT',
    scope: 'Multi-Agent Orchestration & Event Queue Research',
    status: 'RESEARCH ARCHIVE',
    summary:
      'Explored state-machine execution loops, deterministic agent memory structures, and asynchronous microservice queue architectures.',
    deliverables: [
      'Built multi-step tool invocation schemas with JSON Schema validation and fallback handling.',
      'Investigated transactional message queue patterns for reliable event synchronization across async nodes.',
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <SectionWrapper id="experience" className="border-b border-border-gothic">
      <SectionHeader
        index="04 // ENGINEERING ARCHIVE"
        title="ENGINEERING ARCHIVE"
        subtitle="Archival record of verified engineering projects, system builds, and software initiatives."
      />

      <div className="space-y-6">
        {ARCHIVE_ENTRIES.map((entry) => (
          <BentoCard key={entry.index} className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-border-gothic/50 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="text-olive">{entry.index} {'//'}</span>
                <span className="text-bone uppercase font-semibold">{entry.category}</span>
                <span className="text-stone font-normal hidden sm:inline">|</span>
                <span className="text-stone uppercase hidden sm:inline">{entry.scope}</span>
              </div>
              <span className="self-start md:self-auto text-[10px] tracking-wider px-2.5 py-1 bg-obsidian border border-border-gothic text-olive uppercase">
                [{entry.status}]
              </span>
            </div>

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
          </BentoCard>
        ))}
      </div>
    </SectionWrapper>
  );
};
