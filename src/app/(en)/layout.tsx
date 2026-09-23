import type { Metadata } from "next";
import { RootDocument } from "@/components/layout/RootDocument";
import { getContent } from "@/content";
import "../globals.css";

export const metadata: Metadata = getContent("en").meta;

export default function EnLayout({ children }: LayoutProps<"/">) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
