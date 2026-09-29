import React, { useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import DemoModal from '../Components/DemoModal';
import { MessageSquare } from 'lucide-react';

const Root = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleOpenDemo = (courseName = '') => {
    setSelectedCourse(courseName);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#131B18] font-sans selection:bg-[#0F3B2E] selection:text-white relative overflow-x-hidden w-full max-w-full">
      {/* Scroll restoration to top on route change */}
      <ScrollRestoration />

      {/* Institutional Top Navbar with React Router Links */}
      <Navbar onOpenDemo={() => handleOpenDemo()} />

      {/* Main Content Viewport */}
      <div className="flex-1 w-full max-w-full overflow-x-hidden">
        <Outlet context={{ openDemo: handleOpenDemo }} />
      </div>

      {/* Institutional Footer with React Router Links */}
      <Footer onOpenDemo={() => handleOpenDemo()} />

      {/* Interactive Free Demo Booking Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        preselectedCourse={selectedCourse}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/8801602261329"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#0F3B2E] hover:bg-[#185A47] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all border border-[#C8A261]/40 hover:scale-105 cursor-pointer"
          aria-label="Chat with Academy Coordinator on WhatsApp"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-[#C8A261]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
          </div>
          <span className="text-xs font-bold hidden sm:inline tracking-wide">
            WhatsApp Us
          </span>
        </a>
      </aside>
    </div>
  );
};

export default Root;
