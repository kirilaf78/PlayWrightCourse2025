import { test, expect } from '@playwright/test';

test('Get text and attribute value', async ({ page }) => {
  await test.step('Go to url', async () => {
    await page.goto('https://github.com/BakkappaN');
    const text = await page.locator('[itemprop="name"]').innerText()
    const finalText = text?.trim()
    console.log(`The text is ${finalText}`);
    expect(finalText).toBe('Testers Talk')

    const attributeValue = await page.getByRole('link', { name: 'Repositories' }).getAttribute('data-selected-links')
    console.log(`The attribute value is ${attributeValue}`);
    
  });

//   await test.step('Search with keywords', async () => {
//     await page.getByRole('combobox', { name: 'Search' }).click()
//     await page.getByRole('combobox', { name: 'Search' }).fill('Finland vs Sweden');
//     await page.getByRole('combobox', { name: 'Search' }).press('Enter');
//   });

//   await expect(page).toHaveTitle('Finland vs Sweden - YouTube');
});
