'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { CornerMarks } from '@/components/ui/CornerMarks';
import { DataHeaderBar } from '@/components/ui/DataHeaderBar';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between border-b border-border-gothic py-12 lg:py-16 overflow-hidden bg-obsidian">
      {/* LAYER 2: Large Organic Monochrome Halftone Artwork Field */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.1 : 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-halftone-bg.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover object-right-top lg:object-right opacity-35 mix-blend-screen filter contrast-125 brightness-110"
          />
          {/* Gradient Masks to blend artwork into obsidian background */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/75 to-transparent w-full lg:w-2/3" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/50" />
        </div>
      </motion.div>

      {/* LAYER 3 & 4: Archival Framing & Foreground Hero Content */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative flex-1 flex flex-col justify-between z-10">
        <CornerMarks />

        {/* Top Data Header Strip */}
        <DataHeaderBar
          index="00 // ARCHIVAL CANVAS"
          title="HALFTONE COMPUTATIONAL FIELD"
          badge="SYSTEM: OPERATIONAL"
          className="mb-8"
        />

        {/* Integrated Editorial Poster Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative grid grid-cols-12 gap-6 items-center my-auto py-6"
        >
          <div className="col-span-12 lg:col-span-8 z-10 relative">
            {/* Location & Status Tag */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
              <span className="font-mono text-xs text-stone tracking-[0.15em] uppercase">
                COMPUTER SCIENCE STUDENT · AI & SOFTWARE DEVELOPER {'//'} INDIA
              </span>
            </motion.div>

            {/* Main Display Serif Title */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-bone uppercase leading-[0.88] tracking-tight mb-8 drop-shadow-lg"
            >
              JAIDEEP
              <br />
              <span className="text-parchment">SINGH</span>
            </motion.h1>

            {/* Editorial Intro Prose */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg lg:text-xl text-parchment max-w-xl leading-relaxed mb-10 bg-obsidian/45 p-3 -ml-3 border-l-2 border-border-accent"
            >
              I build software and intelligent systems that turn complex problems into practical solutions.
            </motion.p>

            {/* Action Triggers */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, '#work')}
                className="font-mono text-xs uppercase tracking-wider text-obsidian bg-bone hover:bg-white px-6 py-3 border border-bone transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent shadow-lg"
              >
                [ EXPLORE SELECTED WORK ↓ ]
              </a>
              <a
                href="#index"
                onClick={(e) => handleScrollTo(e, '#index')}
                className="font-mono text-xs uppercase tracking-wider text-bone bg-charcoal hover:bg-elevated hover:border-border-accent px-6 py-3 border border-border-gothic transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
              >
                [ VIEW INDEX ]
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Technical Frame Metadata Bar */}
        <div className="w-full pt-4 border-t border-border-gothic/60 font-mono text-[10px] text-stone flex justify-between items-center uppercase tracking-widest mt-8">
          <span>[ MONOCHROME HALFTONE FIELD ]</span>
          <span className="text-olive hidden sm:inline">COORDINATES: INDIA</span>
          <span>HERO_V2</span>
        </div>
      </div>
    </section>
  );
};
