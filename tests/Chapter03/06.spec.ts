import { test, expect } from '@playwright/test';

test('Visual page comparison', async ({ page }) => {
  await test.step('Go to url', async () => {
    await page.goto('https://github.com/login');
    await page.getByRole('button', { name: 'Accept' }).click();

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    await page
      .getByRole('textbox', { name: 'Username or email address' })
      .fill('playwright with typescript');
    await expect(page).toHaveScreenshot('GitHubLoginPage.png');
  });
});

test('Visual element comparison', async ({ page }) => {
  await test.step('Go to url', async () => {
    const loginElement = page.getByText(
      'Username or email address Password Forgot password? Sign in Or This browser or'
    );
    await page.goto('https://github.com/login');

    await expect(loginElement).toHaveScreenshot('LoginElement.png');

    await page.getByRole('button', { name: 'Accept' }).click();

    await page
      .getByRole('textbox', { name: 'Username or email address' })
      .fill('playwright with typescript');
    await expect(loginElement).toHaveScreenshot('LoginElement.png');
  });
});
