import React from 'react';
import { Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { IslamicStar } from './decor/Vectors';
import { Reveal, Floaty } from './motion';

const FinalCTA = ({ onOpenDemo }) => {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36 bg-[#05140f] text-[#fcf9f3] text-center select-none">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 text-white bg-dots opacity-[0.035]" />

      {/* Ambient glows */}
      <span className="deco-glow -left-20 top-1/3 h-96 w-96 opacity-50" />
      <span className="deco-glow right-0 bottom-1/4 h-96 w-96 opacity-50" />
      <span className="deco-glow left-1/2 -translate-x-1/2 -bottom-20 h-64 w-[600px] opacity-30" />

      {/* Faded logo watermark */}
      <img
        src="/logo.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 object-contain opacity-[0.04] pointer-events-none select-none rounded-full"
      />

      {/* Floating Islamic stars */}
      <Floaty className="pointer-events-none absolute left-8 top-16 hidden lg:block text-[#c8a24e]/18" duration={9} distance={12}>
        <IslamicStar className="h-16 w-16" />
      </Floaty>
      <Floaty className="pointer-events-none absolute right-12 top-12 hidden lg:block text-[#c8a24e]/22" duration={7} distance={16}>
        <IslamicStar className="h-24 w-24" />
      </Floaty>
      <Floaty className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-12 hidden lg:block text-[#c8a24e]/12" duration={11} distance={8}>
        <IslamicStar className="h-10 w-10" />
      </Floaty>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal y={24}>
          {/* Arabic Bismillah inscription */}
          <div className="font-arabic text-2xl sm:text-3xl text-[#dcc07d]/60 mb-4 leading-relaxed">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </div>

          {/* Eyebrow */}
          <p className="eyebrow justify-center !text-[#dcc07d] mb-5">
            START YOUR LEARNING JOURNEY TODAY
          </p>

          {/* Grand headline */}
          <h2 className="text-section-title sm:text-5xl font-extrabold text-white tracking-tight leading-[1.14] mb-5 font-serif max-w-3xl mx-auto">
            Learn Quran. Learn Islam.
            <span className="block text-gold-gradient font-serif italic mt-2">
              Learn From Anywhere.
            </span>
          </h2>

          {/* Academy statement */}
          <p className="text-base sm:text-lg text-[#dcc07d] font-serif font-bold max-w-xl mx-auto mb-2">
            AN-NAJAT GLOBAL ISLAMIC ACADEMY ONLINE
          </p>
          <p className="text-sm text-[#ece0c8]/65 max-w-md mx-auto mb-10 leading-relaxed">
            Quran &amp; Islamic Studies for Kids, Teenagers &amp; Adults — Worldwide
          </p>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={0.18} y={18}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button
              type="button"
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#c8a24e] via-[#dcc07d] to-[#c8a24e] hover:from-[#b89240] hover:to-[#c8a24e] text-[#05140f] font-extrabold text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-4 h-4 text-[#05140f]" />
              <span>Book Your FREE Demo Class</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/8801602261329"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/8 hover:bg-white/16 border border-white/20 text-white font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-[#dcc07d]" />
              <span>WhatsApp: 01602-261329</span>
            </a>
          </div>

          {/* Trust footnote */}
          <p className="mt-6 text-xs text-[#ece0c8]/40 uppercase tracking-widest">
            Free Demo · No obligations · Flexible schedule
          </p>
        </Reveal>

      </div>
    </section>
  );
};

export default FinalCTA;
