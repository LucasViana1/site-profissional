import type { SiteContent } from "./types";

export const pt: SiteContent = {
  meta: {
    title: "Lucas Viana · frontend engineer",
    description:
      "Frontend engineer focado em checkout e e-commerce com React, Next.js e TypeScript.",
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
    about: "sobre",
    experience: "experiência",
    services: "serviços",
    projects: "projetos",
    stack: "stack",
    writing: "escrita",
    contact: "contato",
  },
  nav: {
    label: "Navegação principal",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "idioma",
    theme: "tema",
    themeOptions: { light: "light", dark: "dark" },
  },
  hero: {
    status: "aberto a novos projetos",
    tagline: "frontend engineer · checkout & e-commerce",
    summary:
      "Desenvolvo interfaces de compra em React, Next.js e TypeScript — e hoje levo esse cuidado também para o backend, com apoio de IA.",
    primaryCta: "Ver projetos",
    secondaryCta: "Falar comigo",
  },
  footer: "lucas viana",
};
