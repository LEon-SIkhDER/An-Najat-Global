import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Are your classes One-to-One?',
      a: 'Yes. One-to-One live classes are a core part of our online learning system.',
    },
    {
      q: 'Do you offer Group Classes?',
      a: 'Yes. Small Group live classes are available for selected courses and programs.',
    },
    {
      q: 'Is the Demo Class Free?',
      a: 'Yes. Students can attend a free demo class before enrollment.',
    },
    {
      q: 'Do you teach children and adults?',
      a: 'Yes. Our programs are available for kids, teenagers and adults.',
    },
    {
      q: 'How are the classes conducted?',
      a: 'Classes are conducted live through Zoom or Google Meet.',
    },
    {
      q: 'Can students join from outside Bangladesh?',
      a: 'Yes. Students from Bangladesh and other countries can join our online classes.',
    },
    {
      q: 'Can I choose my class schedule?',
      a: 'We try to arrange a suitable schedule according to student and teacher availability.',
    },
    {
      q: 'What do I need to join?',
      a: 'A smartphone, tablet or computer with a stable internet connection is sufficient.',
    },
    {
      q: 'How long is each class?',
      a: "Class duration may vary depending on the student's age, course and learning needs.",
    },
    {
      q: 'Can beginners join?',
      a: "Yes. Beginners are welcome. Courses can be started according to the student's current level.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 bg-[#fcf9f3]">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="text-center mb-14" y={20}>
          <p className="eyebrow justify-center">Clarifications</p>
          <div className="inline-flex items-center gap-2 mt-2 mb-3">
            <span className="tag-gold">10 Questions Answered</span>
          </div>
          <h2 className="text-section-title font-extrabold text-[#05140f] font-serif">
            Frequently Asked Questions
          </h2>
          <span className="rule-draw mx-auto mt-4 block" />
        </Reveal>

        {/* Accordion */}
        <StaggerContainer className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const numLabel = String(idx + 1).padStart(2, '0');
            return (
              <StaggerItem
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#0f3b2e]/35 shadow-md'
                    : 'bg-white/80 border-emerald-900/10 hover:border-[#c8a24e]/50 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs font-extrabold text-[#c8a24e]/60 font-serif shrink-0 w-6">
                      {numLabel}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#05140f] tracking-tight font-serif leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#0f3b2e] text-white rotate-180'
                        : 'bg-[#f6efe0] text-[#0f3b2e]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-neutral-100">
                    <div className="pl-9 border-l-2 border-[#c8a24e]/40 text-sm sm:text-base text-[#3e4844] leading-relaxed py-1">
                      {faq.a}
                    </div>
                  </div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Quick Contact Box */}
        <Reveal
          className="mt-10 p-6 sm:p-7 rounded-2xl bg-white border border-emerald-900/12 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5"
          delay={0.2}
          y={15}
        >
          <div className="text-center sm:text-left">
            <div className="text-base font-bold text-[#05140f] font-serif">Have more questions?</div>
            <div className="text-xs text-[#67756f] mt-1">
              Connect directly through WhatsApp: <strong>01602-261329</strong>
            </div>
          </div>
          <a
            href="https://wa.me/8801602261329"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0f3b2e] hover:bg-[#165342] text-white text-xs font-bold transition-all shrink-0 shadow-sm whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 text-[#dcc07d]" />
            <span>WhatsApp Us Now</span>
          </a>
        </Reveal>

      </div>
    </section>
  );
};

export default FAQ;
