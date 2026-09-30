// Browser Projects: each entry in the `projects` list in playwright.config.ts
// is a named configuration the runner executes your tests under — most
// commonly, a different browser. Add a project and every matching test runs
// once per project, with no changes to the test code itself.

// Command to run this exercise: SITE=toolshop npx playwright test tests/architecture/02-browser-projects.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Browser Projects', () => {
  test('Toolshop homepage loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');
  });
});

// TODO: visit https://practicesoftwaretesting.com/ to see the site we'll be
// testing for the rest of this section. Then:
//
// 1. Run this exercise and notice which browser it runs in.
//      SITE=toolshop npx playwright test tests/architecture/02-browser-projects.spec.ts
//
// 2. In playwright.config.ts, add a `firefox` project to the `projects` list,
//    modeled on the `chromium` one (use devices['Desktop Firefox']).
//
// 3. Install the Firefox browser.
//      npx playwright install firefox
//
// 4. Re-run command 1 and notice the same test now runs once per browser.
//
// 5. Run this exercise in Firefox only.
//      SITE=toolshop npx playwright test tests/architecture/02-browser-projects.spec.ts --project firefox
//
// 6. Look at the `webkit` project's `testMatch` line in playwright.config.ts.
//    Why didn't this test run in WebKit in step 4?
