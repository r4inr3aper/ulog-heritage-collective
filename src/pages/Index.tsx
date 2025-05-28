
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EssenceSection from '@/components/EssenceSection';
import SocialImpact from '@/components/SocialImpact';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <EssenceSection />
      <SocialImpact />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
