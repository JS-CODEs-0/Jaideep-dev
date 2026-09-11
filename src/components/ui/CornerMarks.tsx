import React from 'react';

interface CornerMarksProps {
  position?: 'all' | 'top' | 'bottom' | 'corners';
  size?: number;
  className?: string;
}

export const CornerMarks: React.FC<CornerMarksProps> = ({
  position = 'all',
  size = 7,
  className = 'text-border-accent',
}) => {
  const Crosshair = ({ positionClass }: { positionClass: string }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${positionClass} ${className} pointer-events-none z-10`}
      aria-hidden="true"
    >
      <path d="M3.5 0V7M0 3.5H7" stroke="currentColor" strokeWidth="1" />
    </svg>
  );

  const halfSize = `${-Math.floor(size / 2)}px`;

  return (
    <>
      {(position === 'all' || position === 'top' || position === 'corners') && (
        <>
          <Crosshair positionClass="-top-[3.5px] -left-[3.5px]" />
          <Crosshair positionClass="-top-[3.5px] -right-[3.5px]" />
        </>
      )}
      {(position === 'all' || position === 'bottom' || position === 'corners') && (
        <>
          <Crosshair positionClass="-bottom-[3.5px] -left-[3.5px]" />
          <Crosshair positionClass="-bottom-[3.5px] -right-[3.5px]" />
        </>
      )}
    </>
  );
};
