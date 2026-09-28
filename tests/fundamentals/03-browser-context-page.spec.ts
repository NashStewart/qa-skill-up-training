// Browser, Context, and Page: Playwright launches one Browser, which holds
// one or more Contexts (isolated sessions — separate cookies and storage,
// like a fresh incognito window), and each Context holds Pages (tabs). The
// `page` fixture you've been using since module 1 is one of these Pages.
// Every test() gets its own fresh Context automatically — that's why the
// two tests in the last module never interfered with each other.

// Command to run this exercise: npx playwright test tests/fundamentals/03-browser-context-page.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Browser, Context, and Page', () => {
  test('sets a cookie in this test context', async ({ page, context }) => {
    await page.goto('/');

    await context.addCookies([
      { name: 'note', value: 'hello', url: 'https://qaplayground.com/' },
    ]);
    const cookies = await context.cookies();

    expect(cookies.find((c) => c.name === 'note')).toBeTruthy();
  });

  // TODO: add a second test() below. Navigate to '/' again, then use
  // context.cookies() to check the cookie named 'note' isn't there — this
  // test gets its own fresh context, separate from the one above.
  //
  // You'll learn how to deliberately share a login session across tests
  // later, in Framework Architecture.
});
