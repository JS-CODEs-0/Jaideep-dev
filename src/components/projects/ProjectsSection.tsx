'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectBentoGrid } from './ProjectBentoGrid';
import { ProjectDetailDrawer } from './ProjectDetailDrawer';
import { PROJECTS_DATA, Project } from '@/lib/data/projectsData';

export const ProjectsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleInspect = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <SectionWrapper id="work" className="relative border-b border-border-gothic overflow-hidden bg-obsidian">
      {/* Layer 2 & 3: Large Monochrome Halftone Artwork Field Covering Full Section */}
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
            src="/images/featured-work-halftone.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover object-center lg:object-right-top opacity-35 mix-blend-screen filter contrast-125 brightness-110"
          />
          {/* Subtle Vignette & Contrast Mask to ensure 100% text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-obsidian/30 w-full lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/60" />
        </div>
      </motion.div>

      {/* Layer 4 & 5: Section Headline, Bento Grid & Controls */}
      <div className="relative z-10">
        <SectionHeader
          index="01 // SELECTED WORK"
          title="FEATURED WORK"
          subtitle="Archival repository of systems, software & intelligent pipelines."
        />

        <ProjectBentoGrid projects={PROJECTS_DATA} onInspect={handleInspect} />

        <ProjectDetailDrawer
          project={selectedProject}
          isOpen={isDrawerOpen}
          onClose={handleCloseDrawer}
        />
      </div>
    </SectionWrapper>
  );
};
