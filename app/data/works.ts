export type WorkCategory =
  | "All"
  | "Graphic"
  | "3D"
  | "Logo"
  | "Video"
  | "Thumbnail"
  | "Shorts";

export type WorkItem = {
  id: string;
  title: string;
  category: Exclude<WorkCategory, "All">;
  coverImage?: string;
  altCoverImage?: string;
  beforeSrc?: string;
  beforeAlt?: string;
  afterSrc?: string;
  afterAlt?: string;
  description?: string;
  link?: string;
  date: string;
};

export const workCategories: WorkCategory[] = [
  "All",
  "Graphic",
  "3D",
  "Logo",
  "Video",
  "Thumbnail",
  "Shorts",
];

export const works: WorkItem[] = [
  {
    id: "work-01",
    title: "Rearview Dusk",
    category: "Graphic",
    coverImage: "/assets/graphic/1-a.jpg",
    beforeSrc: "/assets/graphic/1-b.jpg",
    afterSrc: "/assets/graphic/1-a.jpg",
    beforeAlt: "Original daylight photo with neutral tones",
    afterAlt:
      "Cinematic dusk color grading with warm highlights and deep shadows",
    description:
      "Cinematic color grading focused on mood transformation, contrast control, and warm dusk tones while preserving detail.",
    link: "#",
    date: "2024-07-18",
  },
  {
    id: "work-02",
    title: "Emerald Drive",
    category: "Graphic",
    coverImage: "/assets/graphic/2-a.jpg",
    beforeSrc: "/assets/graphic/2-b.jpg",
    afterSrc: "/assets/graphic/2-a.jpg",
    beforeAlt: "Original photo with natural lighting and muted colors",
    afterAlt:
      "Enhanced color grade with rich emerald tones and increased contrast",
    description:
      "Cinematic color grading emphasizing deep greens, improved contrast, and subject separation for a bold automotive look.",
    link: "#",
    date: "2024-08-02",
  },
  {
    id: "work-03",
    title: "VIRO Smoke Mark",
    category: "Logo",
    coverImage: "/assets/logo/3.jpg",
    altCoverImage: "viro-smoke-mark.jpg",
    description:
      "Experimental logo concept combining bold typography with atmospheric smoke effects to create a striking, high-contrast visual identity.",
    link: "#",
    date: "2024-09-10",
  },
  {
    id: "work-04",
    title: "Neon Alley Render",
    category: "3D",
    coverImage: "/assets/3d/4.jpg",
    altCoverImage: "neon-alley-render",
    description:
      "3D scene lighting and color grading in Blender, focusing on high-contrast neon accents, controlled shadows, and cinematic atmosphere.",
    link: "#",
    date: "2024-10-05",
  },
  {
    id: "work-05",
    title: "Deep Thoughts",
    category: "Graphic",
    coverImage: "/assets/graphic/5.jpg",
    altCoverImage: "deep-thoughts-typography",
    description:
      "Minimal typographic composition over textured ocean imagery, designed to convey depth, calm, and introspective mood.",
    link: "#",
    date: "2024-10-12",
  },
  {
    id: "work-06",
    title: "Chocolate Croissant Render",
    category: "3D",
    coverImage: "/assets/3d/6.jpg",
    altCoverImage: "chocolate-croissant-render",
    description:
      "3D food render created in Blender, focusing on realistic materials, surface detail, and soft studio lighting against a warm background.",
    link: "#",
    date: "2024-10-20",
  },
  {
    id: "work-07",
    title: "Silent Coast",
    category: "Graphic",
    coverImage: "/assets/graphic/7-a.jpg",
    beforeSrc: "/assets/graphic/7-b.jpg",
    afterSrc: "/assets/graphic/7-a.jpg",
    beforeAlt: "Original coastal landscape with full natural color",
    afterAlt:
      "Selective color grade with monochrome cliffs and enhanced turquoise water",
    description:
      "Selective color grading transforming a coastal scene by isolating turquoise water against desaturated rock formations to enhance contrast and mood.",
    link: "#",
    date: "2024-10-28",
  },
  {
    id: "work-08",
    title: "Neon Rain Drive",
    category: "Graphic",
    coverImage: "/assets/graphic/8.jpg",
    altCoverImage: "/assets/graphic/8.jpg",
    description:
      "Nighttime automotive scene enhanced through neon lighting edits, reflective surface emphasis, and high-contrast color balance to create a cinematic, rain-soaked atmosphere.",
    link: "#",
    date: "2024-11-02",
  },
  {
    id: "work-09",
    title: "Right Place",
    category: "Graphic",
    coverImage: "/assets/graphic/9.jpg",
    altCoverImage: "/assets/graphic/9.jpg",
    description:
      "Emotive typographic composition combining surreal imagery and sunset-to-night color grading to reinforce a reflective, inspirational message.",
    link: "#",
    date: "2024-11-12",
  },
  {
    id: "work-10",
    title: "Neon Leaves",
    category: "Graphic",
    coverImage: "/assets/graphic/10.jpg",
    altCoverImage: "/assets/graphic/10.jpg",
    description:
      "Typographic graphic composition combining neon-style glow effects with dark foliage imagery to create strong contrast and atmospheric depth.",
    link: "#",
    date: "2024-11-18",
  },
  {
    id: "work-11",
    title: "Below the Surface",
    category: "Graphic",
    coverImage: "/assets/graphic/11.jpg",
    altCoverImage: "/assets/graphic/11.jpg",
    description:
      "Underwater visual composition emphasizing light refraction, surface reflections, and high-contrast blue tones to create a surreal sense of depth and motion.",
    link: "#",
    date: "2024-11-25",
  },
  {
    id: "work-12",
    title: "Blade of Light",
    category: "3D",
    coverImage: "/assets/3d/12.jpg",
    altCoverImage: "/assets/3d/12.jpg",
    description:
      "3D sword render created in Blender, featuring emissive materials and dramatic volumetric lighting to emphasize contrast, focus, and cinematic atmosphere.",
    link: "#",
    date: "2024-12-03",
  },
  {
    id: "work-13",
    title: "Stag Emblem",
    category: "Logo",
    coverImage: "/assets/logo/13.jpg",
    altCoverImage: "/assets/logo/13.jpg",
    description:
      "Minimal emblem logo featuring a stylized stag head within a circular mark, designed for strong recognition and nature-inspired branding.",
    link: "#",
    date: "2024-12-08",
  },
  {
    id: "work-14",
    title: "Green Lights",
    category: "Graphic",
    coverImage: "/assets/graphic/14.jpg",
    altCoverImage: "/assets/graphic/14.jpg",
    description:
      "Dark graphic composition using intense green lighting, grain texture, and minimal typography to create an experimental, night-scene atmosphere.",
    link: "#",
    date: "2024-12-15",
  },
  {
    id: "work-15",
    title: "Ashen Skies",
    category: "Graphic",
    coverImage: "/assets/graphic/15-a.jpg",
    beforeSrc: "/assets/graphic/15-b.jpg",
    afterSrc: "/assets/graphic/15-a.jpg",
    beforeAlt: "Original in-game scene with neutral lighting and color balance",
    afterAlt:
      "Cinematic color grade with intensified warm tones, contrast, and atmospheric depth",
    description:
      "Cinematic color grading applied to in-game footage, enhancing mood through warm tones, contrast control, and atmospheric emphasis without altering original assets.",
    link: "#",
    date: "2024-12-22",
  },
  {
    id: "work-16",
    title: "It’s Just a Video",
    category: "Thumbnail",
    coverImage: "/assets/thumbnail/16.jpg",
    altCoverImage: "/assets/thumbnail/16.jpg",
    description:
      "High-impact YouTube thumbnail design combining bold typography, character compositing, and vibrant color contrast optimized for visibility and click-through performance.",
    link: "#",
    date: "2024-11-03",
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
    description:
      "Distinctive identities built with strategy, typography, and system thinking.",
  },
  {
    title: "Logo Design",
    description:
      "Timeless marks crafted to scale across print, digital, and motion.",
  },
  {
    title: "Thumbnails & YouTube Packaging",
    description:
      "High-performing visuals that increase click-through and brand recognition.",
  },
  {
    title: "Video Editing (Shorts/Reels)",
    description:
      "Rhythmic edits with clean pacing, sound, and color for social impact.",
  },
  {
    title: "Motion Graphics",
    description:
      "Subtle motion to elevate brand narratives and product storytelling.",
  },
];

export const testimonials = [
  {
    name: "Belarbi",
    role: "CTO, AlphaMade",
    quote:
      "“The logo design process was clear, efficient, and well-executed. The final result aligned perfectly with our brand direction and visual standards.”",
  },
];

export const blogPosts = [
  {
    title: "Designing Thumbnails That Convert",
    date: "Aug 12, 2024",
    summary:
      "A quick framework for crafting scroll-stopping visuals for creators.",
  },
  {
    title: "The Rhythm of Short-Form Editing",
    date: "Jun 08, 2024",
    summary:
      "How pacing and sound design change engagement in the first 3 seconds.",
  },
];
