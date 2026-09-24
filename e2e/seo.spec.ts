import { expect, test } from "@playwright/test";

const SITE = "https://lucasvianacunha.com.br";

test.describe("seo", () => {
  test("should declare a canonical url and both language alternates", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", SITE);
    await expect(page.locator('link[hreflang="pt-BR"]')).toHaveAttribute("href", SITE);
    await expect(page.locator('link[hreflang="en"]')).toHaveAttribute("href", `${SITE}/en`);
  });

  test("should describe the english page in english", async ({ page }) => {
    await page.goto("/en");

    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute("content", /Software engineer/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `${SITE}/en`);
  });

  test("should expose a share image on both pages", async ({ page }) => {
    for (const path of ["/", "/en"]) {
      await page.goto(path);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /^https/);
      await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute(
        "content",
        "1200",
      );
    }
  });

  test("should publish the person as structured data", async ({ page }) => {
    await page.goto("/");

    const raw = await page.locator('script[type="application/ld+json"]').textContent();
    const schema = JSON.parse(raw ?? "{}");

    expect(schema["@type"]).toBe("Person");
    expect(schema.name).toBe("Lucas Viana");
    expect(schema.sameAs.length).toBeGreaterThan(0);
  });
});

test.describe("keyboard", () => {
  test("should reveal a skip link as the first stop", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Pular para o conteúdo" });

    await expect(skip).toBeFocused();
    await expect(skip).toBeVisible();
    await expect(skip).toHaveAttribute("href", "#main");
  });
});
