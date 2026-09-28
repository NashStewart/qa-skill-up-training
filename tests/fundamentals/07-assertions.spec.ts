// Assertions: expect() wraps a locator or page and checks something about
// it — visibility, text, value, count, and more. Most of these auto-retry
// until the condition is true or a timeout is reached (more on why in the
// next module).

// Command to run this exercise: npx playwright test tests/fundamentals/07-assertions.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Assertions', () => {
  // TODO: some of the lines below have been replaced with comments
  // describing what to check. Visit
  // https://qaplayground.com/practice/dropdowns, look at the page, and
  // write the missing line(s) so each comment's description is true. Then
  // remove test.skip (test.skip -> test) so the test actually runs.
  test.skip('exercises several assertions against the dropdown', async ({ page }) => {
    await page.goto('/practice/dropdowns');

    const countryDropdown = page.getByRole('combobox', { name: 'country' });
    await expect(countryDropdown).toBeVisible();

    const options = countryDropdown.getByRole('option');
    // TODO: assert options to have a count of 5.

    // TODO: assert the first option to have text 'Select Country'.
    // TODO: assert the 4th option to have the correct text (use .nth(3) to get the 4th option).

    await expect(countryDropdown).toHaveValue(''); // current value before selecting anything.

    await countryDropdown.selectOption('japan');
    // TODO: assert the countryDropdown to have the value of 'japan'.
  });
});
