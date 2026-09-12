'use client';

import React from 'react';

interface DitherHalftoneSurfaceProps {
  children: React.ReactNode;
  colSpan?: string;
  className?: string;
}

export const DitherHalftoneSurface: React.FC<DitherHalftoneSurfaceProps> = ({
  children,
  colSpan = '',
  className = '',
}) => {
  return (
    <div
      className={`relative bg-obsidian/45 bg-dither border border-border-gothic transition-colors duration-300 ${colSpan} ${className}`}
    >
      {children}
    </div>
  );
};
