import React, { useState } from 'react';
import { BookOpen, BookmarkCheck, Sparkles, Mic, Compass, HeartHandshake, Languages, GraduationCap, ArrowRight } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './motion';

const categoryAccent = {
  quran: 'from-[#c8a24e] to-[#dcc07d]',
  islamic: 'from-[#0f3b2e] to-[#1f6f59]',
  skills: 'from-[#2a5fa3] to-[#4e84c4]',
};

const categoryBadgeStyle = {
  quran: 'bg-[#c8a24e]/12 text-[#a67f30] border-[#c8a24e]/25',
  islamic: 'bg-[#0f3b2e]/10 text-[#165342] border-[#0f3b2e]/20',
  skills: 'bg-[#2a5fa3]/10 text-[#2a5fa3] border-[#2a5fa3]/20',
};

const Courses = ({ onOpenDemo }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const courses = [
    {
      id: 'quran-reading',
      title: 'Quran Reading',
      category: 'quran',
      categoryLabel: 'Quran & Tajweed',
      icon: BookOpen,
      desc: 'Learn to read the Holy Quran correctly with proper pronunciation, fluency and regular guided practice.',
    },
    {
      id: 'hifz-quran',
      title: 'Hifz Quran',
      category: 'quran',
      categoryLabel: 'Quran & Tajweed',
      icon: BookmarkCheck,
      desc: 'A structured online Hifz program with memorization, revision, teacher guidance and regular progress monitoring.',
    },
    {
      id: 'pre-hifz',
      title: 'Pre-Hifz',
      category: 'quran',
      categoryLabel: 'Quran & Tajweed',
      icon: Sparkles,
      desc: 'Build a strong foundation in Quran reading, pronunciation, basic memorization and Islamic learning before starting full Hifz.',
    },
    {
      id: 'tajweed',
      title: 'Tajweed',
      category: 'quran',
      categoryLabel: 'Quran & Tajweed',
      icon: Mic,
      desc: 'Learn the essential rules of Tajweed and improve your Quran recitation with proper pronunciation and application.',
    },
    {
      id: 'arabic',
      title: 'Arabic Language',
      category: 'islamic',
      categoryLabel: 'Arabic & Islamic Studies',
      icon: Languages,
      desc: 'Learn practical Arabic through simple, level-appropriate lessons designed for effective communication and understanding.',
    },
    {
      id: 'islamic-studies',
      title: 'Islamic Studies',
      category: 'islamic',
      categoryLabel: 'Arabic & Islamic Studies',
      icon: Compass,
      desc: 'Learn essential Islamic knowledge, Salah, daily Duas, Islamic manners, Seerah and important teachings of Islam.',
    },
    {
      id: 'kids-spoken-english',
      title: 'Kids Spoken English',
      category: 'skills',
      categoryLabel: 'Spoken English',
      icon: HeartHandshake,
      desc: 'Build basic English speaking skills, simple vocabulary, listening ability and communication confidence.',
    },
    {
      id: 'junior-spoken-english',
      title: 'Junior Spoken English',
      category: 'skills',
      categoryLabel: 'Spoken English',
      icon: GraduationCap,
      desc: 'Develop conversation skills, vocabulary, pronunciation and confidence for effective everyday communication.',
    },
  ];

  const filteredCourses = activeFilter === 'all'
    ? courses
    : courses.filter((c) => c.category === activeFilter);

  const filterTabs = [
    { key: 'all', label: 'All 8 Courses' },
    { key: 'quran', label: 'Quran & Tajweed' },
    { key: 'islamic', label: 'Arabic & Islamic Studies' },
    { key: 'skills', label: 'Spoken English' },
  ];

  return (
    <section id="courses" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 bg-[#fcf9f3]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12" y={20}>
          <p className="eyebrow justify-center">Curriculum</p>
          <h2 className="text-section-title font-extrabold text-[#05140f] font-serif mt-3">
            Our Online Courses
          </h2>
          <span className="rule-draw mx-auto mt-4 block" />
          <p className="mt-3 text-sm sm:text-base text-[#3e4844] leading-relaxed">
            Live online classes for Quran, Hifz, Tajweed, Arabic, Islamic Studies, and Spoken English.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap border ${
                  activeFilter === tab.key
                    ? 'bg-[#0f3b2e] text-[#fcf9f3] border-[#0f3b2e] shadow-sm'
                    : 'bg-white text-[#3e4844] border-emerald-900/12 hover:border-[#c8a24e]/50 hover:text-[#05140f]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Course Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.06}>
          {filteredCourses.map((course) => {
            const Icon = course.icon;
            return (
              <StaggerItem
                key={course.id}
                className="group relative rounded-3xl p-6 bg-white border border-emerald-900/10 shadow-sm hover:border-[#c8a24e]/60 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top accent bar */}
                <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${categoryAccent[course.category]} opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div>
                  <div className="flex items-center justify-between mb-5 mt-1">
                    <div className="w-12 h-12 rounded-2xl bg-[#0f3b2e]/10 text-[#0f3b2e] flex items-center justify-center group-hover:bg-[#0f3b2e] group-hover:text-[#dcc07d] transition-all duration-300 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border whitespace-nowrap ${categoryBadgeStyle[course.category]}`}>
                      {course.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#05140f] tracking-tight font-serif mb-3 leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-sm text-[#3e4844] leading-relaxed mb-6">
                    {course.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-900/8">
                  <button
                    type="button"
                    onClick={() => onOpenDemo(course.title)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#0f3b2e]/8 hover:bg-[#0f3b2e] text-[#0f3b2e] hover:text-[#fcf9f3] font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Book Free Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#c8a24e] group-hover:text-[#dcc07d]" />
                  </button>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default Courses;
