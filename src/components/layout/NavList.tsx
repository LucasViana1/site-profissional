import { SECTION_IDS, type SectionId } from "@/utils/i18n";

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
      {SECTION_IDS.map((id) => (
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
  const shared = active ? "text-primary" : "text-secondary";

  if (variant === "drawer") {
    return (
      <a
        href={href}
        onClick={onNavigate}
        aria-current={active ? "true" : undefined}
        className={`block py-1.5 text-[22px]/[1.4] font-semibold ${active ? "text-accent" : "text-primary"}`}
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
      className={`flex items-center gap-3 py-2.5 text-[13px] ${active ? "font-semibold" : ""} ${shared}`}
    >
      <span
        aria-hidden
        className={`h-px transition-all ${active ? "bg-accent w-5" : "bg-dash w-2.5"}`}
      />
      {label}
    </a>
  );
}
