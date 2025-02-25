import { test, expect } from '@playwright/test';

test('Locators in PlayWright', async ({ page }) => {
  await page.goto('https://github.com/BakkappaN');
  //GetByRole
  // await page.getByRole('link', { name: 'Sign in' }).click();

  //GetByLabel
  //await page.getByLabel('Homepage', { exact: true }).first().click();

  //GetByAltText
  //await page.getByAltText("View BakkappaN's full-sized avatar").click();
  //GetByTestId

  await page.getByTestId('repositories').first().click();
});
