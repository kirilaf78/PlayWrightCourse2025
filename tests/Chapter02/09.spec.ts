import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
  await test.step('Go to url', async () => {
    await page.goto('https://www.youtube.com/');
    await page
      .getByRole('button', { name: 'Accept the use of cookies and' })
      .click();
  });
  // visible, editable, enabled, empty
//   await test.step('visible, editable, enabled, empty', async () => {
//     await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
//     await expect(page.getByRole('combobox', { name: 'Search' })).toBeEditable();
//     await expect(page.getByRole('combobox', { name: 'Search' })).toBeEnabled();
//     await expect(page.getByRole('combobox', { name: 'Search' })).toBeEmpty();
//   });

  await test.step('Url, title, text, count', async () => {
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page
      .getByRole('combobox', { name: 'Search' })
      .fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await expect(page).toHaveURL(
      'https://www.youtube.com/results?search_query=playwright+by+testers+talk'
    );
    await expect(page).toHaveTitle('playwright by testers talk - YouTube')
    await expect(page.getByRole('link', { name: 'Playwright by Testers Talk' })).toHaveText('Playwright by Testers Talk☑️')
   await expect(page.getByRole('link', { name: 'Playwright by Testers Talk' })).toHaveCount(1)
  });

  //     await test.step('Go to url', async () => {
  //     await page.goto('https://www.youtube.com/');
  //     await page
  //       .getByRole('button', { name: 'Accept the use of cookies and' })
  //       .click();
  //   });

  //     await test.step('Go to url', async () => {
  //     await page.goto('https://www.youtube.com/');
  //     await page
  //       .getByRole('button', { name: 'Accept the use of cookies and' })
  //       .click();
  //   });
});
