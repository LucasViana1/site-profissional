import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-muted font-mono text-[10px] tracking-[.14em] uppercase">{children}</p>;
}
