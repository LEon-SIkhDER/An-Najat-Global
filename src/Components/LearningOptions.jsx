import React from 'react';
import { User, Users, Check, Sparkles } from 'lucide-react';
import { Reveal } from './motion';

const LearningOptions = ({ onOpenDemo }) => {
  return (
    <section id="learning-options" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 bg-[#fcf9f3]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-14" y={20}>
          <p className="eyebrow justify-center">Learning Formats</p>
          <h2 className="text-section-title font-extrabold text-[#05140f] font-serif mt-3">
            One-to-One vs Small Group
          </h2>
          <span className="rule-draw mx-auto mt-4 block" />
          <p className="mt-3 text-sm sm:text-base text-[#3e4844] leading-relaxed">
            Choose the learning format that best suits your goals, age and schedule.
          </p>
        </Reveal>

        {/* Comparison grid: Card | VS | Card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 max-w-5xl mx-auto items-stretch">

          {/* Card 1: One-to-One — DARK PREMIUM */}
          <Reveal
            className="bg-[#0c2b21] rounded-3xl p-7 sm:p-9 border border-[#c8a24e]/25 shadow-xl relative flex flex-col justify-between overflow-hidden group"
            y={28}
            delay={0.05}
          >
            {/* Subtle background glow */}
            <span className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#c8a24e]/8 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shadow-sm">
                  <User className="w-6 h-6 text-[#dcc07d]" />
                </div>
                <span className="tag-gold">Most Popular</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3 font-serif">
                One-to-One Live Classes
              </h3>

              <p className="text-sm text-[#ece0c8]/75 leading-relaxed mb-7">
                Personalized learning with dedicated teacher attention, individual guidance and a learning plan based on the student's needs.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Personalized attention',
                  'Dedicated teacher',
                  'Individual learning plan',
                  'Flexible learning',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#c8a24e]/20 border border-[#c8a24e]/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#dcc07d] stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-[#ece0c8]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-5 border-t border-white/10">
              <button
                type="button"
                onClick={() => onOpenDemo()}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#c8a24e] to-[#dcc07d] hover:from-[#b89240] hover:to-[#c8a24e] text-[#05140f] font-extrabold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#05140f]" />
                <span>Book a One-to-One Demo</span>
              </button>
            </div>
          </Reveal>

          {/* VS separator — desktop only */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-white border-2 border-[#c8a24e]/50 flex items-center justify-center text-[#a67f30] font-extrabold text-sm font-serif shadow-sm">
              vs
            </div>
          </div>

          {/* Card 2: Small Group — LIGHT WARM */}
          <Reveal
            className="bg-white rounded-3xl p-7 sm:p-9 border border-emerald-900/12 shadow-sm hover:border-[#c8a24e]/50 hover:shadow-lg transition-all flex flex-col justify-between"
            y={28}
            delay={0.18}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#f6efe0] flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#0f3b2e]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#67756f] bg-[#f6efe0] px-2.5 py-1 rounded-full">Selected Programs</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#05140f] tracking-tight mb-3 font-serif">
                Small Group Live Classes
              </h3>

              <p className="text-sm text-[#3e4844] leading-relaxed mb-7">
                Interactive learning in a focused small-group environment, available for selected courses and programs.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Interactive environment',
                  'Collaborative learning',
                  'Selected programs',
                  'Engaging sessions',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0f3b2e]/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#0f3b2e] stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-[#05140f]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-emerald-900/8">
              <button
                type="button"
                onClick={() => onOpenDemo()}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#0f3b2e]/10 hover:bg-[#0f3b2e] border-2 border-[#0f3b2e]/20 hover:border-[#0f3b2e] text-[#0f3b2e] hover:text-[#fcf9f3] font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs whitespace-nowrap"
              >
                <Users className="w-4 h-4" />
                <span>Book a Small Group Demo</span>
              </button>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

export default LearningOptions;
