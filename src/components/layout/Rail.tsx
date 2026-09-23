import Image from "next/image";
import type { SiteContent } from "@/content";
import type { Locale } from "@/utils/i18n";
import { LangSwitch } from "@/components/controls/lang/LangSwitch";
import { ThemeSwitch } from "@/components/controls/theme/ThemeSwitch";
import { NavList } from "./NavList";
import { ContactLinks } from "./ContactLinks";

export function Rail({
  content,
  locale,
  activeId,
}: {
  content: SiteContent;
  locale: Locale;
  activeId: string | null;
}) {
  const { profile, nav, sections } = content;

  return (
    <div className="border-border bg-surface sticky top-0 hidden h-dvh flex-col gap-7 overflow-y-auto border-r px-6 py-9 lg:flex">
      <div className="flex flex-col gap-3">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={64}
          height={64}
          priority
          className="border-border h-16 w-16 rounded-full border object-cover"
        />
        <div>
          <p className="text-primary text-sm font-bold">{profile.name}</p>
          <p className="text-secondary font-mono text-[11px]">{profile.role}</p>
        </div>
      </div>

      <nav aria-label={nav.label}>
        <NavList labels={sections} activeId={activeId} variant="rail" />
      </nav>

      <div className="mt-auto flex flex-col gap-3.5">
        <LangSwitch legend={nav.language} current={locale} />
        <ThemeSwitch legend={nav.theme} labels={nav.themeOptions} />
        <ContactLinks profile={profile} />
      </div>
    </div>
  );
}
