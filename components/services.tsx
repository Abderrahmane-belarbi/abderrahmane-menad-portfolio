'use client';

import { Palette, Video, Camera } from 'lucide-react';
import { useState, useEffect } from 'react';

const services = [
  {
    icon: Palette,
    title: 'Graphic Design.',
    count: '156 Projects',
    highlight: true,
  },
  {
    icon: Video,
    title: 'Video Editing.',
    count: '89 Projects',
  },
  {
    icon: Camera,
    title: 'Photography.',
    count: '234 Projects',
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className={`text-sm uppercase tracking-widest text-muted-foreground mb-4 font-medium ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Services
            </p>
            <h2 className={`text-4xl font-bold text-foreground mb-6 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
              Creative Solutions<br />
              for Your Vision.
            </h2>
            <p className={`text-muted-foreground mb-6 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              From striking graphic designs to cinematic videos and professional photography, I deliver visual excellence tailored to your brand.
            </p>
            <a href="mailto:hello@creativestudio.com" className={`inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-smooth font-semibold group ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
              <span>hello@creativestudio.com</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="space-y-8">
            <div className={`${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              <p className="text-6xl md:text-7xl font-bold text-accent mb-3">8+</p>
              <p className="text-muted-foreground text-lg">Years of<br />Creative Excellence.</p>
            </div>
            <div className={`${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
              <p className="text-6xl md:text-7xl font-bold text-accent mb-3">300+</p>
              <p className="text-muted-foreground text-lg">Successful<br />Projects Completed.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-xl border transition-smooth group cursor-pointer overflow-hidden relative ${
                  service.highlight
                    ? 'bg-accent text-accent-foreground border-accent shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30'
                    : 'bg-secondary/40 border-border/40 text-foreground hover:border-accent/40 hover:bg-secondary/60'
                } ${isVisible ? `animate-fade-in-up delay-${(index + 4) * 100}` : 'opacity-0'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                
                <div className="relative z-10">
                  <div className={`flex items-start gap-4 mb-6 group-hover:scale-110 transition-smooth origin-top-left ${service.highlight ? 'text-accent-foreground' : 'text-accent'}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-smooth">
                    {service.title}
                  </h3>
                  <p className={`font-medium ${service.highlight ? 'text-accent-foreground/80' : 'text-muted-foreground group-hover:text-muted-foreground/90'} transition-smooth`}>
                    {service.count}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
