import { test, expect } from '@playwright/test';

test('Locators in PlayWright', async ({ page }) => {
  // await page.goto('https://github.com/BakkappaN');
  //GetByRole
  // await page.getByRole('link', { name: 'Sign in' }).click();

  //GetByLabel
  //await page.getByLabel('Homepage', { exact: true }).first().click();

  //GetByAltText
  //await page.getByAltText("View BakkappaN's full-sized avatar").click();
  //GetByTestId

  //await page.getByTestId('repositories').first().click();
  //Get by text
  // await page.getByText('Sign up').click();

  //Get by placeholder, Xpath and Css
  //await page.goto('https://youtube.com/@testerstalk');
  //await page.getByRole('button', { name: 'Accept all' }).click();
  //await page.getByPlaceholder('Search').fill('testers talk');
  //await page.locator('//input[@name="search_query"]').fill('tester talk')
  //await page.locator('input[name="search_query"]').fill('tester talk')

  //Get by title
  await page.goto('https://google.com/');
  await page.getByRole('button', { name: 'Az összes elfogadása' }).click();
  await page.getByTitle('Keresés').fill('some');
});
