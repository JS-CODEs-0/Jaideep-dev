import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface AsciiTextArtProps {
  art: string;
  ariaLabel?: string;
  className?: string;
  colorClass?: string;
  fontSize?: string;
}

export const AsciiTextArt: React.FC<AsciiTextArtProps> = ({
  art,
  ariaLabel = 'ASCII Artwork Representation',
  className,
  colorClass = 'text-stone',
  fontSize = 'text-[10px] sm:text-xs',
}) => {
  return (
    <div className={twMerge(clsx('relative inline-block', className))}>
      {/* Accessible Screen Reader Text */}
      <span className="sr-only">{ariaLabel}</span>

      {/* Rendered Monospaced ASCII Content */}
      <pre
        aria-hidden="true"
        className={twMerge(
          clsx(
            'font-mono select-none whitespace-pre leading-[1.15] tracking-tight font-normal',
            fontSize,
            colorClass
          )
        )}
      >
        {art}
      </pre>
    </div>
  );
};
