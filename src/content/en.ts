import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "Lucas Viana · frontend engineer",
    description:
      "Frontend engineer focused on checkout and e-commerce with React, Next.js and TypeScript.",
  },
  profile: {
    name: "Lucas Viana",
    role: "frontend engineer",
    avatar: "/avatar.jpg",
    email: "email@dominio.com",
    links: [
      { label: "GitHub", href: "https://github.com/LucasViana1" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
    ],
  },
  sections: {
    about: "about",
    experience: "experience",
    services: "services",
    projects: "projects",
    stack: "stack",
    writing: "writing",
    contact: "contact",
  },
  nav: {
    label: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "language",
    theme: "theme",
    themeOptions: { light: "light", dark: "dark" },
  },
  hero: {
    status: "open to new projects",
    tagline: "frontend engineer · checkout & e-commerce",
    summary:
      "I build buying experiences with React, Next.js and TypeScript — and today I bring the same care to the backend, with AI support.",
    primaryCta: "See projects",
    secondaryCta: "Get in touch",
  },
  footer: "lucas viana",
};
