import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProjectById, PROJECTS_DATA } from '@/lib/data/projectsData';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AsciiTextArt } from '@/components/ui/AsciiTextArt';
import { CornerMarks } from '@/components/ui/CornerMarks';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectById(params.id);
  if (!project) {
    return {
      title: 'Project Not Found // Jaideep Singh',
      description: 'The requested archival project record was not found.',
    };
  }

  return {
    title: `${project.title} — Case Study | Jaideep Singh`,
    description: project.shortDescription,
  };
}

export default function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-obsidian text-bone pt-20 pb-24">
      {/* Breadcrumb Bar */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 mb-8 font-mono text-xs text-stone">
        <div className="flex items-center gap-2 py-3 border-b border-border-gothic">
          <Link href="/" className="hover:text-bone transition-colors focus-visible:outline-none">
            [ INDEX ]
          </Link>
          <span>/</span>
          <Link href="/#work" className="hover:text-bone transition-colors focus-visible:outline-none">
            [ WORK ]
          </Link>
          <span>/</span>
          <span className="text-olive uppercase">[{project.id}]</span>
        </div>
      </div>

      {/* Hero Title Header Section */}
      <SectionWrapper className="py-10 border-b border-border-gothic">
        <div className="relative">
          <CornerMarks />
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 font-mono text-xs text-stone">
            <div className="flex items-center gap-2">
              <span className="text-olive">ARCHIVAL RECORD {'//'}</span>
              <span className="text-parchment uppercase">{project.category}</span>
            </div>
            <div className="px-3 py-1 bg-charcoal border border-border-gothic text-olive uppercase">
              STATUS: {project.status}
            </div>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-bone uppercase mb-4 leading-none">
            {project.title}
          </h1>

          <p className="font-mono text-sm sm:text-base text-stone uppercase tracking-wide max-w-3xl mb-8">
            {project.subtitle}
          </p>

          <p className="font-sans text-lg sm:text-xl text-parchment leading-relaxed max-w-3xl mb-8">
            {project.longDescription || project.shortDescription}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-border-gothic font-mono text-xs">
            <div>
              <span className="text-stone block mb-1 uppercase">ROLE & RESPONSIBILITY</span>
              <span className="text-bone font-medium">{project.role}</span>
            </div>
            <div>
              <span className="text-stone block mb-1 uppercase">PRIMARY TECHNOLOGIES</span>
              <span className="text-bone font-medium">{project.technologies.join(', ')}</span>
            </div>
            <div>
              <span className="text-stone block mb-1 uppercase">CLASSIFICATION</span>
              <span className="text-olive font-medium">{project.category}</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 01: Problem */}
      {project.problem && (
        <SectionWrapper className="py-12 border-b border-border-gothic">
          <SectionHeader
            index="01 // PROBLEM SPECIFICATION"
            title="THE CHALLENGE"
          />
          <p className="font-sans text-base sm:text-lg text-parchment leading-relaxed max-w-4xl">
            {project.problem}
          </p>
        </SectionWrapper>
      )}

      {/* Section 02: Approach */}
      {project.approach && (
        <SectionWrapper className="py-12 border-b border-border-gothic">
          <SectionHeader
            index="02 // ENGINEERING APPROACH"
            title="STRATEGY & METHODOLOGY"
          />
          <p className="font-sans text-base sm:text-lg text-parchment leading-relaxed max-w-4xl">
            {project.approach}
          </p>
        </SectionWrapper>
      )}

      {/* Section 03: Architecture */}
      {((project.architectureComponents && project.architectureComponents.length > 0) || project.asciiDiagram) && (
        <SectionWrapper className="py-12 border-b border-border-gothic">
          <SectionHeader
            index="03 // SYSTEM ARCHITECTURE"
            title="COMPONENT BREAKDOWN"
          />

          {/* ASCII Diagram if available */}
          {project.asciiDiagram && (
            <div className="mb-10 p-6 bg-charcoal/60 border border-border-gothic flex justify-center overflow-x-auto">
              <AsciiTextArt
                art={project.asciiDiagram}
                ariaLabel={`Architecture schematic diagram for ${project.title}`}
                colorClass="text-olive"
                fontSize="text-[11px] sm:text-[13px]"
              />
            </div>
          )}

          {/* Architecture Components */}
          {project.architectureComponents && project.architectureComponents.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.architectureComponents.map((comp) => (
                <div
                  key={comp.layer}
                  className="p-6 bg-charcoal/40 border border-border-gothic font-mono text-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-olive mb-2 pb-2 border-b border-border-gothic/40">
                      <span>{comp.layer}</span>
                      <span className="text-bone uppercase font-semibold">{comp.name}</span>
                    </div>
                    <p className="font-sans text-parchment text-sm leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </SectionWrapper>
      )}

      {/* Section 04: Implementation */}
      {project.implementation && (
        <SectionWrapper className="py-12 border-b border-border-gothic">
          <SectionHeader
            index="04 // IMPLEMENTATION DETAILS"
            title="CORE ENGINEERING"
          />
          <p className="font-sans text-base sm:text-lg text-parchment leading-relaxed max-w-4xl">
            {project.implementation}
          </p>
        </SectionWrapper>
      )}

      {/* Section 05: AI & ML */}
      {project.aiMl && (
        <SectionWrapper className="py-12 border-b border-border-gothic">
          <SectionHeader
            index="05 // INTELLIGENCE & ANALYTICS"
            title="AI & ML ENGINE"
          />
          <p className="font-sans text-base sm:text-lg text-parchment leading-relaxed max-w-4xl">
            {project.aiMl}
          </p>
        </SectionWrapper>
      )}

      {/* Section 06: Engineering Decisions */}
      {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
        <SectionWrapper className="py-12 border-b border-border-gothic">
          <SectionHeader
            index="06 // DECISIONS & TRADEOFFS"
            title="KEY ENGINEERING DECISIONS"
          />
          <div className="grid grid-cols-1 gap-4 max-w-4xl">
            {project.engineeringDecisions.map((dec, idx) => (
              <div
                key={idx}
                className="p-5 bg-charcoal/30 border border-border-gothic font-sans text-base text-parchment flex items-start gap-4"
              >
                <span className="font-mono text-xs text-olive pt-1">[{String(idx + 1).padStart(2, '0')}]</span>
                <p className="leading-relaxed">{dec}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Section 07: Results & Metrics */}
      {((project.results && project.results.length > 0) || (project.metrics && project.metrics.length > 0)) && (
        <SectionWrapper className="py-12 border-b border-border-gothic">
          <SectionHeader
            index="07 // RESULTS & IMPACT"
            title="VERIFIED OUTCOMES"
          />

          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-6 bg-charcoal/50 border border-border-gothic font-mono">
                  <div className="text-3xl sm:text-4xl text-bone mb-1 font-serif">{m.value}</div>
                  <div className="text-xs text-stone uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {project.results && project.results.length > 0 && (
            <ul className="space-y-3 font-sans text-base text-parchment max-w-4xl list-disc list-inside">
              {project.results.map((res, idx) => (
                <li key={idx} className="leading-relaxed">
                  {res}
                </li>
              ))}
            </ul>
          )}
        </SectionWrapper>
      )}

      {/* Section 08: Technology & Links */}
      <SectionWrapper className="py-12">
        <SectionHeader
          index="08 // REPOSITORY & NAVIGATION"
          title="TECHNOLOGY & LINKS"
        />

        <div className="flex flex-wrap items-center justify-between gap-6 pt-4 font-mono text-xs">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="px-3 py-1 bg-charcoal border border-border-gothic text-parchment">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.links && project.links.length > 0 && project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-bone text-obsidian font-semibold hover:bg-white transition-colors"
              >
                [{link.label} ↗]
              </a>
            ))}

            <Link
              href="/#work"
              className="px-5 py-2.5 bg-charcoal text-bone border border-border-gothic hover:border-border-accent transition-colors"
            >
              [ RETURN TO FEATURED WORK ]
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
