// Environment Management: the same tests often need to run against more than
// one copy of an app, such as prod and a test environment. Instead of
// hard-coding a URL, playwright.config.ts picks the baseURL from the ENV
// variable, so switching environments never means editing a test.
//
// Toolshop has a second environment with known bugs planted in it:
// https://with-bugs.practicesoftwaretesting.com (ENV=bugs). Run a test
// against both environments, and it will catch bugs that only exist in one.

// Command to run this exercise against prod: SITE=toolshop ENV=prod npx playwright test tests/architecture/06-environment-management.spec.ts
// Command to run this exercise against bugs: SITE=toolshop ENV=bugs npx playwright test tests/architecture/06-environment-management.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Environment Management', () => {
  test('navigation has a Contact link', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });
});

// TODO: catch a bug in the bugs environment.
//
// 1. Look at ENV and TOOLSHOP_ENVS in playwright.config.ts to see how the
//    environment is chosen.
//
// 2. Run this exercise against prod and confirm it passes.
//
// 3. Run it against bugs and watch it fail. Use your preferred debugging
//    method (VS Code debugger, Playwright Inspector, or Trace Viewer) to
//    find out exactly what's wrong on the page.
//
// There is nothing to fix in the test: it's correct, and the app is wrong.
// On a real project, this is when you'd submit a bug report. Because the bug
// is in a test environment and hasn't reached prod yet, it's urgent: escalate
// it so it gets fixed before the next deploy carries it to real users.
