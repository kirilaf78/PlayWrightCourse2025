import { test, expect } from '@playwright/test';

test('Capture screenshots', async ({ page }) => {
  await test.step('Go to url', async () => {
    await page.goto('https://www.youtube.com/@testerstalk');
    await page.getByRole('button', { name: 'Accept all' }).click();
  });

//   await test.step('Element screenshot', async () => {
//     await page
//       .getByRole('combobox', { name: 'Search' })
//       .fill('Finland vs Sweden');
//     await page.getByRole('combobox', { name: 'Search' }).press('Enter');
//   });

//   await test.step('Page screenshot', async () => {
//     await page
//       .getByRole('combobox', { name: 'Search' })
//       .fill('Finland vs Sweden');
//     await page.getByRole('combobox', { name: 'Search' }).press('Enter');
//   });

//   await test.step('Full page screenshot screenshot', async () => {
//     await page
//       .getByRole('combobox', { name: 'Search' })
//       .fill('Finland vs Sweden');
//     await page.getByRole('combobox', { name: 'Search' }).press('Enter');
//   });

//   await expect(page).toHaveTitle('Finland vs Sweden - YouTube');
});
