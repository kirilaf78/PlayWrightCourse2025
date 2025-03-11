import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
test.describe('Group 1', () => {
  test('test 1', async ({ page }) => {
    await page.goto('https://google.com/');
    await page.getByRole('button', { name: 'Az összes elfogadása' }).click();
    await page.getByTitle('Keresés').fill('some');
  });
  test('test 2', async ({ page }) => {
    await page.goto('https://google.com/');
    await page.getByRole('button', { name: 'Az összes elfogadása' }).click();
    await page.getByTitle('Keresés').fill('some');
  });
});

test.describe('Group 2', () => {
  test('test 3', async ({ page }) => {
    await page.goto('https://google.com/');
    await page.getByRole('button', { name: 'Az összes elfogadása' }).click();
    await page.getByTitle('Keresés').fill('some');
  });
});
