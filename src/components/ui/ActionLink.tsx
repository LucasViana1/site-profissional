import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export type ActionVariant = "primary" | "secondary";

const VARIANTS: Record<ActionVariant, string> = {
  primary: "bg-accent text-surface",
  secondary: "border-border bg-surface text-primary border",
};

export function ActionLink({
  href,
  variant = "primary",
  external = false,
  className,
  children,
}: {
  href: string;
  variant?: ActionVariant;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "rounded-lg px-5 py-3.5 text-center text-sm font-semibold",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
