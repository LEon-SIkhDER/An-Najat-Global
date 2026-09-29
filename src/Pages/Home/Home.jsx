import React from 'react';
import { useOutletContext } from 'react-router';
import Hero from '../../Components/Hero';
import TrustStats from '../../Components/TrustStats';
import Courses from '../../Components/Courses';
import LearningOptions from '../../Components/LearningOptions';
import WhyAnNajat from '../../Components/WhyAnNajat';
import HowItWorks from '../../Components/HowItWorks';
import AgeGroups from '../../Components/AgeGroups';
import GlobalPresence from '../../Components/GlobalPresence';
import Teachers from '../../Components/Teachers';
import ClassExperience from '../../Components/ClassExperience';
import AboutMission from '../../Components/AboutMission';
import FAQ from '../../Components/FAQ';
import FinalCTA from '../../Components/FinalCTA';
import Marquee from '../../Components/decor/Marquee';
import SeamDivider from '../../Components/decor/SeamDivider';

const Home = () => {
  const context = useOutletContext() || {};
  const handleOpenDemo = context.openDemo || (() => {});

  return (
    <main className="flex-1 overflow-x-hidden">
      {/* 1. Dramatic Hero with frosted live classroom card */}
      <Hero onOpenDemo={handleOpenDemo} />

      {/* 2. Slow-scrolling Marquee Ribbon (Dark) */}
      <Marquee tone="dark" />

      {/* 3. Trust & Credibility Section (Watermark 01) */}
      <TrustStats onOpenDemo={handleOpenDemo} />

      {/* Elegant Hairline Seam Divider */}
      <SeamDivider />

      {/* 4. Academic Courses (Watermark 02) */}
      <Courses onOpenDemo={handleOpenDemo} />

      {/* 5. Slow-scrolling Marquee Ribbon (Ivory) */}
      <Marquee tone="light" />

      {/* 6. Learning Options: One-to-One vs Small Group (Watermark 03) */}
      <LearningOptions onOpenDemo={handleOpenDemo} />

      <SeamDivider />

      {/* 7. Why Choose An-Najat (Watermark 04) */}
      <WhyAnNajat />

      <SeamDivider />

      {/* 8. How It Works (Watermark 05) */}
      <HowItWorks onOpenDemo={handleOpenDemo} />

      <SeamDivider />

      {/* 9. Learning for Every Age (Watermark 06) */}
      <AgeGroups onOpenDemo={handleOpenDemo} />

      {/* 10. Global Learning & 10 Countries (Watermark 07 - Midnight Contrast) */}
      <GlobalPresence onOpenDemo={handleOpenDemo} />

      {/* 11. Faculty Profile Framework (Watermark 08) */}
      <Teachers onOpenDemo={handleOpenDemo} />

      <SeamDivider />

      {/* 12. Online Class Experience: Zoom, Meet, Devices (Watermark 09) */}
      <ClassExperience onOpenDemo={handleOpenDemo} />

      <SeamDivider />

      {/* 13. About Academy, Mission & Vision (Watermark 10) */}
      <AboutMission />

      <SeamDivider />

      {/* 14. Frequently Asked Questions Accordion (Watermark 11) */}
      <FAQ />

      {/* 15. Grand Final Call to Action */}
      <FinalCTA onOpenDemo={handleOpenDemo} />
    </main>
  );
};

export default Home;
