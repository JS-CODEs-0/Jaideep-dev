'use client';

import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BentoCard } from '@/components/ui/BentoCard';

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
  return (
    <SectionWrapper id="index" className="border-b border-border-gothic">
      <SectionHeader
        index="03 // TECHNOLOGY INDEX"
        title="TECHNICAL STACK & TOOLING"
        subtitle="Categorized inventory of languages, frameworks, databases, and engineering tools."
      />

      {/* 4-Category Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {TECH_CATEGORIES.map((cat) => (
          <BentoCard key={cat.index} className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-stone mb-4 pb-3 border-b border-border-gothic/50">
                <span className="text-olive">{cat.index} {'//'} CATEGORY</span>
                <span className="uppercase tracking-widest text-parchment">{cat.title}</span>
              </div>

              <p className="font-sans text-sm text-stone mb-6 leading-relaxed">
                {cat.description}
              </p>

              <div className="space-y-3 font-mono text-xs">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-2.5 bg-obsidian/70 border border-border-gothic/60 hover:border-border-gothic transition-colors"
                  >
                    <span className="text-bone font-medium">{item.name}</span>
                    <span className="text-[10px] text-stone uppercase tracking-wider bg-charcoal px-2 py-0.5 border border-border-gothic/40">
                      {item.context}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border-gothic/40 font-mono text-[10px] text-stone flex justify-between">
              <span>ENTRIES: {cat.items.length}</span>
              <span className="text-olive">VERIFIED IN REPO</span>
            </div>
          </BentoCard>
        ))}
      </div>
    </SectionWrapper>
  );
};
