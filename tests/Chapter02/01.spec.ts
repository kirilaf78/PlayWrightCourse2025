import { test, expect } from "@playwright/test";

test("Capture screenshots", async ({ page }) => {
  await test.step("Go to url", async () => {
    await page.goto("https://www.youtube.com/@testerstalk");
    await page.getByRole("button", { name: "Accept all" }).click();
  });
  await test.step("Element screenshot", async () => {
    await page
      .locator("#page-header-container")
      .screenshot({ path: "./screenshots/01.png" });
  });

  await test.step("Page screenshot", async () => {
    await page
      .screenshot({ path: "./screenshots/02.png" });
  });

  await test.step("Full page screenshot", async () => {
    await page
      .screenshot({ path: "./screenshots/03.png", fullPage: true });
  });

});
