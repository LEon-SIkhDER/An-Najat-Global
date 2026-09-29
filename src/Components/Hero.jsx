import React from 'react';
import { Sparkles, MessageSquare, ArrowRight, Video, CheckCircle2, ShieldCheck, Globe, ChevronDown, Users } from 'lucide-react';
import { IslamicStar, DottedArc } from './decor/Vectors';
import { Reveal, Floaty } from './motion';

const Hero = ({ onOpenDemo }) => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#04100c] text-[#fcf9f3] pt-32 sm:pt-36 lg:pt-32 pb-20 lg:pb-28">
      
      {/* ——— Cinematic Background ——— */}
      <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
        <img
          src="/hero-banner.jpg"
          alt="Holy Quran and Islamic Studies"
          className="w-full h-full object-cover object-center lg:object-[right_center] filter brightness-[0.65] contrast-[1.1] transform scale-105"
        />
        {/* Gradient layers for depth + legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04100c] via-[#04100c]/92 sm:via-[#04100c]/88 to-[#04100c]/50 lg:to-[#04100c]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04100c]/80 via-transparent to-[#04100c]" />
        <div className="absolute inset-0 text-[#fcf9f3] bg-dots opacity-[0.03]" />
      </div>

      {/* ——— Ambient radial glows ——— */}
      <span className="deco-glow -left-32 top-1/3 h-[500px] w-[500px] opacity-60" />
      <span className="deco-glow right-10 bottom-16 h-[380px] w-[380px] opacity-40" />

      {/* ——— Arabic watermark (behind everything) ——— */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/4 pointer-events-none select-none font-arabic font-bold text-white/[0.032] leading-none z-0 tracking-tight"
        style={{ fontSize: 'clamp(8rem, 18vw, 20rem)' }}
      >
        اقْرَأْ
      </div>

      {/* ——— Floating decorative vectors ——— */}
      <Floaty className="pointer-events-none absolute right-12 top-28 hidden lg:block text-[#c8a24e]/20" duration={8} distance={14}>
        <IslamicStar className="h-20 w-20" />
      </Floaty>
      <Floaty className="pointer-events-none absolute bottom-12 right-12 hidden xl:block text-[#c8a24e]/20" duration={11} distance={9}>
        <DottedArc className="h-28 w-28" />
      </Floaty>
      <Floaty className="pointer-events-none absolute top-40 left-8 hidden xl:block text-[#c8a24e]/12" duration={13} distance={7}>
        <IslamicStar className="h-12 w-12" />
      </Floaty>

      {/* ——— Main Content ——— */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">

          {/* Left Column: Narrative & CTAs */}
          <Reveal className="lg:col-span-7 space-y-6 text-left" y={24} duration={0.8}>

            {/* Verified academy pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/8 backdrop-blur-md border border-[#c8a24e]/40 shadow-sm max-w-full">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white p-0.5 ring-1 ring-[#c8a24e] overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="An-Najat Official Seal"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#dcc07d] uppercase font-serif truncate">
                AN-NAJAT GLOBAL ISLAMIC ACADEMY ONLINE
              </span>
            </div>

            {/* Main headline */}
            <div className="space-y-2">
              <h1 className="text-hero font-extrabold text-[#fcf9f3] font-serif">
                Quran &amp; Islamic Studies
                <span className="block text-gold-gradient font-serif italic mt-1">
                  — Learn From Anywhere.
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-base sm:text-lg font-bold text-[#dcc07d] tracking-wide">
                One-to-One &amp; Small Group Live Online Classes
              </p>
              <p className="text-sm sm:text-base text-[#ece0c8]/90 leading-relaxed">
                Learn Quran, Hifz, Tajweed, Arabic and Islamic Studies through live online classes with dedicated teachers. Whether you are in Bangladesh or anywhere around the world, learn from the comfort of your home with a flexible schedule.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#c8a24e] via-[#dcc07d] to-[#c8a24e] hover:from-[#b89240] hover:to-[#c8a24e] text-[#05140f] font-extrabold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#05140f]" />
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4 text-[#05140f]" />
              </button>

              <a
                href="https://wa.me/8801602261329"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl border border-white/25 bg-white/6 hover:bg-white/12 text-[#fcf9f3] font-bold text-sm tracking-wide transition-all shadow-sm whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-[#c8a24e]" />
                <span>WhatsApp: 01602-261329</span>
              </a>
            </div>

            {/* Trust ticker */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-wider text-[#ece0c8]/70 font-semibold">
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a24e]" />
                  <span>Free Demo Class</span>
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a24e]" />
                  <span>Flexible Scheduling</span>
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a24e]" />
                  <span>Dedicated Teachers</span>
                </span>
              </div>

              {/* Mini global stats */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-bold text-[#ece0c8]/45 uppercase tracking-widest">
                <span>🌍 10+ Countries</span>
                <span className="text-[#c8a24e]/25">·</span>
                <span>👧 Ages 5 to Adult</span>
                <span className="text-[#c8a24e]/25">·</span>
                <span>📹 Zoom &amp; Meet</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Live Classroom Showcase Card */}
          <Reveal className="lg:col-span-5 relative w-full" delay={0.22} y={28} duration={0.85}>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#05140f]/85 backdrop-blur-xl">

              {/* Card Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Live Online Classroom
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/8 text-[11px] font-semibold text-[#dcc07d] border border-white/10">
                  <Video className="w-3.5 h-3.5" />
                  <span>Zoom / Meet</span>
                </div>
              </div>

              {/* Study image with overlay */}
              <div className="relative overflow-hidden group">
                <div className="h-52 sm:h-56 relative">
                  <img
                    src="/student-study.jpg"
                    alt="Quran and Islamic Studies Live Class"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04100c] via-[#04100c]/60 to-transparent" />

                  {/* Floating badges */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#05140f]/85 backdrop-blur-md border border-[#c8a24e]/40 text-[10px] font-bold text-[#dcc07d]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Interactive</span>
                  </div>
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/10 text-[10px] text-white/90">
                    <Video className="w-3 h-3 text-[#c8a24e]" />
                    <span>Zoom &amp; Meet</span>
                  </div>

                  {/* Quranic verse overlay */}
                  <div className="absolute bottom-3 inset-x-3 text-center">
                    <div className="font-arabic text-xl sm:text-2xl text-white font-bold leading-tight drop-shadow-lg">
                      اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
                    </div>
                    <p className="text-[11px] text-[#ece0c8]/85 italic mt-0.5 font-serif drop-shadow">
                      "Recite in the name of your Lord who created" (Surah Al-Alaq 96:1)
                    </p>
                  </div>
                </div>
              </div>

              {/* Format comparison mini cards */}
              <div className="grid grid-cols-2 gap-3 px-6 pt-5 pb-1">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c8a24e]/40 transition-colors">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8a24e]"></span>
                    One-to-One
                  </div>
                  <div className="text-[11px] text-[#ece0c8]/75 leading-snug">
                    Personalized attention · Individual learning plan
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#dcc07d]/40 transition-colors">
                  <div className="text-xs font-bold text-[#dcc07d] flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dcc07d]"></span>
                    Small Group
                  </div>
                  <div className="text-[11px] text-[#ece0c8]/75 leading-snug">
                    Interactive learning · Selected programs
                  </div>
                </div>
              </div>

              {/* Trust row */}
              <div className="grid grid-cols-2 gap-2 px-6 py-4 text-[11px] text-[#ece0c8]/65 border-t border-white/8 mt-3">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c8a24e] shrink-0" />
                  <span>Dedicated Teachers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#c8a24e] shrink-0" />
                  <span>Worldwide Access</span>
                </div>
              </div>

              {/* Action button */}
              <div className="px-6 pb-6">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#c8a24e] to-[#dcc07d] hover:from-[#b89240] hover:to-[#c8a24e] text-[#05140f] font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Sparkles className="w-4 h-4 text-[#05140f]" />
                  <span>Book a Free Demo Class</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25 text-[10px] uppercase tracking-widest select-none pointer-events-none">
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
