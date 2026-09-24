import Image from "next/image";
import type { FeaturedProject, SecondaryProject, SiteContent } from "@/content";
import { Section } from "@/components/ui/section/Section";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export function Projects({ content }: { content: SiteContent }) {
  const { all, problemLabel, thumbnailLabel, featured, others } = content.projects;

  return (
    <Section
      id="projects"
      label={content.sections.projects}
      aside={<ArrowLink href={all.href} label={all.label} />}
    >
      <ul className="grid gap-4 lg:grid-cols-2">
        {featured.map((project) => (
          <li key={project.title} className="flex">
            <FeaturedCard
              project={project}
              problemLabel={problemLabel}
              thumbnailLabel={thumbnailLabel}
            />
          </li>
        ))}
        {others.map((project) => (
          <li key={project.title} className="flex">
            <SecondaryCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function FeaturedCard({
  project,
  problemLabel,
  thumbnailLabel,
}: {
  project: FeaturedProject;
  problemLabel: string;
  thumbnailLabel: string;
}) {
  return (
    <Card className="bg-surface flex flex-col">
      <Thumbnail image={project.image} title={project.title} label={thumbnailLabel} />
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="text-primary text-base/[1.25] font-bold">{project.title}</h3>
        <p className="text-muted font-mono text-[9px] tracking-[.1em] uppercase">{problemLabel}</p>
        <p className="text-secondary text-[13px]/[1.6] text-pretty">{project.description}</p>
        <ul className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-4 pt-2">
          {project.links.map((link) => (
            <ArrowLink key={link.label} href={link.href} label={link.label} />
          ))}
        </div>
      </div>
    </Card>
  );
}

function SecondaryCard({ project }: { project: SecondaryProject }) {
  return (
    <Card className="bg-surface flex flex-col gap-2 p-5">
      <h3 className="text-primary text-sm/[1.25] font-bold">{project.title}</h3>
      <p className="text-secondary text-[13px]/[1.6] text-pretty">{project.description}</p>
    </Card>
  );
}

function Thumbnail({ image, title, label }: { image?: string; title: string; label: string }) {
  if (image) {
    return (
      <Image
        src={image}
        alt={title}
        width={640}
        height={360}
        className="border-border aspect-video w-full border-b object-cover"
      />
    );
  }

  return (
    <div
      aria-hidden
      className="border-dash from-tile-1 to-tile-2 text-tile-text flex aspect-video w-full items-center justify-center border-b border-dashed bg-[repeating-linear-gradient(135deg,var(--tile-1)_0_8px,var(--tile-2)_8px_16px)] font-mono text-[10px]"
    >
      {label}
    </div>
  );
}
