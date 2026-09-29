import React from 'react';
import { Check } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './motion';

const WhyAnNajat = () => {
  const points = [
    'One-to-One Personalized Classes',
    'Small Group Classes for Selected Programs',
    'Dedicated & Supportive Teachers',
    'Quran & Islamic Studies Focused',
    'Classes for Kids, Teenagers & Adults',
    'Flexible Scheduling',
    'Live Interactive Classes',
    'Regular Progress Monitoring',
    'Free Demo Class',
    'Learn From Anywhere',
  ];

  const stats = [
    { n: '10+', label: 'Countries' },
    { n: '8', label: 'Programs' },
    { n: '3', label: 'Age Groups' },
    { n: '2020', label: 'Established' },
  ];

  return (
    <section id="why-us" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 mesh-emerald">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Typographic Statement Panel */}
          <Reveal className="lg:col-span-5 space-y-8" y={24}>
            <div className="space-y-4">
              <p className="eyebrow">Key Advantages</p>
              <h2 className="text-section-title font-extrabold text-[#05140f] font-serif">
                Why choose
                <br />
                <span className="text-gold-gradient italic">An-Najat</span>
                <br />
                Academy?
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#c8a24e] to-transparent" />
            </div>

            {/* Stat grid 2×2 */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="space-y-0.5">
                  <div className="stat-number">{s.n}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#67756f]">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="relative pl-5 border-l-2 border-[#c8a24e]/60 italic text-sm sm:text-base text-[#3e4844] leading-relaxed">
              "We believe online learning should be personal, engaging, convenient and effective."
            </blockquote>
          </Reveal>

          {/* Right: 10 Point Checklist Grid */}
          <StaggerContainer className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.04}>
            {points.map((point, idx) => (
              <StaggerItem
                key={idx}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/80 border border-emerald-900/8 shadow-xs hover:border-[#c8a24e]/50 hover:bg-white hover:-translate-y-0.5 transition-all cursor-default"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0f3b2e] to-[#165342] flex items-center justify-center shrink-0 shadow-sm">
                  <Check className="w-3.5 h-3.5 text-[#dcc07d]" />
                </div>
                <span className="text-sm font-bold text-[#05140f] font-serif leading-snug">{point}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
};

export default WhyAnNajat;
