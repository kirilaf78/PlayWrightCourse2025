import { test, expect } from "@playwright/test";

test("Await pop-ups", async ({ page }) => {
  await test.step("Go to url", async () => {
    await page.goto(
      "https://www.selenium.dev/documentation/webdriver/interactions/alerts/"
    );
  });

  await test.step("Click the dialog button", async () => {
    page.once('dialog', dialog =>{
      dialog.accept();
      console.log(`The alert message is ${dialog.message()}`);
      
    })

    await page.getByText('See an example alert', { exact: true }).click()
  });

  //await expect(page).toHaveTitle('Finland vs Sweden - YouTube');
});
