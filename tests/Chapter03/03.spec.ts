import { test, expect } from '@playwright/test';

test('test 1', {tag: ['@tag 1']}, async ({ page }) => {
  await page.goto('https://google.com/');
  await page.getByRole('button', { name: 'Az összes elfogadása' }).click();
  await page.getByTitle('Keresés').fill('some');
});
test('test 2', {tag: ['@tag 1', '@tag 2']}, async ({ page }) => {
  await page.goto('https://google.com/');
  await page.getByRole('button', { name: 'Az összes elfogadása' }).click();
  await page.getByTitle('Keresés').fill('some');
});

test('test 3', {tag: ['@tag 3']}, async ({ page }) => {
  await page.goto('https://google.com/');
  await page.getByRole('button', { name: 'Az összes elfogadása' }).click();
  await page.getByTitle('Keresés').fill('some');
});
