'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Creative<br />Studio.
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-accent/60 rounded-full" />
            </div>

            <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Introduction</p>
              <h2 className="text-2xl font-semibold text-foreground">
                Graphic Designer, Video Editor & Photographer based in Los Angeles.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Specializing in visual storytelling through stunning graphics, cinematic videos, and captivating photography. Creating memorable visual experiences for brands and creators worldwide.
              </p>
            </div>

            <div className={`${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-smooth group font-medium"
              >
                <span>My story</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-smooth" />
              </Link>
            </div>

            <div className={`flex gap-4 pt-4 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:border-accent hover:text-accent hover:bg-accent/5 transition-smooth group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-smooth" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.191-3.286" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:border-accent hover:text-accent hover:bg-accent/5 transition-smooth group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-smooth" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 11.37A4 4 0 1112.63 8A4 4 0 0116 11.37Z" fill="currentColor" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:border-accent hover:text-accent hover:bg-accent/5 transition-smooth group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-smooth" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-xl border border-accent/20 group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                alt="Carlos Mendoza"
                fill
                className="object-cover group-hover:scale-105 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
