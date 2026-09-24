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
  about: {
    columns: [
      "Trabalho com produtos de e-commerce há alguns anos, sempre na parte que o cliente vê e usa para decidir a compra. É onde detalhe vira número: um campo mal posicionado ou meio segundo a mais derrubam a conversão.",
      "Hoje o meu trabalho não para no navegador. Levo a mesma atenção para a API, o banco e as integrações de pagamento, usando IA como ferramenta de apoio para entregar mais rápido sem abrir mão de teste e revisão.",
    ],
  },
  experience: {
    summary:
      "Frontend engineer com foco em checkout e e-commerce. Construo e mantenho interfaces de compra em React, Next.js e TypeScript, integradas a gateways de pagamento e medidas por Core Web Vitals.",
    detail:
      "Atuo do desenho da interface ao monitoramento em produção, com testes automatizados e acompanhamento das métricas de conversão.",
    resume: { label: "Currículo completo", href: "/cv-pt.pdf" },
  },
  services: {
    kinds: "freelance · contrato · consultoria",
    intro:
      "Entro em times que já têm produto rodando e precisam de alguém que entenda de compra, não só de componente.",
    items: [
      {
        title: "Checkout & pagamentos",
        description:
          "Integração com gateways, fluxo de uma página e tratamento de erro que não faz o cliente desistir no meio.",
        tags: ["integração gateway", "one-page"],
      },
      {
        title: "Performance & conversão",
        description:
          "Diagnóstico de Core Web Vitals, redução de JavaScript e testes A/B para sustentar a decisão com dado.",
        tags: ["Core Web Vitals", "A/B"],
      },
      {
        title: "Features com IA",
        description:
          "Busca semântica, assistentes de suporte e automações internas apoiadas em modelos de linguagem.",
        tags: ["RAG", "automações"],
      },
    ],
    cta: "Pedir orçamento",
  },
  projects: {
    all: { label: "todos no GitHub", href: "https://github.com/LucasViana1" },
    problemLabel: "problema → solução",
    thumbnailLabel: "screenshot 16:9",
    featured: [
      {
        title: "Checkout multi-gateway",
        description:
          "Um único fluxo de pagamento que fala com mais de um gateway e cai para o próximo quando um falha, sem o cliente perceber.",
        tags: ["TypeScript", "Stripe"],
        links: [
          { label: "Case", href: "https://github.com/LucasViana1" },
          { label: "Repo", href: "https://github.com/LucasViana1" },
        ],
      },
      {
        title: "Assistente RAG de suporte",
        description:
          "Assistente que responde dúvidas de pedido consultando a base de conhecimento da loja e cita a fonte de cada resposta.",
        tags: ["Node", "LLM"],
        links: [
          { label: "Case", href: "https://github.com/LucasViana1" },
          { label: "Demo", href: "https://github.com/LucasViana1" },
        ],
      },
    ],
    others: [
      {
        title: "Design system de checkout",
        description: "Biblioteca de componentes de compra compartilhada entre três lojas.",
      },
      {
        title: "Painel de Web Vitals",
        description: "Coleta de métricas reais de navegação com alerta de regressão.",
      },
    ],
  },
  stack: {
    groups: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
      { title: "Backend & dados", items: ["Node", "Postgres", "Prisma"] },
      { title: "IA", items: ["LLM APIs", "RAG", "Embeddings"] },
      { title: "Infra & testes", items: ["Vercel", "Docker", "Playwright"] },
    ],
  },
  writing: {
    items: [
      {
        date: "mar 2026",
        title: "O que quebra num checkout quando o gateway cai",
        href: "https://github.com/LucasViana1",
      },
      {
        date: "jan 2026",
        title: "Notas de estudo — LLMs aplicados a suporte",
        href: "https://github.com/LucasViana1",
      },
      {
        date: "nov 2025",
        title: "Performance em página de pagamento",
        href: "https://github.com/LucasViana1",
      },
    ],
  },
  contact: {
    title: "Vamos conversar sobre seu projeto",
    note: "retorno em até 24h úteis",
    emailCta: "Enviar email",
  },
  footer: "lucas viana",
};
