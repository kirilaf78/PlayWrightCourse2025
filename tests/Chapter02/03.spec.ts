import { test, expect } from '@playwright/test';
import { log } from 'console';

test.beforeAll(async () => {
  console.log(`Running before All`);
});

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page
    .getByRole('button', { name: 'Accept the use of cookies and' })
    .click();

  console.log(`Running before Each test`);
});

test.afterEach(async () => {
  console.log(`Running after Each test`);
});

test.afterAll(async () => {
  console.log(`Running after All`);
});

test('Test 1', async ({ page }) => {
  console.log(`Test 1 execution started`);

//   await test.step('Go to url', async () => {
//     await page.goto('https://www.youtube.com/');
//     await page
//       .getByRole('button', { name: 'Accept the use of cookies and' })
//       .click();
//   });

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
  console.log(`Test 2 execution started`);

  //   await test.step('Go to url', async () => {
  //     await page.goto('https://www.youtube.com/');
  //     await page
  //       .getByRole('button', { name: 'Accept the use of cookies and' })
  //       .click();
  //   });

  await test.step('Search with keywords', async () => {
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page
      .getByRole('combobox', { name: 'Search' })
      .fill('Finland vs Sweden');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  });

  await expect(page).toHaveTitle('Finland vs Sweden - YouTube');
});
