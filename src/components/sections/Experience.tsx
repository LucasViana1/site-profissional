import type { SiteContent } from "@/content";
import { Section } from "@/components/ui/section/Section";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function Experience({ content }: { content: SiteContent }) {
  const { summary, resume } = content.experience;

  return (
    <Section id="experience" label={content.sections.experience}>
      <div className="flex max-w-[680px] flex-col gap-4">
        <p className="text-primary text-base/[1.6] text-pretty lg:text-[17px]/[1.6]">{summary}</p>
        <ArrowLink href={resume.href} label={resume.label} className="mt-1 self-start" />
      </div>
    </Section>
  );
}
