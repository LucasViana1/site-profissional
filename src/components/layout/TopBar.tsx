import Image from "next/image";
import type { SiteContent } from "@/content";
import type { Locale } from "@/utils/i18n";
import { LangToggleLink } from "@/components/controls/lang/LangToggleLink";
import { ThemeToggleButton } from "@/components/controls/theme/ThemeToggleButton";

export function TopBar({
  content,
  locale,
  onOpenMenu,
}: {
  content: SiteContent;
  locale: Locale;
  onOpenMenu: () => void;
}) {
  const { profile, nav } = content;

  return (
    <header className="border-border bg-surface sticky top-0 z-10 flex items-center justify-between border-b px-4.5 py-3 lg:hidden">
      <div className="flex items-center gap-2.5">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={26}
          height={26}
          priority
          className="border-border h-[26px] w-[26px] rounded-full border object-cover"
        />
        <div>
          <p className="text-primary text-xs font-bold">{profile.name}</p>
          <p className="text-secondary font-mono text-[9px]">{profile.role}</p>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <LangToggleLink current={locale} label={nav.language} />
        <ThemeToggleButton label={nav.theme} />
        <button
          type="button"
          aria-label={nav.openMenu}
          onClick={onOpenMenu}
          className="flex cursor-pointer flex-col gap-1 p-1"
        >
          <span aria-hidden className="bg-primary h-0.5 w-[18px]" />
          <span aria-hidden className="bg-primary h-0.5 w-[18px]" />
        </button>
      </div>
    </header>
  );
}
