import type { SiteContent } from "@/content";
import { Section } from "@/components/ui/section/Section";
import { ActionLink } from "@/components/ui/ActionLink";

export function Contact({ content }: { content: SiteContent }) {
  const { title, emailCta } = content.contact;
  const { email, links } = content.profile;

  return (
    <Section id="contact" label={content.sections.contact} tone="surface">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <p className="text-primary max-w-[520px] text-2xl/[1.2] font-bold tracking-[-.02em] text-pretty lg:text-[26px]">
          {title}
        </p>

        <div className="flex flex-col gap-2.5 sm:flex-row">
          <ActionLink href={`mailto:${email}`}>{emailCta}</ActionLink>
          {links.map((link) => (
            <ActionLink key={link.href} href={link.href} variant="secondary" external>
              {link.label} <span aria-hidden>↗</span>
            </ActionLink>
          ))}
        </div>
      </div>
    </Section>
  );
}
