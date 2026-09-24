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
  about: {
    columns: [
      "I have spent the last few years on e-commerce products, always on the side the customer sees and uses to decide on a purchase. That is where detail turns into numbers: a misplaced field or half a second of delay costs conversion.",
      "These days my work does not stop at the browser. I bring the same attention to the API, the database and the payment integrations, using AI as a tool to ship faster without giving up tests and review.",
    ],
  },
  experience: {
    summary:
      "Frontend engineer focused on checkout and e-commerce. I build and maintain buying interfaces in React, Next.js and TypeScript, wired to payment gateways and measured by Core Web Vitals.",
    detail:
      "I work from interface design through production monitoring, with automated tests and a close eye on conversion metrics.",
    resume: { label: "Full résumé", href: "/cv-en.pdf" },
  },
  services: {
    kinds: "freelance · contract · consulting",
    intro:
      "I join teams that already have a product running and need someone who understands buying, not just components.",
    items: [
      {
        title: "Checkout & payments",
        description:
          "Gateway integration, single-page flow and error handling that does not make the customer give up halfway.",
        tags: ["gateway integration", "one-page"],
      },
      {
        title: "Performance & conversion",
        description:
          "Core Web Vitals diagnosis, JavaScript reduction and A/B tests so the decision rests on data.",
        tags: ["Core Web Vitals", "A/B"],
      },
      {
        title: "AI features",
        description:
          "Semantic search, support assistants and internal automations backed by language models.",
        tags: ["RAG", "automation"],
      },
    ],
    cta: "Request a quote",
  },
  projects: {
    all: { label: "all on GitHub", href: "https://github.com/LucasViana1" },
    problemLabel: "problem → solution",
    thumbnailLabel: "screenshot 16:9",
    featured: [
      {
        title: "Multi-gateway checkout",
        description:
          "A single payment flow that talks to more than one gateway and falls back to the next when one fails, without the customer noticing.",
        tags: ["TypeScript", "Stripe"],
        links: [
          { label: "Case", href: "https://github.com/LucasViana1" },
          { label: "Repo", href: "https://github.com/LucasViana1" },
        ],
      },
      {
        title: "RAG support assistant",
        description:
          "An assistant that answers order questions from the store knowledge base and cites the source of every answer.",
        tags: ["Node", "LLM"],
        links: [
          { label: "Case", href: "https://github.com/LucasViana1" },
          { label: "Demo", href: "https://github.com/LucasViana1" },
        ],
      },
    ],
    others: [
      {
        title: "Checkout design system",
        description: "A buying component library shared across three stores.",
      },
      {
        title: "Web Vitals dashboard",
        description: "Real user metrics collection with regression alerts.",
      },
    ],
  },
  stack: {
    groups: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
      { title: "Backend & data", items: ["Node", "Postgres", "Prisma"] },
      { title: "AI", items: ["LLM APIs", "RAG", "Embeddings"] },
      { title: "Infra & testing", items: ["Vercel", "Docker", "Playwright"] },
    ],
  },
  writing: {
    items: [
      {
        date: "mar 2026",
        title: "What breaks in a checkout when the gateway goes down",
        href: "https://github.com/LucasViana1",
      },
      {
        date: "jan 2026",
        title: "Study notes — LLMs applied to support",
        href: "https://github.com/LucasViana1",
      },
      {
        date: "nov 2025",
        title: "Performance on a payment page",
        href: "https://github.com/LucasViana1",
      },
    ],
  },
  contact: {
    title: "Let's talk about your project",
    note: "reply within 24 business hours",
    emailCta: "Send an email",
  },
  footer: "lucas viana",
};
