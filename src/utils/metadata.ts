import type { Metadata } from "next";
import { getContent } from "@/content";
import { htmlLang, localeHref, LOCALES, type Locale } from "./i18n";
import { SITE_URL } from "./site";

const LANGUAGE_ALTERNATES = Object.fromEntries(
  LOCALES.map((locale) => [htmlLang(locale), localeHref(locale)]),
);

export function buildMetadata(locale: Locale): Metadata {
  const { meta, profile } = getContent(locale);
  const path = localeHref(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    applicationName: profile.name,
    authors: [{ name: profile.name, url: SITE_URL }],
    alternates: {
      canonical: path,
      languages: LANGUAGE_ALTERNATES,
    },
    openGraph: {
      type: "website",
      siteName: profile.name,
      title: meta.title,
      description: meta.description,
      url: path,
      locale: htmlLang(locale).replace("-", "_"),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}
