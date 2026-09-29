import React from 'react';
import { useOutletContext, Link } from 'react-router';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Reveal } from '../../Components/motion';
import HowItWorks from '../../Components/HowItWorks';
import LearningOptions from '../../Components/LearningOptions';
import AgeGroups from '../../Components/AgeGroups';
import ClassExperience from '../../Components/ClassExperience';
import Marquee from '../../Components/decor/Marquee';
import FinalCTA from '../../Components/FinalCTA';
import SeamDivider from '../../Components/decor/SeamDivider';

const HowItWorksPage = () => {
  const context = useOutletContext() || {};
  const handleOpenDemo = context.openDemo || (() => {});

  return (
    <main className="flex-1 pt-24 sm:pt-28">
      {/* Page Header Banner */}
      <section className="relative overflow-hidden py-14 sm:py-16 bg-[#05140f] text-[#fcf9f3]">
        <div className="pointer-events-none absolute inset-0 text-white bg-dots opacity-[0.04]" />
        <span className="deco-glow -left-20 top-1/2 -translate-y-1/2 h-72 w-72 opacity-50" />
        <span className="deco-glow right-0 top-1/2 -translate-y-1/2 h-72 w-72 opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal y={20}>
            {/* Breadcrumb */}
            <nav className="inline-flex items-center gap-2 text-xs text-[#ece0c8]/70 mb-4" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#c8a24e]" />
              <span className="text-[#dcc07d] font-semibold">How It Works</span>
            </nav>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#c8a24e]/40 shadow-sm mb-4">
              <div className="w-6 h-6 rounded-full bg-white p-0.5 ring-1 ring-[#c8a24e] overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="An-Najat Official Seal"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-[#dcc07d] uppercase font-serif">
                Simple 5-Step Learning Journey
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif">
              How It Works &amp; Class Formats
            </h1>
            <span className="rule-draw mx-auto mt-4 block" />
            <p className="mt-4 text-sm sm:text-base text-[#ece0c8]/85 max-w-2xl mx-auto leading-relaxed">
              From your first free demo class to regular live lessons and progress monitoring, our online learning platform makes quality Islamic education simple, personalized, and accessible worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 1. 5-Step Onboarding Roadmap */}
      <HowItWorks onOpenDemo={handleOpenDemo} />

      <SeamDivider />

      {/* 2. One-to-One vs Small Group Learning Options */}
      <LearningOptions onOpenDemo={handleOpenDemo} />

      <SeamDivider />

      {/* 3. Learning For Every Age: Kids, Teenagers, Adults */}
      <AgeGroups onOpenDemo={handleOpenDemo} />

      <SeamDivider />

      {/* 4. Classroom Setup & Devices (Zoom, Meet, PC, Tablet) */}
      <ClassExperience onOpenDemo={handleOpenDemo} />

      {/* Marquee Tape */}
      <Marquee tone="dark" />

      {/* Final Action */}
      <FinalCTA onOpenDemo={handleOpenDemo} />
    </main>
  );
};

export default HowItWorksPage;
