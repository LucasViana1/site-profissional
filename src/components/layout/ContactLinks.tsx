import type { SiteContent } from "@/content";

export function ContactLinks({ profile }: { profile: SiteContent["profile"] }) {
  return (
    <div className="text-muted font-mono text-[10px]/[1.6]">
      <a href={`mailto:${profile.email}`} className="hover:text-accent block">
        {profile.email}
      </a>
      <p className="flex gap-2">
        {profile.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            {link.label} ↗
          </a>
        ))}
      </p>
    </div>
  );
}
