import type { SiteContent } from "@/content";

export function ContactLinks({ profile }: { profile: SiteContent["profile"] }) {
  return (
    <div className="text-muted flex flex-col font-mono text-[10px]">
      <a
        href={`mailto:${profile.email}`}
        className="hover:text-accent flex min-h-6 items-center self-start"
      >
        {profile.email}
      </a>
      <div className="flex flex-wrap gap-x-4">
        {profile.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent flex min-h-6 items-center"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
}
