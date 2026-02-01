'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'Brand Identity Overhaul',
    category: 'Graphic Design, Branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Product Launch Campaign',
    category: 'Video Production, Editing',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Fashion Editorial Series',
    category: 'Photography, Styling',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop',
  },
];

export default function ProjectShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="work" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className={`text-sm uppercase tracking-widest text-muted-foreground font-medium ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Portfolio
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Featured Works,<br />
            Creative Showcase.
          </h2>
          <p className={`text-muted-foreground max-w-2xl ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            Explore a curated selection of graphic designs, video productions, and photography projects that showcase excellence and creativity.
          </p>
          <button className={`mt-6 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-smooth font-semibold group ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            View Full Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-smooth" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group overflow-hidden rounded-xl bg-card border border-border/40 hover:border-accent/40 transition-smooth cursor-pointer ${
                isVisible ? `animate-fade-in-up delay-${(idx + 4) * 100}` : 'opacity-0'
              }`}
            >
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth z-10" />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-smooth duration-700"
                />
              </div>
              <div className="p-6 group-hover:bg-secondary/50 transition-smooth">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-smooth">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
