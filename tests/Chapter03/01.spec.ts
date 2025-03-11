import { test, expect } from '@playwright/test';

test('annotation 1', async ({ page }) => {
  await page.goto('https://google.com/');
  await page.getByRole('button', { name: 'Az összes elfogadása' }).click();
  await page.getByTitle('Keresés').fill('some');
});
test.skip('annotation 2', async ({ page }) => {
  await page.goto('https://google.com/');
  await page.getByRole('button', { name: 'Az összes elfogadása' }).click();
  await page.getByTitle('Keresés').fill('some');
});

test.only('annotation 3', async ({ page }) => {
  await page.goto('https://google.com/');
  await page.getByRole('button', { name: 'Az összes elfogadása' }).click();
  await page.getByTitle('Keresés').fill('some');
});




