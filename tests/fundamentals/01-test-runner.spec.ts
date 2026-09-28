// Playwright Test Runner: `npx playwright test` discovers and runs test
// files, then reports each one as passed or failed. This exercise doesn't
// ask you to write any Playwright code yet — you're just learning to
// operate the runner itself, on one already-complete test below.

import { test, expect } from '@playwright/test';

test('QA Playground homepage has correct title', async ({ page }) => {
  await page.goto('/'); // navigates to the homepage — '/' resolves against baseURL in playwright.config.ts
  await expect(page).toHaveTitle('QA Playground — Practice Selenium, Playwright & Cypress'); // checks that the page's <title> tag matches
});

// TODO: visit https://qaplayground.com/ to see the site we'll be
// testing. Perform the following commands in your terminal:
//
// 1. Run every test in this section:
//      npx playwright test
//      
// 2. Run only this file:
//      npx playwright test tests/fundamentals/01-test-runner.spec.ts
//
// 3. Run this file, but switch the reporting to CLI rather than html.
//      npx playwright test tests/fundamentals/01-test-runner.spec.ts --reporter=line
//
// 4. Change the text 'QA Playground — Practice Selenium, Playwright & Cypress' on
//    line 10 to something incorrect. Re-run commands 1-3 to see what failing tests
//    look like. Make sure to change the text back so that the test passes afterward.
