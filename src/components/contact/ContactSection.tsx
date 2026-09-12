'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DitherHalftoneSurface } from '@/components/ui/DitherHalftoneSurface';
import { DataHeaderBar } from '@/components/ui/DataHeaderBar';
import { CornerMarks } from '@/components/ui/CornerMarks';

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="contact" className="relative border-b border-border-gothic overflow-hidden bg-obsidian">
      {/* Background Dark Metallic Gothic Knight Image Layer */}
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
            src="/images/contact-halftone.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover object-center opacity-45 mix-blend-screen filter contrast-125 brightness-110"
          />
          {/* Subtle Vignette Masks to guarantee 100% text legibility across the full canvas */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/45 to-obsidian/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian/60" />
        </div>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <SectionHeader
          index="04 // CONTACT"
          title="LET'S BUILD SOMETHING."
          subtitle="Open to learning, building, collaborating, and discussing software, AI systems, backend architecture, and web development."
        />

        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch relative">
          <CornerMarks />

          {/* Left Column: Direct Outreach Prompt */}
          <DitherHalftoneSurface className="col-span-12 lg:col-span-6 p-8 flex flex-col justify-between">
            <div>
              <DataHeaderBar index="01" title="INQUIRIES & COLLABORATION" className="mb-4" />

              <h3 className="font-serif text-3xl sm:text-4xl text-bone uppercase mb-6 leading-tight">
                HAVE A PROJECT, IDEA, OR TECHNICAL PROBLEM WORTH WORKING THROUGH?
              </h3>

              <p className="font-sans text-base sm:text-lg text-parchment leading-relaxed mb-6">
                I build reliable software infrastructure, AI data pipelines, and responsive web platforms. Feel free to reach out directly via email or LinkedIn to discuss technical builds.
              </p>

              <div className="p-4 bg-obsidian/60 border border-border-gothic font-mono text-xs text-stone space-y-2">
                <div className="flex justify-between">
                  <span>IDENTITY:</span>
                  <span className="text-bone">JAIDEEP SINGH</span>
                </div>
                <div className="flex justify-between">
                  <span>ROLE:</span>
                  <span className="text-bone">CS STUDENT · AI & DEVELOPER</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span>EMAIL:</span>
                  <a href="mailto:jaideepsingh2878@gmail.com" className="text-olive hover:underline truncate">
                    jaideepsingh2878@gmail.com
                  </a>
                </div>
                <div className="flex justify-between">
                  <span>LOCATION:</span>
                  <span className="text-olive">INDIA</span>
                </div>
                <div className="flex justify-between">
                  <span>STATUS:</span>
                  <span className="text-olive">OPEN FOR COLLABORATION</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border-gothic/40 font-mono text-[10px] text-stone">
              LOCATION: INDIA // TIMEZONE: IST (UTC+5:30)
            </div>
          </DitherHalftoneSurface>

          {/* Right Column: Direct Contact Links Block */}
          <DitherHalftoneSurface className="col-span-12 lg:col-span-6 p-8 flex flex-col justify-between">
            <div>
              <DataHeaderBar index="02" title="DIRECT LINKS" className="mb-6" />

              <div className="space-y-4 font-mono text-xs">
                {/* Email Link */}
                <a
                  href="mailto:jaideepsingh2878@gmail.com"
                  className="flex items-center justify-between p-4 bg-obsidian/60 border border-border-gothic text-bone hover:border-border-accent hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
                >
                  <div>
                    <span className="text-stone block text-[10px] uppercase mb-0.5">DIRECT EMAIL</span>
                    <span className="font-bold text-sm tracking-wide">[ EMAIL ]</span>
                  </div>
                  <span className="text-olive group-hover:translate-x-1 transition-transform truncate max-w-[200px] sm:max-w-none">
                    jaideepsingh2878@gmail.com ↗
                  </span>
                </a>

                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/jaideep-singh-6a54bb436"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-obsidian/60 border border-border-gothic text-bone hover:border-border-accent hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
                >
                  <div>
                    <span className="text-stone block text-[10px] uppercase mb-0.5">PROFESSIONAL PROFILE</span>
                    <span className="font-bold text-sm tracking-wide">[ LINKEDIN ]</span>
                  </div>
                  <span className="text-olive group-hover:translate-x-1 transition-transform">
                    linkedin.com/in/jaideep-singh ↗
                  </span>
                </a>

                {/* GitHub Link */}
                <a
                  href="https://github.com/JS-CODEs-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-obsidian/60 border border-border-gothic text-bone hover:border-border-accent hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
                >
                  <div>
                    <span className="text-stone block text-[10px] uppercase mb-0.5">CODE REPOSITORIES</span>
                    <span className="font-bold text-sm tracking-wide">[ GITHUB ]</span>
                  </div>
                  <span className="text-olive group-hover:translate-x-1 transition-transform">
                    github.com/JS-CODEs-0 ↗
                  </span>
                </a>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border-gothic/40 font-mono text-[10px] text-stone flex justify-between items-center">
              <span>JAIDEEP SINGH</span>
              <span className="text-olive">CS STUDENT · AI & DEVELOPER</span>
            </div>
          </DitherHalftoneSurface>
        </div>
      </div>
    </SectionWrapper>
  );
};
