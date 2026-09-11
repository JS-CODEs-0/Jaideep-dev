'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { HeroAsciiCanvas } from './HeroAsciiCanvas';
import { CornerMarks } from '@/components/ui/CornerMarks';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center border-b border-border-gothic py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative">
        <CornerMarks />

        {/* 12-Column Asymmetric Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Column: 8 Columns Desktop */}
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-between py-2">
            <div>
              {/* Monospaced Metadata Header */}
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
                <span className="font-mono text-xs text-stone tracking-[0.2em] uppercase">
                  SOFTWARE & AI ENGINEER {'//'} INDIA
                </span>
              </motion.div>

              {/* Main Enormous Editorial Display Title */}
              <motion.h1
                variants={itemVariants}
                className="font-serif text-5xl sm:text-8xl lg:text-9xl text-bone uppercase leading-[0.9] tracking-tight mb-8"
              >
                JAIDEEP
                <br />
                <span className="text-parchment">SINGH</span>
              </motion.h1>

              {/* Editorial Intro Prose */}
              <motion.p
                variants={itemVariants}
                className="font-sans text-base sm:text-lg lg:text-xl text-parchment max-w-xl leading-relaxed mb-10"
              >
                I build software and intelligent systems that turn complex problems into practical solutions.
              </motion.p>
            </div>

            {/* Action Triggers */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, '#work')}
                className="font-mono text-xs uppercase tracking-wider text-obsidian bg-bone hover:bg-white px-6 py-3 border border-bone transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
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

          {/* Right Column: 4 Columns Desktop */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 lg:col-span-4 min-h-[380px] lg:min-h-[440px] flex"
          >
            <HeroAsciiCanvas className="w-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
