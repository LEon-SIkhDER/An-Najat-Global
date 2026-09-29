import React from 'react';
import { useOutletContext, Link } from 'react-router';
import { ChevronRight, Award, ShieldCheck, Globe, BookOpen } from 'lucide-react';
import { Reveal } from '../../Components/motion';
import AboutMission from '../../Components/AboutMission';
import WhyAnNajat from '../../Components/WhyAnNajat';
import Teachers from '../../Components/Teachers';
import GlobalPresence from '../../Components/GlobalPresence';
import Marquee from '../../Components/decor/Marquee';
import FinalCTA from '../../Components/FinalCTA';
import SeamDivider from '../../Components/decor/SeamDivider';

const AboutPage = () => {
  const context = useOutletContext() || {};
  const handleOpenDemo = context.openDemo || (() => {});

  return (
    <main className="flex-1 pt-24 sm:pt-28">
      {/* Majestic Institutional Page Banner with Official Emblem */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-[#05140f] text-[#fcf9f3]">
        <div className="pointer-events-none absolute inset-0 text-white bg-dots opacity-[0.04]" />
        <span className="deco-glow -left-20 top-1/2 -translate-y-1/2 h-80 w-80 opacity-60" />
        <span className="deco-glow right-0 top-1/2 -translate-y-1/2 h-80 w-80 opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <Reveal y={20}>
            {/* Breadcrumb */}
            <nav className="inline-flex items-center gap-2 text-xs text-[#ece0c8]/70 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#c8a24e]" />
              <span className="text-[#dcc07d] font-semibold">About Academy</span>
            </nav>

            {/* Official Seal Medallion Display */}
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-1 shadow-2xl ring-4 ring-[#c8a24e]/70 flex items-center justify-center overflow-hidden mb-4">
                <img
                  src="/logo.jpeg"
                  alt="An-Najat Global Islamic Academy Official Crest"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              {/* Inscriptions from Official Emblem */}
              <div className="text-center space-y-1">
                <div className="font-arabic text-lg sm:text-xl text-[#dcc07d] font-bold tracking-wide">
                  الأكاديمية الإسلامية العالمية للنجاة
                </div>
                <div className="text-xs sm:text-sm text-white/90 font-medium tracking-wide">
                  আন-নাজাত গ্লোবাল ইসলামিক একাডেমী
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#c8a24e]/30 text-[11px] font-semibold text-[#ece0c8] mt-2">
                  <span>স্থাপিতঃ ২০২০ ইং (Est. 2020)</span>
                  <span>•</span>
                  <span>লালকুটি, মাজার রোড, মিরপুর, ঢাকা</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif max-w-3xl mx-auto">
              About An-Najat Global Islamic Academy Online
            </h1>
            <span className="rule-draw mx-auto mt-4 block" />
            <p className="mt-4 text-sm sm:text-base text-[#ece0c8]/85 max-w-2xl mx-auto leading-relaxed">
              An online learning platform dedicated to Quran and Islamic Studies education for children, teenagers, and adults worldwide through live, personalized instruction.
            </p>
          </Reveal>

        </div>
      </section>

      {/* 1. About Academy, Mission & Vision */}
      <AboutMission />

      <SeamDivider />

      {/* 2. 10 Reasons to Choose An-Najat */}
      <WhyAnNajat />

      <SeamDivider />

      {/* 3. Dedicated Teachers & Profile Framework */}
      <Teachers onOpenDemo={handleOpenDemo} />

      <SeamDivider />

      {/* 4. Global Presence (10 Countries) */}
      <GlobalPresence onOpenDemo={handleOpenDemo} />

      {/* Marquee Tape */}
      <Marquee tone="dark" />

      {/* Final Action */}
      <FinalCTA onOpenDemo={handleOpenDemo} />
    </main>
  );
};

export default AboutPage;
