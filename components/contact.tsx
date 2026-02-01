'use client';

import React from "react"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Loader } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent! I will get back to you soon.');
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <div className={`${isInView ? 'scroll-slide-in-left' : 'scroll-animate-initial'}`}>
            <p className={`text-sm uppercase tracking-wider text-muted-foreground mb-4 ${isInView ? 'scroll-fade-up' : 'scroll-animate-initial'}`}>Get Started</p>
            <h2 className={`text-4xl font-bold text-foreground mb-8 ${isInView ? 'scroll-fade-up scroll-stagger-2' : 'scroll-animate-initial'}`}>
              Ready to Create<br />
              Something Amazing?
            </h2>
            <p className={`text-muted-foreground mb-8 ${isInView ? 'scroll-fade-up scroll-stagger-3' : 'scroll-animate-initial'}`}>
              Whether it's a striking graphic design, a compelling video production, or professional photography, I'm here to bring your vision to life.
            </p>
            <a href="mailto:hello@creativestudio.com" className={`inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-smooth font-semibold group ${isInView ? 'scroll-fade-up scroll-stagger-4' : 'scroll-animate-initial'}`}>
              <span>hello@creativestudio.com</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className={`space-y-6 ${isInView ? 'scroll-slide-in-right' : 'scroll-animate-initial'}`}>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Tell me about your project
              </label>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Share your creative brief.
              </h3>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                What&apos;s your name?
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="bg-transparent border-b border-border hover:border-muted-foreground text-foreground placeholder:text-muted-foreground/50 rounded-none px-0 py-2 focus:border-accent focus:ring-0"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                Your email address
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-transparent border-b border-border hover:border-muted-foreground text-foreground placeholder:text-muted-foreground/50 rounded-none px-0 py-2 focus:border-accent focus:ring-0"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                Tell me about your project
              </label>
              <div className="relative">
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project..."
                  rows={4}
                  className="bg-transparent border-b border-border hover:border-muted-foreground text-foreground placeholder:text-muted-foreground/50 rounded-none px-0 py-2 focus:border-accent focus:ring-0 resize-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="absolute bottom-2 right-0 text-accent hover:text-accent/80 transition disabled:opacity-50"
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <Loader className="animate-spin" size={20} />
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
