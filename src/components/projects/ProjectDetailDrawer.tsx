'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Project } from '@/lib/data/projectsData';
import { AsciiTextArt } from '@/components/ui/AsciiTextArt';

interface ProjectDetailDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailDrawer: React.FC<ProjectDetailDrawerProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Auto focus close button for accessibility
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm z-40 cursor-pointer"
            aria-hidden="true"
          />

          {/* Drawer Slide-over Panel */}
          <motion.div
            initial={{ x: shouldReduceMotion ? 0 : '100%', opacity: shouldReduceMotion ? 0 : 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: shouldReduceMotion ? 0 : '100%', opacity: shouldReduceMotion ? 0 : 1 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl bg-obsidian border-l border-border-gothic shadow-2xl flex flex-col justify-between"
          >
            {/* Header Sticky Bar */}
            <div className="flex items-center justify-between p-6 border-b border-border-gothic bg-charcoal/80 backdrop-blur-sm font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-olive">ARCHIVAL INSPECTION {'//'}</span>
                <span className="text-stone uppercase tracking-wider">[{project.category}]</span>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="text-bone hover:text-white bg-obsidian border border-border-gothic hover:border-border-accent px-3 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent uppercase tracking-wider"
                aria-label="Close project inspection drawer"
              >
                [ CLOSE ✕ ]
              </button>
            </div>

            {/* Scrollable Drawer Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 font-sans">
              {/* Title Section */}
              <div>
                <div className="font-mono text-xs text-olive uppercase tracking-widest mb-1">
                  STATUS: {project.status}
                </div>
                <h2 id="drawer-title" className="font-serif text-4xl sm:text-5xl text-bone uppercase mb-2">
                  {project.title}
                </h2>
                <p className="font-mono text-sm text-stone uppercase tracking-wide">
                  {project.subtitle}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-mono text-xs text-stone uppercase tracking-widest mb-3 pb-1 border-b border-border-gothic/50">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs uppercase text-bone bg-charcoal px-3 py-1 border border-border-gothic"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Summary / Problem */}
              {project.problem && (
                <div>
                  <h4 className="font-mono text-xs text-stone uppercase tracking-widest mb-3 pb-1 border-b border-border-gothic/50">
                    PROBLEM SPECIFICATION
                  </h4>
                  <p className="text-parchment leading-relaxed text-sm sm:text-base">
                    {project.problem}
                  </p>
                </div>
              )}

              {/* Approach */}
              {project.approach && (
                <div>
                  <h4 className="font-mono text-xs text-stone uppercase tracking-widest mb-3 pb-1 border-b border-border-gothic/50">
                    ENGINEERING APPROACH
                  </h4>
                  <p className="text-parchment leading-relaxed text-sm sm:text-base">
                    {project.approach}
                  </p>
                </div>
              )}

              {/* Architecture Components */}
              {project.architectureComponents && project.architectureComponents.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs text-stone uppercase tracking-widest mb-3 pb-1 border-b border-border-gothic/50">
                    SYSTEM ARCHITECTURE BREAKDOWN
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {project.architectureComponents.map((comp) => (
                      <div
                        key={comp.layer}
                        className="p-4 bg-charcoal/40 border border-border-gothic font-mono text-xs"
                      >
                        <div className="flex items-center justify-between text-olive mb-1">
                          <span>{comp.layer}</span>
                          <span className="text-bone uppercase">{comp.name}</span>
                        </div>
                        <p className="font-sans text-stone text-xs leading-relaxed">
                          {comp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ASCII Architecture Diagram */}
              {project.asciiDiagram && (
                <div>
                  <h4 className="font-mono text-xs text-stone uppercase tracking-widest mb-3 pb-1 border-b border-border-gothic/50">
                    ASCII DATA FLOW SCHEMATIC
                  </h4>
                  <div className="p-4 bg-obsidian border border-border-gothic overflow-x-auto flex justify-center">
                    <AsciiTextArt
                      art={project.asciiDiagram}
                      ariaLabel={`ASCII architecture flow diagram for ${project.title}`}
                      colorClass="text-olive"
                      fontSize="text-[10px] sm:text-[11px]"
                    />
                  </div>
                </div>
              )}

              {/* Engineering Decisions */}
              {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs text-stone uppercase tracking-widest mb-3 pb-1 border-b border-border-gothic/50">
                    KEY ENGINEERING DECISIONS
                  </h4>
                  <ul className="space-y-2 font-sans text-sm text-parchment list-disc list-inside">
                    {project.engineeringDecisions.map((dec, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {dec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Bottom Footer Actions */}
            <div className="p-6 border-t border-border-gothic bg-charcoal/80 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center uppercase tracking-wider text-obsidian bg-bone hover:bg-white py-3 border border-bone transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent font-semibold"
                >
                  [ VIEW LIVE SITE ↗ ]
                </a>
              )}
              <Link
                href={`/work/${project.id}`}
                onClick={onClose}
                className="w-full text-center uppercase tracking-wider text-bone bg-charcoal hover:bg-elevated border border-border-gothic py-3 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
              >
                [ OPEN FULL CASE STUDY ↗ ]
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
