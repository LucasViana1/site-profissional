import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "Lucas Viana · software engineer",
    description:
      "Software engineer with more than seven years in web products and e-commerce. I build sites, landing pages and fixes for sites already live.",
  },
  profile: {
    name: "Lucas Viana",
    role: "software engineer",
    avatar: "/avatar.jpg",
    email: "lucasviana112@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/LucasViana1" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/lucas-viana-cunha/" },
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
    skipToContent: "Skip to content",
    language: "language",
    theme: "theme",
    themeOptions: { light: "light", dark: "dark" },
  },
  hero: {
    tagline: "software engineer · digital products & e-commerce",
    summary:
      "I turn problems into digital solutions. For more than four years I have done that in the checkout of Magalu's e-commerce, where every detail of performance and reliability turns into a sale or an abandoned cart.",
    primaryCta: "See projects",
    secondaryCta: "Get in touch",
  },
  about: {
    columns: [
      "I am a software engineer specialised in front-end, with a degree in Computer Science, based in Jundiaí, São Paulo. In practice, my job is turning an idea into a screen that works: fast, clear and dependable for whoever is on the other side.",
      "I have been building web products for more than seven years. I started as a fullstack developer, worked at an agency and in e-commerce, and today I work on the most critical area of a retail operation: the checkout. I also write tests, document what I build and take part in the team's architecture decisions. To me, engineering is the whole cycle, not just shipping the screen.",
    ],
  },
  experience: {
    summary:
      "More than seven years building web products, the last four inside one of the largest e-commerce operations in Brazil. I have worked at an agency, at a social impact startup and in high-traffic digital retail.",
    detail:
      "I work from interface design through production monitoring, with automated tests and a close eye on conversion metrics.",
    resume: {
      label: "Full career history",
      href: "https://docs.google.com/document/d/1zjaaUdXuXvzq5lSjyW-lYQC8DaNiSvNz/edit?usp=sharing&ouid=107710029748934966707&rtpof=true&sd=true",
    },
  },
  services: {
    kinds: "freelance · consulting",
    intro:
      "I also build sites and pages for people who need to show up well online. From scratch or on top of what you already have.",
    items: [
      {
        title: "Landing page that converts",
        description:
          "A single page built for one thing: getting the visitor to reach out, sign up or buy. Fast on mobile, findable on Google and ready for you to track how many visits turned into contacts.",
        tags: ["single page", "mobile-first", "contact form"],
      },
      {
        title: "Site for a small business",
        description:
          "Your business online: who you are, what you offer, where you are and how to reach you. Wired to WhatsApp and Google Maps, with a layout that works on mobile, which is where most of your customers come from.",
        tags: ["business site", "WhatsApp", "Google Maps"],
      },
      {
        title: "Fixes on an existing site",
        description:
          "Your site is live but slow, broken on mobile, or nobody can find it? I review it, fix it and leave it working, without rebuilding everything from scratch.",
        tags: ["responsive", "fixes", "maintenance"],
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
      {
        id: "frontend",
        title: "Front-end",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "React Native"],
      },
      { id: "backend", title: "Back-end & data", items: ["Node.js", "REST APIs", "SQL", "MySQL"] },
      { id: "ai", title: "AI", items: ["LLM", "Agents", "RAG"] },
      {
        id: "engineering",
        title: "Engineering",
        items: ["automated testing", "web performance", "software architecture"],
      },
      { id: "tools", title: "Tools", items: ["Git", "GitHub", "Vercel", "Docker"] },
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
    emailCta: "Send an email",
  },
  footer: "lucas viana",
};
