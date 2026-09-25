import { cn } from "@/utils/cn";

export function ArrowLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "text-accent hover:text-accent-soft-text inline-flex min-h-6 items-center text-xs font-semibold",
        className,
      )}
    >
      {label} <span aria-hidden>&nbsp;↗</span>
    </a>
  );
}
