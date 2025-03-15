import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';


    test('Timeouts', async ({ page }) => {
  await test.step('Go to url', async () => {
    await page.goto('https://www.youtube.com/');
    await page
      .getByRole('button', { name: 'Accept the use of cookies and' })
      .click();
  });

  await test.step('Enter search parameters', async () => {
    await page.getByRole('combobox', { name: 'Search' }).click()
    await page.getByRole('combobox', { name: 'Search' }).fill('Finland vs Sweden');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  });

  await expect(page).toHaveTitle('Finland vs dSweden - YouTube', {timeout: 5000});

})

