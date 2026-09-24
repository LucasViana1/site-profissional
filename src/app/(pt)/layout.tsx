import type { Metadata } from "next";
import { RootDocument } from "@/components/layout/RootDocument";
import { buildMetadata } from "@/utils/metadata";
import "../globals.css";

export const metadata: Metadata = buildMetadata("pt");

export default function PtLayout({ children }: LayoutProps<"/">) {
  return <RootDocument locale="pt">{children}</RootDocument>;
}
