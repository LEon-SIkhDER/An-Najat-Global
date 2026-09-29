import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, MessageSquare, ChevronRight, Sparkles, Globe } from 'lucide-react';

const Navbar = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Contact & FAQ', href: '/contact' },
  ];

  const solid = scrolled || !isHome || mobileMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        solid
          ? 'bg-[#05140f]/95 backdrop-blur-xl border-b border-[#c8a24e]/20 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.7)] py-2 sm:py-2.5'
          : 'bg-transparent border-b-0 border-transparent py-3 sm:py-3.5'
      }`}
    >
      {/* Top Utility Ticker (Merged & Borderless on Home) */}
      <div
        className={`hidden lg:block transition-all duration-300 ${
          scrolled ? 'max-h-0 opacity-0 overflow-hidden mb-0 pb-0' : 'max-h-10 opacity-100 pb-2 mb-1'
        } px-4 sm:px-6 lg:px-8`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#ece0c8]/85">
          <div className="flex items-center gap-2.5 truncate">
            <span className="inline-flex items-center gap-1.5 text-[#dcc07d] font-semibold whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Classes Open for Enrollment
            </span>
            <span className="text-white/20">•</span>
            <span className="truncate">One-to-One &amp; Small Group Live Online Classes</span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-xs">
            <a
              href="https://wa.me/8801602261329"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#fcf9f3] hover:text-[#dcc07d] transition-colors font-medium whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#c8a24e]" />
              <span>WhatsApp: <strong>01602-261329</strong></span>
            </a>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1 text-[#ece0c8]/85 whitespace-nowrap">
              <Globe className="w-3 h-3 text-[#c8a24e]" />
              <span>Worldwide Access</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo linking to Home */}
          <Link to="/" className="flex items-center gap-3 shrink-0 focus:outline-none select-none group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white p-0.5 shadow-md ring-2 ring-[#c8a24e]/70 group-hover:ring-[#c8a24e] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 shrink-0">
              <img
                src="/logo.jpeg"
                alt="An-Najat Global Islamic Academy Official Seal"
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            <div className="flex flex-col text-left leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white font-serif whitespace-nowrap">
                  AN-NAJAT
                </span>
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#dcc07d] px-1.5 py-0.5 rounded bg-[#c8a24e]/20 border border-[#c8a24e]/35 whitespace-nowrap">
                  GLOBAL
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-[#ece0c8]/80 font-medium whitespace-nowrap">
                Islamic Academy Online
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links - 5 Core Logical Pages */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `group relative px-3 py-1.5 text-xs sm:text-[13px] font-medium tracking-normal transition-colors whitespace-nowrap ${
                    isActive ? 'text-[#dcc07d] font-bold' : 'text-[#fcf9f3]/85 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <span
                      className={`absolute inset-x-2 -bottom-0.5 h-[1.5px] origin-left bg-[#c8a24e] transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/8801602261329"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#c8a24e]/40 bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#fcf9f3] transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#c8a24e]" />
              <span>WhatsApp Us</span>
            </a>

            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#c8a24e] to-[#dcc07d] hover:from-[#b89240] hover:to-[#c8a24e] text-[#05140f] text-xs font-bold tracking-wide shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#05140f]" />
              <span>Book a Free Demo</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenDemo}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-[#c8a24e] text-[#05140f] text-xs font-bold whitespace-nowrap"
            >
              Free Demo
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#05140f] border-b border-[#c8a24e]/30 px-6 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1 mb-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[#dcc07d] bg-white/10'
                      : 'text-[#fcf9f3]/85 hover:text-[#dcc07d] hover:bg-white/5'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#c8a24e]/50" />
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#c8a24e] to-[#dcc07d] text-[#05140f] font-bold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#05140f]" />
              <span>Book a Free Demo Class</span>
            </button>

            <a
              href="https://wa.me/8801602261329"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl border border-[#c8a24e]/40 bg-white/5 text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#c8a24e]" />
              <span>WhatsApp: 01602-261329</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
