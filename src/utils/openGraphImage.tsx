import { ImageResponse } from "next/og";
import { getContent } from "@/content";
import type { Locale } from "./i18n";
import { SITE_URL } from "./site";

export const OPEN_GRAPH_SIZE = { width: 1200, height: 630 };

export function openGraphImage(locale: Locale) {
  const { profile, hero } = getContent(locale);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0E1116",
        padding: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          width: 96,
          height: 96,
          borderRadius: 22,
          background: "#2563EB",
          color: "#FFFFFF",
          fontSize: 44,
          fontWeight: 700,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        LV
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 88, fontWeight: 700, color: "#E6EDF3", letterSpacing: -3 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 34, color: "#4C8DFF" }}>{hero.tagline}</div>
      </div>

      <div style={{ fontSize: 26, color: "#9BA6B2" }}>{new URL(SITE_URL).host}</div>
    </div>,
    OPEN_GRAPH_SIZE,
  );
}
