import React from 'react';

/**
 * Editorial marquee tape with slow-scrolling highlights separated by ✦.
 */
export const Marquee = ({ tone = 'dark' }) => {
  const items = [
    'Quran Reading',
    'Hifz Quran',
    'Pre-Hifz',
    'Tajweed',
    'Arabic',
    'Islamic Studies',
    'Kids Spoken English',
    'Junior Spoken English',
    'One-to-One Live Classes',
    'Small Group Live Classes',
    'Zoom & Google Meet',
    'Free Demo Class',
  ];

  const run = [...items, ...items];

  const isDark = tone === 'dark';

  return (
    <div
      aria-hidden="true"
      className={`marquee-mask relative flex overflow-hidden border-y select-none py-3.5 ${
        isDark
          ? 'bg-[#05140f] border-white/10 text-[#fcf9f3]'
          : 'bg-[#f6efe0] border-[#c8a24e]/25 text-[#0c2b21]'
      }`}
    >
      <div className="marquee-track">
        {run.map((word, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span
              className={`px-6 text-sm sm:text-base font-semibold tracking-wide ${
                isDark ? 'text-[#fcf9f3]/85' : 'text-[#0c2b21]'
              }`}
            >
              {word}
            </span>
            <span className="text-[#c8a24e] text-xs font-serif">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
