import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  showBorderBottom?: boolean;
  padding?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className,
  containerClassName,
  fullWidth = false,
  showBorderBottom = true,
  padding = 'py-20 lg:py-32',
}) => {
  return (
    <section
      id={id}
      className={twMerge(
        clsx(
          'w-full relative',
          showBorderBottom && 'border-b border-border-gothic',
          padding,
          className
        )
      )}
    >
      {fullWidth ? (
        children
      ) : (
        <div
          className={twMerge(
            clsx('w-full max-w-7xl mx-auto px-6 lg:px-12 relative', containerClassName)
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
};
