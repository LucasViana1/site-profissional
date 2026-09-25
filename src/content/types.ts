import type { SectionId } from "@/utils/sections";

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  profile: {
    name: string;
    role: string;
    avatar: string;
    email: string;
    links: ExternalLink[];
  };
  sections: Record<SectionId, string>;
  nav: {
    label: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    language: string;
    theme: string;
    themeOptions: { light: string; dark: string };
  };
  hero: {
    tagline: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    columns: string[];
  };
  experience: {
    summary: string;
    resume: ExternalLink;
  };
  services: {
    kinds: string;
    intro: string;
    items: Service[];
    cta: string;
  };
  projects: {
    all: ExternalLink;
    problemLabel: string;
    thumbnailLabel: string;
    featured: FeaturedProject[];
    others: SecondaryProject[];
  };
  stack: {
    groups: StackGroup[];
  };
  writing: {
    items: Article[];
  };
  contact: {
    title: string;
    emailCta: string;
  };
  footer: string;
};

export type ExternalLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  tags: string[];
};

export type FeaturedProject = {
  title: string;
  description: string;
  tags: string[];
  links: ExternalLink[];
  image?: string;
};

export type SecondaryProject = {
  title: string;
  description: string;
};

export type StackGroupId = "frontend" | "backend" | "ai" | "engineering" | "tools";

export type StackGroup = {
  id: StackGroupId;
  title: string;
  items: string[];
};

export type Article = {
  date: string;
  title: string;
  href: string;
};
