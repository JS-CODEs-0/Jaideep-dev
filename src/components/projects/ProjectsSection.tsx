'use client';

import React, { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectBentoGrid } from './ProjectBentoGrid';
import { ProjectDetailDrawer } from './ProjectDetailDrawer';
import { PROJECTS_DATA, Project } from '@/lib/data/projectsData';

export const ProjectsSection: React.FC = () => {
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
    <SectionWrapper id="work" className="border-b border-border-gothic">
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
    </SectionWrapper>
  );
};
