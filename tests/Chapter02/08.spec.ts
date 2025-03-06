import { test, expect } from '@playwright/test';

test('Date picker', async ({ page }) => {
  await test.step('Go to url', async () => {
    await page.goto('https://jqueryui.com/datepicker/');
  });

  //   await test.step('Enter manually', async () => {
  //     const iframe = page.frameLocator('[class="demo-frame"]');
  //     await iframe.locator('[id="datepicker"]').fill('03/05/2025');
  //   });

  //   await test.step('Enter dynamically', async () => {
  //     const iframe = page.frameLocator('[class="demo-frame"]');
  //     await iframe.locator('[id="datepicker"]').click();
  //     await iframe.locator('.ui-datepicker-today').click()
  //   });

//   await test.step('Previous date', async () => {
//     const iframe = page.frameLocator('[class="demo-frame"]');
//     await iframe.locator('[id="datepicker"]').click();
//     await iframe.locator('[title="Prev"]').click();
//     await iframe.locator('text="15"').click();
//   });

    await test.step('Next date', async () => {
    const iframe = page.frameLocator('[class="demo-frame"]');
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Next"]').click();
    await iframe.locator('text="15"').click();
  });
});
