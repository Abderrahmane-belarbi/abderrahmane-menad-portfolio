'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-accent/10 shadow-lg shadow-accent/5'
        : 'bg-background/40 backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <svg className="w-8 h-8 text-accent transition-smooth hover:scale-110 cursor-pointer" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 2C8.27 2 2 8.27 2 16c0 7.73 6.27 14 14 14s14-6.27 14-14c0-3.15-1.04-6.06-2.79-8.45L28 8l-2-4-3 2-1.5-2.5-3 2-2-3-3 1.5-2-2-1 3-3-1 1 2.5-2 1 2 3Z" />
          </svg>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12 items-center">
            <button
              onClick={() => scrollToSection('work')}
              className="text-foreground hover:text-accent transition-smooth text-sm font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-smooth" />
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-muted-foreground hover:text-foreground transition-smooth text-sm font-medium relative group"
            >
              Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-smooth" />
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-muted-foreground hover:text-foreground transition-smooth text-sm font-medium relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-smooth" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-smooth"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-accent" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-2 animate-fade-in-down">
            <button
              onClick={() => scrollToSection('work')}
              className="text-foreground hover:text-accent hover:bg-accent/5 transition-smooth text-left py-2 px-3 rounded-lg font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-muted-foreground hover:text-foreground hover:bg-accent/5 transition-smooth text-left py-2 px-3 rounded-lg font-medium"
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-muted-foreground hover:text-foreground hover:bg-accent/5 transition-smooth text-left py-2 px-3 rounded-lg font-medium"
            >
              Blog
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
