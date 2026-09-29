import React from 'react';
import { Target, Eye } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './motion';

const AboutMission = () => {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 mesh-emerald">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="max-w-3xl mx-auto text-center mb-14" y={20}>
          <p className="eyebrow justify-center">Institutional Foundation</p>
          <h2 className="text-section-title font-extrabold text-[#05140f] font-serif mt-3">
            About An-Najat Global<br className="hidden sm:block" /> Islamic Academy Online
          </h2>
          <span className="rule-draw mx-auto mt-4 block" />

          <div className="mt-7 space-y-4 text-sm sm:text-base text-[#3e4844] leading-relaxed text-left sm:text-center">
            <p>
              An-Najat Global Islamic Academy Online is an online learning platform dedicated to Quran and Islamic Studies education for children, teenagers and adults.
            </p>
            <p>
              Our goal is to make quality Quranic and Islamic education accessible to learners wherever they live. Through personalized One-to-One classes and selected Small Group programs, we provide students with proper guidance, regular practice and a supportive learning environment.
            </p>
            <p className="text-base font-bold text-[#0f3b2e] font-serif italic">
              "We believe online learning should be personal, engaging, convenient and effective."
            </p>
          </div>
        </Reveal>

        {/* Mission & Vision Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Mission Card — DARK */}
          <StaggerItem className="relative bg-[#0c2b21] rounded-3xl p-8 sm:p-10 border border-[#c8a24e]/25 shadow-xl flex flex-col overflow-hidden group">
            <span className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#c8a24e]/8 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-13 h-13 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#dcc07d]" />
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight mb-4 font-serif">Our Mission</h3>
              <p className="text-sm sm:text-base text-[#ece0c8]/80 leading-relaxed">
                To help children and adults build a strong connection with the Quran and gain essential Islamic knowledge through effective, convenient and engaging online learning.
              </p>
            </div>
          </StaggerItem>

          {/* Vision Card — LIGHT */}
          <StaggerItem className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-900/12 shadow-sm hover:border-[#c8a24e]/50 hover:shadow-md transition-all flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-[#f6efe0] flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-[#0f3b2e]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#05140f] tracking-tight mb-4 font-serif">Our Vision</h3>
            <p className="text-sm sm:text-base text-[#3e4844] leading-relaxed mb-4">
              To make Quranic and Islamic education accessible to learners around the world through quality, personalized and flexible online learning.
            </p>
            <p className="text-xs sm:text-sm text-[#67756f] leading-relaxed">
              We aim to create a supportive environment where every student can learn according to their level, receive proper guidance and develop a lifelong connection with the Quran and Islamic teachings.
            </p>
          </StaggerItem>

        </StaggerContainer>

        {/* Founding info footnote */}
        <Reveal className="mt-10 pt-8 border-t border-[#0f3b2e]/12 text-center" delay={0.2} y={12}>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs text-[#67756f]">
            <span className="font-bold text-[#a67f30] uppercase tracking-wider">AN-NAJAT GLOBAL ISLAMIC ACADEMY ONLINE</span>
            <span className="text-[#c8a24e]/30">·</span>
            <span>স্থাপিতঃ ২০২০ ইং</span>
            <span className="text-[#c8a24e]/30">·</span>
            <span>লালকুটি, মাজার রোড, মিরপুর, ঢাকা</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default AboutMission;
