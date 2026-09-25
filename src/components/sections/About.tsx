import type { SiteContent } from "@/content";
import { Section } from "@/components/ui/section/Section";

export function About({ content }: { content: SiteContent }) {
  return (
    <Section id="about" label={content.sections.about}>
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        {content.about.columns.map((paragraph) => (
          <p key={paragraph} className="text-primary text-[15px]/[1.7] text-pretty lg:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
