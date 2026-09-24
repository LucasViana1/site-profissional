import { expect, test, type Page } from "@playwright/test";

async function openNavigation(page: Page, isMobile: boolean) {
  if (isMobile) await page.getByRole("button", { name: "Abrir menu" }).click();
}

test.describe("shell", () => {
  test("should anchor every nav item to a section on the page", async ({ page, isMobile }) => {
    await page.goto("/");
    await openNavigation(page, isMobile);

    const hrefs = await page
      .getByRole("navigation")
      .first()
      .locator('a[href^="#"]')
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")));

    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of hrefs) {
      await expect(page.locator(`section${href}`)).toBeAttached();
    }
  });

  test("should scroll to a section when its nav item is selected", async ({ page, isMobile }) => {
    await page.goto("/");
    await openNavigation(page, isMobile);

    await page.getByRole("link", { name: "projetos", exact: true }).click();

    await expect(page).toHaveURL(/#projects$/);
    await expect(page.locator("section#projects")).toBeInViewport();
  });

  test("should keep the theme after switching it", async ({ page, isMobile }) => {
    await page.goto("/");
    await openNavigation(page, isMobile);

    await page.getByRole("button", { name: "dark", exact: true }).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  });
});

test.describe("language", () => {
  test("should serve portuguese at the root and english at /en", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
    await expect(page.locator("#about-title")).toHaveText("sobre");

    await page.goto("/en");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("#about-title")).toHaveText("about");
  });

  test("should switch to english from the portuguese page", async ({ page, isMobile }) => {
    await page.goto("/");
    await openNavigation(page, isMobile);

    await page.getByRole("link", { name: "EN", exact: true }).click();

    await expect(page).toHaveURL(/\/en\/?$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });
});

test.describe("drawer", () => {
  test.skip(({ isMobile }) => !isMobile, "o drawer só existe no mobile");

  test("should close when a section is selected", async ({ page }) => {
    await page.goto("/");
    const drawer = page.getByRole("dialog", { name: "Navegação principal" });

    await page.getByRole("button", { name: "Abrir menu" }).click();
    await expect(drawer).toBeVisible();

    await drawer.getByRole("link", { name: "contato", exact: true }).click();

    await expect(drawer).toBeHidden();
  });

  test("should close on Escape", async ({ page }) => {
    await page.goto("/");
    const drawer = page.getByRole("dialog", { name: "Navegação principal" });

    await page.getByRole("button", { name: "Abrir menu" }).click();
    await expect(drawer).toBeVisible();

    await page.keyboard.press("Escape");

    await expect(drawer).toBeHidden();
  });
});
