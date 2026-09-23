"use client";

import { useEffect, useRef } from "react";
import type { SiteContent } from "@/content";
import type { Locale } from "@/utils/i18n";
import { LangSwitch } from "@/components/controls/lang/LangSwitch";
import { ThemeSwitch } from "@/components/controls/theme/ThemeSwitch";
import { NavList } from "./NavList";
import { ContactLinks } from "./ContactLinks";

export function MenuDrawer({
  content,
  locale,
  activeId,
  open,
  onClose,
}: {
  content: SiteContent;
  locale: Locale;
  activeId: string | null;
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { profile, nav, sections } = content;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-label={nav.label}
      className="bg-surface text-primary my-0 mr-0 ml-auto h-dvh max-h-none w-[300px] max-w-[85vw] backdrop:bg-black/40 lg:hidden"
    >
      <div className="border-border bg-surface flex items-center justify-between border-b px-4.5 py-3">
        <div>
          <p className="text-primary text-xs font-bold">{profile.name}</p>
          <p className="text-secondary font-mono text-[9px]">{profile.role}</p>
        </div>
        <button
          type="button"
          aria-label={nav.closeMenu}
          onClick={onClose}
          className="text-primary cursor-pointer px-1 font-mono text-base"
        >
          <span aria-hidden>×</span>
        </button>
      </div>

      <div className="flex flex-col gap-2 px-4.5 pt-5 pb-8">
        <nav aria-label={nav.label}>
          <NavList labels={sections} activeId={activeId} variant="drawer" onNavigate={onClose} />
        </nav>
        <div className="mt-5 flex flex-col gap-2">
          <LangSwitch legend={nav.language} current={locale} />
          <ThemeSwitch legend={nav.theme} labels={nav.themeOptions} />
        </div>
        <div className="mt-4">
          <ContactLinks profile={profile} />
        </div>
      </div>
    </dialog>
  );
}
