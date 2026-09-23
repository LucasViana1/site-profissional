import Link from "next/link";
import { LOCALES, localeHref, localeLabel, type Locale } from "@/utils/i18n";

export function LangSwitch({ legend, current }: { legend: string; current: Locale }) {
  return (
    <div className="border-border bg-bg flex items-center justify-between rounded-lg border px-3 py-2">
      <span className="text-secondary font-mono text-[10px]">{legend}</span>
      <div className="flex gap-1">
        {LOCALES.map((locale) => {
          const active = locale === current;
          return (
            <Link
              key={locale}
              href={localeHref(locale)}
              hrefLang={locale}
              aria-current={active ? "page" : undefined}
              className={`rounded px-2 py-1.5 font-mono text-[9px] font-medium ${
                active ? "bg-accent-soft text-accent-soft-text" : "text-secondary"
              }`}
            >
              {localeLabel(locale)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
