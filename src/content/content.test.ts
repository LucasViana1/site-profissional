import { describe, expect, it } from "vitest";
import { getContent } from "./index";
import { LOCALES } from "@/utils/i18n";
import { SECTION_IDS } from "@/utils/sections";
import { YEARS_AT_MAGALU, YEARS_IN_FIELD } from "@/utils/career";

const isReachable = (href: string) =>
  href.startsWith("/") || href.startsWith("mailto:") || URL.canParse(href);

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
      expect(isReachable(link.href), link.href).toBe(true);
    }
  });

  it.each(LOCALES)("should fill every section with content in %s", (locale) => {
    const { about, experience, services, projects, stack, writing, contact } = getContent(locale);

    expect(about.columns.length).toBeGreaterThan(0);
    expect(experience.summary).toBeTruthy();
    expect(services.items.length).toBeGreaterThan(0);
    expect(projects.featured.length).toBeGreaterThan(0);
    expect(stack.groups.length).toBeGreaterThan(0);
    expect(writing.items.length).toBeGreaterThan(0);
    expect(contact.title).toBeTruthy();
  });

  it.each(LOCALES)("should describe every service and project in %s", (locale) => {
    const { services, projects } = getContent(locale);

    for (const service of services.items) {
      expect(service.description, service.title).toBeTruthy();
      expect(service.tags.length, service.title).toBeGreaterThan(0);
    }

    for (const project of projects.featured) {
      expect(project.description, project.title).toBeTruthy();
      expect(project.tags.length, project.title).toBeGreaterThan(0);
      expect(project.links.length, project.title).toBeGreaterThan(0);
    }
  });

  it.each(LOCALES)("should point every link somewhere reachable in %s", (locale) => {
    const { experience, projects, writing } = getContent(locale);
    const links = [
      experience.resume,
      projects.all,
      ...projects.featured.flatMap((project) => project.links),
      ...writing.items.map((article) => ({ label: article.title, href: article.href })),
    ];

    for (const link of links) {
      expect(isReachable(link.href), `${link.label}: ${link.href}`).toBe(true);
    }
  });

  it.each(LOCALES)("should read the years from the career constants in %s", (locale) => {
    const { meta, hero, experience } = getContent(locale);

    expect(meta.description).toContain(`${YEARS_IN_FIELD}`);
    expect(hero.summary).toContain(`${YEARS_AT_MAGALU}`);
    expect(experience.summary).toContain(`${YEARS_IN_FIELD}`);
    expect(experience.summary).toContain(`${YEARS_AT_MAGALU}`);
  });

  it.each(LOCALES)("should list every stack group with items in %s", (locale) => {
    for (const group of getContent(locale).stack.groups) {
      expect(group.items.length, group.title).toBeGreaterThan(0);
    }
  });
});
