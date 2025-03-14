import { test, expect } from '@playwright/test';
const searchKeywords = ['Finland vs Sweden', 'Canada vs USA', 'Canada vs Finland']

for (const searchKeyword of searchKeywords) {
    test(`My manual PlayWright ${searchKeyword}`, async ({ page }) => {
  await test.step('Go to url', async () => {
    await page.goto('https://www.youtube.com/');
    await page
      .getByRole('button', { name: 'Accept the use of cookies and' })
      .click();
  });

  await test.step('Search with keywords', async () => {
    await page.getByRole('combobox', { name: 'Search' }).click()
    await page.getByRole('combobox', { name: 'Search' }).fill(searchKeyword);
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  });

  await expect(page).toHaveTitle(searchKeyword+' - YouTube');

})
}

