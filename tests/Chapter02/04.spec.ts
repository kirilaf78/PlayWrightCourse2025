import { test, expect } from '@playwright/test';

test('Handling drop-down list', async ({ page }) => {
  await test.step('Go to url', async () => {
    await page.goto('https://www.facebook.com/');
    await page.getByRole('button', { name: 'Allow all cookies' }).click();
  });

  await test.step('Go to New Account page', async () => {
    await page.getByRole('button', { name: 'Create new account' }).click();
  });

  await test.step('Select a month', async () => {
    // Select drop-down using value
    await page.getByLabel('Month').selectOption('4');
    await page.getByLabel('Month').selectOption('Aug');
    await expect(page.locator('#month > option')).toHaveText(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
  });
});
