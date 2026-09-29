import React from 'react';
import { UserCheck, Sparkles, BookOpen } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './motion';

const Teachers = ({ onOpenDemo }) => {
  const profileSlots = [
    {
      id: 1,
      specialty: 'Quran & Hifz',
      accentClass: 'from-[#c8a24e] to-[#dcc07d]',
      iconBg: 'bg-[#c8a24e]/15',
      iconColor: 'text-[#a67f30]',
    },
    {
      id: 2,
      specialty: 'Tajweed & Arabic',
      accentClass: 'from-[#0f3b2e] to-[#165342]',
      iconBg: 'bg-[#0f3b2e]/10',
      iconColor: 'text-[#0f3b2e]',
    },
    {
      id: 3,
      specialty: 'Islamic Studies',
      accentClass: 'from-[#2a5fa3] to-[#4e84c4]',
      iconBg: 'bg-[#2a5fa3]/10',
      iconColor: 'text-[#2a5fa3]',
    },
  ];

  return (
    <section id="teachers" className="section-tint relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-14" y={20}>
          <p className="eyebrow">Faculty Guidance</p>
          <h2 className="text-section-title font-extrabold text-[#05140f] font-serif mt-3">
            Our Teachers
          </h2>
          <span className="rule-draw mx-auto mt-4 block" />
          <p className="mt-4 text-sm sm:text-base font-semibold text-[#0f3b2e] leading-relaxed">
            Our teachers are dedicated to providing students with proper guidance, regular practice and a supportive learning environment.
          </p>
          <p className="mt-1 text-xs text-[#67756f] italic">
            Teacher profiles and qualifications will be displayed here.
          </p>
        </Reveal>

        {/* Profile Placeholder Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12" staggerDelay={0.1}>
          {profileSlots.map((slot) => (
            <StaggerItem
              key={slot.id}
              className="group relative bg-white rounded-3xl border border-emerald-900/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Top accent bar */}
              <div className={`h-[3px] w-full bg-gradient-to-r ${slot.accentClass}`} />

              {/* Photo placeholder area */}
              <div className="aspect-[4/3] bg-[#f6efe0]/50 flex flex-col items-center justify-center p-4 text-center border-b border-emerald-900/8">
                <div className={`w-16 h-16 rounded-full border-2 border-white shadow-md flex items-center justify-center mb-3 ${slot.iconBg}`}>
                  <UserCheck className={`w-8 h-8 ${slot.iconColor}`} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#67756f]">
                  Teacher Photo
                </span>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-1">
                  <span className={`tag-gold mb-2 inline-flex`}>{slot.specialty}</span>
                </div>
                <h3 className="text-lg font-bold text-[#05140f] font-serif tracking-tight mb-1">
                  Teacher Name
                </h3>
                <div className="text-xs font-semibold text-[#0f3b2e] mb-3">
                  Qualification · Experience
                </div>
                <p className="text-xs text-[#67756f] leading-relaxed italic flex-1 border-t border-emerald-900/8 pt-3">
                  Short introduction and teaching focus will be displayed here.
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <Reveal className="text-center" delay={0.2} y={15}>
          <button
            type="button"
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0f3b2e] to-[#165342] hover:from-[#0c2b21] hover:to-[#0f3b2e] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 text-[#dcc07d]" />
            <span>Book a Free Demo Class</span>
          </button>
        </Reveal>

      </div>
    </section>
  );
};

export default Teachers;
