import type { SiteContent } from "./types";

export const pt: SiteContent = {
  meta: {
    title: "Lucas Viana · software engineer",
    description:
      "Software engineer com mais de sete anos em produtos web e e-commerce. Faço sites, landing pages e melhorias em sites que já estão no ar.",
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
    skipToContent: "Pular para o conteúdo",
    language: "idioma",
    theme: "tema",
    themeOptions: { light: "light", dark: "dark" },
  },
  hero: {
    tagline: "software engineer · produtos digitais & e-commerce",
    summary:
      "Transformo problemas em soluções digitais. Há mais de quatro anos faço isso no checkout do e-commerce da Magalu, onde cada detalhe de performance e confiabilidade vira venda ou carrinho abandonado.",
    primaryCta: "Ver projetos",
    secondaryCta: "Falar comigo",
  },
  about: {
    columns: [
      "Sou engenheiro de software com especialização em front-end, formado em Ciência da Computação e morando em Jundiaí, São Paulo. Na prática, meu trabalho é transformar uma ideia em uma tela que funciona: rápida, clara e confiável para quem está do outro lado.",
      "Há mais de sete anos desenvolvo produtos web. Comecei como fullstack, passei por agência e e-commerce, e hoje atuo na área mais crítica de uma operação de varejo: o checkout. Também escrevo testes, documento o que construo e participo das decisões de arquitetura do time. Para mim, engenharia é o ciclo completo, não só entregar a tela.",
    ],
  },
  experience: {
    summary:
      "Mais de sete anos construindo produtos web, os últimos quatro dentro de uma das maiores operações de e-commerce do Brasil. Já trabalhei em agência, em startup de impacto social e em varejo digital de alto tráfego.",
    detail:
      "Atuo do desenho da interface ao monitoramento em produção, com testes automatizados e acompanhamento das métricas de conversão.",
    resume: {
      label: "Currículo completo",
      href: "https://docs.google.com/document/d/1zjaaUdXuXvzq5lSjyW-lYQC8DaNiSvNz/edit?usp=sharing&ouid=107710029748934966707&rtpof=true&sd=true",
    },
  },
  services: {
    kinds: "freelance · consultoria",
    intro:
      "Também faço sites e páginas para quem precisa estar bem na internet. Do zero ou em cima do que você já tem.",
    items: [
      {
        title: "Landing page que converte",
        description:
          "Uma página só, feita para uma coisa: fazer a pessoa entrar em contato, se cadastrar ou comprar. Rápida no celular, encontrável no Google e pronta para você acompanhar quantas visitas viraram contato.",
        tags: ["página única", "mobile-first", "formulário de contato"],
      },
      {
        title: "Site para pequeno negócio",
        description:
          "O site institucional do seu negócio: quem você é, o que oferece, onde fica e como falar com você. Integrado ao WhatsApp e ao Google Maps, com layout que funciona bem no celular, que é de onde vem a maioria dos seus clientes.",
        tags: ["institucional", "WhatsApp", "Google Maps"],
      },
      {
        title: "Melhorias em site existente",
        description:
          "Seu site está no ar mas travado, feio no celular ou ninguém consegue te achar? Reviso, arrumo e deixo no lugar, sem precisar refazer tudo do zero.",
        tags: ["responsivo", "ajustes", "manutenção"],
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
      {
        id: "frontend",
        title: "Front-end",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "React Native"],
      },
      { id: "backend", title: "Back-end e dados", items: ["Node.js", "APIs REST", "SQL", "MySQL"] },
      { id: "ai", title: "IA", items: ["LLM", "Agents", "RAG"] },
      {
        id: "engineering",
        title: "Engenharia",
        items: ["testes automatizados", "performance web", "arquitetura de software"],
      },
      { id: "tools", title: "Ferramentas", items: ["Git", "GitHub", "Vercel", "Docker"] },
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
    emailCta: "Enviar email",
  },
  footer: "lucas viana",
};
