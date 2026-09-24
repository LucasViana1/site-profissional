import type { Metadata } from "next";
import { RootDocument } from "@/components/layout/RootDocument";
import { buildMetadata } from "@/utils/metadata";
import "../globals.css";

export const metadata: Metadata = buildMetadata("en");

export default function EnLayout({ children }: LayoutProps<"/">) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
