import { SHOW_PROJECTS, SHOW_WRITING } from "./flags";

export const SECTION_IDS = [
  "about",
  "experience",
  "services",
  "projects",
  "stack",
  "writing",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

const OPTIONAL_SECTIONS: Partial<Record<SectionId, boolean>> = {
  projects: SHOW_PROJECTS,
  writing: SHOW_WRITING,
};

export function isSectionVisible(id: SectionId): boolean {
  return OPTIONAL_SECTIONS[id] ?? true;
}

export const VISIBLE_SECTION_IDS: readonly SectionId[] = SECTION_IDS.filter(isSectionVisible);
