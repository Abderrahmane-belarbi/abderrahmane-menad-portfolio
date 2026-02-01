'use client';

import { useInView } from '@/hooks/useInView';

const experiences = [
  {
    year: '2022 - Present',
    title: 'Lead Creative Designer',
    company: 'Creative Studios Inc',
    description: 'Directing visual strategy and leading design projects for major brands',
  },
  {
    year: '2020 - 2022',
    title: 'Senior Video Editor',
    company: 'Design Collective',
    description: 'Managing video production and overseeing cinematic projects across multiple brands',
  },
  {
    year: '2018 - 2020',
    title: 'Freelance Creative Professional',
    company: 'Self-Employed',
    description: 'Working with startups and established brands on design, video, and photography projects',
  },
  {
    year: '2016 - 2018',
    title: 'Junior Designer & Photographer',
    company: 'Digital Agency Pro',
    description: 'Developed skills in graphic design, video editing, and professional photography',
  },
];

export default function Experience() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16" ref={ref}>
          <p className={`text-accent font-semibold mb-4 text-lg ${isInView ? 'scroll-fade-up' : 'scroll-animate-initial'}`}>
            My Journey
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground ${isInView ? 'scroll-fade-up scroll-stagger-2' : 'scroll-animate-initial'}`}>
            Experience & Timeline
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/40" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`md:grid md:grid-cols-2 md:gap-8 items-center scroll-animate-initial ${isInView ? `scroll-fade-up scroll-stagger-${index + 1}` : 'scroll-animate-initial'}`}
              >
                {/* Left side - alternating */}
                <div
                  className={`md:text-right ${
                    index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                  }`}
                >
                  {index % 2 === 0 && (
                    <div className="space-y-3 p-6 md:p-0 md:pr-8 rounded-lg md:rounded-none hover:bg-secondary/30 md:hover:bg-transparent transition-smooth">
                      <p className="text-accent font-bold text-lg">{exp.year}</p>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-smooth">{exp.title}</h3>
                      <p className="text-accent/80 font-semibold">{exp.company}</p>
                      <p className="text-foreground/70 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex justify-center py-4">
                  <div className={`w-4 h-4 bg-accent rounded-full ring-4 ring-background ring-offset-border ring-offset-2 transition-smooth ${isInView ? 'scale-100' : 'scale-0'}`} />
                </div>

                {/* Right side - alternating */}
                <div
                  className={`md:col-start-2 ${
                    index % 2 === 1 ? '' : 'md:col-start-2'
                  }`}
                >
                  {index % 2 === 1 && (
                    <div className="space-y-3 p-6 md:p-0 md:pl-8 rounded-lg md:rounded-none hover:bg-secondary/30 md:hover:bg-transparent transition-smooth">
                      <p className="text-accent font-bold text-lg">{exp.year}</p>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-smooth">{exp.title}</h3>
                      <p className="text-accent/80 font-semibold">{exp.company}</p>
                      <p className="text-foreground/70 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Mobile version - no timeline */}
                <div className="md:hidden space-y-3 p-6 bg-card border border-accent/20 hover:border-accent/40 rounded-lg transition-smooth">
                  <p className="text-accent font-bold text-lg">{exp.year}</p>
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-accent/80 font-semibold">{exp.company}</p>
                  <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
