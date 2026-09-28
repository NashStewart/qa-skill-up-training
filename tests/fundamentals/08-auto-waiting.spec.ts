// Auto Waiting: most Playwright actions and assertions don't just check
// something once — they retry automatically until it's true or a timeout
// is reached. That's why you haven't needed a single manual sleep/wait so
// far. But that retry window has a limit, and sometimes you have to widen
// it yourself.

// Command to run this exercise: npx playwright test tests/fundamentals/08-auto-waiting.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Auto Waiting', () => {
  // TODO: change test.skip below to test, then run this exercise — it
  // will fail. Read the error: the progressText element only reads '100'
  // 6-10 seconds after clicking Download, and Playwright's default
  // assertion timeout is 5 seconds. Fix the assertion so it waits long
  // enough, then run it again to confirm it passes.
  test.skip('waits for the hidden element to appear', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/ProgressBar.html');

    const progressText = page.locator('.progressbar-text');
    await expect(progressText).toHaveText('');

    await page.getByRole('button', { name: 'Download' }).click();
    await expect(progressText).toHaveText('100');
  });
});
