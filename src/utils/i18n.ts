export const LOCALES = ["pt", "en"] as const;

export type Locale = (typeof LOCALES)[number];

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
