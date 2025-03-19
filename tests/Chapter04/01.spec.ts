import { test, expect } from '@playwright/test';

test('Multiple browsers/tabs', async ({ page, browser }) => {
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
  //new browser session
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await test.step('Go to url', async () => {
    await page2.goto('https://www.youtube.com/');
    await page2
      .getByRole('button', { name: 'Accept the use of cookies and' })
      .click();
  });

  await test.step('Search with keywords', async () => {
    await page2.getByRole('combobox', { name: 'Search' }).click();
    await page2
      .getByRole('combobox', { name: 'Search' })
      .fill('Finland vs Sweden');
    await page2.getByRole('combobox', { name: 'Search' }).press('Enter');
  });

  await expect(page2).toHaveTitle('Finland vs Sweden - YouTube');
  //New tab
  const tab = await context2.newPage();
  await test.step('Go to url', async () => {
    await tab.goto('https://www.youtube.com/');
    // await tab
    //   .getByRole('button', { name: 'Accept the use of cookies and' })
    //   .click();
  });

  await test.step('Search with keywords', async () => {
    await tab.getByRole('combobox', { name: 'Search' }).click();
    await tab
      .getByRole('combobox', { name: 'Search' })
      .fill('Finland vs Sweden');
    await tab.getByRole('combobox', { name: 'Search' }).press('Enter');
  });
});
