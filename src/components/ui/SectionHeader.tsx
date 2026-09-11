import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  title,
  subtitle,
  className,
  align = 'left',
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'mb-12 lg:mb-16 flex flex-col',
          align === 'center' ? 'items-center text-center' : 'items-start text-left',
          className
        )
      )}
    >
      <span className="font-mono text-xs text-olive tracking-[0.2em] uppercase block mb-3">
        [{index}]
      </span>
      <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-bone uppercase leading-[0.95] tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-stone text-base lg:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
