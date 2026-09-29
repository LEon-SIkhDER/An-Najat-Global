import React from 'react';

/**
 * Decorative vector motifs. All inherit `currentColor`, all aria-hidden.
 * Strictly NO SVG <text> tags used.
 */

export function IslamicStar({ className, style }) {
  // 8-point geometric star (Rub el Hizb motif) in pure geometric paths
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="20"
        y="20"
        width="60"
        height="60"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <rect
        x="20"
        y="20"
        width="60"
        height="60"
        rx="4"
        transform="rotate(45 50 50)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <circle cx="50" cy="50" r="3" fill="currentColor" fillOpacity="0.7" />
    </svg>
  );
}

export function ArchContour({ className, style }) {
  // Graceful pointed horseshoe arch
  return (
    <svg
      viewBox="0 0 120 180"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 170V95C20 50 60 15 60 15C60 15 100 50 100 95V170"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 170V102C32 65 60 38 60 38C60 38 88 65 88 102V170"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

export function DottedArc({ className, style }) {
  return (
    <svg
      viewBox="0 0 140 140"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 125C15 64.25 64.25 15 125 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
      <circle cx="15" cy="125" r="3" fill="currentColor" />
      <circle cx="125" cy="15" r="3" fill="currentColor" />
    </svg>
  );
}

export function OliveSprig({ className, style }) {
  return (
    <svg
      viewBox="0 0 120 160"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M60 155V40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {[
        "M60 125c-15 2-24-6-28-20 15-2 24 6 28 20Z",
        "M60 125c15 2 24-6 28-20-15-2-24 6-28 20Z",
        "M60 100c-14 2-22-5-26-18 14-2 22 5 26 18Z",
        "M60 100c14 2 22-5 26-18-14-2-22 5-26 18Z",
        "M60 76c-12 1-19-5-23-16 12-1 19 5 23 16Z",
        "M60 76c12 1 19-5 23-16-12-1-19 5-23 16Z",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      ))}
      <circle cx="60" cy="24" r="4" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}
