import type { ReactNode } from "react";
import type { SectionId } from "@/utils/i18n";
import { ContentContainer } from "@/components/ui/ContentContainer";
import { SectionLabel } from "./SectionLabel";

export function Section({
  id,
  label,
  tone = "base",
  children,
}: {
  id: SectionId;
  label: string;
  tone?: "base" | "surface";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`border-border scroll-mt-16 border-t py-9 lg:py-14 ${
        tone === "surface" ? "bg-surface" : ""
      }`}
    >
      <ContentContainer>
        <SectionLabel>{label}</SectionLabel>
        <div className="mt-4">{children}</div>
      </ContentContainer>
    </section>
  );
}
