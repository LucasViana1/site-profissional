import { getContent } from "@/content";
import { SECTION_IDS, type Locale } from "@/utils/i18n";
import { SiteShell } from "./layout/SiteShell";
import { Hero } from "./sections/Hero";
import { ContentContainer } from "./ui/ContentContainer";
import { ContentSkeleton } from "./ui/ContentSkeleton";
import { Section } from "./ui/section/Section";

const SURFACE_SECTIONS = new Set(["services", "contact"]);

export function Portfolio({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <SiteShell content={content} locale={locale}>
      <Hero content={content} />

      {SECTION_IDS.map((id) => (
        <Section
          key={id}
          id={id}
          label={content.sections[id]}
          tone={SURFACE_SECTIONS.has(id) ? "surface" : "base"}
        >
          <ContentSkeleton widths={["100%", "88%", "54%"]} />
        </Section>
      ))}

      <footer className="border-border text-muted border-t py-5 font-mono text-[10px]">
        <ContentContainer>
          © {new Date().getFullYear()} · {content.footer}
        </ContentContainer>
      </footer>
    </SiteShell>
  );
}
