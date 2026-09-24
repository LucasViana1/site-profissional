import type { ReactNode } from "react";

export function SectionLabel({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="text-muted font-mono text-[10px] tracking-[.14em] uppercase">
      {children}
    </h2>
  );
}
