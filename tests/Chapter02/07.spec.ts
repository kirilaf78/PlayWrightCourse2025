import { test, expect } from '@playwright/test';

test('Keyboard work', async ({ page }) => {
  await test.step('Go to url', async () => {
    await page.goto('https://www.youtube.com/');
    await page
      .getByRole('button', { name: 'Accept the use of cookies and' })
      .click();
  });

  await test.step('Press Enter', async () => {
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page
      .getByRole('combobox', { name: 'Search' })
      .fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  });

//   await test.step('Select and Press Delete', async () => {
//     await page.getByRole('combobox', { name: 'Search' }).click();
//     // await page.getByRole('combobox', { name: 'Search' }).press('Control+A');
//     // await page.getByRole('combobox', { name: 'Search' }).press('Delete');

//     await page.keyboard.press('Control+A')
//     await page.keyboard.press('Delete')
//   });
await test.step('Tab and Press Enter', async () => {
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Delete')

})
 });
