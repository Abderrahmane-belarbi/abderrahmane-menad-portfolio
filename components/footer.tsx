'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="relative bg-background border-t border-accent/10 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <svg 
            className={`w-14 h-14 text-accent mx-auto ${isVisible ? 'animate-float' : 'opacity-0'}`}
            viewBox="0 0 32 32" 
            fill="currentColor"
          >
            <path d="M16 2C8.27 2 2 8.27 2 16c0 7.73 6.27 14 14 14s14-6.27 14-14c0-3.15-1.04-6.06-2.79-8.45L28 8l-2-4-3 2-1.5-2.5-3 2-2-3-3 1.5-2-2-1 3-3-1 1 2.5-2 1 2 3Z" />
          </svg>
          
          <p className={`text-foreground text-lg ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Thanks for scrolling, {' '}
            <span className="text-muted-foreground">that&apos;s all folks.</span>
          </p>

          <div className={`flex justify-center gap-4 pt-4 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:border-accent hover:text-accent hover:bg-accent/10 transition-smooth group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-smooth" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.191-3.286" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:border-accent hover:text-accent hover:bg-accent/10 transition-smooth group"
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
              className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:border-accent hover:text-accent hover:bg-accent/10 transition-smooth group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-smooth" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          <div className={`pt-8 border-t border-border/40 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <p className="text-xs text-muted-foreground">
              © 2024 Carlos Mendoza. Crafted with attention to detail.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
