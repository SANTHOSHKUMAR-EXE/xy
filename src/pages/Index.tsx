
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import WorkflowSection from '@/components/WorkflowSection';
import DemoSection from '@/components/DemoSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-vastav-darkBlue text-white relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-radial from-vastav-purple/5 via-transparent to-transparent"></div>
      
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <DemoSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
