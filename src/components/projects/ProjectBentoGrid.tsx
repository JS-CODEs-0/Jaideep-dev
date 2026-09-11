'use client';

import React from 'react';
import { Project } from '@/lib/data/projectsData';
import { ProjectCard } from './ProjectCard';

interface ProjectBentoGridProps {
  projects: Project[];
  onInspect: (project: Project) => void;
}

export const ProjectBentoGrid: React.FC<ProjectBentoGridProps> = ({ projects, onInspect }) => {
  return (
    <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onInspect={onInspect}
        />
      ))}
    </div>
  );
};
