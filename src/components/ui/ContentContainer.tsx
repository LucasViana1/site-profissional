import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function ContentContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1180px] px-4.5 lg:px-14", className)}>{children}</div>
  );
}
