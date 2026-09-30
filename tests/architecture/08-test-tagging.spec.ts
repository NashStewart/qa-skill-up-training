// Test Tagging: a tag labels a test by its purpose, such as @smoke (quick
// checks that the app basically works) or @regression (deeper checks). The
// runner can then pick tests by tag instead of by file, so one command can
// run every smoke test across the whole suite.

// Command to run this exercise: SITE=toolshop npx playwright test tests/architecture/08-test-tagging.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Test Tagging', () => {
  test('homepage loads', { tag: '@smoke' }, async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');
  });

  test('navigation has a Contact link', { tag: '@regression' }, async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  // A test can have more than one tag.
  test('homepage has a Search button', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  });
});

// TODO: run tests by tag.
//
// 1. Run only the smoke tests in this file.
//      SITE=toolshop npx playwright test tests/architecture/08-test-tagging.spec.ts --grep @smoke
//
// 2. Run every test in this file except the smoke tests.
//      SITE=toolshop npx playwright test tests/architecture/08-test-tagging.spec.ts --grep-invert @smoke
//
// 3. Open 02-browser-projects.spec.ts and add a @smoke tag to its test.
//
// 4. Run every smoke test in the whole section. Notice there's no file path,
//    and the results include tests from more than one file.
//      SITE=toolshop npx playwright test --grep @smoke
