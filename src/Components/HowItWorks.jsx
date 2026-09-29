import React from 'react';
import { MessageSquare, Sparkles, SlidersHorizontal, CalendarClock, BookOpenCheck, ArrowRight } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './motion';

const HowItWorks = ({ onOpenDemo }) => {
  const steps = [
    {
      num: '01',
      title: 'Contact Us',
      desc: 'Reach out via WhatsApp or submit a demo request to begin your journey.',
      icon: MessageSquare,
      actionText: 'WhatsApp: 01602-261329',
      href: 'https://wa.me/8801602261329',
      isExternal: true,
    },
    {
      num: '02',
      title: 'Free Demo Class',
      desc: 'Attend a free live online demo session to experience our teaching approach.',
      icon: Sparkles,
      actionText: 'Book Free Demo',
      onClick: onOpenDemo,
    },
    {
      num: '03',
      title: 'Assessment & Level',
      desc: 'Our teacher evaluates the student level and recommends the right program.',
      icon: SlidersHorizontal,
    },
    {
      num: '04',
      title: 'Schedule Setup',
      desc: 'Choose class days and times that match your daily schedule perfectly.',
      icon: CalendarClock,
    },
    {
      num: '05',
      title: 'Regular Live Classes',
      desc: 'Begin your learning journey with An-Najat Global Islamic Academy Online.',
      icon: BookOpenCheck,
    },
  ];

  return (
    <section id="how-it-works" className="section-tint relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16" y={20}>
          <p className="eyebrow">Onboarding Process</p>
          <h2 className="text-section-title font-extrabold text-[#05140f] font-serif mt-3">
            How It Works
          </h2>
          <span className="rule-draw mx-auto mt-4 block" />
          <p className="mt-3 text-sm text-[#3e4844]">
            5 simple steps to start your learning journey with An-Najat.
          </p>
        </Reveal>

        {/* Timeline container */}
        <div className="relative">
          {/* Dashed connector line — desktop only */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px border-t-2 border-dashed border-[#c8a24e]/30 z-0" />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4" staggerDelay={0.1}>
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.num} className="flex flex-col items-center text-center group">

                  {/* Step circle node */}
                  <div className="relative z-10 w-14 h-14 rounded-full border-2 border-[#c8a24e]/40 bg-[#fcf9f3] flex items-center justify-center mb-5 shadow-sm group-hover:border-[#c8a24e] group-hover:bg-white group-hover:shadow-md transition-all">
                    <span className="font-extrabold text-xl text-[#a67f30] font-serif leading-none">{step.num}</span>
                  </div>

                  {/* Step card */}
                  <div className="flex-1 w-full bg-white/95 rounded-3xl p-5 border border-emerald-900/10 shadow-sm hover:border-[#c8a24e]/50 hover:shadow-md hover:-translate-y-0.5 transition-all text-left">
                    <div className="w-10 h-10 rounded-xl bg-[#f6efe0] text-[#0f3b2e] flex items-center justify-center mb-3.5 group-hover:bg-[#0f3b2e] group-hover:text-[#dcc07d] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#05140f] mb-2 font-serif leading-snug">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-[#3e4844] leading-relaxed mb-4">{step.desc}</p>

                    {/* Action links for steps 1 & 2 */}
                    {step.isExternal ? (
                      <a
                        href={step.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0f3b2e] hover:text-[#165342] transition-colors whitespace-nowrap"
                      >
                        <span>{step.actionText}</span>
                        <ArrowRight className="w-3 h-3 text-[#c8a24e]" />
                      </a>
                    ) : step.onClick ? (
                      <button
                        type="button"
                        onClick={step.onClick}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0f3b2e] hover:text-[#165342] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <span>{step.actionText}</span>
                        <ArrowRight className="w-3 h-3 text-[#c8a24e]" />
                      </button>
                    ) : (
                      <span className="text-[10px] font-semibold text-[#67756f] uppercase tracking-wider">
                        Step {step.num}
                      </span>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
