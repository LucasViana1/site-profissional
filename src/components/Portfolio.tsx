import { getContent } from "@/content";
import type { Locale } from "@/utils/i18n";
import { isSectionVisible } from "@/utils/sections";
import { SiteShell } from "./layout/SiteShell";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Services } from "./sections/Services";
import { Projects } from "./sections/Projects";
import { Stack } from "./sections/Stack";
import { Writing } from "./sections/Writing";
import { Contact } from "./sections/Contact";
import { ContentContainer } from "./ui/ContentContainer";

export function Portfolio({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <SiteShell content={content} locale={locale}>
      <Hero content={content} />
      <About content={content} />
      <Experience content={content} />
      <Services content={content} />
      <Projects content={content} />
      <Stack content={content} />
      {isSectionVisible("writing") && <Writing content={content} />}
      <Contact content={content} />

      <footer className="border-border text-muted border-t py-5 font-mono text-[10px]">
        <ContentContainer>
          © {new Date().getFullYear()} · {content.footer}
        </ContentContainer>
      </footer>
    </SiteShell>
  );
}
