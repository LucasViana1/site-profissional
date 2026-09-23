import Link from "next/link";
import { localeHref, localeLabel, type Locale } from "@/utils/i18n";

export function LangToggleLink({ current, label }: { current: Locale; label: string }) {
  const target = current === "pt" ? "en" : "pt";

  return (
    <Link
      href={localeHref(target)}
      hrefLang={target}
      aria-label={`${label}: ${localeLabel(target)}`}
      className="border-border bg-bg text-primary flex h-8 items-center rounded-md border px-2.5 font-mono text-[11px] font-medium"
    >
      {localeLabel(target)}
    </Link>
  );
}
