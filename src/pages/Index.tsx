import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SocialMediaPopup from '@/components/SocialMediaPopup';

const Index = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key.toLowerCase() === 'b') {
      event.preventDefault();
      setIsPopupVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <SocialMediaPopup isVisible={isPopupVisible} onClose={() => setIsPopupVisible(false)} />
    </div>
  );
};

export default Index;