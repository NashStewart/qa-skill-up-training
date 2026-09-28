// Test Structure: test.describe() groups related tests together, and each
// test() inside it is a self-contained test case with its own name.

// Command to run this exercise: npx playwright test tests/fundamentals/02-test-structure.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Test Structure', () => {
  test('input fields page loads with correct URL', async ({ page }) => {
    await page.goto('/practice/input-fields');
    await expect(page).toHaveURL('/practice/input-fields');
  });

  // TODO: visit https://qaplayground.com/practice/radio-checkbox to see the
  // page you'll be testing. Then add a second test() inside this same
  // describe block that navigates there and asserts its URL, following
  // the same pattern as the test above.
});
