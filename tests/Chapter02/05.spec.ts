import { test, expect } from '@playwright/test';

test('Handling IFrames, Drag & Drop elements in PlayWright', async ({
  page,
}) => {
  await test.step('Go to url', async () => {
    await page.goto('https://jqueryui.com/droppable/');
  });

  await test.step('Drag & Drop', async () => {
    const iframe = page.frameLocator('[class="demo-frame"]');
    const dragElement = iframe.locator('[id="draggable"]');
    const dropElement = iframe.locator('[id="droppable"]');

    await dragElement.dragTo(dropElement);
  });

});
