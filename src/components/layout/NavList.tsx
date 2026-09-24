import { VISIBLE_SECTION_IDS, type SectionId } from "@/utils/sections";
import { cn } from "@/utils/cn";

export type NavVariant = "rail" | "drawer";

type NavListProps = {
  labels: Record<SectionId, string>;
  activeId: string | null;
  variant: NavVariant;
  onNavigate?: () => void;
};

export function NavList({ labels, activeId, variant, onNavigate }: NavListProps) {
  return (
    <ul className={variant === "rail" ? "flex flex-col" : "flex flex-col gap-0.5"}>
      {VISIBLE_SECTION_IDS.map((id) => (
        <li key={id}>
          <NavItem
            href={`#${id}`}
            label={labels[id]}
            active={activeId === id}
            variant={variant}
            onNavigate={onNavigate}
          />
        </li>
      ))}
    </ul>
  );
}

function NavItem({
  href,
  label,
  active,
  variant,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  variant: NavVariant;
  onNavigate?: () => void;
}) {
  if (variant === "drawer") {
    return (
      <a
        href={href}
        onClick={onNavigate}
        aria-current={active ? "true" : undefined}
        className={cn(
          "block py-1.5 text-[22px]/[1.4] font-semibold",
          active ? "text-accent" : "text-primary",
        )}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onNavigate}
      aria-current={active ? "true" : undefined}
      className={cn(
        "flex items-center gap-3 py-2.5 text-[13px]",
        active ? "text-primary font-semibold" : "text-secondary",
      )}
    >
      <span
        aria-hidden
        className={cn("h-px transition-all", active ? "bg-accent w-5" : "bg-dash w-2.5")}
      />
      {label}
    </a>
  );
}
