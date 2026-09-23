import type { Metadata } from "next";
import { RootDocument } from "@/components/layout/RootDocument";
import { getContent } from "@/content";
import "../globals.css";

export const metadata: Metadata = getContent("pt").meta;

export default function PtLayout({ children }: LayoutProps<"/">) {
  return <RootDocument locale="pt">{children}</RootDocument>;
}
