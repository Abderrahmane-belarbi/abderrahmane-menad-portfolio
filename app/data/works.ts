export type WorkCategory =
  | "All"
  | "Graphic"
  | "Logo"
  | "Video"
  | "Thumbnails"
  | "Shorts";

export type WorkItem = {
  id: string;
  title: string;
  category: Exclude<WorkCategory, "All">;
  coverImage: string;
  description: string;
  link: string;
  date: string;
};

export const workCategories: WorkCategory[] = [
  "All",
  "Graphic",
  "Logo",
  "Video",
  "Thumbnails",
  "Shorts",
];

export const works: WorkItem[] = [
  {
    id: "work-01",
    title: "Midnight Bloom Brand Kit",
    category: "Graphic",
    coverImage: "/work-placeholder.svg",
    description: "Premium visual identity system with editorial layouts.",
    link: "#",
    date: "2024-07-18",
  },
  {
    id: "work-02",
    title: "Crestline Logo Suite",
    category: "Logo",
    coverImage: "/work-placeholder.svg",
    description: "Bold monogram exploration for a creative studio.",
    link: "#",
    date: "2024-05-08",
  },
  {
    id: "work-03",
    title: "Velocity Reel Edit",
    category: "Video",
    coverImage: "/work-placeholder.svg",
    description: "Cinematic pacing and sound design for a teaser film.",
    link: "#",
    date: "2024-03-24",
  },
  {
    id: "work-04",
    title: "Creator Pack Thumbnails",
    category: "Thumbnails",
    coverImage: "/work-placeholder.svg",
    description: "High-contrast thumbnail set optimized for engagement.",
    link: "#",
    date: "2024-02-16",
  },
  {
    id: "work-05",
    title: "Launch Shorts Campaign",
    category: "Shorts",
    coverImage: "/work-placeholder.svg",
    description: "Fast-cut social shorts with kinetic typography.",
    link: "#",
    date: "2024-01-12",
  },
  {
    id: "work-06",
    title: "Aurora Visual System",
    category: "Graphic",
    coverImage: "/work-placeholder.svg",
    description: "Color-led compositions for a digital product launch.",
    link: "#",
    date: "2023-11-05",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Works", href: "#works", id: "works" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  { label: "Blog", href: "#blog", id: "blog" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const socials = [
  { label: "Instagram", href: "" },
  { label: "Behance", href: "#" },
  { label: "YouTube", href: "http://www.youtube.com/@LEGENDVIIRO" },
  { label: "LinkedIn", href: "#" },
];

export const services = [
  {
    title: "Branding & Visual Identity",
    description: "Distinctive identities built with strategy, typography, and system thinking.",
  },
  {
    title: "Logo Design",
    description: "Timeless marks crafted to scale across print, digital, and motion.",
  },
  {
    title: "Thumbnails & YouTube Packaging",
    description: "High-performing visuals that increase click-through and brand recognition.",
  },
  {
    title: "Video Editing (Shorts/Reels)",
    description: "Rhythmic edits with clean pacing, sound, and color for social impact.",
  },
  {
    title: "Motion Graphics",
    description: "Subtle motion to elevate brand narratives and product storytelling.",
  },
];

export const testimonials = [
  {
    name: "Client Name 1",
    role: "Creative Director",
    quote:
      "“An exceptional eye for detail. The visuals felt elevated, premium, and perfectly on-brand.”",
  },
  {
    name: "Client Name 2",
    role: "Content Lead",
    quote:
      "“The edits were cinematic yet tight for social. Every deliverable was polished and ready.”",
  },
  {
    name: "Client Name 3",
    role: "Founder",
    quote:
      "“Branding, motion, and thumbnails—all cohesive. A true creative partner from start to finish.”",
  },
];

export const blogPosts = [
  {
    title: "Designing Thumbnails That Convert",
    date: "Aug 12, 2024",
    summary: "A quick framework for crafting scroll-stopping visuals for creators.",
  },
  {
    title: "The Rhythm of Short-Form Editing",
    date: "Jun 08, 2024",
    summary: "How pacing and sound design change engagement in the first 3 seconds.",
  },
];