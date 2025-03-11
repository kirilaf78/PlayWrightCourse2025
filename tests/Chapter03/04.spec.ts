import { test, expect } from '@playwright/test';

test('Retry after failure', async ({ page }) => {
  await page.goto('https://google.com/');
  await page.getByRole('button', { name: 'Az összes elfogadása' }).click();
  await page.getByTitle('Keresés').fill('some');
  await expect(page.getByRole('link', { name: 'Gmail' })).toHaveText('Gmawil')
});