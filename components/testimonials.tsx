'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

const blogPosts = [
  {
    date: 'Mar 12',
    category: 'Insights',
    title: "Mastering Color Theory in Graphic Design",
  },
  {
    date: 'Mar 5',
    category: 'Tutorial',
    title: "5 Cinematic Techniques for Video Editing",
  },
  {
    date: 'Feb 28',
    category: 'Photography',
    title: "Natural Lighting Tips for Professional Photos",
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Director at TechBrand',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    content:
      'The branding graphics and marketing videos they created transformed our brand presence. Absolutely professional and creative!',
  },
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [ref, isInView] = useInView();
  const isVisible = isInView; // Declare isVisible variable

  return (
    <section id="blog" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Blog Section */}
        <div className="mb-24">
          <p className={`text-sm uppercase tracking-widest text-muted-foreground mb-4 font-medium ${isInView ? 'scroll-fade-up' : 'scroll-animate-initial'}`}>
            Insights
          </p>
          <h2 className={`text-4xl font-bold text-foreground mb-8 ${isInView ? 'scroll-fade-up scroll-stagger-2' : 'scroll-animate-initial'}`}>
            Creative Tips &<br />
            Industry Insights.
          </h2>

          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-4 py-4 border-b border-border/40 hover:border-accent/40 hover:bg-accent/5 transition-smooth group cursor-pointer rounded-lg scroll-animate-initial ${isInView ? `scroll-fade-up scroll-stagger-${index + 3}` : ''}`}
              >
                <div className="flex items-center gap-8 flex-1">
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-sm text-muted-foreground font-medium">{post.date}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-smooth">
                    {post.title}
                  </h3>
                </div>
                <svg
                  className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 flex-shrink-0 group-hover:translate-x-1 transition-smooth"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`relative scroll-animate-initial ${isInView ? 'scroll-slide-in-left' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-2xl" />
            <div className="relative w-72 h-72 overflow-hidden rounded-2xl border border-accent/20 group cursor-pointer">
              <Image
                src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                alt={testimonials[activeTestimonial].name}
                fill
                className="object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          </div>

          <div className={`scroll-animate-initial ${isInView ? 'scroll-slide-in-right' : ''}`}>
            <div className="text-7xl text-accent/20 mb-4 font-serif">"</div>
            <p className={`text-2xl text-foreground leading-relaxed mb-8 font-medium scroll-animate-initial ${isInView ? 'scroll-fade-up scroll-stagger-2' : ''}`}>
              {testimonials[activeTestimonial].content}
            </p>

            <div className={`mb-8 space-y-2 scroll-animate-initial ${isInView ? 'scroll-fade-up scroll-stagger-3' : ''}`}>
              <p className="font-semibold text-foreground text-lg">{testimonials[activeTestimonial].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</p>
            </div>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`rounded-full transition-all hover:bg-accent/40 ${
                    index === activeTestimonial 
                      ? 'bg-accent w-8 h-3' 
                      : 'bg-muted-foreground/30 w-3 h-3 hover:w-6'
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
