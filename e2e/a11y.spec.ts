import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PAGES = [
  { path: "/", name: "português" },
  { path: "/en", name: "english" },
];

const SCHEMES = ["light", "dark"] as const;

for (const page of PAGES) {
  for (const scheme of SCHEMES) {
    test(`should have no accessibility violations on ${page.name} in ${scheme}`, async ({
      page: browserPage,
    }) => {
      await browserPage.emulateMedia({ colorScheme: scheme });
      await browserPage.goto(page.path);

      const { violations } = await new AxeBuilder({ page: browserPage })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22a", "wcag22aa"])
        .analyze();

      expect(violations.map((violation) => `${violation.id}: ${violation.help}`)).toEqual([]);
    });
  }
}
