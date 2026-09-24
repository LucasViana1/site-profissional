import type { Service, SiteContent } from "@/content";
import { Section } from "@/components/ui/section/Section";
import { ActionLink } from "@/components/ui/ActionLink";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export function Services({ content }: { content: SiteContent }) {
  const { kinds, intro, items, cta } = content.services;

  return (
    <Section
      id="services"
      label={content.sections.services}
      tone="surface"
      aside={<p className="text-secondary font-mono text-[11px]">{kinds}</p>}
    >
      <div className="flex flex-col gap-6">
        <p className="text-primary max-w-[620px] text-base/[1.6] text-pretty lg:text-[17px]/[1.6]">
          {intro}
        </p>

        <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <li key={service.title} className="flex">
              <ServiceCard service={service} position={index + 1} />
            </li>
          ))}
        </ul>

        <ActionLink href="#contact" className="w-full self-start sm:w-auto">
          {cta}
        </ActionLink>
      </div>
    </Section>
  );
}

function ServiceCard({ service, position }: { service: Service; position: number }) {
  return (
    <Card className="bg-bg flex flex-col gap-2.5 p-5">
      <p className="text-muted font-mono text-[9px] tracking-[.1em]">
        {String(position).padStart(2, "0")}
      </p>
      <h3 className="text-primary text-[15px]/[1.3] font-semibold">{service.title}</h3>
      <p className="text-secondary text-[13px]/[1.6] text-pretty">{service.description}</p>
      <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {service.tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>
    </Card>
  );
}
