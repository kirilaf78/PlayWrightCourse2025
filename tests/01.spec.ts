import { test, expect } from '@playwright/test';

test('GitHub negative test', async ({ page }) => {
  await test.step('Navigate to URL', async () => {
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
  });
  await test.step('Enter userName and password', async () => {
    await page
      .getByRole('textbox', { name: 'Username or email address' })
      .fill('some');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('1234');
  });

  await test.step('Click on sign in', async () => {
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });
  await test.step('Validate error message', async () => {
    await expect(page.getByRole('alert')).toContainText(
      'Incorrect username or password.'
    );
  });
});
