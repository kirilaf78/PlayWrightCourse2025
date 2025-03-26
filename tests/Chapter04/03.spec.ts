import { test, expect } from '@playwright/test';

test('Await pop-ups', async ({ page }) => {
  await test.step('Click the alert button', async () => {
    await page.goto(
      'https://www.selenium.dev/documentation/webdriver/interactions/alerts/'
    );

    page.once('dialog', (dialog) => {
      dialog.accept();
      console.log(`Dialog type is ${dialog.type()}`);

      console.log(`The alert message is ${dialog.message()}`);
    });
    await page.getByText('See an example alert', { exact: true }).click();
  });

  await test.step('Click the confirm button', async () => {
    await page.goto(
      'https://www.selenium.dev/documentation/webdriver/interactions/alerts/'
    );

    page.once('dialog', (dialog) => {
      dialog.accept();
      console.log(`Dialog type is ${dialog.type()}`);

      console.log(`The confirm message is ${dialog.message()}`);
    });
    await page.getByText('See a sample confirm', { exact: true }).click();
  });

  await test.step('Click the prompt button', async () => {
    await page.goto(
      'https://www.selenium.dev/documentation/webdriver/interactions/alerts/'
    );

    page.once('dialog', async (dialog) => {
      await dialog.accept('playwright');
      console.log(`The prompt message is ${dialog.message()}`);
      console.log(`Dialog type is ${dialog.type()}`);
    });
    await page.getByText('See a sample prompt', { exact: true }).click();
  });
});
