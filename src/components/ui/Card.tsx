import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("border-border overflow-hidden rounded-[10px] border", className)}>
      {children}
    </div>
  );
}
