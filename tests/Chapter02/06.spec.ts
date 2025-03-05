import { test, expect } from '@playwright/test';

test('Mouse work', async ({ page }) => {
  await test.step('Go to url', async () => {
    await page.goto('https://finance.yahoo.com/');
    await page.getByRole('button', { name: 'Az összes elfogadása' }).click();
  });

  await test.step('Mouse work', async () => {
    //Left click
    // await page
    //   .locator('a')
    //   .filter({
    //     hasText: 'Trump says Japan, China cannot keep reducing currency value',
    //   })
    //   .click({ button: 'left' });
    //Middle click
    //     await page
    //   .locator('a')
    //   .filter({
    //     hasText: 'Trump says Japan, China cannot keep reducing currency value',
    //   })
    //   .click({ button: 'middle' });
    //Right click
    // await page
    //   .locator('a')
    //   .filter({
    //     hasText: 'Trump says Japan, China cannot keep reducing currency value',
    //   })
    //   .click({ button: 'right' });
    // Mouse hover
   
    //   await page
    //     .locator('#ybar-navigation')
    //     .getByRole('link', { name: 'News' })
    //     .hover();
        
        //double click
         await page
        .locator('#ybar-navigation')
        .getByRole('link', { name: 'News' })
        .dblclick();
  });

  //Mouse hover
  //     await test.step('Search with keywords', async () => {

  //   });

  //     await test.step('Search with keywords', async () => {

  //   });
});
