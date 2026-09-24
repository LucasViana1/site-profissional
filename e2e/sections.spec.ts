import { expect, test } from "@playwright/test";

test.describe("sections", () => {
  test("should jump to projects from the hero call to action", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Ver projetos" }).click();

    await expect(page).toHaveURL(/#projects$/);
    await expect(page.locator("section#projects")).toBeInViewport();
  });

  test("should jump to contact from the services call to action", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Pedir orçamento" }).click();

    await expect(page).toHaveURL(/#contact$/);
    await expect(page.locator("section#contact")).toBeInViewport();
  });

  test("should offer the email as a mailto link", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "Enviar email" })).toHaveAttribute(
      "href",
      /^mailto:/,
    );
  });

  test("should open every external link in a new tab safely", async ({ page }) => {
    await page.goto("/");

    const external = page.locator('main a[href^="http"]');
    const count = await external.count();
    expect(count).toBeGreaterThan(0);

    for (let index = 0; index < count; index += 1) {
      const link = external.nth(index);
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", /noreferrer/);
    }
  });

  test("should give every section a heading", async ({ page }) => {
    await page.goto("/");

    const ids = await page
      .locator("main section[id]")
      .evaluateAll((sections) => sections.map((section) => section.id));

    expect(ids.length).toBeGreaterThan(0);
    for (const id of ids) {
      await expect(page.locator(`section#${id}`)).toHaveAttribute("aria-labelledby", `${id}-title`);
      await expect(page.locator(`h2#${id}-title`)).toHaveText(/\S/);
    }
  });

  test("should hide the writing section while the flag is off", async ({ page, isMobile }) => {
    await page.goto("/");

    await expect(page.locator("section#writing")).toHaveCount(0);

    if (isMobile) await page.getByRole("button", { name: "Abrir menu" }).click();
    await expect(page.getByRole("link", { name: "escrita" })).toHaveCount(0);
  });

  test("should translate the sections on the english page", async ({ page }) => {
    await page.goto("/en");

    await expect(page.locator("#services-title")).toHaveText("services");
    await expect(page.getByRole("link", { name: "Request a quote" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Multi-gateway checkout" })).toBeVisible();
  });
});
