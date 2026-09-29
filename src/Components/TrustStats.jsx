import React from 'react';
import { UserCheck, Video, LineChart, CalendarClock, Sparkles, Users, Globe2 } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './motion';

const TrustStats = ({ onOpenDemo }) => {
  const topPillars = [
    {
      icon: UserCheck,
      title: 'Dedicated Teachers',
      desc: 'Our teachers are dedicated to providing students with proper guidance, regular practice and a supportive learning environment.',
    },
    {
      icon: Video,
      title: 'Live Interactive Classes',
      desc: 'Classes are conducted live through Zoom or Google Meet with real-time teacher and student interaction.',
      stat: 'LIVE',
      statLabel: 'Every Class',
    },
    {
      icon: Sparkles,
      title: 'Free Demo Class',
      desc: 'Students can attend a free demo class and experience our online learning system before enrollment. Zero obligations.',
      highlight: true,
    },
  ];

  const bottomChips = [
    { icon: CalendarClock, title: 'Flexible Scheduling' },
    { icon: LineChart, title: 'Regular Progress Monitoring' },
    { icon: Users, title: 'Kids, Teenagers & Adults' },
    { icon: Globe2, title: 'Worldwide Access' },
  ];

  return (
    <section className="section-tint relative overflow-hidden py-20 sm:py-28">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-14" y={20}>
          <p className="eyebrow justify-center">Trust &amp; Quality</p>
          <h2 className="text-section-title font-extrabold text-[#05140f] font-serif mt-3">
            Why Parents &amp; Students<br className="hidden sm:block" /> Trust An-Najat
          </h2>
          <span className="rule-draw mx-auto mt-4 block" />
          <p className="mt-3 text-sm sm:text-base text-[#3e4844] leading-relaxed">
            Built on authentic Islamic education, dedicated teacher mentorship, and flexible online learning.
          </p>
        </Reveal>

        {/* Top 3 Feature Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5" staggerDelay={0.08}>
          {topPillars.map((pillar) => {
            const Icon = pillar.icon;
            if (pillar.highlight) {
              return (
                <StaggerItem
                  key={pillar.title}
                  className="relative rounded-3xl p-8 bg-[#0c2b21] border border-[#c8a24e]/30 shadow-lg overflow-hidden flex flex-col justify-between group"
                >
                  {/* Background glow */}
                  <span className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#c8a24e]/8 blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#dcc07d]" />
                    </div>
                    <div className="stat-number mb-1">FREE</div>
                    <h3 className="text-xl font-bold text-white font-serif mb-3">Demo Class</h3>
                    <p className="text-sm text-[#ece0c8]/75 leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="relative z-10 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#c8a24e] to-[#dcc07d] hover:from-[#b89240] hover:to-[#c8a24e] text-[#05140f] font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                  >
                    Book Your Free Demo →
                  </button>
                </StaggerItem>
              );
            }

            return (
              <StaggerItem
                key={pillar.title}
                className="rounded-3xl p-7 bg-white/95 border border-emerald-900/10 shadow-sm hover:border-[#c8a24e]/50 hover:shadow-md hover:-translate-y-0.5 transition-all group flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#0f3b2e]/10 flex items-center justify-center group-hover:bg-[#0f3b2e] group-hover:text-[#dcc07d] transition-colors">
                    <Icon className="w-5 h-5 text-[#0f3b2e] group-hover:text-[#dcc07d]" />
                  </div>
                  {pillar.stat && (
                    <div className="inline-flex flex-col items-end">
                      <span className="text-xl font-extrabold font-serif text-[#0f3b2e] leading-none">{pillar.stat}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#67756f]">{pillar.statLabel}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#05140f] font-serif mb-2.5">{pillar.title}</h3>
                <p className="text-sm text-[#3e4844] leading-relaxed flex-1">{pillar.desc}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom 4 Compact Chips */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.06}>
          {bottomChips.map((chip) => {
            const Icon = chip.icon;
            return (
              <StaggerItem
                key={chip.title}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/75 border border-emerald-900/8 shadow-xs hover:border-[#c8a24e]/40 hover:bg-white hover:-translate-y-0.5 transition-all cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0f3b2e]/8 flex items-center justify-center shrink-0">
                  <Icon className="w-4.5 h-4.5 text-[#0f3b2e]" />
                </div>
                <span className="text-sm font-bold text-[#05140f] font-serif leading-snug">{chip.title}</span>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default TrustStats;
