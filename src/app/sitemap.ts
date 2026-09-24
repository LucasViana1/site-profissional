import type { MetadataRoute } from "next";
import { localeHref, LOCALES } from "@/utils/i18n";
import { SITE_URL } from "@/utils/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: new URL(localeHref(locale), SITE_URL).href,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "pt" ? 1 : 0.8,
  }));
}
