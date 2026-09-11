import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CornerMarks } from './CornerMarks';

interface BentoCardProps {
  children?: React.ReactNode;
  className?: string;
  colSpan?: string;
  padding?: string;
  showCornerMarks?: boolean;
  interactive?: boolean;
  hasDitherPattern?: boolean;
  as?: React.ElementType;
  id?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className,
  colSpan = 'col-span-12',
  padding = 'p-6 lg:p-8',
  showCornerMarks = true,
  interactive = true,
  hasDitherPattern = false,
  as: Component = 'div',
  id,
}) => {
  return (
    <Component
      id={id}
      className={twMerge(
        clsx(
          'relative bg-charcoal border border-border-gothic flex flex-col justify-between overflow-hidden',
          colSpan,
          padding,
          hasDitherPattern && 'bg-dither',
          interactive &&
            'transition-colors duration-200 hover:bg-elevated hover:border-border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent',
          className
        )
      )}
    >
      {showCornerMarks && <CornerMarks />}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">{children}</div>
    </Component>
  );
};
