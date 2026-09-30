// Authentication: logging in through the UI in every test is slow and
// repeats the same steps. Instead, log in once, save the browser's logged-in
// state to a file, and start each test from that file. Here, auth.setup.ts
// logs in through the API and saves the file before these tests run.

// Command to run this exercise: SITE=toolshop npx playwright test tests/architecture/07-authentication.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  // Every test in this block starts already logged in as Jane Doe.
  test.use({ storageState: 'playwright/.auth/jane.json' });

  test('opens the account page without logging in', async ({ page }) => {
    await page.goto('/account');

    await expect(page.getByRole('button', { name: 'Jane Doe' })).toBeVisible();
  });
});

// TODO: make the saved login work in Firefox too.
//
// 1. Read auth.setup.ts, then find the `setup` project in playwright.config.ts
//    and notice that the `chromium` project lists it under `dependencies`.
//
// 2. Delete the playwright/.auth folder, then run this exercise in Firefox
//    only. It fails, because nothing created the saved login file.
//      SITE=toolshop npx playwright test tests/architecture/07-authentication.spec.ts --project firefox
//
// 3. In playwright.config.ts, add `dependencies: ['setup']` to the firefox
//    project you created in the Browser Projects exercise.
//
// 4. Run the command from step 2 again and confirm it passes.
