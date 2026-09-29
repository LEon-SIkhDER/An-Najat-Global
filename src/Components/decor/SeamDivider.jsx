import React from 'react';

/**
 * Transition between sections: a fading hairline seam with a center gold diamond lozenge.
 */
export const SeamDivider = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto flex max-w-6xl items-center px-4 sm:px-6 lg:px-8 select-none py-2 ${className}`}
    >
      <span className="seam flex-1" />
      <span className="mx-4 flex items-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-[#c8a24e]/50" />
        <span className="h-1.5 w-1.5 rotate-45 bg-[#c8a24e]" />
        <span className="h-1 w-1 rounded-full bg-[#c8a24e]/50" />
      </span>
      <span className="seam flex-1" />
    </div>
  );
};

export default SeamDivider;
