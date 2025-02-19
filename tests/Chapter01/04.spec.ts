import { test, expect } from '@playwright/test';

test('Codegen', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click();
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk☑️' })).toBeVisible();
});