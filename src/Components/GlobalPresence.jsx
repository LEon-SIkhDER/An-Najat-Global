import React from 'react';
import { Globe, Sparkles } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './motion';

const GlobalPresence = ({ onOpenDemo }) => {
  const countries = [
    { name: 'Bangladesh', flag: '🇧🇩' },
    { name: 'USA', flag: '🇺🇸' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'Qatar', flag: '🇶🇦' },
    { name: 'Kuwait', flag: '🇰🇼' },
    { name: 'Oman', flag: '🇴🇲' },
  ];

  return (
    <section id="global" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32 bg-[#05140f] text-[#fcf9f3]">
      <div className="pointer-events-none absolute inset-0 text-white bg-dots opacity-[0.035]" />

      {/* Ambient glows */}
      <span className="deco-glow left-1/2 -translate-x-1/2 -top-20 h-72 w-[700px] opacity-35" />
      <span className="deco-glow right-0 bottom-0 h-96 w-96 opacity-20" />

      {/* Arabic watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center pointer-events-none select-none font-arabic font-bold text-white/[0.03] leading-none z-0"
        style={{ fontSize: 'clamp(5rem, 15vw, 18rem)' }}
      >
        رَحْمَة
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-6" y={20}>
          <p className="eyebrow justify-center !text-[#dcc07d]">Worldwide Reach</p>
          <h2 className="text-section-title font-extrabold text-white font-serif mt-3">
            Learn From Anywhere
          </h2>
          <span className="rule-draw mx-auto mt-4 block" />
        </Reveal>

        {/* Countries count stat */}
        <Reveal className="text-center mb-12" delay={0.1} y={16}>
          <div className="inline-flex flex-col items-center gap-1">
            <div className="stat-number">10+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#ece0c8]/50">Countries Served</div>
          </div>
        </Reveal>

        {/* 10 Country tiles */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-4xl mx-auto mb-14" staggerDelay={0.04}>
          {countries.map((item) => (
            <StaggerItem
              key={item.name}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c8a24e]/50 rounded-2xl p-5 transition-all duration-300 text-center flex flex-col items-center justify-center gap-3 group hover:-translate-y-0.5"
            >
              <span className="text-5xl filter drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                {item.flag}
              </span>
              <h3 className="font-bold text-sm text-white font-serif tracking-tight leading-tight">
                {item.name}
              </h3>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Closing statement */}
        <Reveal className="text-center max-w-2xl mx-auto space-y-6" delay={0.15} y={16}>
          <p className="text-lg sm:text-xl font-bold text-white font-serif leading-snug">
            "Wherever you are, your learning journey<br className="hidden sm:block" /> can begin with An-Najat."
          </p>
          <p className="text-sm text-[#ece0c8]/70 leading-relaxed">
            Our online classes are designed for students living in Bangladesh and across the world.
          </p>

          <button
            type="button"
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#c8a24e] via-[#dcc07d] to-[#c8a24e] text-[#05140f] font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 text-[#05140f]" />
            <span>Book a Free Demo Class</span>
          </button>
        </Reveal>

      </div>
    </section>
  );
};

export default GlobalPresence;
