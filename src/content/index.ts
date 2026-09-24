import type { Locale } from "@/utils/i18n";
import type { SiteContent } from "./types";
import { en } from "./en";
import { pt } from "./pt";

const CONTENT: Record<Locale, SiteContent> = { pt, en };

export function getContent(locale: Locale): SiteContent {
  return CONTENT[locale];
}

export type {
  Article,
  ExternalLink,
  FeaturedProject,
  SecondaryProject,
  Service,
  SiteContent,
  StackGroup,
} from "./types";
