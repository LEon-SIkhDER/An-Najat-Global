import React from 'react';
import { Video, Smartphone, Tablet, Laptop, Sparkles, Wifi } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './motion';

const ClassExperience = ({ onOpenDemo }) => {
  const devices = [
    { icon: Smartphone, title: 'Smartphone', desc: 'iOS & Android' },
    { icon: Tablet, title: 'Tablet', desc: 'iPad & Android Tablet' },
    { icon: Laptop, title: 'Computer', desc: 'Windows & Mac' },
  ];

  return (
    <section className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 bg-[#fcf9f3]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-14" y={20}>
          <p className="eyebrow justify-center">Online Classroom</p>
          <h2 className="text-section-title font-extrabold text-[#05140f] font-serif mt-3">
            Our Online Class Experience
          </h2>
          <span className="rule-draw mx-auto mt-4 block" />
          <div className="flex items-center justify-center gap-3 mt-4 text-base sm:text-lg font-bold text-[#0f3b2e] font-serif">
            <span>Live</span>
            <span className="text-[#c8a24e]">✦</span>
            <span>Personal</span>
            <span className="text-[#c8a24e]">✦</span>
            <span>Interactive</span>
          </div>
        </Reveal>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Platform card — DARK */}
          <Reveal className="bg-[#0c2b21] rounded-3xl p-7 sm:p-9 border border-[#c8a24e]/25 shadow-xl relative overflow-hidden" y={22} delay={0.05}>
            <span className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-[#c8a24e]/8 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#dcc07d] mb-6">
                Our classes are conducted live through:
              </p>

              <div className="space-y-4">
                {/* Zoom */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/6 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center shrink-0">
                    <Video className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-white font-serif">Zoom</div>
                    <div className="text-xs text-[#ece0c8]/55">Live video conferencing</div>
                  </div>
                  <div className="ml-auto">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 block animate-pulse" />
                  </div>
                </div>

                {/* Google Meet */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/6 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center shrink-0">
                    <Video className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-white font-serif">Google Meet</div>
                    <div className="text-xs text-[#ece0c8]/55">Seamless online meetings</div>
                  </div>
                  <div className="ml-auto">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 block animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Devices card — LIGHT */}
          <Reveal className="flex flex-col gap-5" y={22} delay={0.15}>
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-emerald-900/12 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0f3b2e] mb-5">
                Students can join using:
              </p>
              <StaggerContainer className="grid grid-cols-3 gap-4" staggerDelay={0.07}>
                {devices.map((dev) => {
                  const Icon = dev.icon;
                  return (
                    <StaggerItem
                      key={dev.title}
                      className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#f6efe0]/60 border border-emerald-900/8 hover:border-[#c8a24e]/40 hover:bg-[#f6efe0] transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-2 shadow-xs">
                        <Icon className="w-5 h-5 text-[#0f3b2e]" />
                      </div>
                      <h3 className="text-xs font-bold text-[#05140f] font-serif leading-tight">{dev.title}</h3>
                      <p className="text-[10px] text-[#67756f] mt-0.5">{dev.desc}</p>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>

            {/* Internet requirement note */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#0f3b2e]/6 border border-[#0f3b2e]/10">
              <Wifi className="w-5 h-5 text-[#0f3b2e] shrink-0" />
              <p className="text-xs sm:text-sm text-[#3e4844] leading-relaxed">
                All you need is a suitable device and a stable internet connection.
              </p>
            </div>
          </Reveal>

        </div>

        {/* CTA */}
        <Reveal className="text-center mt-12" delay={0.3} y={15}>
          <button
            type="button"
            onClick={() => onOpenDemo()}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0f3b2e] hover:bg-[#165342] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 text-[#dcc07d]" />
            <span>Book a Free Demo Class</span>
          </button>
        </Reveal>

      </div>
    </section>
  );
};

export default ClassExperience;
