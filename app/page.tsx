"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { blogPosts, navLinks, services, socials, testimonials, workCategories, works, type WorkCategory, type WorkItem } from "./data/works";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [activeFilter, setActiveFilter] = useState<WorkCategory>("All");
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuBlurOpen, setIsMobileMenuBlurOpen] = useState(false);
  
  useEffect(() => {
  if (!isMobileMenuOpen) {
    const timeoutId = setTimeout(() => {
      setIsMobileMenuBlurOpen(false);
    }, 150);
    return () => clearTimeout(timeoutId);
  }
}, [isMobileMenuOpen]);

 useEffect(() => {
  if (isMobileMenuBlurOpen) {
    setIsMobileMenuOpen(true);
  }
}, [isMobileMenuBlurOpen]);


  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedWork) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedWork(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedWork]);

  const filteredWorks = useMemo(() => {
    if (activeFilter === "All") return works;
    return works.filter((work) => work.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[rgba(11,15,20,0.9)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-(--accent)">
              <span className="h-2 w-2 rounded-full bg-(--accent) shadow-[0_0_20px_rgba(244,184,58,0.8)]" />
                MENAD
            </div>
            <a
              href="#contact"
              className="rounded-full border border-(--card-border) px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-(--accent) hover:text-(--accent) focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--accent) lg:hidden"
            >
              Let&apos;s Talk
            </a>
            <button
                type="button"
                onClick={() => setIsMobileMenuBlurOpen(true)}
                className="flex sm:hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground transition hover:border-(--accent) hover:text-(--accent) focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
                aria-label="Open navigation menu"
              >
                ☰
              </button>
          </div>
          <nav className="hidden sm:flex items-center gap-6 overflow-x-auto text-sm font-medium text-(--muted)">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative whitespace-nowrap py-2 transition-colors hover:text-foreground ${
                  activeSection === link.id ? "text-foreground" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 top-full h-0.5 w-full rounded-full bg-(--accent) transition-all ${
                    activeSection === link.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full border border-(--card-border) px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-(--accent) hover:text-(--accent) focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--accent) lg:inline-flex"
          >
            Let&apos;s Talk
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 lg:px-10 lg:pt-20">
        <section
          id="hero"
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
        >
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">
              Creative Portfolio
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              ABDERRAHMANE MENAD
            </h1>
            <p className="mt-3 text-lg font-medium text-(--accent) sm:text-xl">
              Graphic Designer &amp; Video Editor
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-(--muted) sm:text-lg">
              I craft premium visual identities, motion-forward edits, and high-impact
              YouTube packaging for ambitious brands and creators who want to stand out.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#works"
                className="rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0b0f14] shadow-[0_12px_30px_rgba(244,184,58,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(244,184,58,0.35)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-(--card-border) px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent) focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              >
                Contact
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4 text-sm text-(--muted)">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:-translate-y-0.5 hover:border-(--accent) hover:text-foreground focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
                >
                  <span className="h-2 w-2 rounded-full bg-(--accent)" />
                  {social.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-[rgba(244,184,58,0.12)] blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-(--card) shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <Image
                src="/portrait-placeholder.svg"
                alt="Portrait placeholder"
                width={640}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-[rgba(11,15,20,0.7)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur">
                Available for new projects
              </div>
            </div>
          </Reveal>
        </section>

        <section id="services" className="flex flex-col gap-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
              Elevated design solutions for modern brands.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-(--muted) sm:text-lg">
              From identity systems to motion-first content, every deliverable is crafted
              to feel refined, cohesive, and ready to launch.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 100}>
                <div className="group h-full rounded-3xl border border-white/10 bg-(--card) p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:border-(--accent)">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(244,184,58,0.12)] text-(--accent)">
                    <span className="text-lg font-semibold">✦</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-(--muted)">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="works" className="flex flex-col gap-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">
              Works
            </p>
            <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                  Selected projects with visual impact.
                </h2>
                <p className="mt-3 max-w-2xl text-base text-(--muted) sm:text-lg">
                  Explore a curated mix of branding, motion, and short-form storytelling.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {workCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveFilter(category)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--accent) ${
                      activeFilter === category
                        ? "border-(--accent) bg-[rgba(244,184,58,0.12)] text-foreground"
                        : "border-white/10 text-(--muted) hover:border-(--accent) hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredWorks.map((work, index) => (
              <Reveal key={work.id} delay={index * 120}>
                <button
                  type="button"
                  onClick={() => setSelectedWork(work)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-(--card) text-left shadow-[0_24px_60px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-2 hover:border-(--accent) focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={work.coverImage}
                      alt={work.title}
                      width={720}
                      height={520}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[rgba(11,15,20,0.7)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur">
                      {work.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-xl font-semibold text-foreground">
                      {work.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-(--muted)">
                      {work.description}
                    </p>
                    <span className="mt-auto text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">
                      View Project
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="testimonials" className="flex flex-col gap-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
              Trusted by founders and creative teams.
            </h2>720
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 120}>
                <div className="h-full rounded-3xl border border-white/10 bg-(--card) p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:border-(--accent)">
                  <p className="text-sm leading-relaxed text-foreground">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-(--muted)">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="blog" className="flex flex-col gap-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">
              Blog
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
              Notes on visual craft and storytelling.
            </h2>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {blogPosts.map((post, index) => (
              <Reveal key={post.title} delay={index * 120}>
                <article className="rounded-3xl border border-white/10 bg-(--card) p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:border-(--accent)">
                  <p className="text-xs uppercase tracking-[0.2em] text-(--accent)">
                    {post.date}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-(--muted)">
                    {post.summary}
                  </p>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:text-(--accent)"
                  >
                    Read Article →
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="flex flex-col gap-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
              Let&apos;s create something premium together.
            </h2>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <form className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-(--card) p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-(--muted)">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-foreground outline-none transition focus:border-(--accent)"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-(--muted)">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-foreground outline-none transition focus:border-(--accent)"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-(--muted)">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-foreground outline-none transition focus:border-(--accent)"
                    placeholder="Tell me about your project..."
                  />
                </label>
                <button
                  type="submit"
                  className="mt-4 rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0b0f14] shadow-[0_12px_30px_rgba(244,184,58,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(244,184,58,0.35)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
                >
                  Send Message
                </button>
              </form>
            </Reveal>
            <Reveal>
              <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-(--card) p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-(--muted)">
                    Direct Contact
                  </p>
                  <p className="mt-4 text-lg font-semibold text-foreground">
                    abdougolden12@gmail.com
                  </p>
                  <p className="mt-2 text-sm text-(--muted)">Ouedhriou, Relizane. Algerian</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      target="_blank"
                      href={social.href}
                      className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs uppercase tracking-[0.3em] text-(--muted)">
        © 2024 YOUR NAME. All rights reserved.
      </footer>

      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-modal-title"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-(--card) shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-64 w-full">
              <Image
                src={selectedWork.coverImage}
                alt={selectedWork.title}
                width={720}
                height={520}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedWork(null)}
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-[rgba(11,15,20,0.7)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-(--accent) hover:text-(--accent) focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              >
                Close
              </button>
            </div>
            <div className="space-y-4 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-(--accent)">
                {selectedWork.category}
              </p>
              <h3
                id="work-modal-title"
                className="text-2xl font-semibold text-foreground"
              >
                {selectedWork.title}
              </h3>
              <p className="text-sm leading-relaxed text-(--muted)">
                {selectedWork.description}
              </p>
              <a
                href={selectedWork.link}
                className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:text-(--accent)"
              >
                View full project →
              </a>
            </div>
          </div>
        </div>
      )}
      {isMobileMenuBlurOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={`absolute right-0 top-0 flex h-full w-72  ${ isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full' } transition-all flex-col gap-6 border-l border-white/10 bg-(--card) p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">
                Menu
              </p>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-(--accent) hover:text-(--accent) focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              >
                Close
              </button>
            </div>
            <div className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl border border-white/10 px-4 py-3 transition hover:border-(--accent) hover:text-(--accent)"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-(--muted)">
                Follow
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="rounded-full border border-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-(--accent) hover:text-(--accent)"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
