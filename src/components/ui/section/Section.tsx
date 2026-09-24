import type { ReactNode } from "react";
import type { SectionId } from "@/utils/sections";
import { ContentContainer } from "@/components/ui/ContentContainer";
import { SectionLabel } from "./SectionLabel";
import { cn } from "@/utils/cn";

export function Section({
  id,
  label,
  tone = "base",
  aside,
  children,
}: {
  id: SectionId;
  label: string;
  tone?: "base" | "surface";
  aside?: ReactNode;
  children: ReactNode;
}) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "border-border scroll-mt-16 border-t py-9 lg:py-14",
        tone === "surface" && "bg-surface",
      )}
    >
      <ContentContainer>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <SectionLabel id={headingId}>{label}</SectionLabel>
          {aside}
        </div>
        <div className="mt-5">{children}</div>
      </ContentContainer>
    </section>
  );
}
