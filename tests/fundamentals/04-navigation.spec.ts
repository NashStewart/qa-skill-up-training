// Navigation: page.goto() moves to a URL, and once you've navigated more
// than once, page.goBack() and page.goForward() move through that browser
// history — just like the back/forward buttons in a real browser.

// Command to run this exercise: npx playwright test tests/fundamentals/04-navigation.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('navigates back and forward through history', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');

    await page.goto('/practice/radio-checkbox');
    await expect(page).toHaveURL('/practice/radio-checkbox');

    await page.goBack();
    await expect(page).toHaveURL('/');

    // TODO: call page.goForward() below, then assert the URL is back to
    // '/practice/radio-checkbox'. Next navigate to a completely different route on
    // the QA Playground site and assert the URL is correct.
  });
});
