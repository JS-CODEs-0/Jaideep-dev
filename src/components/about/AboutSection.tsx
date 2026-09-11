'use client';

import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BentoCard } from '@/components/ui/BentoCard';
import { CornerMarks } from '@/components/ui/CornerMarks';

export const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="about" className="border-b border-border-gothic">
      <SectionHeader
        index="02 // ABOUT"
        title="COMPUTATIONAL PERSPECTIVE"
        subtitle="Engineering rationale, architectural philosophy, and domain focus."
      />

      <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch relative">
        <CornerMarks />

        {/* Left Column: Editorial Narrative (7 cols desktop) */}
        <BentoCard colSpan="col-span-12 lg:col-span-7" className="p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-olive uppercase tracking-widest block mb-4">
              [ NARRATIVE // ARCHITECTURAL INTENT ]
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl text-bone uppercase mb-6 leading-tight">
              BUILDING SYSTEMS THAT WITHSTAND COMPLEXITY & EXTREME CONDITIONS.
            </h3>

            <div className="space-y-4 font-sans text-base sm:text-lg text-parchment leading-relaxed">
              <p>
                I am a Software & AI Engineer focused on developing asynchronous backend frameworks, telemetry processing tools, and intelligent software architectures.
              </p>
              <p>
                Through projects such as PolarEMS, my work explores microgrid energy management systems, load and renewable forecasting, and high-density technical web interfaces. I value strict type safety, empirical performance validation, and minimalist editorial interfaces that prioritize information density over unnecessary ornament.
              </p>
              <p>
                Whether building async FastAPI backend engines with PostgreSQL or developing custom monospaced web systems, I focus on software that is explicit, reliable, and maintainable.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border-gothic/50 flex flex-wrap justify-between items-center gap-4 font-mono text-xs text-stone">
            <span>IDENTITY: JAIDEEP SINGH</span>
            <span className="text-olive">LOCATION: INDIA</span>
          </div>
        </BentoCard>

        {/* Right Column: Metadata Bento Area (5 cols desktop) */}
        <div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-6">
          {/* Bento Card: Focus */}
          <BentoCard className="p-6">
            <div className="flex items-center justify-between font-mono text-xs mb-3 pb-2 border-b border-border-gothic/50">
              <span className="text-stone">[ 01 // DOMAIN FOCUS ]</span>
              <span className="text-olive">ACTIVE</span>
            </div>
            <h4 className="font-serif text-2xl text-bone uppercase mb-2">SYSTEMS & AI</h4>
            <p className="font-sans text-sm text-stone leading-relaxed">
              Asynchronous telemetry ingestion, microgrid simulation engines, ML forecasting, and type-safe backend services.
            </p>
          </BentoCard>

          {/* Bento Card: Currently */}
          <BentoCard className="p-6">
            <div className="flex items-center justify-between font-mono text-xs mb-3 pb-2 border-b border-border-gothic/50">
              <span className="text-stone">[ 02 // CURRENTLY ]</span>
              <span className="text-olive">ENGAGED</span>
            </div>
            <h4 className="font-serif text-2xl text-bone uppercase mb-2">POLAREMS ARCHITECTURE</h4>
            <p className="font-sans text-sm text-stone leading-relaxed">
              Developing polar microgrid energy management solvers, async SQLAlchemy 2.0 pipelines, and mission control dashboards.
            </p>
          </BentoCard>

          {/* Bento Card: Engineering Approach */}
          <BentoCard className="p-6">
            <div className="flex items-center justify-between font-mono text-xs mb-3 pb-2 border-b border-border-gothic/50">
              <span className="text-stone">[ 03 // APPROACH ]</span>
              <span className="text-olive">METHODOLOGY</span>
            </div>
            <h4 className="font-serif text-2xl text-bone uppercase mb-2">EMPIRICAL & DECOUPLED</h4>
            <p className="font-sans text-sm text-stone leading-relaxed">
              Strict separation of concerns, comprehensive regression testing, low latency overhead, and high readability.
            </p>
          </BentoCard>
        </div>
      </div>
    </SectionWrapper>
  );
};
