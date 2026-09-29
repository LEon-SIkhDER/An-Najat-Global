import React from 'react';
import { Baby, GraduationCap, Users2, ArrowRight } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './motion';

const AgeGroups = ({ onOpenDemo }) => {
  const groups = [
    {
      id: 'kids',
      title: 'Kids',
      ageRange: 'Ages 5–12',
      icon: Baby,
      desc: 'Build a strong foundation in Quran and Islamic knowledge from an early age.',
      cta: 'Book Demo for Kids',
      // Style tokens
      wrapper: 'bg-gradient-to-br from-[#fef9ec] to-[#fdf0cc] border-[#dcc07d]/40',
      iconBg: 'bg-[#c8a24e]/15',
      iconColor: 'text-[#a67f30]',
      watermark: '5+',
      watermarkColor: 'text-[#c8a24e]/10',
      titleColor: 'text-[#3e1f00]',
      bodyColor: 'text-[#5c3a00]/75',
      rangeColor: 'text-[#a67f30] bg-[#c8a24e]/10 border-[#c8a24e]/25',
      btn: 'bg-[#c8a24e]/15 hover:bg-[#c8a24e] text-[#a67f30] hover:text-[#05140f] border border-[#c8a24e]/30',
    },
    {
      id: 'teenagers',
      title: 'Teenagers',
      ageRange: 'Ages 13–18',
      icon: GraduationCap,
      desc: 'Develop Quranic skills, Islamic understanding and positive learning habits.',
      cta: 'Book Demo for Teenagers',
      wrapper: 'bg-gradient-to-br from-[#f0f7f4] to-[#ddeee6] border-[#0f3b2e]/15',
      iconBg: 'bg-[#0f3b2e]/10',
      iconColor: 'text-[#0f3b2e]',
      watermark: '13+',
      watermarkColor: 'text-[#0f3b2e]/10',
      titleColor: 'text-[#05140f]',
      bodyColor: 'text-[#3e4844]',
      rangeColor: 'text-[#165342] bg-[#0f3b2e]/8 border-[#0f3b2e]/15',
      btn: 'bg-[#0f3b2e]/10 hover:bg-[#0f3b2e] text-[#0f3b2e] hover:text-[#fcf9f3] border border-[#0f3b2e]/15',
    },
    {
      id: 'adults',
      title: 'Adults',
      ageRange: '18 & Above',
      icon: Users2,
      desc: 'Learn Quran, Tajweed, Arabic and essential Islamic knowledge at your own pace.',
      cta: 'Book Demo for Adults',
      wrapper: 'bg-gradient-to-br from-[#0c2b21] to-[#05140f] border-[#c8a24e]/30',
      iconBg: 'bg-white/10',
      iconColor: 'text-[#dcc07d]',
      watermark: '18+',
      watermarkColor: 'text-white/[0.05]',
      titleColor: 'text-white',
      bodyColor: 'text-[#ece0c8]/75',
      rangeColor: 'text-[#dcc07d] bg-white/10 border-white/15',
      btn: 'bg-white/10 hover:bg-[#c8a24e] text-[#dcc07d] hover:text-[#05140f] border border-white/15',
    },
  ];

  return (
    <section id="age-groups" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 bg-[#fcf9f3]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-14" y={20}>
          <p className="eyebrow">Inclusive Education</p>
          <h2 className="text-section-title font-extrabold text-[#05140f] font-serif mt-3">
            Learning for Every Age
          </h2>
          <span className="rule-draw mx-auto mt-4 block" />
          <p className="mt-3 text-sm sm:text-base text-[#3e4844] leading-relaxed">
            Programs for Kids, Teenagers, and Adults — personalized to each stage of learning.
          </p>
        </Reveal>

        {/* 3 Personality Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <StaggerItem
                key={group.id}
                className={`group relative rounded-3xl p-8 border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden ${group.wrapper}`}
              >
                {/* Background watermark age */}
                <div
                  aria-hidden="true"
                  className={`absolute right-4 top-3 font-extrabold font-serif leading-none pointer-events-none select-none ${group.watermarkColor}`}
                  style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}
                >
                  {group.watermark}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${group.iconBg}`}>
                    <Icon className={`w-6 h-6 ${group.iconColor}`} />
                  </div>

                  {/* Age range tag */}
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider mb-3 ${group.rangeColor}`}>
                    {group.ageRange}
                  </span>

                  <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 font-serif ${group.titleColor}`}>
                    {group.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-7 ${group.bodyColor}`}>
                    {group.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onOpenDemo}
                  className={`relative z-10 w-full py-3 px-4 rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${group.btn}`}
                >
                  <span>{group.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default AgeGroups;
