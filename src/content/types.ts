import type { SectionId } from "@/utils/i18n";

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
    language: string;
    theme: string;
    themeOptions: { light: string; dark: string };
  };
  hero: {
    status: string;
    tagline: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: string;
};

export type ExternalLink = {
  label: string;
  href: string;
};
