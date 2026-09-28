// User Interactions: click(), fill(), and check() perform real actions on
// elements you've located — clicking links/buttons, typing into fields,
// toggling checkboxes.

// Command to run this exercise: npx playwright test tests/fundamentals/06-user-interactions.spec.ts

import { test, expect } from '@playwright/test';

test.describe('User Interactions', () => {
  test('check toggles a checkbox', async ({ page }) => {
    await page.goto('/practice/radio-checkbox');

    const termsCheckbox = page.getByRole('checkbox').first();
    const termsMessage = page.getByTestId('result-s01');

    await expect(termsCheckbox).not.toBeChecked(); // check baseline before interaction.
    await expect(termsMessage).toHaveText('Not checked');

    await termsCheckbox.check();

    await expect(termsCheckbox).toBeChecked();
    await expect(termsMessage).toHaveText('Checked ✓');
  });

  // TODO: this test is incomplete and currently skipped. Visit
  // https://qaplayground.com/bank/login and read the page — it tells
  // you the exact username and password to use for the Standard User. 
  // Fill in the missing steps below, then remove `.skip` 
  // (test.skip -> test) so it actually runs.
  test.skip('logs in successfully', async ({ page }) => {
    await page.goto('/bank/login');

    // TODO: assert the login page was reached.

    await page.getByRole('textbox', { name: 'username' }).fill('standard_user');

    // TODO: enter the password.

    const successMessage = page.getByText('Welcome back, Alex');
    await expect(successMessage).not.toBeVisible(); // check baseline before interaction.

    // TODO: click the login button.
    // TODO: assert URL changed to the dashboard page URL.

    await expect(successMessage).toBeVisible();
  });
});
