'use client';

import React from 'react';

interface DataHeaderBarProps {
  index: string;
  title?: string;
  badge?: string;
  className?: string;
}

export const DataHeaderBar: React.FC<DataHeaderBarProps> = ({
  index,
  title,
  badge,
  className = '',
}) => {
  return (
    <div
      className={`w-full flex items-center justify-between font-mono text-[11px] text-stone pb-3 border-b border-border-gothic/70 uppercase tracking-wider ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="text-olive font-semibold">[{index}]</span>
        {title && <span className="text-parchment font-medium">{title}</span>}
      </div>

      {badge && (
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
          <span className="text-[10px] text-olive tracking-widest px-2 py-0.5 bg-obsidian border border-border-gothic">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
};
