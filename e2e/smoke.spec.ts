import { expect, test } from "@playwright/test";

test("should render the name and page title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Lucas Viana/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Lucas Viana");
});

test("should follow the system color scheme", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});
