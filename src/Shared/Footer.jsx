import React from 'react';
import { Link } from 'react-router';
import { BookOpen, MessageSquare, ArrowUp, Laptop, Video, Globe } from 'lucide-react';
import { SeamDivider } from '../Components/decor/SeamDivider';

const Footer = ({ onOpenDemo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const courses = [
    'Quran Reading',
    'Hifz Quran',
    'Pre-Hifz',
    'Tajweed',
    'Arabic',
    'Islamic Studies',
    'Kids Spoken English',
    'Junior Spoken English',
  ];

  return (
    <footer className="bg-[#05140f] text-[#fcf9f3] relative overflow-hidden">
      {/* Top ambient glow */}
      <span className="deco-glow left-1/2 -translate-x-1/2 -top-24 h-72 w-[700px] opacity-35" />

      {/* Arabic inscription at very top */}
      <div className="relative z-10 text-center pt-10 pb-2">
        <span className="font-arabic text-lg text-[#dcc07d]/50 leading-relaxed">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Col 1 & 2: Academy Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-4 group inline-flex select-none">
              {/* Triple-ring logo treatment */}
              <div className="relative w-16 h-16 shrink-0">
                <div className="absolute inset-0 rounded-full border-2 border-[#c8a24e]/20 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-[3px] rounded-full border border-[#c8a24e]/40" />
                <div className="absolute inset-0 rounded-full bg-white p-1 ring-2 ring-[#c8a24e]/70 group-hover:ring-[#c8a24e] flex items-center justify-center shadow-xl overflow-hidden transition-all">
                  <img
                    src="/logo.jpeg"
                    alt="An-Najat Global Islamic Academy Official Crest"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block font-serif">
                  AN-NAJAT GLOBAL
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#dcc07d] font-bold block">
                  Islamic Academy Online
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[#ece0c8]/45 block mt-0.5">
                  Est. ২০২০ ইং · Dhaka, Bangladesh
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#ece0c8]/65 leading-relaxed max-w-sm">
              An online learning platform dedicated to Quran and Islamic Studies education for children, teenagers, and adults worldwide through live, personalized instruction.
            </p>

            <div className="pt-1">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#dcc07d] mb-2.5">
                Official WhatsApp Coordination
              </div>
              <a
                href="https://wa.me/8801602261329"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-[#c8a24e]/35 text-white font-bold text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#c8a24e]" />
                <span>01602-261329</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#ece0c8]/50 pt-1">
              <span className="flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-[#c8a24e]" /> Zoom &amp; Meet
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Laptop className="w-3.5 h-3.5 text-[#c8a24e]" /> All Devices
              </span>
            </div>
          </div>

          {/* Col 3: Courses */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#dcc07d]">
              Our Courses
            </h4>
            <ul className="space-y-2.5 text-sm text-[#ece0c8]/70">
              {courses.slice(0, 5).map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="hover:text-white hover-gold-line transition-colors"
                  >
                    {course}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/courses" className="text-[#dcc07d] hover:text-white text-xs font-bold inline-flex items-center gap-1">
                  View all 8 programs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Academy Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#dcc07d]">
              Academy
            </h4>
            <ul className="space-y-2.5 text-sm text-[#ece0c8]/70">
              <li>
                <Link to="/about" className="hover:text-white hover-gold-line transition-colors">
                  About An-Najat Academy
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover-gold-line transition-colors">
                  Mission &amp; Vision
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white hover-gold-line transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white hover-gold-line transition-colors">
                  All 8 Programs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover-gold-line transition-colors">
                  FAQ &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Global Reach & CTA */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#dcc07d]">
              Global Presence
            </h4>
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4 text-[#c8a24e] shrink-0" />
              <p className="text-xs text-[#ece0c8]/60 leading-relaxed">
                Bangladesh, USA, Canada, UK, Italy, Saudi Arabia, UAE, Qatar, Kuwait, Oman &amp; worldwide.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenDemo}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#c8a24e] to-[#dcc07d] hover:from-[#b89240] hover:to-[#c8a24e] text-[#05140f] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Book a Free Demo Class
            </button>
          </div>

        </div>

        {/* Seam divider */}
        <SeamDivider className="mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ece0c8]/45">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} AN-NAJAT GLOBAL ISLAMIC ACADEMY ONLINE.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-[#dcc07d]/60 italic font-serif text-sm">
              "Learn Quran. Learn Islam. Learn From Anywhere."
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/12 text-white/70 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer border border-white/8"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#c8a24e]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
