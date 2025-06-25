const SITE_CONFIG = {
  // Basic Info
  name: "Cultural Autopsy Studios",
  tagline: "We kept the tape running.",
  domain: "culturalautopsystudios.com",
  // Contact Info
  email: "hello@culturalautopsystudios.com",
  phone: "(555) MEMORY-1",
  calendlyUrl: "https://calendly.com/cultural-autopsy/session",
  // Branding
  logo: {
    full: "/images/logo/cas-full-logo.png",
    icon: "/images/logo/cas-icon.svg"
  },
  // Core Message
  heroPrice: "Free",
  // Memory is priceless
  priceValue: 0,
  pricingHook: "Truth. Memory. Empathy. Distribution.",
  // Location/Theme
  location: {
    city: "Everywhere",
    state: "Memory",
    region: "Digital",
    timezone: "Always/Now"
  },
  // Brand Colors (VHS aesthetic)
  colorNames: {
    primary: "vcr-blue",
    secondary: "postit-yellow",
    neutral: "tape-gray",
    light: "paper-white",
    accent: "trauma-red"
  },
  // Social Links
  social: {
    twitter: "https://twitter.com/culturalautopsy",
    linkedin: "https://linkedin.com/company/cultural-autopsy-studios",
    instagram: "https://instagram.com/culturalautopsy",
    substack: "https://culturalautopsy.substack.com"
  },
  // API Configuration
  api: {
    leadEndpoint: "/api/leads",
    whiteLabelId: "cultural-autopsy-studios"
  },
  // Feature Flags
  features: {
    showTestimonials: false,
    showBlog: true,
    showCaseStudies: false,
    showEpisodes: true,
    showManifesto: true,
    showAvatars: true
  },
  // Avatars/Characters
  avatars: [
    {
      name: "Holden",
      role: "The Interviewer",
      quote: "Every question is a trap door to memory.",
      setting: "podcast desk"
    },
    {
      name: "Lilly",
      role: "The Anchor",
      quote: "Breaking news: we never stopped breaking.",
      setting: "news anchor table"
    },
    {
      name: "Eva",
      role: "The Observer",
      quote: "Silence speaks louder than screaming.",
      setting: "quiet hallway"
    },
    {
      name: "Reese",
      role: "The Philosopher",
      quote: "Every ending is someone else's middle.",
      setting: "rooftop at night"
    },
    {
      name: "The Archivist",
      role: "Keeper of Tapes",
      quote: "We remember everything so you don't have to.",
      setting: "memory archive terminal"
    }
  ],
  // Shows/Content
  shows: [
    "The Boardroom",
    "Matrix Deep Dive",
    "Cultural Autopsy: The Mainline Feed",
    "Memory Glitch Series"
  ]
};
export {
  SITE_CONFIG as S
};
