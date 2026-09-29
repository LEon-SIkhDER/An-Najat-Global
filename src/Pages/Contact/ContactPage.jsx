import React from 'react';
import { useOutletContext, Link } from 'react-router';
import { MessageSquare, Sparkles, Phone, Mail, Clock, Globe, ArrowRight, ChevronRight } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '../../Components/motion';
import FAQ from '../../Components/FAQ';
import Marquee from '../../Components/decor/Marquee';
import FinalCTA from '../../Components/FinalCTA';

const ContactPage = () => {
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
              <span className="text-[#dcc07d] font-semibold">Contact &amp; FAQ</span>
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
                Admissions &amp; Support
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif">
              Get in Touch &amp; Questions
            </h1>
            <span className="rule-draw mx-auto mt-4 block" />
            <p className="mt-4 text-sm sm:text-base text-[#ece0c8]/85 max-w-2xl mx-auto leading-relaxed">
              Our academy coordinators are available on WhatsApp to assist with course selection, schedule planning, and free demo class bookings worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Official WhatsApp & Quick Help Cards */}
      <section className="py-14 sm:py-16 bg-[#fcf9f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto -mt-20 relative z-20">
            
            {/* WhatsApp Card */}
            <StaggerItem className="bg-white rounded-3xl p-7 border border-[#c8a24e]/40 shadow-lg flex flex-col justify-between group hover:border-[#c8a24e] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-700/10 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6 text-[#0f3b2e]" />
                </div>
                <div className="text-xs font-bold text-[#c8a24e] uppercase tracking-wider mb-1">
                  Official WhatsApp
                </div>
                <h3 className="text-xl font-extrabold text-[#05140f] font-serif mb-2">
                  01602-261329
                </h3>
                <p className="text-xs text-[#3e4844] leading-relaxed">
                  Fastest response for inquiries, demo scheduling, fee details, and teacher coordination.
                </p>
              </div>
              <div className="pt-5">
                <a
                  href="https://wa.me/8801602261329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0f3b2e] hover:bg-[#165342] text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#c8a24e]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </StaggerItem>

            {/* Free Demo Card */}
            <StaggerItem className="bg-[#05140f] text-white rounded-3xl p-7 border border-[#c8a24e]/50 shadow-lg flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#dcc07d] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6 text-[#dcc07d]" />
                </div>
                <div className="text-xs font-bold text-[#dcc07d] uppercase tracking-wider mb-1">
                  Trial Assessment
                </div>
                <h3 className="text-xl font-extrabold text-white font-serif mb-2">
                  Book a Free Demo
                </h3>
                <p className="text-xs text-[#ece0c8]/75 leading-relaxed">
                  Experience live interactive online learning with a dedicated teacher before formal enrollment.
                </p>
              </div>
              <div className="pt-5">
                <button
                  type="button"
                  onClick={() => handleOpenDemo()}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#c8a24e] to-[#dcc07d] hover:from-[#b89240] hover:to-[#c8a24e] text-[#05140f] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-[#05140f]" />
                  <span>Book Free Demo</span>
                </button>
              </div>
            </StaggerItem>

            {/* Global Reach Card */}
            <StaggerItem className="bg-white rounded-3xl p-7 border border-emerald-900/10 shadow-lg flex flex-col justify-between group hover:border-[#c8a24e] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0f3b2e]/10 text-[#0f3b2e] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6 text-[#0f3b2e]" />
                </div>
                <div className="text-xs font-bold text-[#c8a24e] uppercase tracking-wider mb-1">
                  Worldwide Access
                </div>
                <h3 className="text-xl font-extrabold text-[#05140f] font-serif mb-2">
                  10+ Countries
                </h3>
                <p className="text-xs text-[#3e4844] leading-relaxed">
                  Students from Bangladesh, USA, Canada, UK, Italy, Saudi Arabia, UAE, Qatar, Kuwait, and Oman.
                </p>
              </div>
              <div className="pt-5 text-xs text-[#3e4844] border-t border-emerald-900/10 pt-3 flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#c8a24e]" />
                <span>Flexible time zones &amp; schedules</span>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* 10 Frequently Asked Questions Accordion */}
      <FAQ />

      {/* Marquee Tape */}
      <Marquee tone="dark" />

      {/* Final Action */}
      <FinalCTA onOpenDemo={handleOpenDemo} />
    </main>
  );
};

export default ContactPage;
