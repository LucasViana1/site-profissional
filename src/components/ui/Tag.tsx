import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export type TagVariant = "soft" | "outline";

const VARIANTS: Record<TagVariant, string> = {
  soft: "bg-accent-soft text-accent-soft-text",
  outline: "border-border bg-bg text-secondary border",
};

export function Tag({ variant = "soft", children }: { variant?: TagVariant; children: ReactNode }) {
  return (
    <span
      className={cn("rounded px-2 py-1.5 font-mono text-[10px] font-medium", VARIANTS[variant])}
    >
      {children}
    </span>
  );
}
