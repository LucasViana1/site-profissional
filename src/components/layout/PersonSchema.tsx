import type { SiteContent } from "@/content";
import { SITE_URL } from "@/utils/site";

export function PersonSchema({ profile }: { profile: SiteContent["profile"] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    image: new URL(profile.avatar, SITE_URL).href,
    sameAs: profile.links.map((link) => link.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
