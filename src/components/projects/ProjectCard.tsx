'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/lib/data/projectsData';
import { BentoCard } from '@/components/ui/BentoCard';

interface ProjectCardProps {
  project: Project;
  index: number;
  onInspect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onInspect }) => {
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <BentoCard
      className={`${project.bentoSpan} flex flex-col justify-between p-6 sm:p-8 min-h-[360px] group transition-all duration-300`}
    >
      <div>
        {/* Card Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-border-gothic/60 font-mono text-[11px] text-stone">
          <div className="flex items-center gap-2">
            <span className="text-olive">{formattedIndex} {'//'}</span>
            <span className="uppercase tracking-widest text-parchment font-semibold">
              {project.category}
            </span>
          </div>
          <span className="text-[10px] tracking-wider px-2 py-0.5 bg-obsidian border border-border-gothic text-stone uppercase">
            [{project.status}]
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bone uppercase group-hover:text-white transition-colors mb-2 leading-none">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-stone uppercase tracking-wide mb-4">
          {project.subtitle}
        </p>

        {/* Short Description */}
        <p className="font-sans text-sm sm:text-base text-parchment leading-relaxed mb-6 max-w-2xl">
          {project.shortDescription}
        </p>
      </div>

      <div>
        {/* Technology Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] uppercase text-stone bg-obsidian/80 px-2.5 py-1 border border-border-gothic tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Interaction Affordances */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-gothic/40">
          <button
            type="button"
            onClick={() => onInspect(project)}
            className="font-mono text-xs uppercase tracking-wider text-obsidian bg-bone hover:bg-white px-4 py-2 border border-bone transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
          >
            [ INSPECT ARCHITECTURE ]
          </button>

          <Link
            href={`/work/${project.id}`}
            className="font-mono text-xs uppercase tracking-wider text-bone bg-charcoal hover:bg-elevated hover:border-border-accent px-4 py-2 border border-border-gothic transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent flex items-center gap-1"
          >
            <span>[ CASE STUDY</span>
            <span className="text-olive">↗ ]</span>
          </Link>
        </div>
      </div>
    </BentoCard>
  );
};
