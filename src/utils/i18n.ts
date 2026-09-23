export const LOCALES = ["pt", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const SECTION_IDS = [
  "about",
  "experience",
  "services",
  "projects",
  "stack",
  "writing",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

const LOCALE_CONFIG: Record<Locale, { href: string; htmlLang: string; label: string }> = {
  pt: { href: "/", htmlLang: "pt-BR", label: "PT" },
  en: { href: "/en", htmlLang: "en", label: "EN" },
};

export function localeHref(locale: Locale): string {
  return LOCALE_CONFIG[locale].href;
}

export function htmlLang(locale: Locale): string {
  return LOCALE_CONFIG[locale].htmlLang;
}

export function localeLabel(locale: Locale): string {
  return LOCALE_CONFIG[locale].label;
}
