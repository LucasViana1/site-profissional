import type { SiteContent, StackGroup } from "@/content";
import { Section } from "@/components/ui/section/Section";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export function Stack({ content }: { content: SiteContent }) {
  return (
    <Section id="stack" label={content.sections.stack}>
      <ul className="grid gap-4 lg:grid-cols-2">
        {content.stack.groups.map((group) => (
          <li key={group.title} className="flex">
            <StackCard group={group} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function StackCard({ group }: { group: StackGroup }) {
  return (
    <Card className="bg-surface flex w-full flex-col gap-2.5 p-4">
      <h3 className="text-primary text-xs font-semibold">{group.title}</h3>
      <ul className="flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <li key={item}>
            <Tag variant="outline">{item}</Tag>
          </li>
        ))}
      </ul>
    </Card>
  );
}
