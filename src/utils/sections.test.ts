import { afterEach, describe, expect, it, vi } from "vitest";

async function loadSections(showWriting: string | undefined) {
  vi.resetModules();
  if (showWriting === undefined) vi.stubEnv("NEXT_PUBLIC_SHOW_WRITING", "");
  else vi.stubEnv("NEXT_PUBLIC_SHOW_WRITING", showWriting);
  return import("./sections");
}

afterEach(() => vi.unstubAllEnvs());

describe("section visibility", () => {
  it("should hide writing when the flag is off", async () => {
    const { VISIBLE_SECTION_IDS, isSectionVisible } = await loadSections("false");

    expect(isSectionVisible("writing")).toBe(false);
    expect(VISIBLE_SECTION_IDS).not.toContain("writing");
  });

  it("should show writing when the flag is on", async () => {
    const { VISIBLE_SECTION_IDS, isSectionVisible } = await loadSections("true");

    expect(isSectionVisible("writing")).toBe(true);
    expect(VISIBLE_SECTION_IDS).toContain("writing");
  });

  it("should hide writing when the flag is missing", async () => {
    const { isSectionVisible } = await loadSections(undefined);

    expect(isSectionVisible("writing")).toBe(false);
  });

  it("should keep every other section visible regardless of the flag", async () => {
    const { SECTION_IDS, VISIBLE_SECTION_IDS } = await loadSections("false");

    expect(VISIBLE_SECTION_IDS).toEqual(SECTION_IDS.filter((id) => id !== "writing"));
  });

  it("should keep the section order", async () => {
    const { SECTION_IDS, VISIBLE_SECTION_IDS } = await loadSections("true");

    expect(VISIBLE_SECTION_IDS).toEqual([...SECTION_IDS]);
  });
});
