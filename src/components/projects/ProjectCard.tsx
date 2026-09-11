'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/lib/data/projectsData';
import { DitherHalftoneSurface } from '@/components/ui/DitherHalftoneSurface';
import { DataHeaderBar } from '@/components/ui/DataHeaderBar';
import { AsciiTextArt } from '@/components/ui/AsciiTextArt';

interface ProjectCardProps {
  project: Project;
  index: number;
  onInspect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onInspect }) => {
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <DitherHalftoneSurface
      className={`${project.bentoSpan} flex flex-col justify-between p-6 sm:p-8 min-h-[380px] group transition-all duration-300 hover:border-border-accent`}
    >
      <div>
        {/* Data Header Toolbar (Ref 5 Data Sheet Style) */}
        <DataHeaderBar
          index={`${formattedIndex} // ${project.category}`}
          badge={project.status}
          className="mb-4"
        />

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

        {/* Integrated ASCII Architecture Schematic for PolarEMS (Ref 5 Style) */}
        {project.asciiDiagram && (
          <div className="mb-6 p-3 bg-obsidian/90 border border-border-gothic/80 overflow-x-auto flex justify-center">
            <AsciiTextArt
              art={project.asciiDiagram}
              ariaLabel={`Architecture data flow diagram for ${project.title}`}
              colorClass="text-olive"
              fontSize="text-[9px] sm:text-[10px]"
            />
          </div>
        )}
      </div>

      <div>
        {/* Technology Pills (Bracketed Data Sheet Tags) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] uppercase text-stone bg-obsidian px-2.5 py-1 border border-border-gothic tracking-wider"
            >
              [{tech}]
            </span>
          ))}
        </div>

        {/* Action Triggers */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-gothic/50">
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
    </DitherHalftoneSurface>
  );
};
