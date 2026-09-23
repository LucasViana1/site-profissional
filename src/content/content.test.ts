import { describe, expect, it } from "vitest";
import { getContent } from "./index";
import { LOCALES, SECTION_IDS } from "@/utils/i18n";

describe("site content", () => {
  it.each(LOCALES)("should label every section in %s", (locale) => {
    const { sections } = getContent(locale);

    for (const id of SECTION_IDS) {
      expect(sections[id], `missing label for "${id}"`).toBeTruthy();
    }
  });

  it("should translate every section label, not reuse the portuguese one", () => {
    const pt = getContent("pt").sections;
    const en = getContent("en").sections;

    const translated = SECTION_IDS.filter((id) => id !== "stack");

    for (const id of translated) {
      expect(en[id], `"${id}" was not translated`).not.toBe(pt[id]);
    }
  });

  it.each(LOCALES)("should expose reachable profile links in %s", (locale) => {
    const { profile } = getContent(locale);

    expect(profile.email).toMatch(/^[^@\s]+@[^@\s]+$/);
    expect(profile.links.length).toBeGreaterThan(0);
    for (const link of profile.links) {
      expect(() => new URL(link.href)).not.toThrow();
    }
  });
});
