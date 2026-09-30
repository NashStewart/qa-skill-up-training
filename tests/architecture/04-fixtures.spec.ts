// Fixtures: a fixture prepares something a test needs and hands it over
// through the test's parameters, just like the built-in `page` fixture
// you've used since the beginning. A fixture can hand over an object (like
// `page`) or a function the test calls when it's ready.

// Command to run this exercise: SITE=toolshop npx playwright test tests/architecture/04-fixtures.spec.ts

import { test, expect } from './fixtures';

test.describe('Fixtures', () => {
  // loginAs comes from fixtures.ts. It navigates, fills in the form, clicks
  // Login, and confirms the account page loaded, all in one call.
  test('logs in as Jane Doe', async ({ loginAs, page }) => {
    await loginAs('janeDoe');

    await expect(page.getByRole('button', { name: 'Jane Doe' })).toBeVisible();
  });
});

// TODO: add a login fixture that takes an email and password, for logging
// in as users who aren't in the users object.
//
// 1. In fixtures.ts, follow the TODO comments to add the login fixture,
//    modeled on loginAs.
//
// 2. Add a new test inside the describe block above that uses your login
//    fixture to log in as Bob Smith (customer3@practicesoftwaretesting.com /
//    pass123) and asserts his name appears in the navigation menu.
//
// 3. Run this exercise and confirm both tests pass.
