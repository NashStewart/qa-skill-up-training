// This file isn't a hands-on exercise like the ones before it — it's the
// shared fixture for the next three modules (Debugging basics, Playwright
// Inspector, Trace Viewer). Each of those is a separate .md file walking
// you through examining this same test with a different debugging tool.
// The test itself ships complete and passing; there's nothing to fill in.

// Command to run this file directly: npx playwright test tests/fundamentals/account-setup-form.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Account Setup Form', () => {
  test('fixes a password mismatch and succeeds', async ({ page }) => {
    await page.goto('/practice/forms');

    await page.locator('#password').fill('Secret123!');
    await page.locator('#confirmPassword').fill('Different456!');
    await page.getByTestId('checkbox-terms').check();
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByTestId('error-confirm-password')).toHaveText('Passwords do not match.');

    // Fix the mismatch and resubmit.
    await page.locator('#confirmPassword').fill('Secret123!');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByTestId('form-success-msg')).toBeVisible();
  });
});
