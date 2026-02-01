'use client';

import HeroSection from '@/components/hero-section';
import ProjectShowcase from '@/components/project-showcase';
import Services from '@/components/services';
import Experience from '@/components/experience';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ProjectShowcase />
      <Services />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
