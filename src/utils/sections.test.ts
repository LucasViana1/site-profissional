import { afterEach, describe, expect, it, vi } from "vitest";

async function loadSections(flags: Record<string, string>) {
  vi.resetModules();
  vi.stubEnv("NEXT_PUBLIC_SHOW_PROJECTS", flags.projects ?? "");
  vi.stubEnv("NEXT_PUBLIC_SHOW_WRITING", flags.writing ?? "");
  return import("./sections");
}

afterEach(() => vi.unstubAllEnvs());

describe("section visibility", () => {
  it("should hide the optional sections when their flags are off", async () => {
    const { VISIBLE_SECTION_IDS, isSectionVisible } = await loadSections({
      projects: "false",
      writing: "false",
    });

    expect(isSectionVisible("projects")).toBe(false);
    expect(isSectionVisible("writing")).toBe(false);
    expect(VISIBLE_SECTION_IDS).not.toContain("projects");
    expect(VISIBLE_SECTION_IDS).not.toContain("writing");
  });

  it("should show an optional section when its flag is on", async () => {
    const { VISIBLE_SECTION_IDS, isSectionVisible } = await loadSections({
      projects: "true",
      writing: "false",
    });

    expect(isSectionVisible("projects")).toBe(true);
    expect(VISIBLE_SECTION_IDS).toContain("projects");
    expect(VISIBLE_SECTION_IDS).not.toContain("writing");
  });

  it("should hide an optional section when its flag is missing", async () => {
    const { isSectionVisible } = await loadSections({});

    expect(isSectionVisible("projects")).toBe(false);
    expect(isSectionVisible("writing")).toBe(false);
  });

  it("should keep the required sections visible regardless of the flags", async () => {
    const { SECTION_IDS, VISIBLE_SECTION_IDS } = await loadSections({});

    expect(VISIBLE_SECTION_IDS).toEqual(
      SECTION_IDS.filter((id) => id !== "projects" && id !== "writing"),
    );
  });

  it("should keep the section order", async () => {
    const { SECTION_IDS, VISIBLE_SECTION_IDS } = await loadSections({
      projects: "true",
      writing: "true",
    });

    expect(VISIBLE_SECTION_IDS).toEqual([...SECTION_IDS]);
  });
});
