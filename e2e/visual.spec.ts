import { expect, test } from "@playwright/test";

const PAGES = [
  { path: "/", name: "home-pt" },
  { path: "/en", name: "home-en" },
];

const SCHEMES = ["light", "dark"] as const;

for (const page of PAGES) {
  for (const scheme of SCHEMES) {
    test(`should match the ${page.name} layout in ${scheme}`, async ({ page: browserPage }) => {
      await browserPage.emulateMedia({ colorScheme: scheme });
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState("networkidle");

      await expect(browserPage).toHaveScreenshot(`${page.name}-${scheme}.png`, {
        fullPage: true,
        animations: "disabled",
      });
    });
  }
}
