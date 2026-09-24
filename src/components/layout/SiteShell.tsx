"use client";

import { useState, type ReactNode } from "react";
import type { SiteContent } from "@/content";
import type { Locale } from "@/utils/i18n";
import { VISIBLE_SECTION_IDS } from "@/utils/sections";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Rail } from "./Rail";
import { TopBar } from "./TopBar";
import { MenuDrawer } from "./MenuDrawer";

export function SiteShell({
  content,
  locale,
  children,
}: {
  content: SiteContent;
  locale: Locale;
  children: ReactNode;
}) {
  const activeId = useScrollSpy(VISIBLE_SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="lg:grid lg:grid-cols-[232px_minmax(0,1fr)]">
      <Rail content={content} locale={locale} activeId={activeId} />
      <TopBar content={content} locale={locale} onOpenMenu={() => setMenuOpen(true)} />
      <MenuDrawer
        content={content}
        locale={locale}
        activeId={activeId}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
      <main className="min-w-0">{children}</main>
    </div>
  );
}
