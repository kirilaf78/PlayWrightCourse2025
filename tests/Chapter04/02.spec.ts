import { test, expect } from '@playwright/test';

test('Run failed tests', async ({ page }) => {
  await test.step('Go to url', async () => {
    await page.goto('https://www.youtube.com/');
    await page
      .getByRole('button', { name: 'Accept the use of cookies and' })
      .click();
  });

  await test.step('Search with keywords', async () => {
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page
      .getByRole('combobox', { name: 'Search' })
      .fill('Finland vs Sweden');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  });

  await expect(page).toHaveTitle('Finland vs Sweden - YouTube');
});

test('Test 2', async ({ page }) => {
  await test.step('Go to url', async () => {
    expect(true).toBe(false);
  });
});

test('Test 3', async ({ page }) => {
  await test.step('Go to url', async () => {
    expect(true).toBe(false);
  });
});
